
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}


function OpenMenu(){
    //open menu
    // document.getElementById('menu').className = 'MenuBarOpenAnim'

    //create menu text
    const MenuWithText = '<p class="MenuItem">🖥️</p><a href="google.com" id="MenuText1" class="MenuCloseText">Projects</a><p class="MenuItem">📁</p><a href="google.com" id="MenuText2" class="MenuCloseText">About me</a>'
    
    // <p class="MenuItem">🖥️</p>
    // <a href="google.com" id="MenuText1" class="MenuCloseText">Projects</a>
    // <p class="MenuItem">📁</p>
    // <a href="google.com" id="MenuText2" class="MenuCloseText">About me</a>
    
    document.getElementById('menu').innerHTML = MenuWithText

    //js wtf
    // document.getElementsByClassName('MenuCloseText').className = 'MenuOpenText'

    //open preview text
    document.getElementById('MenuText1').className = 'MenuOpenText'
    document.getElementById('MenuText2').className = 'MenuOpenText'
}

async function CloseMenu(){
    //close menu
    // document.getElementById('menu').className = 'MenuBarCloseAnim'

    //close preview text
    document.getElementById('MenuText1').className = 'MenuCloseText'
    document.getElementById('MenuText2').className = 'MenuCloseText'

    //wait for animation to finish
    await sleep(150);

    //delete menu text
    const MenuWithoutText = '<p class="MenuItem">🖥️</p><p class="MenuItem">📁</p>'
    document.getElementById('menu').innerHTML = MenuWithoutText
}



//loading animation

window.onload = LoadPage();
async function LoadPage(){
    console.log('anima call')

    await sleep(1000);

    document.getElementById('loadingPage').className = 'loadingPageAnimOpen'

    document.getElementById('loadingText').remove();

    await sleep(1000);

    document.getElementById('loadingPage').remove();
}

