import userModel from "../models/user.model.js";
import { generateGeminiResponse } from "../services/gemini.services.js";
import { buildPrompt } from "../utils/promptBuilder.js";

export const generateNotes = async (req, res) => {
  try {
    const {
      topic,
      classLevel,
      examType,
      revisionMode = false,
      includeDiagram = false,
    } = req.body;
    if (!topic) {
      return res.status(400).json({
        message: "Topic is required.",
        success: false,
      });
    }

    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(400).json({
        message: "User is not found.",
        success: false,
      });
    }

    if (user.credits < 10) {
      user.isCreditAvailable = false;
      await user.save();
      return res.status(403).json({
        message: "Insufficient credits.",
        success: false,
      });
    }

    const prompt = buildPrompt({
      topic,
      classLevel,
      examType,
      revisionMode,
      includeDiagram,
    });

    const aiResponse = await generateGeminiResponse(prompt);

    user.credits -= 10;
    if (user.credits <= 0) {
      user.isCreditAvailable = false;
    }
    await user.save();

    return res.status(200).json({
      data: aiResponse,
      creditsLeft: user.credits,
      message: "Notes Generated",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "AI Generation failed",
      message: error.message,
    });
  }
};
