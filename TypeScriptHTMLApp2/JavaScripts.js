
function mainSite() {
    $('#container').empty();

    /*var menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    var ul1 = document.createElement('ul');
    var li1 = document.createElement('li');
    var menutext = document.createTextNode('Menu');
    menu.appendChild(ul1);
    ul1.appendChild(li1);
    menu.appendChild(menutext);

    var nav = document.createElement('nav');
    var ulMenu = document.createElement('ul');
    var liHem = document.createElement('li');
    var liProdukter = document.createElement('li');
    var liKontakt = document.createElement('li');
    var liKundvagn = document.createElement('li');
    var liConnect = document.createElement('li');

    var aHem = document.createElement('a');
    aHem.href = "#headt";
    aHem.setAttribute('class', 'active');
    aHem.title = "StartSida";
   
    var aHemText = document.createTextNode('Home');
    aHem.appendChild(aHemText);

    var aProdukter = document.createElement('a');
    aProdukter.href = "#main";
    aProdukter.title = "Produkter";
   
    var aProdukterText = document.createTextNode('About me');
    aProdukter.appendChild(aProdukterText);

    var aKontakt = document.createElement('a');
    aKontakt.href = "#devices";
    aKontakt.title = "Kontakt";
  
    var aKontaktText = document.createTextNode('Services');
    aKontakt.appendChild(aKontaktText);

    var aKundvagn = document.createElement('a');
    aKundvagn.href = "#blog";
    aKundvagn.title = "kundvagn";
    
    var aKundvagnText = document.createTextNode('Blog');
    aKundvagn.appendChild(aKundvagnText);

    var aConnect = document.createElement('a');
    aConnect.
    aConnect.href = "#footer";
    aConnect.title = "kundvagn";
   
    

    var aConnectext = document.createTextNode('Connect with me');
    aConnect.appendChild(aConnectext);



    menu.appendChild(nav);
    nav.appendChild(ulMenu);

    ulMenu.appendChild(liHem);
    liHem.appendChild(aHem);

    ulMenu.appendChild(liProdukter);
    liProdukter.appendChild(aProdukter);

    ulMenu.appendChild(liKontakt);
    liKontakt.appendChild(aKontakt);

    ulMenu.appendChild(liKundvagn);
    liKundvagn.appendChild(aKundvagn);

    ulMenu.appendChild(liConnect);
    liConnect.appendChild(aConnect);
    */

    //variabler som kommer användas fler än engång
    var br = document.createElement('br');
    //skriver ut html koden för header
    var header = document.createElement('div');
    header.setAttribute('id', 'headt');
    header.style.maxWidth = "100%";
    
   
    var jcalogo = document.createElement('div');
    jcalogo.setAttribute('id', 'jcaloggan');
   
    var jca = document.createElement('img');
    jca.src = "logojca1.png";
    jca.alt = "logga";
    jca.style.maxWidth = "100%";
    jca.style.height = "auto";
    jca.style.display ="inline-block"
    header.appendChild(jcalogo);
    jcalogo.appendChild(jca);
   
 
  
    var headertextdiv = document.createElement('div');
    headertextdiv.setAttribute('id', 'textdiver');
    var headerlogo = document.createElement('p');
      headerlogo.style.textAlign = "center";
    headerlogo.style.fontFamily = "Montserrat";
    headerlogo.style.fontSize = "3em";
    headerlogo.style.color = "#fff";
  
    var headertext = document.createTextNode("Jonatan Camacho Andersson");
   
    header.appendChild(headertextdiv);
    headertextdiv.appendChild(headerlogo);
    
    headerlogo.appendChild(headertext);
   
    var headerlogo1 = document.createElement('p');
    headerlogo1.style.textAlign = "center";
    headerlogo1.style.fontFamily = "Montserrat";
    headerlogo1.style.fontSize = "2em";
    headerlogo1.style.color = "#fff";
    headerlogo1.style.paddingBottom = "20%";
    var headertext1 = document.createTextNode("Design & Code ");

    header.appendChild(headertextdiv);
    headertextdiv.appendChild(headerlogo1);

    headerlogo1.appendChild(headertext1);
   
    //slut header

    //skriver ut html koden för menyn

    //slut kod för menyn */

    //lägger till kod i main för framsidan
    
        var main = document.createElement('div');
        main.setAttribute('id', 'main');
        main.id = "main";


        main.appendChild(br);
        main.appendChild(br);

        var egobild = document.createElement('div');
        egobild.setAttribute('id', 'Jonatan');

        var imgEgo = document.createElement('img');
        imgEgo.src = "jonatan.jpg";
        imgEgo.alt = "köp kattmat";
        imgEgo.title = "köp kattmat";
        imgEgo.style.maxWidth = "100%";
        imgEgo.style.height = "auto";
        egobild.appendChild(imgEgo);

        var egotext = document.createElement('div');
        egotext.setAttribute('id', 'egotext');

        var metext = document.createElement('p');
        metext.style.textAlign = "center";
        metext.style.fontFamily = "Montserrat";
        metext.style.fontSize = "3em";
        metext.style.fontStyle = "bold";
        metext.style.color = "#000";
        metext.style.paddingTop = "1%";
        var h1Text = document.createTextNode('About me.');
        egotext.appendChild(metext);
        metext.appendChild(h1Text);

        var metext1 = document.createElement('p');
        metext1.style.textAlign = "center";
        metext1.style.fontFamily = "Montserrat";
        metext1.style.fontSize = "1em";
        metext1.style.fontStyle = "bold";
        metext1.style.color = "#000";
        metext1.style.paddingTop = "2%";
        var h2Text = document.createTextNode('Operates in Sweden; Swedish mom , Spanish dad.')
        egotext.appendChild(metext1);
        metext1.appendChild(h2Text);

        var metext2 = document.createElement('p');
        metext2.style.textAlign = "center";
        metext2.style.fontFamily = "Montserrat";
        metext2.style.fontSize = "1em";
        metext2.style.fontStyle = "bold";
        metext2.style.color = "#000";
        var h3Text = document.createTextNode(' Bacherlor degree in computer science, no working experience with design or coding.')
        egotext.appendChild(metext2);
        metext2.appendChild(h3Text);

        var metext3 = document.createElement('p');
        metext3.style.textAlign = "center";
        metext3.style.fontFamily = "Montserrat";
        metext3.style.fontSize = "1em";
        metext3.style.fontStyle = "bold";
        metext3.style.color = "#000";
        var h4Text = document.createTextNode('Self taught. Enjoys making my girlfriend pissed off.');
        egotext.appendChild(metext3);
        metext3.appendChild(h4Text);



        main.appendChild(egobild);
        main.appendChild(metext);
        main.appendChild(metext1);
        main.appendChild(metext2);
        main.appendChild(metext3);
  
        var devices = document.createElement('div');
        devices.setAttribute('id', 'devices');
        var devicesa = document.createElement('a');
        devicesa.href = "#";
        devicesa.titel = "devices";
        devices.appendChild(devicesa);

        var devicetext1 = document.createElement('div');
        devicetext1.setAttribute('id', 'devicetext1');

        var h1devices = document.createTextNode('Devices');
        devicetext1.appendChild(h1devices);

        var devicetext2 = document.createElement('div');
        devicetext2.setAttribute('id', 'devicetext2');

        var h2device = document.createTextNode('I develop in');
        devicetext2.appendChild(h2device);

        devices.appendChild(devicetext1);
        devices.appendChild(devicetext2);

        //devicetext
        var devImg1 = document.createElement('div');
        devImg1.setAttribute('id', 'imgDev1');
        var Image1dev = document.createElement('img');
        Image1dev.src = "iMac.png";
        Image1dev.alt = "katter";
        Image1dev.style.maxWidth = "100%";
        Image1dev.style.height = "auto";

        devices.appendChild(devImg1);
        devImg1.appendChild(Image1dev);
        // Device 1

        var devImg2 = document.createElement('div');
        devImg2.setAttribute('id', 'imgDev2');
        var Image2dev = document.createElement('img');
        Image2dev.src = "iphone.png";
        Image2dev.alt = "katter";
        Image2dev.style.maxWidth = "100%";
        Image2dev.style.height = "auto";

        devices.appendChild(devImg2);
        devImg2.appendChild(Image2dev);
        // Device 2

        var devImg3 = document.createElement('div');
        devImg3.setAttribute('id', 'imgDev3');
        var Image3dev = document.createElement('img');
        Image3dev.src = "ipad.png";
        Image3dev.alt = "katter";
        Image3dev.style.maxWidth = "100%";
        Image3dev.style.height = "auto";

        devices.appendChild(devImg3);
        devImg3.appendChild(Image3dev);
        //device 3

        //slutkommanter Devices 

        // Software
        var software = document.createElement('div');
        software.setAttribute('id', 'software');

        //Text

        var softwaretext1 = document.createElement('div');
        softwaretext1.setAttribute('id', 'softwaretext1');

        var h1software = document.createTextNode('Software');
        softwaretext1.appendChild(h1software);

        var softwaretext2 = document.createElement('div');
        softwaretext2.setAttribute('id', 'softwaretext2');

        var h2software = document.createTextNode('I use');
        softwaretext2.appendChild(h2software);

        software.appendChild(softwaretext1);
        software.appendChild(softwaretext2);

        //Software 1 
        var sofImg1 = document.createElement('div');
        sofImg1.setAttribute('id', 'imgSof1');

        var Image1sof = document.createElement('img');
        Image1sof.src = "Ai.png";
        Image1sof.alt = "katter";
        Image1sof.style.maxWidth = "100%";
        Image1sof.style.height = "auto";

        software.appendChild(sofImg1);
        sofImg1.appendChild(Image1sof);



        //Software 2

        var sofImg2 = document.createElement('div');
        sofImg2.setAttribute('id', 'imgSof2');

        var Image2sof = document.createElement('img');
        Image2sof.src = "visual.png";
        Image2sof.alt = "katter";
        Image2sof.style.maxWidth = "100%";
        Image2sof.style.height = "auto";

        software.appendChild(sofImg2);
        sofImg2.appendChild(Image2sof);

        //Software 3

        var sofImg3 = document.createElement('div');
        sofImg3.setAttribute('id', 'imgSof3');

        var Image3sof = document.createElement('img');
        Image3sof.src = "git.png";
        Image3sof.alt = "katter";
        Image3sof.style.maxWidth = "100%";
        Image3sof.style.height = "auto";

        software.appendChild(sofImg3);
        sofImg3.appendChild(Image3sof);

        //Skills 1
        var skills = document.createElement('div');
        skills.setAttribute('id', 'skills');

        var skillsdiv1 = document.createElement('div');
        skillsdiv1.setAttribute('id', 'skillstext1');

        var h1skills = document.createTextNode('Skills');
        skillsdiv1.appendChild(h1skills);



        //Skills 
        var skillsdiv2 = document.createElement('div');
        skillsdiv2.setAttribute('id', 'skillstext2');

        var h2skills = document.createTextNode('I obtain');
        skillsdiv2.appendChild(h2skills);

        skills.appendChild(skillsdiv1)
        skills.appendChild(skillsdiv2)
    
    //Blog

    var blog = document.createElement('div');
    blog.setAttribute('id', 'blog');

    var blogtitel = document.createElement('div');
    blogtitel.setAttribute('id', 'blogtitel');

    var blogtext = document.createTextNode('Blog');
    blogtitel.appendChild(blogtext);

    blog.appendChild(blogtitel)




    //footer
    var footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    //footertext
    var footerText = document.createElement('div');
    footerText.setAttribute('id', 'foottext');

    var fText = document.createElement('p');
   
   
    var Fmsg = document.createTextNode('Connect with me');
    footer.appendChild(footerText);
    footerText.appendChild(fText);
    fText.appendChild(Fmsg);

    //bild 2
    var bFooter = document.createElement('div');
    bFooter.setAttribute('id', 'imgfooterb');
    var abFooter = document.createElement('a');
    abFooter.href = "https://www.facebook.com/jonatan.c.andersson.3";
    var imgbFooter = document.createElement('img');
    imgbFooter.src = "fb.png";
    imgbFooter.id = "Facebook";
    imgbFooter.style.maxWidth = "100%";
    imgbFooter.style.height = "auto";

    footer.appendChild(bFooter);
    bFooter.appendChild(abFooter);
    abFooter.appendChild(imgbFooter);

  
    // bild1
    var pFooter3 = document.createElement('div');
    pFooter3.setAttribute('id', 'imgfooter3');
    var apFooter3 = document.createElement('a');
    apFooter3.href = "https://instagram.com/camachojonatan";
    var imgFooter3 = document.createElement('img');
    imgFooter3.src = "insta.png";
    imgFooter3.id = "Instagram";
    imgFooter3.style.maxWidth = "100%";
    imgFooter3.style.height = "auto";

    footer.appendChild(pFooter3);
    pFooter3.appendChild(apFooter3);
    apFooter3.appendChild(imgFooter3);

      //bild3
     
    var pFooter = document.createElement('div');
    pFooter.setAttribute('id', 'imgfooter');
    var apFooter = document.createElement('a');
    apFooter.href = "https://twitter.com/jonatancamacho";
    var imgFooter = document.createElement('img');
    imgFooter.src = "twitter.png";
    imgFooter.id = "Twitter";
    imgFooter.style.maxWidth = "100%";
    imgFooter.style.height = "auto";
 
    footer.appendChild(pFooter);
    pFooter.appendChild(apFooter);
    apFooter.appendChild(imgFooter);

    //bild4



  /* function showHover(img) {
        if (img) {
            img.src = 'follo.png';
        }
    }
    function showNormal(img) {
        if (img) {
            img.src = 'twitter.png';
        }
    }

    $(document).ready(function () {
        $('#bajs').mouseover(function () {
            showHover(this);
        }).mouseout(function () {
            showNormal(this);
        });

       
    });/*
    
    //slut kod för footern*/
    //  document.getElementById('container').appendChild(menu);

    //jquery
    jQuery(document).ready(function () {

        jQuery(".menu-trigger").click(function () {

            jQuery(".nav-menu").slideToggle(400, function () {
                jQuery(this).toggleClass("nav-expanded").css('display', '');
            });

        });

    });

   // document.getElementById('container').appendChild(menu);
    document.getElementById('container').appendChild(header);
    document.getElementById('container').appendChild(main);
    document.getElementById('container').appendChild(devices);
    document.getElementById('container').appendChild(software);
    document.getElementById('container').appendChild(skills);
    document.getElementById('container').appendChild(blog);
    document.getElementById('container').appendChild(footer);
}

