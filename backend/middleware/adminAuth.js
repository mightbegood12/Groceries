import jwt from "jsonwebtoken";
import { toast, Flip } from "react-toastify";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (
      decoded_token !==
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    toast.error(error);

    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default adminAuth;
