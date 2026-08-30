import {analyzeSupportRequest} from "../services/aiService.js";

import SupportRequest from "../models/supportRequest.js";


export const analyzeRequest = async (req, res, next) => {

  try {

    const {
      name,
      email,
      phone,
      supportType,
      message
    } = req.body;




    if (
      !name ||
      !email ||
      !phone ||
      !supportType ||
      !message
    ) {

      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields."
      });

    }


    // AI analysis

    const analysis =
      await analyzeSupportRequest({
        name,
        supportType,
        message
      });


    // Save request in MongoDB

    const supportRequest =
      await SupportRequest.create({

        name,
        email,
        phone,
        supportType,
        message,

        aiSummary:
          analysis.summary,

        priority:
          analysis.priority,

        suggestedAction:
          analysis.suggestedAction

      });


    // Send response to frontend

    return res.status(201).json({

      success: true,

      data: {

        id: supportRequest._id,

        name:
          supportRequest.name,

        supportType:
          supportRequest.supportType,

        summary:
          supportRequest.aiSummary,

        priority:
          supportRequest.priority,

        suggestedAction:
          supportRequest.suggestedAction

      }

    });

  } catch (error) {

    console.error(
      "Support request error:",
      error.message
    );

    next(error);

  }

};