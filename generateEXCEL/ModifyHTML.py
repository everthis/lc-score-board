file = open("index.html", "r") 
content = file.read()
file.close()

content = content.replace("Google-Logo","<img src='Img/Google.png' width=18 height=18>")
content = content.replace("Amazon-Logo","<img src='Img/Amazon.png' width=16 height=16>")
content = content.replace("Microsoft-Logo","<img src='Img/Microsoft.jpeg' width=16 height=16>")
content = content.replace("VMware-Logo","<img src='Img/VMware.jpeg' width=16 height=16>")
content = content.replace("Indeed-Logo","<img src='Img/Indeed.png' width=19 height=19>")
content = content.replace("Facebook-Logo","<img src='Img/Facebook.png' width=16 height=16>")
content = content.replace("AMD-Logo","<img src='Img/AMD.png' width=16 height=16>")
content = content.replace("Apple-Logo","<img src='Img/Apple.png' width=16 height=16>")
content = content.replace("Grab-Logo","<img src='Img/Grab.png' width=18 height=18>")
content = content.replace("PureStorage-Logo","<img src='Img/PureStorage.png' width=16 height=16>")
content = content.replace("Walmart-Logo","<img src='Img/Walmart.jpeg' width=16 height=16>")
content = content.replace("Twilio-Logo","<img src='Img/Twilio.png' width=16 height=16>")
content = content.replace("Arista-Logo","<img src='Img/Arista.jpeg' width=28 height=16>")
content = content.replace("ByteDance-Logo","<img src='Img/ByteDance.jpeg' width=30 height=16>")
content = content.replace("SnowFlake-Logo","<img src='Img/SnowFlake.png' width=22 height=16>")
content = content.replace("RedBook-Logo","<img src='Img/RedBook.png' width=18 height=18>")
content = content.replace("PocketGems-Logo","<img src='Img/PocketGems.png' width=18 height=18>")
content = content.replace("Schlumberger-Logo","<img src='Img/Schlumberger.jpg' width=40 height=16>")
content = content.replace("MathWorks-Logo","<img src='Img/MathWorks.gif' width=17 height=17>")
content = content.replace("LandingAI-Logo","<img src='Img/LandingAI.png' width=17 height=17>")
content = content.replace("UPenn-Logo","<img src='Img/UPenn.png' width=17 height=17>")
content = content.replace("Dataminr-Logo","<img src='Img/Dataminr.jpeg' width=17 height=17>")
content = content.replace("Palo-alto-Logo","<img src='Img/Palo-alto.png' width=20 height=20>")
content = content.replace("Pony-Logo","<img src='Img/Pony.png' width=30 height=10>")
content = content.replace("KeepTruckin-Logo","<img src='Img/KeepTruckin.png' width=40 height=20>")
content = content.replace("Reflexis-Logo","<img src='Img/Reflexis.jpeg' width=20 height=20>")
content = content.replace("Airbnb-Logo","<img src='Img/Airbnb.png' width=19 height=19>")
content = content.replace("Alibaba-Logo","<img src='Img/Alibaba.png' width=19 height=19>")
content = content.replace("DellEMC-Logo","<img src='Img/DellEMC.png' width=18 height=18>")
content = content.replace("Expedia-Logo","<img src='Img/Expedia.png' width=18 height=18>")
content = content.replace("Citi-Logo","<img src='Img/Citi.jpeg' width=22 height=16>")
content = content.replace("Petuum-Logo","<img src='Img/Petuum.jpeg' width=18 height=18>")
content = content.replace("Ebay-Logo","<img src='Img/Ebay.png' width=23 height=16>")
content = content.replace("DXC-Logo","<img src='Img/DXC.png' width=20 height=16>")
content = content.replace("Cruise-Logo","<img src='Img/Cruise.png' width=22 height=16>")


content = content.replace("curve-figure","<img src='Img/curve.png'>")

content = content.replace("<title></title>","<title>残酷刷题群</title>")

content = content.replace('<head>','<head><link rel="shortcut icon" type="image/x-icon" href="Img/icon.ico" />')


file = open("index.html","w")
file.write(content)
file.close()

 

