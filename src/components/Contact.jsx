import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Typography, Box, Container, createTheme } from "@mui/material";
let theme = createTheme();


  
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sctlpnf",
        "template_t13nt79",
        form.current,
        "9TvmtH4EGx1HEcsip"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "50px" }} id="contact"  >
     
    <div className='py-10'>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>Contact Us </div>
      <div className='flex justify-center text-lg pt-5 z-20 text-center px-5'>My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
    </div>


        <Box
          sx={{
            margin: "auto",
          
            width: 500,
            display: "flex",
            justifyContent: "center",
            border: "2px solid #fff",
            flexDirection: "column",
            [theme.breakpoints.down("sm")]: {
              width: 270,
             marginTop: "5px",
            }
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "15px"
              }}
            >
              <label className="mt-4"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                style={{
                  // width: "100%",
                  color:"black",
                  height: "35px",
                  padding: "7px",
                  outline: "none",
                  borderRadius: "5px"
                }}
              />
            </Typography>
            <Typography
              sx={{
            
                display: "flex",
                flexDirection: "column",
                // textAlign: "center",
                margin: "15px"
                // width: "auto"
              }}
            >
              <label
               className="mt-4"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                style={{
                  color:'black',
                  height: "35px",
                  padding: "7px",
                  outline: "none",
                  borderRadius: "5px"
                }}
              />
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "15px"
                // border: "2px solid #fff",
              }}
            >
              <label
               className="mt-4"
              >
                Message
              </label>
              <textarea
                name="message"
                style={{
                    color:'black',
                  maxWidth: "100%",
                  minWidth: "90%",
                  width: "auto",
                  padding: "7px",
                  outline: "none",
                  minHeight: "100PX",
                  maxHeight: "100px",
                  borderRadius: "5px"
                }}
              />
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                width: 100,
                height: 100
              }}
            >
              <input
                type="submit"
                value="Send"
                style={{
                  background:'white',
                  color:'black',
                  height: 40,
                  padding: "7px",
                  outline: "none",
                  borderRadius: "5px"
                }}
              />
            </Typography>
          </form>
        </Box>
      </Container>
    </>
  );
};
export default Contact;
