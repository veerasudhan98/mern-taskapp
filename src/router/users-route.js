const express = require("express");
const User = require("../model/users");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");

const router = new express.Router();

router.post("/users", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: "please enter required fields" });
    }

    try {
        const user = await User.findOne({ email });
        if (user) throw Error("User already exists");

        const newUser = new User(req.body);

        await newUser.save();

        const token = await newUser.generateAuthToken();

        res.status(201).send({ newUser, token });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.post("/users/login", async (req, res) => {
    // const user = await User.findByCredentials(
    //     req.body.email,
    //     req.body.password
    // );
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return alert("Please enter the fields");
        }

        const user = await User.findOne({ email });
        if (!user) throw Error("User Does not exist");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error("Invalid password");

        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});
router.post("/users/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token;
        });
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
});
router.get("/users/me", auth, async (req, res, next) => {
    res.send(req.user);
});

router.delete("/users/me", auth, async (req, res) => {
    try {
        await req.user.remove();

        res.send(req.user);
    } catch (e) {
        res.status(500).send();
    }
});

router.patch("/users/me", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password", "age"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
    }

    try {
        updates.forEach((update) => (req.user[update] = req.body[update]));
        await req.user.save();
        res.send(req.user);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
