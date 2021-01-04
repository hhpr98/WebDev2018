/**
 * Created by trungquandev.com's author on 18/02/2020.
 * utils/mailer.js
 */
import nodeMailer from "nodemailer";

// Những thông tin dưới đây các bạn có thể ném nó vào biến môi trường env nhé.
// Vì để demo nên mình để các biến const ở đây.
const adminEmail = 'hddshopemailer@gmail.com'
const adminPassword = 'hdd123456!'
// Mình sử dụng host của google - gmail
const mailHost = 'smtp.gmail.com'
// 587 là một cổng tiêu chuẩn và phổ biến trong giao thức SMTP
const mailPort = 587

const Send = (to, subject, htmlContent) => {
  // Khởi tạo một thằng transporter object sử dụng chuẩn giao thức truyền tải SMTP với các thông tin cấu hình ở trên.
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, // nếu các bạn dùng port 465 (smtps) thì để true, còn lại hãy để false cho tất cả các port khác
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })

  const options = {
    from: adminEmail, // địa chỉ admin email bạn dùng để gửi
    to: to, // địa chỉ gửi đến
    subject: subject, // Tiêu đề của mail
    html: htmlContent // Phần nội dung mail mình sẽ dùng html thay vì thuần văn bản thông thường.
  }

  // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
  return transporter.sendMail(options)
}

// module.exports = {
//   sendMail: sendMail
// }

export const sendMail = async (req, res) => {
    try {
      // Lấy data truyền lên từ form phía client
      const to = "hdanh26041999@gmail.com";
      const subject = "test nodemail";
      const body = "day la noi dung";
      // Thực hiện gửi email
      await Send(to, subject, body)
      // Quá trình gửi email thành công thì gửi về thông báo success cho người dùng
      res.send('<h3>Your email has been sent successfully.</h3>')
    } catch (error) {
      // Nếu có lỗi thì log ra để kiểm tra và cũng gửi về client
      console.log(error)
      res.send(error)
    }
  }