// Main JS 

$(document).ready(function () {

     // Select active color grid
     $(".equel-grid").click(function () {
        // Select all list items
        var listItems = $(".equel-grid");
        // Remove 'active' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active-grid");
        }
        // Add 'active' tag for currently selected item
        this.classList.add("active-grid");
    });

    // Select active color color button
    $(".color-btn").click(function () {
        // Select all list items
        var listItems = $(".color-btn");
        // Remove 'active' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active-color");
        }
        // Add 'active' tag for currently selected item
        this.classList.add("active-color");
    });

    // Select active color size button
    $(".size-btn").click(function () {
        // Select all list items
        var listItems = $(".size-btn");
        // Remove 'active' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active-color");
        }
        // Add 'active' tag for currently selected item
        this.classList.add("active-color");
    });

    // AR close button 
    $('#close-model').click(function () {
        $('#imgSize').hide("fast");
        $('.ar-visible').addClass("d-none")
        document.getElementById("imgSize").removeAttribute("src");
         // When click proceed button show loading
         document.getElementsByClassName("loader-new")[0].style.display = "block";;
         document.getElementById("overlayer").style.display = "block";
        // Hide loading setimeout
        setTimeout(function() { 
         document.getElementsByClassName("loader-new")[0].style.display = "none";;  
         document.getElementById("overlayer").style.display = "none";
         }, 4000);
        // once close AR button asign this pages
        
        location.reload(true);
      });
      //Toggle fullscree
      $(".chat-bot-icon").click(function (e) {
        $(this).children('.animate-img').toggleClass('hide');
        $(this).children('span').toggleClass('hide');
        $(this).children('svg').toggleClass('animate');
        $('.chat-screen').toggleClass('show-chat');
      });

         //model show
      $("#vectorGlb").click(function () {
        $('#modelPopup').modal('show')
      });

       //AR Proceed button click event triggered
      $("#ar-button").click(function (e) {
        document.getElementById("imgSize").setAttribute("src", "./img/glb/613500_Thule_Vector_Alpine_HP_V1_Pos0.glb");
        $("#hide-btn-main").css("display", "block");
        $("#hide-btn-main").css("opacity", "1");
        $("#imgSize").css("opacity", "1");
        $(".rounded-circle-btn").css("display", "block");
        $('.ar-visible').removeClass("d-none")
        document.getElementById("imgSize").style.height = "42px"
      });
        if (window.location.pathname == "./vector.html") {
          $("#hide-btn-main").css("display", "block");
          $("#imgSize").css("opactiy", "0");
          document.getElementById("imgSize").removeAttribute("src");
          window.location.reload(true)
        } else {
          $("#hide-btn-main").css("display", "none");
          $("#imgSize").css("height", "42px");
          document.getElementById("imgSize").removeAttribute("src");
        }
});

/**
 * Toogle section AR Inside button
 */
$('#toggle').click(function (event) {
    event.stopPropagation();
    $(this).toggleClass('on');
    $('#menu').slideToggle().addClass('open');
});
$('#menu').removeClass('open');

$(document).on("click", function () {
    $("#menu").slideUp();
});



const modelViewerImage = document.querySelector("model-viewer#imgSize");
var animationListValues = "pos45";
var ios = false;
function checkIos() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    if (iosPlatforms.indexOf(platform) !== -1) {
        ios = true;
    }
}
checkIos()

var animationListValues = "pos45";
if (ios == true) {
    animationListValues = "pos45";
}

// Sedan car Animation
function sedanAnimation() {
    animationListValues = "pos45"
    if (ios == true) {
        animationListValues = "pos45"
        modelViewerImage.animationName = animationListValues
    }
}

// hatchback animation
function hatchback() {
    animationListValues = "pos45"
    if (ios == true) {
        animationListValues = "pos45"
        modelViewerImage.animationName = animationListValues
    }
}

// estateAnimation animation
function estateAnimation() {
    animationListValues = "pos50"
    if (ios == true) {
        animationListValues = "pos50"
        modelViewerImage.animationName = animationListValues
    }
}

// fullSuvAnimation animation
function fullSuvAnimation() {
    animationListValues = "pos65"
    if (ios == true) {
        animationListValues = "pos65"
        modelViewerImage.animationName = animationListValues
    }
}

// midSizeSuvAnimation animation
function midSizeSuvAnimation() {
    animationListValues = "pos60"
    if (ios == true) {
        animationListValues = "pos60"
        modelViewerImage.animationName = animationListValues
    }
}
// Without car animation
function withoutcarAnimation() {
    animationListValues = "pos1"
    if (ios == true) {
        modelViewerImage.animationName = animationListValues
    }
}

// Animation List 
var animationList =
    [
        "pos40",
        "pos45",
        "pos50",
        "pos60",
        "pos65",
        "pos70",
        "pos75",
        "pos80",
        "pos85",
        "pos90",
        "pos95",
        "pos100",
    ]
var downArrow = document.getElementById('previousAnimationn');
var upArrow = document.getElementById('nextAnimation');

