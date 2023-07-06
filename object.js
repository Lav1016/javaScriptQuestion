
const obj = {}
obj.name ="vikram"

console.log(obj.hasOwnProperty("name")) // if check property is not inherited

// role base code
const { where } = require("sequelize");




//  TODO:NEED TO WORK THIS API
// Middleware to check if user is a super admin
const Sytem_Administrator = async (req, res, next) => {
  const Userdata = await User.findOne({ where: { id: req.user.id } });

  if (Userdata.roleid) {
    const roleName = await role.findOne({ where: { id: Userdata.roleid } });
    if (roleName.role_Name === "Sytem Administrator") {
      return next();
    }
    return res.json({
      message: "You do not have permission to perform this action!",
    });
  }
};

const Rule_Creator = async (req, res, next) => {
  const Userdata = await User.findOne({ where: { id: req.user.id } });
  if (Userdata.roleid) {
    const roleName = await role.findOne({ where: { id: Userdata.roleid } });
    if (roleName.role_Name === "Rule Creator") {
      return next();
    }
    return res.json({
      message: "You do not have permission to perform this action!",
    });
  }
};

const Rule_Creator_limited = async (req, res, next) => {
  const Userdata = await User.findOne({ where: { id: req.user.id } });

  if (Userdata.roleid) {
    const roleName = await role.findOne({ where: { id: Userdata.roleid } });
    if (roleName.role_Name === "Rule Creator (limited)") {
      return next();
    }
    return res.json({
      message: "You do not have permission to perform this action!",
    });
  }
};

const Rule_Editor = async (req, res, next) => {
  const Userdata = await User.findOne({ where: { id: req.user.id } });
  if (Userdata.roleid) {
    const roleName = await role.findOne({ where: { id: Userdata.roleid } });
    if (roleName.role_Name === "Rule Editor") {
      return next();
    }
    return res.json({
      message: "You do not have permission to perform this action!",
    });
  }
};

const Claim_Scrubber = async (req, res, next) => {
  const Userdata = await User.findOne({ where: { id: req.user.id } });

  if (Userdata.roleid) {
    const roleName = await role.findOne({ where: { id: Userdata.roleid } });
    if (roleName.role_Name === "Claim Scrubber") {
      return next();
    }
    return res.json({
      message: "You do not have permission to perform this action!",
    });
  }
};

const restrictTo = (...roles) => {

  // console.log("roless", roles)
  return async (req, res, next) => {
    const roleName = await role.findOne({ where: { id: req.user.roleid } });
    if (!roles.includes(roleName.role_Name)) {
      return res.status(403).json({
        message: "You do not have permission to perform this action",
      });
    }
    next();
  };
};

module.exports = {
  Sytem_Administrator,
  Rule_Creator,
  Rule_Creator_limited,
  restrictTo,
  Rule_Editor,
  Claim_Scrubber,
};
