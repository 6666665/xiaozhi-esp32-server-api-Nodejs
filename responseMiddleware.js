
const responseMiddleware = (req, res, next) => {
    // 成功响应方法
    res.success = (data, msg = 'sucess') => {
      res.status(200).json({
        code: 0,
        msg,
        data,
        timestamp: Date.now()
      });
    };
  
    // 失败响应方法
    res.error = (code = 500, msg = 'errpr', errors = null) => {
      res.status(code).json({
        code,
        msg,
        errors,
        timestamp: Date.now()
      });
    };
  
    next();
  };
  
  module.exports = responseMiddleware;
  