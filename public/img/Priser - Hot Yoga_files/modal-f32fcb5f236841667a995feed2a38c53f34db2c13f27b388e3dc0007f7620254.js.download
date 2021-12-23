/*!
 * CSS Modal
 * http://drublic.github.com/css-modal
 *
 * @author Hans Christian Reinl - @drublic
 * @version 1.0.3
 *
 * modified by Healcode to use jQuery for loading on document ready
 * & to control scrolling when rendering modals in an iframe
 */
!function(){"use strict";hcjq(document).ready(function(){var e={};e.lastActive=undefined,e.activeElement=undefined,e._addEventListener=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},e._addEventListener(document,"keyup",function(t){if(27===t.keyCode){if(e.mainHandler(t),e.lastActive)return!1;e.removeFocus()}},!1),e._dispatchEvent=function(e,t){var n;document.createEvent&&((n=document.createEvent("Event")).initEvent(e,!0,!0),n.customData={modal:t},document.dispatchEvent(n))},e.mainHandler=function(t,n){var a,c,i=document.getElementById(n),s=document.documentElement.className;if(i){try{t.preventDefault()}catch(l){t.returnValue=!1}self!=top&&setTimeout(function(){i.style.display="block",window.scrollTo(0,0)},600),(a=i.children[0])&&a.className.match(/modal-inner/)&&(s.match(/has-overlay/)||(document.documentElement.className+=" has-overlay"),e.activeElement&&((c=e.activeElement).className=c.className.replace(" is-active","")),i.className+=" is-active",e.activeElement=i,e.activeElement.setAttribute("aria-hidden","false"),e.setFocus(),e._dispatchEvent("cssmodal:show",e.activeElement))}else document.documentElement.className=s.replace(" has-overlay",""),e.activeElement&&(self!=top&&(e.activeElement.style.display="none"),e.activeElement.className=e.activeElement.className.replace(" is-active",""),e.activeElement.setAttribute("aria-hidden","true"),e._dispatchEvent("cssmodal:hide",e.activeElement),e.activeElement=null,e.removeFocus())},e.setFocus=function(){e.activeElement&&(e.lastActive=document.activeElement,e.activeElement.focus())},e.removeFocus=function(){e.lastActive&&e.lastActive.focus()},window.hcCSSModal=e})}();