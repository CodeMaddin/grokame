(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="170",vc=0,fa=1,xc=2,Sl=1,Mc=2,_n=3,kn=0,we=1,Je=2,Mn=0,yi=1,pe=2,da=3,pa=4,yc=5,Jn=100,Sc=101,bc=102,wc=103,Ec=104,Tc=200,Ac=201,Rc=202,Cc=203,Kr=204,$r=205,Pc=206,Lc=207,Dc=208,Ic=209,Uc=210,Nc=211,Fc=212,Oc=213,Bc=214,Zr=0,Jr=1,jr=2,Ei=3,Qr=4,to=5,eo=6,no=7,bl=0,zc=1,kc=2,zn=0,wl=1,El=2,Tl=3,Vo=4,Vc=5,Al=6,Rl=7,Cl=300,Ti=301,Ai=302,io=303,so=304,nr=306,ro=1e3,Qn=1001,oo=1002,tn=1003,Hc=1004,us=1005,an=1006,hr=1007,ti=1008,En=1009,Pl=1010,Ll=1011,es=1012,Ho=1013,ei=1014,vn=1015,yn=1016,Go=1017,Wo=1018,Ri=1020,Dl=35902,Il=1021,Ul=1022,je=1023,Nl=1024,Fl=1025,Si=1026,Ci=1027,Ol=1028,Xo=1029,Bl=1030,qo=1031,Yo=1033,Vs=33776,Hs=33777,Gs=33778,Ws=33779,ao=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37808,go=37809,_o=37810,vo=37811,xo=37812,Mo=37813,yo=37814,So=37815,bo=37816,wo=37817,Eo=37818,To=37819,Ao=37820,Ro=37821,Xs=36492,Co=36494,Po=36495,zl=36283,Lo=36284,Do=36285,Io=36286,Gc=3200,Wc=3201,kl=0,Xc=1,Bn="",Be="srgb",Ui="srgb-linear",ir="linear",jt="srgb",si=7680,ma=519,qc=512,Yc=513,Kc=514,Vl=515,$c=516,Zc=517,Jc=518,jc=519,ga=35044,_a="300 es",xn=2e3,Zs=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,Uo=180/Math.PI;function ss(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Ce(s,t,e){return Math.max(t,Math.min(e,s))}function Qc(s,t){return(s%t+t)%t}function ur(s,t,e){return(1-e)*s+e*t}function Hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,r,o,a,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],E=i[1],b=i[4],v=i[7],R=i[2],T=i[5],S=i[8];return r[0]=o*_+a*E+l*R,r[3]=o*m+a*b+l*T,r[6]=o*f+a*v+l*S,r[1]=c*_+h*E+u*R,r[4]=c*m+h*b+u*T,r[7]=c*f+h*v+u*S,r[2]=d*_+p*E+g*R,r[5]=d*m+p*b+g*T,r[8]=d*f+p*v+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fr.makeScale(t,e)),this}rotate(t){return this.premultiply(fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new Nt;function Hl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function th(){const s=Js("canvas");return s.style.display="block",s}const va={};function Zi(s){s in va||(va[s]=!0,console.warn(s))}function eh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function nh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ih(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Gt={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?ir:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Sn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const xa=[.64,.33,.3,.6,.15,.06],Ma=[.2126,.7152,.0722],ya=[.3127,.329],Sa=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ba=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[Ui]:{primaries:xa,whitePoint:ya,transfer:ir,toXYZ:Sa,fromXYZ:ba,luminanceCoefficients:Ma,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:xa,whitePoint:ya,transfer:jt,toXYZ:Sa,fromXYZ:ba,luminanceCoefficients:Ma,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let ri;class sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=Js("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rh=0;class Gl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(dr(i[o].image)):r.push(dr(i[o]))}else r=dr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function dr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oh=0;class Ue extends Ni{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Qn,i=Qn,r=an,o=ti,a=je,l=En,c=Ue.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ss(),this.name="",this.source=new Gl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Cl;Ue.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,v=(p+1)/2,R=(f+1)/2,T=(h+d)/4,S=(u+_)/4,A=(g+m)/4;return b>v&&b>R?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=T/n,r=S/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=S/r,i=A/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ah extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends ah{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wl extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lh extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const R=Math.sqrt(b),T=Math.atan2(R,f*E);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const v=a*E;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new P,wa=new rs;class os{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(r,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),ds.subVectors(this.max,Gi),oi.subVectors(t.a,Gi),ai.subVectors(t.b,Gi),li.subVectors(t.c,Gi),Cn.subVectors(ai,oi),Pn.subVectors(li,ai),Hn.subVectors(oi,li);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Hn.z,Hn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Hn.z,0,-Hn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Hn.y,Hn.x,0];return!mr(e,oi,ai,li,ds)||(e=[1,0,0,0,1,0,0,0,1],!mr(e,oi,ai,li,ds))?!1:(ps.crossVectors(Cn,Pn),e=[ps.x,ps.y,ps.z],mr(e,oi,ai,li,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new P,new P,new P,new P,new P,new P,new P,new P],Ke=new P,fs=new os,oi=new P,ai=new P,li=new P,Cn=new P,Pn=new P,Hn=new P,Gi=new P,ds=new P,ps=new P,Gn=new P;function mr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gn.fromArray(s,r);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ch=new os,Wi=new P,gr=new P;class as{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ch.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(gr)),this.expandByPoint(Wi.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new P,_r=new P,ms=new P,Ln=new P,vr=new P,gs=new P,xr=new P;class Ko{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_r.copy(t).add(e).multiplyScalar(.5),ms.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(_r);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ms),a=Ln.dot(this.direction),l=-Ln.dot(ms),c=Ln.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_r).addScaledVector(ms,d),p}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,r){vr.subVectors(e,t),gs.subVectors(n,t),xr.crossVectors(vr,gs);let o=this.direction.dot(xr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const l=a*this.direction.dot(gs.crossVectors(Ln,gs));if(l<0)return null;const c=a*this.direction.dot(vr.cross(Ln));if(c<0||l+c>o)return null;const h=-a*Ln.dot(xr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),o=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hh,t,uh)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Dn.crossVectors(n,Fe),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Dn.crossVectors(n,Fe)),Dn.normalize(),_s.crossVectors(Fe,Dn),i[0]=Dn.x,i[4]=_s.x,i[8]=Fe.x,i[1]=Dn.y,i[5]=_s.y,i[9]=Fe.y,i[2]=Dn.z,i[6]=_s.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],b=n[7],v=n[11],R=n[15],T=i[0],S=i[4],A=i[8],M=i[12],x=i[1],L=i[5],I=i[9],O=i[13],q=i[2],X=i[6],G=i[10],W=i[14],H=i[3],it=i[7],rt=i[11],gt=i[15];return r[0]=o*T+a*x+l*q+c*H,r[4]=o*S+a*L+l*X+c*it,r[8]=o*A+a*I+l*G+c*rt,r[12]=o*M+a*O+l*W+c*gt,r[1]=h*T+u*x+d*q+p*H,r[5]=h*S+u*L+d*X+p*it,r[9]=h*A+u*I+d*G+p*rt,r[13]=h*M+u*O+d*W+p*gt,r[2]=g*T+_*x+m*q+f*H,r[6]=g*S+_*L+m*X+f*it,r[10]=g*A+_*I+m*G+f*rt,r[14]=g*M+_*O+m*W+f*gt,r[3]=E*T+b*x+v*q+R*H,r[7]=E*S+b*L+v*X+R*it,r[11]=E*A+b*I+v*G+R*rt,r[15]=E*M+b*O+v*W+R*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,b=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*E+n*b+i*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return t[0]=E*S,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*S,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*S,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*S,t[4]=b*S,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*S,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*S,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*S,t[8]=v*S,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*S,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*S,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*S,t[12]=R*S,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*S,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*S,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=l*c,b=l*h,v=l*u,R=n.x,T=n.y,S=n.z;return i[0]=(1-(_+f))*R,i[1]=(p+v)*R,i[2]=(g-b)*R,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(d+f))*T,i[6]=(m+E)*T,i[7]=0,i[8]=(g+b)*S,i[9]=(m-E)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),a=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const c=1/r,h=1/o,u=1/a;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=xn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===xn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=xn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h;let g,_;if(a===xn)g=(o+r)*u,_=-2*u;else if(a===Zs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new P,$e=new ie,hh=new P(0,0,0),uh=new P(1,1,1),Dn=new P,_s=new P,Fe=new P,Ea=new ie,Ta=new rs;class cn{constructor(t=0,e=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ea.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ea,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fh=0;const Aa=new P,hi=new rs,pn=new ie,vs=new P,Xi=new P,dh=new P,ph=new rs,Ra=new P(1,0,0),Ca=new P(0,1,0),Pa=new P(0,0,1),La={type:"added"},mh={type:"removed"},ui={type:"childadded",child:null},Mr={type:"childremoved",child:null};class be extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new P,e=new cn,n=new rs,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Nt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Ra,t)}rotateY(t){return this.rotateOnAxis(Ca,t)}rotateZ(t){return this.rotateOnAxis(Pa,t)}translateOnAxis(t,e){return Aa.copy(t).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ra,t)}translateY(t){return this.translateOnAxis(Ca,t)}translateZ(t){return this.translateOnAxis(Pa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Xi,vs,this.up):pn.lookAt(vs,Xi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(La),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mh),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(La),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,dh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new P(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new P,mn=new P,yr=new P,gn=new P,fi=new P,di=new P,Da=new P,Sr=new P,br=new P,wr=new P,Er=new te,Tr=new te,Ar=new te;class Xe{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ze.subVectors(i,e),mn.subVectors(n,e),yr.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(mn),l=Ze.dot(yr),c=mn.dot(mn),h=mn.dot(yr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Er.setScalar(0),Tr.setScalar(0),Ar.setScalar(0),Er.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),Ar.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Er,r.x),o.addScaledVector(Tr,r.y),o.addScaledVector(Ar,r.z),o}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),mn.subVectors(t,e),Ze.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ze.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;fi.subVectors(i,n),di.subVectors(r,n),Sr.subVectors(t,n);const l=fi.dot(Sr),c=di.dot(Sr);if(l<=0&&c<=0)return e.copy(n);br.subVectors(t,i);const h=fi.dot(br),u=di.dot(br);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(fi,o);wr.subVectors(t,r);const p=fi.dot(wr),g=di.dot(wr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(di,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Da.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Da,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(fi,o).addScaledVector(di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Rr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class j{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Gt.workingColorSpace){if(t=Qc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Rr(o,r,t+1/3),this.g=Rr(o,r,t),this.b=Rr(o,r,t-1/3)}return Gt.toWorkingColorSpace(this,i),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Gt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ce(Re.r*255,0,255))*65536+Math.round(Ce(Re.g*255,0,255))*256+Math.round(Ce(Re.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,r=Re.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Be){Gt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(xs);const n=ur(In.h,xs.h,e),i=ur(In.s,xs.s,e),r=ur(In.l,xs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new j;j.NAMES=ql;let gh=0;class ni extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=ss(),this.name="",this.blending=yi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=$r,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kr&&(n.blendSrc=this.blendSrc),this.blendDst!==$r&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qt extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new P,Ms=new at;class me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ga,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ga&&(t.usage=this.usage),t}}class Yl extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kl extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _h=0;const We=new ie,Cr=new be,pi=new P,Oe=new os,qi=new os,ye=new P;class ve extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hl(t)?Kl:Yl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Cr.lookAt(t),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Oe.min,qi.min),Oe.expandByPoint(ye),ye.addVectors(Oe.max,qi.max),Oe.expandByPoint(ye)):(Oe.expandByPoint(qi.min),Oe.expandByPoint(qi.max))}Oe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),ye.add(pi)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;const c=new P,h=new P,u=new P,d=new at,p=new at,g=new at,_=new P,m=new P;function f(A,M,x){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[A].add(_),a[M].add(_),a[x].add(_),l[A].add(m),l[M].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,M=E.length;A<M;++A){const x=E[A],L=x.start,I=x.count;for(let O=L,q=L+I;O<q;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new P,v=new P,R=new P,T=new P;function S(A){R.fromBufferAttribute(i,A),T.copy(R);const M=a[A];b.copy(M),b.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(T,M);const L=v.dot(l[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,L)}for(let A=0,M=E.length;A<M;++A){const x=E[A],L=x.start,I=x.count;for(let O=L,q=L+I;O<q;O+=3)S(t.getX(O+0)),S(t.getX(O+1)),S(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ia=new ie,Wn=new Ko,ys=new as,Ua=new P,Ss=new P,bs=new P,ws=new P,Pr=new P,Es=new P,Na=new P,Ts=new P;class B extends be{constructor(t=new ve,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Pr.fromBufferAttribute(u,t),o?Es.addScaledVector(Pr,h):Es.addScaledVector(Pr.sub(e),h))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(ys.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(ys,Ua)===null||Wn.origin.distanceToSquared(Ua)>(t.far-t.near)**2))&&(Ia.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(Ia),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,R=b;v<R;v+=3){const T=a.getX(v),S=a.getX(v+1),A=a.getX(v+2);i=As(this,f,t,n,c,h,u,T,S,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);i=As(this,o,t,n,c,h,u,E,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,R=b;v<R;v+=3){const T=v,S=v+1,A=v+2;i=As(this,f,t,n,c,h,u,T,S,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,b=m+1,v=m+2;i=As(this,o,t,n,c,h,u,E,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function vh(s,t,e,n,i,r,o,a){let l;if(t.side===we?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===kn,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ts);return c<e.near||c>e.far?null:{distance:c,point:Ts.clone(),object:s}}function As(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ss),s.getVertexPosition(l,bs),s.getVertexPosition(c,ws);const h=vh(s,t,e,n,Ss,bs,ws,Na);if(h){const u=new P;Xe.getBarycoord(Na,Ss,bs,ws,u),i&&(h.uv=Xe.getInterpolatedAttribute(i,a,l,c,u,new at)),r&&(h.uv1=Xe.getInterpolatedAttribute(r,a,l,c,u,new at)),o&&(h.normal=Xe.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Xe.getNormal(Ss,bs,ws,d.normal),h.face=d,h.barycoord=u}return h}class yt extends ve{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(_,m,f,E,b,v,R,T,S,A,M){const x=v/S,L=R/A,I=v/2,O=R/2,q=T/2,X=S+1,G=A+1;let W=0,H=0;const it=new P;for(let rt=0;rt<G;rt++){const gt=rt*L-O;for(let Dt=0;Dt<X;Dt++){const Yt=Dt*x-I;it[_]=Yt*E,it[m]=gt*b,it[f]=q,c.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[f]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Dt/S),u.push(1-rt/A),W+=1}}for(let rt=0;rt<A;rt++)for(let gt=0;gt<S;gt++){const Dt=d+gt+X*rt,Yt=d+gt+X*(rt+1),K=d+(gt+1)+X*(rt+1),nt=d+(gt+1)+X*rt;l.push(Dt,Yt,nt),l.push(Yt,K,nt),H+=6}a.addGroup(p,H,M),p+=H,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=Pi(s[e]);for(const i in n)t[i]=n[i]}return t}function xh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $l(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const Li={clone:Pi,merge:Pe};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class le extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zl extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new P,Fa=new at,Oa=new at;class ze extends Zl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Fa,Oa),e.subVectors(Oa,Fa)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Sh extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(mi,gi,t,e);i.layers=this.layers,this.add(i);const r=new ze(mi,gi,t,e);r.layers=this.layers,this.add(r);const o=new ze(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new ze(mi,gi,t,e);a.layers=this.layers,this.add(a);const l=new ze(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new ze(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jl extends Ue{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bh extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yt(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Mn});r.uniforms.tEquirect.value=e;const o=new B(i,r),a=e.minFilter;return e.minFilter===ti&&(e.minFilter=an),new Sh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Lr=new P,wh=new P,Eh=new Nt;class $n{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Lr.subVectors(n,e).cross(wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eh.getNormalMatrix(t),i=this.coplanarPoint(Lr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new as,Rs=new P;class $o{constructor(t=new $n,e=new $n,n=new $n,i=new $n,r=new $n,o=new $n){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],E=i[13],b=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+h,m+g,v+E).normalize(),n[3].setComponents(l-o,d-h,m-g,v-E).normalize(),n[4].setComponents(l-a,d-u,m-_,v-b).normalize(),e===xn)n[5].setComponents(l+a,d+u,m+_,v+b).normalize();else if(e===Zs)n[5].setComponents(a,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rs.x=i.normal.x>0?t.max.x:t.min.x,Rs.y=i.normal.y>0?t.max.y:t.min.y,Rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Th(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class sr extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let b=0;b<c;b++){const v=b*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const b=E+c*f,v=E+c*(f+1),R=E+1+c*(f+1),T=E+1+c*f;p.push(b,v,T),p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",su=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$u=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,id=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Ah,alphahash_pars_fragment:Rh,alphamap_fragment:Ch,alphamap_pars_fragment:Ph,alphatest_fragment:Lh,alphatest_pars_fragment:Dh,aomap_fragment:Ih,aomap_pars_fragment:Uh,batching_pars_vertex:Nh,batching_vertex:Fh,begin_vertex:Oh,beginnormal_vertex:Bh,bsdfs:zh,iridescence_fragment:kh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Hh,clipping_planes_pars_fragment:Gh,clipping_planes_pars_vertex:Wh,clipping_planes_vertex:Xh,color_fragment:qh,color_pars_fragment:Yh,color_pars_vertex:Kh,color_vertex:$h,common:Zh,cube_uv_reflection_fragment:Jh,defaultnormal_vertex:jh,displacementmap_pars_vertex:Qh,displacementmap_vertex:tu,emissivemap_fragment:eu,emissivemap_pars_fragment:nu,colorspace_fragment:iu,colorspace_pars_fragment:su,envmap_fragment:ru,envmap_common_pars_fragment:ou,envmap_pars_fragment:au,envmap_pars_vertex:lu,envmap_physical_pars_fragment:xu,envmap_vertex:cu,fog_vertex:hu,fog_pars_vertex:uu,fog_fragment:fu,fog_pars_fragment:du,gradientmap_pars_fragment:pu,lightmap_pars_fragment:mu,lights_lambert_fragment:gu,lights_lambert_pars_fragment:_u,lights_pars_begin:vu,lights_toon_fragment:Mu,lights_toon_pars_fragment:yu,lights_phong_fragment:Su,lights_phong_pars_fragment:bu,lights_physical_fragment:wu,lights_physical_pars_fragment:Eu,lights_fragment_begin:Tu,lights_fragment_maps:Au,lights_fragment_end:Ru,logdepthbuf_fragment:Cu,logdepthbuf_pars_fragment:Pu,logdepthbuf_pars_vertex:Lu,logdepthbuf_vertex:Du,map_fragment:Iu,map_pars_fragment:Uu,map_particle_fragment:Nu,map_particle_pars_fragment:Fu,metalnessmap_fragment:Ou,metalnessmap_pars_fragment:Bu,morphinstance_vertex:zu,morphcolor_vertex:ku,morphnormal_vertex:Vu,morphtarget_pars_vertex:Hu,morphtarget_vertex:Gu,normal_fragment_begin:Wu,normal_fragment_maps:Xu,normal_pars_fragment:qu,normal_pars_vertex:Yu,normal_vertex:Ku,normalmap_pars_fragment:$u,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:ju,iridescence_pars_fragment:Qu,opaque_fragment:tf,packing:ef,premultiplied_alpha_fragment:nf,project_vertex:sf,dithering_fragment:rf,dithering_pars_fragment:of,roughnessmap_fragment:af,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:ff,skinbase_vertex:df,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:vf,tonemapping_fragment:xf,tonemapping_pars_fragment:Mf,transmission_fragment:yf,transmission_pars_fragment:Sf,uv_pars_fragment:bf,uv_pars_vertex:wf,uv_vertex:Ef,worldpos_vertex:Tf,background_vert:Af,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:Lf,cube_frag:Df,depth_vert:If,depth_frag:Uf,distanceRGBA_vert:Nf,distanceRGBA_frag:Ff,equirect_vert:Of,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:kf,meshbasic_vert:Vf,meshbasic_frag:Hf,meshlambert_vert:Gf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:Kf,meshphong_vert:$f,meshphong_frag:Zf,meshphysical_vert:Jf,meshphysical_frag:jf,meshtoon_vert:Qf,meshtoon_frag:td,points_vert:ed,points_frag:nd,shadow_vert:id,shadow_frag:sd,sprite_vert:rd,sprite_frag:od},st={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},rn={basic:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new j(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Pe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Pe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Pe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new j(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Pe([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Pe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Pe([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Pe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Pe([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Pe([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Pe([st.lights,st.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};rn.physical={uniforms:Pe([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Cs={r:0,b:0,g:0},qn=new cn,ad=new ie;function ld(s,t,e,n,i,r,o){const a=new j(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const v=g(E);v===null?f(a,l):v&&v.isColor&&(f(v,1),b=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===nr)?(h===void 0&&(h=new B(new yt(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:Pi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qn.copy(b.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ad.makeRotationFromEuler(qn)),h.material.toneMapped=Gt.getTransfer(v.colorSpace)!==jt,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new B(new sr(2,2),new le({name:"BackgroundMaterial",uniforms:Pi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(v.colorSpace)!==jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,b){E.getRGB(Cs,$l(s)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:m}}function cd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(x,L,I,O,q){let X=!1;const G=u(O,I,L);r!==G&&(r=G,c(r.object)),X=p(x,O,I,q),X&&g(x,O,I,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(x,L,I,O),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,L,I){const O=I.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let X=q[L.id];X===void 0&&(X={},q[L.id]=X);let G=X[O];return G===void 0&&(G=d(l()),X[O]=G),G}function d(x){const L=[],I=[],O=[];for(let q=0;q<e;q++)L[q]=0,I[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,L,I,O){const q=r.attributes,X=L.attributes;let G=0;const W=I.getAttributes();for(const H in W)if(W[H].location>=0){const rt=q[H];let gt=X[H];if(gt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),rt===void 0||rt.attribute!==gt||gt&&rt.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function g(x,L,I,O){const q={},X=L.attributes;let G=0;const W=I.getAttributes();for(const H in W)if(W[H].location>=0){let rt=X[H];rt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const gt={};gt.attribute=rt,rt&&rt.data&&(gt.data=rt.data),q[H]=gt,G++}r.attributes=q,r.attributesNum=G,r.index=O}function _(){const x=r.newAttributes;for(let L=0,I=x.length;L<I;L++)x[L]=0}function m(x){f(x,0)}function f(x,L){const I=r.newAttributes,O=r.enabledAttributes,q=r.attributeDivisors;I[x]=1,O[x]===0&&(s.enableVertexAttribArray(x),O[x]=1),q[x]!==L&&(s.vertexAttribDivisor(x,L),q[x]=L)}function E(){const x=r.newAttributes,L=r.enabledAttributes;for(let I=0,O=L.length;I<O;I++)L[I]!==x[I]&&(s.disableVertexAttribArray(I),L[I]=0)}function b(x,L,I,O,q,X,G){G===!0?s.vertexAttribIPointer(x,L,I,q,X):s.vertexAttribPointer(x,L,I,O,q,X)}function v(x,L,I,O){_();const q=O.attributes,X=I.getAttributes(),G=L.defaultAttributeValues;for(const W in X){const H=X[W];if(H.location>=0){let it=q[W];if(it===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const rt=it.normalized,gt=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;const Yt=Dt.buffer,K=Dt.type,nt=Dt.bytesPerElement,Mt=K===s.INT||K===s.UNSIGNED_INT||it.gpuType===Ho;if(it.isInterleavedBufferAttribute){const lt=it.data,At=lt.stride,Pt=it.offset;if(lt.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)f(H.location+zt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let zt=0;zt<H.locationSize;zt++)b(H.location+zt,gt/H.locationSize,K,rt,At*nt,(Pt+gt/H.locationSize*zt)*nt,Mt)}else{if(it.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)f(H.location+lt,it.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let lt=0;lt<H.locationSize;lt++)b(H.location+lt,gt/H.locationSize,K,rt,gt*nt,gt/H.locationSize*lt*nt,Mt)}}else if(G!==void 0){const rt=G[W];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(H.location,rt);break;case 3:s.vertexAttrib3fv(H.location,rt);break;case 4:s.vertexAttrib4fv(H.location,rt);break;default:s.vertexAttrib1fv(H.location,rt)}}}}E()}function R(){A();for(const x in n){const L=n[x];for(const I in L){const O=L[I];for(const q in O)h(O[q].object),delete O[q];delete L[I]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const I in L){const O=L[I];for(const q in O)h(O[q].object),delete O[q];delete L[I]}delete n[x.id]}function S(x){for(const L in n){const I=n[L];if(I[x.id]===void 0)continue;const O=I[x.id];for(const q in O)h(O[q].object),delete O[q];delete I[x.id]}}function A(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function hd(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ud(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==je&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const A=S===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==En&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==vn&&!A)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function fd(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new $n,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,b=E*4;let v=f.clippingState||null;l.value=v,v=h(g,d,b,p);for(let R=0;R!==b;++R)v[R]=e[R];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,v=p;b!==_;++b,v+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function dd(s){let t=new WeakMap;function e(o,a){return a===io?o.mapping=Ti:a===so&&(o.mapping=Ai),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===so)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bh(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zo extends Zl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,Ba=[.125,.215,.35,.446,.526,.582],jn=20,Dr=new Zo,za=new j;let Ir=null,Ur=0,Nr=0,Fr=!1;const Zn=(1+Math.sqrt(5))/2,_i=1/Zn,ka=[new P(-Zn,_i,0),new P(Zn,_i,0),new P(-_i,0,Zn),new P(_i,0,Zn),new P(0,Zn,-_i),new P(0,Zn,_i),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class No{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Ur,Nr),this._renderer.xr.enabled=Fr,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:yn,format:je,colorSpace:Ui,depthBuffer:!1},i=Va(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pd(r)),this._blurMaterial=md(r,t,e)}return i}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,i){const a=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(za),h.toneMapping=zn,h.autoClear=!1;const p=new Qt({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new B(new yt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(za),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;Ps(i,E*b,f>2?b:0,b,b),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ti||t.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ha());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ka[(i-r-1)%ka.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new B(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let E=0;for(let S=0;S<jn;++S){const A=S/_,M=Math.exp(-A*A/2);f.push(M),S===0?E+=M:S<m&&(E+=2*M)}for(let S=0;S<f.length;S++)f[S]=f[S]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const v=this._sizeLods[i],R=3*v*(i>b-Mi?i-b+Mi:0),T=4*(this._cubeSize-v);Ps(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Dr)}}function pd(s){const t=[],e=[],n=[];let i=s;const r=s-Mi+1+Ba.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Mi?l=Ba[o-s+Mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){const S=T%3*2/3-1,A=T>2?0:-1,M=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];E.set(M,_*g*T),b.set(d,m*g*T);const x=[T,T,T,T,T,T];v.set(x,f*g*T)}const R=new ve;R.setAttribute("position",new me(E,_)),R.setAttribute("uv",new me(b,m)),R.setAttribute("faceIndex",new me(v,f)),t.push(R),i>Mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Va(s,t,e){const n=new en(s,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function md(s,t,e){const n=new Float32Array(jn),i=new P(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ha(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ga(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gd(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===io||l===so,h=l===Ti||l===Ai;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new No(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new No(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function _d(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vd(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,v=E.length;b<v;b+=3){const R=E[b+0],T=E[b+1],S=E[b+2];d.push(R,T,T,S,S,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const R=b+0,T=b+1,S=b+2;d.push(R,T,T,S,S,R)}}else return;const m=new(Hl(d)?Kl:Yl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xd(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Md(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yd(s,t,e){const n=new WeakMap,i=new te;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const S=new Float32Array(R*T*4*u),A=new Wl(S,R,T,u);A.type=vn,A.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const I=f[L],O=E[L],q=b[L],X=R*T*4*L;for(let G=0;G<I.count;G++){const W=G*M;g===!0&&(i.fromBufferAttribute(I,G),S[X+W+0]=i.x,S[X+W+1]=i.y,S[X+W+2]=i.z,S[X+W+3]=0),_===!0&&(i.fromBufferAttribute(O,G),S[X+W+4]=i.x,S[X+W+5]=i.y,S[X+W+6]=i.z,S[X+W+7]=0),m===!0&&(i.fromBufferAttribute(q,G),S[X+W+8]=i.x,S[X+W+9]=i.y,S[X+W+10]=i.z,S[X+W+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new at(R,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Sd(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ql extends Ue{constructor(t,e,n,i,r,o,a,l,c,h=Si){if(h!==Si&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=ei),n===void 0&&h===Ci&&(n=Ri),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tc=new Ue,Wa=new Ql(1,1),ec=new Wl,nc=new lh,ic=new Jl,Xa=[],qa=[],Ya=new Float32Array(16),Ka=new Float32Array(9),$a=new Float32Array(4);function Fi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Xa[i];if(r===void 0&&(r=new Float32Array(i),Xa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function rr(s,t){let e=qa[t];e===void 0&&(e=new Int32Array(t),qa[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function bd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function Ed(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function Td(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function Ad(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;$a.set(n),s.uniformMatrix2fv(this.addr,!1,$a),Me(e,n)}}function Rd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ka.set(n),s.uniformMatrix3fv(this.addr,!1,Ka),Me(e,n)}}function Cd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ya.set(n),s.uniformMatrix4fv(this.addr,!1,Ya),Me(e,n)}}function Pd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ld(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function Dd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function Id(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function Ud(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Nd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function Fd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function Od(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function Bd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wa.compareFunction=Vl,r=Wa):r=tc,e.setTexture2D(t||r,i)}function zd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nc,i)}function kd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ic,i)}function Vd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ec,i)}function Hd(s){switch(s){case 5126:return bd;case 35664:return wd;case 35665:return Ed;case 35666:return Td;case 35674:return Ad;case 35675:return Rd;case 35676:return Cd;case 5124:case 35670:return Pd;case 35667:case 35671:return Ld;case 35668:case 35672:return Dd;case 35669:case 35673:return Id;case 5125:return Ud;case 36294:return Nd;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Vd}}function Gd(s,t){s.uniform1fv(this.addr,t)}function Wd(s,t){const e=Fi(t,this.size,2);s.uniform2fv(this.addr,e)}function Xd(s,t){const e=Fi(t,this.size,3);s.uniform3fv(this.addr,e)}function qd(s,t){const e=Fi(t,this.size,4);s.uniform4fv(this.addr,e)}function Yd(s,t){const e=Fi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Kd(s,t){const e=Fi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function $d(s,t){const e=Fi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Zd(s,t){s.uniform1iv(this.addr,t)}function Jd(s,t){s.uniform2iv(this.addr,t)}function jd(s,t){s.uniform3iv(this.addr,t)}function Qd(s,t){s.uniform4iv(this.addr,t)}function tp(s,t){s.uniform1uiv(this.addr,t)}function ep(s,t){s.uniform2uiv(this.addr,t)}function np(s,t){s.uniform3uiv(this.addr,t)}function ip(s,t){s.uniform4uiv(this.addr,t)}function sp(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tc,r[o])}function rp(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nc,r[o])}function op(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ic,r[o])}function ap(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ec,r[o])}function lp(s){switch(s){case 5126:return Gd;case 35664:return Wd;case 35665:return Xd;case 35666:return qd;case 35674:return Yd;case 35675:return Kd;case 35676:return $d;case 5124:case 35670:return Zd;case 35667:case 35671:return Jd;case 35668:case 35672:return jd;case 35669:case 35673:return Qd;case 5125:return tp;case 36294:return ep;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return ap}}class cp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hd(e.type)}}class hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lp(e.type)}}class up{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function Za(s,t){s.seq.push(t),s.map[t.id]=t}function fp(s,t,e){const n=s.name,i=n.length;for(Or.lastIndex=0;;){const r=Or.exec(n),o=Or.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Za(e,c===void 0?new cp(a,s,t):new hp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new up(a),Za(e,u)),e=u}}}class Ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);fp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ja(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const dp=37297;let pp=0;function mp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ja=new Nt;function gp(s){Gt._getMatrix(ja,Gt.workingColorSpace,s);const t=`mat3( ${ja.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(s)){case ir:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Qa(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+mp(s.getShaderSource(t),o)}else return i}function _p(s,t){const e=gp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vp(s,t){let e;switch(t){case wl:e="Linear";break;case El:e="Reinhard";break;case Tl:e="Cineon";break;case Vo:e="ACESFilmic";break;case Al:e="AgX";break;case Rl:e="Neutral";break;case Vc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ls=new P;function xp(){Gt.getLuminanceCoefficients(Ls);const s=Ls.x.toFixed(4),t=Ls.y.toFixed(4),e=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function yp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ji(s){return s!==""}function tl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(s){return s.replace(bp,Ep)}const wp=new Map;function Ep(s,t){let e=Ot[t];if(e===void 0){const n=wp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fo(e)}const Tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(s){return s.replace(Tp,Ap)}function Ap(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function il(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Cp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ti:case Ai:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function Lp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bl:t="ENVMAP_BLENDING_MULTIPLY";break;case zc:t="ENVMAP_BLENDING_MIX";break;case kc:t="ENVMAP_BLENDING_ADD";break}return t}function Dp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ip(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rp(e),c=Cp(e),h=Pp(e),u=Lp(e),d=Dp(e),p=Mp(e),g=yp(r),_=i.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),f.length>0&&(f+=`
`)):(m=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),f=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==zn?vp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,_p("linearToOutputTexel",e.outputColorSpace),xp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),o=Fo(o),o=tl(o,e),o=el(o,e),a=Fo(a),a=tl(a,e),a=el(a,e),o=nl(o),a=nl(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+o,v=E+f+a,R=Ja(i,i.VERTEX_SHADER,b),T=Ja(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(L){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(R).trim(),q=i.getShaderInfoLog(T).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,T);else{const W=Qa(i,R,"vertex"),H=Qa(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+W+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||q==="")&&(G=!1);G&&(L.diagnostics={runnable:X,programLog:I,vertexShader:{log:O,prefix:m},fragmentShader:{log:q,prefix:f}})}i.deleteShader(R),i.deleteShader(T),A=new Ys(i,_),M=Sp(i,_)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,dp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Up=0;class Np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fp(t),e.set(t,n)),n}}class Fp{constructor(t){this.id=Up++,this.code=t,this.usedTimes=0}}function Op(s,t,e,n,i,r,o){const a=new Xl,l=new Np,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,L,I,O){const q=I.fog,X=O.geometry,G=M.isMeshStandardMaterial?I.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),H=W&&W.mapping===nr?W.image.height:null,it=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=rt!==void 0?rt.length:0;let Dt=0;X.morphAttributes.position!==void 0&&(Dt=1),X.morphAttributes.normal!==void 0&&(Dt=2),X.morphAttributes.color!==void 0&&(Dt=3);let Yt,K,nt,Mt;if(it){const Jt=rn[it];Yt=Jt.vertexShader,K=Jt.fragmentShader}else Yt=M.vertexShader,K=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),Mt=l.getFragmentShaderID(M);const lt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,zt=O.isBatchedMesh===!0,ce=!!M.map,Wt=!!M.matcap,de=!!W,F=!!M.aoMap,He=!!M.lightMap,kt=!!M.bumpMap,Vt=!!M.normalMap,Et=!!M.displacementMap,se=!!M.emissiveMap,wt=!!M.metalnessMap,C=!!M.roughnessMap,y=M.anisotropy>0,z=M.clearcoat>0,Z=M.dispersion>0,Q=M.iridescence>0,$=M.sheen>0,St=M.transmission>0,ct=y&&!!M.anisotropyMap,dt=z&&!!M.clearcoatMap,Xt=z&&!!M.clearcoatNormalMap,tt=z&&!!M.clearcoatRoughnessMap,pt=Q&&!!M.iridescenceMap,Tt=Q&&!!M.iridescenceThicknessMap,Rt=$&&!!M.sheenColorMap,mt=$&&!!M.sheenRoughnessMap,Ht=!!M.specularMap,Ft=!!M.specularColorMap,ee=!!M.specularIntensityMap,D=St&&!!M.transmissionMap,ot=St&&!!M.thicknessMap,Y=!!M.gradientMap,J=!!M.alphaMap,ft=M.alphaTest>0,ht=!!M.alphaHash,It=!!M.extensions;let ue=zn;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Te={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:Yt,fragmentShader:K,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:zt,batchingColor:zt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ui,alphaToCoverage:!!M.alphaToCoverage,map:ce,matcap:Wt,envMap:de,envMapMode:de&&W.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:He,bumpMap:kt,normalMap:Vt,displacementMap:d&&Et,emissiveMap:se,normalMapObjectSpace:Vt&&M.normalMapType===Xc,normalMapTangentSpace:Vt&&M.normalMapType===kl,metalnessMap:wt,roughnessMap:C,anisotropy:y,anisotropyMap:ct,clearcoat:z,clearcoatMap:dt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:Q,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:$,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Ft,specularIntensityMap:ee,transmission:St,transmissionMap:D,thicknessMap:ot,gradientMap:Y,opaque:M.transparent===!1&&M.blending===yi&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ht,combine:M.combine,mapUv:ce&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:He&&_(M.lightMap.channel),bumpMapUv:kt&&_(M.bumpMap.channel),normalMapUv:Vt&&_(M.normalMap.channel),displacementMapUv:Et&&_(M.displacementMap.channel),emissiveMapUv:se&&_(M.emissiveMap.channel),metalnessMapUv:wt&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:dt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(M.sheenRoughnessMap.channel),specularMapUv:Ht&&_(M.specularMap.channel),specularColorMapUv:Ft&&_(M.specularColorMap.channel),specularIntensityMapUv:ee&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:ot&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Vt||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ce||J),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:ce&&M.map.isVideoTexture===!0&&Gt.getTransfer(M.map.colorSpace)===jt,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(M.emissiveMap.colorSpace)===jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===we,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:It&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&M.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function f(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)x.push(L),x.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(x,M),b(x,M),x.push(s.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function b(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let L;if(x){const I=rn[x];L=Li.clone(I.uniforms)}else L=M.uniforms;return L}function R(M,x){let L;for(let I=0,O=h.length;I<O;I++){const q=h[I];if(q.cacheKey===x){L=q,++L.usedTimes;break}}return L===void 0&&(L=new Ip(s,x,M,r),h.push(L)),L}function T(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function S(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:S,programs:h,dispose:A}}function Bp(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function zp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function sl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||zp),n.length>1&&n.sort(d||sl),i.length>1&&i.sort(d||sl)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function kp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new rl,s.set(n,[o])):i>=r.length?(o=new rl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Vp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new j};break;case"SpotLight":e={position:new P,direction:new P,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Hp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Gp=0;function Wp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Xp(s){const t=new Vp,e=Hp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new ie,o=new ie;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,b=0,v=0,R=0,T=0,S=0;c.sort(Wp);for(let M=0,x=c.length;M<x;M++){const L=c[M],I=L.color,O=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=I.r*O,u+=I.g*O,d+=I.b*O;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],O);S++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,H=e.get(L);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=L.shadow.matrix,E++}n.directional[p]=G,p++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(I).multiplyScalar(O),G.distance=q,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[_]=G;const W=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,W.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=W.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,v++}_++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(I).multiplyScalar(O),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const W=L.shadow,H=e.get(L);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(O),G.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==E||A.numPointShadows!==b||A.numSpotShadows!==v||A.numSpotMaps!==R||A.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=E,A.numPointShadows=b,A.numSpotShadows=v,A.numSpotMaps=R,A.numLightProbes=S,n.version=Gp++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const b=c[f];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(b.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ol(s){const t=new Xp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qp(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ol(s),t.set(i,[a])):r>=o.length?(a=new ol(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Yp extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kp extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jp(s,t,e){let n=new $o;const i=new at,r=new at,o=new te,a=new Yp({depthPacking:Wc}),l=new Kp,c={},h=e.maxTextureSize,u={[kn]:we,[we]:kn,[Je]:Je},d=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:$p,fragmentShader:Zp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new B(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let f=this.type;this.render=function(T,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),x=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Mn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=f!==_n&&this.type===_n,q=f===_n&&this.type!==_n;for(let X=0,G=T.length;X<G;X++){const W=T[X],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const it=H.getFrameExtents();if(i.multiply(it),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||O===!0||q===!0){const gt=this.type!==_n?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new en(i.x,i.y,gt),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const rt=H.getViewportCount();for(let gt=0;gt<rt;gt++){const Dt=H.getViewport(gt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),I.viewport(o),H.updateMatrices(W,gt),n=H.getFrustum(),v(S,A,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===_n&&E(H,A),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,x,L)};function E(T,S){const A=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new en(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,A,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,A,p,_,null)}function b(T,S,A,M){let x=null;const L=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)x=L;else if(x=A.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=x.uuid,O=S.uuid;let q=c[I];q===void 0&&(q={},c[I]=q);let X=q[O];X===void 0&&(X=x.clone(),q[O]=X,S.addEventListener("dispose",R)),x=X}if(x.visible=S.visible,x.wireframe=S.wireframe,M===_n?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:u[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=s.properties.get(x);I.light=A}return x}function v(T,S,A,M,x){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===_n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const O=t.update(T),q=T.material;if(Array.isArray(q)){const X=O.groups;for(let G=0,W=X.length;G<W;G++){const H=X[G],it=q[H.materialIndex];if(it&&it.visible){const rt=b(T,it,M,x);T.onBeforeShadow(s,T,S,A,O,rt,H),s.renderBufferDirect(A,null,O,rt,T,H),T.onAfterShadow(s,T,S,A,O,rt,H)}}}else if(q.visible){const X=b(T,q,M,x);T.onBeforeShadow(s,T,S,A,O,X,null),s.renderBufferDirect(A,null,O,X,T,null),T.onAfterShadow(s,T,S,A,O,X,null)}}const I=T.children;for(let O=0,q=I.length;O<q;O++)v(I[O],S,A,M,x)}function R(T){T.target.removeEventListener("dispose",R);for(const A in c){const M=c[A],x=T.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const jp={[Zr]:Jr,[jr]:eo,[Qr]:no,[Ei]:to,[Jr]:Zr,[eo]:jr,[no]:Qr,[to]:Ei};function Qp(s,t){function e(){let D=!1;const ot=new te;let Y=null;const J=new te(0,0,0,0);return{setMask:function(ft){Y!==ft&&!D&&(s.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ht,It,ue,Te){Te===!0&&(ft*=ue,ht*=ue,It*=ue),ot.set(ft,ht,It,ue),J.equals(ot)===!1&&(s.clearColor(ft,ht,It,ue),J.copy(ot))},reset:function(){D=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ot=!1,Y=null,J=null,ft=null;return{setReversed:function(ht){if(ot!==ht){const It=t.get("EXT_clip_control");ot?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const ue=ft;ft=null,this.setClear(ue)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?lt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!D&&(s.depthMask(ht),Y=ht)},setFunc:function(ht){if(ot&&(ht=jp[ht]),J!==ht){switch(ht){case Zr:s.depthFunc(s.NEVER);break;case Jr:s.depthFunc(s.ALWAYS);break;case jr:s.depthFunc(s.LESS);break;case Ei:s.depthFunc(s.LEQUAL);break;case Qr:s.depthFunc(s.EQUAL);break;case to:s.depthFunc(s.GEQUAL);break;case eo:s.depthFunc(s.GREATER);break;case no:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ht}},setLocked:function(ht){D=ht},setClear:function(ht){ft!==ht&&(ot&&(ht=1-ht),s.clearDepth(ht),ft=ht)},reset:function(){D=!1,Y=null,J=null,ft=null,ot=!1}}}function i(){let D=!1,ot=null,Y=null,J=null,ft=null,ht=null,It=null,ue=null,Te=null;return{setTest:function(Jt){D||(Jt?lt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Jt){ot!==Jt&&!D&&(s.stencilMask(Jt),ot=Jt)},setFunc:function(Jt,qe,hn){(Y!==Jt||J!==qe||ft!==hn)&&(s.stencilFunc(Jt,qe,hn),Y=Jt,J=qe,ft=hn)},setOp:function(Jt,qe,hn){(ht!==Jt||It!==qe||ue!==hn)&&(s.stencilOp(Jt,qe,hn),ht=Jt,It=qe,ue=hn)},setLocked:function(Jt){D=Jt},setClear:function(Jt){Te!==Jt&&(s.clearStencil(Jt),Te=Jt)},reset:function(){D=!1,ot=null,Y=null,J=null,ft=null,ht=null,It=null,ue=null,Te=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,v=null,R=null,T=null,S=new j(0,0,0),A=0,M=!1,x=null,L=null,I=null,O=null,q=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=W>=2);let it=null,rt={};const gt=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Yt=new te().fromArray(gt),K=new te().fromArray(Dt);function nt(D,ot,Y,J){const ft=new Uint8Array(4),ht=s.createTexture();s.bindTexture(D,ht),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<Y;It++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(ot+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return ht}const Mt={};Mt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),o.setFunc(Ei),kt(!1),Vt(fa),lt(s.CULL_FACE),F(Mn);function lt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function At(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Pt(D,ot){return u[D]!==ot?(s.bindFramebuffer(D,ot),u[D]=ot,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ot),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function zt(D,ot){let Y=p,J=!1;if(D){Y=d.get(ot),Y===void 0&&(Y=[],d.set(ot,Y));const ft=D.textures;if(Y.length!==ft.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,It=ft.length;ht<It;ht++)Y[ht]=s.COLOR_ATTACHMENT0+ht;Y.length=ft.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function ce(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Wt={[Jn]:s.FUNC_ADD,[Sc]:s.FUNC_SUBTRACT,[bc]:s.FUNC_REVERSE_SUBTRACT};Wt[wc]=s.MIN,Wt[Ec]=s.MAX;const de={[Tc]:s.ZERO,[Ac]:s.ONE,[Rc]:s.SRC_COLOR,[Kr]:s.SRC_ALPHA,[Uc]:s.SRC_ALPHA_SATURATE,[Dc]:s.DST_COLOR,[Pc]:s.DST_ALPHA,[Cc]:s.ONE_MINUS_SRC_COLOR,[$r]:s.ONE_MINUS_SRC_ALPHA,[Ic]:s.ONE_MINUS_DST_COLOR,[Lc]:s.ONE_MINUS_DST_ALPHA,[Nc]:s.CONSTANT_COLOR,[Fc]:s.ONE_MINUS_CONSTANT_COLOR,[Oc]:s.CONSTANT_ALPHA,[Bc]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,ot,Y,J,ft,ht,It,ue,Te,Jt){if(D===Mn){_===!0&&(At(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),D!==yc){if(D!==m||Jt!==M){if((f!==Jn||v!==Jn)&&(s.blendEquation(s.FUNC_ADD),f=Jn,v=Jn),Jt)switch(D){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pe:s.blendFunc(s.ONE,s.ONE);break;case da:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pe:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case da:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,b=null,R=null,T=null,S.set(0,0,0),A=0,m=D,M=Jt}return}ft=ft||ot,ht=ht||Y,It=It||J,(ot!==f||ft!==v)&&(s.blendEquationSeparate(Wt[ot],Wt[ft]),f=ot,v=ft),(Y!==E||J!==b||ht!==R||It!==T)&&(s.blendFuncSeparate(de[Y],de[J],de[ht],de[It]),E=Y,b=J,R=ht,T=It),(ue.equals(S)===!1||Te!==A)&&(s.blendColor(ue.r,ue.g,ue.b,Te),S.copy(ue),A=Te),m=D,M=!1}function He(D,ot){D.side===Je?At(s.CULL_FACE):lt(s.CULL_FACE);let Y=D.side===we;ot&&(Y=!Y),kt(Y),D.blending===yi&&D.transparent===!1?F(Mn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function Vt(D){D!==vc?(lt(s.CULL_FACE),D!==L&&(D===fa?s.cullFace(s.BACK):D===xc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),L=D}function Et(D){D!==I&&(G&&s.lineWidth(D),I=D)}function se(D,ot,Y){D?(lt(s.POLYGON_OFFSET_FILL),(O!==ot||q!==Y)&&(s.polygonOffset(ot,Y),O=ot,q=Y)):At(s.POLYGON_OFFSET_FILL)}function wt(D){D?lt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+X-1),it!==D&&(s.activeTexture(D),it=D)}function y(D,ot,Y){Y===void 0&&(it===null?Y=s.TEXTURE0+X-1:Y=it);let J=rt[Y];J===void 0&&(J={type:void 0,texture:void 0},rt[Y]=J),(J.type!==D||J.texture!==ot)&&(it!==Y&&(s.activeTexture(Y),it=Y),s.bindTexture(D,ot||Mt[D]),J.type=D,J.texture=ot)}function z(){const D=rt[it];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){Yt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function mt(D){K.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Ht(D,ot){let Y=c.get(ot);Y===void 0&&(Y=new WeakMap,c.set(ot,Y));let J=Y.get(D);J===void 0&&(J=s.getUniformBlockIndex(ot,D.name),Y.set(D,J))}function Ft(D,ot){const J=c.get(ot).get(D);l.get(ot)!==J&&(s.uniformBlockBinding(ot,J,D.__bindingPointIndex),l.set(ot,J))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},it=null,rt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,v=null,R=null,T=null,S=new j(0,0,0),A=0,M=!1,x=null,L=null,I=null,O=null,q=null,Yt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:At,bindFramebuffer:Pt,drawBuffers:zt,useProgram:ce,setBlending:F,setMaterial:He,setFlipSided:kt,setCullFace:Vt,setLineWidth:Et,setPolygonOffset:se,setScissorTest:wt,activeTexture:C,bindTexture:y,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Ht,uniformBlockBinding:Ft,texStorage2D:Xt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:dt,scissor:Rt,viewport:mt,reset:ee}}function al(s,t,e,n){const i=tm(n);switch(e){case Il:return s*t;case Nl:return s*t;case Fl:return s*t*2;case Ol:return s*t/i.components*i.byteLength;case Xo:return s*t/i.components*i.byteLength;case Bl:return s*t*2/i.components*i.byteLength;case qo:return s*t*2/i.components*i.byteLength;case Ul:return s*t*3/i.components*i.byteLength;case je:return s*t*4/i.components*i.byteLength;case Yo:return s*t*4/i.components*i.byteLength;case Vs:case Hs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lo:case ho:return Math.max(s,16)*Math.max(t,8)/4;case ao:case co:return Math.max(s,8)*Math.max(t,8)/2;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xs:case Co:case Po:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zl:case Lo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Do:case Io:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tm(s){switch(s){case En:case Pl:return{byteLength:1,components:1};case es:case Ll:case yn:return{byteLength:2,components:1};case Go:case Wo:return{byteLength:2,components:4};case ei:case Ho:case vn:return{byteLength:4,components:1};case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function em(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):Js("canvas")}function _(C,y,z){let Z=1;const Q=wt(C);if((Q.width>z||Q.height>z)&&(Z=z/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Z*Q.width),St=Math.floor(Z*Q.height);u===void 0&&(u=g($,St));const ct=y?g($,St):u;return ct.width=$,ct.height=St,ct.getContext("2d").drawImage(C,0,0,$,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+St+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,y,z,Z,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=y;if(y===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),y===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),y===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),y===s.RGBA){const St=Q?ir:Gt.getTransfer(Z);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=St===jt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(C,y){let z;return C?y===null||y===ei||y===Ri?z=s.DEPTH24_STENCIL8:y===vn?z=s.DEPTH32F_STENCIL8:y===es&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===Ri?z=s.DEPTH_COMPONENT24:y===vn?z=s.DEPTH_COMPONENT32F:y===es&&(z=s.DEPTH_COMPONENT16),z}function R(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){const y=C.target;y.removeEventListener("dispose",T),A(y),y.isVideoTexture&&h.delete(y)}function S(C){const y=C.target;y.removeEventListener("dispose",S),x(y)}function A(C){const y=n.get(C);if(y.__webglInit===void 0)return;const z=C.source,Z=d.get(z);if(Z){const Q=Z[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys(Z).length===0&&d.delete(z)}n.remove(C)}function M(C){const y=n.get(C);s.deleteTexture(y.__webglTexture);const z=C.source,Z=d.get(z);delete Z[y.__cacheKey],o.memory.textures--}function x(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let Q=0;Q<y.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[Z]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let Z=0,Q=z.length;Z<Q;Z++){const $=n.get(z[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(C)}let L=0;function I(){L=0}function O(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function q(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function X(C,y){const z=n.get(C);if(C.isVideoTexture&&Et(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,C,y);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function G(C,y){const z=n.get(C);if(C.version>0&&z.__version!==C.version){K(z,C,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function W(C,y){const z=n.get(C);if(C.version>0&&z.__version!==C.version){K(z,C,y);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function H(C,y){const z=n.get(C);if(C.version>0&&z.__version!==C.version){nt(z,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const it={[ro]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[oo]:s.MIRRORED_REPEAT},rt={[tn]:s.NEAREST,[Hc]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[ti]:s.LINEAR_MIPMAP_LINEAR},gt={[qc]:s.NEVER,[jc]:s.ALWAYS,[Yc]:s.LESS,[Vl]:s.LEQUAL,[Kc]:s.EQUAL,[Jc]:s.GEQUAL,[$c]:s.GREATER,[Zc]:s.NOTEQUAL};function Dt(C,y){if(y.type===vn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===hr||y.magFilter===us||y.magFilter===ti||y.minFilter===an||y.minFilter===hr||y.minFilter===us||y.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,it[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,it[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,it[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,rt[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,rt[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==us&&y.minFilter!==ti||y.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Yt(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));const Z=y.source;let Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));const $=q(y);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[$].usedTimes++;const St=Q[C.__cacheKey];St!==void 0&&(Q[C.__cacheKey].usedTimes--,St.usedTimes===0&&M(y)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return z}function K(C,y,z){let Z=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=s.TEXTURE_3D);const Q=Yt(C,y),$=y.source;e.bindTexture(Z,C.__webglTexture,s.TEXTURE0+z);const St=n.get($);if($.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+z);const ct=Gt.getPrimaries(Gt.workingColorSpace),dt=y.colorSpace===Bn?null:Gt.getPrimaries(y.colorSpace),Xt=y.colorSpace===Bn||ct===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let tt=_(y.image,!1,i.maxTextureSize);tt=se(y,tt);const pt=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type);let Rt=b(y.internalFormat,pt,Tt,y.colorSpace,y.isVideoTexture);Dt(Z,y);let mt;const Ht=y.mipmaps,Ft=y.isVideoTexture!==!0,ee=St.__version===void 0||Q===!0,D=$.dataReady,ot=R(y,tt);if(y.isDepthTexture)Rt=v(y.format===Ci,y.type),ee&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Rt,tt.width,tt.height,0,pt,Tt,null));else if(y.isDataTexture)if(Ht.length>0){Ft&&ee&&e.texStorage2D(s.TEXTURE_2D,ot,Rt,Ht[0].width,Ht[0].height);for(let Y=0,J=Ht.length;Y<J;Y++)mt=Ht[Y],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(s.TEXTURE_2D,Y,Rt,mt.width,mt.height,0,pt,Tt,mt.data);y.generateMipmaps=!1}else Ft?(ee&&e.texStorage2D(s.TEXTURE_2D,ot,Rt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Tt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,tt.width,tt.height,0,pt,Tt,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Rt,Ht[0].width,Ht[0].height,tt.depth);for(let Y=0,J=Ht.length;Y<J;Y++)if(mt=Ht[Y],y.format!==je)if(pt!==null)if(Ft){if(D)if(y.layerUpdates.size>0){const ft=al(mt.width,mt.height,y.format,y.type);for(const ht of y.layerUpdates){const It=mt.data.subarray(ht*ft/mt.data.BYTES_PER_ELEMENT,(ht+1)*ft/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ht,mt.width,mt.height,1,pt,It)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Rt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,tt.depth,pt,Tt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Rt,mt.width,mt.height,tt.depth,0,pt,Tt,mt.data)}else{Ft&&ee&&e.texStorage2D(s.TEXTURE_2D,ot,Rt,Ht[0].width,Ht[0].height);for(let Y=0,J=Ht.length;Y<J;Y++)mt=Ht[Y],y.format!==je?pt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(s.TEXTURE_2D,Y,Rt,mt.width,mt.height,0,pt,Tt,mt.data)}else if(y.isDataArrayTexture)if(Ft){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Rt,tt.width,tt.height,tt.depth),D)if(y.layerUpdates.size>0){const Y=al(tt.width,tt.height,y.format,y.type);for(const J of y.layerUpdates){const ft=tt.data.subarray(J*Y/tt.data.BYTES_PER_ELEMENT,(J+1)*Y/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,pt,Tt,ft)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Tt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,pt,Tt,tt.data);else if(y.isData3DTexture)Ft?(ee&&e.texStorage3D(s.TEXTURE_3D,ot,Rt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Tt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,pt,Tt,tt.data);else if(y.isFramebufferTexture){if(ee)if(Ft)e.texStorage2D(s.TEXTURE_2D,ot,Rt,tt.width,tt.height);else{let Y=tt.width,J=tt.height;for(let ft=0;ft<ot;ft++)e.texImage2D(s.TEXTURE_2D,ft,Rt,Y,J,0,pt,Tt,null),Y>>=1,J>>=1}}else if(Ht.length>0){if(Ft&&ee){const Y=wt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,ot,Rt,Y.width,Y.height)}for(let Y=0,J=Ht.length;Y<J;Y++)mt=Ht[Y],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,pt,Tt,mt):e.texImage2D(s.TEXTURE_2D,Y,Rt,pt,Tt,mt);y.generateMipmaps=!1}else if(Ft){if(ee){const Y=wt(tt);e.texStorage2D(s.TEXTURE_2D,ot,Rt,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Tt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Rt,pt,Tt,tt);m(y)&&f(Z),St.__version=$.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function nt(C,y,z){if(y.image.length!==6)return;const Z=Yt(C,y),Q=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const $=n.get(Q);if(Q.version!==$.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);const St=Gt.getPrimaries(Gt.workingColorSpace),ct=y.colorSpace===Bn?null:Gt.getPrimaries(y.colorSpace),dt=y.colorSpace===Bn||St===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Xt=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!Xt&&!tt?pt[J]=_(y.image[J],!0,i.maxCubemapSize):pt[J]=tt?y.image[J].image:y.image[J],pt[J]=se(y,pt[J]);const Tt=pt[0],Rt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Ht=b(y.internalFormat,Rt,mt,y.colorSpace),Ft=y.isVideoTexture!==!0,ee=$.__version===void 0||Z===!0,D=Q.dataReady;let ot=R(y,Tt);Dt(s.TEXTURE_CUBE_MAP,y);let Y;if(Xt){Ft&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Ht,Tt.width,Tt.height);for(let J=0;J<6;J++){Y=pt[J].mipmaps;for(let ft=0;ft<Y.length;ft++){const ht=Y[ft];y.format!==je?Rt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,Rt,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Ht,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,Rt,mt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Ht,ht.width,ht.height,0,Rt,mt,ht.data)}}}else{if(Y=y.mipmaps,Ft&&ee){Y.length>0&&ot++;const J=wt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Ht,J.width,J.height)}for(let J=0;J<6;J++)if(tt){Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Rt,mt,pt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,pt[J].width,pt[J].height,0,Rt,mt,pt[J].data);for(let ft=0;ft<Y.length;ft++){const It=Y[ft].image[J].image;Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,It.width,It.height,Rt,mt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Ht,It.width,It.height,0,Rt,mt,It.data)}}else{Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Rt,mt,pt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ht,Rt,mt,pt[J]);for(let ft=0;ft<Y.length;ft++){const ht=Y[ft];Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Rt,mt,ht.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Ht,Rt,mt,ht.image[J])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),$.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Mt(C,y,z,Z,Q,$){const St=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),dt=b(z.internalFormat,St,ct,z.colorSpace),Xt=n.get(y),tt=n.get(z);if(tt.__renderTarget=y,!Xt.__hasExternalTextures){const pt=Math.max(1,y.width>>$),Tt=Math.max(1,y.height>>$);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,dt,pt,Tt,y.depth,0,St,ct,null):e.texImage2D(Q,$,dt,pt,Tt,0,St,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Vt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,tt.__webglTexture,0,kt(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,tt.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(C,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const Z=y.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,$=v(y.stencilBuffer,Q),St=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=kt(y);Vt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,$,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,C)}else{const Z=y.textures;for(let Q=0;Q<Z.length;Q++){const $=Z[Q],St=r.convert($.format,$.colorSpace),ct=r.convert($.type),dt=b($.internalFormat,St,ct,$.colorSpace),Xt=kt(y);z&&Vt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,dt,y.width,y.height):Vt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,dt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,dt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const Q=Z.__webglTexture,$=kt(y);if(y.depthTexture.format===Si)Vt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ci)Vt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");At(y.__webglFramebuffer,C)}else if(z){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=s.createRenderbuffer(),lt(y.__webglDepthbuffer[Z],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),lt(y.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(C,y,z){const Z=n.get(C);y!==void 0&&Mt(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Pt(C)}function ce(C){const y=C.texture,z=n.get(C),Z=n.get(y);C.addEventListener("dispose",S);const Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let dt=0;dt<y.mipmaps.length;dt++)z.__webglFramebuffer[ct][dt]=s.createFramebuffer()}else z.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)z.__webglFramebuffer[ct]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(St)for(let ct=0,dt=Q.length;ct<dt;ct++){const Xt=n.get(Q[ct]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Vt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const dt=Q[ct];z.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);const Xt=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),pt=b(dt.internalFormat,Xt,tt,dt.colorSpace,C.isXRRenderTarget===!0),Tt=kt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,pt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)Mt(z.__webglFramebuffer[ct][dt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else Mt(z.__webglFramebuffer[ct],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(y)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,dt=Q.length;ct<dt;ct++){const Xt=Q[ct],tt=n.get(Xt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Dt(s.TEXTURE_2D,Xt),Mt(z.__webglFramebuffer,C,Xt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(Xt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),Dt(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)Mt(z.__webglFramebuffer[dt],C,y,s.COLOR_ATTACHMENT0,ct,dt);else Mt(z.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,ct,0);m(y)&&f(ct),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Wt(C){const y=C.textures;for(let z=0,Z=y.length;z<Z;z++){const Q=y[z];if(m(Q)){const $=E(C),St=n.get(Q).__webglTexture;e.bindTexture($,St),f($),e.unbindTexture()}}}const de=[],F=[];function He(C){if(C.samples>0){if(Vt(C)===!1){const y=C.textures,z=C.width,Z=C.height;let Q=s.COLOR_BUFFER_BIT;const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(C),ct=y.length>1;if(ct)for(let dt=0;dt<y.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let dt=0;dt<y.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Xt=n.get(y[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,Q,s.NEAREST),l===!0&&(de.length=0,F.length=0,de.push(s.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(de.push($),F.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let dt=0;dt<y.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Xt=n.get(y[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function kt(C){return Math.min(i.maxSamples,C.samples)}function Vt(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function se(C,y){const z=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ui&&z!==Bn&&(Gt.getTransfer(z)===jt?(Z!==je||Q!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Vt}function nm(s,t){function e(n,i=Bn){let r;const o=Gt.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Go)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return s.BYTE;if(n===Ll)return s.SHORT;if(n===es)return s.UNSIGNED_SHORT;if(n===Ho)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===yn)return s.HALF_FLOAT;if(n===Il)return s.ALPHA;if(n===Ul)return s.RGB;if(n===je)return s.RGBA;if(n===Nl)return s.LUMINANCE;if(n===Fl)return s.LUMINANCE_ALPHA;if(n===Si)return s.DEPTH_COMPONENT;if(n===Ci)return s.DEPTH_STENCIL;if(n===Ol)return s.RED;if(n===Xo)return s.RED_INTEGER;if(n===Bl)return s.RG;if(n===qo)return s.RG_INTEGER;if(n===Yo)return s.RGBA_INTEGER;if(n===Vs||n===Hs||n===Gs||n===Ws)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===yo||n===So||n===bo||n===wo||n===Eo||n===To||n===Ao||n===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xs||n===Co||n===Po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xs)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Lo||n===Do||n===Io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class im extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fe extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sm={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class am{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ue,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new le({vertexShader:rm,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lm extends Ni{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new am,m=e.getContextAttributes();let f=null,E=null;const b=[],v=[],R=new at;let T=null;const S=new ze;S.viewport=new te;const A=new ze;A.viewport=new te;const M=[S,A],x=new im;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=b[K];return nt===void 0&&(nt=new Br,b[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=b[K];return nt===void 0&&(nt=new Br,b[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=b[K];return nt===void 0&&(nt=new Br,b[K]=nt),nt.getHandSpace()};function O(K){const nt=v.indexOf(K.inputSource);if(nt===-1)return;const Mt=b[nt];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,c||o),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",X);for(let K=0;K<b.length;K++){const nt=v[K];nt!==null&&(v[K]=null,b[K].disconnect(nt))}L=null,I=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,E=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",q),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new en(p.framebufferWidth,p.framebufferHeight,{format:je,type:En,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Ci:Si,Mt=m.stencil?Ri:ei);const At={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new en(d.textureWidth,d.textureHeight,{format:je,type:En,depthTexture:new Ql(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(K){for(let nt=0;nt<K.removed.length;nt++){const Mt=K.removed[nt],lt=v.indexOf(Mt);lt>=0&&(v[lt]=null,b[lt].disconnect(Mt))}for(let nt=0;nt<K.added.length;nt++){const Mt=K.added[nt];let lt=v.indexOf(Mt);if(lt===-1){for(let Pt=0;Pt<b.length;Pt++)if(Pt>=v.length){v.push(Mt),lt=Pt;break}else if(v[Pt]===null){v[Pt]=Mt,lt=Pt;break}if(lt===-1)break}const At=b[lt];At&&At.connect(Mt)}}const G=new P,W=new P;function H(K,nt,Mt){G.setFromMatrixPosition(nt.matrixWorld),W.setFromMatrixPosition(Mt.matrixWorld);const lt=G.distanceTo(W),At=nt.projectionMatrix.elements,Pt=Mt.projectionMatrix.elements,zt=At[14]/(At[10]-1),ce=At[14]/(At[10]+1),Wt=(At[9]+1)/At[5],de=(At[9]-1)/At[5],F=(At[8]-1)/At[0],He=(Pt[8]+1)/Pt[0],kt=zt*F,Vt=zt*He,Et=lt/(-F+He),se=Et*-F;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(se),K.translateZ(Et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),At[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const wt=zt+Et,C=ce+Et,y=kt-se,z=Vt+(lt-se),Z=Wt*ce/C*wt,Q=de*ce/C*wt;K.projectionMatrix.makePerspective(y,z,Z,Q,wt,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function it(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let nt=K.near,Mt=K.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),x.near=A.near=S.near=nt,x.far=A.far=S.far=Mt,(L!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,I=x.far),S.layers.mask=K.layers.mask|2,A.layers.mask=K.layers.mask|4,x.layers.mask=S.layers.mask|A.layers.mask;const lt=K.parent,At=x.cameras;it(x,lt);for(let Pt=0;Pt<At.length;Pt++)it(At[Pt],lt);At.length===2?H(x,S,A):x.projectionMatrix.copy(S.projectionMatrix),rt(K,x,lt)};function rt(K,nt,Mt){Mt===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Uo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let gt=null;function Dt(K,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let lt=!1;Mt.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Pt=0;Pt<Mt.length;Pt++){const zt=Mt[Pt];let ce=null;if(p!==null)ce=p.getViewport(zt);else{const de=u.getViewSubImage(d,zt);ce=de.viewport,Pt===0&&(t.setRenderTargetTextures(E,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(E))}let Wt=M[Pt];Wt===void 0&&(Wt=new ze,Wt.layers.enable(Pt),Wt.viewport=new te,M[Pt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ce.x,ce.y,ce.width,ce.height),Pt===0&&(x.matrix.copy(Wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(Wt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=u.getDepthInformation(Mt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let Mt=0;Mt<b.length;Mt++){const lt=v[Mt],At=b[Mt];lt!==null&&At!==void 0&&At.update(lt,nt,c||o)}gt&&gt(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Yt=new jl;Yt.setAnimationLoop(Dt),this.setAnimationLoop=function(K){gt=K},this.dispose=function(){}}}const Yn=new cn,cm=new ie;function hm(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,$l(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,E,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===we&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===we&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,Yn.copy(v),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(cm.makeRotationFromEuler(Yn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===we&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function um(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const v=b.program;n.uniformBlockBinding(E,v)}function c(E,b){let v=i[E.id];v===void 0&&(g(E),v=h(E),i[E.id]=v,E.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(E,R);const T=t.render.frame;r[E.id]!==T&&(d(E),r[E.id]=T)}function h(E){const b=u();E.__bindingPointIndex=b;const v=s.createBuffer(),R=E.__size,T=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=i[E.id],v=E.uniforms,R=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let T=0,S=v.length;T<S;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,x=A.length;M<x;M++){const L=A[M];if(p(L,T,M,R)===!0){const I=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let X=0;X<O.length;X++){const G=O[X],W=_(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,I+q,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,b,v,R){const T=E.value,S=b+"_"+v;if(R[S]===void 0)return typeof T=="number"||typeof T=="boolean"?R[S]=T:R[S]=T.clone(),!0;{const A=R[S];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return R[S]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(E){const b=E.uniforms;let v=0;const R=16;for(let S=0,A=b.length;S<A;S++){const M=Array.isArray(b[S])?b[S]:[b[S]];for(let x=0,L=M.length;x<L;x++){const I=M[x],O=Array.isArray(I.value)?I.value:[I.value];for(let q=0,X=O.length;q<X;q++){const G=O[q],W=_(G),H=v%R,it=H%W.boundary,rt=H+it;v+=it,rt!==0&&R-rt<W.storage&&(v+=R-rt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=W.storage}}}const T=v%R;return T>0&&(v+=R-T),E.__size=v,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class fm{constructor(t={}){const{canvas:e=th(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=zn,this.toneMappingExposure=1;const v=this;let R=!1,T=0,S=0,A=null,M=-1,x=null;const L=new te,I=new te;let O=null;const q=new j(0);let X=0,G=e.width,W=e.height,H=1,it=null,rt=null;const gt=new te(0,0,G,W),Dt=new te(0,0,G,W);let Yt=!1;const K=new $o;let nt=!1,Mt=!1;const lt=new ie,At=new ie,Pt=new P,zt=new te,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function de(){return A===null?H:1}let F=n;function He(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){const U="webgl2";if(F=He(U,w),F===null)throw He(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Vt,Et,se,wt,C,y,z,Z,Q,$,St,ct,dt,Xt,tt,pt,Tt,Rt,mt,Ht,Ft,ee,D;function ot(){kt=new _d(F),kt.init(),Ft=new nm(F,kt),Vt=new ud(F,kt,t,Ft),Et=new Qp(F,kt),Vt.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),se=new Md(F),wt=new Bp,C=new em(F,kt,Et,wt,Vt,Ft,se),y=new dd(v),z=new gd(v),Z=new Th(F),ee=new cd(F,Z),Q=new vd(F,Z,se,ee),$=new Sd(F,Q,Z,se),Rt=new yd(F,Vt,C),tt=new fd(wt),St=new Op(v,y,z,kt,Vt,ee,tt),ct=new hm(v,wt),dt=new kp,Xt=new qp(kt),Tt=new ld(v,y,z,Et,$,p,l),pt=new Jp(v,$,Vt),D=new um(F,se,Vt,Et),mt=new hd(F,kt,se),Ht=new xd(F,kt,se),se.programs=St.programs,v.capabilities=Vt,v.extensions=kt,v.properties=wt,v.renderLists=dt,v.shadowMap=pt,v.state=Et,v.info=se}ot();const Y=new lm(v,F);this.xr=Y,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(G,W,!1))},this.getSize=function(w){return w.set(G,W)},this.setSize=function(w,U,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,W=U,e.width=Math.floor(w*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(G*H,W*H).floor()},this.setDrawingBufferSize=function(w,U,k){G=w,W=U,H=k,e.width=Math.floor(w*k),e.height=Math.floor(U*k),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(gt)},this.setViewport=function(w,U,k,V){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,U,k,V),Et.viewport(L.copy(gt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,U,k,V){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,U,k,V),Et.scissor(I.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){Et.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){rt=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,U=!0,k=!0){let V=0;if(w){let N=!1;if(A!==null){const et=A.texture.format;N=et===Yo||et===qo||et===Xo}if(N){const et=A.texture.type,ut=et===En||et===ei||et===es||et===Ri||et===Go||et===Wo,_t=Tt.getClearColor(),vt=Tt.getClearAlpha(),Ct=_t.r,Ut=_t.g,xt=_t.b;ut?(g[0]=Ct,g[1]=Ut,g[2]=xt,g[3]=vt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Ct,_[1]=Ut,_[2]=xt,_[3]=vt,F.clearBufferiv(F.COLOR,0,_))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),k&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),dt.dispose(),Xt.dispose(),wt.dispose(),y.dispose(),z.dispose(),$.dispose(),ee.dispose(),D.dispose(),St.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",sa),Y.removeEventListener("sessionend",ra),Vn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=se.autoReset,U=pt.enabled,k=pt.autoUpdate,V=pt.needsUpdate,N=pt.type;ot(),se.autoReset=w,pt.enabled=U,pt.autoUpdate=k,pt.needsUpdate=V,pt.type=N}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function It(w){const U=w.target;U.removeEventListener("dispose",It),ue(U)}function ue(w){Te(w),wt.remove(w)}function Te(w){const U=wt.get(w).programs;U!==void 0&&(U.forEach(function(k){St.releaseProgram(k)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,k,V,N,et){U===null&&(U=ce);const ut=N.isMesh&&N.matrixWorld.determinant()<0,_t=mc(w,U,k,V,N);Et.setMaterial(V,ut);let vt=k.index,Ct=1;if(V.wireframe===!0){if(vt=Q.getWireframeAttribute(k),vt===void 0)return;Ct=2}const Ut=k.drawRange,xt=k.attributes.position;let qt=Ut.start*Ct,ne=(Ut.start+Ut.count)*Ct;et!==null&&(qt=Math.max(qt,et.start*Ct),ne=Math.min(ne,(et.start+et.count)*Ct)),vt!==null?(qt=Math.max(qt,0),ne=Math.min(ne,vt.count)):xt!=null&&(qt=Math.max(qt,0),ne=Math.min(ne,xt.count));const re=ne-qt;if(re<0||re===1/0)return;ee.setup(N,V,_t,k,vt);let Le,Kt=mt;if(vt!==null&&(Le=Z.get(vt),Kt=Ht,Kt.setIndex(Le)),N.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*de()),Kt.setMode(F.LINES)):Kt.setMode(F.TRIANGLES);else if(N.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Et.setLineWidth(bt*de()),N.isLineSegments?Kt.setMode(F.LINES):N.isLineLoop?Kt.setMode(F.LINE_LOOP):Kt.setMode(F.LINE_STRIP)}else N.isPoints?Kt.setMode(F.POINTS):N.isSprite&&Kt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,un=N._multiDrawCounts,$t=N._multiDrawCount,Ye=vt?Z.get(vt).bytesPerElement:1,ii=wt.get(V).currentProgram.getUniforms();for(let Ne=0;Ne<$t;Ne++)ii.setValue(F,"_gl_DrawID",Ne),Kt.render(bt[Ne]/Ye,un[Ne])}else if(N.isInstancedMesh)Kt.renderInstances(qt,re,N.count);else if(k.isInstancedBufferGeometry){const bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,un=Math.min(k.instanceCount,bt);Kt.renderInstances(qt,re,un)}else Kt.render(qt,re)};function Jt(w,U,k){w.transparent===!0&&w.side===Je&&w.forceSinglePass===!1?(w.side=we,w.needsUpdate=!0,hs(w,U,k),w.side=kn,w.needsUpdate=!0,hs(w,U,k),w.side=Je):hs(w,U,k)}this.compile=function(w,U,k=null){k===null&&(k=w),f=Xt.get(k),f.init(U),b.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),w!==k&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const _t=et[ut];Jt(_t,k,N),V.add(_t)}else Jt(et,k,N),V.add(et)}),b.pop(),f=null,V},this.compileAsync=function(w,U,k=null){const V=this.compile(w,U,k);return new Promise(N=>{function et(){if(V.forEach(function(ut){wt.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){N(w);return}setTimeout(et,10)}kt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let qe=null;function hn(w){qe&&qe(w)}function sa(){Vn.stop()}function ra(){Vn.start()}const Vn=new jl;Vn.setAnimationLoop(hn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(w){qe=w,Y.setAnimationLoop(w),w===null?Vn.stop():Vn.start()},Y.addEventListener("sessionstart",sa),Y.addEventListener("sessionend",ra),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),f=Xt.get(w,b.length),f.init(U),b.push(f),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(At),Mt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,Mt),m=dt.get(w,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&cr(et,U,-1/0,v.sortObjects)}cr(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,rt),Wt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Wt&&Tt.addToRenderList(m,w),this.info.render.frame++,nt===!0&&tt.beginShadows();const k=f.state.shadowsArray;pt.render(k,w,U),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const et=U.cameras;if(N.length>0)for(let ut=0,_t=et.length;ut<_t;ut++){const vt=et[ut];aa(V,N,w,vt)}Wt&&Tt.render(w);for(let ut=0,_t=et.length;ut<_t;ut++){const vt=et[ut];oa(m,w,vt,vt.viewport)}}else N.length>0&&aa(V,N,w,U),Wt&&Tt.render(w),oa(m,w,U);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),ee.resetDefaultState(),M=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],nt===!0&&tt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function cr(w,U,k,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){V&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(At);const ut=$.update(w),_t=w.material;_t.visible&&m.push(w,ut,_t,k,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const ut=$.update(w),_t=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),zt.copy(ut.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(At)),Array.isArray(_t)){const vt=ut.groups;for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++){const xt=vt[Ct],qt=_t[xt.materialIndex];qt&&qt.visible&&m.push(w,ut,qt,k,zt.z,xt)}}else _t.visible&&m.push(w,ut,_t,k,zt.z,null)}}const et=w.children;for(let ut=0,_t=et.length;ut<_t;ut++)cr(et[ut],U,k,V)}function oa(w,U,k,V){const N=w.opaque,et=w.transmissive,ut=w.transparent;f.setupLightsView(k),nt===!0&&tt.setGlobalState(v.clippingPlanes,k),V&&Et.viewport(L.copy(V)),N.length>0&&cs(N,U,k),et.length>0&&cs(et,U,k),ut.length>0&&cs(ut,U,k),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function aa(w,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new en(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?yn:En,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const et=f.state.transmissionRenderTarget[V.id],ut=V.viewport||L;et.setSize(ut.z,ut.w);const _t=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(q),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Wt&&Tt.render(k);const vt=v.toneMapping;v.toneMapping=zn;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),nt===!0&&tt.setGlobalState(v.clippingPlanes,V),cs(w,k,V),C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,qt=U.length;xt<qt;xt++){const ne=U[xt],re=ne.object,Le=ne.geometry,Kt=ne.material,bt=ne.group;if(Kt.side===Je&&re.layers.test(V.layers)){const un=Kt.side;Kt.side=we,Kt.needsUpdate=!0,la(re,k,V,Le,Kt,bt),Kt.side=un,Kt.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et))}v.setRenderTarget(_t),v.setClearColor(q,X),Ct!==void 0&&(V.viewport=Ct),v.toneMapping=vt}function cs(w,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=w.length;N<et;N++){const ut=w[N],_t=ut.object,vt=ut.geometry,Ct=V===null?ut.material:V,Ut=ut.group;_t.layers.test(k.layers)&&la(_t,U,k,vt,Ct,Ut)}}function la(w,U,k,V,N,et){w.onBeforeRender(v,U,k,V,N,et),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,k,V,w,et),N.transparent===!0&&N.side===Je&&N.forceSinglePass===!1?(N.side=we,N.needsUpdate=!0,v.renderBufferDirect(k,U,V,N,w,et),N.side=kn,N.needsUpdate=!0,v.renderBufferDirect(k,U,V,N,w,et),N.side=Je):v.renderBufferDirect(k,U,V,N,w,et),w.onAfterRender(v,U,k,V,N,et)}function hs(w,U,k){U.isScene!==!0&&(U=ce);const V=wt.get(w),N=f.state.lights,et=f.state.shadowsArray,ut=N.state.version,_t=St.getParameters(w,N.state,et,U,k),vt=St.getProgramCacheKey(_t);let Ct=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?z:y).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",It),Ct=new Map,V.programs=Ct);let Ut=Ct.get(vt);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===ut)return ha(w,_t),Ut}else _t.uniforms=St.getUniforms(w),w.onBeforeCompile(_t,v),Ut=St.acquireProgram(_t,vt),Ct.set(vt,Ut),V.uniforms=_t.uniforms;const xt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(xt.clippingPlanes=tt.uniform),ha(w,_t),V.needsLights=_c(w),V.lightsStateVersion=ut,V.needsLights&&(xt.ambientLightColor.value=N.state.ambient,xt.lightProbe.value=N.state.probe,xt.directionalLights.value=N.state.directional,xt.directionalLightShadows.value=N.state.directionalShadow,xt.spotLights.value=N.state.spot,xt.spotLightShadows.value=N.state.spotShadow,xt.rectAreaLights.value=N.state.rectArea,xt.ltc_1.value=N.state.rectAreaLTC1,xt.ltc_2.value=N.state.rectAreaLTC2,xt.pointLights.value=N.state.point,xt.pointLightShadows.value=N.state.pointShadow,xt.hemisphereLights.value=N.state.hemi,xt.directionalShadowMap.value=N.state.directionalShadowMap,xt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xt.spotShadowMap.value=N.state.spotShadowMap,xt.spotLightMatrix.value=N.state.spotLightMatrix,xt.spotLightMap.value=N.state.spotLightMap,xt.pointShadowMap.value=N.state.pointShadowMap,xt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function ca(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Ys.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ha(w,U){const k=wt.get(w);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function mc(w,U,k,V,N){U.isScene!==!0&&(U=ce),C.resetTextureUnits();const et=U.fog,ut=V.isMeshStandardMaterial?U.environment:null,_t=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ui,vt=(V.isMeshStandardMaterial?z:y).get(V.envMap||ut),Ct=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ut=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),xt=!!k.morphAttributes.position,qt=!!k.morphAttributes.normal,ne=!!k.morphAttributes.color;let re=zn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(re=v.toneMapping);const Le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Kt=Le!==void 0?Le.length:0,bt=wt.get(V),un=f.state.lights;if(nt===!0&&(Mt===!0||w!==x)){const Ge=w===x&&V.id===M;tt.setState(V,w,Ge)}let $t=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==un.state.version||bt.outputColorSpace!==_t||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==vt||V.fog===!0&&bt.fog!==et||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==tt.numPlanes||bt.numIntersection!==tt.numIntersection)||bt.vertexAlphas!==Ct||bt.vertexTangents!==Ut||bt.morphTargets!==xt||bt.morphNormals!==qt||bt.morphColors!==ne||bt.toneMapping!==re||bt.morphTargetsCount!==Kt)&&($t=!0):($t=!0,bt.__version=V.version);let Ye=bt.currentProgram;$t===!0&&(Ye=hs(V,U,N));let ii=!1,Ne=!1,ki=!1;const oe=Ye.getUniforms(),sn=bt.uniforms;if(Et.useProgram(Ye.program)&&(ii=!0,Ne=!0,ki=!0),V.id!==M&&(M=V.id,Ne=!0),ii||x!==w){Et.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),nh(lt),ih(lt),oe.setValue(F,"projectionMatrix",lt)):oe.setValue(F,"projectionMatrix",w.projectionMatrix),oe.setValue(F,"viewMatrix",w.matrixWorldInverse);const An=oe.map.cameraPosition;An!==void 0&&An.setValue(F,Pt.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Ne=!0,ki=!0)}if(N.isSkinnedMesh){oe.setOptional(F,N,"bindMatrix"),oe.setOptional(F,N,"bindMatrixInverse");const Ge=N.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),oe.setValue(F,"boneTexture",Ge.boneTexture,C))}N.isBatchedMesh&&(oe.setOptional(F,N,"batchingTexture"),oe.setValue(F,"batchingTexture",N._matricesTexture,C),oe.setOptional(F,N,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",N._indirectTexture,C),oe.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",N._colorsTexture,C));const Vi=k.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&Rt.update(N,k,Ye),(Ne||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,oe.setValue(F,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(sn.envMap.value=vt,sn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(sn.envMapIntensity.value=U.environmentIntensity),Ne&&(oe.setValue(F,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&gc(sn,ki),et&&V.fog===!0&&ct.refreshFogUniforms(sn,et),ct.refreshMaterialUniforms(sn,V,H,W,f.state.transmissionRenderTarget[w.id]),Ys.upload(F,ca(bt),sn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ys.upload(F,ca(bt),sn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(F,"center",N.center),oe.setValue(F,"modelViewMatrix",N.modelViewMatrix),oe.setValue(F,"normalMatrix",N.normalMatrix),oe.setValue(F,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ge=V.uniformsGroups;for(let An=0,Rn=Ge.length;An<Rn;An++){const ua=Ge[An];D.update(ua,Ye),D.bind(ua,Ye)}}return Ye}function gc(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function _c(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,k){wt.get(w.texture).__webglTexture=U,wt.get(w.depthTexture).__webglTexture=k;const V=wt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const k=wt.get(w);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,k=0){A=w,T=U,S=k;let V=!0,N=null,et=!1,ut=!1;if(w){const vt=wt.get(w);if(vt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(vt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(vt.__hasExternalTextures)C.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const xt=w.depthTexture;if(vt.__boundDepthTexture!==xt){if(xt!==null&&wt.has(xt)&&(w.width!==xt.image.width||w.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ct=w.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ut=!0);const Ut=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][k]:N=Ut[U],et=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?N=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[k]:N=Ut,L.copy(w.viewport),I.copy(w.scissor),O=w.scissorTest}else L.copy(gt).multiplyScalar(H).floor(),I.copy(Dt).multiplyScalar(H).floor(),O=Yt;if(Et.bindFramebuffer(F.FRAMEBUFFER,N)&&V&&Et.drawBuffers(w,N),Et.viewport(L),Et.scissor(I),Et.setScissorTest(O),et){const vt=wt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,k)}else if(ut){const vt=wt.get(w.texture),Ct=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,k||0,Ct)}M=-1},this.readRenderTargetPixels=function(w,U,k,V,N,et,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){Et.bindFramebuffer(F.FRAMEBUFFER,_t);try{const vt=w.texture,Ct=vt.format,Ut=vt.type;if(!Vt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&k>=0&&k<=w.height-N&&F.readPixels(U,k,V,N,Ft.convert(Ct),Ft.convert(Ut),et)}finally{const vt=A!==null?wt.get(A).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(w,U,k,V,N,et,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){const vt=w.texture,Ct=vt.format,Ut=vt.type;if(!Vt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&k>=0&&k<=w.height-N){Et.bindFramebuffer(F.FRAMEBUFFER,_t);const xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,et.byteLength,F.STREAM_READ),F.readPixels(U,k,V,N,Ft.convert(Ct),Ft.convert(Ut),0);const qt=A!==null?wt.get(A).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,qt);const ne=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await eh(F,ne,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,et),F.deleteBuffer(xt),F.deleteSync(ne),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,k=0){w.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-k),N=Math.floor(w.image.width*V),et=Math.floor(w.image.height*V),ut=U!==null?U.x:0,_t=U!==null?U.y:0;C.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,ut,_t,N,et),Et.unbindTexture()},this.copyTextureToTexture=function(w,U,k=null,V=null,N=0){w.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let et,ut,_t,vt,Ct,Ut,xt,qt,ne;const re=w.isCompressedTexture?w.mipmaps[N]:w.image;k!==null?(et=k.max.x-k.min.x,ut=k.max.y-k.min.y,_t=k.isBox3?k.max.z-k.min.z:1,vt=k.min.x,Ct=k.min.y,Ut=k.isBox3?k.min.z:0):(et=re.width,ut=re.height,_t=re.depth||1,vt=0,Ct=0,Ut=0),V!==null?(xt=V.x,qt=V.y,ne=V.z):(xt=0,qt=0,ne=0);const Le=Ft.convert(U.format),Kt=Ft.convert(U.type);let bt;U.isData3DTexture?(C.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const un=F.getParameter(F.UNPACK_ROW_LENGTH),$t=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ye=F.getParameter(F.UNPACK_SKIP_PIXELS),ii=F.getParameter(F.UNPACK_SKIP_ROWS),Ne=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ut);const ki=w.isDataArrayTexture||w.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const sn=wt.get(w),Vi=wt.get(U),Ge=wt.get(sn.__renderTarget),An=wt.get(Vi.__renderTarget);Et.bindFramebuffer(F.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Rn=0;Rn<_t;Rn++)ki&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,N,Ut+Rn),w.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,N,ne+Rn),F.blitFramebuffer(vt,Ct,et,ut,xt,qt,et,ut,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(bt,N,xt,qt,ne+Rn,vt,Ct,et,ut):F.copyTexSubImage2D(bt,N,xt,qt,ne+Rn,vt,Ct,et,ut);Et.bindFramebuffer(F.READ_FRAMEBUFFER,null),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(bt,N,xt,qt,ne,et,ut,_t,Le,Kt,re.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,N,xt,qt,ne,et,ut,_t,Le,re.data):F.texSubImage3D(bt,N,xt,qt,ne,et,ut,_t,Le,Kt,re):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,xt,qt,et,ut,Le,Kt,re.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,xt,qt,re.width,re.height,Le,re.data):F.texSubImage2D(F.TEXTURE_2D,N,xt,qt,et,ut,Le,Kt,re);F.pixelStorei(F.UNPACK_ROW_LENGTH,un),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$t),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ye),F.pixelStorei(F.UNPACK_SKIP_ROWS,ii),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ne),N===0&&U.generateMipmaps&&F.generateMipmap(bt),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,U,k=null,V=null,N=0){return w.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,k,V,N)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){T=0,S=0,A=null,Et.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}class sc extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rc extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const js=new P,Qs=new P,ll=new ie,Yi=new Ko,Ds=new as,zr=new P,cl=new P;class oc extends be{constructor(t=new ve,e=new rc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)js.fromBufferAttribute(e,i-1),Qs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=js.distanceTo(Qs);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;ll.copy(i).invert(),Yi.copy(t.ray).applyMatrix4(ll);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),E=h.getX(_+1),b=Is(this,t,Yi,l,f,E);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Is(this,t,Yi,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=Is(this,t,Yi,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Is(this,t,Yi,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Is(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(js.fromBufferAttribute(o,i),Qs.fromBufferAttribute(o,r),e.distanceSqToSegment(js,Qs,zr,cl)>n)return;zr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(zr);if(!(l<t.near||l>t.far))return{distance:l,point:cl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const hl=new P,ul=new P;class dm extends oc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)hl.fromBufferAttribute(e,i),ul.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hl.distanceTo(ul);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pm extends ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fl=new ie,Oo=new Ko,Us=new as,Ns=new P;class dl extends be{constructor(t=new ve,e=new pm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;fl.copy(i).invert(),Oo.copy(t.ray).applyMatrix4(fl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Ns.fromBufferAttribute(u,m),pl(Ns,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Ns.fromBufferAttribute(u,g),pl(Ns,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pl(s,t,e,n,i,r,o){const a=Oo.distanceSqToPoint(s);if(a<e){const l=new P;Oo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new at:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],o=[],a=new P,l=new ie;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Ce(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ac extends Tn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mm extends ac{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jo(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Fs=new P,kr=new jo,Vr=new jo,Hr=new jo;class tr extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Fs.subVectors(i[0],i[1]).add(i[0]),c=Fs);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),kr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Vr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Hr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(kr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(kr.calc(l),Vr.calc(l),Hr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ml(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function gm(s,t){const e=1-s;return e*e*t}function _m(s,t){return 2*(1-s)*s*t}function vm(s,t){return s*s*t}function Qi(s,t,e,n){return gm(s,t)+_m(s,e)+vm(s,n)}function xm(s,t){const e=1-s;return e*e*e*t}function Mm(s,t){const e=1-s;return 3*e*e*s*t}function ym(s,t){return 3*(1-s)*s*s*t}function Sm(s,t){return s*s*s*t}function ts(s,t,e,n,i){return xm(s,t)+Mm(s,e)+ym(s,n)+Sm(s,i)}class bm extends Tn{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ts(t,i.x,r.x,o.x,a.x),ts(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wm extends Tn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ts(t,i.x,r.x,o.x,a.x),ts(t,i.y,r.y,o.y,a.y),ts(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Em extends Tn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tm extends Tn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Am extends Tn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Qi(t,i.x,r.x,o.x),Qi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lc extends Tn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Qi(t,i.x,r.x,o.x),Qi(t,i.y,r.y,o.y),Qi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rm extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ml(a,l.x,c.x,h.x,u.x),ml(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var Cm=Object.freeze({__proto__:null,ArcCurve:mm,CatmullRomCurve3:tr,CubicBezierCurve:bm,CubicBezierCurve3:wm,EllipseCurve:ac,LineCurve:Em,LineCurve3:Tm,QuadraticBezierCurve:Am,QuadraticBezierCurve3:lc,SplineCurve:Rm});class Qo extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Se extends ve{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function E(){const v=new P,R=new P;let T=0;const S=(e-t)/n;for(let A=0;A<=r;A++){const M=[],x=A/r,L=x*(e-t)+t;for(let I=0;I<=i;I++){const O=I/i,q=O*l+a,X=Math.sin(q),G=Math.cos(q);R.x=L*X,R.y=-x*n+m,R.z=L*G,u.push(R.x,R.y,R.z),v.set(X,S,G).normalize(),d.push(v.x,v.y,v.z),p.push(O,1-x),M.push(g++)}_.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){const x=_[M][A],L=_[M+1][A],I=_[M+1][A+1],O=_[M][A+1];(t>0||M!==0)&&(h.push(x,L,O),T+=3),(e>0||M!==r-1)&&(h.push(L,I,O),T+=3)}c.addGroup(f,T,0),f+=T}function b(v){const R=g,T=new at,S=new P;let A=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const L=g;for(let I=0;I<=i;I++){const q=I/i*l+a,X=Math.cos(q),G=Math.sin(q);S.x=M*G,S.y=m*x,S.z=M*X,u.push(S.x,S.y,S.z),d.push(0,x,0),T.x=X*.5+.5,T.y=G*.5*x+.5,p.push(T.x,T.y),g++}for(let I=0;I<i;I++){const O=R+I,q=L+I;v===!0?h.push(q,q+1,O):h.push(q+1,q,O),A+=3}c.addGroup(f,A,v===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bn extends Se{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ls extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const b=new P,v=new P,R=new P;for(let T=0;T<e.length;T+=3)p(e[T+0],b),p(e[T+1],v),p(e[T+2],R),l(b,v,R,E)}function l(E,b,v,R){const T=R+1,S=[];for(let A=0;A<=T;A++){S[A]=[];const M=E.clone().lerp(v,A/T),x=b.clone().lerp(v,A/T),L=T-A;for(let I=0;I<=L;I++)I===0&&A===T?S[A][I]=M:S[A][I]=M.clone().lerp(x,I/L)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){const x=Math.floor(M/2);M%2===0?(d(S[A][x+1]),d(S[A+1][x]),d(S[A][x])):(d(S[A][x+1]),d(S[A+1][x+1]),d(S[A+1][x]))}}function c(E){const b=new P;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(E),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){const E=new P;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const v=m(E)/2/Math.PI+.5,R=f(E)/Math.PI+.5;o.push(v,1-R)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const b=o[E+0],v=o[E+2],R=o[E+4],T=Math.max(b,v,R),S=Math.min(b,v,R);T>.9&&S<.1&&(b<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,b){const v=E*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){const E=new P,b=new P,v=new P,R=new P,T=new at,S=new at,A=new at;for(let M=0,x=0;M<r.length;M+=9,x+=6){E.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),T.set(o[x+0],o[x+1]),S.set(o[x+2],o[x+3]),A.set(o[x+4],o[x+5]),R.copy(E).add(b).add(v).divideScalar(3);const L=m(R);_(T,x+0,E,L),_(S,x+2,b,L),_(A,x+4,v,L)}}function _(E,b,v,R){R<0&&E.x===1&&(o[b]=E.x-1),v.x===0&&v.z===0&&(o[b]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.vertices,t.indices,t.radius,t.details)}}const Os=new P,Bs=new P,Gr=new P,zs=new Xe;class Pm extends ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(qs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:f}=zs;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),zs.getNormal(Gr),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const b=(E+1)%3,v=u[E],R=u[b],T=zs[h[E]],S=zs[h[b]],A=`${v}_${R}`,M=`${R}_${v}`;M in d&&d[M]?(Gr.dot(d[M].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(S.x,S.y,S.z)),d[M]=null):A in d||(d[A]={index0:c[E],index1:c[b],normal:Gr.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Os.fromBufferAttribute(a,_),Bs.fromBufferAttribute(a,m),p.push(Os.x,Os.y,Os.z),p.push(Bs.x,Bs.y,Bs.z)}this.setAttribute("position",new Zt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Qe extends ls{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qe(t.radius,t.detail)}}class nn extends ls{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nn(t.radius,t.detail)}}class Lt extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-b),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const b=h[f][E+1],v=h[f][E],R=h[f+1][E],T=h[f+1][E+1];(f!==0||o>0)&&p.push(b,v,T),(f!==n-1||l<Math.PI)&&p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wi extends ls{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wi(t.radius,t.detail)}}class Ee extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,E=(i+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class or extends ve{constructor(t=new lc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new at;let h=new P;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function _(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),E(),f()}function m(b){h=t.getPointAt(b/e,h);const v=o.normals[b],R=o.binormals[b];for(let T=0;T<=i;T++){const S=T/i*Math.PI*2,A=Math.sin(S),M=-Math.cos(S);l.x=M*v.x+A*R.x,l.y=M*v.y+A*R.y,l.z=M*v.z+A*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let b=1;b<=e;b++)for(let v=1;v<=i;v++){const R=(i+1)*(b-1)+(v-1),T=(i+1)*b+(v-1),S=(i+1)*b+v,A=(i+1)*(b-1)+v;g.push(R,T,A),g.push(T,S,A)}}function E(){for(let b=0;b<=e;b++)for(let v=0;v<=i;v++)c.x=b/e,c.y=v/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new or(new Cm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Lm extends le{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ns extends ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ta extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new j(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Wr=new ie,gl=new P,_l=new P;class cc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(gl),_l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_l),e.updateMatrixWorld(),Wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vl=new ie,Ki=new P,Xr=new P;class Dm extends cc{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ki),Xr.copy(n.position),Xr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xr),n.updateMatrixWorld(),i.makeTranslation(-Ki.x,-Ki.y,-Ki.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl)}}class Ks extends ta{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Im extends cc{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Um extends ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nm extends ta{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class hc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);const uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Oi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fm=new Zo(-1,1,1,-1,0,1);class Om extends ve{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const Bm=new Om;class ea{constructor(t){this._mesh=new B(Bm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class fc extends Oi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Li.clone(t.uniforms),this.material=new le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ea(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ml extends Oi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class zm extends Oi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class km{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fc(uc),this.copyPass.material.blending=Mn,this.clock=new hc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ml!==void 0&&(o instanceof Ml?n=!0:o instanceof zm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vm extends Oi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new j}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Hm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new j(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Di extends Oi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new j(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,o,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new en(r,o,{type:yn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new en(r,o,{type:yn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Hm;this.highPassUniforms=Li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=uc;this.copyUniforms=Li.clone(h.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:pe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new j,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new ea(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Di.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Di.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Di.BlurDirectionX=new at(1,0);Di.BlurDirectionY=new at(0,1);const Gm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Wm extends Oi{constructor(){super();const t=Gm;this.uniforms=Li.clone(t.uniforms),this.material=new Lm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ea(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Gt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===El?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xm extends sc{constructor(){super();const t=new yt;t.deleteAttribute("uv");const e=new ns({side:we}),n=new ns,i=new Ks(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new B(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new B(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new B(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new B(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new B(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new B(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new B(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new B(t,vi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new B(t,vi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new B(t,vi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new B(t,vi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new B(t,vi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new B(t,vi(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function vi(s){const t=new Qt;return t.color.setScalar(s),t}const ar=`
float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float vnoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
    f.z
  );
}

float fbm(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + 17.1;
    a *= 0.5;
  }
  return s;
}
`,qm=`
varying vec3 vWorldPos;
varying vec3 vDir;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Ym=`
uniform float uTime;
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uC;
varying vec3 vWorldPos;
varying vec3 vDir;

${ar}

void main() {
  vec3 dir = normalize(vDir);
  float t = uTime * 0.018;

  float n1 = fbm(dir * 2.6 + vec3(t, 0.0, -t * 0.6));
  float n2 = fbm(dir * 5.4 + vec3(-t * 1.3, t * 0.4, 0.2));
  float n3 = fbm(dir * 9.0 - vec3(0.0, t, t * 0.7));

  float veil = smoothstep(0.28, 0.85, n1);
  float veins = smoothstep(0.55, 0.92, n2) * veil;
  float cores = pow(smoothstep(0.62, 1.0, n3 * n1), 2.2);

  vec3 col = vec3(0.015, 0.01, 0.04);
  col += uA * veil * 0.85;
  col += uB * veins * 1.15;
  col += uC * cores * 1.6;

  float pole = pow(abs(dir.y), 1.6);
  col += vec3(0.05, 0.12, 0.28) * pole * 0.35;

  float star = hash(dir * 420.0);
  float twinkle = 0.65 + 0.35 * sin(uTime * (8.0 + star * 12.0) + star * 40.0);
  float starMask = step(0.9965, star) * twinkle;
  col += vec3(0.85, 0.92, 1.0) * starMask * 1.8;

  float brightStar = step(0.9994, hash(dir * 180.0));
  col += vec3(1.0, 0.85, 1.0) * brightStar * 2.4;

  gl_FragColor = vec4(col, 1.0);
}
`,Km=`
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vObjectPos;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  vObjectPos = position;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,$m=`
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uGlow;
uniform vec3 uLightPos[6];
uniform vec3 uLightColor[6];
uniform float uLightInt[6];
uniform vec3 uFogColor;
uniform float uFogDensity;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vObjectPos;

${ar}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float ndv = max(dot(N, V), 0.0);
  float fresnel = pow(1.0 - ndv, 2.8);

  float inner = fbm(vObjectPos * 2.4 + vec3(0.0, uTime * 0.22, 0.0));
  vec3 irid = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + inner + fresnel * 0.7));

  vec3 albedo = mix(uColor, irid, 0.42);
  vec3 col = albedo * 0.12;

  for (int i = 0; i < 6; i++) {
    vec3 L = uLightPos[i] - vWorldPos;
    float d = length(L);
    L /= max(d, 0.0001);
    float att = uLightInt[i] / (1.0 + d * d * 0.045);
    float diff = max(dot(N, L), 0.0);
    vec3 H = normalize(L + V);
    float spec = pow(max(dot(N, H), 0.0), 48.0);
    float wrap = diff * 0.65 + 0.35;
    col += uLightColor[i] * att * (albedo * wrap * 0.85 + spec * 1.35);
  }

  col += uGlow * (0.28 + inner * 0.9);
  col += fresnel * mix(uGlow, vec3(0.75, 0.95, 1.0), 0.5) * 1.55;
  col += pow(inner, 3.0) * uGlow * 1.8;

  float fog = 1.0 - exp(-uFogDensity * length(vWorldPos - cameraPosition));
  col = mix(col, uFogColor, clamp(fog, 0.0, 0.92));

  gl_FragColor = vec4(col, 0.94);
}
`,Zm=`
varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  vUv = uv;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Jm=`
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec2 vUv;
varying vec3 vWorldPos;

${ar}

void main() {
  float flow = vUv.x * 18.0 - uTime * 1.6;
  float n = fbm(vec3(vUv.x * 6.0, vUv.y * 4.0, uTime * 0.25));
  float ring = abs(vUv.y - 0.5) * 2.0;
  float core = pow(1.0 - ring, 3.4);
  float bands = 0.55 + 0.45 * sin(flow + n * 8.0);
  vec3 col = mix(uColorA, uColorB, n);
  col *= core * (1.2 + bands);
  col += vec3(1.0) * pow(core, 6.0) * 1.8;
  float fog = smoothstep(220.0, 40.0, length(vWorldPos - cameraPosition));
  float alpha = core * 0.85 * fog;
  gl_FragColor = vec4(col, alpha);
}
`,jm=`
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vObj;

void main() {
  vObj = position;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Qm=`
uniform float uTime;
uniform vec3 uLightDir;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vObj;

${ar}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float ndl = max(dot(N, normalize(uLightDir)), 0.0);
  float n = fbm(vObj * 2.2);
  float n2 = fbm(vObj * 6.0 + 4.0);
  vec3 land = mix(vec3(0.08, 0.05, 0.16), vec3(0.22, 0.08, 0.34), n);
  vec3 ocean = vec3(0.03, 0.08, 0.2);
  vec3 col = mix(ocean, land, smoothstep(0.46, 0.58, n));
  col += vec3(0.7, 0.35, 1.0) * smoothstep(0.72, 0.9, n2) * 0.18;
  col *= 0.12 + ndl * 0.95;
  float night = pow(1.0 - ndl, 3.0);
  float cities = step(0.82, n2) * night;
  col += vec3(1.0, 0.75, 0.45) * cities * 0.9;
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  col += vec3(0.35, 0.55, 1.0) * fresnel * 0.45;
  gl_FragColor = vec4(col, 1.0);
}
`,t0=`
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,e0=`
uniform vec3 uColor;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float fresnel = pow(1.0 - abs(dot(N, V)), 2.4);
  float alpha = fresnel * 0.85;
  gl_FragColor = vec4(uColor * (0.6 + fresnel), alpha);
}
`,n0=`
uniform float uTime;
uniform float uSeed;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec3 p = position * (1.0 + 0.08 * sin(uTime * 4.0 + uSeed));
  vec4 world = modelMatrix * vec4(p, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,i0=`
uniform vec3 uColor;
uniform float uTime;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.0);
  vec3 col = uColor * (1.4 + 0.6 * sin(uTime * 6.0));
  col += vec3(1.0) * fresnel * 1.6;
  gl_FragColor = vec4(col, 0.9);
}
`,s0=`
attribute float aSize;
attribute vec3 aColor;
attribute float aSeed;
uniform float uTime;
uniform float uPixelRatio;
varying vec3 vColor;
varying float vSeed;

void main() {
  vColor = aColor;
  vSeed = aSeed;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float pulse = 0.75 + 0.25 * sin(uTime * 3.0 + aSeed * 12.0);
  gl_PointSize = aSize * uPixelRatio * pulse * (180.0 / max(0.001, -mv.z));
  gl_Position = projectionMatrix * mv;
}
`,r0=`
varying vec3 vColor;
varying float vSeed;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float core = smoothstep(0.5, 0.0, d);
  vec3 col = vColor * (0.6 + core * 1.8);
  gl_FragColor = vec4(col, core * core);
}
`,o0=`
attribute vec3 aColor;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;

void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,a0=`
varying vec3 vColor;
varying float vAlpha;

void main() {
  gl_FragColor = vec4(vColor, vAlpha);
}
`,l0=`
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,c0=`
uniform vec3 uColor;
uniform vec3 uRim;
uniform vec3 uLightDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float ndv = max(dot(N, V), 0.0);
  float fresnel = pow(1.0 - ndv, 2.4);
  float ndl = max(dot(N, normalize(uLightDir)), 0.0);
  vec3 col = uColor * (0.5 + ndl * 0.7);
  col += uRim * fresnel * 2.2;
  col += uRim * pow(ndv, 8.0) * 0.15;
  gl_FragColor = vec4(col, 1.0);
}
`,h0={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBoost:{value:0},uHurt:{value:0},uSunPos:{value:new at(.72,.68)},uResolution:{value:new at(1,1)},uFlare:{value:1},uCockpit:{value:0},uGate:{value:0},uKick:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uBoost;
    uniform float uHurt;
    uniform vec2 uSunPos;
    uniform vec2 uResolution;
    uniform float uFlare;
    uniform float uCockpit;
    uniform float uGate;
    uniform float uKick;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float dist = length(center);

      float aberr = 0.0018 + uBoost * 0.0045 + dist * 0.004 + uGate * 0.004 + uKick * 0.006;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + center * aberr).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - center * aberr).b;

      vec2 sun = uSunPos;
      float onScreen = step(0.0, sun.x) * step(sun.x, 1.0) * step(0.0, sun.y) * step(sun.y, 1.0);
      vec2 dir = sun - uv;
      float decay = 0.93;
      vec2 stepDir = dir / 10.0;
      vec3 shafts = vec3(0.0);
      vec2 suv = uv;
      float w = 1.0;
      for (int i = 0; i < 10; i++) {
        suv += stepDir;
        vec3 s = texture2D(tDiffuse, clamp(suv, 0.0, 1.0)).rgb;
        float lum = dot(s, vec3(0.299, 0.587, 0.114));
        float sunProx = smoothstep(0.12, 0.018, length(suv - sun));
        shafts += s * step(1.55, lum) * w * sunProx;
        w *= decay;
      }
      col += shafts * 0.03 * onScreen * uFlare;

      float vig = smoothstep(0.95, 0.28, dist);
      col *= mix(0.55, 1.0, vig);

      float grain = fract(sin(dot(uv * uResolution + uTime * 40.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (grain - 0.5) * 0.035;

      col *= 1.0 + uBoost * 0.12 + uGate * 0.22 + uKick * 0.08;
      col = mix(col, vec3(0.75, 1.12, 1.28), uGate * 0.16);
      col = mix(col, vec3(0.7, 0.05, 0.12), uHurt * 0.45);
      col = mix(col, vec3(1.0, 0.96, 0.88), uKick * 0.18);

      float scan = 0.96 + 0.04 * sin(uv.y * uResolution.y * 1.6 + uTime * 8.0);
      col *= scan;

      gl_FragColor = vec4(col, 1.0);
    }
  `};function $s(s){let t=s>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function wn(s,t=new P(0,1,0)){const e=s.clone().normalize(),n=t.clone();Math.abs(e.dot(n))>.92&&n.set(1,0,0),n.addScaledVector(e,-n.dot(e)),n.lengthSq()<1e-8&&n.set(1,0,0),n.normalize();const i=new P().crossVectors(e,n).normalize(),r=new P().crossVectors(i,e).normalize();return{tangent:e,normal:r,binormal:i}}function ji(s,t,e=0,n=0){const i=s.sample(Math.max(8,t)),r=wn(i.tangent),o=i.pos.clone().addScaledVector(r.binormal,e).addScaledVector(r.normal,n);return{sample:i,frame:r,pos:o}}function Nn(s,t,e){return s+(t-s)*e}function Ie(s,t,e){return Math.max(t,Math.min(e,s))}class u0{constructor(){this.points=[],this.rng=$s(41854),this.cursor=0;for(let t=0;t<64;t++)this._append();this.curve=new tr(this.points,!1,"catmullrom",.45),this._length=this.curve.getLength()}_append(){const t=this.cursor++,e=Math.sin(t*.09)*16+Math.sin(t*.031)*8,n=Math.cos(t*.055)*7+Math.sin(t*.13)*3.5,i=-t*42;this.points.push(new P(e,n,i))}ensure(t){for(;this._length-t<900;)this._append(),this.curve=new tr(this.points,!1,"catmullrom",.45),this._length=this.curve.getLength()}sample(t){this.ensure(t);const e=this._length,n=Ie(t/e,0,.995),i=this.curve.getPointAt(n),r=this.curve.getTangentAt(n).normalize(),o=this.curve.getPointAt(Ie(n+.01,0,1));return{pos:i,tangent:r,ahead:o,u:n}}rebuildRibbon(){return new or(this.curve,360,1.35,12,!1)}}const f0=90,$i=1800,xi=700;class d0{constructor(t){this.scene=t,this.time=0,this.crystals=[],this.crystalData=[],this.lightPos=Array.from({length:6},()=>new P),this.lightColor=Array.from({length:6},()=>new P(1,1,1)),this.lightInt=new Float32Array(6),this.crystalMat=this._crystalMaterial(),this._chapterId="default",this._chapterT=1,this._chapterFrom=this._palette("default"),this._chapterTo=this._chapterFrom,this._addSky(),this._addPlanet(),this._addSun(),this._addDust(),this._addSpores(),this._buildCrystals()}_palette(t){const e={default:{skyA:new j("#3a0a58"),skyB:new j("#0b3d6a"),skyC:new j("#ff3bd4"),ribbonA:new j("#5ce1ff"),ribbonB:new j("#ff3bd4"),fog:new j("#12051f"),crystal:new j("#6a3cff"),glow:new j("#7cf0ff"),sun:new j("#ffe6c4"),ambient:new j("#3a1a58")},queen:{skyA:new j("#4a0528"),skyB:new j("#1a0840"),skyC:new j("#ff3bd4"),ribbonA:new j("#ff64e8"),ribbonB:new j("#5ce1ff"),fog:new j("#220818"),crystal:new j("#9b2bff"),glow:new j("#ff64e8"),sun:new j("#ffb0d8"),ambient:new j("#4a1238")},warden:{skyA:new j("#3a1808"),skyB:new j("#1a0a28"),skyC:new j("#ffd166"),ribbonA:new j("#ffd166"),ribbonB:new j("#ff8a1a"),fog:new j("#1a0c08"),crystal:new j("#5a1a8a"),glow:new j("#ffd166"),sun:new j("#ffd9a0"),ambient:new j("#3a2210")},finale:{skyA:new j("#081828"),skyB:new j("#2a0548"),skyC:new j("#5ce1ff"),ribbonA:new j("#5ce1ff"),ribbonB:new j("#ffd166"),fog:new j("#081018"),crystal:new j("#1f6dff"),glow:new j("#9be7ff"),sun:new j("#c8e8ff"),ambient:new j("#1a2858")}};return e[t]||e.default}setChapter(t){const e=t||"default";this._chapterId===e&&this._chapterT>=1||this._chapterId!==e&&(this._chapterFrom=this._sampleChapter(),this._chapterTo=this._palette(e),this._chapterId=e,this._chapterT=0)}_sampleChapter(){const t=this._chapterT??1,e=this._chapterFrom||this._palette("default"),n=this._chapterTo||e,i=(r,o)=>new j().lerpColors(r,o,t);return{skyA:i(e.skyA,n.skyA),skyB:i(e.skyB,n.skyB),skyC:i(e.skyC,n.skyC),ribbonA:i(e.ribbonA,n.ribbonA),ribbonB:i(e.ribbonB,n.ribbonB),fog:i(e.fog,n.fog),crystal:i(e.crystal,n.crystal),glow:i(e.glow,n.glow),sun:i(e.sun,n.sun),ambient:i(e.ambient,n.ambient)}}_applyChapter(t){const e=this._chapterFrom,n=this._chapterTo;if(!e||!n)return;this.skyMat.uniforms.uA.value.lerpColors(e.skyA,n.skyA,t),this.skyMat.uniforms.uB.value.lerpColors(e.skyB,n.skyB,t),this.skyMat.uniforms.uC.value.lerpColors(e.skyC,n.skyC,t),this.ribbonMat&&(this.ribbonMat.uniforms.uColorA.value.lerpColors(e.ribbonA,n.ribbonA,t),this.ribbonMat.uniforms.uColorB.value.lerpColors(e.ribbonB,n.ribbonB,t)),this.sunLight&&this.sunLight.color.lerpColors(e.sun,n.sun,t),this._ambient&&this._ambient.color.lerpColors(e.ambient,n.ambient,t);const i=new j().lerpColors(e.fog,n.fog,t),r=new j().lerpColors(e.glow,n.glow,t);for(const o of this.crystals)o.material.uniforms.uFogColor.value.copy(i),o.material.uniforms.uGlow.value.copy(r)}_crystalMaterial(){return new le({uniforms:{uTime:{value:0},uColor:{value:new j("#6a3cff")},uGlow:{value:new j("#7cf0ff")},uLightPos:{value:this.lightPos},uLightColor:{value:this.lightColor},uLightInt:{value:this.lightInt},uFogColor:{value:new j("#12051f")},uFogDensity:{value:.0048}},vertexShader:Km,fragmentShader:$m,transparent:!0,depthWrite:!0})}_addSky(){const t=new Lt(900,48,32);this.skyMat=new le({uniforms:{uTime:{value:0},uA:{value:new j("#3a0a58")},uB:{value:new j("#0b3d6a")},uC:{value:new j("#ff3bd4")}},vertexShader:qm,fragmentShader:Ym,side:we,depthWrite:!1,fog:!1}),this.sky=new B(t,this.skyMat),this.scene.add(this.sky)}_addPlanet(){this.planetGroup=new fe;const t=new le({uniforms:{uTime:{value:0},uLightDir:{value:new P(.45,.35,.82).normalize()}},vertexShader:jm,fragmentShader:Qm});this.planet=new B(new Lt(70,64,48),t);const e=new le({uniforms:{uColor:{value:new j("#66a0ff")}},vertexShader:t0,fragmentShader:e0,transparent:!0,blending:pe,depthWrite:!1,side:we});this.atmo=new B(new Lt(82,48,32),e),this.planetGroup.add(this.planet,this.atmo),this.scene.add(this.planetGroup),this.planetMat=t}_addSun(){this.sun=new B(new Lt(10,24,16),new Qt({color:16773570}));const t=new B(new Lt(18,24,16),new Qt({color:16761162,transparent:!0,opacity:.28,blending:pe,depthWrite:!1}));this.sun.add(t),this.scene.add(this.sun),this.sunLight=new Um(16770756,1.4),this.scene.add(this.sunLight),this._ambient=new Nm(3807832,.35),this.scene.add(this._ambient)}_addDust(){const t=new Float32Array($i*3),e=new Float32Array($i*3),n=new Float32Array($i),i=new Float32Array($i),r=$s(20942);for(let a=0;a<$i;a++){t[a*3]=(r()-.5)*520,t[a*3+1]=(r()-.5)*280,t[a*3+2]=-r()*1600;const l=r();e[a*3]=l>.7?1:.45,e[a*3+1]=l>.7?.55:.85,e[a*3+2]=l>.7?.95:1,n[a]=.6+r()*2.4,i[a]=r()*100}const o=new ve;o.setAttribute("position",new me(t,3)),o.setAttribute("aColor",new me(e,3)),o.setAttribute("aSize",new me(n,1)),o.setAttribute("aSeed",new me(i,1)),this.dustMat=new le({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:s0,fragmentShader:r0,transparent:!0,depthWrite:!1,blending:pe}),this.dust=new dl(o,this.dustMat),this.scene.add(this.dust)}_addSpores(){const t=new Float32Array(xi*3),e=new Float32Array(xi*3),n=new Float32Array(xi),i=new Float32Array(xi),r=$s(30625);for(let a=0;a<xi;a++)t[a*3]=(r()-.5)*80,t[a*3+1]=(r()-.5)*50,t[a*3+2]=-r()*400,e[a*3]=.3+r()*.4,e[a*3+1]=.8+r()*.2,e[a*3+2]=1,n[a]=1.5+r()*3.5,i[a]=r()*80;const o=new ve;o.setAttribute("position",new me(t,3)),o.setAttribute("aColor",new me(e,3)),o.setAttribute("aSize",new me(n,1)),o.setAttribute("aSeed",new me(i,1)),this.sporeMat=this.dustMat.clone(),this.spores=new dl(o,this.sporeMat),this.scene.add(this.spores),this.sporeOrigins=t}_buildCrystals(){const t=[new nn(1,0),new wi(1,0),new Qe(1,0),new bn(.7,2.4,5)],e=[{color:"#4b2dff",glow:"#66f0ff"},{color:"#9b2bff",glow:"#ff64e8"},{color:"#1f6dff",glow:"#9be7ff"},{color:"#5a1a8a",glow:"#ffd166"}];for(let n=0;n<f0;n++){const i=this.crystalMat.clone();i.uniforms=Li.clone(this.crystalMat.uniforms);const r=e[n%e.length];i.uniforms.uColor.value=new j(r.color),i.uniforms.uGlow.value=new j(r.glow),i.uniforms.uLightPos.value=this.lightPos,i.uniforms.uLightColor.value=this.lightColor,i.uniforms.uLightInt.value=this.lightInt;const o=new B(t[n%t.length],i);o.scale.setScalar(1.4+n%7*.55),this.scene.add(o),this.crystals.push(o),this.crystalData.push({radius:1.6*o.scale.x,spin:.15+n%5*.08,placed:!1,pathDist:0})}}attachRibbon(t){if(this.ribbon){this.ribbon.geometry.dispose(),this.ribbon.geometry=t;return}this.ribbonMat=new le({uniforms:{uTime:{value:0},uColorA:{value:new j("#5ce1ff")},uColorB:{value:new j("#ff3bd4")}},vertexShader:Zm,fragmentShader:Jm,transparent:!0,blending:pe,depthWrite:!1,side:Je}),this.ribbon=new B(t,this.ribbonMat),this.scene.add(this.ribbon)}layoutFromPath(t,e,n=24){const i=$s(2333+Math.floor(e/80)),r=n+16;for(let o=0;o<this.crystals.length;o++){const a=e+40+o*22+i()*10,l=t.sample(a),c=wn(l.tangent),h=i()*Math.PI*2,u=r+i()*18,d=this.crystals[o];d.position.copy(l.pos).addScaledVector(c.normal,Math.cos(h)*u).addScaledVector(c.binormal,Math.sin(h)*u),d.lookAt(l.pos),this.crystalData[o].pathDist=a,this.crystalData[o].placed=!0,this.crystalData[o].radius=1.35*Math.max(d.scale.x,d.scale.y)}}recycleCrystals(t,e,n=24){const i=n+16;for(let r=0;r<this.crystals.length;r++){const o=this.crystalData[r];if(o.pathDist<e-30){const a=e+380+Math.random()*220,l=t.sample(a),c=wn(l.tangent),h=Math.random()*Math.PI*2,u=i+Math.random()*18;this.crystals[r].position.copy(l.pos).addScaledVector(c.normal,Math.cos(h)*u).addScaledVector(c.binormal,Math.sin(h)*u),this.crystals[r].lookAt(l.pos),o.pathDist=a}}}setLights(t){for(let e=0;e<6;e++){const n=t[e];if(!n){this.lightInt[e]=0;continue}this.lightPos[e].copy(n.pos),this.lightColor[e].set(n.color.r,n.color.g,n.color.b),this.lightInt[e]=n.intensity}}update(t,e,n){this.time+=t,this._chapterT<1&&(this._chapterT=Math.min(1,this._chapterT+t*.42),this._applyChapter(this._chapterT)),this.skyMat.uniforms.uTime.value=this.time,this.planetMat.uniforms.uTime.value=this.time,this.ribbonMat&&(this.ribbonMat.uniforms.uTime.value=this.time),this.dustMat.uniforms.uTime.value=this.time,this.sporeMat.uniforms.uTime.value=this.time;for(const r of this.crystals)r.material.uniforms.uTime.value=this.time,r.rotation.y+=t*.25,r.rotation.x+=t*.08;this.sky.position.copy(e.position),this.planetGroup.position.copy(e.position).add(new P(-180,40,-260)),this.planet.rotation.y+=t*.03,this.sun.position.copy(e.position).add(new P(220,90,-180)),this.sunLight.position.copy(this.sun.position),this.dust.position.copy(e.position);const i=this.spores.geometry.attributes.position;for(let r=0;r<xi;r++){let o=i.getZ(r)+t*(18+r%5*4);o>20&&(o-=420),i.setZ(r,o),i.setY(r,i.getY(r)+Math.sin(this.time+r)*t*.6)}i.needsUpdate=!0,this.spores.position.copy(e.position),this.spores.position.z=e.position.z}hitTest(t,e){for(let n=0;n<this.crystals.length;n++)if(this.crystals[n].position.distanceTo(t)<e+this.crystalData[n].radius)return this.crystals[n];return null}}function qr(s,t){return new le({uniforms:{uColor:{value:new j(s)},uRim:{value:new j(t)},uLightDir:{value:new P(.35,.8,.4).normalize()}},vertexShader:l0,fragmentShader:c0})}function Kn(s,t=10217471){const e=new dm(new Pm(s.geometry,18),new rc({color:t}));s.add(e)}function p0(){const s=new fe;s.scale.setScalar(3.1);const t=new fe;s.add(t);const e=qr("#647a9a","#7ad8ff"),n=qr("#2a3348","#ff7ae0"),i=qr("#1a2238","#5ce1ff"),r=new Qt({color:10217471}),o=new Qt({color:9234431}),a=new Qt({color:16765286}),l=new Qt({color:16737512}),c=new B(new bn(.42,2.9,6),e);c.rotation.x=-Math.PI/2,Kn(c),t.add(c);const h=new B(new yt(.55,.28,1.9),n);h.position.z=.1,Kn(h,16751584),t.add(h);const u=new B(new yt(.18,.16,2.35),i);u.position.set(0,.18,.05),t.add(u);const d=new B(new yt(.42,.12,1.55),n);d.position.set(0,-.22,.2),Kn(d,6087167),t.add(d);const p=new B(new Lt(.24,12,10),o);p.scale.set(1,.62,1.35),p.position.set(0,.2,-.35),t.add(p);const g=new B(new yt(.38,.05,.85),a);g.position.set(0,.32,-.28),t.add(g);const _=new B(new yt(3.1,.07,.95),e);_.position.set(0,-.08,.55),Kn(_),t.add(_);const m=new B(new yt(2.2,.05,.18),r);m.position.set(0,-.05,.18),t.add(m);const f=new B(new yt(.95,.05,.42),i);f.position.set(-.85,-.02,-.35),f.rotation.y=.35;const E=f.clone();E.position.x=.85,E.rotation.y=-.35,t.add(f,E);const b=new B(new yt(.72,.045,.28),e);b.position.set(-.55,.02,-.95),b.rotation.z=.18;const v=b.clone();v.position.x=.55,v.rotation.z=-.18,Kn(b),Kn(v),t.add(b,v);const R=new B(new Se(.07,.09,.7,8),n);R.rotation.x=Math.PI/2,R.position.set(-.38,-.12,-.85);const T=R.clone();T.position.x=.38,t.add(R,T);const S=new B(new yt(.22,.08,.45),i);S.position.set(-1.55,-.06,.42);const A=S.clone();A.position.x=1.55,t.add(S,A);const M=new B(new Lt(.07,8,6),l);M.position.set(-1.62,-.04,.18);const x=M.clone();x.position.x=1.62,x.material=a,t.add(M,x);const L=new B(new yt(.07,.78,.7),e);L.position.set(0,.42,.7),Kn(L),t.add(L);const I=new B(new yt(.05,.12,.55),r);I.position.set(0,.82,.62),t.add(I);const O=new B(new Se(.14,.2,.55,10),n);O.rotation.x=Math.PI/2,O.position.set(-.55,-.1,1.15);const q=O.clone();q.position.x=.55,t.add(O,q);const X=new B(new Se(.11,.16,.22,8),i);X.rotation.x=Math.PI/2,X.position.set(-.55,-.1,1.38);const G=X.clone();G.position.x=.55,t.add(X,G);const W=new B(new Lt(.16,12,10),r);W.position.set(-.55,-.1,1.42);const H=W.clone();H.position.x=.55,t.add(W,H);const it=new B(new Lt(.12,10,8),new Qt({color:16734932}));it.position.set(0,.05,.85),t.add(it);const rt=new B(new Lt(.2,10,8),new Qt({color:13172726,transparent:!0,opacity:0,blending:pe,depthWrite:!1}));rt.position.set(0,-.02,-1.52);const gt=new B(new yt(.08,.08,.85),new Qt({color:10217471,transparent:!0,opacity:0,blending:pe,depthWrite:!1}));gt.position.set(0,-.02,-1.85),t.add(rt,gt);const Dt=new Ks(6087167,3.5,18,2);Dt.position.set(-.55,-.1,1.35);const Yt=new Ks(6087167,3.5,18,2);Yt.position.set(.55,-.1,1.35);const K=new Ks(16737512,2.2,14,2);return K.position.set(0,.15,-1.3),s.add(Dt,Yt,K),{group:s,rig:t,exhausts:[W,H],lights:[Dt,Yt],core:it,muzzle:rt,muzzleSpike:gt}}class m0{constructor(t,e=40){this.max=e,this.history=[];const n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e);this.geo=new ve,this.geo.setAttribute("position",new me(n,3)),this.geo.setAttribute("aColor",new me(i,3)),this.geo.setAttribute("aAlpha",new me(r,1)),this.mat=new le({vertexShader:o0,fragmentShader:a0,transparent:!0,depthWrite:!1,blending:pe}),this.line=new oc(this.geo,this.mat),t.add(this.line),this.positions=n,this.colors=i,this.alphas=r}push(t,e){this.history.unshift(t.clone()),this.history.length>this.max&&this.history.pop();const n=this.history.length;for(let i=0;i<n;i++){const r=this.history[i];this.positions[i*3]=r.x,this.positions[i*3+1]=r.y,this.positions[i*3+2]=r.z;const o=1-i/this.max;this.colors[i*3]=(e>.4?.7:.2)*o,this.colors[i*3+1]=.45*o,this.colors[i*3+2]=.7*o,this.alphas[i]=.28*o}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this.geo.setDrawRange(0,n)}}const g0=[{at:70,toast:"WAVE 01 — STINGER FAN"},{at:380,toast:"MID-BOSS — WEAVER QUEEN"},{at:820,toast:"MID-BOSS — WARDEN"},{at:1320,toast:"FINALE — SENTINEL"}],_0=[{at:70,kind:"squad",form:"v",role:"dive",n:5,ahead:88},{at:118,kind:"squad",form:"line",role:"sine",n:4,ahead:92},{at:160,kind:"breath"},{at:188,kind:"squad",form:"flank",role:"heavy",n:2,ahead:96},{at:210,kind:"squad",form:"pair",role:"dive",n:2,ahead:84},{at:248,kind:"gate"},{at:268,kind:"orbs"},{at:292,kind:"squad",form:"cross",role:"sine",n:6,ahead:100},{at:330,kind:"blockers",n:2},{at:348,kind:"squad",form:"v",role:"dive",n:7,ahead:90},{at:380,kind:"midboss",id:"queen"},{at:470,kind:"breath"},{at:490,kind:"orbs"},{at:512,kind:"squad",form:"escort",role:"dive",n:5,ahead:94},{at:548,kind:"gate"},{at:572,kind:"squad",form:"line",role:"heavy",n:3,ahead:100},{at:610,kind:"squad",form:"cross",role:"sine",n:6,ahead:88},{at:648,kind:"blockers",n:3},{at:670,kind:"squad",form:"v",role:"dive",n:5,ahead:86},{at:710,kind:"squad",form:"pair",role:"sine",n:4,ahead:92},{at:748,kind:"gate"},{at:780,kind:"squad",form:"flank",role:"heavy",n:2,ahead:98},{at:820,kind:"midboss",id:"warden"},{at:920,kind:"breath"},{at:944,kind:"orbs"},{at:968,kind:"squad",form:"cross",role:"dive",n:8,ahead:90},{at:1010,kind:"squad",form:"line",role:"sine",n:5,ahead:94},{at:1048,kind:"gate"},{at:1072,kind:"blockers",n:3},{at:1100,kind:"squad",form:"escort",role:"heavy",n:5,ahead:100},{at:1148,kind:"squad",form:"v",role:"dive",n:7,ahead:88},{at:1190,kind:"squad",form:"cross",role:"sine",n:6,ahead:96},{at:1240,kind:"gate"},{at:1270,kind:"squad",form:"line",role:"dive",n:6,ahead:90},{at:1320,kind:"finale"}],v0=[-.84,-.5,-.18,.18,.5,.84];function x0(s,t,e){const n=e;if(s==="v"){const i=[],r=(t-1)/2;for(let o=0;o<t;o++)i.push((o-r)/Math.max(1,r)*n*.72);return i}if(s==="line"){const i=[];for(let r=0;r<t;r++)i.push((r/Math.max(1,t-1)-.5)*n*1.5);return i}if(s==="flank")return[-n*.72,n*.72].slice(0,t);if(s==="pair"){const i=[];for(let r=0;r<t;r++)i.push((r%2===0?-1:1)*n*(.22+Math.floor(r/2)*.28));return i}if(s==="cross"){const i=[];for(let r=0;r<t;r++)i.push((r/Math.max(1,t-1)-.5)*n*1.55);return i}if(s==="escort"){const i=[0],r=[];for(let o=1;o<t;o++)r.push((o%2===0?-1:1)*n*(.35+Math.floor((o-1)/2)*.28));return i.concat(r).slice(0,t)}return v0.slice(0,t).map(i=>i*n)}function M0(s,t){return s==="v"?Math.abs(t-2)*9:s==="cross"?t%2*14:s==="escort"&&t===0?18:0}class y0{constructor(t=_0){this.script=t,this.index=0,this.cleared=!1,this.finaleAlive=!1,this.peakThreat=0}reset(){this.index=0,this.cleared=!1,this.finaleAlive=!1,this.peakThreat=0}peek(){return this.script[this.index]||null}consume(){const t=this.script[this.index];return this.index+=1,t}intensity(t,e,n,i){const r=Math.min(1,t/1400),o=Math.min(1,e/10);let a=.18+r*.42+o*.28+(n?.08:0);return i&&(a=Math.max(a,.78)),this.cleared&&(a=.35),this.peakThreat=Math.max(this.peakThreat,a),S0(a)}}function S0(s){return Math.max(0,Math.min(1,s))}function b0(s){let t=0;return t+=Math.min(38,s.score/900),t+=Math.min(18,s.kills/5),t+=Math.min(16,(s.step||0)/5),t+=Math.min(10,(s.maxCombo||1)*1.1),t+=s.victory?14:0,t+=Math.min(8,(s.nearMisses||0)*.15),t-=Math.min(8,(s.bombsUsed||0)*1.2),t>=86?"S":t>=72?"A":t>=56?"B":t>=40?"C":"D"}const dc="aether-scores";function Bo(){try{const s=JSON.parse(localStorage.getItem(dc)||"[]");return Array.isArray(s)?s.slice(0,8):[]}catch{return[]}}function w0(s){const t=Bo();t.push(s),t.sort((n,i)=>i.score-n.score);const e=t.slice(0,8);return localStorage.setItem(dc,JSON.stringify(e)),e}const on={spark:{max:8,tag:"SPARK",unlock:"SPARK ARRAY"},needle:{max:8,tag:"NEEDLE",unlock:"LASERS ONLINE"},seeker:{max:8,tag:"SEEKER",unlock:"SEEKERS LOCKED"},shard:{max:7,tag:"SHARD",unlock:"CRYSTAL SHARDS"},titan:{max:6,tag:"TITAN",unlock:"TITAN BLASTER"},wing:{max:6,tag:"WING",unlock:"WING FILAMENTS"},helix:{max:6,tag:"HELIX",unlock:"HELIX RIBBON"},drone:{max:6,tag:"DRONE",unlock:"RIFT DRONES"},mine:{max:6,tag:"MINE",unlock:"AETHER MINES"},shear:{max:6,tag:"SHEAR",unlock:"RIFT SHEAR"},spire:{max:5,tag:"SPIRE",unlock:"PIERCE SPIRE"},nova:{max:5,tag:"NOVA",unlock:"NOVA BURST"},prism:{max:5,tag:"PRISM",unlock:"PRISM SPLIT"}},na=Object.keys(on),E0=["needle","seeker","shard","titan","wing","helix","drone","mine","shear","spire","nova","prism"];function T0(){const s={};for(const t of na)s[t]=0;return s}function ia(){const s=T0();return s.spark=1,s}function A0(){const s=ia(),t=["spark"],e=E0.slice(),n=[],i=new Set([3,8,14,20,26,32,38,44,50,56,62,68]);let r=0;const o=na.reduce((a,l)=>a+on[l].max,0)-1;for(;n.length<o;){if(e.length&&i.has(n.length)){const l=e.shift();s[l]=1,t.push(l),n.push({module:l,toast:on[l].unlock});continue}let a=!1;for(let l=0;l<t.length;l++){const c=t[(r+l)%t.length];if(s[c]<on[c].max){s[c]+=1,n.push({module:c,toast:s[c]===on[c].max?`${on[c].tag} MAX`:null}),r=(r+l+1)%t.length,a=!0;break}}if(!a){if(!e.length)break;const l=e.shift();s[l]=1,t.push(l),n.push({module:l,toast:on[l].unlock})}}return n}const lr=A0(),On=lr.length;function zo(s){const t=ia(),e=Math.max(0,Math.min(On,s|0));for(let n=0;n<e;n++)t[lr[n].module]+=1;return t}function R0(s){return s>=On?0:1}function C0(s){const t=na.filter(e=>s[e]>0).map(e=>on[e].tag);return t.length?t.slice(-3).join(" · "):"SPARK"}function ae(s,t,e={}){return{x:s,drift:t,home:0,pierce:0,wobble:0,phase:0,hitR:1.35,damage:1,...e}}function pc(s,t=0){const e=[],n=[],i=[],r=[],o=[],a=s.spark|0;if(a>0){const R=1+Math.min(a,7);for(let T=0;T<R;T++){const S=R===1?0:T/(R-1)-.5;e.push(ae(S*(1.4+a*.4),S*(10+a*3),{kind:"spark",scale:.82+a*.04,speed:84+a*4,life:.32+a*.018,color:13172726,hitR:1.25}))}}const l=s.needle|0;if(l>0){const R=l<=2?[-1.9,1.9]:l<=4?[-2.5,0,2.5]:[-3.3,-1.15,0,1.15,3.3];for(const T of R)e.push(ae(T,0,{kind:"needle",scale:1.05+l*.04,speed:128+l*3,life:.78,color:10217471,hitR:1.55}))}const c=s.wing|0;if(c>0){const R=5.1+c*.45,T=10+c*2.2;e.push(ae(-R,-T,{kind:"wing",scale:1.08,speed:122,life:.72,color:16737512,hitR:1.45})),e.push(ae(R,T,{kind:"wing",scale:1.08,speed:122,life:.72,color:16737512,hitR:1.45})),c>=4&&(e.push(ae(-R-1.8,-T-7,{kind:"wing",scale:.95,speed:118,life:.68,color:16751584,hitR:1.35})),e.push(ae(R+1.8,T+7,{kind:"wing",scale:.95,speed:118,life:.68,color:16751584,hitR:1.35})))}const h=s.helix|0;if(h>0){const R=14+h*4;e.push(ae(-2.2,0,{kind:"helix",scale:1.05,speed:118,life:.8,color:8057087,wobble:R,phase:0})),e.push(ae(2.2,0,{kind:"helix",scale:1.05,speed:118,life:.8,color:8057087,wobble:R,phase:Math.PI})),h>=4&&e.push(ae(0,0,{kind:"helix",scale:1,speed:120,life:.76,color:14483455,wobble:R*.7,phase:1.2}))}const u=s.shear|0;if(u>0){const R=22+u*4;e.push(ae(-3.8,-R,{kind:"shear",scale:1.15,speed:110,life:.7,color:16765286,hitR:1.7})),e.push(ae(3.8,R,{kind:"shear",scale:1.15,speed:110,life:.7,color:16765286,hitR:1.7})),u>=4&&(e.push(ae(-6.2,-R-10,{kind:"shear",scale:1.05,speed:104,life:.64,color:16769690})),e.push(ae(6.2,R+10,{kind:"shear",scale:1.05,speed:104,life:.64,color:16769690})))}const d=s.spire|0;d>0&&(e.push(ae(-.9,0,{kind:"spire",scale:.72,speed:156,life:.9,color:16777215,pierce:d,damage:2,hitR:1.4})),e.push(ae(.9,0,{kind:"spire",scale:.72,speed:156,life:.9,color:16777215,pierce:d,damage:2,hitR:1.4})));const p=s.drone|0;if(p>0){const R=Math.min(4,2+Math.floor((p-1)/2));for(let T=0;T<R;T++){const S=T%2===0?-1:1,A=Math.floor(T/2);e.push(ae(S*(4.8+A*1.4),S*(4+A*3),{kind:"drone",scale:.9,speed:124,life:.7,color:16743144,hitR:1.3}))}}const g=s.prism|0;if(g>0){const R=2+Math.min(g,4);for(let T=0;T<R;T++){const S=T/(R-1)-.5;e.push(ae(S*2.4,S*(18+g*5),{kind:"prism",scale:.78,speed:100,life:.48,color:13940991,hitR:1.2}))}}const _=s.seeker|0;if(_>0){const R=Math.min(6,1+Math.ceil(_/2));for(let T=0;T<R;T++){const S=R===1?0:T/(R-1)-.5;n.push(ae(S*(2.2+_*.5),S*4,{kind:"seeker",scale:1.25+_*.06,speed:52+_*3,life:1.35,color:16747082,damage:2,home:1,homeSteer:58+_*6,hitR:1.8}))}}const m=s.shard|0;if(m>0){const R=2+Math.min(m,6);for(let T=0;T<R;T++){const S=R===1?0:T/(R-1)-.5;e.push(ae(S*1.2,S*(16+m*3),{kind:"shard",scale:.7,speed:96+m*2,life:.42,color:16751570,hitR:1.2}))}}const f=s.titan|0;f>0&&(i.push(ae(0,0,{kind:"titan",scale:2.4+f*.28,speed:64+f*3,life:1.05,color:16765286,damage:5+f,hitR:3.2+f*.35})),f>=4&&(i.push(ae(-2.6,-6,{kind:"titan",scale:1.6,speed:70,life:.9,color:16769690,damage:3,hitR:2.4})),i.push(ae(2.6,6,{kind:"titan",scale:1.6,speed:70,life:.9,color:16769690,damage:3,hitR:2.4}))));const E=s.mine|0;if(E>0){const R=Math.min(4,1+Math.floor(E/2));for(let T=0;T<R;T++){const S=R===1?0:T/(R-1)-.5;r.push(ae(S*(3+E*.8),S*5,{kind:"mine",scale:1.35,speed:16+E,life:1.7,color:6087167,damage:3,hitR:2.1}))}}const b=s.nova|0;if(b>0){const R=6+b;for(let T=0;T<R;T++){const S=T/(R-1)-.5;o.push(ae(S*2,S*(36+b*6),{kind:"nova",scale:.95,speed:88,life:.62,color:16737512,damage:1,hitR:1.5}))}}return{primary:{cd:a>0&&l===0?.094:.078,shots:e},missile:{cd:Math.max(.28,.42-_*.018),shots:n},titan:{cd:Math.max(.55,.92-f*.05),shots:i},mine:{cd:.52,shots:r},nova:{cd:Math.max(.72,1.18-b*.08),shots:o}}}function ks(s,t){const e=P0(t);return Math.round(s==="queen"?90+e*6.2:s==="warden"?140+e*7.5:220+e*9.5)}function P0(s){const t=pc(zo(s),0),e=(n,i)=>n.shots.length?n.shots.reduce((o,a)=>o+(a.damage||1),0)/Math.max(.04,n.cd)*i:0;return e(t.primary,.36)+e(t.missile,.82)+e(t.titan,.78)+e(t.mine,.18)+e(t.nova,.14)}lr.map((s,t)=>({name:on[s.module].tag,toast:s.toast||on[s.module].tag,step:t+1}));function L0(s,t,e,n,i){const r=s.offset?.x??0,o=s.pathDist-4,a=e??r;s.patternI=(s.patternI||0)%12;const l=s.patternI;if(s.patternI+=1,s.role==="queen")return D0(l,o,r,a,t,i);if(s.role==="warden")return I0(l,o,r,a,t,i);if(s.role==="finale")return U0(s,o,t,a,n,i);if(s.role==="heavy"){const c=Math.min(8,t*.08);return l%3===0?(i(o,r-c,7,!1),i(o,r+c,7,!1)):l%3===1?(i(o,a,7.4,!0),i(o,r,7,!1)):(i(o,r-c*.5,6.8,!1),i(o,r+c*.5,6.8,!1),i(o-3,r,7.2,!0)),0}return i(o+1,r,8,!1),0}function D0(s,t,e,n,i,r){const o=s%6,a=i*.16,l=i*.12;if(o===0){for(let c=-2;c<=2;c++)r(t,e+c*a,7.2,c===0);return 0}if(o===1)return r(t,n,7.6,!0),r(t,n-i*.06,7.2,!1),r(t,n+i*.06,7.2,!1),0;if(o===2)return .55;if(o===3){for(let c=-3;c<=3;c++)r(t-Math.abs(c)*2,e+c*l,6.4,!1);return 0}return o===4?(r(t,e-a*1.4,6.8,!0),r(t,e+a*1.4,6.8,!0),r(t-5,n,7.4,!0),0):.4}function I0(s,t,e,n,i,r){const o=s%6,a=i*.22;if(o===0)return r(t,e-a,6.4,!0),r(t,e+a,6.4,!0),r(t,e,7.5,!0),r(t-6,e-a*.5,6.8,!1),r(t-6,e+a*.5,6.8,!1),0;if(o===1)return r(t,n-4,6.8,!0),r(t,n+4,6.8,!0),r(t,n,7.2,!0),0;if(o===2)return .62;if(o===3){for(let l=-2;l<=2;l++)r(t,e+l*a*.55,6.2,l===0);return 0}return o===4?(r(t,e-a,6.2,!0),r(t,e+a,6.2,!0),r(t-8,n-6,6.6,!1),r(t-8,n+6,6.6,!1),r(t-4,n,7,!0),0):.48}function U0(s,t,e,n,i,r){const o=s.phase||1,a=e*(o===3?.34:.26),l=(s.patternI||0)%4;if(o===1){if(l===2)return .42;const c=3;for(let h=0;h<c;h++){const u=h/(c-1)-.5;r(t,u*a*2,8,!0)}return r(t-3,n,7.4,!0),0}if(o===2){if(l%2===0){for(let c=0;c<5;c++){const h=c/4-.5;r(t,h*a*2,7.6,!0)}return 0}return l===1?(r(t,n-a*.35,7.2,!0),r(t,n+a*.35,7.2,!0),r(t-5,n,6.8,!0),0):.4}for(let c=0;c<5;c++){const h=c/4-.5;r(t,h*a*2,7.2,!0)}return r(t-8,Math.sin(i*2.4)*a,6.6,!0),r(t-4,n,6.8,!0),l===3&&(r(t-10,-a*.7,6.4,!0),r(t-10,a*.7,6.4,!0)),0}const ge=16726996,ln=6087167,ke=16765286,Bi=656916,is=1705224,Ve=16747034,Ii=16738842,N0=16720984;function he(s,t,e=2.2){return new ns({color:s,metalness:.72,roughness:.28,emissive:t,emissiveIntensity:e})}function Bt(s,t=.85){return new Qt({color:s,transparent:!0,opacity:t,blending:pe,depthWrite:!1})}function er(s,t=.55){return new Qt({color:s,wireframe:!0,transparent:!0,opacity:t})}function zi(s,t,e,n,i,r,o,a=[]){return{mesh:s,body:t,wings:e,ring:n,core:i,engines:r,weak:o,parts:a,_baseEmissive:t.material.emissiveIntensity,_coreBaseScale:i.scale.x}}function F0(){const s=new fe,t=he(is,N0,2.2),e=he(2755090,ge,1.45),n=he(Bi,ge,1.2),i=he(1444626,Ii,1.4),r=new B(new nn(1.05,1),t);r.scale.set(.48,.43,2.15),r.position.z=.12;const o=new fe,a=[],l=new B(new yt(.44,.32,2.75),n);l.position.set(0,.08,.22);const c=new B(new yt(1.65,.12,.78),e);c.position.set(-.95,0,.22),c.rotation.z=.14;const h=c.clone();h.position.x=.95,h.rotation.z=-.14;const u=new B(new yt(1.1,.1,.58),e);u.position.set(-1.92,-.02,.62),u.rotation.set(0,-.16,.28);const d=u.clone();d.position.x=1.92,d.rotation.y=.16,d.rotation.z=-.28;const p=new B(new yt(.9,.09,.5),n);p.position.set(-.82,.02,-1.03),p.rotation.set(0,.14,.3);const g=p.clone();g.position.x=.82,g.rotation.y=-.14,g.rotation.z=-.3;const _=new B(new bn(.2,.82,4),n);_.position.set(-2.18,.22,.54);const m=_.clone();m.position.x=2.18;const f=new B(new yt(.24,.52,1.28),n);f.position.set(0,-.34,.68);const E=new B(new yt(.16,.3,.78),i);E.position.set(-.5,-.12,.78);const b=E.clone();b.position.x=.5;const v=new B(new yt(.54,.28,.66),n);v.position.set(0,.01,-1.3),v.rotation.y=Math.PI/4;const R=new B(new bn(.3,.86,5),n);R.rotation.x=-Math.PI/2,R.position.z=-1.98;const T=new B(new bn(.15,.68,4),e);T.rotation.x=-Math.PI/2,T.position.z=-2.63;const S=new B(new yt(.035,.018,1.42),Bt(ge,.75));S.position.set(-.26,.31,-.05),S.rotation.y=-.08;const A=S.clone();A.position.x=.26,A.rotation.y=.08;const M=new B(new yt(.28,.025,.035),Bt(ge,.8));M.position.set(0,.25,-1.18);const x=new B(new yt(.34,.025,.04),Bt(ln,.7));x.position.set(0,.28,1.18);const L=new B(new Lt(.13,8,6),Bt(ln,.95));L.position.set(-2.42,.02,.72);const I=L.clone();I.position.x=2.42,o.add(c,h,u,d,p,g,_,m,L,I);const O=new B(new Ee(.62,.07,8,24),Bt(ge,.8));O.rotation.x=Math.PI/2,O.position.set(0,.02,-1.15);const q=new B(new Lt(.29,12,8),Bt(ge,.78));q.position.set(0,.04,-.48);const X=new B(new Lt(.35,10,8),Bt(16734932,.95));X.position.copy(q.position);const G=[],W=[];for(const H of[-.42,.42]){const it=new B(new Se(.24,.32,.36,8),i);it.rotation.x=Math.PI/2,it.position.set(H,-.1,1.75);const rt=new B(new Ee(.27,.045,6,12),Bt(Ve,.75));rt.rotation.x=Math.PI/2,rt.position.set(H,-.1,1.96);const gt=new B(new Lt(.27,10,6),Bt(Ve,.92));gt.position.set(H,-.1,2.08),W.push(it,rt),G.push(gt)}return a.push(l,c,h,u,d,p,g,_,m,f,E,b,v,R,T,S,A,M,x,...W),s.add(r,l,o,f,E,b,v,R,T,S,A,M,x,O,q,X,...W,...G),zi(s,r,o,O,q,G,X,a)}function O0(){const s=new fe,t=he(is,ge,1.9),e=he(1641245,ge,1.35),n=he(2758408,ke,1.65),i=he(Bi,Ii,1.35),r=new B(new Se(.98,1.12,.62,12),t);r.rotation.x=Math.PI/2,r.position.z=.12;const o=new B(new nn(.82,1),e);o.scale.set(.85,.52,.95),o.position.set(0,.02,-.62);const a=new B(new yt(.34,.28,1.8),n);a.position.set(0,-.03,1.12);const l=new fe,c=[o,a],h=[1,1.48,2.05,2.64,3.18,3.62],u=[.15,.28,.48,.74,1,.58],d=[1,1.08,1.12,1.06,.9,.68];for(const T of[-1,1])for(let S=0;S<h.length;S++){const A=new B(new yt(d[S],.12,.58+S%2*.12),e);A.position.set(T*h[S],.02+Math.sin(S*.8)*.05,u[S]),A.rotation.y=T*(.12+S*.075),A.rotation.z=T*(.1-S*.035),l.add(A),S>=2&&c.push(A)}for(const T of[-1,1]){const S=new B(new yt(.62,.1,1.15),n);S.position.set(T*2.1,-.18,1.72),S.rotation.y=T*.22;const A=new B(new yt(.46,.08,1.28),e);A.position.set(T*3.18,-.1,1.88),A.rotation.y=T*.3,l.add(S,A),c.push(S,A)}const p=new B(new nn(.35,0),e);p.scale.set(.7,.42,1.25),p.position.set(-3.9,0,.44);const g=p.clone();g.position.x=3.9,l.add(p,g),c.push(p,g);const _=new B(new Ee(1.42,.11,8,28),Bt(ke,.86));_.rotation.x=Math.PI/2,_.position.set(0,.08,-.55);const m=new B(new Lt(.44,12,8),Bt(ln,.72));m.position.set(0,0,-.03);const f=new B(new Lt(.5,10,8),Bt(ge,.92));f.position.copy(m.position);const E=[];for(const[T,S,A,M,x]of[[-.72,-.08,1.35,2.45,-.12],[.72,-.08,1.35,2.45,.12],[-.34,.18,1.72,1.7,-.22],[.34,.18,1.72,1.7,.22]]){const L=new B(new Se(.045,.035,M,6),n);L.rotation.x=Math.PI/2,L.rotation.y=x,L.position.set(T,S,A),E.push(L)}const b=E.map(T=>{const S=new B(new Se(.075,.06,T.geometry.parameters.height,5),Bt(ke,.48));return S.position.copy(T.position),S.rotation.copy(T.rotation),S}),v=[],R=[];for(const T of[-1.22,1.22]){const S=new B(new Se(.4,.5,.72,8),i);S.rotation.x=Math.PI/2,S.position.set(T,-.16,2.08);const A=new B(new Ee(.42,.06,6,14),Bt(Ve,.72));A.rotation.x=Math.PI/2,A.position.set(T,-.16,2.45);const M=new B(new Lt(.34,10,6),Bt(Ve,.9));M.position.set(T,-.16,2.55),R.push(S,A),v.push(M)}return c.push(...E,...b,...R),s.add(r,o,a,l,_,m,f,...E,...b,...R,...v),zi(s,r,l,_,m,v,f,c)}function B0(){const s=new fe,t=he(2757120,Ii,2.6),e=he(2758664,ke,1.8),n=he(Bi,ke,1.45),i=he(1706500,Ii,2.4),r=new B(new yt(2.7,1.45,3.1),t);r.position.set(0,.02,.15);const o=new B(new nn(1.2,0),t);o.scale.set(.95,.62,1.15),o.position.set(0,.02,-1.02);const a=new B(new yt(1.55,.4,2),n);a.position.set(0,-.72,.5);const l=new fe,c=[o,a],h=new B(new yt(2.65,.42,1.72),e);h.position.set(-2,0,.52);const u=h.clone();u.position.x=2;const d=new B(new yt(1.28,.68,1.32),n);d.position.set(-3.36,.02,.46),d.rotation.y=-.1;const p=d.clone();p.position.x=3.36,p.rotation.y=.1;const g=new B(new yt(1,.28,1.52),e);g.position.set(-1.72,.48,1.34);const _=g.clone();_.position.x=1.72;const m=new B(new yt(3.7,.3,.72),n);m.position.set(0,.63,-.68),m.rotation.x=-.08,l.add(h,u,d,p,g,_),c.push(h,u,d,p,g,_,m);const f=[],E=[];for(const O of[-1.02,1.02]){const q=new B(new Se(.27,.38,1.55,8),i);q.rotation.x=Math.PI/2,q.position.set(O,.42,-1.78);const X=new B(new Ee(.3,.065,6,12),Bt(Ve,.8));X.rotation.x=Math.PI/2,X.position.set(O,.42,-2.56),f.push(q),E.push(X)}const b=new B(new Se(.32,.42,.42,8),i);b.position.set(-1.22,.95,.18);const v=b.clone();v.position.x=1.22;const R=new B(new yt(.18,.06,.8),Bt(ln,.7));R.position.set(-.72,.75,.55);const T=R.clone();T.position.x=.72,c.push(...f,...E,b,v,R,T);const S=new B(new Ee(2.48,.2,8,30),Bt(ke,.88));S.rotation.x=Math.PI/2,S.position.set(0,-.08,-.32);const A=new B(new Lt(.57,12,8),Bt(Ve,.82));A.position.set(0,-.02,-.05);const M=new B(new Lt(.64,10,8),Bt(ke,.95));M.position.copy(A.position);const x=[],L=[];for(const[O,q,X,G]of[[-.94,-.43,2.1,1],[.94,-.43,2.1,1],[0,-.52,2.32,.88]]){const W=new B(new Se(.36*G,.47*G,.5,8),i);W.rotation.x=Math.PI/2,W.position.set(O,q,X);const H=new B(new Ee(.39*G,.065,6,14),Bt(Ve,.72));H.rotation.x=Math.PI/2,H.position.set(O,q,X+.27);const it=new B(new Lt(.4*G,10,6),Bt(Ve,.93));it.position.set(O,q,X+.42),L.push(W,H),x.push(it)}const I=new B(new yt(1.15,1.15,1),n);return I.position.set(0,.88,.22),c.push(I,...L),s.add(r,o,a,l,m,...f,...E,b,v,R,T,S,A,M,I,...L,...x),zi(s,r,l,S,A,x,M,c)}function z0(){const s=new fe,t=he(is,ge,2.4),e=he(1706008,ge,1.6),n=he(Bi,ge,2),i=he(2496263,ke,1.6),r=new B(new Qe(1.25,1),t);r.position.set(0,.12,.18);const o=new B(new Qe(1.7,2),er(ge,.52));o.position.copy(r.position);const a=new B(new Qe(1.42,1),er(ln,.32));a.position.set(0,.12,.18);const l=new fe,c=[o,a],h=[1.15,1.82,2.62,3.5,4.38,5.22,6.03,6.65],u=[.12,.24,.43,.64,.82,.94,.76,.45],d=[1.15,1.3,1.42,1.45,1.32,1.14,.92,.58];for(const v of[-1,1])for(let R=0;R<h.length;R++){const T=new B(new yt(d[R],.16,.78+R%3*.12),e);T.position.set(v*h[R],.03+Math.sin(R)*.08,u[R]),T.rotation.y=v*(.08+R*.065),T.rotation.z=v*(.08+R*.025),l.add(T),R>=3&&c.push(T)}const p=[];for(const[v,R,T,S,A,M,x]of[[-3.2,1.05,-.18,.34,.9,.5,-.4],[3.2,1.05,-.18,.34,.9,.5,.4],[-5.18,-.42,1.05,.26,.75,.42,-.55],[5.18,-.42,1.05,.26,.75,.42,.55],[-6.78,.36,.32,.2,.65,.34,-.72],[6.78,.36,.32,.2,.65,.34,.72]]){const L=new B(new nn(.75,0),n);L.position.set(v,R,T),L.scale.set(S,A,M),L.rotation.z=x,p.push(L)}const g=[];for(const[v,R,T,S]of[[-1.55,1.22,-.18,-.45],[-.78,1.55,-.32,-.2],[0,1.75,-.4,0],[.78,1.55,-.32,.2],[1.55,1.22,-.18,.45],[-2.4,.88,-.08,-.65],[2.4,.88,-.08,.65]]){const A=new B(new bn(.26,1.08,5),n);A.position.set(v,R,T),A.rotation.z=S,g.push(A)}l.add(...p,...g),c.push(...p,...g);const _=new B(new Ee(3.82,.13,10,42),Bt(ge,.88));_.rotation.x=Math.PI/2,_.position.set(0,.3,.1);const m=new B(new Lt(.68,14,10),Bt(ln,.68));m.position.set(0,.08,.1);const f=new B(new Lt(.92,14,10),Bt(ge,1));f.position.set(0,-1.55,.28);const E=[],b=[];for(const v of[-1.82,0,1.82]){const R=new B(new Se(.38,.5,.58,8),i);R.rotation.x=Math.PI/2,R.position.set(v,-.25,2.55);const T=new B(new Lt(v===0?.42:.47,10,6),Bt(Ve,.9));T.position.set(v,-.25,2.92),b.push(R),E.push(T)}return c.push(...b),s.add(r,o,a,l,_,m,f,...b,...E),zi(s,r,l,_,m,E,f,c)}function k0(){const s=new fe,t=he(Bi,ke,2),e=he(2757120,ke,2.2),n=he(1706504,Ii,2.3),i=he(1705988,Ii,2.8),r=new B(new yt(3.65,1.5,3.65),t);r.position.set(0,0,.12);const o=new B(new yt(3.05,1,3.05),n);o.position.set(0,.48,.18);const a=new B(new yt(1.65,2.25,1.65),t);a.position.set(0,1.18,.08);const l=new fe,c=[o,a],h=new B(new yt(11,.58,1.38),e);h.position.set(0,-.02,.16);const u=new B(new yt(1.38,.58,11),e);u.position.set(0,-.02,.16);const d=new B(new yt(3.2,.42,1.05),t);d.position.set(-2.45,.35,-2.45),d.rotation.y=-Math.PI/4;const p=d.clone();p.position.x=2.45,p.rotation.y=Math.PI/4,l.add(h,u,d,p),c.push(h,u,d,p);const g=[];for(const[S,A,M]of[[-4.55,-4.32,-1],[4.55,-4.32,-1],[-4.55,4.62,1],[4.55,4.62,1]]){const x=new B(new Se(.4,.54,1.6,8),i);x.rotation.x=Math.PI/2,x.position.set(S,.32,A),M>0&&(x.rotation.x=-Math.PI/2);const L=new B(new Ee(.43,.07,6,14),Bt(Ve,.82));L.rotation.x=Math.PI/2,L.position.set(S,.32,A+M*.8),g.push(x,L)}l.add(...g),c.push(...g);const _=[];for(const[S,A]of[[-2.15,-2.1],[2.15,-2.1],[-2.15,2.32],[2.15,2.32]]){const M=new B(new yt(.9,.72,.92),t);M.position.set(S,.82,A),M.rotation.y=S*A<0?.16:-.16,_.push(M)}l.add(..._),c.push(..._);const m=new B(new Ee(3.25,.15,9,36),Bt(ke,.9));m.rotation.x=Math.PI/2,m.position.set(0,-.38,.1);const f=new B(new Ee(6.28,.12,9,44),Bt(ke,.72));f.rotation.x=Math.PI/2,f.position.set(0,-.56,.08);const E=m;c.push(f);const b=new B(new Lt(.74,14,10),Bt(Ve,.78));b.position.set(0,.12,.16);const v=new B(new Lt(.86,14,10),Bt(ke,.96));v.position.copy(b.position);const R=[],T=[];for(const[S,A,M]of[[-1.26,-.42,3.05],[1.26,-.42,3.05],[0,-.54,3.45]]){const x=new B(new Se(.42,.56,.58,8),i);x.rotation.x=Math.PI/2,x.position.set(S,A,M);const L=new B(new Lt(.48,10,6),Bt(Ve,.92));L.position.set(S,A,M+.42),T.push(x),R.push(L)}return c.push(...T),s.add(r,o,a,l,m,f,b,v,...T,...R),zi(s,r,l,E,b,R,v,c)}function V0(){const s=new fe,t=1.7,e=he(Bi,ln,2.5),n=he(is,ge,1.8),i=he(is,ge,2.8),r=new B(new Qe(1.62,1),e);r.scale.setScalar(t*.95);const o=new B(new Qe(2.12,1),n);o.scale.setScalar(t*.84);const a=new B(new Qe(2.78,2),er(ln,.55));a.scale.setScalar(t*.92);const l=new B(new Qe(2.45,1),er(ge,.28));l.scale.setScalar(t*1.02);const c=new fe,h=[o,l],u=[[0,0,-1],[.72,.28,-.62],[-.72,.28,-.62],[.76,-.3,.58],[-.76,-.3,.58],[0,.82,.38],[0,-.82,.42],[.72,.5,.18]],d=[],p=new P(0,1,0);for(const[T,S,A]of u){const M=new P(T,S,A).normalize(),x=new B(new bn(.34,1.8,5),i);x.position.copy(M).multiplyScalar(t*3.12),x.quaternion.setFromUnitVectors(p,M),x.scale.setScalar(t),d.push(x)}c.add(...d),h.push(...d);const g=new B(new Ee(3.92*t,.13*t,9,42),Bt(ln,.82));g.rotation.x=Math.PI/2;const _=new B(new Ee(3.62*t,.1*t,9,38),Bt(ln,.68)),m=new B(new Ee(4.25*t,.115*t,9,44),Bt(ge,.74));m.rotation.y=Math.PI/2;const f=g;h.push(_,m);const E=new B(new Lt(.7,14,10),Bt(ge,.74));E.scale.setScalar(t*.82);const b=new B(new Lt(.86,14,10),Bt(ge,1));b.scale.setScalar(t*.82),b.position.set(0,-.28*t,.22*t);const v=[],R=[];for(const[T,S]of[[-1.38,-.72],[1.38,-.72],[-1.38,.72],[1.38,.72]]){const A=new B(new Se(.38,.5,.62,8),n);A.rotation.x=Math.PI/2,A.position.set(T*t,S*t,3.35*t);const M=new B(new Lt(.42,10,6),Bt(Ve,.94));M.position.set(T*t,S*t,3.78*t),R.push(A),v.push(M)}return h.push(...R),s.add(r,o,a,l,c,g,_,m,E,b,...R,...v),zi(s,r,c,f,E,v,b,h)}function Fn(s,t){const e=s._baseEmissive??2.2,n=Math.max(0,Math.min(1,t));s.body.material.emissiveIntensity=e+n*8}function Yr(s,t){const e=Math.max(1,Math.min(3,t)),n=s.parts??[],i=s._coreBaseScale??1;if(e===1){for(const r of n)r.visible=!0;s.core.scale.setScalar(i),s.weak&&(s.weak.visible=!0),s.ring&&(s.ring.visible=!0),s.wings&&(s.wings.visible=!0)}else if(e===2){const r=Math.max(1,Math.floor(n.length*.45));n.forEach((o,a)=>{o.visible=a>=r}),s.core.scale.setScalar(i*1.35),s.weak&&(s.weak.visible=!0)}else n.forEach(r=>{r.visible=!1}),s.core.scale.setScalar(i*1.85),s.weak&&(s.weak.visible=!0),s.ring&&(s.ring.visible=!1)}const yl={dive:F0,sine:O0,heavy:B0,queen:z0,warden:k0};function H0(s){return new le({uniforms:{uTime:{value:0},uSeed:{value:Math.random()*40},uColor:{value:new j(s)}},vertexShader:n0,fragmentShader:i0,transparent:!0,blending:pe,depthWrite:!1})}class G0{constructor(t){this.scene=t,this.orbs=[],this.gates=[],this.enemies=[],this.blockers=[],this.bullets=[],this.enemyShots=[],this.pickups=[],this.explosions=[],this.impacts=[],this.boss=null,this.time=0,this.laneLimit=24,this._seedOrbs(),this._seedGates(),this._seedEnemies(),this._seedBlockers(),this._seedBullets(),this._seedPickups(),this._seedExplosions(),this._seedImpacts()}_seedOrbs(){for(let t=0;t<28;t++){const e=t%3===0?"#ffd166":"#5ce1ff",n=H0(e),i=new B(new Qe(.55,1),n),r=new B(new Lt(1.1,16,12),new Qt({color:e,transparent:!0,opacity:.18,blending:pe,depthWrite:!1}));i.add(r),i.visible=!1,this.scene.add(i),this.orbs.push({mesh:i,alive:!1,pathDist:0,radius:1.4,value:t%3===0?40:12,color:new j(e),offset:new P})}}_seedGates(){for(let t=0;t<8;t++){const e=new fe,n=new B(new Ee(6.4,.22,12,64),new ns({color:1056816,emissive:16726996,emissiveIntensity:3.4,metalness:.4,roughness:.25})),i=new B(new Qo(6,32),new Qt({color:16726996,transparent:!0,opacity:.28,blending:pe,depthWrite:!1,side:Je}));e.add(n,i),e.visible=!1,this.scene.add(e),this.gates.push({mesh:e,ring:n,shield:i,alive:!1,pathDist:0,passed:!1,locked:!0,hp:4,burst:0,burstAge:0,pulse:0})}}_seedEnemies(){for(let t=0;t<28;t++){const e=new fe;e.visible=!1,this.scene.add(e),this.enemies.push({mesh:e,kits:{},craft:null,ring:null,wings:null,body:null,alive:!1,pathDist:0,hp:4,radius:3.4,cooldown:0,windup:0,windMax:.18,flash:0,elite:!1,offset:new P,role:"dive",nearMiss:!1,patternI:0,visPhase:1,weak:null,core:null})}}_seedBlockers(){for(let t=0;t<12;t++){const e=new B(new nn(1,0),new ns({color:2757120,metalness:.45,roughness:.28,emissive:16747034,emissiveIntensity:3.2})),n=new B(new Lt(1.35,16,12),new Qt({color:16751162,transparent:!0,opacity:.16,blending:pe,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.blockers.push({mesh:e,alive:!1,pathDist:0,hp:3,radius:3.2,offset:new P})}}_seedBullets(){this._shotGeo={spark:new yt(.22,.22,1.15),needle:new yt(.12,.12,14),titan:new yt(1.85,.62,6.8),seeker:new nn(.55,0),shard:new wi(.42,0),mine:new Lt(.55,10,8),nova:new nn(.4,0),wing:new yt(.28,.12,3.4),helix:new yt(.22,.22,4.2),shear:new yt(.55,.18,3.8),spire:new yt(.1,.1,16),drone:new Lt(.32,8,6),prism:new yt(.22,.22,2.4)},this._tracerGeo=new yt(.06,.06,3.6);for(let t=0;t<480;t++){const e=new B(this._shotGeo.spark,new Qt({color:15269887})),n=new B(this._tracerGeo,new Qt({color:11075576,transparent:!0,opacity:.55,blending:pe,depthWrite:!1}));n.position.z=1.4,e.add(n),e.visible=!1,this.scene.add(e),this.bullets.push({mesh:e,vel:new P,alive:!1,life:0,pathDist:0,laneX:0,along:1,speed:120,laneDrift:0,damage:1,home:0,homeSteer:0,pierce:0,hitR:1.6,wobble:0,phase:0,hitList:[],kind:"spark",tracer:n})}for(let t=0;t<96;t++){const e=new B(new Lt(.58,12,10),new Qt({color:16718408})),n=new B(new Lt(1.05,12,10),new Qt({color:16722530,transparent:!0,opacity:.55,blending:pe,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.enemyShots.push({mesh:e,vel:new P,alive:!1,life:0,pathDist:0,laneX:0,along:-1,speed:8,fat:!1})}}_seedPickups(){for(let t=0;t<48;t++){const e=new B(new wi(1.15,0),new Qt({color:8057087})),n=new B(new Lt(1.85,10,8),new Qt({color:6087167,transparent:!0,opacity:.28,blending:pe,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.pickups.push({mesh:e,glow:n,alive:!1,pathDist:0,laneX:0,radius:2.1,value:1,magnet:0,grace:0})}}_seedExplosions(){this._shardGeo=new wi(.32,0),this._flashGeo=new Lt(.7,8,6);for(let t=0;t<16;t++){const e=new fe,n=new Qt({color:6087167,transparent:!0,opacity:1,depthWrite:!1}),i=[];for(let a=0;a<10;a++){const l=new B(this._shardGeo,n);l.userData.vel=new P,e.add(l),i.push(l)}const r=new Qt({color:16777215,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),o=new B(this._flashGeo,r);e.add(o),e.visible=!1,this.scene.add(e),this.explosions.push({group:e,shards:i,shardMat:n,flash:o,flashMat:r,alive:!1,life:0,duration:.45})}}_seedImpacts(){for(let t=0;t<72;t++){const e=new B(new Lt(.22,6,6),new Qt({color:10156031,transparent:!0,opacity:1,blending:pe,depthWrite:!1}));e.visible=!1,this.scene.add(e),this.impacts.push({mesh:e,vel:new P,alive:!1,life:0,duration:.16})}}reset(){for(const t of[this.orbs,this.gates,this.enemies,this.blockers,this.bullets,this.enemyShots,this.pickups])for(const e of t)e.alive=!1,e.mesh.visible=!1,"passed"in e&&(e.passed=!1),"locked"in e&&(e.locked=!0),"nearMiss"in e&&(e.nearMiss=!1),"burst"in e&&(e.burst=0),"burstAge"in e&&(e.burstAge=0),"grace"in e&&(e.grace=0);this.boss&&(this.scene.remove(this.boss.mesh),this.boss=null);for(const t of this.explosions)t.alive=!1,t.life=0,t.group.visible=!1;for(const t of this.impacts)t.alive=!1,t.life=0,t.mesh.visible=!1;this.time=0,this.laneLimit=24}spawnAhead(t,e){this._placeInactive(this.orbs,t,e,78,7,"orb")}spawnSquad(t,e,n,i,r,o=90){const a=this.laneLimit||24,l=r||4,c=x0(n,l,a);for(let h=0;h<l;h++){const u=this.enemies.find(p=>!p.alive);if(!u)break;const d=e+o+M0(n,h);this._placeOne(u,t,d,"enemy"),this._dressEnemy(u,i||"dive",1,c[h]??0,a)}}spawnNamed(t,e,n,i=96,r=0){const o=this.enemies.find(a=>!a.alive);o&&(this._placeOne(o,t,e+i,"enemy"),this._dressEnemy(o,n,1,0,this.laneLimit||24,r))}spawnGateAt(t,e,n=72){const i=this.gates.find(r=>!r.alive);i&&this._placeOne(i,t,e+n,"gate")}spawnOrbsAt(t,e,n=4,i=48){for(let r=0;r<n;r++){const o=this.orbs.find(a=>!a.alive);if(!o)break;this._placeOne(o,t,e+i+r*9,"orb")}}spawnBlockersAt(t,e,n=2,i=80){for(let r=0;r<n;r++){const o=this.blockers.find(a=>!a.alive);if(!o)break;this._placeOne(o,t,e+i+r*14,"blocker")}}spawnFinale(t,e,n=96,i=0){this.boss?.alive||this._spawnBoss(t,e+n,i)}_placeInactive(t,e,n,i,r,o){let a=t.filter(l=>l.alive).length;for(;a<Math.min(r,t.length);){const l=t.find(c=>!c.alive);if(!l)break;this._placeOne(l,e,n+70+a*i+Math.random()*24,o),a++}}_placeOne(t,e,n,i){const r=e.sample(n),o=wn(r.tangent),a=this.laneLimit||24;let l=0,c=0;if(i==="orb")l=(Math.random()-.5)*a*1.7,c=(Math.random()-.5)*16;else if(i==="enemy")l=(Math.random()-.5)*a*1.7,c=0;else if(i==="blocker"){l=(Math.random()-.5)*a*1.7,c=0;const h=2.4+Math.random()*1.6;t.mesh.scale.setScalar(h),t.radius=1.15*h,t.hp=3}else i==="gate"&&(t.passed=!1,t.locked=!0,t.hp=4,t.burst=0,t.burstAge=0,t.shield.visible=!0,t.shield.material.color.set(16726996),t.shield.material.opacity=.32,t.ring.material.emissive.set(16726996),t.ring.material.emissiveIntensity=3.4,t.ring.scale.set(1,1,1));t.mesh.position.copy(r.pos).addScaledVector(o.binormal,l).addScaledVector(o.normal,c),t.mesh.visible=!0,t.alive=!0,t.pathDist=n,t.offset=new P(l,c,0),i==="enemy"&&(t.baseX=l),t.mesh.lookAt(r.pos.clone().add(r.tangent))}_dressEnemy(t,e,n,i,r,o=0){this._bindCraft(t,e),t.role=e,t.nearMiss=!1,t.flash=0,t.windup=0,t.patternI=0,t.visPhase=1,t.elite=e==="queen"||e==="warden",t.offset.x=i+(Math.random()-.5)*r*.03,t.baseX=t.offset.x,t.weave=.55+Math.random()*.7;const a=n>2.4?1:0;t.mesh.scale.setScalar(1),t.craft&&Yr(t.craft,1),e==="queen"?(t.hp=ks("queen",o),t.maxHp=t.hp,t.radius=7.4,t.descent=.52,t.cooldown=.85,t.windMax=.46,t.drop=4,t.bombDrop=1):e==="warden"?(t.hp=ks("warden",o),t.maxHp=t.hp,t.radius=7.6,t.descent=.38,t.cooldown=1.05,t.windMax=.55,t.drop=5,t.bombDrop=1):e==="heavy"?(t.hp=11+a,t.maxHp=t.hp,t.radius=4.8,t.descent=.85+Math.random()*.55,t.cooldown=1.4+Math.random()*.8,t.windMax=.45,t.drop=2,t.bombDrop=0):e==="sine"?(t.hp=6+a,t.maxHp=t.hp,t.radius=4.2,t.descent=1.35+Math.random()*1.1,t.cooldown=1.9+Math.random()*1.3,t.windMax=.22,t.drop=1,t.bombDrop=0):(t.hp=5+a,t.maxHp=t.hp,t.radius=3.35,t.descent=2.1+Math.random()*1.5,t.cooldown=1.7+Math.random()*1.4,t.windMax=.16,t.drop=1,t.bombDrop=0)}_bindCraft(t,e){const n=yl[e]?e:"dive";if(t.kits||(t.kits={}),!t.kits[n]){const r=yl[n]();t.mesh.add(r.mesh),t.kits[n]=r}for(const[r,o]of Object.entries(t.kits))o.mesh.visible=r===n;const i=t.kits[n];t.craft=i,t.body=i.body,t.wings=i.wings,t.ring=i.ring,t.core=i.core,t.weak=i.weak}_spawnBoss(t,e,n=0){const i=V0();this.scene.add(i.mesh),this.boss={mesh:i.mesh,craft:i,body:i.body,wings:i.wings,ring:i.ring,core:i.core,weak:i.weak,shell:i.ring,pathDist:e,hp:ks("finale",n),maxHp:ks("finale",n),cooldown:.6,windup:0,windMax:.42,radius:7.6,alive:!0,elite:!0,role:"finale",phase:1,visPhase:1,patternI:0,flash:0,bombDrop:0,drop:8,offset:new P(0,0,0)},Yr(i,1);const r=t.sample(e);i.mesh.position.copy(r.pos)}fireRail(t,e,n,i=1,r={}){const o=this.bullets.find(a=>!a.alive);return o?(o.alive=!0,o.life=r.life??1.15,o.pathDist=e,o.laneX=n,o.along=i,o.speed=r.speed??124,o.laneDrift=r.drift??0,o.damage=r.damage??1,o.home=r.home??0,o.homeSteer=r.homeSteer??0,o.pierce=r.pierce??0,o.hitR=r.hitR??1.6,o.wobble=r.wobble??0,o.phase=r.phase??Math.random()*6.28,o.kind=r.kind||"spark",o.hitList=[],this._dressBullet(o,r),o.mesh.visible=!0,this._placeRailShot(o,t),!0):!1}_dressBullet(t,e){const n=e.kind||"spark",i=this._shotGeo[n]||this._shotGeo.spark;t.mesh.geometry!==i&&(t.mesh.geometry=i);const r=e.scale??1;let o=r,a=r,l=1;if(n==="spark"||n==="shard"||n==="prism"?l=1:n==="seeker"?(o=r*1.15,a=r*1.15,l=1):n==="titan"?(o=r,a=r,l=1):n==="mine"?(o=r*1.2,a=r*1.2,l=1):n==="wing"||n==="nova"?l=1:n==="spire"||n==="needle"?(o=r,a=r,l=1):(n==="helix"||n==="shear"||n==="drone")&&(l=1),t.mesh.scale.set(o,a,l),t.mesh.material.color.set(e.color??15269887),t.tracer){const c=n==="needle"||n==="spire"||n==="spark"||n==="helix";t.tracer.visible=c,t.tracer.material.color.set(e.color??11075576),t.tracer.scale.set(n==="needle"||n==="spire"?.7:1,n==="needle"||n==="spire"?.7:1,n==="needle"||n==="spire"?2.4:1)}}enemyFireRail(t,e,n,i=8,r=!1){const o=this.enemyShots.find(a=>!a.alive);o&&(o.alive=!0,o.life=r?4.2:3.6,o.pathDist=e,o.laneX=n,o.along=-1,o.speed=i,o.fat=r,o.mesh.scale.setScalar(r?1.55:1),o.mesh.material.color.set(r?16711736:16718408),o.mesh.visible=!0,this._placeRailShot(o,t))}_placeRailShot(t,e){const n=ji(e,t.pathDist,t.laneX,.45);t.mesh.position.copy(n.pos),t.vel.copy(n.sample.tangent).multiplyScalar(t.along*t.speed),t.mesh.lookAt(n.pos.clone().addScaledVector(n.sample.tangent,t.along))}explode(t,e=6087167){let n=this.explosions.find(i=>!i.alive);if(!n){n=this.explosions[0];for(const i of this.explosions)i.life<n.life&&(n=i)}n.alive=!0,n.duration=.45,n.life=n.duration,n.group.visible=!0,n.group.position.copy(t),n.shardMat.color.set(e),n.shardMat.opacity=1,n.flashMat.color.set(e),n.flashMat.opacity=.85,n.flash.scale.setScalar(1);for(const i of n.shards)i.position.set(0,0,0),i.scale.setScalar(.65+Math.random()*.7),i.userData.vel.randomDirection().multiplyScalar(7+Math.random()*9)}spawnImpact(t,e=10156031){const n=5+(Math.random()*3|0);let i=0;for(const r of this.impacts)if(!r.alive&&(r.alive=!0,r.duration=.14+Math.random()*.08,r.life=r.duration,r.mesh.visible=!0,r.mesh.position.copy(t).add(new P().randomDirection().multiplyScalar(.35)),r.vel.randomDirection().multiplyScalar(10+Math.random()*16),r.mesh.material.color.set(e),r.mesh.scale.setScalar(.7+Math.random()*.9),i+=1,i>=n))break}bombSweep(t,e,n=16){let i=0,r=0;const o=[];for(const l of this.enemyShots)l.alive&&(this.spawnImpact(l.mesh.position.clone(),16769162),l.alive=!1,l.mesh.visible=!1,i+=1);const a=t+e;for(const l of this.enemies){if(!l.alive)continue;const c=l.pathDist-a;c<-10||c>78||(l.hp-=l.elite?Math.max(n,(l.maxHp||l.hp)*.08):n,l.flash=.2,l.craft&&Fn(l.craft,.9),this._syncVisPhase(l),r+=1,this.spawnImpact(l.mesh.position.clone(),16761165),l.hp<=0&&(l.alive=!1,l.mesh.visible=!1,this.explode(l.mesh.position.clone(),l.elite?16765286:16747066),o.push({type:l.elite?"midboss":"enemy",role:l.role,pos:l.mesh.position.clone(),pathDist:l.pathDist,laneX:l.offset.x,drop:l.drop??1,bombDrop:l.bombDrop??0})))}if(this.boss?.alive){const l=this.boss.pathDist-a;l>-10&&l<90&&(this.boss.hp-=Math.max(n,this.boss.maxHp*.08),this.boss.craft&&Fn(this.boss.craft,.9),this._syncVisPhase(this.boss),r+=1,this.spawnImpact(this.boss.mesh.position.clone(),16765286),this.boss.hp<=0&&(this.boss.alive=!1,this.boss.mesh.visible=!1,this.explode(this.boss.mesh.position.clone(),16726996),o.push({type:"boss",pos:this.boss.mesh.position.clone(),pathDist:this.boss.pathDist,laneX:0,drop:8,bombDrop:0})))}return{shots:i,hunters:r,killed:o}}spawnMote(t,e,n,i=1,r={}){const o=[],a=r.spread??3.4;for(let l=0;l<i;l++){const c=this.pickups.find(h=>!h.alive);if(!c)break;c.alive=!0,c.pathDist=e+(Math.random()-.5)*3,c.laneX=n+(l-(i-1)/2)*a+(Math.random()-.5)*1.6,c.value=1,c.magnet=0,c.grace=r.grace??0,c.mesh.visible=!0,c.mesh.scale.setScalar(1),this._placeMote(c,t),o.push(c)}return o}_placeMote(t,e){const n=ji(e,t.pathDist,t.laneX,.55);t.mesh.position.copy(n.pos)}recycleBehind(t,e=8){const n=t+Math.min(e,0)-40;for(const i of[this.orbs,this.gates,this.enemies,this.blockers,this.pickups])for(const r of i){if(!r.alive)continue;if(r.pathDist<n){if(r.burst>0||r.elite)continue;r.alive=!1,r.mesh.visible=!1}}}hunterCount(){return this.enemies.filter(t=>t.alive).length+(this.boss?.alive?1:0)}activeBoss(){const t=this.enemies.find(e=>e.alive&&e.elite);return t||(this.boss?.alive?this.boss:null)}blockerAhead(t){return this.blockers.some(e=>e.alive&&e.pathDist-t<70&&e.pathDist>t)}_telegraphAndFire(t,e,n,i,r){const o=t.body;if(t.flash>0?t.craft?Fn(t.craft,Math.min(1,t.flash*5)):o&&(o.material.emissiveIntensity=2.2+t.flash*8):(t.windup||0)<=0&&t.craft&&Fn(t.craft,0),!r){t.windup>0&&(t.windup=0),t.ring&&t.ring.scale.setScalar(1);return}if(t.windup>0){t.windup-=e;const a=1-t.windup/Math.max(.08,t.windMax||.4);if(t.ring&&t.ring.scale.setScalar(1+a*.55),t.craft?Fn(t.craft,.25+a*.85):o&&(o.material.emissiveIntensity=2.2+a*5.5),t.shell?.material?.opacity!=null&&(t.shell.material.opacity=.55+a*.4),t.windup<=0){const l=L0(t,this.laneLimit||24,this._playerLane??0,this.time,(c,h,u,d)=>{this.enemyFireRail(n,c,h,u??8,d)});t.ring&&t.ring.scale.setScalar(1),t.cooldown=this._reloadFor(t,i)+(l||0)}return}t.cooldown-=e,t.cooldown<=0&&(t.windMax=t.windMax||.2,t.windup=t.windMax)}_syncVisPhase(t){if(!t?.craft||!(t.elite||t.role==="finale"))return;const e=t.hp/Math.max(1,t.maxHp||t.hp),n=e>.66?1:e>.33?2:3;n!==t.visPhase&&(t.visPhase=n,t.role==="finale"&&(t.phase=n),Yr(t.craft,n))}_reloadFor(t,e){return t.role==="finale"?t.phase===3?1.15:t.phase===2?1.45:1.85:t.role==="queen"?1.55:t.role==="warden"?1.7:t.role==="heavy"?Math.max(1.85,2.4-e*.06):Math.max(2.1,2.8-e*.08)}_enemyVolley(t,e,n){const i=t.offset?.x??0,r=t.pathDist-4,o=this.laneLimit||24;if(t.role==="queen"){const a=o*.16;for(let l=-2;l<=2;l++)this.enemyFireRail(e,r,i+l*a,7.2,Math.abs(l)===0);return}if(t.role==="warden"){const a=o*.22;this.enemyFireRail(e,r,i-a,6.4,!0),this.enemyFireRail(e,r,i+a,6.4,!0),this.enemyFireRail(e,r,i,7.5,!0),this.enemyFireRail(e,r-6,i-a*.5,6.8),this.enemyFireRail(e,r-6,i+a*.5,6.8);return}if(t.role==="finale"){const a=o*(t.phase===3?.34:.26),l=t.phase===1?3:5;for(let c=0;c<l;c++){const h=l===1?0:c/(l-1)-.5;this.enemyFireRail(e,r,h*a*2,t.phase===3?7.2:8,!0)}t.phase===3&&this.enemyFireRail(e,r-8,Math.sin(this.time*2.4)*a,6.6,!0);return}if(t.role==="heavy"){const a=Math.min(8,o*.08);this.enemyFireRail(e,r,i-a,7),this.enemyFireRail(e,r,i+a,7);return}this.enemyFireRail(e,r+1,i,8)}update(t,e,n,i,r,o,a=8){this.time+=t;for(const l of this.orbs){if(!l.alive)continue;l.mesh.material.uniforms.uTime.value=this.time,l.mesh.rotation.y+=t*1.4;const c=e.sample(l.pathDist),h=wn(c.tangent);l.mesh.position.copy(c.pos).addScaledVector(h.binormal,l.offset.x).addScaledVector(h.normal,l.offset.y+Math.sin(this.time*3+l.pathDist)*.35)}for(const l of this.gates){if(!l.alive)continue;const c=e.sample(l.pathDist);if(l.mesh.position.copy(c.pos),l.mesh.lookAt(c.pos.clone().add(c.tangent)),l.burst>0){l.burstAge=(l.burstAge||0)+t;const h=l.burstAge,u=(_,m)=>Math.exp(-(_*_)/(m*m)),d=1*u(h-.24,.18)+.62*u(h-.92,.26)+.32*u(h-1.64,.32)-.24*u(h-.55,.14)-.14*u(h-1.26,.18),p=1+d*1.18;l.pulse=Math.max(0,d),l.ring.scale.set(p,p,1),l.ring.rotation.z+=t*(.7+l.pulse*2.4);const g=3.2+l.pulse*8.5;l.ring.material.emissive.setRGB(.42+l.pulse*.55,.82+l.pulse*.18,1),l.ring.material.emissiveIntensity=g,h>2.2&&(l.burst=0,l.burstAge=0,l.alive=!1,l.mesh.visible=!1,l.ring.scale.set(1,1,1),l.ring.material.emissive.set(6087167),l.ring.material.emissiveIntensity=3.4);continue}l.ring.rotation.z+=t*.8,l.locked&&(l.shield.material.opacity=.22+.12*Math.sin(this.time*6))}for(const l of this.blockers){if(!l.alive)continue;l.mesh.rotation.y+=t*.9,l.mesh.rotation.x+=t*.4;const c=e.sample(l.pathDist),h=wn(c.tangent);l.mesh.position.copy(c.pos).addScaledVector(h.binormal,l.offset.x).addScaledVector(h.normal,l.offset.y)}this._playerLane=r?.x??0;for(const l of this.enemies){if(!l.alive)continue;if(l.ring&&(l.ring.rotation.z+=t*2.2),l.pathDist-=(l.descent||2)*t,l.elite){const u=n+32;l.pathDist<u&&(l.pathDist=u)}if(l.role==="sine"||l.role==="queen"){const u=(this.laneLimit||24)*(l.role==="queen"?.22:.08);l.offset.x=(l.baseX||0)+Math.sin(this.time*(l.weave||.9)+l.pathDist*.03)*u}l.offset.y=0;const c=ji(e,l.pathDist,l.offset.x,.4);l.mesh.position.copy(c.pos),l.mesh.up.copy(c.frame.normal),l.mesh.lookAt(c.pos.clone().addScaledVector(c.sample.tangent,-12)),l.flash=Math.max(0,(l.flash||0)-t);const h=l.pathDist>n+6&&l.pathDist<n+78;this._telegraphAndFire(l,t,e,o,h)}if(this.boss?.alive){this.boss.ring&&(this.boss.ring.rotation.z-=t*.9),this.boss.wings&&(this.boss.wings.rotation.y+=t*.35),this.boss.pathDist-=1.15*t,this.boss.pathDist<n+32&&(this.boss.pathDist=n+32);const l=ji(e,this.boss.pathDist,0,1.2);this.boss.mesh.position.copy(l.pos),this.boss.mesh.up.copy(l.frame.normal),this.boss.mesh.lookAt(l.pos.clone().addScaledVector(l.sample.tangent,-16)),this._syncVisPhase(this.boss),this.boss.flash=Math.max(0,(this.boss.flash||0)-t),this.boss.flash>0&&this.boss.craft&&Fn(this.boss.craft,this.boss.flash*4);const c=this.boss.pathDist>n+8&&this.boss.pathDist<n+90;this._telegraphAndFire(this.boss,t,e,o,c)}this._stepProjectiles(this.bullets,t,e),this._stepProjectiles(this.enemyShots,t,e),this._stepPickups(t,e,n,a,r);for(const l of this.impacts){if(!l.alive)continue;l.life-=t,l.mesh.position.addScaledVector(l.vel,t);const c=Math.max(0,l.life/l.duration);l.mesh.material.opacity=c,l.mesh.scale.setScalar(.45+(1-c)*1.6),l.life<=0&&(l.alive=!1,l.mesh.visible=!1)}for(const l of this.explosions){if(!l.alive)continue;l.life-=t;const c=Math.max(0,l.life/l.duration);for(const h of l.shards)h.position.addScaledVector(h.userData.vel,t),h.rotation.x+=t*8,h.rotation.y+=t*5;l.shardMat.opacity=c,l.flashMat.opacity=c*.7,l.flash.scale.setScalar(1+(1-c)*5),l.life<=0&&(l.alive=!1,l.group.visible=!1)}}_stepProjectiles(t,e,n){for(const i of t)if(i.alive){if(i.life-=e,i.home&&this._steerHome(i,e),i.wobble&&(i.laneX+=Math.sin(this.time*7.5+(i.phase||0))*i.wobble*e),i.pathDist+=(i.along||1)*(i.speed||100)*e,i.laneX+=(i.laneDrift||0)*e,i.life<=0||i.pathDist<12){i.alive=!1,i.mesh.visible=!1;continue}this._placeRailShot(i,n)}}_steerHome(t,e){let n=null,i=1e9;for(const h of this.enemies){if(!h.alive||h.pathDist<t.pathDist-4)continue;const u=Math.hypot(h.offset.x-t.laneX,h.pathDist-t.pathDist);u<i&&(i=u,n=h)}if(this.boss?.alive&&this.boss.pathDist>t.pathDist-6){const h=Math.hypot(0-t.laneX,this.boss.pathDist-t.pathDist);h<i&&(i=h,n=this.boss)}if(!n)return;const r=n.offset?.x??0,o=n.pathDist,a=t.homeSteer||60,l=r-t.laneX,c=o-t.pathDist;t.laneX+=Math.sign(l)*Math.min(Math.abs(l),a*e),c>0&&(t.pathDist+=Math.min(c,a*.35*e))}_stepPickups(t,e,n,i,r){const o=n+i,a=r?.x||0;for(const l of this.pickups){if(!l.alive)continue;l.grace>0&&(l.grace-=t),l.pathDist-=9.5*t,l.mesh.rotation.x+=t*2.4,l.mesh.rotation.y+=t*3.1;const c=a-l.laneX,h=o-l.pathDist,u=Math.hypot(c,h),d=h>0?14.5:11;if(l.grace<=0&&u<d&&u>.001){const g=(1-u/d)*38*t;l.laneX+=c/u*g,l.pathDist+=h/u*g}const p=.85+.18*Math.sin(this.time*8+l.pathDist);l.mesh.scale.setScalar(p),this._placeMote(l,e)}}collectOrbs(t,e){const n=[];for(const i of this.orbs)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius&&(i.alive=!1,i.mesh.visible=!1,n.push(i));return n}collectMotes(t,e){const n=[];for(const i of this.pickups)!i.alive||i.grace>0||i.mesh.position.distanceTo(t)<e+i.radius&&(i.alive=!1,i.mesh.visible=!1,n.push(i));return n}collectGates(t){const e=[];for(const n of this.gates)!n.alive||n.passed||n.mesh.position.distanceTo(t)<6.2&&(n.locked?e.push({gate:n,blocked:!0}):(n.passed=!0,n.burst=1,n.burstAge=0,e.push({gate:n,blocked:!1})));return e}collideEnemies(t,e){const n=[];for(const i of this.enemies)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius*.68&&n.push(i);return this.boss?.alive&&this.boss.mesh.position.distanceTo(t)<e+this.boss.radius&&n.push(this.boss),n}collideBlockers(t,e){const n=[];for(const i of this.blockers)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius&&n.push(i);return n}nearMisses(t){const e=[];for(const n of this.enemies){if(!n.alive||n.nearMiss)continue;const i=n.mesh.position.distanceTo(t);i>n.radius+1.2&&i<n.radius+3.4&&(n.nearMiss=!0,e.push(n))}return e}_hitPoint(t){return t.mesh.position.clone().addScaledVector(t.vel,.04)}_railHit(t,e,n,i){const r=t.hitR??1.6,o=Math.abs((t.pathDist||0)-e),a=Math.abs((t.laneX||0)-(n||0));return o<i+r+6&&a<i+r}_strike(t,e,n){const i=t.hitR??1.6;return this._hitPoint(t).distanceTo(e)<n+i}_alreadyHit(t,e){return t.hitList&&t.hitList.includes(e)}_applyHit(t,e){return t.hitList||(t.hitList=[]),t.hitList.push(e),(t.pierce||0)>0?(t.pierce-=1,!1):(t.alive=!1,t.mesh.visible=!1,!0)}bulletHits(){const t=[];for(const e of this.bullets){if(!e.alive)continue;let n=!1;for(const i of this.enemies)if(!(!i.alive||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,i.offset?.x??0,i.radius)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.alive=!1,i.mesh.visible=!1,t.push({type:i.elite?"midboss":"enemy",pos:i.mesh.position.clone(),role:i.role,pathDist:i.pathDist,laneX:i.offset.x,drop:i.drop??1,bombDrop:i.bombDrop??0})):(i.flash=i.elite?.22:.12,i.craft&&Fn(i.craft,i.elite?.95:.7),this._syncVisPhase(i),t.push({type:"ping",pos:i.mesh.position.clone(),color:i.elite?16769162:10156031})),n))break;if(!n){for(const i of this.blockers)if(!(!i.alive||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,i.offset?.x??0,i.radius)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.alive=!1,i.mesh.visible=!1,t.push({type:"blocker",pos:i.mesh.position.clone(),pathDist:i.pathDist,laneX:i.offset.x,drop:Math.random()<.45?1:0})):t.push({type:"ping",pos:i.mesh.position.clone(),color:16751162}),n))break;if(!n){for(const i of this.gates)if(!(!i.alive||!i.locked||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,0,5.2)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.locked=!1,i.shield.visible=!1,i.ring.material.emissive.set(6087167),i.ring.material.emissiveIntensity=5.2,t.push({type:"unlock",pos:i.mesh.position.clone(),pathDist:i.pathDist,laneX:0,drop:2})):t.push({type:"ping",pos:i.mesh.position.clone(),color:16737512}),n))break;n||this.boss?.alive&&!this._alreadyHit(e,this.boss)&&this._railHit(e,this.boss.pathDist,0,this.boss.radius)&&(this.boss.hp-=e.damage||1,this._applyHit(e,this.boss),this.boss.hp<=0?(this.boss.alive=!1,this.boss.mesh.visible=!1,t.push({type:"boss",pos:this.boss.mesh.position.clone(),pathDist:this.boss.pathDist,laneX:0,drop:8})):(this.boss.flash=.22,this.boss.craft&&Fn(this.boss.craft,.95),this._syncVisPhase(this.boss),t.push({type:"ping",pos:this.boss.mesh.position.clone(),color:16765286})))}}}return t}shotsHitPlayer(t,e){let n=!1;for(const i of this.enemyShots)i.alive&&i.mesh.position.distanceTo(t)<e&&(i.alive=!1,i.mesh.visible=!1,n=!0);return n}nearestLights(t,e){const n=[...e];for(const i of this.pickups)i.alive&&n.push({pos:i.mesh.position,color:new j("#7af0ff"),intensity:8});for(const i of this.orbs)i.alive&&n.push({pos:i.mesh.position,color:i.color,intensity:9});for(const i of this.blockers)i.alive&&n.push({pos:i.mesh.position,color:new j("#ff9a3a"),intensity:14});for(const i of this.gates)i.alive&&n.push({pos:i.mesh.position,color:new j(i.burst>0?"#dcffff":i.locked?"#ff3bd4":"#5ce1ff"),intensity:i.burst>0?14+(i.pulse||0)*32:i.locked?10:16});return this.boss?.alive&&n.push({pos:this.boss.mesh.position,color:new j("#ff3bd4"),intensity:18}),n.sort((i,r)=>i.pos.distanceToSquared(t)-r.pos.distanceToSquared(t)),n.slice(0,6)}}class W0{constructor(){this.ctx=null,this.master=null,this.music=null,this.sfx=null,this.duck=null,this.engine=null,this.boost=0,this.enabled=!1,this.intensity=.2,this._paused=!1,this._nextBeat=0,this._step=0,this._noise=null,this._whooshOn=!1,this._chapter="default",this._arpGain=null,this._choirGain=null}async resume(){this.ctx||(this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.2,this.duck=this.ctx.createGain(),this.duck.gain.value=1,this.music=this.ctx.createGain(),this.music.gain.value=.55,this.sfx=this.ctx.createGain(),this.sfx.gain.value=1,this.music.connect(this.duck),this.duck.connect(this.master),this.sfx.connect(this.master),this.master.connect(this.ctx.destination),this._noise=this._makeNoise(2),this._startEngine(),this._startPad(),this._startStems(),this._nextBeat=this.ctx.currentTime+.05),this.ctx.state==="suspended"&&await this.ctx.resume(),this.enabled=!0,this.setPaused(!1)}setPaused(t){if(this._paused=t,!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?8e-4:.2,e,.04)}setIntensity(t){this.intensity=Math.max(0,Math.min(1,t))}tick(){if(!this.enabled||!this.ctx||this._paused)return;const t=this.ctx.currentTime,n=60/96/4;for(;this._nextBeat<t+.12;)this._scheduleBeat(this._nextBeat,this._step),this._nextBeat+=n,this._step=(this._step+1)%16;if(this._padFilt){const i=t;this._padFilt.frequency.setTargetAtTime(220+this.intensity*920,i,.2),this._padGain.gain.setTargetAtTime(.045+this.intensity*.05,i,.25)}this._mixStems(t)}setChapter(t){this._chapter=t||"default"}_makeNoise(t){const e=this.ctx,n=e.createBuffer(1,e.sampleRate*t,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;return n}_osc(t,e,n,i,r,o){const a=this.ctx.createOscillator(),l=this.ctx.createGain();return a.type=t,a.frequency.setValueAtTime(e,n),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(r,n+.01),l.gain.exponentialRampToValueAtTime(1e-4,n+i),a.connect(l),l.connect(o||this.sfx),a.start(n),a.stop(n+i+.02),a}_noiseBurst(t,e,n,i,r){const o=this.ctx.createBufferSource();o.buffer=this._noise;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(n,t),a.Q.value=i;const l=this.ctx.createGain();l.gain.setValueAtTime(r,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(a),a.connect(l),l.connect(this.sfx),o.start(t),o.stop(t+e+.02)}_startEngine(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator(),i=t.createBiquadFilter(),r=t.createGain();e.type="sawtooth",n.type="triangle",e.frequency.value=48,n.frequency.value=72,i.type="lowpass",i.frequency.value=220,r.gain.value=.1,e.connect(i),n.connect(i),i.connect(r),r.connect(this.sfx),e.start(),n.start(),this.engine={osc:e,osc2:n,filt:i,g:r}}_startPad(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator();e.type="sawtooth",n.type="sawtooth",e.frequency.value=55,n.frequency.value=82.5,n.detune.value=7;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=280,i.Q.value=.7;const r=t.createGain();r.gain.value=.05,e.connect(i),n.connect(i),i.connect(r),r.connect(this.music),e.start(),n.start(),this._padFilt=i,this._padGain=r}_startStems(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator();e.type="sine",n.type="sine",e.frequency.value=110,n.frequency.value=164.81,n.detune.value=6;const i=t.createGain();i.gain.value=.008,e.connect(i),n.connect(i),i.connect(this.music),e.start(),n.start(),this._choirGain=i,this._choirOsc=[e,n];const r=t.createGain();r.gain.value=.01,r.connect(this.music),this._arpGain=r}_mixStems(t){const e=this._chapter,n=e==="finale"?.055:e==="queen"?.042:e==="warden"?.03:.01,i=e==="finale"?.038:e==="warden"?.032:e==="queen"?.024:.008;if(this._choirGain&&this._choirGain.gain.setTargetAtTime(n+this.intensity*.02,t,.35),this._arpGain&&this._arpGain.gain.setTargetAtTime(i+this.intensity*.015,t,.35),this._choirOsc){const r=e==="warden"?98:e==="finale"?82.5:e==="queen"?130.81:110;this._choirOsc[0].frequency.setTargetAtTime(r,t,.4),this._choirOsc[1].frequency.setTargetAtTime(r*1.5,t,.4)}}_scheduleBeat(t,e){const n=this.intensity,i=[110,130.81,146.83,164.81,196,220,246.94,261.63];if(e%8===0&&n>.12){const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(150,t),r.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.16+n*.1,t+.008),o.gain.exponentialRampToValueAtTime(1e-4,t+.18),r.connect(o),o.connect(this.music),r.start(t),r.stop(t+.2)}if(e%2===0&&n>.38&&this._noiseBurst(t,.05,6e3,.6,.03+n*.025),n>.22){const r=i[(e*3+Math.floor(n*4))%i.length],o=n>.62&&e%4===0?2:1;this._osc("square",r*o,t,.09,.03+n*.025,this.music)}if(n>.7&&e%16===12&&this._osc("triangle",55,t,.28,.05,this.music),this._arpGain&&(this._chapter==="queen"||this._chapter==="warden"||this._chapter==="finale")&&e%2===0){const r=i[(e+4)%i.length]*(this._chapter==="finale"?2:1);this._osc("square",r*2,t,.06,.018+n*.012,this._arpGain)}}sting(t="chapter"){if(!this.enabled)return;const e=this.ctx.currentTime;if(t==="boss"){this._osc("sawtooth",55,e,.42,.12),this._osc("triangle",82.5,e+.04,.5,.08),this._osc("sine",110,e+.12,.55,.07),this._noiseBurst(e,.28,180,.8,.1),this._duck(.45,.4);return}if(t==="death"){this._osc("sine",220,e,.35,.1),this._osc("triangle",164.81,e+.08,.4,.08),this._osc("sine",110,e+.16,.55,.09),this._osc("sawtooth",55,e+.2,.45,.07),this._duck(.55,.5);return}if(t==="continue"){this._osc("sine",196,e,.22,.08),this._osc("triangle",246.94,e+.08,.28,.07),this._osc("sine",329.63,e+.16,.4,.06);return}if(t==="life"){this._osc("sine",523.25,e,.12,.07),this._osc("triangle",659.25,e+.05,.16,.05);return}this._osc("triangle",196,e,.16,.07),this._osc("sine",293.66,e+.06,.22,.06),this._osc("triangle",392,e+.12,.28,.05)}_duck(t=.35,e=.22){if(!this.duck)return;const n=this.ctx.currentTime;this.duck.gain.cancelScheduledValues(n),this.duck.gain.setValueAtTime(this.duck.gain.value,n),this.duck.gain.linearRampToValueAtTime(Math.max(.12,1-t),n+.02),this.duck.gain.linearRampToValueAtTime(1,n+e)}setBoost(t){if(this.boost=t,!this.engine)return;const e=this.ctx.currentTime;this.engine.osc.frequency.setTargetAtTime(48+t*36,e,.08),this.engine.filt.frequency.setTargetAtTime(220+t*520,e,.08),this.engine.g.gain.setTargetAtTime(.1+t*.08,e,.08),t>.5&&!this._whooshOn&&(this._whooshOn=!0,this._noiseBurst(e,.28,420,.8,.08)),t<.2&&(this._whooshOn=!1)}rumble(t=80,e=.4){try{const n=navigator.getGamepads?.()||[];for(const i of n){const r=i?.vibrationActuator;r?.playEffect&&r.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e*.6})}}catch{}}guns(t="primary",e={}){if(!this.enabled)return;const n=this.ctx.currentTime;if(t==="titan"){this._osc("sawtooth",64,n,.28,.14),this._osc("square",128,n,.18,.07),this._noiseBurst(n,.2,180,1.1,.1),this._duck(.28,.18);return}if(t==="missile"){this._osc("sawtooth",140,n,.16,.06),this._noiseBurst(n,.12,900,.8,.05);return}if(t==="mine"||t==="nova"){this._osc("triangle",380,n,.11,.045),this._osc("sine",620,n,.12,.035);return}if((e.needle||0)>0){const i=920+Math.min(6,e.needle)*48;this._osc("square",i,n,.055,.05),this._osc("sawtooth",380+e.needle*22,n,.08,.03);return}this._osc("square",480,n,.04,.04),this._noiseBurst(n,.05,2400,.7,.03)}mote(t=!1){if(!this.enabled)return;const e=this.ctx.currentTime;this._osc("sine",920,e,.09,.06),this._osc("sine",t?1460:1240,e+.04,.12,.05)}powerup(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",520,t,.16,.09),this._osc("triangle",780,t+.05,.18,.07),this._osc("sine",1170,t+.1,.22,.06)}collect(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",740,t,.1,.08),this._osc("sine",1180,t+.05,.14,.06)}gate(){if(!this.enabled)return;const t=this.ctx,e=t.currentTime,n=2.05,i=t.createOscillator(),r=t.createOscillator(),o=t.createOscillator();i.type="sine",r.type="triangle",o.type="sine",i.frequency.setValueAtTime(196,e),i.frequency.exponentialRampToValueAtTime(110,e+n),r.frequency.setValueAtTime(294,e),r.frequency.exponentialRampToValueAtTime(165,e+n),o.frequency.setValueAtTime(98,e),o.frequency.exponentialRampToValueAtTime(55,e+n);const a=t.createBiquadFilter();a.type="bandpass",a.Q.setValueAtTime(6.5,e),a.frequency.setValueAtTime(380,e),a.frequency.exponentialRampToValueAtTime(1650,e+.22),a.frequency.exponentialRampToValueAtTime(340,e+.55),a.frequency.exponentialRampToValueAtTime(1200,e+.92),a.frequency.exponentialRampToValueAtTime(280,e+1.28),a.frequency.exponentialRampToValueAtTime(820,e+1.64),a.frequency.exponentialRampToValueAtTime(200,e+n);const l=t.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.13,e+.05),l.gain.exponentialRampToValueAtTime(1e-4,e+n),i.connect(a),r.connect(a),a.connect(l),o.connect(l),l.connect(this.sfx),i.start(e),r.start(e),o.start(e),i.stop(e+n+.02),r.stop(e+n+.02),o.stop(e+n+.02),this._duck(.4,.5)}hit(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",70,t,.28,.2),this._osc("sawtooth",90,t,.18,.1),this._noiseBurst(t,.16,220,.9,.12),this._duck(.45,.2),this.rumble(120,.7)}explosion(t=!1){if(!this.enabled)return;const e=this.ctx.currentTime;this._osc("sine",t?48:64,e,t?.5:.28,t?.2:.12),this._osc("sawtooth",t?55:80,e,.22,.08),this._noiseBurst(e,t?.4:.22,t?160:280,.8,t?.14:.08),this._duck(t?.7:.32,t?.38:.16),t&&this.rumble(180,.85)}bomb(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",40,t,.55,.22),this._osc("triangle",90,t,.4,.1),this._noiseBurst(t,.45,140,.7,.16),this._duck(.8,.45),this.rumble(220,1)}boom(){this.explosion(!0)}}class X0{constructor(t){this.canvas=t,this.state="title",this.clock=new hc,this.input={keys:new Set,mouse:new at(0,0),firing:!1},this._touch={id:null,x:0,y:0,held:!1,steerX:0,steerY:0},this._mouseFromTouch=0,this.audio=new W0,this.view=localStorage.getItem("aether-view")||"scroll",["chase","cockpit","scroll"].includes(this.view)||(this.view="scroll"),this._hasRun=!1,this.gateFx=0,this._viewSnap=1,this._camLook=new P,this._camUp=new P(0,1,0),this._chaseX=0,this.stage=new y0,this.hitStop=0,this.kick=new P,this.kickAmt=0,this.bombs=3,this.bombMax=5,this.bombCd=0,this._padPrev={fire:!1,bomb:!1,start:!1},this._setupRenderer(),this._setupScene(),this._setupPost(),this._setupWorld(),this._bindInput(),this._bindUI(),this.reset(!1),this._onResize(),window.addEventListener("resize",()=>this._onResize()),this.loop=this.loop.bind(this)}_setupRenderer(){this.renderer=new fm({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Be,this.renderer.toneMapping=Vo,this.renderer.toneMappingExposure=.92,this.renderer.autoClear=!0}_setupScene(){this.scene=new sc,this.scene.background=new j("#05010d"),this.camera=new ze(62,window.innerWidth/window.innerHeight,.08,1400);const t=new No(this.renderer);this.scene.environment=t.fromScene(new Xm,.04).texture,t.dispose()}_setupPost(){const t=new at(window.innerWidth,window.innerHeight);this.composer=new km(this.renderer),this.composer.addPass(new Vm(this.scene,this.camera)),this.bloom=new Di(t,.48,.5,.42),this.composer.addPass(this.bloom),this.fx=new fc(h0),this.fx.uniforms.uSunPos.value=new at(.72,.68),this.fx.uniforms.uFlare.value=1,this.fx.uniforms.uCockpit.value=0,this.fx.uniforms.uGate.value=0,this.fx.uniforms.uKick.value=0,this.fx.uniforms.uResolution.value=t.clone(),this.composer.addPass(this.fx),this.composer.addPass(new Wm)}_setupWorld(){this.path=new u0,this.world=new d0(this.scene),this.world.attachRibbon(this.path.rebuildRibbon()),this.entities=new G0(this.scene);const t=p0();this.ship=t.group,this.shipRig=t.rig,this.exhausts=t.exhausts,this.shipLights=t.lights,this.shipCore=t.core,this.muzzle=t.muzzle,this.muzzleSpike=t.muzzleSpike,this.muzzleFlash=0,this.scene.add(this.ship),this.trail=new m0(this.scene),this.traces=[];for(let e=0;e<4;e++){const n=new B(new Lt(.42,10,8),new Qt({color:16737512})),i=new B(new Lt(.85,10,8),new Qt({color:16737512,transparent:!0,opacity:.32,blending:pe,depthWrite:!1}));n.add(i),n.visible=!1,this.scene.add(n),this.traces.push(n)}}_bindInput(){this.canvas.tabIndex=0;const t=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Numpad8","Numpad4","Numpad6","Numpad2","Space"]),e=r=>{if(r.code==="Escape"){r.preventDefault(),r.repeat||this._onEscape();return}t.has(r.code)&&r.preventDefault(),this._setKey(r,!0),this.state==="playing"&&!r.repeat&&this._releaseUiFocus(),r.code==="KeyP"&&this.state==="playing"&&this.pause(),(r.code==="KeyB"||r.code==="KeyC")&&this.state==="playing"&&!r.repeat&&this._tryBomb(),(r.code==="Digit1"||r.code==="Numpad1")&&this.setView("chase"),(r.code==="Digit2"||r.code==="Numpad2")&&this.setView("cockpit"),(r.code==="Digit3"||r.code==="Numpad3")&&this.setView("scroll"),r.code==="KeyV"&&this.cycleView()},n=r=>{t.has(r.code)&&r.preventDefault(),this._setKey(r,!1)};window.addEventListener("keydown",e,!0),window.addEventListener("keyup",n,!0),window.addEventListener("blur",()=>this._clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this._clearInput()});const i={passive:!1,capture:!0};document.addEventListener("pointerdown",r=>this._onPointerDown(r),i),document.addEventListener("pointermove",r=>this._onPointerMove(r),i),document.addEventListener("pointerup",r=>this._onPointerUp(r),i),document.addEventListener("pointercancel",r=>this._onPointerUp(r),i),window.PointerEvent||(document.addEventListener("touchstart",r=>this._onTouchStart(r),i),document.addEventListener("touchmove",r=>this._onTouchMove(r),i),document.addEventListener("touchend",r=>this._onTouchEnd(r),i),document.addEventListener("touchcancel",r=>this._onTouchEnd(r),i))}_isBlockingUi(t){if(!(t instanceof Element))return!1;const e=t.closest(".screen");return e?.classList.contains("hidden")?!1:e&&!e.classList.contains("hidden")?!0:!!t.closest("button, a, input, textarea, label")}_onPointerDown(t){if(this.state==="playing"&&t.isPrimary!==!1&&!(t.pointerType==="mouse"&&t.button!==0)&&!this._isBlockingUi(t.target)){t.preventDefault(),this._touch.held=!0,this._touch.id=t.pointerId,this._touch.x=t.clientX,this._touch.y=t.clientY,this._touch.steerX=0,this._touch.steerY=0,this.input.firing=!0,this.slide.set(0,0),this.input.mouse.x=t.clientX/window.innerWidth*2-1,this.input.mouse.y=-(t.clientY/window.innerHeight)*2-1;try{this.canvas.setPointerCapture(t.pointerId)}catch{}this.audio.resume?.()}}_onPointerMove(t){if(!this._touch.held||t.pointerId!==this._touch.id)return;t.preventDefault();const e=t.clientX-this._touch.x,n=t.clientY-this._touch.y;this._touch.x=t.clientX,this._touch.y=t.clientY,this._applyTouchDrag(e,n),this.input.mouse.x=t.clientX/window.innerWidth*2-1,this.input.mouse.y=-(t.clientY/window.innerHeight)*2-1}_onPointerUp(t){!this._touch.held||t.pointerId!==this._touch.id||this._endTouch()}_onTouchStart(t){const e=t.changedTouches?.[0];e&&this._onPointerDown({isPrimary:!0,pointerType:"touch",button:0,pointerId:e.identifier,clientX:e.clientX,clientY:e.clientY,target:t.target,preventDefault:()=>t.preventDefault()})}_onTouchMove(t){const e=t.touches?.[0]||t.changedTouches?.[0];e&&this._onPointerMove({pointerId:this._touch.id,clientX:e.clientX,clientY:e.clientY,preventDefault:()=>t.preventDefault()})}_onTouchEnd(t){this._onPointerUp({pointerId:this._touch.id}),t.preventDefault?.()}_applyTouchDrag(t,e){const n=this._laneLimit(),i=this._depthLimit(),r=Math.max(1,n*2),o=Math.max(1,i.max-i.min),a=Math.max(1,window.innerWidth),l=Math.max(1,window.innerHeight);this.offset.x=Ie(this.offset.x+t/a*r,-n,n),this.holdY=Ie(this.holdY+-e/l*o,i.min,i.max),this._touch.steerX=Ie(t/10,-1,1),this._touch.steerY=Ie(-e/10,-1,1)}_endTouch(){this._touch.held=!1,this._touch.id=null,this._touch.steerX=0,this._touch.steerY=0,this.input.firing=!1}_bindUI(){this.ui={hud:document.getElementById("hud"),score:document.getElementById("score"),combo:document.getElementById("combo"),depth:document.getElementById("depth"),threat:document.getElementById("threat"),health:document.getElementById("health-fill"),boost:document.getElementById("boost-fill"),riftFill:document.getElementById("rift-fill"),riftName:document.getElementById("rift-name"),riftWrap:document.querySelector(".rift-wrap"),toast:document.getElementById("toast"),title:document.getElementById("title-screen"),pause:document.getElementById("pause-screen"),dead:document.getElementById("dead-screen"),stats:document.getElementById("final-stats"),resultKicker:document.getElementById("result-kicker"),resultTitle:document.getElementById("result-title"),resultRank:document.getElementById("result-rank"),resultBoard:document.getElementById("result-board"),titleScores:document.getElementById("title-scores"),bombs:document.getElementById("bomb-pips"),lives:document.getElementById("life-pips"),continue:document.getElementById("continue-screen"),continueLeft:document.getElementById("continue-left"),bossMeter:document.getElementById("boss-meter"),bossFill:document.getElementById("boss-fill"),bossName:document.getElementById("boss-name"),startBtn:document.getElementById("start-btn"),resumeTitleBtn:document.getElementById("resume-title-btn"),viewBtns:[...document.querySelectorAll("[data-view]")],pauseBtn:document.getElementById("pause-btn"),bombBtn:document.getElementById("bomb-btn")},this.ui.startBtn.addEventListener("click",()=>this.startPlay()),this.ui.resumeTitleBtn.addEventListener("click",()=>this.resumeFromMenu()),document.getElementById("resume-btn").addEventListener("click",()=>this.resume()),document.getElementById("menu-btn").addEventListener("click",()=>this.goToMenu({resumeable:!0})),document.getElementById("retry-btn").addEventListener("click",()=>this.startPlay()),document.getElementById("continue-yes")?.addEventListener("click",()=>this._acceptContinue()),document.getElementById("continue-no")?.addEventListener("click",()=>this._declineContinue()),this.ui.pauseBtn?.addEventListener("click",()=>{this.state==="playing"?this.pause():this.state==="paused"&&this.resume()}),this.ui.bombBtn?.addEventListener("click",()=>this._tryBomb());const t=[this.ui.startBtn,this.ui.resumeTitleBtn,document.getElementById("resume-btn"),document.getElementById("menu-btn"),document.getElementById("retry-btn"),document.getElementById("continue-yes"),document.getElementById("continue-no"),this.ui.pauseBtn,this.ui.bombBtn].filter(Boolean);for(const e of t)e.addEventListener("mousedown",n=>n.stopPropagation()),e.addEventListener("pointerdown",n=>n.stopPropagation()),e.addEventListener("click",()=>this._releaseUiFocus());for(const e of this.ui.viewBtns)e.addEventListener("click",()=>{this.setView(e.dataset.view),this._releaseUiFocus()}),e.addEventListener("mousedown",n=>n.stopPropagation()),e.addEventListener("pointerdown",n=>n.stopPropagation());this._syncViewHud(),this._syncTitleActions(),this._renderScoreboard(this.ui.titleScores,Bo()),this._syncBombs()}_syncTitleActions(){!this.ui?.resumeTitleBtn||!this.ui?.startBtn||(this.ui.resumeTitleBtn.hidden=!this._hasRun,this.ui.startBtn.textContent=this._hasRun?"NEW RUN":"ENGAGE")}_setKey(t,e){const n=[t.code],i=(t.key||"").toLowerCase();i.length===1&&n.push(i);for(const r of n)e?this.input.keys.add(r):this.input.keys.delete(r)}_releaseUiFocus(){const t=document.activeElement;t&&t!==document.body&&t!==this.canvas&&typeof t.blur=="function"&&t.blur(),this.canvas?.focus({preventScroll:!0})}_clearInput(){this.input.keys.clear(),this.input.firing=!1,this.slide?.set(0,0),this._endTouch?.()}_onEscape(){if(this.state==="playing"||this.state==="paused"){this.goToMenu({resumeable:!0});return}if(this.state==="title"&&this._hasRun){this.resumeFromMenu();return}this.state==="dead"&&this.goToMenu({resumeable:!1}),this.state==="continue"&&this._declineContinue()}goToMenu({resumeable:t=!1}={}){this._clearInput(),this._hasRun=t,this.state="title",this.audio.setPaused(!0),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.title.classList.remove("hidden"),this._syncTitleActions(),this._renderScoreboard(this.ui.titleScores,Bo()),t||this.reset(!0)}resumeFromMenu(){this._hasRun&&(this._clearInput(),this.state="playing",this.ui.title.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hud.classList.add("visible"),this.audio.setPaused(!1),this.clock.getDelta(),this._releaseUiFocus())}cycleView(){const t=["chase","cockpit","scroll"],e=t.indexOf(this.view);this.setView(t[(e+1)%t.length])}setView(t){if(!["chase","cockpit","scroll"].includes(t))return;if(this.view===t&&this._viewSnap===0){this._syncViewHud();return}this.view=t,this._viewSnap=1,localStorage.setItem("aether-view",t),this._syncViewHud();const e={chase:"CHASE CAM",cockpit:"COCKPIT",scroll:"SCROLL CAM"};(this.state==="playing"||this.state==="paused")&&this.toast(e[t])}_syncViewHud(){if(this.ui?.viewBtns)for(const t of this.ui.viewBtns)t.classList.toggle("active",t.dataset.view===this.view)}_activeView(){return this.state==="title"?"chase":this.view}_applyCamera(t,e,n,i,r){const o=this._activeView();this.ship.visible=o!=="cockpit";const a=r||n,l=i||e,c=new P,h=new P,u=new P;let d=62;const p=this._viewSnap>.02;if(o==="cockpit")d=78,c.copy(this.ship.position).addScaledVector(l.tangent,1.85).addScaledVector(a.normal,.72),h.copy(this.ship.position).addScaledVector(l.tangent,30),u.copy(a.normal);else if(o==="scroll"){d=38;const m=this.path.sample(this.traveled+22),f=wn(m.tangent);c.copy(m.pos).addScaledVector(f.normal,168),h.copy(m.pos),u.copy(m.tangent)}else{d=62;const m=this.path.sample(this.traveled+this.holdY+6),f=wn(m.tangent),E=p?14:2.45;this._chaseX+=(this.offset.x-this._chaseX)*(1-Math.exp(-t*E)),c.copy(m.pos).addScaledVector(m.tangent,-32).addScaledVector(f.normal,14).addScaledVector(f.binormal,this._chaseX),h.copy(m.pos).addScaledVector(m.tangent,16).addScaledVector(f.binormal,this._chaseX),u.copy(f.normal)}const g=p?16:o==="scroll"?12:o==="chase"?7.5:5,_=p?14:o==="scroll"?11:o==="chase"?6.5:5.5;this.camera.position.lerp(c,1-Math.exp(-t*g)),this.camera.position.addScaledVector(this.kick,this.kickAmt),this._camLook.lerp(h,1-Math.exp(-t*_)),this._camUp.lerp(u,1-Math.exp(-t*_)),this.camera.up.copy(this._camUp),this.camera.lookAt(this._camLook),this.camera.fov=Nn(this.camera.fov,d,1-Math.exp(-t*7)),this.camera.updateProjectionMatrix(),this._viewSnap=Math.max(0,this._viewSnap-t*2.4)}reset(t=!0){if(this.traveled=40,this.speed=28,this.throttle=.55,this.boost=1,this.health=1,this.lives=3,this.continues=2,this.spawnIn=.65,this.rank=0,this.step=0,this.charge=0,this.loadout=ia(),this.gunCd={primary:0,missile:0,titan:0,mine:0,nova:0},this.traces)for(const e of this.traces)e.visible=!1;this.score=0,this.combo=1,this.comboTimer=0,this._lastCombo=1,this.hurt=0,this.invuln=2.2,this.gateFx=0,this.fireCd=0,this.kills=0,this._blockWarn=!1,this.offset=new at(0,0),this.holdY=8,this._chaseX=0,this.steer=new at(0,0),this.slide=new at(0,0),this.best=Number(localStorage.getItem("aether-best")||0),this._ribbonAt=-1,this.stage.reset(),this.hitStop=0,this.kick.set(0,0,0),this.kickAmt=0,this.bombs=3,this.bombCd=0,this.maxCombo=1,this.maxStep=0,this.nearMisses=0,this.bombsUsed=0,this._chapterAt=-1,this._chapterId="default",this.muzzleFlash=0,this.entities.reset(),this.world.layoutFromPath(this.path,this.traveled,this._laneLimit()),this.world.attachRibbon(this._localRibbon()),this.world.setChapter("default"),this.audio.setChapter("default"),this._syncBombs(),this._syncLives()}_localRibbon(){const t=[];for(let n=-6;n<36;n++)t.push(this.path.sample(Math.max(8,this.traveled+n*18)).pos.clone());const e=new tr(t,!1,"catmullrom",.5);return new or(e,180,1.28,12,!1)}async startPlay(){await this.audio.resume(),this.reset(!0),this._hasRun=!0,this.state="playing",this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hud.classList.add("visible"),this._syncTitleActions(),this._viewSnap=1,this.audio.setPaused(!1),this.clock.getDelta(),this._releaseUiFocus()}pause(){this.state="paused",this.audio.setPaused(!0),this.ui.pause.classList.remove("hidden")}resume(){this.state="playing",this.audio.setPaused(!1),this.ui.pause.classList.add("hidden"),this.clock.getDelta(),this._releaseUiFocus()}die(){if(this.audio.sting("death"),this.entities.explode(this.ship.position.clone(),16726996),this.lives-=1,this._syncLives(),this.lives>0){this._respawn();return}if(this.continues>0){this._showContinue();return}this._endRun(!1)}_respawn(){this.health=1,this.hurt=0,this.invuln=2.2,this.spawnIn=.65,this.offset.x=0,this.holdY=8,this.slide.set(0,0),this.muzzleFlash=0,this.audio.sting("life"),this._syncLives()}_showContinue(){this.state="continue",this.audio.setPaused(!0),this.audio.sting("continue"),this.ui.continueLeft&&(this.ui.continueLeft.textContent=`${this.continues} CREDIT${this.continues===1?"":"S"} REMAIN`),this.ui.continue?.classList.remove("hidden")}_acceptContinue(){this.state!=="continue"||this.continues<=0||(this.continues-=1,this.lives=3,this.ui.continue?.classList.add("hidden"),this.state="playing",this.audio.setPaused(!1),this._respawn(),this.clock.getDelta(),this._releaseUiFocus())}_declineContinue(){this.ui.continue&&this.ui.continue.classList.add("hidden"),this._endRun(!1)}win(){this._endRun(!0)}_endRun(t){this.state="dead",this._hasRun=!1,this._syncTitleActions(),this.audio.setPaused(!1),this.audio.explosion(!0),this.best=Math.max(this.best,this.score),localStorage.setItem("aether-best",String(this.best));const e=b0({score:this.score,kills:this.kills,step:this.maxStep||this.step,maxCombo:this.maxCombo,victory:t,nearMisses:this.nearMisses,bombsUsed:this.bombsUsed}),n=w0({score:this.score,rank:e,kills:this.kills,depth:Math.floor(this.traveled/10),victory:t,at:Date.now()});this.ui.hud.classList.remove("visible"),this.ui.continue?.classList.add("hidden"),this.ui.dead.classList.remove("hidden"),this.ui.resultKicker&&(this.ui.resultKicker.textContent=t?"RIFT CLEARED":"SIGNAL LOST"),this.ui.resultTitle&&(this.ui.resultTitle.textContent=t?"SENTINEL FALLS":"HULL BREACH"),this.ui.resultRank&&(this.ui.resultRank.textContent=e),this.ui.stats.textContent=`SCORE ${this.score}   BEST ${this.best}   KILLS ${this.kills}   ARSENAL ${this.maxStep}/${On}   BOMBS ${this.bombsUsed}`,this._renderScoreboard(this.ui.resultBoard,n,this.score)}toast(t){this.ui.toast.textContent=t,this.ui.toast.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.ui.toast.classList.remove("show"),1200)}start(){requestAnimationFrame(this.loop)}loop(){requestAnimationFrame(this.loop);const t=Math.min(this.clock.getDelta(),.05);if(this._pollPad(),this.audio.tick(),this.state==="paused"||this.state==="dead"||this.state==="continue"||this.state==="title"&&this._hasRun){this._render();return}if(this.state==="playing"&&this.hitStop>0){this.hitStop-=t,this._render();return}this.update(t),this._render()}update(t){const e=this.state!=="playing",n=this._padState(),i=this.state==="playing"&&(this.input.keys.has("ShiftLeft")||this.input.keys.has("ShiftRight")||n.boost);let r=0;this.state==="playing"&&(i&&this.boost>.05?(r=1,this.boost=Math.max(0,this.boost-t*.32)):this.boost=Math.min(1,this.boost+t*.1)),this.kickAmt=Math.max(0,this.kickAmt-t*9),this.bombCd=Math.max(0,this.bombCd-t);const o=e?16:26+r*22+Math.min(this.traveled/2800,8);this.speed=Nn(this.speed,o,1-Math.exp(-t*2.4)),this.traveled+=this.speed*t,this.path.ensure(this.traveled+400),Math.floor(this.traveled/90)!==this._ribbonAt&&(this._ribbonAt=Math.floor(this.traveled/90),this.world.attachRibbon(this._localRibbon()));const a=this.path.sample(this.traveled),l=wn(a.tangent);if(this.state==="playing"){const S=this._laneLimit(),A=this._depthLimit();if(this._touch.held){this.slide.set(0,0);const M=Math.exp(-t*12);this._touch.steerX*=M,this._touch.steerY*=M,this.steer.set(this._touch.steerX,this._touch.steerY)}else{let M=this._axisHeld(["KeyA","ArrowLeft","Numpad4","a"],["KeyD","ArrowRight","Numpad6","d"]),x=this._axisHeld(["KeyS","ArrowDown","Numpad2","s"],["KeyW","ArrowUp","Numpad8","w"]);Math.abs(n.x)>Math.abs(M)&&(M=n.x),Math.abs(n.y)>Math.abs(x)&&(x=n.y),this._applySlide(M,x,t),this.offset.x=Ie(this.offset.x+this.slide.x*t,-S,S),this.holdY=Ie(this.holdY+this.slide.y*t,A.min,A.max),this.offset.x<=-S&&this.slide.x<0&&(this.slide.x=0),this.offset.x>=S&&this.slide.x>0&&(this.slide.x=0),this.holdY<=A.min&&this.slide.y<0&&(this.slide.y=0),this.holdY>=A.max&&this.slide.y>0&&(this.slide.y=0),this.steer.set(M,x)}this.offset.x=Ie(this.offset.x,-S,S),this.holdY=Ie(this.holdY,A.min,A.max),this.offset.y=0}else this.slide.set(0,0),this.offset.x=Math.sin(this.clock.elapsedTime*.35)*this._laneLimit()*.42,this.holdY=8,this.steer.set(0,0);const c=ji(this.path,this.traveled+this.holdY,this.offset.x,.35),h=c.sample,u=c.frame;if(this.ship.position.copy(c.pos),this.ship.up.copy(u.normal),this.ship.lookAt(this.ship.position.clone().add(h.tangent)),this.shipRig){const S=1-Math.exp(-t*9);this.shipRig.rotation.z=Nn(this.shipRig.rotation.z,-this.steer.x*.35,S),this.shipRig.rotation.x=Nn(this.shipRig.rotation.x,this.steer.y*.12,S);const A=this.invuln>0&&Math.sin(this.clock.elapsedTime*28)<0;this.shipRig.visible=!A}if(this.spawnIn>0){this.spawnIn=Math.max(0,this.spawnIn-t);const S=1-this.spawnIn/.65,A=1-(1-S)*(1-S);this.ship.scale.setScalar(3.1*Math.max(.04,A))}else this.ship.scale.setScalar(3.1);this._applyCamera(t,a,l,h,u);const d=r,p=this.state==="playing"&&(this.input.firing||this.input.keys.has("Space")||n.fire);for(const S of this.exhausts){const A=1+d*.8+(p?.22:0)+this.muzzleFlash*.35;S.scale.setScalar(A),S.material.color.set(d>.2?16765286:10217471)}this.muzzleFlash=Math.max(0,this.muzzleFlash-t*8),this.muzzle&&(this.muzzle.material.opacity=this.muzzleFlash*.9,this.muzzle.scale.setScalar(.7+this.muzzleFlash*1.6)),this.muzzleSpike&&(this.muzzleSpike.material.opacity=this.muzzleFlash*.7,this.muzzleSpike.scale.set(1,1,.6+this.muzzleFlash*1.8));for(const S of this.shipLights)S.intensity=3.2+d*3;this.trail.push(this.ship.position.clone().addScaledVector(h.tangent,-1.4),d),this.audio.setBoost(d),this.world.update(t,this.camera,this.traveled),this.world.recycleCrystals(this.path,this.traveled,this._laneLimit());const g=1+this.traveled/900;this.entities.laneLimit=this._laneLimit(),this.entities.spawnAhead(this.path,this.traveled),this._runStage(),this.entities.recycleBehind(this.traveled,this.holdY),this.entities.update(t,this.path,this.traveled,this.ship.position,this.offset,g,this.holdY),this.audio.setIntensity(this.stage.intensity(this.traveled,this.entities.hunterCount(),r>0,!!this.entities.boss?.alive||this.entities.enemies.some(S=>S.alive&&S.elite))),this._updateTraces(u,t);const _=[{pos:this.shipLights[0].getWorldPosition(new P),color:new j("#5ce1ff"),intensity:12+d*8},{pos:this.shipLights[1].getWorldPosition(new P),color:new j("#5ce1ff"),intensity:12+d*8},{pos:this.world.sun.position,color:new j("#ffe29a"),intensity:22}];this.world.setLights(this.entities.nearestLights(this.ship.position,_)),this.hurt=Math.max(0,this.hurt-t*1.8),this.invuln=Math.max(0,this.invuln-t);let m=0;for(const S of this.entities.gates)S.burst>0&&(m=Math.max(m,S.pulse||0));this.gateFx=m,this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1);for(const S of Object.keys(this.gunCd))this.gunCd[S]=Math.max(0,this.gunCd[S]-t);if(this.state==="playing"){if(this.input.firing||this.input.keys.has("Space")||n.fire){const I=pc(this.loadout,this.clock.elapsedTime),O=this.traveled+this.holdY+6.2;let q=!1;for(const X of["primary","missile","titan","mine","nova"]){const G=I[X];if(!G.shots.length||this.gunCd[X]>0)continue;let W=!1;for(const H of G.shots)this.entities.fireRail(this.path,O,this.offset.x+H.x,1,H)&&(W=!0);W&&(this.gunCd[X]=G.cd,(X==="primary"||X==="titan")&&(this.muzzleFlash=1),q?(X==="titan"||X==="missile")&&this.audio.guns(X,this.loadout):(this.audio.guns(X,this.loadout),q=X==="primary"))}}const A=this.entities.collectOrbs(this.ship.position,2.2);for(const I of A)this.score+=I.value,this.audio.collect(),this.health=Math.min(1,this.health+.05);const M=this.entities.collectMotes(this.ship.position,2.4);M.length&&this._gainMotes(M.length);const x=this.entities.collectGates(this.ship.position);for(const I of x)if(I.blocked){if(this.invuln<=0){if(this._damage(.34))return;this.toast("SHIELD LOCK")}}else this._combatScore(500),this.boost=1,this.audio.gate(),this.toast("GATE BREAK");const L=this.entities.bulletHits();for(const I of L){if(I.type==="ping"){this.entities.spawnImpact(I.pos,I.color||10156031),this._punch(.018,.35);continue}const O=I.type==="boss"||I.type==="midboss";if(this.entities.explode(I.pos,I.type==="blocker"?16751162:O?16765286:6087167),this.entities.spawnImpact(I.pos,O?16769690:10156031),this.audio.explosion(O),this._punch(O?.07:.038,O?1.4:.7),I.type==="enemy"||I.type==="midboss")this.kills+=1,this._combatScore(I.type==="midboss"?1400:220),this.boost=Math.min(1,this.boost+.18),this._dropLoot(I),I.type==="midboss"&&this.toast(I.role==="warden"?"WARDEN DOWN":"QUEEN DOWN");else if(I.type==="blocker")this._combatScore(160),this._dropLoot(I);else if(I.type==="unlock")this._combatScore(220),this.audio.gate(),this.toast("LOCK SHATTERED"),this._dropLoot(I);else if(I.type==="boss"){this.kills+=1,this._combatScore(3200),this._dropLoot(I),this.stage.cleared=!0,this.toast("SENTINEL DOWN"),this.win();return}}for(const I of this.entities.nearMisses(this.ship.position))this.nearMisses+=1,this._combatScore(90);if(this.invuln<=0){const I=this.world.hitTest(this.ship.position,1.2),O=this.entities.collideEnemies(this.ship.position,1.45),q=this.entities.collideBlockers(this.ship.position,1.4),X=this.entities.shotsHitPlayer(this.ship.position,1.35);if(q.length){for(const G of q)G.alive=!1,G.mesh.visible=!1,this.entities.explode(G.mesh.position.clone(),16751162);if(this.audio.explosion(),this._punch(.05,1.1),this._damage(.42))return}else if(O.length){let G=.3;for(const W of O)if(W.elite||W.role==="finale"){if(W.hp=(W.hp||8)-6,this.entities.spawnImpact(W.mesh.position.clone(),16765286),G=.38,W.hp<=0&&W.mesh&&(W.alive=!1,W.mesh.visible=!1,this.entities.explode(W.mesh.position.clone(),16765286),this.kills+=1,this._dropLoot({drop:W.drop??4,pathDist:W.pathDist,laneX:W.offset?.x??this.offset.x,bombDrop:W.bombDrop??0}),W.role==="finale")){this.stage.cleared=!0,this.win();return}}else W.hp!==void 0&&W.mesh&&(W.alive=!1,W.mesh.visible=!1,this.entities.explode(W.mesh.position.clone(),16720984),this.kills+=1,this._dropLoot({drop:W.drop??1,pathDist:W.pathDist,laneX:W.offset?.x??this.offset.x}));if(this.audio.explosion(),this._punch(.045,.9),this._damage(G))return}else if(X){if(this._damage(.16))return}else if(I&&this._damage(.12))return}}this.fx.uniforms.uTime.value=this.clock.elapsedTime,this.fx.uniforms.uBoost.value=d,this.fx.uniforms.uHurt.value=this.hurt,this.fx.uniforms.uGate.value=this.gateFx;const f=this.world.sun.position.clone().project(this.camera);this.fx.uniforms.uSunPos.value.set(f.x*.5+.5,f.y*.5+.5);const b=f.z<1&&f.x>-1.2&&f.x<1.2&&f.y>-1.2&&f.y<1.2?.85:0;this.fx.uniforms.uFlare.value=Nn(this.fx.uniforms.uFlare.value,b,1-Math.exp(-t*8)),this.fx.uniforms.uCockpit.value=0,this.fx.uniforms.uKick.value=this.kickAmt;const v=.48+this.gateFx*.28,R=.42,T=.5+this.gateFx*.12;this.bloom.strength=Nn(this.bloom.strength,v,1-Math.exp(-t*6)),this.bloom.threshold=Nn(this.bloom.threshold,R,1-Math.exp(-t*6)),this.bloom.radius=Nn(this.bloom.radius,T,1-Math.exp(-t*6)),this._syncHud()}_dropLoot(t){const e=t?.drop??0;if(e>0){const n=t.pathDist??this.traveled+this.holdY+6,i=t.laneX??this.offset.x;this.entities.spawnMote(this.path,n,i,e)}t?.bombDrop&&this._gainBomb(t.bombDrop)}_gainMotes(t){if(t<=0)return;if(this.audio.mote(t>1),this.step>=On){this._combatScore(36*t);return}this.charge+=t;let e=null;for(;this.step<On;){const n=R0(this.step);if(this.charge<n)break;this.charge-=n,e=lr[this.step].toast||e,this.step+=1}this.loadout=zo(this.step),this.rank=this.step,this.maxStep=Math.max(this.maxStep||0,this.step),e&&(this.audio.powerup(),this.toast(e))}_shedResonance(){if(this.step<=0&&this.charge<=0)return;const t=Math.min(6,2+Math.floor(this.step/14));this.step=Math.max(0,this.step-t),this.charge=0,this.loadout=zo(this.step),this.rank=this.step,this.entities.spawnMote(this.path,this.traveled+this.holdY+12,this.offset.x,Math.min(4,t),{grace:.45,spread:7.5})}_updateTraces(t,e){const n=this.loadout?.drone||0,i=this.state==="playing"?Math.min(this.traces.length,n>=1?n>=5?4:n>=3?3:2:0):0,r=this.clock.elapsedTime;for(let o=0;o<this.traces.length;o++){const a=this.traces[o];if(a.visible=o<i,o>=i)continue;const l=o%2===0?-1:1,h=4.4+Math.floor(o/2)*1.6+Math.sin(r*3.2+o)*.35,u=.4+Math.cos(r*2.4+o*1.7)*.2;a.position.copy(this.ship.position).addScaledVector(t.binormal,l*h).addScaledVector(t.normal,u);const d=(this.loadout.titan||0)>=1;a.material.color.set(d?16765286:16737512),a.scale.setScalar(.85+n*.06+Math.sin(r*6+o)*.08)}if(this.shipCore){const o=(this.loadout.titan||0)>0?16765286:(this.loadout.seeker||0)>0?16747082:(this.loadout.needle||0)>0?10217471:13172726;this.shipCore.material.color.set(o)}}_combatScore(t){this.score+=Math.floor(t*this.combo),this.combo=Math.min(8,this.combo+.35),this.maxCombo=Math.max(this.maxCombo,this.combo),this.comboTimer=3.2}_score(t){this._combatScore(t)}_damage(t){return this.health-=t,this.hurt=1,this.invuln=.7,this.combo=1,this.audio.hit(),this._punch(.04,1.15),this._shedResonance(),this.health<=0?(this.die(),!0):!1}_syncHud(){if(this._syncBossMeter(),this.state==="playing"){if(this.ui.score.textContent=this.score.toLocaleString(),this.ui.combo.textContent=`×${this.combo.toFixed(1)}`,this.ui.combo.classList.toggle("combo-quiet",this.combo<=1.05),this.combo>(this._lastCombo||1)+.02&&(this.ui.combo.classList.remove("combo-pop"),this.ui.combo.offsetWidth,this.ui.combo.classList.add("combo-pop")),this._lastCombo=this.combo,this.ui.depth.textContent=`${(this.traveled/10).toFixed(0)} km`,this.ui.threat&&(this.ui.threat.textContent=String(this.entities.hunterCount())),this.ui.health.style.transform=`scaleX(${Ie(this.health,0,1)})`,this.ui.boost.style.transform=`scaleX(${Ie(this.boost,0,1)})`,this.ui.riftName&&(this.ui.riftName.textContent=C0(this.loadout)),this.ui.riftFill){const t=this.step>=On?1:Ie(this.step/On,0,1);this.ui.riftFill.style.transform=`scaleX(${Math.max(.03,t)})`,this.ui.riftWrap?.classList.toggle("rift-max",this.step>=On),this.ui.riftWrap?.classList.toggle("rift-wings",(this.loadout.seeker||0)>0&&(this.loadout.titan||0)===0),this.ui.riftWrap?.classList.toggle("rift-titan",(this.loadout.titan||0)>0)}this._syncBombs(),this._syncLives()}}_syncBossMeter(){const t=this.ui?.bossMeter;if(!t)return;const e=this.state==="playing"?this.entities.activeBoss():null;if(!e){t.classList.remove("show");return}t.classList.add("show");const n={queen:"WEAVER QUEEN",warden:"WARDEN",finale:"SENTINEL"};this.ui.bossName&&(this.ui.bossName.textContent=n[e.role]||"HUNTER");const i=Ie(e.hp/Math.max(1,e.maxHp||e.hp),0,1);this.ui.bossFill&&(this.ui.bossFill.style.transform=`scaleX(${Math.max(.02,i)})`)}_render(){this.composer.render()}_axisHeld(t,e){let n=0;for(const i of t)this.input.keys.has(i)&&(n-=1);for(const i of e)this.input.keys.has(i)&&(n+=1);return Math.max(-1,Math.min(1,n))}_applySlide(t,e,n){let l=t,c=e;const h=Math.hypot(l,c);h>1&&(l/=h,c/=h),this.slide.x=this._approachVel(this.slide.x,l*92,820,420,1280,n),this.slide.y=this._approachVel(this.slide.y,c*92,820,420,1280,n)}_approachVel(t,e,n,i,r,o){const a=t>.5&&e<0||t<-.5&&e>0,l=e===0?i:a?r:n;let c=t;return c<e?c=Math.min(e,c+l*o):c>e&&(c=Math.max(e,c-l*o)),e!==0&&Math.abs(c)<Math.abs(e)*.22&&(c=e*.22),c}_playfieldHalf(){const e=38*Math.PI/180;return 168*Math.tan(e/2)}_depthLimit(){const t=this._playfieldHalf(),e=22,n=5;return{min:e-t+n,max:e+t-n}}_laneLimit(){const t=this._playfieldHalf()*this.camera.aspect;return Math.max(22,t-5)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e),this.bloom.setSize(t,e),this.fx.uniforms.uResolution.value.set(t,e)}_runStage(){for(const t of g0)if(this.traveled>=t.at&&this._chapterAt<t.at){this._chapterAt=t.at,this.toast(t.toast);const e=t.at>=1320?"finale":t.at>=820?"warden":t.at>=380?"queen":"default";this._setChapter(e,t.at>=380?"boss":"chapter")}for(this._setChapter(this.traveled>=1320?"finale":this.traveled>=820?"warden":this.traveled>=380?"queen":"default");this.stage.peek()&&this.stage.peek().at<=this.traveled;){const t=this.stage.consume();t.kind==="squad"?this.entities.spawnSquad(this.path,this.traveled,t.form,t.role,t.n,t.ahead):t.kind==="gate"?this.entities.spawnGateAt(this.path,this.traveled):t.kind==="orbs"?this.entities.spawnOrbsAt(this.path,this.traveled,5):t.kind==="blockers"?this.entities.spawnBlockersAt(this.path,this.traveled,t.n||2):t.kind==="midboss"?(this.entities.spawnNamed(this.path,this.traveled,t.id,96,this.step),this.stage.finaleAlive=!1):t.kind==="finale"&&(this.entities.spawnFinale(this.path,this.traveled,96,this.step),this.stage.finaleAlive=!0)}}_setChapter(t,e){t&&(this._chapterId!==t&&(this._chapterId=t,this.world.setChapter(t),this.audio.setChapter(t)),e&&this.audio.sting(e))}_syncLives(){const t=this.ui?.lives;if(t){t.innerHTML="";for(let e=0;e<3;e++){const n=document.createElement("div");n.className="life-pip"+(e<this.lives?" lit":""),t.appendChild(n)}}}_punch(t,e){this.hitStop=Math.max(this.hitStop,Math.min(.045,t)),this.kickAmt=Math.max(this.kickAmt,e),this.kick.set((Math.random()-.5)*1.6,(Math.random()-.5)*1.2,0)}_tryBomb(){if(this.state!=="playing"||this.bombCd>0||this.bombs<=0)return;this.bombs-=1,this.bombsUsed+=1,this.bombCd=.85,this.invuln=Math.max(this.invuln,.55),this.audio.bomb(),this._punch(.08,1.6);const t=this.entities.bombSweep(this.traveled,this.holdY,16);for(const e of t.killed)if(this.kills+=1,this._combatScore(e.type==="boss"?3200:e.type==="midboss"?1400:180),this._dropLoot(e),e.type==="boss"){this.stage.cleared=!0,this.toast("SENTINEL DOWN"),this.win();return}this._syncBombs()}_gainBomb(t=1){const e=Math.min(this.bombMax,this.bombs+t);e!==this.bombs&&(this.bombs=e,this._syncBombs())}_syncBombs(){const t=this.ui?.bombs;if(t){t.innerHTML="";for(let e=0;e<this.bombMax;e++){const n=document.createElement("div");n.className="bomb-pip"+(e<this.bombs?" lit":""),t.appendChild(n)}}}_renderScoreboard(t,e,n){if(t){if(!e||!e.length){t.classList.add("empty"),t.textContent="NO HI-SCORES YET";return}t.classList.remove("empty"),t.innerHTML=e.map((i,r)=>{const o=n!=null&&i.score===n?" me":"",a=i.victory?"CLR":"KIA";return`<div class="row${o}"><span>${r+1}</span><span>${i.rank} · ${a}</span><span>${i.score}</span><span>${i.depth} km</span></div>`}).join("")}}_padState(){const t=typeof navigator<"u"?navigator.getGamepads?.()||[]:[];let e=null;for(const l of t)if(l){e=l;break}if(!e)return{x:0,y:0,fire:!1,bomb:!1,boost:!1,start:!1};const n=l=>Math.abs(l)<.18?0:l,i=n(e.axes[0]||0),r=-n(e.axes[1]||0),o=(e.buttons[15]?.pressed?1:0)-(e.buttons[14]?.pressed?1:0),a=(e.buttons[12]?.pressed?1:0)-(e.buttons[13]?.pressed?1:0);return{x:Math.max(-1,Math.min(1,i+o)),y:Math.max(-1,Math.min(1,r+a)),fire:!!(e.buttons[0]?.pressed||e.buttons[7]?.pressed),bomb:!!e.buttons[1]?.pressed,boost:!!(e.buttons[4]?.pressed||e.buttons[6]?.pressed||e.buttons[5]?.pressed),start:!!(e.buttons[9]?.pressed||e.buttons[8]?.pressed)}}_pollPad(){const t=this._padState(),e=this._padPrev;t.start&&!e.start&&(this.state==="playing"?this.pause():this.state==="paused"?this.resume():this.state==="title"?this._hasRun?this.resumeFromMenu():this.startPlay():this.state==="continue"?this._acceptContinue():this.state==="dead"&&this.startPlay()),t.bomb&&!e.bomb&&(this.state==="continue"?this._declineContinue():this._tryBomb()),t.fire&&this.state==="title"&&!this._hasRun&&!e.fire&&this.startPlay(),t.fire&&this.state==="continue"&&!e.fire&&this._acceptContinue(),this._padPrev={fire:t.fire,bomb:t.bomb,start:t.start}}}const q0=document.getElementById("c"),Y0=new X0(q0);Y0.start();
