const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
// User Routes
router.post("/signup", (req, res) => {
  console.log("signup user");
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  // Implement admin signup logic
  User.create({
    username,
    password,
  })
    .then((response) => {
      if (response)
        res.status(200).json({
          message: "User created successfully",
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something is wrong",
      });
    });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne(
      {
        username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
    res.json({
      message: "Course purchased successfully",
    });
  } catch (error) {
    console.error("error purchasing course for the user", error);
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({
      username: req.headers.username,
    });

    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });

    res.json({
      courses: courses,
    });
  } catch (error) {
    console.error("error purchasing course for the user", error);
  }
});

module.exports = router;
