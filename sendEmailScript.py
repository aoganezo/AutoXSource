import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
 
 
fromaddr = "piwowarczykpatrick@gmail.com"
toaddr = "arthur.oganezov@gmail.com"
msg = MIMEMultipart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "SUBJECT OF THE MAIL"
 
body = "This is a message sent via Python. :)"
msg.attach(MIMEText(body, 'plain'))
 
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
#server.login(fromaddr, os.environ["MY_SECRET"])
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)
server.quit()
