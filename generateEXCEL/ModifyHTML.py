file = open("index.html", "r") 
content = file.read()
file.close()

content = content.replace("Google-Logo","<img src='Img/Google.png' width=18 height=18>")
content = content.replace("Amazon-Logo","<img src='Img/Amazon.png' width=16 height=16>")
content = content.replace("Microsoft-Logo","<img src='Img/Microsoft.jpeg' width=16 height=16>")
content = content.replace("VMware-Logo","<img src='Img/VMware.jpeg' width=16 height=16>")
content = content.replace("Indeed-Logo","<img src='Img/Indeed.png' width=18 height=18>")
content = content.replace("Facebook-Logo","<img src='Img/Facebook.png' width=16 height=16>")
content = content.replace("AMD-Logo","<img src='Img/AMD.png' width=16 height=16>")
content = content.replace("Apple-Logo","<img src='Img/Apple.png' width=16 height=16>")
content = content.replace("Grab-Logo","<img src='Img/Grab.png' width=16 height=16>")
content = content.replace("PureStorage-Logo","<img src='Img/PureStorage.png' width=16 height=16>")
content = content.replace("Walmart-Logo","<img src='Img/Walmart.jpeg' width=16 height=16>")
content = content.replace("Twilio-Logo","<img src='Img/Twilio.png' width=16 height=16>")
content = content.replace("Arista-Logo","<img src='Img/Arista.jpeg' width=28 height=16>")
content = content.replace("ByteDance-Logo","<img src='Img/ByteDance.jpeg' width=30 height=16>")
content = content.replace("SnowFlake-Logo","<img src='Img/SnowFlake.png' width=22 height=16>")
content = content.replace("RedBook-Logo","<img src='Img/RedBook.png' width=18 height=18>")
content = content.replace("PocketGems-Logo","<img src='Img/PocketGems.png' width=18 height=18>")
content = content.replace("Schlumberger-Logo","<img src='Img/Schlumberger.jpg' width=40 height=16>")

content = content.replace("curve-figure","<img src='Img/curve.png'>")


file = open("index.html","w")
file.write(content)
file.close()

 

