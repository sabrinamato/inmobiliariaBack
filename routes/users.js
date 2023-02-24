const express = require("express");
const { registerUser, 
        login, 
        updateUser,                                                                                                                                        
        logout 
    } = require("../controllers/users");
const { verifyToken, TOKEN_SECRET } = require("../validators/verifyToken");
const router = express.Router();

router.post("/api/register", registerUser);
router.post("/api/login", verifyToken, login);
router.update("/api/updateUser", updateUser);
router.delete("/api/logout", logout);



module.exports = router;
