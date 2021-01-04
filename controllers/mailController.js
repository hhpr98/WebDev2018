import mailer from "./mailer";

export const sendMailRouter = async (req, res) => {
    try {
      // Lấy data truyền lên từ form phía client
      // Thực hiện gửi email
      var to ="hdanh26041999@gmail.com";
      var subject = "asdasdasf";
      const body = "<h2>Dear <b style = 'color:red;'>44454612</b> !</h2>"
      + "<p>You must be entered your OTP to verify the transaction!<p>"
      + "<h4>Your code is: </h4>"
      + "<h3 style='color:white;background-color:black;width:200px;font-size:20px;'>zzzzzzzzzzzzzzz</h3>"
      + "<p>The OTP is expired in <b style='font-size:17px;'>5</b> minutes!<p>";
      await mailer.sendMail(to, subject, body)
      // Quá trình gửi email thành công thì gửi về thông báo success cho người dùng
      res.send('<h3>Your email has been sent successfully.</h3>')
    } catch (error) {
      // Nếu có lỗi thì log ra để kiểm tra và cũng gửi về client
      console.log(error)
      res.send(error)
    }
  }