// Click Next Animation Item 
upArrow.addEventListener('click', function () {
    if (upArrow.disabled == false) {
        displayItem(modelViewer.animationName = animationList[animationList.indexOf(animationListValues) + 1]);
        console.log(modelViewer.animationName)
        animationListValues = animationList[animationList.indexOf(animationListValues) + 1];
        displayItem(); // Animation List Displayed
    }
});
// Click previous Animation Item
downArrow.addEventListener('click', function () {
    if (downArrow.disabled == false) {
        displayItem(modelViewer.animationName = animationList[animationList.indexOf(animationListValues) - 1]);
        console.log(modelViewer.animationName)
        animationListValues = animationList[animationList.indexOf(animationListValues) - 1];
        displayItem(); // Animation List Displayed
    }
});
// Disbled last Previous Item
function displayItem() {
    if (ios == false) {
        downArrow.disabled = animationList.indexOf(animationListValues) <= 1;
    }
    downArrow.disabled = animationList.indexOf(animationListValues) >= animationList.length - 1;
}
// Proceed Button detect
$("#ar-button").click(function () {
    if (ios == false) {
        modelViewerImage.animationName = animationListValues
        $('body').removeClass("modal-open").addClass('overflow-auto');
        $('.modal').removeClass('show')
        $('.modal-backdrop').remove()
    }
    if (ios == true) {
        $('#exampleModal').modal('hide')
    }
    displayItem();
    // Call animation up and down 
    // When click proceed button show loading
    document.getElementsByClassName("loader-new")[0].style.display = "block";;
    document.getElementById("overlayer").style.display = "block";
    // Hide loading setimeout
    setTimeout(function () {
        document.getElementsByClassName("loader-new")[0].style.display = "none";;
        document.getElementById("overlayer").style.display = "none";
    }, 4000);
});

// AR Status updated the session-started change the animation POS 0
document.querySelector("#imgSize").addEventListener('ar-status', (event) => {
    if (event.detail.status === 'session-started') {
        modelViewerImage.animationName = "None"
    }
    // AR Status updated the object placed change the model
    if (event.detail.status === 'object-placed') {
        modelViewerImage.animationName = animationListValues
    }
});

const modelViewer = document.getElementById("imgSize");
var animationName = modelViewer.animationName;
// Change GLB
const modelChangeGlb = document.querySelector("model-viewer#imgSize");
function sizeAlpine() {
    modelChangeGlb.src = "img/glb/613500_Thule_Vector_Alpine_HP_V1.glb";
    console.log(modelChangeGlb.src)
}

// Scale fixed and lock & unlock 
function dyanmicChangeAttr() {
    var arScale = document.querySelector("#imgSize");
    if ($('#imgSize').attr('ar-scale') == 'fixed') {
        arScale.setAttribute("ar-scale", "auto");
        $("#dynamicChange").attr("value", "UnLock Scale")
        // unlock scale
    } else {
        arScale.setAttribute("ar-scale", "fixed");
        $("#dynamicChange").attr("value", "Lock Scale")
        // lock scale
    }
}
// Zoom  disable 
function disableCamera() {
    var camera = document.querySelector("#animationSclae");
    camera.setAttribute("disable-zoom", "auto");
    $("#enableZoom").addClass("btn-success")
    $("#disableZoom").removeClass("btn-success")
}

// Zoom  enable 
function enableCamera() {
    var cameratwo = document.querySelector("#animationSclae");
    cameratwo.removeAttribute("disable-zoom");
    $("#disableZoom").addClass("btn-success")
    $("#enableZoom").removeClass("btn-success")
}

// AR Scale LockButton
function onChangeScaleLock() {
    var arScale = document.querySelector("#sceneViewer");
    if (arScale == "ar-scale", "auto") {
        arScale.setAttribute("ar-scale", "fixed");
        $('#arButton1').addClass('btn-success')
        $('#arButton').removeClass('btn-success')
    }
}
// AR Scale Unlock Button
function onChangeScaleUnlock() {
    var arScale = document.querySelector("#sceneViewer");
    if (arScale == "ar-scale", "fixed") {
        arScale.setAttribute("ar-scale", "auto");
        $('#arButton').addClass('btn-success')
        $('#arButton1').removeClass('btn-success')
    }
}

// Mobile button show toggle menu
$('#show-toggle').click(function () {
    $('.hide-mobile').slideToggle("slow");
});

 // Color Change texture
 const modelViewerTexture = document.querySelector("model-viewer#imgSize");
 modelViewerTexture.addEventListener("load", (ev) => {
   let material = modelViewerTexture.model.materials[1];
   let applyPBRTexture = (channel, event) => {
     material.pbrMetallicRoughness[channel].texture.source.setURI(event.target.value);
   }
   document.querySelector('#colorChangeVariant').addEventListener('click', (event) => {
     applyPBRTexture('baseColorTexture', event);
   });
 })
 // // Default Change orientation Change 
 const modelViewerTransform = document.querySelector("model-viewer#imgSize");
 const roll = document.querySelector('#roll');
 const pitch = document.querySelector('#pitch');
 const yaw = document.querySelector('#yaw');
 const frame = document.querySelector('#frame');

 frame.addEventListener('click', function () {
   modelViewerTransform.updateFraming();
 });

 const updateOrientation = () => {
   modelViewerTransform.orientation = `${roll.value = "0"}deg ${pitch.value = "0"}deg ${yaw.value = "90"}deg `;
 };

 roll.addEventListener('input', () => {
   updateOrientation();
 });
 pitch.addEventListener('input', () => {
   updateOrientation();
 });
 yaw.addEventListener('input', () => {
   updateOrientation();
 });

 $("#ar-button").click(function (e) {
   updateOrientation();
 });
 // Default Change orientation Change End
