import{a as L,i as m,S as w}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="46345761-d1dca7c8b8491e7477b3f2314",x="https://pixabay.com/api/",P=document.querySelector(".search-form"),f=document.querySelector(".input-field"),g=document.querySelector(".gallery-result-list"),T=document.querySelector(".query-word"),E=document.querySelector(".more"),$=document.querySelector(".top"),d=t=>({enable:()=>document.querySelector(t).classList.remove("disabled"),disable:()=>document.querySelector(t).classList.add("disabled")}),n=d(".spinner"),l=d(".loading-text"),b=d(".query-text"),c=d(".more"),u=d(".top");P.addEventListener("submit",t=>{t.preventDefault();const r=f.value;p=1,q(r,p),T.textContent=f.value});let p=1,v=0,h=30;async function q(t,r=1){n.enable(),l.enable(),r===1&&(g.innerHTML="");try{const o=await L.get(x,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:h}}),a=Math.ceil(o.data.totalHits/h);return o.data.hits?(v=o.data.totalHits,I(o.data.hits),n.disable(),l.disable(),b.enable(),p=r):r>a?(c.disable(),u.disable(),l.disable,n.disable(),m.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(c.disable(),u.disable(),m.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})),o.data}catch(o){throw n.disable(),l.disable(),c.disable(),u.disable(),console.error(o),m.warning({title:"Error",message:"An error occurred while fetching images"}),new Error(`Error! status: ${res.status}`)}}const C="Sorry, there are no images matching your search query. Please try again!";function I(t,r){if(v>t.length&&(c.enable(),u.enable()),t.length===0){n.disable(),l.disable(),b.disable(),c.disable(),u.disable(),m.warning({message:C,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(y,2e3);return}const o=t.map(A).join("");g.insertAdjacentHTML("beforeend",o),setTimeout(y,500),O.refresh()}function y(){f.value=""}const O=new w(".gallery-result-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function A({webformatURL:t,largeImageURL:r,tags:o,downloads:a,likes:e,comments:s,views:i}){return`<li class="list-container">
    <div>
      <div class="image-container">
        <a href="${r}">
          <img src="${t}" alt="${o}" />
        </a>
      </div>
      <div class="descr-element">
        <ul class="descr-list">
          <li>
            <h3>Likes</h3>
              <p>${e}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${i}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${s}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${a}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}E.addEventListener("click",()=>{const t=f.value;q(t,p+1)});g.getBoundingClientRect();$.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
