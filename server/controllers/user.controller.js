import userModel from "../models/user.model.js";

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "Current user is not found.",
      });
    }
    return res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: `getCurrentUser error ${error}`,
      success: false,
    });
  }
};
