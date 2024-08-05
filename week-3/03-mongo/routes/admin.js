const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // Implement admin signup logic
  Admin.create({
    username,
    password,
  })
    .then((response) => {
      if (response)
        res.status(200).json({
          message: "Admin created successfully",
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something is wrong",
      });
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const courseId = await Course.create({
      title,
      description,
      price,
      imageLink,
    });
    res.json({
      message: "Course created successfully",
      courseId: courseId._id,
    });
  } catch (error) {
    console.error("Something went wrong creating course for Admin", error);
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

module.exports = router;
