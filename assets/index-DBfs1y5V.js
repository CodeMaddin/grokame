(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="170",nh=0,Da=1,ih=2,Kl=1,sh=2,En=3,$n=0,Ie=1,ln=2,Rn=0,Ui=1,Me=2,Ia=3,Ua=4,rh=5,ai=100,oh=101,ah=102,lh=103,ch=104,hh=200,uh=201,fh=202,dh=203,mo=204,go=205,ph=206,mh=207,gh=208,_h=209,vh=210,xh=211,Mh=212,yh=213,Sh=214,_o=0,vo=1,xo=2,ki=3,Mo=4,yo=5,So=6,wo=7,Zl=0,wh=1,bh=2,Yn=0,Jl=1,jl=2,Ql=3,ra=4,Eh=5,tc=6,ec=7,nc=300,zi=301,Hi=302,bo=303,Eo=304,Mr=306,To=1e3,ci=1001,Ao=1002,un=1003,Th=1004,bs=1005,gn=1006,Ar=1007,hi=1008,In=1009,ic=1010,sc=1011,ds=1012,oa=1013,ui=1014,Tn=1015,Cn=1016,aa=1017,la=1018,Vi=1020,rc=35902,oc=1021,ac=1022,cn=1023,lc=1024,cc=1025,Ni=1026,Gi=1027,hc=1028,ca=1029,uc=1030,ha=1031,ua=1033,nr=33776,ir=33777,sr=33778,rr=33779,Ro=35840,Co=35841,Po=35842,Lo=35843,Do=36196,Io=37492,Uo=37496,No=37808,Fo=37809,Oo=37810,Bo=37811,ko=37812,zo=37813,Ho=37814,Vo=37815,Go=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,$o=37821,or=36492,Ko=36494,Zo=36495,fc=36283,Jo=36284,jo=36285,Qo=36286,Ah=3200,Rh=3201,dc=0,Ch=1,qn="",Ze="srgb",$i="srgb-linear",yr="linear",oe="srgb",gi=7680,Na=519,Ph=512,Lh=513,Dh=514,pc=515,Ih=516,Uh=517,Nh=518,Fh=519,Fa=35044,Oa="300 es",An=2e3,ur=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ar=Math.PI/180,fr=180/Math.PI;function ps(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function ke(s,t,e){return Math.max(t,Math.min(e,s))}function Oh(s,t){return(s%t+t)%t}function Rr(s,t,e){return(1-e)*s+e*t}function ts(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,r,o,a,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],E=i[1],w=i[4],v=i[7],R=i[2],T=i[5],y=i[8];return r[0]=o*_+a*E+l*R,r[3]=o*m+a*w+l*T,r[6]=o*d+a*v+l*y,r[1]=c*_+h*E+u*R,r[4]=c*m+h*w+u*T,r[7]=c*d+h*v+u*y,r[2]=f*_+p*E+g*R,r[5]=f*m+p*w+g*T,r[8]=f*d+p*v+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new Ft;function mc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bh(){const s=dr("canvas");return s.style.display="block",s}const Ba={};function ls(s){s in Ba||(Ba[s]=!0,console.warn(s))}function kh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?yr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ka=[.64,.33,.3,.6,.15,.06],za=[.2126,.7152,.0722],Ha=[.3127,.329],Va=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ga=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[$i]:{primaries:ka,whitePoint:Ha,transfer:yr,toXYZ:Va,fromXYZ:Ga,luminanceCoefficients:za,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:ka,whitePoint:Ha,transfer:oe,toXYZ:Va,fromXYZ:Ga,luminanceCoefficients:za,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});let _i;class Vh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=dr("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gh=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Pr(i[o].image)):r.push(Pr(i[o]))}else r=Pr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Pr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wh=0;class Xe extends Ki{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=ci,i=ci,r=gn,o=hi,a=cn,l=In,c=Xe.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=ps(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=nc;Xe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(p+1)/2,R=(d+1)/2,T=(h+f)/4,y=(u+_)/4,A=(g+m)/4;return w>v&&w>R?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=y/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=A/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=y/r,i=A/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Xh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _c extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*_,E=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const R=Math.sqrt(w),T=Math.atan2(R,d*E);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const v=a*E;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lr.copy(this).projectOnVector(t),this.sub(Lr)}reflect(t){return this.sub(Lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new L,Wa=new ms;class gs{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Ts.subVectors(this.max,es),vi.subVectors(t.a,es),xi.subVectors(t.b,es),Mi.subVectors(t.c,es),Bn.subVectors(xi,vi),kn.subVectors(Mi,xi),jn.subVectors(vi,Mi);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-jn.z,jn.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,jn.z,0,-jn.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-jn.y,jn.x,0];return!Dr(e,vi,xi,Mi,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,vi,xi,Mi,Ts))?!1:(As.crossVectors(Bn,kn),e=[As.x,As.y,As.z],Dr(e,vi,xi,Mi,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new L,new L,new L,new L,new L,new L,new L,new L],rn=new L,Es=new gs,vi=new L,xi=new L,Mi=new L,Bn=new L,kn=new L,jn=new L,es=new L,Ts=new L,As=new L,Qn=new L;function Dr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qn.fromArray(s,r);const a=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Yh=new gs,ns=new L,Ir=new L;class _s{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(Ir)),this.expandByPoint(ns.copy(t.center).sub(Ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new L,Ur=new L,Rs=new L,zn=new L,Nr=new L,Cs=new L,Fr=new L;class fa{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ur.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Ur);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Rs),a=zn.dot(this.direction),l=-zn.dot(Rs),c=zn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ur).addScaledVector(Rs,f),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,i,r){Nr.subVectors(e,t),Cs.subVectors(n,t),Fr.crossVectors(Nr,Cs);let o=this.direction.dot(Fr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Cs.crossVectors(zn,Cs));if(l<0)return null;const c=a*this.direction.dot(Nr.cross(zn));if(c<0||l+c>o)return null;const h=-a*zn.dot(Fr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,r,o,a,l,c,h,u,f,p,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,Kh)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Hn.crossVectors(n,Ye),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Hn.crossVectors(n,Ye)),Hn.normalize(),Ps.crossVectors(Ye,Hn),i[0]=Hn.x,i[4]=Ps.x,i[8]=Ye.x,i[1]=Hn.y,i[5]=Ps.y,i[9]=Ye.y,i[2]=Hn.z,i[6]=Ps.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],w=n[7],v=n[11],R=n[15],T=i[0],y=i[4],A=i[8],M=i[12],x=i[1],D=i[5],z=i[9],B=i[13],O=i[2],W=i[6],X=i[10],$=i[14],H=i[3],Z=i[7],at=i[11],vt=i[15];return r[0]=o*T+a*x+l*O+c*H,r[4]=o*y+a*D+l*W+c*Z,r[8]=o*A+a*z+l*X+c*at,r[12]=o*M+a*B+l*$+c*vt,r[1]=h*T+u*x+f*O+p*H,r[5]=h*y+u*D+f*W+p*Z,r[9]=h*A+u*z+f*X+p*at,r[13]=h*M+u*B+f*$+p*vt,r[2]=g*T+_*x+m*O+d*H,r[6]=g*y+_*D+m*W+d*Z,r[10]=g*A+_*z+m*X+d*at,r[14]=g*M+_*B+m*$+d*vt,r[3]=E*T+w*x+v*O+R*H,r[7]=E*y+w*D+v*W+R*Z,r[11]=E*A+w*z+v*X+R*at,r[15]=E*M+w*B+v*$+R*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,w=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,T=e*E+n*w+i*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/T;return t[0]=E*y,t[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*y,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*d+n*l*d)*y,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*p-n*l*p)*y,t[4]=w*y,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*y,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*d-e*l*d)*y,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*p+e*l*p)*y,t[8]=v*y,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*y,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*y,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*y,t[12]=R*y,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*y,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*y,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*y,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,E=l*c,w=l*h,v=l*u,R=n.x,T=n.y,y=n.z;return i[0]=(1-(_+d))*R,i[1]=(p+v)*R,i[2]=(g-w)*R,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(f+d))*T,i[6]=(m+E)*T,i[7]=0,i[8]=(g+w)*y,i[9]=(m-E)*y,i[10]=(1-(f+_))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=yi.set(i[0],i[1],i[2]).length();const o=yi.set(i[4],i[5],i[6]).length(),a=yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=An){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===An)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ur)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=An){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,p=(n+i)*h;let g,_;if(a===An)g=(o+r)*u,_=-2*u;else if(a===ur)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new L,on=new fe,$h=new L(0,0,0),Kh=new L(1,1,1),Hn=new L,Ps=new L,Ye=new L,Xa=new fe,qa=new ms;class _n{constructor(t=0,e=0,n=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zh=0;const Ya=new L,Si=new ms,Sn=new fe,Ls=new L,is=new L,Jh=new L,jh=new ms,$a=new L(1,0,0),Ka=new L(0,1,0),Za=new L(0,0,1),Ja={type:"added"},Qh={type:"removed"},wi={type:"childadded",child:null},Or={type:"childremoved",child:null};class Ae extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new L,e=new _n,n=new ms,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ft}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis($a,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis(Za,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($a,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis(Za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(is,Ls,this.up):Sn.lookAt(Ls,is,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(Sn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qh),Or.child=t,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,Jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new L(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new L,wn=new L,Br=new L,bn=new L,bi=new L,Ei=new L,ja=new L,kr=new L,zr=new L,Hr=new L,Vr=new le,Gr=new le,Wr=new le;class en{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),wn.subVectors(n,e),Br.subVectors(t,e);const o=an.dot(an),a=an.dot(wn),l=an.dot(Br),c=wn.dot(wn),h=wn.dot(Br),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Vr.setScalar(0),Gr.setScalar(0),Wr.setScalar(0),Vr.fromBufferAttribute(t,e),Gr.fromBufferAttribute(t,n),Wr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Vr,r.x),o.addScaledVector(Gr,r.y),o.addScaledVector(Wr,r.z),o}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;bi.subVectors(i,n),Ei.subVectors(r,n),kr.subVectors(t,n);const l=bi.dot(kr),c=Ei.dot(kr);if(l<=0&&c<=0)return e.copy(n);zr.subVectors(t,i);const h=bi.dot(zr),u=Ei.dot(zr);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(bi,o);Hr.subVectors(t,r);const p=bi.dot(Hr),g=Ei.dot(Hr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ei,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ja.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(ja,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(bi,o).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Xr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Y{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Oh(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xr(o,r,t+1/3),this.g=Xr(o,r,t),this.b=Xr(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Yt.fromWorkingColorSpace(Be.copy(this),t),Math.round(ke(Be.r*255,0,255))*65536+Math.round(ke(Be.g*255,0,255))*256+Math.round(ke(Be.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,r=Be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ze){Yt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Ds);const n=Rr(Vn.h,Ds.h,e),i=Rr(Vn.s,Ds.s,e),r=Rr(Vn.l,Ds.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Y;Y.NAMES=xc;let tu=0;class pi extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=ps(),this.name="",this.blending=Ui,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qt extends pi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new L,Is=new lt;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class Mc extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yc extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let eu=0;const tn=new fe,qr=new Ae,Ti=new L,$e=new gs,ss=new gs,De=new L;class Ce extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?yc:Mc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return qr.lookAt(t),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors($e.min,ss.min),$e.expandByPoint(De),De.addVectors($e.max,ss.max),$e.expandByPoint(De)):($e.expandByPoint(ss.min),$e.expandByPoint(ss.max))}$e.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),De.add(Ti)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new L,l[A]=new L;const c=new L,h=new L,u=new L,f=new lt,p=new lt,g=new lt,_=new L,m=new L;function d(A,M,x){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[A].add(_),a[M].add(_),a[x].add(_),l[A].add(m),l[M].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let A=0,M=E.length;A<M;++A){const x=E[A],D=x.start,z=x.count;for(let B=D,O=D+z;B<O;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const w=new L,v=new L,R=new L,T=new L;function y(A){R.fromBufferAttribute(i,A),T.copy(R);const M=a[A];w.copy(M),w.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(T,M);const D=v.dot(l[A])<0?-1:1;o.setXYZW(A,w.x,w.y,w.z,D)}for(let A=0,M=E.length;A<M;++A){const x=E[A],D=x.start,z=x.count;for(let B=D,O=D+z;B<O;B+=3)y(t.getX(B+0)),y(t.getX(B+1)),y(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ee(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new fe,ti=new fa,Us=new _s,tl=new L,Ns=new L,Fs=new L,Os=new L,Yr=new L,Bs=new L,el=new L,ks=new L;class P extends Ae{constructor(t=new Ce,e=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Yr.fromBufferAttribute(u,t),o?Bs.addScaledVector(Yr,h):Bs.addScaledVector(Yr.sub(e),h))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Us.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Us,tl)===null||ti.origin.distanceToSquared(tl)>(t.far-t.near)**2))&&(Qa.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Qa),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,R=w;v<R;v+=3){const T=a.getX(v),y=a.getX(v+1),A=a.getX(v+2);i=zs(this,d,t,n,c,h,u,T,y,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);i=zs(this,o,t,n,c,h,u,E,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,R=w;v<R;v+=3){const T=v,y=v+1,A=v+2;i=zs(this,d,t,n,c,h,u,T,y,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,w=m+1,v=m+2;i=zs(this,o,t,n,c,h,u,E,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function nu(s,t,e,n,i,r,o,a){let l;if(t.side===Ie?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===$n,a),l===null)return null;ks.copy(a),ks.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:s}}function zs(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ns),s.getVertexPosition(l,Fs),s.getVertexPosition(c,Os);const h=nu(s,t,e,n,Ns,Fs,Os,el);if(h){const u=new L;en.getBarycoord(el,Ns,Fs,Os,u),i&&(h.uv=en.getInterpolatedAttribute(i,a,l,c,u,new lt)),r&&(h.uv1=en.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=en.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};en.getNormal(Ns,Fs,Os,f.normal),h.face=f,h.barycoord=u}return h}class st extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,m,d,E,w,v,R,T,y,A,M){const x=v/y,D=R/A,z=v/2,B=R/2,O=T/2,W=y+1,X=A+1;let $=0,H=0;const Z=new L;for(let at=0;at<X;at++){const vt=at*D-B;for(let Ot=0;Ot<W;Ot++){const Jt=Ot*x-z;Z[_]=Jt*E,Z[m]=vt*w,Z[d]=O,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[d]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Ot/y),u.push(1-at/A),$+=1}}for(let at=0;at<A;at++)for(let vt=0;vt<y;vt++){const Ot=f+vt+W*at,Jt=f+vt+W*(at+1),K=f+(vt+1)+W*(at+1),et=f+(vt+1)+W*at;l.push(Ot,Jt,et),l.push(Jt,K,et),H+=6}a.addGroup(p,H,M),p+=H,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new st(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=Wi(s[e]);for(const i in n)t[i]=n[i]}return t}function iu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Sc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Xi={clone:Wi,merge:ze};var su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _e extends pi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=iu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new L,nl=new lt,il=new lt;class He extends wc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,nl,il),e.subVectors(il,nl)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ri=1;class ou extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new He(Ai,Ri,t,e);i.layers=this.layers,this.add(i);const r=new He(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const o=new He(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const a=new He(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const l=new He(Ai,Ri,t,e);l.layers=this.layers,this.add(l);const c=new He(Ai,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bc extends Xe{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class au extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new bc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new st(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Rn});r.uniforms.tEquirect.value=e;const o=new P(i,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=gn),new ou(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const $r=new L,lu=new L,cu=new Ft;class ri{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$r.subVectors(n,e).cross(lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cu.getNormalMatrix(t),i=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new _s,Hs=new L;class da{constructor(t=new ri,e=new ri,n=new ri,i=new ri,r=new ri,o=new ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],E=i[13],w=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,m-p,v-d).normalize(),n[1].setComponents(l+r,f+c,m+p,v+d).normalize(),n[2].setComponents(l+o,f+h,m+g,v+E).normalize(),n[3].setComponents(l-o,f-h,m-g,v-E).normalize(),n[4].setComponents(l-a,f-u,m-_,v-w).normalize(),e===An)n[5].setComponents(l+a,f+u,m+_,v+w).normalize();else if(e===ur)n[5].setComponents(a,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hs.x=i.normal.x>0?t.max.x:t.min.x,Hs.y=i.normal.y>0?t.max.y:t.min.y,Hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function hu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class vs extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const E=d*f-o;for(let w=0;w<c;w++){const v=w*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(w/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const w=E+c*d,v=E+c*(d+1),R=E+1+c*(d+1),T=E+1+c*d;p.push(w,v,T),p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.widthSegments,t.heightSegments)}}var uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fu=`#ifdef USE_ALPHAHASH
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
#endif`,du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_u=`#ifdef USE_AOMAP
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
#endif`,vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xu=`#ifdef USE_BATCHING
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
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bu=`#ifdef USE_IRIDESCENCE
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
#endif`,Eu=`#ifdef USE_BUMPMAP
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uu=`#define PI 3.141592653589793
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
} // validated`,Nu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ju=`#ifdef USE_GRADIENTMAP
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
}`,Qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
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
#endif`,hf=`struct PhysicalMaterial {
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
}`,uf=`
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yf=`#if defined( USE_POINTS_UV )
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
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zf=`float getShadowMask() {
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
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
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
#endif`,od=`#ifdef USE_TRANSMISSION
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
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
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
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`#include <common>
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
}`,vd=`#if DEPTH_PACKING == 3200
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
}`,xd=`#define DISTANCE
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
}`,Md=`#define DISTANCE
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`uniform float scale;
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
}`,bd=`uniform vec3 diffuse;
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
}`,Ed=`#include <common>
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
}`,Td=`uniform vec3 diffuse;
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
}`,Ad=`#define LAMBERT
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
}`,Rd=`#define LAMBERT
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
}`,Cd=`#define MATCAP
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
}`,Pd=`#define MATCAP
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
}`,Ld=`#define NORMAL
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
}`,Dd=`#define NORMAL
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
}`,Id=`#define PHONG
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
}`,Ud=`#define PHONG
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
}`,Nd=`#define STANDARD
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
}`,Fd=`#define STANDARD
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
}`,Od=`#define TOON
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
}`,Bd=`#define TOON
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
}`,kd=`uniform float size;
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
}`,zd=`uniform vec3 diffuse;
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
}`,Hd=`#include <common>
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
}`,Vd=`uniform vec3 color;
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
}`,Gd=`uniform float rotation;
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
}`,Wd=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:uu,alphahash_pars_fragment:fu,alphamap_fragment:du,alphamap_pars_fragment:pu,alphatest_fragment:mu,alphatest_pars_fragment:gu,aomap_fragment:_u,aomap_pars_fragment:vu,batching_pars_vertex:xu,batching_vertex:Mu,begin_vertex:yu,beginnormal_vertex:Su,bsdfs:wu,iridescence_fragment:bu,bumpmap_pars_fragment:Eu,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:Au,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Cu,color_fragment:Pu,color_pars_fragment:Lu,color_pars_vertex:Du,color_vertex:Iu,common:Uu,cube_uv_reflection_fragment:Nu,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Ou,displacementmap_vertex:Bu,emissivemap_fragment:ku,emissivemap_pars_fragment:zu,colorspace_fragment:Hu,colorspace_pars_fragment:Vu,envmap_fragment:Gu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:sf,envmap_vertex:Yu,fog_vertex:$u,fog_pars_vertex:Ku,fog_fragment:Zu,fog_pars_fragment:Ju,gradientmap_pars_fragment:ju,lightmap_pars_fragment:Qu,lights_lambert_fragment:tf,lights_lambert_pars_fragment:ef,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:hf,lights_fragment_begin:uf,lights_fragment_maps:ff,lights_fragment_end:df,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:vf,map_pars_fragment:xf,map_particle_fragment:Mf,map_particle_pars_fragment:yf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:wf,morphinstance_vertex:bf,morphcolor_vertex:Ef,morphnormal_vertex:Tf,morphtarget_pars_vertex:Af,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Pf,normal_pars_fragment:Lf,normal_pars_vertex:Df,normal_vertex:If,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:Bf,opaque_fragment:kf,packing:zf,premultiplied_alpha_fragment:Hf,project_vertex:Vf,dithering_fragment:Gf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:$f,shadowmap_vertex:Kf,shadowmask_pars_fragment:Zf,skinbase_vertex:Jf,skinning_pars_vertex:jf,skinning_vertex:Qf,skinnormal_vertex:td,specularmap_fragment:ed,specularmap_pars_fragment:nd,tonemapping_fragment:id,tonemapping_pars_fragment:sd,transmission_fragment:rd,transmission_pars_fragment:od,uv_pars_fragment:ad,uv_pars_vertex:ld,uv_vertex:cd,worldpos_vertex:hd,background_vert:ud,background_frag:fd,backgroundCube_vert:dd,backgroundCube_frag:pd,cube_vert:md,cube_frag:gd,depth_vert:_d,depth_frag:vd,distanceRGBA_vert:xd,distanceRGBA_frag:Md,equirect_vert:yd,equirect_frag:Sd,linedashed_vert:wd,linedashed_frag:bd,meshbasic_vert:Ed,meshbasic_frag:Td,meshlambert_vert:Ad,meshlambert_frag:Rd,meshmatcap_vert:Cd,meshmatcap_frag:Pd,meshnormal_vert:Ld,meshnormal_frag:Dd,meshphong_vert:Id,meshphong_frag:Ud,meshphysical_vert:Nd,meshphysical_frag:Fd,meshtoon_vert:Od,meshtoon_frag:Bd,points_vert:kd,points_frag:zd,shadow_vert:Hd,shadow_frag:Vd,sprite_vert:Gd,sprite_frag:Wd},ot={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},mn={basic:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Y(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ze([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ze([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Y(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ze([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ze([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ze([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ze([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ze([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ze([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ze([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ze([ot.lights,ot.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};mn.physical={uniforms:ze([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Vs={r:0,b:0,g:0},ni=new _n,Xd=new fe;function qd(s,t,e,n,i,r,o){const a=new Y(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?e:t).get(w)),w}function _(E){let w=!1;const v=g(E);v===null?d(a,l):v&&v.isColor&&(d(v,1),w=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,w){const v=g(w);v&&(v.isCubeTexture||v.mapping===Mr)?(h===void 0&&(h=new P(new st(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Wi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ni.copy(w.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xd.makeRotationFromEuler(ni)),h.material.toneMapped=Yt.getTransfer(v.colorSpace)!==oe,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new P(new vs(2,2),new _e({name:"BackgroundMaterial",uniforms:Wi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,w){E.getRGB(Vs,Sc(s)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:_,addToRenderList:m}}function Yd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(x,D,z,B,O){let W=!1;const X=u(B,z,D);r!==X&&(r=X,c(r.object)),W=p(x,B,z,O),W&&g(x,B,z,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(x,D,z,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,D,z){const B=z.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let W=O[D.id];W===void 0&&(W={},O[D.id]=W);let X=W[B];return X===void 0&&(X=f(l()),W[B]=X),X}function f(x){const D=[],z=[],B=[];for(let O=0;O<e;O++)D[O]=0,z[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,D,z,B){const O=r.attributes,W=D.attributes;let X=0;const $=z.getAttributes();for(const H in $)if($[H].location>=0){const at=O[H];let vt=W[H];if(vt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(vt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(vt=x.instanceColor)),at===void 0||at.attribute!==vt||vt&&at.data!==vt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(x,D,z,B){const O={},W=D.attributes;let X=0;const $=z.getAttributes();for(const H in $)if($[H].location>=0){let at=W[H];at===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));const vt={};vt.attribute=at,at&&at.data&&(vt.data=at.data),O[H]=vt,X++}r.attributes=O,r.attributesNum=X,r.index=B}function _(){const x=r.newAttributes;for(let D=0,z=x.length;D<z;D++)x[D]=0}function m(x){d(x,0)}function d(x,D){const z=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;z[x]=1,B[x]===0&&(s.enableVertexAttribArray(x),B[x]=1),O[x]!==D&&(s.vertexAttribDivisor(x,D),O[x]=D)}function E(){const x=r.newAttributes,D=r.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==x[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function w(x,D,z,B,O,W,X){X===!0?s.vertexAttribIPointer(x,D,z,O,W):s.vertexAttribPointer(x,D,z,B,O,W)}function v(x,D,z,B){_();const O=B.attributes,W=z.getAttributes(),X=D.defaultAttributeValues;for(const $ in W){const H=W[$];if(H.location>=0){let Z=O[$];if(Z===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const at=Z.normalized,vt=Z.itemSize,Ot=t.get(Z);if(Ot===void 0)continue;const Jt=Ot.buffer,K=Ot.type,et=Ot.bytesPerElement,xt=K===s.INT||K===s.UNSIGNED_INT||Z.gpuType===oa;if(Z.isInterleavedBufferAttribute){const rt=Z.data,Tt=rt.stride,Pt=Z.offset;if(rt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)d(H.location+Bt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)m(H.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let Bt=0;Bt<H.locationSize;Bt++)w(H.location+Bt,vt/H.locationSize,K,at,Tt*et,(Pt+vt/H.locationSize*Bt)*et,xt)}else{if(Z.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)d(H.location+rt,Z.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let rt=0;rt<H.locationSize;rt++)w(H.location+rt,vt/H.locationSize,K,at,vt*et,vt/H.locationSize*rt*et,xt)}}else if(X!==void 0){const at=X[$];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(H.location,at);break;case 3:s.vertexAttrib3fv(H.location,at);break;case 4:s.vertexAttrib4fv(H.location,at);break;default:s.vertexAttrib1fv(H.location,at)}}}}E()}function R(){A();for(const x in n){const D=n[x];for(const z in D){const B=D[z];for(const O in B)h(B[O].object),delete B[O];delete D[z]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const z in D){const B=D[z];for(const O in B)h(B[O].object),delete B[O];delete D[z]}delete n[x.id]}function y(x){for(const D in n){const z=n[D];if(z[x.id]===void 0)continue;const B=z[x.id];for(const O in B)h(B[O].object),delete B[O];delete z[x.id]}}function A(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function $d(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==cn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const A=y===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==In&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Tn&&!A)}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function Zd(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ri,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,w=E*4;let v=d.clippingState||null;l.value=v,v=h(g,f,w,p);for(let R=0;R!==w;++R)v[R]=e[R];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,v=p;w!==_;++w,v+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Jd(s){let t=new WeakMap;function e(o,a){return a===bo?o.mapping=zi:a===Eo&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bo||a===Eo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new au(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class pa extends wc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,sl=[.125,.215,.35,.446,.526,.582],li=20,Kr=new pa,rl=new Y;let Zr=null,Jr=0,jr=0,Qr=!1;const oi=(1+Math.sqrt(5))/2,Ci=1/oi,ol=[new L(-oi,Ci,0),new L(oi,Ci,0),new L(-Ci,0,oi),new L(Ci,0,oi),new L(0,oi,-Ci),new L(0,oi,Ci),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class pr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,Jr,jr),this._renderer.xr.enabled=Qr,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Cn,format:cn,colorSpace:$i,depthBuffer:!1},i=al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jd(r)),this._blurMaterial=Qd(r,t,e)}return i}_compileMaterial(t){const e=new P(this._lodPlanes[0],t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,n,i){const a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(rl),h.toneMapping=Yn,h.autoClear=!1;const p=new qt({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new P(new st,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(rl),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const w=this._cubeSize;Gs(i,E*w,d>2?w:0,w,w),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===zi||t.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new P(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Kr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ol[(i-r-1)%ol.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new P(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const d=[];let E=0;for(let y=0;y<li;++y){const A=y/_,M=Math.exp(-A*A/2);d.push(M),y===0?E+=M:y<m&&(E+=2*M)}for(let y=0;y<d.length;y++)d[y]=d[y]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const v=this._sizeLods[i],R=3*v*(i>w-Ii?i-w+Ii:0),T=4*(this._cubeSize-v);Gs(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Kr)}}function jd(s){const t=[],e=[],n=[];let i=s;const r=s-Ii+1+sl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ii?l=sl[o-s+Ii-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),w=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let T=0;T<p;T++){const y=T%3*2/3-1,A=T>2?0:-1,M=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];E.set(M,_*g*T),w.set(f,m*g*T);const x=[T,T,T,T,T,T];v.set(x,d*g*T)}const R=new Ce;R.setAttribute("position",new Ee(E,_)),R.setAttribute("uv",new Ee(w,m)),R.setAttribute("faceIndex",new Ee(v,d)),t.push(R),i>Ii&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function al(s,t,e){const n=new fn(s,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Qd(s,t,e){const n=new Float32Array(li),i=new L(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ll(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function cl(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function tp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bo||l===Eo,h=l===zi||l===Hi;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new pr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new pr(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ep(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function np(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let w=0,v=E.length;w<v;w+=3){const R=E[w+0],T=E[w+1],y=E[w+2];f.push(R,T,T,y,y,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let w=0,v=E.length/3-1;w<v;w+=3){const R=w+0,T=w+1,y=w+2;f.push(R,T,T,y,y,R)}}else return;const m=new(mc(f)?yc:Mc)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ip(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function rp(s,t,e){const n=new WeakMap,i=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const y=new Float32Array(R*T*4*u),A=new _c(y,R,T,u);A.type=Tn,A.needsUpdate=!0;const M=v*4;for(let D=0;D<u;D++){const z=d[D],B=E[D],O=w[D],W=R*T*4*D;for(let X=0;X<z.count;X++){const $=X*M;g===!0&&(i.fromBufferAttribute(z,X),y[W+$+0]=i.x,y[W+$+1]=i.y,y[W+$+2]=i.z,y[W+$+3]=0),_===!0&&(i.fromBufferAttribute(B,X),y[W+$+4]=i.x,y[W+$+5]=i.y,y[W+$+6]=i.z,y[W+$+7]=0),m===!0&&(i.fromBufferAttribute(O,X),y[W+$+8]=i.x,y[W+$+9]=i.y,y[W+$+10]=i.z,y[W+$+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new lt(R,T)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function op(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Tc extends Xe{constructor(t,e,n,i,r,o,a,l,c,h=Ni){if(h!==Ni&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=ui),n===void 0&&h===Gi&&(n=Vi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ac=new Xe,hl=new Tc(1,1),Rc=new _c,Cc=new qh,Pc=new bc,ul=[],fl=[],dl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function Zi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ul[i];if(r===void 0&&(r=new Float32Array(i),ul[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Le(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Sr(s,t){let e=fl[t];e===void 0&&(e=new Int32Array(t),fl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ap(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Le(e,t)}}function cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Le(e,t)}}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Le(e,t)}}function up(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;ml.set(n),s.uniformMatrix2fv(this.addr,!1,ml),Le(e,n)}}function fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;pl.set(n),s.uniformMatrix3fv(this.addr,!1,pl),Le(e,n)}}function dp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;dl.set(n),s.uniformMatrix4fv(this.addr,!1,dl),Le(e,n)}}function pp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Le(e,t)}}function gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Le(e,t)}}function _p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Le(e,t)}}function vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Le(e,t)}}function Mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Le(e,t)}}function yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Le(e,t)}}function Sp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hl.compareFunction=pc,r=hl):r=Ac,e.setTexture2D(t||r,i)}function wp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cc,i)}function bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pc,i)}function Ep(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rc,i)}function Tp(s){switch(s){case 5126:return ap;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return fp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Ap(s,t){s.uniform1fv(this.addr,t)}function Rp(s,t){const e=Zi(t,this.size,2);s.uniform2fv(this.addr,e)}function Cp(s,t){const e=Zi(t,this.size,3);s.uniform3fv(this.addr,e)}function Pp(s,t){const e=Zi(t,this.size,4);s.uniform4fv(this.addr,e)}function Lp(s,t){const e=Zi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dp(s,t){const e=Zi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ip(s,t){const e=Zi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Up(s,t){s.uniform1iv(this.addr,t)}function Np(s,t){s.uniform2iv(this.addr,t)}function Fp(s,t){s.uniform3iv(this.addr,t)}function Op(s,t){s.uniform4iv(this.addr,t)}function Bp(s,t){s.uniform1uiv(this.addr,t)}function kp(s,t){s.uniform2uiv(this.addr,t)}function zp(s,t){s.uniform3uiv(this.addr,t)}function Hp(s,t){s.uniform4uiv(this.addr,t)}function Vp(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ac,r[o])}function Gp(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Cc,r[o])}function Wp(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Pc,r[o])}function Xp(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Rc,r[o])}function qp(s){switch(s){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Lp;case 35675:return Dp;case 35676:return Ip;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return kp;case 36295:return zp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tp(e.type)}}class $p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class Kp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function gl(s,t){s.seq.push(t),s.map[t.id]=t}function Zp(s,t,e){const n=s.name,i=n.length;for(to.lastIndex=0;;){const r=to.exec(n),o=to.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){gl(e,c===void 0?new Yp(a,s,t):new $p(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Kp(a),gl(e,u)),e=u}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Zp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function _l(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Jp=37297;let jp=0;function Qp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const vl=new Ft;function tm(s){Yt._getMatrix(vl,Yt.workingColorSpace,s);const t=`mat3( ${vl.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case yr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function xl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Qp(s.getShaderSource(t),o)}else return i}function em(s,t){const e=tm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nm(s,t){let e;switch(t){case Jl:e="Linear";break;case jl:e="Reinhard";break;case Ql:e="Cineon";break;case ra:e="ACESFilmic";break;case tc:e="AgX";break;case ec:e="Neutral";break;case Eh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ws=new L;function im(){Yt.getLuminanceCoefficients(Ws);const s=Ws.x.toFixed(4),t=Ws.y.toFixed(4),e=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function rm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function om(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function cs(s){return s!==""}function Ml(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const am=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(s){return s.replace(am,cm)}const lm=new Map;function cm(s,t){let e=zt[t];if(e===void 0){const n=lm.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ta(e)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(s){return s.replace(hm,um)}function um(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function fm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function dm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zi:case Hi:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function mm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zl:t="ENVMAP_BLENDING_MULTIPLY";break;case wh:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function gm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _m(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=fm(e),c=dm(e),h=pm(e),u=mm(e),f=gm(e),p=sm(e),g=rm(r),_=i.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),d.length>0&&(d+=`
`)):(m=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),d=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,em("linearToOutputTexel",e.outputColorSpace),im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=ta(o),o=Ml(o,e),o=yl(o,e),a=ta(a),a=Ml(a,e),a=yl(a,e),o=Sl(o),a=Sl(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=E+m+o,v=E+d+a,R=_l(i,i.VERTEX_SHADER,w),T=_l(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function y(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(R).trim(),O=i.getShaderInfoLog(T).trim();let W=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,T);else{const $=xl(i,R,"vertex"),H=xl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+$+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||O==="")&&(X=!1);X&&(D.diagnostics={runnable:W,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:d}})}i.deleteShader(R),i.deleteShader(T),A=new lr(i,_),M=om(i,_)}let A;this.getUniforms=function(){return A===void 0&&y(this),A};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Jp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let vm=0;class xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mm(t),e.set(t,n)),n}}class Mm{constructor(t){this.id=vm++,this.code=t,this.usedTimes=0}}function ym(s,t,e,n,i,r,o){const a=new vc,l=new xm,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,D,z,B){const O=z.fog,W=B.geometry,X=M.isMeshStandardMaterial?z.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),H=$&&$.mapping===Mr?$.image.height:null,Z=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=at!==void 0?at.length:0;let Ot=0;W.morphAttributes.position!==void 0&&(Ot=1),W.morphAttributes.normal!==void 0&&(Ot=2),W.morphAttributes.color!==void 0&&(Ot=3);let Jt,K,et,xt;if(Z){const se=mn[Z];Jt=se.vertexShader,K=se.fragmentShader}else Jt=M.vertexShader,K=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);const rt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,ce=!!M.map,Vt=!!M.matcap,be=!!$,F=!!M.aoMap,je=!!M.lightMap,Gt=!!M.bumpMap,Wt=!!M.normalMap,Rt=!!M.displacementMap,de=!!M.emissiveMap,At=!!M.metalnessMap,C=!!M.roughnessMap,S=M.anisotropy>0,k=M.clearcoat>0,j=M.dispersion>0,tt=M.iridescence>0,J=M.sheen>0,bt=M.transmission>0,ht=S&&!!M.anisotropyMap,pt=k&&!!M.clearcoatMap,Zt=k&&!!M.clearcoatNormalMap,nt=k&&!!M.clearcoatRoughnessMap,gt=tt&&!!M.iridescenceMap,Ct=tt&&!!M.iridescenceThicknessMap,Lt=J&&!!M.sheenColorMap,_t=J&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,kt=!!M.specularColorMap,he=!!M.specularIntensityMap,I=bt&&!!M.transmissionMap,ct=bt&&!!M.thicknessMap,q=!!M.gradientMap,Q=!!M.alphaMap,dt=M.alphaTest>0,ut=!!M.alphaHash,Ut=!!M.extensions;let xe=Yn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Fe={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Jt,fragmentShader:K,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:$i,alphaToCoverage:!!M.alphaToCoverage,map:ce,matcap:Vt,envMap:be,envMapMode:be&&$.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:je,bumpMap:Gt,normalMap:Wt,displacementMap:f&&Rt,emissiveMap:de,normalMapObjectSpace:Wt&&M.normalMapType===Ch,normalMapTangentSpace:Wt&&M.normalMapType===dc,metalnessMap:At,roughnessMap:C,anisotropy:S,anisotropyMap:ht,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:nt,dispersion:j,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:J,sheenColorMap:Lt,sheenRoughnessMap:_t,specularMap:Xt,specularColorMap:kt,specularIntensityMap:he,transmission:bt,transmissionMap:I,thicknessMap:ct,gradientMap:q,opaque:M.transparent===!1&&M.blending===Ui&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:dt,alphaHash:ut,combine:M.combine,mapUv:ce&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:je&&_(M.lightMap.channel),bumpMapUv:Gt&&_(M.bumpMap.channel),normalMapUv:Wt&&_(M.normalMap.channel),displacementMapUv:Rt&&_(M.displacementMap.channel),emissiveMapUv:de&&_(M.emissiveMap.channel),metalnessMapUv:At&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:ht&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(M.sheenRoughnessMap.channel),specularMapUv:Xt&&_(M.specularMap.channel),specularColorMapUv:kt&&_(M.specularColorMap.channel),specularIntensityMapUv:he&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Wt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(ce||Q),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ot,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:ce&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===Ie,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function d(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(E(x,M),w(x,M),x.push(s.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function w(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let D;if(x){const z=mn[x];D=Xi.clone(z.uniforms)}else D=M.uniforms;return D}function R(M,x){let D;for(let z=0,B=h.length;z<B;z++){const O=h[z];if(O.cacheKey===x){D=O,++D.usedTimes;break}}return D===void 0&&(D=new _m(s,x,M,r),h.push(D)),D}function T(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function y(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:y,programs:h,dispose:A}}function Sm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function wm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function bl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function El(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,g,_,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||wm),n.length>1&&n.sort(f||bl),i.length>1&&i.sort(f||bl)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function bm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new El,s.set(n,[o])):i>=r.length?(o=new El,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Em(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Y};break;case"SpotLight":e={position:new L,direction:new L,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Y,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Y,groundColor:new Y};break;case"RectAreaLight":e={color:new Y,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Tm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Am=0;function Rm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cm(s){const t=new Em,e=Tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new fe,o=new fe;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,w=0,v=0,R=0,T=0,y=0;c.sort(Rm);for(let M=0,x=c.length;M<x;M++){const D=c[M],z=D.color,B=D.intensity,O=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*B,u+=z.g*B,f+=z.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],B);y++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,H=e.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=X,p++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(z).multiplyScalar(B),X.distance=O,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[_]=X;const $=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,$.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,v++}_++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(z).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const $=D.shadow,H=e.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,w++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[d]=X,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==E||A.numPointShadows!==w||A.numSpotShadows!==v||A.numSpotMaps!==R||A.numLightProbes!==y)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=y,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=E,A.numPointShadows=w,A.numSpotShadows=v,A.numSpotMaps=R,A.numLightProbes=y,n.version=Am++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const w=c[d];if(w.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(w.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Tl(s){const t=new Cm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Pm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Tl(s),t.set(i,[a])):r>=o.length?(a=new Tl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lm extends pi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dm extends pi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Nm(s,t,e){let n=new da;const i=new lt,r=new lt,o=new le,a=new Lm({depthPacking:Rh}),l=new Dm,c={},h=e.maxTextureSize,u={[$n]:Ie,[Ie]:$n,[ln]:ln},f=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Im,fragmentShader:Um}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new P(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let d=this.type;this.render=function(T,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),x=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Rn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=d!==En&&this.type===En,O=d===En&&this.type!==En;for(let W=0,X=T.length;W<X;W++){const $=T[W],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Z=H.getFrameExtents();if(i.multiply(Z),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||B===!0||O===!0){const vt=this.type!==En?{minFilter:un,magFilter:un}:{};H.map!==null&&H.map.dispose(),H.map=new fn(i.x,i.y,vt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const at=H.getViewportCount();for(let vt=0;vt<at;vt++){const Ot=H.getViewport(vt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),z.viewport(o),H.updateMatrices($,vt),n=H.getFrustum(),v(y,A,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===En&&E(H,A),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(M,x,D)};function E(T,y){const A=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(y,null,A,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(y,null,A,p,_,null)}function w(T,y,A,M){let x=null;const D=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)x=D;else if(x=A.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const z=x.uuid,B=y.uuid;let O=c[z];O===void 0&&(O={},c[z]=O);let W=O[B];W===void 0&&(W=x.clone(),O[B]=W,y.addEventListener("dispose",R)),x=W}if(x.visible=y.visible,x.wireframe=y.wireframe,M===En?x.side=y.shadowSide!==null?y.shadowSide:y.side:x.side=y.shadowSide!==null?y.shadowSide:u[y.side],x.alphaMap=y.alphaMap,x.alphaTest=y.alphaTest,x.map=y.map,x.clipShadows=y.clipShadows,x.clippingPlanes=y.clippingPlanes,x.clipIntersection=y.clipIntersection,x.displacementMap=y.displacementMap,x.displacementScale=y.displacementScale,x.displacementBias=y.displacementBias,x.wireframeLinewidth=y.wireframeLinewidth,x.linewidth=y.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=s.properties.get(x);z.light=A}return x}function v(T,y,A,M,x){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===En)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const B=t.update(T),O=T.material;if(Array.isArray(O)){const W=B.groups;for(let X=0,$=W.length;X<$;X++){const H=W[X],Z=O[H.materialIndex];if(Z&&Z.visible){const at=w(T,Z,M,x);T.onBeforeShadow(s,T,y,A,B,at,H),s.renderBufferDirect(A,null,B,at,T,H),T.onAfterShadow(s,T,y,A,B,at,H)}}}else if(O.visible){const W=w(T,O,M,x);T.onBeforeShadow(s,T,y,A,B,W,null),s.renderBufferDirect(A,null,B,W,T,null),T.onAfterShadow(s,T,y,A,B,W,null)}}const z=T.children;for(let B=0,O=z.length;B<O;B++)v(z[B],y,A,M,x)}function R(T){T.target.removeEventListener("dispose",R);for(const A in c){const M=c[A],x=T.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Fm={[_o]:vo,[xo]:So,[Mo]:wo,[ki]:yo,[vo]:_o,[So]:xo,[wo]:Mo,[yo]:ki};function Om(s,t){function e(){let I=!1;const ct=new le;let q=null;const Q=new le(0,0,0,0);return{setMask:function(dt){q!==dt&&!I&&(s.colorMask(dt,dt,dt,dt),q=dt)},setLocked:function(dt){I=dt},setClear:function(dt,ut,Ut,xe,Fe){Fe===!0&&(dt*=xe,ut*=xe,Ut*=xe),ct.set(dt,ut,Ut,xe),Q.equals(ct)===!1&&(s.clearColor(dt,ut,Ut,xe),Q.copy(ct))},reset:function(){I=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,q=null,Q=null,dt=null;return{setReversed:function(ut){if(ct!==ut){const Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const xe=dt;dt=null,this.setClear(xe)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?rt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(ut){q!==ut&&!I&&(s.depthMask(ut),q=ut)},setFunc:function(ut){if(ct&&(ut=Fm[ut]),Q!==ut){switch(ut){case _o:s.depthFunc(s.NEVER);break;case vo:s.depthFunc(s.ALWAYS);break;case xo:s.depthFunc(s.LESS);break;case ki:s.depthFunc(s.LEQUAL);break;case Mo:s.depthFunc(s.EQUAL);break;case yo:s.depthFunc(s.GEQUAL);break;case So:s.depthFunc(s.GREATER);break;case wo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ut}},setLocked:function(ut){I=ut},setClear:function(ut){dt!==ut&&(ct&&(ut=1-ut),s.clearDepth(ut),dt=ut)},reset:function(){I=!1,q=null,Q=null,dt=null,ct=!1}}}function i(){let I=!1,ct=null,q=null,Q=null,dt=null,ut=null,Ut=null,xe=null,Fe=null;return{setTest:function(se){I||(se?rt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(se){ct!==se&&!I&&(s.stencilMask(se),ct=se)},setFunc:function(se,nn,vn){(q!==se||Q!==nn||dt!==vn)&&(s.stencilFunc(se,nn,vn),q=se,Q=nn,dt=vn)},setOp:function(se,nn,vn){(ut!==se||Ut!==nn||xe!==vn)&&(s.stencilOp(se,nn,vn),ut=se,Ut=nn,xe=vn)},setLocked:function(se){I=se},setClear:function(se){Fe!==se&&(s.clearStencil(se),Fe=se)},reset:function(){I=!1,ct=null,q=null,Q=null,dt=null,ut=null,Ut=null,xe=null,Fe=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,w=null,v=null,R=null,T=null,y=new Y(0,0,0),A=0,M=!1,x=null,D=null,z=null,B=null,O=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=$>=2);let Z=null,at={};const vt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Jt=new le().fromArray(vt),K=new le().fromArray(Ot);function et(I,ct,q,Q){const dt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(I,ut),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<q;Ut++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(ct+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ut}const xt={};xt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(ki),Gt(!1),Wt(Da),rt(s.CULL_FACE),F(Rn);function rt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Tt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Pt(I,ct){return u[I]!==ct?(s.bindFramebuffer(I,ct),u[I]=ct,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Bt(I,ct){let q=p,Q=!1;if(I){q=f.get(ct),q===void 0&&(q=[],f.set(ct,q));const dt=I.textures;if(q.length!==dt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Ut=dt.length;ut<Ut;ut++)q[ut]=s.COLOR_ATTACHMENT0+ut;q.length=dt.length,Q=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Q=!0);Q&&s.drawBuffers(q)}function ce(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Vt={[ai]:s.FUNC_ADD,[oh]:s.FUNC_SUBTRACT,[ah]:s.FUNC_REVERSE_SUBTRACT};Vt[lh]=s.MIN,Vt[ch]=s.MAX;const be={[hh]:s.ZERO,[uh]:s.ONE,[fh]:s.SRC_COLOR,[mo]:s.SRC_ALPHA,[vh]:s.SRC_ALPHA_SATURATE,[gh]:s.DST_COLOR,[ph]:s.DST_ALPHA,[dh]:s.ONE_MINUS_SRC_COLOR,[go]:s.ONE_MINUS_SRC_ALPHA,[_h]:s.ONE_MINUS_DST_COLOR,[mh]:s.ONE_MINUS_DST_ALPHA,[xh]:s.CONSTANT_COLOR,[Mh]:s.ONE_MINUS_CONSTANT_COLOR,[yh]:s.CONSTANT_ALPHA,[Sh]:s.ONE_MINUS_CONSTANT_ALPHA};function F(I,ct,q,Q,dt,ut,Ut,xe,Fe,se){if(I===Rn){_===!0&&(Tt(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),I!==rh){if(I!==m||se!==M){if((d!==ai||v!==ai)&&(s.blendEquation(s.FUNC_ADD),d=ai,v=ai),se)switch(I){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Me:s.blendFunc(s.ONE,s.ONE);break;case Ia:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ua:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Me:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ia:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ua:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,w=null,R=null,T=null,y.set(0,0,0),A=0,m=I,M=se}return}dt=dt||ct,ut=ut||q,Ut=Ut||Q,(ct!==d||dt!==v)&&(s.blendEquationSeparate(Vt[ct],Vt[dt]),d=ct,v=dt),(q!==E||Q!==w||ut!==R||Ut!==T)&&(s.blendFuncSeparate(be[q],be[Q],be[ut],be[Ut]),E=q,w=Q,R=ut,T=Ut),(xe.equals(y)===!1||Fe!==A)&&(s.blendColor(xe.r,xe.g,xe.b,Fe),y.copy(xe),A=Fe),m=I,M=!1}function je(I,ct){I.side===ln?Tt(s.CULL_FACE):rt(s.CULL_FACE);let q=I.side===Ie;ct&&(q=!q),Gt(q),I.blending===Ui&&I.transparent===!1?F(Rn):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),de(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(I){x!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),x=I)}function Wt(I){I!==nh?(rt(s.CULL_FACE),I!==D&&(I===Da?s.cullFace(s.BACK):I===ih?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),D=I}function Rt(I){I!==z&&(X&&s.lineWidth(I),z=I)}function de(I,ct,q){I?(rt(s.POLYGON_OFFSET_FILL),(B!==ct||O!==q)&&(s.polygonOffset(ct,q),B=ct,O=q)):Tt(s.POLYGON_OFFSET_FILL)}function At(I){I?rt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+W-1),Z!==I&&(s.activeTexture(I),Z=I)}function S(I,ct,q){q===void 0&&(Z===null?q=s.TEXTURE0+W-1:q=Z);let Q=at[q];Q===void 0&&(Q={type:void 0,texture:void 0},at[q]=Q),(Q.type!==I||Q.texture!==ct)&&(Z!==q&&(s.activeTexture(q),Z=q),s.bindTexture(I,ct||xt[I]),Q.type=I,Q.texture=ct)}function k(){const I=at[Z];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(I){Jt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Jt.copy(I))}function _t(I){K.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Xt(I,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let Q=q.get(I);Q===void 0&&(Q=s.getUniformBlockIndex(ct,I.name),q.set(I,Q))}function kt(I,ct){const Q=c.get(ct).get(I);l.get(ct)!==Q&&(s.uniformBlockBinding(ct,Q,I.__bindingPointIndex),l.set(ct,Q))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,at={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,w=null,v=null,R=null,T=null,y=new Y(0,0,0),A=0,M=!1,x=null,D=null,z=null,B=null,O=null,Jt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Tt,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:ce,setBlending:F,setMaterial:je,setFlipSided:Gt,setCullFace:Wt,setLineWidth:Rt,setPolygonOffset:de,setScissorTest:At,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Xt,uniformBlockBinding:kt,texStorage2D:Zt,texStorage3D:nt,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:ht,compressedTexSubImage3D:pt,scissor:Lt,viewport:_t,reset:he}}function Al(s,t,e,n){const i=Bm(n);switch(e){case oc:return s*t;case lc:return s*t;case cc:return s*t*2;case hc:return s*t/i.components*i.byteLength;case ca:return s*t/i.components*i.byteLength;case uc:return s*t*2/i.components*i.byteLength;case ha:return s*t*2/i.components*i.byteLength;case ac:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case ua:return s*t*4/i.components*i.byteLength;case nr:case ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:case Lo:return Math.max(s,16)*Math.max(t,8)/4;case Ro:case Po:return Math.max(s,8)*Math.max(t,8)/2;case Do:case Io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Go:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case or:case Ko:case Zo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fc:case Jo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case jo:case Qo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bm(s){switch(s){case In:case ic:return{byteLength:1,components:1};case ds:case sc:case Cn:return{byteLength:2,components:1};case aa:case la:return{byteLength:2,components:4};case ui:case oa:case Tn:return{byteLength:4,components:1};case rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function km(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):dr("canvas")}function _(C,S,k){let j=1;const tt=At(C);if((tt.width>k||tt.height>k)&&(j=k/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(j*tt.width),bt=Math.floor(j*tt.height);u===void 0&&(u=g(J,bt));const ht=S?g(J,bt):u;return ht.width=J,ht.height=bt,ht.getContext("2d").drawImage(C,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+bt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){s.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(C,S,k,j,tt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===s.RED&&(k===s.FLOAT&&(J=s.R32F),k===s.HALF_FLOAT&&(J=s.R16F),k===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.R8UI),k===s.UNSIGNED_SHORT&&(J=s.R16UI),k===s.UNSIGNED_INT&&(J=s.R32UI),k===s.BYTE&&(J=s.R8I),k===s.SHORT&&(J=s.R16I),k===s.INT&&(J=s.R32I)),S===s.RG&&(k===s.FLOAT&&(J=s.RG32F),k===s.HALF_FLOAT&&(J=s.RG16F),k===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RG8UI),k===s.UNSIGNED_SHORT&&(J=s.RG16UI),k===s.UNSIGNED_INT&&(J=s.RG32UI),k===s.BYTE&&(J=s.RG8I),k===s.SHORT&&(J=s.RG16I),k===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGB8UI),k===s.UNSIGNED_SHORT&&(J=s.RGB16UI),k===s.UNSIGNED_INT&&(J=s.RGB32UI),k===s.BYTE&&(J=s.RGB8I),k===s.SHORT&&(J=s.RGB16I),k===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),k===s.UNSIGNED_INT&&(J=s.RGBA32UI),k===s.BYTE&&(J=s.RGBA8I),k===s.SHORT&&(J=s.RGBA16I),k===s.INT&&(J=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),S===s.RGBA){const bt=tt?yr:Yt.getTransfer(j);k===s.FLOAT&&(J=s.RGBA32F),k===s.HALF_FLOAT&&(J=s.RGBA16F),k===s.UNSIGNED_BYTE&&(J=bt===oe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(C,S){let k;return C?S===null||S===ui||S===Vi?k=s.DEPTH24_STENCIL8:S===Tn?k=s.DEPTH32F_STENCIL8:S===ds&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ui||S===Vi?k=s.DEPTH_COMPONENT24:S===Tn?k=s.DEPTH_COMPONENT32F:S===ds&&(k=s.DEPTH_COMPONENT16),k}function R(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&h.delete(S)}function y(C){const S=C.target;S.removeEventListener("dispose",y),x(S)}function A(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,j=f.get(k);if(j){const tt=j[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(C),Object.keys(j).length===0&&f.delete(k)}n.remove(C)}function M(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const k=C.source,j=f.get(k);delete j[S.__cacheKey],o.memory.textures--}function x(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let tt=0;tt<S.__webglFramebuffer[j].length;tt++)s.deleteFramebuffer(S.__webglFramebuffer[j][tt]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let j=0,tt=k.length;j<tt;j++){const J=n.get(k[j]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(C)}let D=0;function z(){D=0}function B(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){const k=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,C,S);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function X(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){K(k,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function $(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){K(k,C,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function H(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){et(k,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const Z={[To]:s.REPEAT,[ci]:s.CLAMP_TO_EDGE,[Ao]:s.MIRRORED_REPEAT},at={[un]:s.NEAREST,[Th]:s.NEAREST_MIPMAP_NEAREST,[bs]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},vt={[Ph]:s.NEVER,[Fh]:s.ALWAYS,[Lh]:s.LESS,[pc]:s.LEQUAL,[Dh]:s.EQUAL,[Nh]:s.GEQUAL,[Ih]:s.GREATER,[Uh]:s.NOTEQUAL};function Ot(C,S){if(S.type===Tn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===Ar||S.magFilter===bs||S.magFilter===hi||S.minFilter===gn||S.minFilter===Ar||S.minFilter===bs||S.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Z[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,at[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==bs&&S.minFilter!==hi||S.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Jt(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const j=S.source;let tt=f.get(j);tt===void 0&&(tt={},f.set(j,tt));const J=O(S);if(J!==C.__cacheKey){tt[J]===void 0&&(tt[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),tt[J].usedTimes++;const bt=tt[C.__cacheKey];bt!==void 0&&(tt[C.__cacheKey].usedTimes--,bt.usedTimes===0&&M(S)),C.__cacheKey=J,C.__webglTexture=tt[J].texture}return k}function K(C,S,k){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const tt=Jt(C,S),J=S.source;e.bindTexture(j,C.__webglTexture,s.TEXTURE0+k);const bt=n.get(J);if(J.version!==bt.__version||tt===!0){e.activeTexture(s.TEXTURE0+k);const ht=Yt.getPrimaries(Yt.workingColorSpace),pt=S.colorSpace===qn?null:Yt.getPrimaries(S.colorSpace),Zt=S.colorSpace===qn||ht===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let nt=_(S.image,!1,i.maxTextureSize);nt=de(S,nt);const gt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type);let Lt=w(S.internalFormat,gt,Ct,S.colorSpace,S.isVideoTexture);Ot(j,S);let _t;const Xt=S.mipmaps,kt=S.isVideoTexture!==!0,he=bt.__version===void 0||tt===!0,I=J.dataReady,ct=R(S,nt);if(S.isDepthTexture)Lt=v(S.format===Gi,S.type),he&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Lt,nt.width,nt.height,0,gt,Ct,null));else if(S.isDataTexture)if(Xt.length>0){kt&&he&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,Xt[0].width,Xt[0].height);for(let q=0,Q=Xt.length;q<Q;q++)_t=Xt[q],kt?I&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,q,Lt,_t.width,_t.height,0,gt,Ct,_t.data);S.generateMipmaps=!1}else kt?(he&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,nt.width,nt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,Ct,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,nt.width,nt.height,0,gt,Ct,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,Xt[0].width,Xt[0].height,nt.depth);for(let q=0,Q=Xt.length;q<Q;q++)if(_t=Xt[q],S.format!==cn)if(gt!==null)if(kt){if(I)if(S.layerUpdates.size>0){const dt=Al(_t.width,_t.height,S.format,S.type);for(const ut of S.layerUpdates){const Ut=_t.data.subarray(ut*dt/_t.data.BYTES_PER_ELEMENT,(ut+1)*dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ut,_t.width,_t.height,1,gt,Ut)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Lt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,nt.depth,gt,Ct,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Lt,_t.width,_t.height,nt.depth,0,gt,Ct,_t.data)}else{kt&&he&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,Xt[0].width,Xt[0].height);for(let q=0,Q=Xt.length;q<Q;q++)_t=Xt[q],S.format!==cn?gt!==null?kt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Lt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?I&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,q,Lt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(S.isDataArrayTexture)if(kt){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,nt.width,nt.height,nt.depth),I)if(S.layerUpdates.size>0){const q=Al(nt.width,nt.height,S.format,S.type);for(const Q of S.layerUpdates){const dt=nt.data.subarray(Q*q/nt.data.BYTES_PER_ELEMENT,(Q+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,gt,Ct,dt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(S.isData3DTexture)kt?(he&&e.texStorage3D(s.TEXTURE_3D,ct,Lt,nt.width,nt.height,nt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(S.isFramebufferTexture){if(he)if(kt)e.texStorage2D(s.TEXTURE_2D,ct,Lt,nt.width,nt.height);else{let q=nt.width,Q=nt.height;for(let dt=0;dt<ct;dt++)e.texImage2D(s.TEXTURE_2D,dt,Lt,q,Q,0,gt,Ct,null),q>>=1,Q>>=1}}else if(Xt.length>0){if(kt&&he){const q=At(Xt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Lt,q.width,q.height)}for(let q=0,Q=Xt.length;q<Q;q++)_t=Xt[q],kt?I&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt,Ct,_t):e.texImage2D(s.TEXTURE_2D,q,Lt,gt,Ct,_t);S.generateMipmaps=!1}else if(kt){if(he){const q=At(nt);e.texStorage2D(s.TEXTURE_2D,ct,Lt,q.width,q.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Ct,nt)}else e.texImage2D(s.TEXTURE_2D,0,Lt,gt,Ct,nt);m(S)&&d(j),bt.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function et(C,S,k){if(S.image.length!==6)return;const j=Jt(C,S),tt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const J=n.get(tt);if(tt.version!==J.__version||j===!0){e.activeTexture(s.TEXTURE0+k);const bt=Yt.getPrimaries(Yt.workingColorSpace),ht=S.colorSpace===qn?null:Yt.getPrimaries(S.colorSpace),pt=S.colorSpace===qn||bt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let Q=0;Q<6;Q++)!Zt&&!nt?gt[Q]=_(S.image[Q],!0,i.maxCubemapSize):gt[Q]=nt?S.image[Q].image:S.image[Q],gt[Q]=de(S,gt[Q]);const Ct=gt[0],Lt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Xt=w(S.internalFormat,Lt,_t,S.colorSpace),kt=S.isVideoTexture!==!0,he=J.__version===void 0||j===!0,I=tt.dataReady;let ct=R(S,Ct);Ot(s.TEXTURE_CUBE_MAP,S);let q;if(Zt){kt&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Xt,Ct.width,Ct.height);for(let Q=0;Q<6;Q++){q=gt[Q].mipmaps;for(let dt=0;dt<q.length;dt++){const ut=q[dt];S.format!==cn?Lt!==null?kt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,ut.width,ut.height,Lt,_t,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,Xt,ut.width,ut.height,0,Lt,_t,ut.data)}}}else{if(q=S.mipmaps,kt&&he){q.length>0&&ct++;const Q=At(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Xt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){kt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,gt[Q].width,gt[Q].height,Lt,_t,gt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,gt[Q].width,gt[Q].height,0,Lt,_t,gt[Q].data);for(let dt=0;dt<q.length;dt++){const Ut=q[dt].image[Q].image;kt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Ut.width,Ut.height,Lt,_t,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,Xt,Ut.width,Ut.height,0,Lt,_t,Ut.data)}}else{kt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,_t,gt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xt,Lt,_t,gt[Q]);for(let dt=0;dt<q.length;dt++){const ut=q[dt];kt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Lt,_t,ut.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,Xt,Lt,_t,ut.image[Q])}}}m(S)&&d(s.TEXTURE_CUBE_MAP),J.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function xt(C,S,k,j,tt,J){const bt=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),pt=w(k.internalFormat,bt,ht,k.colorSpace),Zt=n.get(S),nt=n.get(k);if(nt.__renderTarget=S,!Zt.__hasExternalTextures){const gt=Math.max(1,S.width>>J),Ct=Math.max(1,S.height>>J);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,pt,gt,Ct,S.depth,0,bt,ht,null):e.texImage2D(tt,J,pt,gt,Ct,0,bt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Wt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,tt,nt.__webglTexture,0,Gt(S)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,tt,nt.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(C,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const j=S.depthTexture,tt=j&&j.isDepthTexture?j.type:null,J=v(S.stencilBuffer,tt),bt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Gt(S);Wt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,J,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,J,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,C)}else{const j=S.textures;for(let tt=0;tt<j.length;tt++){const J=j[tt],bt=r.convert(J.format,J.colorSpace),ht=r.convert(J.type),pt=w(J.internalFormat,bt,ht,J.colorSpace),Zt=Gt(S);k&&Wt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,pt,S.width,S.height):Wt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,pt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const tt=j.__webglTexture,J=Gt(S);if(S.depthTexture.format===Ni)Wt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(S.depthTexture.format===Gi)Wt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Tt(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),rt(S.__webglDepthbuffer[j],C,!1);else{const tt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),rt(S.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(C,S,k){const j=n.get(C);S!==void 0&&xt(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Pt(C)}function ce(C){const S=C.texture,k=n.get(C),j=n.get(S);C.addEventListener("dispose",y);const tt=C.textures,J=C.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let pt=0;pt<S.mipmaps.length;pt++)k.__webglFramebuffer[ht][pt]=s.createFramebuffer()}else k.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)k.__webglFramebuffer[ht]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ht=0,pt=tt.length;ht<pt;ht++){const Zt=n.get(tt[ht]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Wt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const pt=tt[ht];k.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);const Zt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),gt=w(pt.internalFormat,Zt,nt,pt.colorSpace,C.isXRRenderTarget===!0),Ct=Gt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,gt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)xt(k.__webglFramebuffer[ht][pt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else xt(k.__webglFramebuffer[ht],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(S)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,pt=tt.length;ht<pt;ht++){const Zt=tt[ht],nt=n.get(Zt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Ot(s.TEXTURE_2D,Zt),xt(k.__webglFramebuffer,C,Zt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(Zt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Ot(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)xt(k.__webglFramebuffer[pt],C,S,s.COLOR_ATTACHMENT0,ht,pt);else xt(k.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ht,0);m(S)&&d(ht),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Vt(C){const S=C.textures;for(let k=0,j=S.length;k<j;k++){const tt=S[k];if(m(tt)){const J=E(C),bt=n.get(tt).__webglTexture;e.bindTexture(J,bt),d(J),e.unbindTexture()}}}const be=[],F=[];function je(C){if(C.samples>0){if(Wt(C)===!1){const S=C.textures,k=C.width,j=C.height;let tt=s.COLOR_BUFFER_BIT;const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(C),ht=S.length>1;if(ht)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const Zt=n.get(S[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,k,j,0,0,k,j,tt,s.NEAREST),l===!0&&(be.length=0,F.length=0,be.push(s.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(be.push(J),F.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const Zt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Gt(C){return Math.min(i.maxSamples,C.samples)}function Wt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function de(C,S){const k=C.colorSpace,j=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==$i&&k!==qn&&(Yt.getTransfer(k)===oe?(j!==cn||tt!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function At(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Wt}function zm(s,t){function e(n,i=qn){let r;const o=Yt.getTransfer(i);if(n===In)return s.UNSIGNED_BYTE;if(n===aa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===la)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return s.BYTE;if(n===sc)return s.SHORT;if(n===ds)return s.UNSIGNED_SHORT;if(n===oa)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===oc)return s.ALPHA;if(n===ac)return s.RGB;if(n===cn)return s.RGBA;if(n===lc)return s.LUMINANCE;if(n===cc)return s.LUMINANCE_ALPHA;if(n===Ni)return s.DEPTH_COMPONENT;if(n===Gi)return s.DEPTH_STENCIL;if(n===hc)return s.RED;if(n===ca)return s.RED_INTEGER;if(n===uc)return s.RG;if(n===ha)return s.RG_INTEGER;if(n===ua)return s.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Do||n===Io)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===No||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===No)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Go)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===Ko||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===Jo||n===jo||n===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Hm extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vm={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wm=`
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

}`;class Xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Xe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _e({vertexShader:Gm,fragmentShader:Wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new P(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qm extends Ki{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new Xm,m=e.getContextAttributes();let d=null,E=null;const w=[],v=[],R=new lt;let T=null;const y=new He;y.viewport=new le;const A=new He;A.viewport=new le;const M=[y,A],x=new Hm;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=w[K];return et===void 0&&(et=new eo,w[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=w[K];return et===void 0&&(et=new eo,w[K]=et),et.getGripSpace()},this.getHand=function(K){let et=w[K];return et===void 0&&(et=new eo,w[K]=et),et.getHandSpace()};function B(K){const et=v.indexOf(K.inputSource);if(et===-1)return;const xt=w[et];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||o),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",W);for(let K=0;K<w.length;K++){const et=v[K];et!==null&&(v[K]=null,w[K].disconnect(et))}D=null,z=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,E=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",O),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new fn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,xt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Gi:Ni,xt=m.stencil?Vi:ui);const Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new fn(f.textureWidth,f.textureHeight,{format:cn,type:In,depthTexture:new Tc(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(K){for(let et=0;et<K.removed.length;et++){const xt=K.removed[et],rt=v.indexOf(xt);rt>=0&&(v[rt]=null,w[rt].disconnect(xt))}for(let et=0;et<K.added.length;et++){const xt=K.added[et];let rt=v.indexOf(xt);if(rt===-1){for(let Pt=0;Pt<w.length;Pt++)if(Pt>=v.length){v.push(xt),rt=Pt;break}else if(v[Pt]===null){v[Pt]=xt,rt=Pt;break}if(rt===-1)break}const Tt=w[rt];Tt&&Tt.connect(xt)}}const X=new L,$=new L;function H(K,et,xt){X.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);const rt=X.distanceTo($),Tt=et.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,Bt=Tt[14]/(Tt[10]-1),ce=Tt[14]/(Tt[10]+1),Vt=(Tt[9]+1)/Tt[5],be=(Tt[9]-1)/Tt[5],F=(Tt[8]-1)/Tt[0],je=(Pt[8]+1)/Pt[0],Gt=Bt*F,Wt=Bt*je,Rt=rt/(-F+je),de=Rt*-F;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(de),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const At=Bt+Rt,C=ce+Rt,S=Gt-de,k=Wt+(rt-de),j=Vt*ce/C*At,tt=be*ce/C*At;K.projectionMatrix.makePerspective(S,k,j,tt,At,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Z(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let et=K.near,xt=K.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),x.near=A.near=y.near=et,x.far=A.far=y.far=xt,(D!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,z=x.far),y.layers.mask=K.layers.mask|2,A.layers.mask=K.layers.mask|4,x.layers.mask=y.layers.mask|A.layers.mask;const rt=K.parent,Tt=x.cameras;Z(x,rt);for(let Pt=0;Pt<Tt.length;Pt++)Z(Tt[Pt],rt);Tt.length===2?H(x,y,A):x.projectionMatrix.copy(y.projectionMatrix),at(K,x,rt)};function at(K,et,xt){xt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=fr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let vt=null;function Ot(K,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;xt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Pt=0;Pt<xt.length;Pt++){const Bt=xt[Pt];let ce=null;if(p!==null)ce=p.getViewport(Bt);else{const be=u.getViewSubImage(f,Bt);ce=be.viewport,Pt===0&&(t.setRenderTargetTextures(E,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(E))}let Vt=M[Pt];Vt===void 0&&(Vt=new He,Vt.layers.enable(Pt),Vt.viewport=new le,M[Pt]=Vt),Vt.matrix.fromArray(Bt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Bt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ce.x,ce.y,ce.width,ce.height),Pt===0&&(x.matrix.copy(Vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(Vt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Pt=u.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let xt=0;xt<w.length;xt++){const rt=v[xt],Tt=w[xt];rt!==null&&Tt!==void 0&&Tt.update(rt,et,c||o)}vt&&vt(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Jt=new Ec;Jt.setAnimationLoop(Ot),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}}const ii=new _n,Ym=new fe;function $m(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Sc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,E,w,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ie&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ie&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),w=E.envMap,v=E.envMapRotation;w&&(m.envMap.value=w,ii.copy(v),ii.x*=-1,ii.y*=-1,ii.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(ii)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Km(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const v=w.program;n.uniformBlockBinding(E,v)}function c(E,w){let v=i[E.id];v===void 0&&(g(E),v=h(E),i[E.id]=v,E.addEventListener("dispose",m));const R=w.program;n.updateUBOMapping(E,R);const T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){const w=u();E.__bindingPointIndex=w;const v=s.createBuffer(),R=E.__size,T=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const w=i[E.id],v=E.uniforms,R=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let T=0,y=v.length;T<y;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,x=A.length;M<x;M++){const D=A[M];if(p(D,T,M,R)===!0){const z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let O=0;for(let W=0;W<B.length;W++){const X=B[W],$=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,z+O,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,w,v,R){const T=E.value,y=w+"_"+v;if(R[y]===void 0)return typeof T=="number"||typeof T=="boolean"?R[y]=T:R[y]=T.clone(),!0;{const A=R[y];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return R[y]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(E){const w=E.uniforms;let v=0;const R=16;for(let y=0,A=w.length;y<A;y++){const M=Array.isArray(w[y])?w[y]:[w[y]];for(let x=0,D=M.length;x<D;x++){const z=M[x],B=Array.isArray(z.value)?z.value:[z.value];for(let O=0,W=B.length;O<W;O++){const X=B[O],$=_(X),H=v%R,Z=H%$.boundary,at=H+Z;v+=Z,at!==0&&R-at<$.storage&&(v+=R-at),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=$.storage}}}const T=v%R;return T>0&&(v+=R-T),E.__size=v,E.__cache={},this}function _(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){const w=E.target;w.removeEventListener("dispose",m);const v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function d(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}class Zm{constructor(t={}){const{canvas:e=Bh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Yn,this.toneMappingExposure=1;const v=this;let R=!1,T=0,y=0,A=null,M=-1,x=null;const D=new le,z=new le;let B=null;const O=new Y(0);let W=0,X=e.width,$=e.height,H=1,Z=null,at=null;const vt=new le(0,0,X,$),Ot=new le(0,0,X,$);let Jt=!1;const K=new da;let et=!1,xt=!1;const rt=new fe,Tt=new fe,Pt=new L,Bt=new le,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function be(){return A===null?H:1}let F=n;function je(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sa}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){const U="webgl2";if(F=je(U,b),F===null)throw je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Gt,Wt,Rt,de,At,C,S,k,j,tt,J,bt,ht,pt,Zt,nt,gt,Ct,Lt,_t,Xt,kt,he,I;function ct(){Gt=new ep(F),Gt.init(),kt=new zm(F,Gt),Wt=new Kd(F,Gt,t,kt),Rt=new Om(F,Gt),Wt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),de=new sp(F),At=new Sm,C=new km(F,Gt,Rt,At,Wt,kt,de),S=new Jd(v),k=new tp(v),j=new hu(F),he=new Yd(F,j),tt=new np(F,j,de,he),J=new op(F,tt,j,de),Lt=new rp(F,Wt,C),nt=new Zd(At),bt=new ym(v,S,k,Gt,Wt,he,nt),ht=new $m(v,At),pt=new bm,Zt=new Pm(Gt),Ct=new qd(v,S,k,Rt,J,p,l),gt=new Nm(v,J,Wt),I=new Km(F,de,Wt,Rt),_t=new $d(F,Gt,de),Xt=new ip(F,Gt,de),de.programs=bt.programs,v.capabilities=Wt,v.extensions=Gt,v.properties=At,v.renderLists=pt,v.shadowMap=gt,v.state=Rt,v.info=de}ct();const q=new qm(v,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(X,$,!1))},this.getSize=function(b){return b.set(X,$)},this.setSize=function(b,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,$=U,e.width=Math.floor(b*H),e.height=Math.floor(U*H),V===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*H,$*H).floor()},this.setDrawingBufferSize=function(b,U,V){X=b,$=U,H=V,e.width=Math.floor(b*V),e.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,U,V,G){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,U,V,G),Rt.viewport(D.copy(vt).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Ot)},this.setScissor=function(b,U,V,G){b.isVector4?Ot.set(b.x,b.y,b.z,b.w):Ot.set(b,U,V,G),Rt.scissor(z.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(b){Rt.setScissorTest(Jt=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,U=!0,V=!0){let G=0;if(b){let N=!1;if(A!==null){const it=A.texture.format;N=it===ua||it===ha||it===ca}if(N){const it=A.texture.type,ft=it===In||it===ui||it===ds||it===Vi||it===aa||it===la,Mt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Dt=Mt.r,Nt=Mt.g,St=Mt.b;ft?(g[0]=Dt,g[1]=Nt,g[2]=St,g[3]=yt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Dt,_[1]=Nt,_[2]=St,_[3]=yt,F.clearBufferiv(F.COLOR,0,_))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),V&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Zt.dispose(),At.dispose(),S.dispose(),k.dispose(),J.dispose(),he.dispose(),I.dispose(),bt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ba),q.removeEventListener("sessionend",Ea),Jn.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=de.autoReset,U=gt.enabled,V=gt.autoUpdate,G=gt.needsUpdate,N=gt.type;ct(),de.autoReset=b,gt.enabled=U,gt.autoUpdate=V,gt.needsUpdate=G,gt.type=N}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ut(b){const U=b.target;U.removeEventListener("dispose",Ut),xe(U)}function xe(b){Fe(b),At.remove(b)}function Fe(b){const U=At.get(b).programs;U!==void 0&&(U.forEach(function(V){bt.releaseProgram(V)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,G,N,it){U===null&&(U=ce);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Qc(b,U,V,G,N);Rt.setMaterial(G,ft);let yt=V.index,Dt=1;if(G.wireframe===!0){if(yt=tt.getWireframeAttribute(V),yt===void 0)return;Dt=2}const Nt=V.drawRange,St=V.attributes.position;let jt=Nt.start*Dt,ue=(Nt.start+Nt.count)*Dt;it!==null&&(jt=Math.max(jt,it.start*Dt),ue=Math.min(ue,(it.start+it.count)*Dt)),yt!==null?(jt=Math.max(jt,0),ue=Math.min(ue,yt.count)):St!=null&&(jt=Math.max(jt,0),ue=Math.min(ue,St.count));const pe=ue-jt;if(pe<0||pe===1/0)return;he.setup(N,G,Mt,V,yt);let Ge,te=_t;if(yt!==null&&(Ge=j.get(yt),te=Xt,te.setIndex(Ge)),N.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*be()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(N.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*be()),N.isLineSegments?te.setMode(F.LINES):N.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else N.isPoints?te.setMode(F.POINTS):N.isSprite&&te.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)te.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))te.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,xn=N._multiDrawCounts,ee=N._multiDrawCount,sn=yt?j.get(yt).bytesPerElement:1,mi=At.get(G).currentProgram.getUniforms();for(let qe=0;qe<ee;qe++)mi.setValue(F,"_gl_DrawID",qe),te.render(Et[qe]/sn,xn[qe])}else if(N.isInstancedMesh)te.renderInstances(jt,pe,N.count);else if(V.isInstancedBufferGeometry){const Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xn=Math.min(V.instanceCount,Et);te.renderInstances(jt,pe,xn)}else te.render(jt,pe)};function se(b,U,V){b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=Ie,b.needsUpdate=!0,ws(b,U,V),b.side=$n,b.needsUpdate=!0,ws(b,U,V),b.side=ln):ws(b,U,V)}this.compile=function(b,U,V=null){V===null&&(V=b),d=Zt.get(V),d.init(U),w.push(d),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),b!==V&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const G=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const Mt=it[ft];se(Mt,V,N),G.add(Mt)}else se(it,V,N),G.add(it)}),w.pop(),d=null,G},this.compileAsync=function(b,U,V=null){const G=this.compile(b,U,V);return new Promise(N=>{function it(){if(G.forEach(function(ft){At.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){N(b);return}setTimeout(it,10)}Gt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let nn=null;function vn(b){nn&&nn(b)}function ba(){Jn.stop()}function Ea(){Jn.start()}const Jn=new Ec;Jn.setAnimationLoop(vn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(b){nn=b,q.setAnimationLoop(b),b===null?Jn.stop():Jn.start()},q.addEventListener("sessionstart",ba),q.addEventListener("sessionend",Ea),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,A),d=Zt.get(b,w.length),d.init(U),w.push(d),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Tt),xt=this.localClippingEnabled,et=nt.init(this.clippingPlanes,xt),m=pt.get(b,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&Tr(it,U,-1/0,v.sortObjects)}Tr(b,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Z,at),Vt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Vt&&Ct.addToRenderList(m,b),this.info.render.frame++,et===!0&&nt.beginShadows();const V=d.state.shadowsArray;gt.render(V,b,U),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){const it=U.cameras;if(N.length>0)for(let ft=0,Mt=it.length;ft<Mt;ft++){const yt=it[ft];Aa(G,N,b,yt)}Vt&&Ct.render(b);for(let ft=0,Mt=it.length;ft<Mt;ft++){const yt=it[ft];Ta(m,b,yt,yt.viewport)}}else N.length>0&&Aa(G,N,b,U),Vt&&Ct.render(b),Ta(m,b,U);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,U),he.resetDefaultState(),M=-1,x=null,w.pop(),w.length>0?(d=w[w.length-1],et===!0&&nt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Tr(b,U,V,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){G&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Tt);const ft=J.update(b),Mt=b.material;Mt.visible&&m.push(b,ft,Mt,V,Bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const ft=J.update(b),Mt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Bt.copy(ft.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(Tt)),Array.isArray(Mt)){const yt=ft.groups;for(let Dt=0,Nt=yt.length;Dt<Nt;Dt++){const St=yt[Dt],jt=Mt[St.materialIndex];jt&&jt.visible&&m.push(b,ft,jt,V,Bt.z,St)}}else Mt.visible&&m.push(b,ft,Mt,V,Bt.z,null)}}const it=b.children;for(let ft=0,Mt=it.length;ft<Mt;ft++)Tr(it[ft],U,V,G)}function Ta(b,U,V,G){const N=b.opaque,it=b.transmissive,ft=b.transparent;d.setupLightsView(V),et===!0&&nt.setGlobalState(v.clippingPlanes,V),G&&Rt.viewport(D.copy(G)),N.length>0&&Ss(N,U,V),it.length>0&&Ss(it,U,V),ft.length>0&&Ss(ft,U,V),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Aa(b,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new fn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Cn:In,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const it=d.state.transmissionRenderTarget[G.id],ft=G.viewport||D;it.setSize(ft.z,ft.w);const Mt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(O),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Ct.render(V);const yt=v.toneMapping;v.toneMapping=Yn;const Dt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),et===!0&&nt.setGlobalState(v.clippingPlanes,G),Ss(b,V,G),C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let St=0,jt=U.length;St<jt;St++){const ue=U[St],pe=ue.object,Ge=ue.geometry,te=ue.material,Et=ue.group;if(te.side===ln&&pe.layers.test(G.layers)){const xn=te.side;te.side=Ie,te.needsUpdate=!0,Ra(pe,V,G,Ge,te,Et),te.side=xn,te.needsUpdate=!0,Nt=!0}}Nt===!0&&(C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it))}v.setRenderTarget(Mt),v.setClearColor(O,W),Dt!==void 0&&(G.viewport=Dt),v.toneMapping=yt}function Ss(b,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=b.length;N<it;N++){const ft=b[N],Mt=ft.object,yt=ft.geometry,Dt=G===null?ft.material:G,Nt=ft.group;Mt.layers.test(V.layers)&&Ra(Mt,U,V,yt,Dt,Nt)}}function Ra(b,U,V,G,N,it){b.onBeforeRender(v,U,V,G,N,it),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,U,V,G,b,it),N.transparent===!0&&N.side===ln&&N.forceSinglePass===!1?(N.side=Ie,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,b,it),N.side=$n,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,b,it),N.side=ln):v.renderBufferDirect(V,U,G,N,b,it),b.onAfterRender(v,U,V,G,N,it)}function ws(b,U,V){U.isScene!==!0&&(U=ce);const G=At.get(b),N=d.state.lights,it=d.state.shadowsArray,ft=N.state.version,Mt=bt.getParameters(b,N.state,it,U,V),yt=bt.getProgramCacheKey(Mt);let Dt=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?k:S).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Ut),Dt=new Map,G.programs=Dt);let Nt=Dt.get(yt);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===ft)return Pa(b,Mt),Nt}else Mt.uniforms=bt.getUniforms(b),b.onBeforeCompile(Mt,v),Nt=bt.acquireProgram(Mt,yt),Dt.set(yt,Nt),G.uniforms=Mt.uniforms;const St=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=nt.uniform),Pa(b,Mt),G.needsLights=eh(b),G.lightsStateVersion=ft,G.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function Ca(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=lr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Pa(b,U){const V=At.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Qc(b,U,V,G,N){U.isScene!==!0&&(U=ce),C.resetTextureUnits();const it=U.fog,ft=G.isMeshStandardMaterial?U.environment:null,Mt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:$i,yt=(G.isMeshStandardMaterial?k:S).get(G.envMap||ft),Dt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,ue=!!V.morphAttributes.color;let pe=Yn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=v.toneMapping);const Ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Ge!==void 0?Ge.length:0,Et=At.get(G),xn=d.state.lights;if(et===!0&&(xt===!0||b!==x)){const Qe=b===x&&G.id===M;nt.setState(G,b,Qe)}let ee=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==xn.state.version||Et.outputColorSpace!==Mt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==yt||G.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==Dt||Et.vertexTangents!==Nt||Et.morphTargets!==St||Et.morphNormals!==jt||Et.morphColors!==ue||Et.toneMapping!==pe||Et.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Et.__version=G.version);let sn=Et.currentProgram;ee===!0&&(sn=ws(G,U,N));let mi=!1,qe=!1,ji=!1;const me=sn.getUniforms(),pn=Et.uniforms;if(Rt.useProgram(sn.program)&&(mi=!0,qe=!0,ji=!0),G.id!==M&&(M=G.id,qe=!0),mi||x!==b){Rt.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),zh(rt),Hh(rt),me.setValue(F,"projectionMatrix",rt)):me.setValue(F,"projectionMatrix",b.projectionMatrix),me.setValue(F,"viewMatrix",b.matrixWorldInverse);const Fn=me.map.cameraPosition;Fn!==void 0&&Fn.setValue(F,Pt.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&me.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&me.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,qe=!0,ji=!0)}if(N.isSkinnedMesh){me.setOptional(F,N,"bindMatrix"),me.setOptional(F,N,"bindMatrixInverse");const Qe=N.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),me.setValue(F,"boneTexture",Qe.boneTexture,C))}N.isBatchedMesh&&(me.setOptional(F,N,"batchingTexture"),me.setValue(F,"batchingTexture",N._matricesTexture,C),me.setOptional(F,N,"batchingIdTexture"),me.setValue(F,"batchingIdTexture",N._indirectTexture,C),me.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(F,"batchingColorTexture",N._colorsTexture,C));const Qi=V.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Lt.update(N,V,sn),(qe||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,me.setValue(F,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pn.envMap.value=yt,pn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(pn.envMapIntensity.value=U.environmentIntensity),qe&&(me.setValue(F,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&th(pn,ji),it&&G.fog===!0&&ht.refreshFogUniforms(pn,it),ht.refreshMaterialUniforms(pn,G,H,$,d.state.transmissionRenderTarget[b.id]),lr.upload(F,Ca(Et),pn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(lr.upload(F,Ca(Et),pn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&me.setValue(F,"center",N.center),me.setValue(F,"modelViewMatrix",N.modelViewMatrix),me.setValue(F,"normalMatrix",N.normalMatrix),me.setValue(F,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qe=G.uniformsGroups;for(let Fn=0,On=Qe.length;Fn<On;Fn++){const La=Qe[Fn];I.update(La,sn),I.bind(La,sn)}}return sn}function th(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function eh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,V){At.get(b.texture).__webglTexture=U,At.get(b.depthTexture).__webglTexture=V;const G=At.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const V=At.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,V=0){A=b,T=U,y=V;let G=!0,N=null,it=!1,ft=!1;if(b){const yt=At.get(b);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(yt.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(yt.__hasExternalTextures)C.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&At.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ft=!0);const Nt=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?N=Nt[U][V]:N=Nt[U],it=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?N=At.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[V]:N=Nt,D.copy(b.viewport),z.copy(b.scissor),B=b.scissorTest}else D.copy(vt).multiplyScalar(H).floor(),z.copy(Ot).multiplyScalar(H).floor(),B=Jt;if(Rt.bindFramebuffer(F.FRAMEBUFFER,N)&&G&&Rt.drawBuffers(b,N),Rt.viewport(D),Rt.scissor(z),Rt.setScissorTest(B),it){const yt=At.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,V)}else if(ft){const yt=At.get(b.texture),Dt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,yt.__webglTexture,V||0,Dt)}M=-1},this.readRenderTargetPixels=function(b,U,V,G,N,it,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Rt.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const yt=b.texture,Dt=yt.format,Nt=yt.type;if(!Wt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&V>=0&&V<=b.height-N&&F.readPixels(U,V,G,N,kt.convert(Dt),kt.convert(Nt),it)}finally{const yt=A!==null?At.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,G,N,it,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const yt=b.texture,Dt=yt.format,Nt=yt.type;if(!Wt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&V>=0&&V<=b.height-N){Rt.bindFramebuffer(F.FRAMEBUFFER,Mt);const St=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.bufferData(F.PIXEL_PACK_BUFFER,it.byteLength,F.STREAM_READ),F.readPixels(U,V,G,N,kt.convert(Dt),kt.convert(Nt),0);const jt=A!==null?At.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,jt);const ue=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await kh(F,ue,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,it),F.deleteBuffer(St),F.deleteSync(ue),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,V=0){b.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(b.image.width*G),it=Math.floor(b.image.height*G),ft=U!==null?U.x:0,Mt=U!==null?U.y:0;C.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,ft,Mt,N,it),Rt.unbindTexture()},this.copyTextureToTexture=function(b,U,V=null,G=null,N=0){b.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let it,ft,Mt,yt,Dt,Nt,St,jt,ue;const pe=b.isCompressedTexture?b.mipmaps[N]:b.image;V!==null?(it=V.max.x-V.min.x,ft=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,Dt=V.min.y,Nt=V.isBox3?V.min.z:0):(it=pe.width,ft=pe.height,Mt=pe.depth||1,yt=0,Dt=0,Nt=0),G!==null?(St=G.x,jt=G.y,ue=G.z):(St=0,jt=0,ue=0);const Ge=kt.convert(U.format),te=kt.convert(U.type);let Et;U.isData3DTexture?(C.setTexture3D(U,0),Et=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Et=F.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const xn=F.getParameter(F.UNPACK_ROW_LENGTH),ee=F.getParameter(F.UNPACK_IMAGE_HEIGHT),sn=F.getParameter(F.UNPACK_SKIP_PIXELS),mi=F.getParameter(F.UNPACK_SKIP_ROWS),qe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nt);const ji=b.isDataArrayTexture||b.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const pn=At.get(b),Qi=At.get(U),Qe=At.get(pn.__renderTarget),Fn=At.get(Qi.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<Mt;On++)ji&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(b).__webglTexture,N,Nt+On),b.isDepthTexture?(me&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(U).__webglTexture,N,ue+On),F.blitFramebuffer(yt,Dt,it,ft,St,jt,it,ft,F.DEPTH_BUFFER_BIT,F.NEAREST)):me?F.copyTexSubImage3D(Et,N,St,jt,ue+On,yt,Dt,it,ft):F.copyTexSubImage2D(Et,N,St,jt,ue+On,yt,Dt,it,ft);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else me?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Et,N,St,jt,ue,it,ft,Mt,Ge,te,pe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,N,St,jt,ue,it,ft,Mt,Ge,pe.data):F.texSubImage3D(Et,N,St,jt,ue,it,ft,Mt,Ge,te,pe):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,St,jt,it,ft,Ge,te,pe.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,St,jt,pe.width,pe.height,Ge,pe.data):F.texSubImage2D(F.TEXTURE_2D,N,St,jt,it,ft,Ge,te,pe);F.pixelStorei(F.UNPACK_ROW_LENGTH,xn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee),F.pixelStorei(F.UNPACK_SKIP_PIXELS,sn),F.pixelStorei(F.UNPACK_SKIP_ROWS,mi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qe),N===0&&U.generateMipmaps&&F.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,V=null,G=null,N=0){return b.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,V,G,N)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){T=0,y=0,A=null,Rt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class ga{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Y(t),this.near=e,this.far=n}clone(){return new ga(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _a extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lc extends pi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mr=new L,gr=new L,Rl=new fe,rs=new fa,Xs=new _s,no=new L,Cl=new L;class Dc extends Ae{constructor(t=new Ce,e=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)mr.fromBufferAttribute(e,i-1),gr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=mr.distanceTo(gr);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;Rl.copy(i).invert(),rs.copy(t.ray).applyMatrix4(Rl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),E=h.getX(_+1),w=qs(this,t,rs,l,d,E);w&&e.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=qs(this,t,rs,l,_,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=qs(this,t,rs,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=qs(this,t,rs,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qs(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(mr.fromBufferAttribute(o,i),gr.fromBufferAttribute(o,r),e.distanceSqToSegment(mr,gr,no,Cl)>n)return;no.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(no);if(!(l<t.near||l>t.far))return{distance:l,point:Cl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Pl=new L,Ll=new L;class Jm extends Dc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Pl.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pl.distanceTo(Ll);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jm extends pi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dl=new fe,ea=new fa,Ys=new _s,$s=new L;class Il extends Ae{constructor(t=new Ce,e=new jm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=r,t.ray.intersectsSphere(Ys)===!1)return;Dl.copy(i).invert(),ea.copy(t.ray).applyMatrix4(Dl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);$s.fromBufferAttribute(u,m),Ul($s,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)$s.fromBufferAttribute(u,g),Ul($s,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ul(s,t,e,n,i,r,o){const a=ea.distanceSqToPoint(s);if(a<e){const l=new L;ea.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new lt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],o=[],a=new L,l=new fe;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ke(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(ke(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ic extends Un{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qm extends Ic{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function va(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ks=new L,io=new va,so=new va,ro=new va;class _r extends Un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ks.subVectors(i[0],i[1]).add(i[0]),c=Ks);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ks.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),io.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),so.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),ro.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(io.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),so.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ro.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(io.calc(l),so.calc(l),ro.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nl(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function t0(s,t){const e=1-s;return e*e*t}function e0(s,t){return 2*(1-s)*s*t}function n0(s,t){return s*s*t}function us(s,t,e,n){return t0(s,t)+e0(s,e)+n0(s,n)}function i0(s,t){const e=1-s;return e*e*e*t}function s0(s,t){const e=1-s;return 3*e*e*s*t}function r0(s,t){return 3*(1-s)*s*s*t}function o0(s,t){return s*s*s*t}function fs(s,t,e,n,i){return i0(s,t)+s0(s,e)+r0(s,n)+o0(s,i)}class a0 extends Un{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,i.x,r.x,o.x,a.x),fs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class l0 extends Un{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fs(t,i.x,r.x,o.x,a.x),fs(t,i.y,r.y,o.y,a.y),fs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class c0 extends Un{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h0 extends Un{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class u0 extends Un{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(us(t,i.x,r.x,o.x),us(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uc extends Un{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(us(t,i.x,r.x,o.x),us(t,i.y,r.y,o.y),us(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f0 extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Nl(a,l.x,c.x,h.x,u.x),Nl(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var d0=Object.freeze({__proto__:null,ArcCurve:Qm,CatmullRomCurve3:_r,CubicBezierCurve:a0,CubicBezierCurve3:l0,EllipseCurve:Ic,LineCurve:c0,LineCurve3:h0,QuadraticBezierCurve:u0,QuadraticBezierCurve3:Uc,SplineCurve:f0});class xs extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ht extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;E(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function E(){const v=new L,R=new L;let T=0;const y=(e-t)/n;for(let A=0;A<=r;A++){const M=[],x=A/r,D=x*(e-t)+t;for(let z=0;z<=i;z++){const B=z/i,O=B*l+a,W=Math.sin(O),X=Math.cos(O);R.x=D*W,R.y=-x*n+m,R.z=D*X,u.push(R.x,R.y,R.z),v.set(W,y,X).normalize(),f.push(v.x,v.y,v.z),p.push(B,1-x),M.push(g++)}_.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){const x=_[M][A],D=_[M+1][A],z=_[M+1][A+1],B=_[M][A+1];(t>0||M!==0)&&(h.push(x,D,B),T+=3),(e>0||M!==r-1)&&(h.push(D,z,B),T+=3)}c.addGroup(d,T,0),d+=T}function w(v){const R=g,T=new lt,y=new L;let A=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const D=g;for(let z=0;z<=i;z++){const O=z/i*l+a,W=Math.cos(O),X=Math.sin(O);y.x=M*X,y.y=m*x,y.z=M*W,u.push(y.x,y.y,y.z),f.push(0,x,0),T.x=W*.5+.5,T.y=X*.5*x+.5,p.push(T.x,T.y),g++}for(let z=0;z<i;z++){const B=R+z,O=D+z;v===!0?h.push(O,O+1,B):h.push(O+1,O,B),A+=3}c.addGroup(d,A,v===!0?1:2),d+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends Ht{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Re(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ms extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const w=new L,v=new L,R=new L;for(let T=0;T<e.length;T+=3)p(e[T+0],w),p(e[T+1],v),p(e[T+2],R),l(w,v,R,E)}function l(E,w,v,R){const T=R+1,y=[];for(let A=0;A<=T;A++){y[A]=[];const M=E.clone().lerp(v,A/T),x=w.clone().lerp(v,A/T),D=T-A;for(let z=0;z<=D;z++)z===0&&A===T?y[A][z]=M:y[A][z]=M.clone().lerp(x,z/D)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){const x=Math.floor(M/2);M%2===0?(f(y[A][x+1]),f(y[A+1][x]),f(y[A][x])):(f(y[A][x+1]),f(y[A+1][x+1]),f(y[A+1][x]))}}function c(E){const w=new L;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(E),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){const E=new L;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];const v=m(E)/2/Math.PI+.5,R=d(E)/Math.PI+.5;o.push(v,1-R)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const w=o[E+0],v=o[E+2],R=o[E+4],T=Math.max(w,v,R),y=Math.min(w,v,R);T>.9&&y<.1&&(w<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,w){const v=E*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){const E=new L,w=new L,v=new L,R=new L,T=new lt,y=new lt,A=new lt;for(let M=0,x=0;M<r.length;M+=9,x+=6){E.set(r[M+0],r[M+1],r[M+2]),w.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),T.set(o[x+0],o[x+1]),y.set(o[x+2],o[x+3]),A.set(o[x+4],o[x+5]),R.copy(E).add(w).add(v).divideScalar(3);const D=m(R);_(T,x+0,E,D),_(y,x+2,w,D),_(A,x+4,v,D)}}function _(E,w,v,R){R<0&&E.x===1&&(o[w]=E.x-1),v.x===0&&v.z===0&&(o[w]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.vertices,t.indices,t.radius,t.details)}}const Zs=new L,Js=new L,oo=new L,js=new en;class p0 extends Ce{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(ar*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=js;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),js.getNormal(oo),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const w=(E+1)%3,v=u[E],R=u[w],T=js[h[E]],y=js[h[w]],A=`${v}_${R}`,M=`${R}_${v}`;M in f&&f[M]?(oo.dot(f[M].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(y.x,y.y,y.z)),f[M]=null):A in f||(f[A]={index0:c[E],index1:c[w],normal:oo.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Zs.fromBufferAttribute(a,_),Js.fromBufferAttribute(a,m),p.push(Zs.x,Zs.y,Zs.z),p.push(Js.x,Js.y,Js.z)}this.setAttribute("position",new ne(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class hn extends Ms{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hn(t.radius,t.detail)}}class Ne extends Ms{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ne(t.radius,t.detail)}}class mt extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const E=[],w=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-w),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const w=h[d][E+1],v=h[d][E],R=h[d+1][E],T=h[d+1][E+1];(d!==0||o>0)&&p.push(w,v,T),(d!==n-1||l<Math.PI)&&p.push(v,R,T)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oi extends Ms{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oi(t.radius,t.detail)}}class ie extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,E=(i+1)*p+g;o.push(_,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wr extends Ce{constructor(t=new Uc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new lt;let h=new L;const u=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function _(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),E(),d()}function m(w){h=t.getPointAt(w/e,h);const v=o.normals[w],R=o.binormals[w];for(let T=0;T<=i;T++){const y=T/i*Math.PI*2,A=Math.sin(y),M=-Math.cos(y);l.x=M*v.x+A*R.x,l.y=M*v.y+A*R.y,l.z=M*v.z+A*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){const R=(i+1)*(w-1)+(v-1),T=(i+1)*w+(v-1),y=(i+1)*w+v,A=(i+1)*(w-1)+v;g.push(R,T,A),g.push(T,y,A)}}function E(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wr(new d0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class m0 extends _e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Ln extends pi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class br extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Y(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ao=new fe,Fl=new L,Ol=new L;class xa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fl),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g0 extends xa{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=fr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class _0 extends br{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new g0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Bl=new fe,os=new L,lo=new L;class v0 extends xa{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),n.position.copy(os),lo.copy(n.position),lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lo),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),Bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl)}}class Bi extends br{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new v0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class x0 extends xa{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nc extends br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new x0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Fc extends br{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Oc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=kl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function kl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);const Bc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const M0=new pa(-1,1,1,-1,0,1);class y0 extends Ce{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const S0=new y0;class Ma{constructor(t){this._mesh=new P(S0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,M0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class kc extends Ji{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xi.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ma(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zl extends Ji{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class w0 extends Ji{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class zc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kc(Bc),this.copyPass.material.blending=Rn,this.clock=new Oc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zl!==void 0&&(o instanceof zl?n=!0:o instanceof w0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hc extends Ji{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Y}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const b0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Y(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class fi extends Ji{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Y(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(r,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new fn(r,o,{type:Cn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new fn(r,o,{type:Cn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=b0;this.highPassUniforms=Xi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new lt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Bc;this.copyUniforms=Xi.clone(h.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Me,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Y,this.oldClearAlpha=1,this.basic=new qt,this.fsQuad=new Ma(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=fi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=fi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}fi.BlurDirectionX=new lt(1,0);fi.BlurDirectionY=new lt(0,1);const E0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Vc extends Ji{constructor(){super();const t=E0;this.uniforms=Xi.clone(t.uniforms),this.material=new m0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ma(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ec&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gc extends _a{constructor(){super();const t=new st;t.deleteAttribute("uv");const e=new Ln({side:Ie}),n=new Ln,i=new Bi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new P(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new P(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new P(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new P(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new P(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new P(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new P(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new P(t,Pi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new P(t,Pi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new P(t,Pi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new P(t,Pi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new P(t,Pi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new P(t,Pi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Pi(s){const t=new qt;return t.color.setScalar(s),t}const Er=`
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
`,T0=`
varying vec3 vWorldPos;
varying vec3 vDir;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,A0=`
uniform float uTime;
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uC;
varying vec3 vWorldPos;
varying vec3 vDir;

${Er}

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
`,R0=`
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
`,C0=`
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

${Er}

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
`,P0=`
varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  vUv = uv;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,L0=`
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec2 vUv;
varying vec3 vWorldPos;

${Er}

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
`,D0=`
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
`,I0=`
uniform float uTime;
uniform vec3 uLightDir;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vObj;

${Er}

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
`,U0=`
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,N0=`
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
`,F0=`
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
`,O0=`
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
`,B0=`
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
`,k0=`
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
`,z0=`
attribute vec3 aColor;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;

void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,H0=`
varying vec3 vColor;
varying float vAlpha;

void main() {
  gl_FragColor = vec4(vColor, vAlpha);
}
`,V0=`
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,G0=`
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
`,W0={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBoost:{value:0},uHurt:{value:0},uSunPos:{value:new lt(.72,.68)},uResolution:{value:new lt(1,1)},uFlare:{value:1},uCockpit:{value:0},uGate:{value:0},uKick:{value:0}},vertexShader:`
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
  `};function cr(s){let t=s>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Dn(s,t=new L(0,1,0)){const e=s.clone().normalize(),n=t.clone();Math.abs(e.dot(n))>.92&&n.set(1,0,0),n.addScaledVector(e,-n.dot(e)),n.lengthSq()<1e-8&&n.set(1,0,0),n.normalize();const i=new L().crossVectors(e,n).normalize(),r=new L().crossVectors(i,e).normalize();return{tangent:e,normal:r,binormal:i}}function hs(s,t,e=0,n=0){const i=s.sample(Math.max(8,t)),r=Dn(i.tangent),o=i.pos.clone().addScaledVector(r.binormal,e).addScaledVector(r.normal,n);return{sample:i,frame:r,pos:o}}function Wn(s,t,e){return s+(t-s)*e}function Ke(s,t,e){return Math.max(t,Math.min(e,s))}class X0{constructor(){this.points=[],this.rng=cr(41854),this.cursor=0;for(let t=0;t<64;t++)this._append();this.curve=new _r(this.points,!1,"catmullrom",.45),this._length=this.curve.getLength()}_append(){const t=this.cursor++,e=Math.sin(t*.09)*16+Math.sin(t*.031)*8,n=Math.cos(t*.055)*7+Math.sin(t*.13)*3.5,i=-t*42;this.points.push(new L(e,n,i))}ensure(t){for(;this._length-t<900;)this._append(),this.curve=new _r(this.points,!1,"catmullrom",.45),this._length=this.curve.getLength()}sample(t){this.ensure(t);const e=this._length,n=Ke(t/e,0,.995),i=this.curve.getPointAt(n),r=this.curve.getTangentAt(n).normalize(),o=this.curve.getPointAt(Ke(n+.01,0,1));return{pos:i,tangent:r,ahead:o,u:n}}rebuildRibbon(){return new wr(this.curve,360,1.35,12,!1)}}const q0=90,as=1800,Li=700;class Y0{constructor(t){this.scene=t,this.time=0,this.crystals=[],this.crystalData=[],this.lightPos=Array.from({length:6},()=>new L),this.lightColor=Array.from({length:6},()=>new L(1,1,1)),this.lightInt=new Float32Array(6),this.crystalMat=this._crystalMaterial(),this._chapterId="default",this._chapterT=1,this._chapterFrom=this._palette("default"),this._chapterTo=this._chapterFrom,this._addSky(),this._addPlanet(),this._addSun(),this._addDust(),this._addSpores(),this._buildCrystals()}_palette(t){const e={default:{skyA:new Y("#3a0a58"),skyB:new Y("#0b3d6a"),skyC:new Y("#ff3bd4"),ribbonA:new Y("#5ce1ff"),ribbonB:new Y("#ff3bd4"),fog:new Y("#12051f"),crystal:new Y("#6a3cff"),glow:new Y("#7cf0ff"),sun:new Y("#ffe6c4"),ambient:new Y("#3a1a58")},queen:{skyA:new Y("#4a0528"),skyB:new Y("#1a0840"),skyC:new Y("#ff3bd4"),ribbonA:new Y("#ff64e8"),ribbonB:new Y("#5ce1ff"),fog:new Y("#220818"),crystal:new Y("#9b2bff"),glow:new Y("#ff64e8"),sun:new Y("#ffb0d8"),ambient:new Y("#4a1238")},warden:{skyA:new Y("#3a1808"),skyB:new Y("#1a0a28"),skyC:new Y("#ffd166"),ribbonA:new Y("#ffd166"),ribbonB:new Y("#ff8a1a"),fog:new Y("#1a0c08"),crystal:new Y("#5a1a8a"),glow:new Y("#ffd166"),sun:new Y("#ffd9a0"),ambient:new Y("#3a2210")},coil:{skyA:new Y("#4a0a10"),skyB:new Y("#2a0818"),skyC:new Y("#ff6a3a"),ribbonA:new Y("#ff8a3a"),ribbonB:new Y("#ff3bd4"),fog:new Y("#180608"),crystal:new Y("#ff5a2a"),glow:new Y("#ffb07a"),sun:new Y("#ffc8a0"),ambient:new Y("#3a1210")},empress:{skyA:new Y("#2a0428"),skyB:new Y("#120830"),skyC:new Y("#ffd166"),ribbonA:new Y("#ff3bd4"),ribbonB:new Y("#ffd166"),fog:new Y("#140414"),crystal:new Y("#ff64e8"),glow:new Y("#ffe29a"),sun:new Y("#ffd0ea"),ambient:new Y("#3a0a30")},finale:{skyA:new Y("#081828"),skyB:new Y("#2a0548"),skyC:new Y("#5ce1ff"),ribbonA:new Y("#5ce1ff"),ribbonB:new Y("#ffd166"),fog:new Y("#081018"),crystal:new Y("#1f6dff"),glow:new Y("#9be7ff"),sun:new Y("#c8e8ff"),ambient:new Y("#1a2858")}};return e[t]||e.default}setChapter(t){const e=t||"default";this._chapterId===e&&this._chapterT>=1||this._chapterId!==e&&(this._chapterFrom=this._sampleChapter(),this._chapterTo=this._palette(e),this._chapterId=e,this._chapterT=0)}_sampleChapter(){const t=this._chapterT??1,e=this._chapterFrom||this._palette("default"),n=this._chapterTo||e,i=(r,o)=>new Y().lerpColors(r,o,t);return{skyA:i(e.skyA,n.skyA),skyB:i(e.skyB,n.skyB),skyC:i(e.skyC,n.skyC),ribbonA:i(e.ribbonA,n.ribbonA),ribbonB:i(e.ribbonB,n.ribbonB),fog:i(e.fog,n.fog),crystal:i(e.crystal,n.crystal),glow:i(e.glow,n.glow),sun:i(e.sun,n.sun),ambient:i(e.ambient,n.ambient)}}_applyChapter(t){const e=this._chapterFrom,n=this._chapterTo;if(!e||!n)return;this.skyMat.uniforms.uA.value.lerpColors(e.skyA,n.skyA,t),this.skyMat.uniforms.uB.value.lerpColors(e.skyB,n.skyB,t),this.skyMat.uniforms.uC.value.lerpColors(e.skyC,n.skyC,t),this.ribbonMat&&(this.ribbonMat.uniforms.uColorA.value.lerpColors(e.ribbonA,n.ribbonA,t),this.ribbonMat.uniforms.uColorB.value.lerpColors(e.ribbonB,n.ribbonB,t)),this.sunLight&&this.sunLight.color.lerpColors(e.sun,n.sun,t),this._ambient&&this._ambient.color.lerpColors(e.ambient,n.ambient,t);const i=new Y().lerpColors(e.fog,n.fog,t),r=new Y().lerpColors(e.glow,n.glow,t);for(const o of this.crystals)o.material.uniforms.uFogColor.value.copy(i),o.material.uniforms.uGlow.value.copy(r)}_crystalMaterial(){return new _e({uniforms:{uTime:{value:0},uColor:{value:new Y("#6a3cff")},uGlow:{value:new Y("#7cf0ff")},uLightPos:{value:this.lightPos},uLightColor:{value:this.lightColor},uLightInt:{value:this.lightInt},uFogColor:{value:new Y("#12051f")},uFogDensity:{value:.0048}},vertexShader:R0,fragmentShader:C0,transparent:!0,depthWrite:!0})}_addSky(){const t=new mt(900,48,32);this.skyMat=new _e({uniforms:{uTime:{value:0},uA:{value:new Y("#3a0a58")},uB:{value:new Y("#0b3d6a")},uC:{value:new Y("#ff3bd4")}},vertexShader:T0,fragmentShader:A0,side:Ie,depthWrite:!1,fog:!1}),this.sky=new P(t,this.skyMat),this.scene.add(this.sky)}_addPlanet(){this.planetGroup=new ae;const t=new _e({uniforms:{uTime:{value:0},uLightDir:{value:new L(.45,.35,.82).normalize()}},vertexShader:D0,fragmentShader:I0});this.planet=new P(new mt(70,64,48),t);const e=new _e({uniforms:{uColor:{value:new Y("#66a0ff")}},vertexShader:U0,fragmentShader:N0,transparent:!0,blending:Me,depthWrite:!1,side:Ie});this.atmo=new P(new mt(82,48,32),e),this.planetGroup.add(this.planet,this.atmo),this.scene.add(this.planetGroup),this.planetMat=t}_addSun(){this.sun=new P(new mt(10,24,16),new qt({color:16773570}));const t=new P(new mt(18,24,16),new qt({color:16761162,transparent:!0,opacity:.28,blending:Me,depthWrite:!1}));this.sun.add(t),this.scene.add(this.sun),this.sunLight=new Nc(16770756,1.4),this.scene.add(this.sunLight),this._ambient=new Fc(3807832,.35),this.scene.add(this._ambient)}_addDust(){const t=new Float32Array(as*3),e=new Float32Array(as*3),n=new Float32Array(as),i=new Float32Array(as),r=cr(20942);for(let a=0;a<as;a++){t[a*3]=(r()-.5)*520,t[a*3+1]=(r()-.5)*280,t[a*3+2]=-r()*1600;const l=r();e[a*3]=l>.7?1:.45,e[a*3+1]=l>.7?.55:.85,e[a*3+2]=l>.7?.95:1,n[a]=.6+r()*2.4,i[a]=r()*100}const o=new Ce;o.setAttribute("position",new Ee(t,3)),o.setAttribute("aColor",new Ee(e,3)),o.setAttribute("aSize",new Ee(n,1)),o.setAttribute("aSeed",new Ee(i,1)),this.dustMat=new _e({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:B0,fragmentShader:k0,transparent:!0,depthWrite:!1,blending:Me}),this.dust=new Il(o,this.dustMat),this.scene.add(this.dust)}_addSpores(){const t=new Float32Array(Li*3),e=new Float32Array(Li*3),n=new Float32Array(Li),i=new Float32Array(Li),r=cr(30625);for(let a=0;a<Li;a++)t[a*3]=(r()-.5)*80,t[a*3+1]=(r()-.5)*50,t[a*3+2]=-r()*400,e[a*3]=.3+r()*.4,e[a*3+1]=.8+r()*.2,e[a*3+2]=1,n[a]=1.5+r()*3.5,i[a]=r()*80;const o=new Ce;o.setAttribute("position",new Ee(t,3)),o.setAttribute("aColor",new Ee(e,3)),o.setAttribute("aSize",new Ee(n,1)),o.setAttribute("aSeed",new Ee(i,1)),this.sporeMat=this.dustMat.clone(),this.spores=new Il(o,this.sporeMat),this.scene.add(this.spores),this.sporeOrigins=t}_buildCrystals(){const t=[new Ne(1,0),new Oi(1,0),new hn(1,0),new Re(.7,2.4,5)],e=[{color:"#4b2dff",glow:"#66f0ff"},{color:"#9b2bff",glow:"#ff64e8"},{color:"#1f6dff",glow:"#9be7ff"},{color:"#5a1a8a",glow:"#ffd166"}];for(let n=0;n<q0;n++){const i=this.crystalMat.clone();i.uniforms=Xi.clone(this.crystalMat.uniforms);const r=e[n%e.length];i.uniforms.uColor.value=new Y(r.color),i.uniforms.uGlow.value=new Y(r.glow),i.uniforms.uLightPos.value=this.lightPos,i.uniforms.uLightColor.value=this.lightColor,i.uniforms.uLightInt.value=this.lightInt;const o=new P(t[n%t.length],i);o.scale.setScalar(1.4+n%7*.55),this.scene.add(o),this.crystals.push(o),this.crystalData.push({radius:1.6*o.scale.x,spin:.15+n%5*.08,placed:!1,pathDist:0})}}attachRibbon(t){if(this.ribbon){this.ribbon.geometry.dispose(),this.ribbon.geometry=t;return}this.ribbonMat=new _e({uniforms:{uTime:{value:0},uColorA:{value:new Y("#5ce1ff")},uColorB:{value:new Y("#ff3bd4")}},vertexShader:P0,fragmentShader:L0,transparent:!0,blending:Me,depthWrite:!1,side:ln}),this.ribbon=new P(t,this.ribbonMat),this.scene.add(this.ribbon)}layoutFromPath(t,e,n=24){const i=cr(2333+Math.floor(e/80)),r=n+16;for(let o=0;o<this.crystals.length;o++){const a=e+40+o*22+i()*10,l=t.sample(a),c=Dn(l.tangent),h=i()*Math.PI*2,u=r+i()*18,f=this.crystals[o];f.position.copy(l.pos).addScaledVector(c.normal,Math.cos(h)*u).addScaledVector(c.binormal,Math.sin(h)*u),f.lookAt(l.pos),this.crystalData[o].pathDist=a,this.crystalData[o].placed=!0,this.crystalData[o].radius=1.35*Math.max(f.scale.x,f.scale.y)}}recycleCrystals(t,e,n=24){const i=n+16;for(let r=0;r<this.crystals.length;r++){const o=this.crystalData[r];if(o.pathDist<e-30){const a=e+380+Math.random()*220,l=t.sample(a),c=Dn(l.tangent),h=Math.random()*Math.PI*2,u=i+Math.random()*18;this.crystals[r].position.copy(l.pos).addScaledVector(c.normal,Math.cos(h)*u).addScaledVector(c.binormal,Math.sin(h)*u),this.crystals[r].lookAt(l.pos),o.pathDist=a}}}setLights(t){for(let e=0;e<6;e++){const n=t[e];if(!n){this.lightInt[e]=0;continue}this.lightPos[e].copy(n.pos),this.lightColor[e].set(n.color.r,n.color.g,n.color.b),this.lightInt[e]=n.intensity}}update(t,e,n){this.time+=t,this._chapterT<1&&(this._chapterT=Math.min(1,this._chapterT+t*.42),this._applyChapter(this._chapterT)),this.skyMat.uniforms.uTime.value=this.time,this.planetMat.uniforms.uTime.value=this.time,this.ribbonMat&&(this.ribbonMat.uniforms.uTime.value=this.time),this.dustMat.uniforms.uTime.value=this.time,this.sporeMat.uniforms.uTime.value=this.time;for(const r of this.crystals)r.material.uniforms.uTime.value=this.time,r.rotation.y+=t*.25,r.rotation.x+=t*.08;this.sky.position.copy(e.position),this.planetGroup.position.copy(e.position).add(new L(-180,40,-260)),this.planet.rotation.y+=t*.03,this.sun.position.copy(e.position).add(new L(220,90,-180)),this.sunLight.position.copy(this.sun.position),this.dust.position.copy(e.position);const i=this.spores.geometry.attributes.position;for(let r=0;r<Li;r++){let o=i.getZ(r)+t*(18+r%5*4);o>20&&(o-=420),i.setZ(r,o),i.setY(r,i.getY(r)+Math.sin(this.time+r)*t*.6)}i.needsUpdate=!0,this.spores.position.copy(e.position),this.spores.position.z=e.position.z}hitTest(t,e){for(let n=0;n<this.crystals.length;n++)if(this.crystals[n].position.distanceTo(t)<e+this.crystalData[n].radius)return this.crystals[n];return null}}const ye={spark:{max:8,tag:"SPARK",unlock:"SPARK ARRAY"},needle:{max:8,tag:"NEEDLE",unlock:"LASERS ONLINE"},seeker:{max:8,tag:"SEEKER",unlock:"SEEKERS LOCKED"},shard:{max:7,tag:"SHARD",unlock:"CRYSTAL SHARDS"},titan:{max:6,tag:"TITAN",unlock:"TITAN BLASTER"},wing:{max:6,tag:"WING",unlock:"WING FILAMENTS"},helix:{max:6,tag:"HELIX",unlock:"HELIX RIBBON"},drone:{max:6,tag:"DRONE",unlock:"RIFT DRONES"},mine:{max:6,tag:"MINE",unlock:"AETHER MINES"},shear:{max:6,tag:"SHEAR",unlock:"RIFT SHEAR"},spire:{max:5,tag:"SPIRE",unlock:"PIERCE SPIRE"},nova:{max:5,tag:"NOVA",unlock:"NOVA BURST"},prism:{max:5,tag:"PRISM",unlock:"PRISM SPLIT"}},Ue=Object.keys(ye),$0=["needle","seeker","shard","titan","wing","helix","drone","mine","shear","spire","nova","prism"];function ya(){const s={};for(const t of Ue)s[t]=0;return s}function ys(){const s=ya();return s.spark=1,s}function K0(){const s=ys(),t=["spark"],e=$0.slice(),n=[],i=new Set([3,8,14,20,26,32,38,44,50,56,62,68]);let r=0;const o=Ue.reduce((a,l)=>a+ye[l].max,0)-1;for(;n.length<o;){if(e.length&&i.has(n.length)){const l=e.shift();s[l]=1,t.push(l),n.push({module:l,toast:ye[l].unlock});continue}let a=!1;for(let l=0;l<t.length;l++){const c=t[(r+l)%t.length];if(s[c]<ye[c].max){s[c]+=1,n.push({module:c,toast:s[c]===ye[c].max?`${ye[c].tag} MAX`:null}),r=(r+l+1)%t.length,a=!0;break}}if(!a){if(!e.length)break;const l=e.shift();s[l]=1,t.push(l),n.push({module:l,toast:ye[l].unlock})}}return n}const Sa=K0(),Z0=Sa.length;function J0(s){const t=ys(),e=Math.max(0,Math.min(Z0,s|0));for(let n=0;n<e;n++)t[Sa[n].module]+=1;return t}function j0(s){const t=Ue.filter(e=>s[e]>0).map(e=>ye[e].tag);return t.length?t.slice(-3).join(" · "):"SPARK"}function ge(s,t,e={}){return{x:s,drift:t,home:0,pierce:0,wobble:0,phase:0,hitR:1.35,damage:1,...e}}function Wc(s,t=0){const e=[],n=[],i=[],r=[],o=[],a=s.spark|0;if(a>0){const R=1+Math.min(a,7);for(let T=0;T<R;T++){const y=R===1?0:T/(R-1)-.5;e.push(ge(y*(.16+a*.04),y*(1.4+a*.28),{kind:"spark",scale:.82+a*.04,speed:84+a*4,life:.32+a*.018,color:13172726,hitR:1.25}))}}const l=s.needle|0;if(l>0){const R=l<=2?[-1.9,1.9]:l<=4?[-2.5,0,2.5]:[-3.3,-1.15,0,1.15,3.3];for(const T of R)e.push(ge(T,0,{kind:"needle",scale:1.05+l*.04,speed:128+l*3,life:.78,color:10217471,hitR:1.55}))}const c=s.wing|0;if(c>0){const R=5.1+c*.45,T=10+c*2.2;e.push(ge(-R,-T,{kind:"wing",scale:1.08,speed:122,life:.72,color:16737512,hitR:1.45})),e.push(ge(R,T,{kind:"wing",scale:1.08,speed:122,life:.72,color:16737512,hitR:1.45})),c>=4&&(e.push(ge(-R-1.8,-T-7,{kind:"wing",scale:.95,speed:118,life:.68,color:16751584,hitR:1.35})),e.push(ge(R+1.8,T+7,{kind:"wing",scale:.95,speed:118,life:.68,color:16751584,hitR:1.35})))}const h=s.helix|0;if(h>0){const R=14+h*4;e.push(ge(-2.2,0,{kind:"helix",scale:1.05,speed:118,life:.8,color:8057087,wobble:R,phase:0})),e.push(ge(2.2,0,{kind:"helix",scale:1.05,speed:118,life:.8,color:8057087,wobble:R,phase:Math.PI})),h>=4&&e.push(ge(0,0,{kind:"helix",scale:1,speed:120,life:.76,color:14483455,wobble:R*.7,phase:1.2}))}const u=s.shear|0;if(u>0){const R=22+u*4;e.push(ge(-3.8,-R,{kind:"shear",scale:1.15,speed:110,life:.7,color:16765286,hitR:1.7})),e.push(ge(3.8,R,{kind:"shear",scale:1.15,speed:110,life:.7,color:16765286,hitR:1.7})),u>=4&&(e.push(ge(-6.2,-R-10,{kind:"shear",scale:1.05,speed:104,life:.64,color:16769690})),e.push(ge(6.2,R+10,{kind:"shear",scale:1.05,speed:104,life:.64,color:16769690})))}const f=s.spire|0;f>0&&(e.push(ge(-.9,0,{kind:"spire",scale:.72,speed:156,life:.9,color:16777215,pierce:f,damage:2,hitR:1.4})),e.push(ge(.9,0,{kind:"spire",scale:.72,speed:156,life:.9,color:16777215,pierce:f,damage:2,hitR:1.4})));const p=s.drone|0;if(p>0){const R=Math.min(4,2+Math.floor((p-1)/2));for(let T=0;T<R;T++){const y=T%2===0?-1:1,A=Math.floor(T/2);e.push(ge(y*(4.8+A*1.4),y*(4+A*3),{kind:"drone",scale:.9,speed:124,life:.7,color:16743144,hitR:1.3}))}}const g=s.prism|0;if(g>0){const R=2+Math.min(g,4);for(let T=0;T<R;T++){const y=T/(R-1)-.5;e.push(ge(y*2.4,y*(18+g*5),{kind:"prism",scale:.78,speed:100,life:.48,color:13940991,hitR:1.2}))}}const _=s.seeker|0;if(_>0){const R=Math.min(6,1+Math.ceil(_/2));for(let T=0;T<R;T++){const y=R===1?0:T/(R-1)-.5;n.push(ge(y*(2.2+_*.5),y*4,{kind:"seeker",scale:1.25+_*.06,speed:52+_*3,life:1.35,color:16747082,damage:2,home:1,homeSteer:58+_*6,hitR:1.8}))}}const m=s.shard|0;if(m>0){const R=2+Math.min(m,6);for(let T=0;T<R;T++){const y=R===1?0:T/(R-1)-.5;e.push(ge(y*1.2,y*(16+m*3),{kind:"shard",scale:.7,speed:96+m*2,life:.42,color:16751570,hitR:1.2}))}}const d=s.titan|0;d>0&&(i.push(ge(0,0,{kind:"titan",scale:2.4+d*.28,speed:64+d*3,life:1.05,color:16765286,damage:5+d,hitR:3.2+d*.35})),d>=4&&(i.push(ge(-2.6,-6,{kind:"titan",scale:1.6,speed:70,life:.9,color:16769690,damage:3,hitR:2.4})),i.push(ge(2.6,6,{kind:"titan",scale:1.6,speed:70,life:.9,color:16769690,damage:3,hitR:2.4}))));const E=s.mine|0;if(E>0){const R=Math.min(4,1+Math.floor(E/2));for(let T=0;T<R;T++){const y=R===1?0:T/(R-1)-.5;r.push(ge(y*(3+E*.8),y*5,{kind:"mine",scale:1.35,speed:16+E,life:1.7,color:6087167,damage:3,hitR:2.1}))}}const w=s.nova|0;if(w>0){const R=6+w;for(let T=0;T<R;T++){const y=T/(R-1)-.5;o.push(ge(y*2,y*(36+w*6),{kind:"nova",scale:.95,speed:88,life:.62,color:16737512,damage:1,hitR:1.5}))}}return{primary:{cd:a>0&&l===0?.094:.078,shots:e},missile:{cd:Math.max(.28,.42-_*.018),shots:n},titan:{cd:Math.max(.55,.92-d*.05),shots:i},mine:{cd:.52,shots:r},nova:{cd:Math.max(.72,1.18-w*.08),shots:o}}}function Di(s,t,e){const n=Q0(t,e);return Math.round(s==="queen"?90+n*6.2:s==="coil"?110+n*6.8:s==="warden"?140+n*7.5:s==="empress"?180+n*8.2:220+n*9.5)}function Q0(s,t){const e=Wc(t||J0(s),0),n=(i,r)=>i.shots.length?i.shots.reduce((a,l)=>a+(l.damage||1),0)/Math.max(.04,i.cd)*r:0;return n(e.primary,.36)+n(e.missile,.82)+n(e.titan,.78)+n(e.mine,.18)+n(e.nova,.14)}Sa.map((s,t)=>({name:ye[s.module].tag,toast:s.toast||ye[s.module].tag,step:t+1}));function co(s,t){return new _e({uniforms:{uColor:{value:new Y(s)},uRim:{value:new Y(t)},uLightDir:{value:new L(.35,.8,.4).normalize()}},vertexShader:V0,fragmentShader:G0})}function si(s,t=10217471){const e=new Jm(new p0(s.geometry,18),new Lc({color:t}));s.add(e)}function ve(s,t,e=1.6){return new Ln({color:s,metalness:.72,roughness:.28,emissive:t,emissiveIntensity:e})}function Ve(s,t=.7){return new qt({color:s,transparent:!0,opacity:t,blending:Me,depthWrite:!1})}function Qt(s,t,e,n,i=0){return s.add(t),t.material?.emissive&&e.push(t),i>0&&(t.visible=!1,n.push({mesh:t,at:i})),t}function Je(){return{group:new ae,glows:[],extras:[],auras:[]}}function tg(){const s=Je();for(const t of[-1,1]){const e=new P(new Ht(.035,.05,1.55,6),ve(1384496,10217471,1.4));e.rotation.x=Math.PI/2,e.position.set(t*1.05,-.1,-.35),Qt(s.group,e,s.glows,s.extras);const n=new P(new Ht(.02,.02,.7,6),Ve(10217471,.55));n.rotation.x=Math.PI/2,n.position.set(t*1.05,-.1,-1.15),s.group.add(n),s.auras.push(n);const i=new P(new Ht(.028,.04,1.2,6),ve(1384496,6087167,1.2));i.rotation.x=Math.PI/2,i.position.set(t*1.45,-.08,-.15),Qt(s.group,i,s.glows,s.extras,5)}return s}function eg(){const s=Je();for(const t of[-1,1]){const e=new P(new st(.42,.16,.7),ve(2757640,16747082,1.3));e.position.set(t*.95,-.22,.35),Qt(s.group,e,s.glows,s.extras);for(let n=0;n<3;n++){const i=new P(new Ht(.05,.055,.55,6),ve(1707016,16747082,1.1));i.rotation.x=Math.PI/2,i.position.set(t*(.82+n*.12),-.28,.22),Qt(s.group,i,s.glows,s.extras,n===2?4:0);const r=new P(new mt(.045,6,6),Ve(16747082,.7));r.position.set(t*(.82+n*.12),-.28,-.08),s.group.add(r),s.auras.push(r)}}return s}function ng(){const s=Je();for(const[n,i,r]of[[-.22,.12,-1.15],[.22,.12,-1.15],[0,.22,-1.05]]){const o=new P(new Ne(.12,0),ve(2756672,16751570,1.7));o.position.set(n,i,r),Qt(s.group,o,s.glows,s.extras)}const t=new P(new Ne(.16,0),ve(1706024,16737512,2));t.position.set(0,.28,-1.25),Qt(s.group,t,s.glows,s.extras,5);const e=new P(new mt(.22,8,6),Ve(16751570,.4));return e.position.set(0,.16,-1.12),s.group.add(e),s.auras.push(e),s}function ig(){const s=Je(),t=new P(new Ht(.16,.22,1.35,8),ve(2761224,16765286,1.8));t.rotation.x=Math.PI/2,t.position.set(0,-.38,-.55),Qt(s.group,t,s.glows,s.extras);const e=new P(new ie(.18,.04,6,12),Ve(16765286,.8));e.position.set(0,-.38,-1.22),s.group.add(e),s.auras.push(e);const n=new P(new st(.55,.12,.7),ve(1709576,16751162,1.2));n.position.set(0,-.32,-.15),Qt(s.group,n,s.glows,s.extras);const i=new P(new Ht(.08,.1,.9,6),ve(2761224,16769690,1.5));i.rotation.x=Math.PI/2,i.position.set(-.28,-.36,-.4);const r=i.clone();return r.position.x=.28,Qt(s.group,i,s.glows,s.extras,4),Qt(s.group,r,s.glows,s.extras,4),s}function sg(){const s=Je();for(const t of[-1,1]){const e=new P(new st(.55,.12,.38),ve(1712696,16737512,1.5));e.position.set(t*1.62,-.04,.28),e.rotation.y=t*-.35,Qt(s.group,e,s.glows,s.extras);const n=new P(new Ht(.04,.055,.7,6),ve(1312792,16737512,1.6));n.rotation.x=Math.PI/2,n.rotation.y=t*-.4,n.position.set(t*1.72,-.04,.02),Qt(s.group,n,s.glows,s.extras);const i=new P(new mt(.07,8,6),Ve(16737512,.75));i.position.set(t*1.82,-.04,-.28),s.group.add(i),s.auras.push(i);const r=new P(new Ht(.03,.04,.55,6),ve(1312792,16751584,1.4));r.rotation.x=Math.PI/2,r.rotation.y=t*-.55,r.position.set(t*1.95,.02,.12),Qt(s.group,r,s.glows,s.extras,4)}return s}function rg(){const s=Je(),t=new P(new ie(.42,.045,6,18),ve(528408,8057087,1.8));t.rotation.x=Math.PI/2,t.position.set(0,.02,.15),Qt(s.group,t,s.glows,s.extras);const e=t.clone();e.position.z=.55,e.scale.setScalar(.82),Qt(s.group,e,s.glows,s.extras);const n=new P(new ie(.5,.03,6,18),Ve(8057087,.55));n.rotation.x=Math.PI/2,n.position.set(0,.02,.35),s.group.add(n),s.auras.push(n);const i=t.clone();return i.position.z=-.2,i.scale.setScalar(.7),Qt(s.group,i,s.glows,s.extras,4),s}function og(){const s=Je();return[[-1,0],[1,0],[-1,1],[1,1]].forEach(([e,n],i)=>{const r=new P(new st(.08,.08,.45),ve(1706004,16743144,1.2));r.position.set(e*(1.15+n*.25),.18+n*.12,.55),Qt(s.group,r,s.glows,s.extras,i>=2?3:0);const o=new P(new Ne(.14,0),ve(1312784,16743144,1.8));o.position.set(e*(1.45+n*.35),.22+n*.18,.7),Qt(s.group,o,s.glows,s.extras,i>=2?3:0);const a=new P(new mt(.18,8,6),Ve(16743144,.45));a.position.copy(o.position),s.group.add(a),s.auras.push(a),i>=2&&s.extras.push({mesh:a,at:3})}),s}function ag(){const s=Je(),t=new P(new st(.55,.18,.7),ve(528408,6087167,1.3));t.position.set(0,-.42,.55),Qt(s.group,t,s.glows,s.extras);for(const n of[-.16,.16]){const i=new P(new mt(.1,8,6),ve(661544,6087167,1.7));i.position.set(n,-.52,.55),Qt(s.group,i,s.glows,s.extras);const r=new P(new mt(.14,8,6),Ve(6087167,.5));r.position.copy(i.position),s.group.add(r),s.auras.push(r)}const e=new P(new mt(.1,8,6),ve(661544,6087167,1.7));return e.position.set(0,-.54,.78),Qt(s.group,e,s.glows,s.extras,4),s}function lg(){const s=Je();for(const t of[-1,1]){const e=new P(new st(1.15,.06,.22),ve(2761224,16765286,1.7));e.position.set(t*1.35,.08,-.15),e.rotation.y=t*.45,e.rotation.z=t*-.18,Qt(s.group,e,s.glows,s.extras);const n=new P(new st(.9,.03,.06),Ve(16765286,.8));n.position.set(t*1.55,.1,-.28),n.rotation.y=t*.45,s.group.add(n),s.auras.push(n);const i=e.clone();i.position.set(t*1.15,-.12,.05),i.rotation.z=t*.22,Qt(s.group,i,s.glows,s.extras,4)}return s}function cg(){const s=Je(),t=new P(new Re(.08,1.65,6),ve(2238512,16777215,1.6));t.rotation.x=-Math.PI/2,t.position.set(0,-.02,-1.85),Qt(s.group,t,s.glows,s.extras);const e=new P(new Ht(.03,.03,1.2,6),Ve(16777215,.65));e.rotation.x=Math.PI/2,e.position.set(0,-.02,-1.7),s.group.add(e),s.auras.push(e);const n=new P(new ie(.12,.02,6,12),Ve(10217471,.7));n.position.set(0,-.02,-1.15),s.group.add(n),s.auras.push(n);const i=t.clone();return i.scale.setScalar(.55),i.position.set(0,.12,-1.55),Qt(s.group,i,s.glows,s.extras,4),s}function hg(){const s=Je(),t=new P(new ie(.38,.045,6,16),ve(1706004,16737512,1.8));t.position.set(0,.42,-.15),t.rotation.x=.4,Qt(s.group,t,s.glows,s.extras);const e=new P(new ie(.46,.03,6,16),Ve(16737512,.55));e.position.copy(t.position),e.rotation.copy(t.rotation),s.group.add(e),s.auras.push(e);for(let i=0;i<6;i++){const r=i/6*Math.PI*2,o=new P(new mt(.05,6,6),Ve(16751584,.8));o.position.set(Math.cos(r)*.38,.42+Math.sin(r)*.12,-.15),s.group.add(o),s.auras.push(o)}const n=t.clone();return n.scale.setScalar(.62),n.position.y=.52,Qt(s.group,n,s.glows,s.extras,4),s}function ug(){const s=Je();for(const i of[-1,1]){const r=new P(new Re(.12,.7,5),ve(1708072,13940991,1.8));r.rotation.x=-Math.PI/2,r.rotation.y=i*.35,r.position.set(i*.28,.08,-1.35),Qt(s.group,r,s.glows,s.extras)}const t=new P(new Ne(.14,0),Ve(13940991,.7));t.position.set(0,.1,-1.2),s.group.add(t),s.auras.push(t);const e=new P(new Re(.1,.55,5),ve(1708072,16737512,1.5));e.rotation.x=-Math.PI/2,e.rotation.y=.7,e.position.set(-.48,.02,-1.15);const n=e.clone();return n.rotation.y=-.7,n.position.x=.48,Qt(s.group,e,s.glows,s.extras,4),Qt(s.group,n,s.glows,s.extras,4),s}function wa(s,t={},e=null){const n=s?.kits;if(n)for(const i of Ue){const r=n[i];if(!r)continue;const o=t[i]|0,a=e===i&&o<=0,l=o>0||a;r.group.visible=l;const c=ye[i]?.max||8,h=a?.18:Math.max(0,Math.min(1,o/c));for(const u of r.glows)u.material?.emissive&&(u.material.emissiveIntensity=a?.45:.7+h*2.6,u.material.transparent=a,u.material.opacity=a?.42:1);for(const u of r.auras)u.material&&(u.visible=l,u.material.opacity=a?.18:.28+h*.62,u.scale.setScalar(a?.92:.9+h*.45));for(const u of r.extras)u.mesh.visible=l&&(a?u.at<=3:o>=u.at),u.mesh.material?.emissive&&(u.mesh.material.emissiveIntensity=a?.4:1.2+h*2,u.mesh.material.transparent=a,u.mesh.material.opacity=a?.38:1)}}function Xc(){const s=new ae;s.scale.setScalar(3.1);const t=new ae;s.add(t);const e=co("#647a9a","#7ad8ff"),n=co("#2a3348","#ff7ae0"),i=co("#1a2238","#5ce1ff"),r=new qt({color:10217471}),o=new qt({color:9234431}),a=new qt({color:16765286}),l=new qt({color:16737512}),c=new P(new Re(.42,2.9,6),e);c.rotation.x=-Math.PI/2,si(c),t.add(c);const h=new P(new st(.55,.28,1.9),n);h.position.z=.1,si(h,16751584),t.add(h);const u=new P(new st(.18,.16,2.35),i);u.position.set(0,.18,.05),t.add(u);const f=new P(new st(.42,.12,1.55),n);f.position.set(0,-.22,.2),si(f,6087167),t.add(f);const p=new P(new mt(.24,12,10),o);p.scale.set(1,.62,1.35),p.position.set(0,.2,-.35),t.add(p);const g=new P(new st(.38,.05,.85),a);g.position.set(0,.32,-.28),t.add(g);const _=new P(new st(3.1,.07,.95),e);_.position.set(0,-.08,.55),si(_),t.add(_);const m=new P(new st(2.2,.05,.18),r);m.position.set(0,-.05,.18),t.add(m);const d=new P(new st(.95,.05,.42),i);d.position.set(-.85,-.02,-.35),d.rotation.y=.35;const E=d.clone();E.position.x=.85,E.rotation.y=-.35,t.add(d,E);const w=new P(new st(.72,.045,.28),e);w.position.set(-.55,.02,-.95),w.rotation.z=.18;const v=w.clone();v.position.x=.55,v.rotation.z=-.18,si(w),si(v),t.add(w,v);const R=new P(new Ht(.07,.09,.7,8),n);R.rotation.x=Math.PI/2,R.position.set(-.38,-.12,-.85);const T=R.clone();T.position.x=.38;const y={},A=Je();A.group.add(R,T);const M=new P(new mt(.08,8,6),Ve(13172726,.35));M.position.set(-.38,-.12,-1.18);const x=M.clone();x.position.x=.38,A.group.add(M,x),A.auras.push(M,x);const D=new P(new Ht(.045,.055,.85,6),ve(1712696,6087167,.8));D.rotation.x=Math.PI/2,D.position.set(-.22,-.16,-.95);const z=D.clone();z.position.x=.22,Qt(A.group,D,A.glows,A.extras,5),Qt(A.group,z,A.glows,A.extras,5),y.spark=A,y.needle=tg(),y.seeker=eg(),y.shard=ng(),y.titan=ig(),y.wing=sg(),y.helix=rg(),y.drone=og(),y.mine=ag(),y.shear=lg(),y.spire=cg(),y.nova=hg(),y.prism=ug();for(const Vt of Ue)y[Vt]&&t.add(y[Vt].group);const B=new P(new st(.22,.08,.45),i);B.position.set(-1.55,-.06,.42);const O=B.clone();O.position.x=1.55,t.add(B,O);const W=new P(new mt(.07,8,6),l);W.position.set(-1.62,-.04,.18);const X=W.clone();X.position.x=1.62,X.material=a,t.add(W,X);const $=new P(new st(.07,.78,.7),e);$.position.set(0,.42,.7),si($),t.add($);const H=new P(new st(.05,.12,.55),r);H.position.set(0,.82,.62),t.add(H);const Z=new P(new Ht(.14,.2,.55,10),n);Z.rotation.x=Math.PI/2,Z.position.set(-.55,-.1,1.15);const at=Z.clone();at.position.x=.55,t.add(Z,at);const vt=new P(new Ht(.11,.16,.22,8),i);vt.rotation.x=Math.PI/2,vt.position.set(-.55,-.1,1.38);const Ot=vt.clone();Ot.position.x=.55,t.add(vt,Ot);const Jt=new P(new mt(.16,12,10),r);Jt.position.set(-.55,-.1,1.42);const K=Jt.clone();K.position.x=.55,t.add(Jt,K);const et=new P(new mt(.12,10,8),new qt({color:16734932}));et.position.set(0,.05,.85),t.add(et);const xt=new P(new mt(.2,10,8),new qt({color:13172726,transparent:!0,opacity:0,blending:Me,depthWrite:!1}));xt.position.set(0,-.02,-1.52);const rt=new P(new st(.08,.08,.85),new qt({color:10217471,transparent:!0,opacity:0,blending:Me,depthWrite:!1}));rt.position.set(0,-.02,-1.85),t.add(xt,rt);const Tt=new Bi(6087167,3.5,18,2);Tt.position.set(-.55,-.1,1.35);const Pt=new Bi(6087167,3.5,18,2);Pt.position.set(.55,-.1,1.35);const Bt=new Bi(16737512,2.2,14,2);Bt.position.set(0,.15,-1.3),s.add(Tt,Pt,Bt);const ce={group:s,rig:t,exhausts:[Jt,K],lights:[Tt,Pt],core:et,muzzle:xt,muzzleSpike:rt,kits:y};return wa(ce,{spark:1}),ce}class fg{constructor(t,e=40){this.max=e,this.history=[];const n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e);this.geo=new Ce,this.geo.setAttribute("position",new Ee(n,3)),this.geo.setAttribute("aColor",new Ee(i,3)),this.geo.setAttribute("aAlpha",new Ee(r,1)),this.mat=new _e({vertexShader:z0,fragmentShader:H0,transparent:!0,depthWrite:!1,blending:Me}),this.line=new Dc(this.geo,this.mat),t.add(this.line),this.positions=n,this.colors=i,this.alphas=r}push(t,e){this.history.unshift(t.clone()),this.history.length>this.max&&this.history.pop();const n=this.history.length;for(let i=0;i<n;i++){const r=this.history[i];this.positions[i*3]=r.x,this.positions[i*3+1]=r.y,this.positions[i*3+2]=r.z;const o=1-i/this.max;this.colors[i*3]=(e>.4?.7:.2)*o,this.colors[i*3+1]=.45*o,this.colors[i*3+2]=.7*o,this.alphas[i]=.28*o}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this.geo.setDrawRange(0,n)}}const dg=[{at:70,toast:"WAVE 01 — STINGER FAN",world:"default",sting:"chapter"},{at:380,toast:"MID-BOSS — WEAVER QUEEN",world:"queen",sting:"boss"},{at:820,toast:"MID-BOSS — WARDEN",world:"warden",sting:"boss"},{at:1320,toast:"FINALE — SENTINEL",world:"finale",sting:"boss"}],qc=[{at:70,kind:"squad",form:"v",role:"dive",n:5,ahead:88},{at:118,kind:"squad",form:"line",role:"sine",n:4,ahead:92},{at:160,kind:"breath"},{at:188,kind:"squad",form:"flank",role:"heavy",n:2,ahead:96},{at:210,kind:"squad",form:"pair",role:"dive",n:2,ahead:84},{at:248,kind:"gate"},{at:268,kind:"orbs"},{at:292,kind:"squad",form:"cross",role:"sine",n:6,ahead:100},{at:330,kind:"blockers",n:2},{at:348,kind:"squad",form:"v",role:"dive",n:7,ahead:90},{at:380,kind:"midboss",id:"queen"},{at:470,kind:"breath"},{at:490,kind:"orbs"},{at:512,kind:"squad",form:"escort",role:"dive",n:5,ahead:94},{at:548,kind:"gate"},{at:572,kind:"squad",form:"line",role:"heavy",n:3,ahead:100},{at:610,kind:"squad",form:"cross",role:"sine",n:6,ahead:88},{at:648,kind:"blockers",n:3},{at:670,kind:"squad",form:"v",role:"dive",n:5,ahead:86},{at:710,kind:"squad",form:"pair",role:"sine",n:4,ahead:92},{at:748,kind:"gate"},{at:780,kind:"squad",form:"flank",role:"heavy",n:2,ahead:98},{at:820,kind:"midboss",id:"warden"},{at:920,kind:"breath"},{at:944,kind:"orbs"},{at:968,kind:"squad",form:"cross",role:"dive",n:8,ahead:90},{at:1010,kind:"squad",form:"line",role:"sine",n:5,ahead:94},{at:1048,kind:"gate"},{at:1072,kind:"blockers",n:3},{at:1100,kind:"squad",form:"escort",role:"heavy",n:5,ahead:100},{at:1148,kind:"squad",form:"v",role:"dive",n:7,ahead:88},{at:1190,kind:"squad",form:"cross",role:"sine",n:6,ahead:96},{at:1240,kind:"gate"},{at:1270,kind:"squad",form:"line",role:"dive",n:6,ahead:90},{at:1320,kind:"finale"}],ho={queen:"WEAVER QUEEN",warden:"WARDEN",coil:"TITAN COIL",empress:"WEAVER EMPRESS",finale:"SENTINEL"},hr={queen:"queen",warden:"warden",coil:"coil",empress:"empress",finale:"finale"},Hl={A:{},B:{v:"line",line:"v",cross:"escort",escort:"cross"},C:{v:"cross",cross:"v",pair:"flank",flank:"pair",line:"escort",escort:"line"},D:{v:"escort",escort:"v",cross:"line",line:"cross",pair:"v",flank:"pair"}},Vl={stinger:{},crimson:{sine:"cinder",heavy:"slag"},cathedral:{sine:"acolyte",heavy:"chime"},iris:{sine:"bloom",heavy:"prism"},heart:{sine:"ion",heavy:"wisp"}};function pg({mid:s=["queen","warden"],boss:t="finale",formOf:e={},roleOf:n={}}){let i=0;return qc.map(r=>{const o={...r};if(o.kind==="squad")o.role=n[o.role]||o.role,o.form=e[o.form]||o.form;else if(o.kind==="midboss")o.id=s[i++]||o.id;else if(o.kind==="finale")return t==="finale"?o:{at:o.at,kind:"boss",id:t};return o})}function mg(s,t,e,n,i,r){const l=r==="finale"?"FINALE":r==="super"?"SUPER BOSS":"LEVEL BOSS";return[{at:70,toast:`${s} — ${t}`,world:e,sting:"chapter"},{at:380,toast:`MINI-BOSS — ${ho[n[0]]}`,world:hr[n[0]],sting:"boss"},{at:820,toast:`MINI-BOSS — ${ho[n[1]]}`,world:hr[n[1]],sting:"boss"},{at:1320,toast:`${l} — ${ho[i]}`,world:hr[i],sting:"boss"}]}function re(s,t,e,n){const i=n.mid,r=n.boss;return{id:s,name:t,world:e,boss:r,bossWorld:hr[r]||e,exitAt:1360,length:1400,chapters:mg(s,t,e,i,r,n.banner),script:pg({mid:i,boss:r,formOf:Hl[n.forms]||Hl.A,roleOf:Vl[n.roles]||Vl.stinger})}}function gg(){return{id:"1-1",name:"STINGER FAN",world:"default",boss:"finale",bossWorld:"finale",exitAt:1360,length:1400,chapters:dg.map(s=>({...s})),script:qc.map(s=>({...s}))}}const qi=[{id:"stinger",kicker:"CAMPAIGN 01",name:"STINGER FAN",blurb:"The original rift. Sine weavers and heavy bricks live here. Dive fodder still leaks through.",world:"default",levels:[gg(),re("1-2","SILK BREAK","default",{mid:["coil","empress"],boss:"queen",forms:"B",roles:"stinger"}),re("1-3","CROSS THREAD","default",{mid:["empress","coil"],boss:"warden",forms:"C",roles:"stinger"}),re("1-4","FAN STORM","default",{mid:["warden","queen"],boss:"coil",forms:"D",roles:"stinger"}),re("1-5","RIFT SPINE","default",{mid:["coil","warden"],boss:"empress",forms:"B",roles:"stinger"}),re("1-6","WEAVER CROWN","queen",{mid:["warden","coil"],boss:"queen",forms:"C",roles:"stinger",banner:"super"})]},{id:"crimson",kicker:"CAMPAIGN 02",name:"CRIMSON SHOALS",blurb:"Hot ribbon. Ember darts and slag hulls. The coil is the law here.",world:"coil",levels:[re("2-1","EMBER DRIFT","coil",{mid:["queen","empress"],boss:"coil",forms:"B",roles:"crimson"}),re("2-2","SLAG GATES","coil",{mid:["warden","queen"],boss:"empress",forms:"C",roles:"crimson"}),re("2-3","MAGMA FAN","coil",{mid:["empress","warden"],boss:"queen",forms:"D",roles:"crimson"}),re("2-4","ASH RIBBON","coil",{mid:["coil","queen"],boss:"warden",forms:"A",roles:"crimson"}),re("2-5","CINDER NAVE","coil",{mid:["empress","coil"],boss:"queen",forms:"B",roles:"crimson"}),re("2-6","TITAN COIL","coil",{mid:["warden","empress"],boss:"coil",forms:"C",roles:"crimson",banner:"super"})]},{id:"cathedral",kicker:"CAMPAIGN 03",name:"NULL CATHEDRAL",blurb:"Gold hush. Acolyte spires and chime discs fill the aisles. The Warden keeps every door.",world:"warden",levels:[re("3-1","AISLE FIRE","warden",{mid:["coil","queen"],boss:"empress",forms:"C",roles:"cathedral"}),re("3-2","NAVE LOCK","warden",{mid:["empress","coil"],boss:"queen",forms:"B",roles:"cathedral"}),re("3-3","CHOIR WALL","warden",{mid:["queen","coil"],boss:"empress",forms:"D",roles:"cathedral"}),re("3-4","GOLD HUSH","warden",{mid:["coil","empress"],boss:"queen",forms:"A",roles:"cathedral"}),re("3-5","WARDEN KEEP","warden",{mid:["queen","empress"],boss:"warden",forms:"C",roles:"cathedral",banner:"super"})]},{id:"iris",kicker:"CAMPAIGN 04",name:"IRIS FORGE",blurb:"Magenta heat. Bloom drones and prism shards. The silk learns your name.",world:"empress",levels:[re("4-1","BLOOM CUT","empress",{mid:["coil","warden"],boss:"queen",forms:"B",roles:"iris"}),re("4-2","PRISM GAUNTLET","empress",{mid:["warden","coil"],boss:"queen",forms:"C",roles:"iris"}),re("4-3","MAGENTA HEAT","empress",{mid:["queen","coil"],boss:"warden",forms:"D",roles:"iris"}),re("4-4","LOOM WAKE","empress",{mid:["coil","queen"],boss:"warden",forms:"A",roles:"iris"}),re("4-5","SHARD NAVE","empress",{mid:["warden","queen"],boss:"coil",forms:"B",roles:"iris"}),re("4-6","ROYAL SILK","empress",{mid:["coil","warden"],boss:"queen",forms:"C",roles:"iris"}),re("4-7","EMPRESS LOOM","empress",{mid:["warden","coil"],boss:"empress",forms:"D",roles:"iris",banner:"super"})]},{id:"heart",kicker:"CAMPAIGN 05",name:"HEART OF THE RIFT",blurb:"The ribbon ends here. Ion lances and void wisps. Everything you fought was a door.",world:"finale",levels:[re("5-1","LAST LIGHT","finale",{mid:["queen","coil"],boss:"warden",forms:"B",roles:"heart"}),re("5-2","CORE APPROACH","finale",{mid:["empress","warden"],boss:"coil",forms:"C",roles:"heart"}),re("5-3","VOID CHOIR","finale",{mid:["coil","empress"],boss:"queen",forms:"D",roles:"heart"}),re("5-4","ION WAKE","finale",{mid:["warden","queen"],boss:"empress",forms:"A",roles:"heart"}),re("5-5","CROWN GATE","finale",{mid:["empress","coil"],boss:"warden",forms:"B",roles:"heart"}),re("5-6","SENTINEL","finale",{mid:["queen","warden"],boss:"finale",forms:"C",roles:"heart",banner:"finale"})]}];function Qs(s,t){const e=qi[s];if(!e)return null;const n=e.levels[t];return n?{camp:e,ci:s,lv:n,li:t}:null}function Yc(s,t){const e=qi[s];return e?t+1<e.levels.length?{ci:s,li:t+1}:s+1<qi.length?{ci:s+1,li:0}:null:null}const $c="aether-campaign";function Gl(){return{nextC:0,nextL:0,cleared:[],best:0}}function uo(){try{const s=JSON.parse(localStorage.getItem($c)||"null");return!s||typeof s!="object"?Gl():{nextC:Number(s.nextC)||0,nextL:Number(s.nextL)||0,cleared:Array.isArray(s.cleared)?s.cleared:[],best:Number(s.best)||0}}catch{return Gl()}}function _g(s){return localStorage.setItem($c,JSON.stringify(s)),s}function vg(s,t,e){const n=`${t}-${e}`,i=s.cleared.includes(n)?s.cleared:s.cleared.concat(n),r=Yc(t,e);return{...s,cleared:i,nextC:r?r.ci:0,nextL:r?r.li:0}}const xg=qi[0].levels[0].script;qi[0].levels[0].chapters;const Mg=[-.84,-.5,-.18,.18,.5,.84];function yg(s,t,e){const n=e;if(s==="v"){const i=[],r=(t-1)/2;for(let o=0;o<t;o++)i.push((o-r)/Math.max(1,r)*n*.72);return i}if(s==="line"){const i=[];for(let r=0;r<t;r++)i.push((r/Math.max(1,t-1)-.5)*n*1.5);return i}if(s==="flank")return[-n*.72,n*.72].slice(0,t);if(s==="pair"){const i=[];for(let r=0;r<t;r++)i.push((r%2===0?-1:1)*n*(.22+Math.floor(r/2)*.28));return i}if(s==="cross"){const i=[];for(let r=0;r<t;r++)i.push((r/Math.max(1,t-1)-.5)*n*1.55);return i}if(s==="escort"){const i=[0],r=[];for(let o=1;o<t;o++)r.push((o%2===0?-1:1)*n*(.35+Math.floor((o-1)/2)*.28));return i.concat(r).slice(0,t)}return Mg.slice(0,t).map(i=>i*n)}function Sg(s,t){return s==="v"?Math.abs(t-2)*9:s==="cross"?t%2*14:s==="escort"&&t===0?18:0}class Wl{constructor(t=xg,e=1400){this.script=t,this.length=e,this.index=0,this.cleared=!1,this.finaleAlive=!1,this.peakThreat=0}reset(){this.index=0,this.cleared=!1,this.finaleAlive=!1,this.peakThreat=0}peek(){return this.script[this.index]||null}consume(){const t=this.script[this.index];return this.index+=1,t}intensity(t,e,n,i){const r=Math.min(1,t/Math.max(240,this.length)),o=Math.min(1,e/10);let a=.18+r*.42+o*.28+(n?.08:0);return i&&(a=Math.max(a,.78)),this.cleared&&(a=.35),this.peakThreat=Math.max(this.peakThreat,a),wg(a)}}function wg(s){return Math.max(0,Math.min(1,s))}function bg(s){let t=0;return t+=Math.min(38,s.score/900),t+=Math.min(18,s.kills/5),t+=Math.min(16,(s.step||0)/5),t+=Math.min(10,(s.maxCombo||1)*1.1),t+=s.victory?14:0,t+=Math.min(8,(s.nearMisses||0)*.15),t-=Math.min(8,(s.bombsUsed||0)*1.2),t>=86?"S":t>=72?"A":t>=56?"B":t>=40?"C":"D"}const Kc="aether-scores";function na(){try{const s=JSON.parse(localStorage.getItem(Kc)||"[]");return Array.isArray(s)?s.slice(0,8):[]}catch{return[]}}function Eg(s){const t=na();t.push(s),t.sort((n,i)=>i.score-n.score);const e=t.slice(0,8);return localStorage.setItem(Kc,JSON.stringify(e)),e}function Tg(s,t,e,n,i){const r=s.offset?.x??0,o=s.pathDist-4,a=e??r;s.patternI=(s.patternI||0)%12;const l=s.patternI;if(s.patternI+=1,s.role==="queen")return Ag(l,o,r,a,t,i);if(s.role==="empress")return Rg(l,o,r,a,t,i);if(s.role==="warden")return Pg(l,o,r,a,t,i);if(s.role==="coil")return Cg(l,o,r,a,t,i);if(s.role==="finale")return Lg(s,o,t,a,n,i);if(s.role==="heavy"||s.role==="slag"||s.role==="chime"){const c=Math.min(8,t*.08);return l%3===0?(i(o,r-c,7,!1),i(o,r+c,7,!1)):l%3===1?(i(o,a,7.4,!0),i(o,r,7,!1)):(i(o,r-c*.5,6.8,!1),i(o,r+c*.5,6.8,!1),i(o-3,r,7.2,!0)),0}return s.role==="prism"?(i(o,r-t*.08,7.2,!1),i(o,r+t*.08,7.2,!1),i(o-2,r-t*.14,6.6,!1),i(o-2,r+t*.14,6.6,!1),0):s.role==="ion"?(i(o,r-t*.045,8.2,!1),i(o,r+t*.045,8.2,!1),0):s.role==="bloom"?(i(o,r-t*.06,7.6,!1),i(o,r+t*.06,7.6,!1),0):s.role==="wisp"?(i(o+1,r+Math.sin(n*3.2)*t*.1,7.4,!1),0):(i(o+1,r,8,!1),0)}function Ag(s,t,e,n,i,r){const o=s%6,a=i*.16,l=i*.12;if(o===0){for(let c=-2;c<=2;c++)r(t,e+c*a,7.2,c===0);return 0}if(o===1)return r(t,n,7.6,!0),r(t,n-i*.06,7.2,!1),r(t,n+i*.06,7.2,!1),0;if(o===2)return .55;if(o===3){for(let c=-3;c<=3;c++)r(t-Math.abs(c)*2,e+c*l,6.4,!1);return 0}return o===4?(r(t,e-a*1.4,6.8,!0),r(t,e+a*1.4,6.8,!0),r(t-5,n,7.4,!0),0):.4}function Rg(s,t,e,n,i,r){const o=s%6,a=i*.18,l=i*.13;if(o===0){for(let c=-3;c<=3;c++)r(t,e+c*a*.72,7.1,c===0);return 0}if(o===1)return r(t,n,7.6,!0),r(t,n-i*.07,7.2,!1),r(t,n+i*.07,7.2,!1),r(t-4,e,7,!0),0;if(o===2)return .5;if(o===3){for(let c=-3;c<=3;c++)r(t-Math.abs(c)*2,e+c*l,6.4,!1);return 0}return o===4?(r(t,e-a*1.5,6.8,!0),r(t,e+a*1.5,6.8,!0),r(t-5,n,7.4,!0),r(t-8,n-a,6.6,!1),r(t-8,n+a,6.6,!1),0):.38}function Cg(s,t,e,n,i,r){const o=s%6,a=i*.2;if(o===0)return r(t,e-a,6.6,!0),r(t,e+a,6.6,!0),r(t,e,7.4,!0),0;if(o===1)return r(t,n,7.3,!0),r(t,e-a*.5,6.8,!1),r(t,e+a*.5,6.8,!1),0;if(o===2)return .52;if(o===3){for(let l=-2;l<=2;l++)r(t,e+l*a*.55,6.4,l===0);return 0}return o===4?(r(t,e-a,6.5,!0),r(t,e+a,6.5,!0),r(t-6,n,7.1,!0),0):.42}function Pg(s,t,e,n,i,r){const o=s%6,a=i*.22;if(o===0)return r(t,e-a,6.4,!0),r(t,e+a,6.4,!0),r(t,e,7.5,!0),r(t-6,e-a*.5,6.8,!1),r(t-6,e+a*.5,6.8,!1),0;if(o===1)return r(t,n-4,6.8,!0),r(t,n+4,6.8,!0),r(t,n,7.2,!0),0;if(o===2)return .62;if(o===3){for(let l=-2;l<=2;l++)r(t,e+l*a*.55,6.2,l===0);return 0}return o===4?(r(t,e-a,6.2,!0),r(t,e+a,6.2,!0),r(t-8,n-6,6.6,!1),r(t-8,n+6,6.6,!1),r(t-4,n,7,!0),0):.48}function Lg(s,t,e,n,i,r){const o=s.phase||1,a=e*(o===3?.34:.26),l=(s.patternI||0)%4;if(o===1){if(l===2)return .42;const c=3;for(let h=0;h<c;h++){const u=h/(c-1)-.5;r(t,u*a*2,8,!0)}return r(t-3,n,7.4,!0),0}if(o===2){if(l%2===0){for(let c=0;c<5;c++){const h=c/4-.5;r(t,h*a*2,7.6,!0)}return 0}return l===1?(r(t,n-a*.35,7.2,!0),r(t,n+a*.35,7.2,!0),r(t-5,n,6.8,!0),0):.4}for(let c=0;c<5;c++){const h=c/4-.5;r(t,h*a*2,7.2,!0)}return r(t-8,Math.sin(i*2.4)*a,6.6,!0),r(t-4,n,6.8,!0),l===3&&(r(t-10,-a*.7,6.4,!0),r(t-10,a*.7,6.4,!0)),0}const $t=16726996,Se=6087167,Kt=16765286,Kn=656916,Yi=1705224,we=16747034,dn=16738842,Dg=16720984;function It(s,t,e=2.2){return new Ln({color:s,metalness:.72,roughness:.28,emissive:t,emissiveIntensity:e})}function wt(s,t=.85){return new qt({color:s,transparent:!0,opacity:t,blending:Me,depthWrite:!1})}function vr(s,t=.55){return new qt({color:s,wireframe:!0,transparent:!0,opacity:t})}function Nn(s,t,e,n,i,r,o,a=[]){return{mesh:s,body:t,wings:e,ring:n,core:i,engines:r,weak:o,parts:a,_baseEmissive:t.material.emissiveIntensity,_coreBaseScale:i.scale.x}}function Ig(){const s=new ae,t=It(Yi,Dg,2.2),e=It(2755090,$t,1.45),n=It(Kn,$t,1.2),i=It(1444626,dn,1.4),r=new P(new Ne(1.05,1),t);r.scale.set(.48,.43,2.15),r.position.z=.12;const o=new ae,a=[],l=new P(new st(.44,.32,2.75),n);l.position.set(0,.08,.22);const c=new P(new st(1.65,.12,.78),e);c.position.set(-.95,0,.22),c.rotation.z=.14;const h=c.clone();h.position.x=.95,h.rotation.z=-.14;const u=new P(new st(1.1,.1,.58),e);u.position.set(-1.92,-.02,.62),u.rotation.set(0,-.16,.28);const f=u.clone();f.position.x=1.92,f.rotation.y=.16,f.rotation.z=-.28;const p=new P(new st(.9,.09,.5),n);p.position.set(-.82,.02,-1.03),p.rotation.set(0,.14,.3);const g=p.clone();g.position.x=.82,g.rotation.y=-.14,g.rotation.z=-.3;const _=new P(new Re(.2,.82,4),n);_.position.set(-2.18,.22,.54);const m=_.clone();m.position.x=2.18;const d=new P(new st(.24,.52,1.28),n);d.position.set(0,-.34,.68);const E=new P(new st(.16,.3,.78),i);E.position.set(-.5,-.12,.78);const w=E.clone();w.position.x=.5;const v=new P(new st(.54,.28,.66),n);v.position.set(0,.01,-1.3),v.rotation.y=Math.PI/4;const R=new P(new Re(.3,.86,5),n);R.rotation.x=-Math.PI/2,R.position.z=-1.98;const T=new P(new Re(.15,.68,4),e);T.rotation.x=-Math.PI/2,T.position.z=-2.63;const y=new P(new st(.035,.018,1.42),wt($t,.75));y.position.set(-.26,.31,-.05),y.rotation.y=-.08;const A=y.clone();A.position.x=.26,A.rotation.y=.08;const M=new P(new st(.28,.025,.035),wt($t,.8));M.position.set(0,.25,-1.18);const x=new P(new st(.34,.025,.04),wt(Se,.7));x.position.set(0,.28,1.18);const D=new P(new mt(.13,8,6),wt(Se,.95));D.position.set(-2.42,.02,.72);const z=D.clone();z.position.x=2.42,o.add(c,h,u,f,p,g,_,m,D,z);const B=new P(new ie(.62,.07,8,24),wt($t,.8));B.rotation.x=Math.PI/2,B.position.set(0,.02,-1.15);const O=new P(new mt(.29,12,8),wt($t,.78));O.position.set(0,.04,-.48);const W=new P(new mt(.35,10,8),wt(16734932,.95));W.position.copy(O.position);const X=[],$=[];for(const H of[-.42,.42]){const Z=new P(new Ht(.24,.32,.36,8),i);Z.rotation.x=Math.PI/2,Z.position.set(H,-.1,1.75);const at=new P(new ie(.27,.045,6,12),wt(we,.75));at.rotation.x=Math.PI/2,at.position.set(H,-.1,1.96);const vt=new P(new mt(.27,10,6),wt(we,.92));vt.position.set(H,-.1,2.08),$.push(Z,at),X.push(vt)}return a.push(l,c,h,u,f,p,g,_,m,d,E,w,v,R,T,y,A,M,x,...$),s.add(r,l,o,d,E,w,v,R,T,y,A,M,x,B,O,W,...$,...X),Nn(s,r,o,B,O,X,W,a)}function Ug(){const s=new ae,t=It(Yi,$t,1.9),e=It(1641245,$t,1.35),n=It(2758408,Kt,1.65),i=It(Kn,dn,1.35),r=new P(new Ht(.98,1.12,.62,12),t);r.rotation.x=Math.PI/2,r.position.z=.12;const o=new P(new Ne(.82,1),e);o.scale.set(.85,.52,.95),o.position.set(0,.02,-.62);const a=new P(new st(.34,.28,1.8),n);a.position.set(0,-.03,1.12);const l=new ae,c=[o,a],h=[1,1.48,2.05,2.64,3.18,3.62],u=[.15,.28,.48,.74,1,.58],f=[1,1.08,1.12,1.06,.9,.68];for(const T of[-1,1])for(let y=0;y<h.length;y++){const A=new P(new st(f[y],.12,.58+y%2*.12),e);A.position.set(T*h[y],.02+Math.sin(y*.8)*.05,u[y]),A.rotation.y=T*(.12+y*.075),A.rotation.z=T*(.1-y*.035),l.add(A),y>=2&&c.push(A)}for(const T of[-1,1]){const y=new P(new st(.62,.1,1.15),n);y.position.set(T*2.1,-.18,1.72),y.rotation.y=T*.22;const A=new P(new st(.46,.08,1.28),e);A.position.set(T*3.18,-.1,1.88),A.rotation.y=T*.3,l.add(y,A),c.push(y,A)}const p=new P(new Ne(.35,0),e);p.scale.set(.7,.42,1.25),p.position.set(-3.9,0,.44);const g=p.clone();g.position.x=3.9,l.add(p,g),c.push(p,g);const _=new P(new ie(1.42,.11,8,28),wt(Kt,.86));_.rotation.x=Math.PI/2,_.position.set(0,.08,-.55);const m=new P(new mt(.44,12,8),wt(Se,.72));m.position.set(0,0,-.03);const d=new P(new mt(.5,10,8),wt($t,.92));d.position.copy(m.position);const E=[];for(const[T,y,A,M,x]of[[-.72,-.08,1.35,2.45,-.12],[.72,-.08,1.35,2.45,.12],[-.34,.18,1.72,1.7,-.22],[.34,.18,1.72,1.7,.22]]){const D=new P(new Ht(.045,.035,M,6),n);D.rotation.x=Math.PI/2,D.rotation.y=x,D.position.set(T,y,A),E.push(D)}const w=E.map(T=>{const y=new P(new Ht(.075,.06,T.geometry.parameters.height,5),wt(Kt,.48));return y.position.copy(T.position),y.rotation.copy(T.rotation),y}),v=[],R=[];for(const T of[-1.22,1.22]){const y=new P(new Ht(.4,.5,.72,8),i);y.rotation.x=Math.PI/2,y.position.set(T,-.16,2.08);const A=new P(new ie(.42,.06,6,14),wt(we,.72));A.rotation.x=Math.PI/2,A.position.set(T,-.16,2.45);const M=new P(new mt(.34,10,6),wt(we,.9));M.position.set(T,-.16,2.55),R.push(y,A),v.push(M)}return c.push(...E,...w,...R),s.add(r,o,a,l,_,m,d,...E,...w,...R,...v),Nn(s,r,l,_,m,v,d,c)}function Ng(){const s=new ae,t=It(2757120,dn,2.6),e=It(2758664,Kt,1.8),n=It(Kn,Kt,1.45),i=It(1706500,dn,2.4),r=new P(new st(2.7,1.45,3.1),t);r.position.set(0,.02,.15);const o=new P(new Ne(1.2,0),t);o.scale.set(.95,.62,1.15),o.position.set(0,.02,-1.02);const a=new P(new st(1.55,.4,2),n);a.position.set(0,-.72,.5);const l=new ae,c=[o,a],h=new P(new st(2.65,.42,1.72),e);h.position.set(-2,0,.52);const u=h.clone();u.position.x=2;const f=new P(new st(1.28,.68,1.32),n);f.position.set(-3.36,.02,.46),f.rotation.y=-.1;const p=f.clone();p.position.x=3.36,p.rotation.y=.1;const g=new P(new st(1,.28,1.52),e);g.position.set(-1.72,.48,1.34);const _=g.clone();_.position.x=1.72;const m=new P(new st(3.7,.3,.72),n);m.position.set(0,.63,-.68),m.rotation.x=-.08,l.add(h,u,f,p,g,_),c.push(h,u,f,p,g,_,m);const d=[],E=[];for(const B of[-1.02,1.02]){const O=new P(new Ht(.27,.38,1.55,8),i);O.rotation.x=Math.PI/2,O.position.set(B,.42,-1.78);const W=new P(new ie(.3,.065,6,12),wt(we,.8));W.rotation.x=Math.PI/2,W.position.set(B,.42,-2.56),d.push(O),E.push(W)}const w=new P(new Ht(.32,.42,.42,8),i);w.position.set(-1.22,.95,.18);const v=w.clone();v.position.x=1.22;const R=new P(new st(.18,.06,.8),wt(Se,.7));R.position.set(-.72,.75,.55);const T=R.clone();T.position.x=.72,c.push(...d,...E,w,v,R,T);const y=new P(new ie(2.48,.2,8,30),wt(Kt,.88));y.rotation.x=Math.PI/2,y.position.set(0,-.08,-.32);const A=new P(new mt(.57,12,8),wt(we,.82));A.position.set(0,-.02,-.05);const M=new P(new mt(.64,10,8),wt(Kt,.95));M.position.copy(A.position);const x=[],D=[];for(const[B,O,W,X]of[[-.94,-.43,2.1,1],[.94,-.43,2.1,1],[0,-.52,2.32,.88]]){const $=new P(new Ht(.36*X,.47*X,.5,8),i);$.rotation.x=Math.PI/2,$.position.set(B,O,W);const H=new P(new ie(.39*X,.065,6,14),wt(we,.72));H.rotation.x=Math.PI/2,H.position.set(B,O,W+.27);const Z=new P(new mt(.4*X,10,6),wt(we,.93));Z.position.set(B,O,W+.42),D.push($,H),x.push(Z)}const z=new P(new st(1.15,1.15,1),n);return z.position.set(0,.88,.22),c.push(z,...D),s.add(r,o,a,l,m,...d,...E,w,v,R,T,y,A,M,z,...D,...x),Nn(s,r,l,y,A,x,M,c)}function Fg(){const s=new ae,t=It(Yi,$t,2.4),e=It(1706008,$t,1.6),n=It(Kn,$t,2),i=It(2496263,Kt,1.6),r=new P(new hn(1.25,1),t);r.position.set(0,.12,.18);const o=new P(new hn(1.7,2),vr($t,.52));o.position.copy(r.position);const a=new P(new hn(1.42,1),vr(Se,.32));a.position.set(0,.12,.18);const l=new ae,c=[o,a],h=[1.15,1.82,2.62,3.5,4.38,5.22,6.03,6.65],u=[.12,.24,.43,.64,.82,.94,.76,.45],f=[1.15,1.3,1.42,1.45,1.32,1.14,.92,.58];for(const v of[-1,1])for(let R=0;R<h.length;R++){const T=new P(new st(f[R],.16,.78+R%3*.12),e);T.position.set(v*h[R],.03+Math.sin(R)*.08,u[R]),T.rotation.y=v*(.08+R*.065),T.rotation.z=v*(.08+R*.025),l.add(T),R>=3&&c.push(T)}const p=[];for(const[v,R,T,y,A,M,x]of[[-3.2,1.05,-.18,.34,.9,.5,-.4],[3.2,1.05,-.18,.34,.9,.5,.4],[-5.18,-.42,1.05,.26,.75,.42,-.55],[5.18,-.42,1.05,.26,.75,.42,.55],[-6.78,.36,.32,.2,.65,.34,-.72],[6.78,.36,.32,.2,.65,.34,.72]]){const D=new P(new Ne(.75,0),n);D.position.set(v,R,T),D.scale.set(y,A,M),D.rotation.z=x,p.push(D)}const g=[];for(const[v,R,T,y]of[[-1.55,1.22,-.18,-.45],[-.78,1.55,-.32,-.2],[0,1.75,-.4,0],[.78,1.55,-.32,.2],[1.55,1.22,-.18,.45],[-2.4,.88,-.08,-.65],[2.4,.88,-.08,.65]]){const A=new P(new Re(.26,1.08,5),n);A.position.set(v,R,T),A.rotation.z=y,g.push(A)}l.add(...p,...g),c.push(...p,...g);const _=new P(new ie(3.82,.13,10,42),wt($t,.88));_.rotation.x=Math.PI/2,_.position.set(0,.3,.1);const m=new P(new mt(.68,14,10),wt(Se,.68));m.position.set(0,.08,.1);const d=new P(new mt(.92,14,10),wt($t,1));d.position.set(0,-1.55,.28);const E=[],w=[];for(const v of[-1.82,0,1.82]){const R=new P(new Ht(.38,.5,.58,8),i);R.rotation.x=Math.PI/2,R.position.set(v,-.25,2.55);const T=new P(new mt(v===0?.42:.47,10,6),wt(we,.9));T.position.set(v,-.25,2.92),w.push(R),E.push(T)}return c.push(...w),s.add(r,o,a,l,_,m,d,...w,...E),Nn(s,r,l,_,m,E,d,c)}function Og(){const s=new ae,t=It(Kn,Kt,2),e=It(2757120,Kt,2.2),n=It(1706504,dn,2.3),i=It(1705988,dn,2.8),r=new P(new st(3.65,1.5,3.65),t);r.position.set(0,0,.12);const o=new P(new st(3.05,1,3.05),n);o.position.set(0,.48,.18);const a=new P(new st(1.65,2.25,1.65),t);a.position.set(0,1.18,.08);const l=new ae,c=[o,a],h=new P(new st(11,.58,1.38),e);h.position.set(0,-.02,.16);const u=new P(new st(1.38,.58,11),e);u.position.set(0,-.02,.16);const f=new P(new st(3.2,.42,1.05),t);f.position.set(-2.45,.35,-2.45),f.rotation.y=-Math.PI/4;const p=f.clone();p.position.x=2.45,p.rotation.y=Math.PI/4,l.add(h,u,f,p),c.push(h,u,f,p);const g=[];for(const[y,A,M]of[[-4.55,-4.32,-1],[4.55,-4.32,-1],[-4.55,4.62,1],[4.55,4.62,1]]){const x=new P(new Ht(.4,.54,1.6,8),i);x.rotation.x=Math.PI/2,x.position.set(y,.32,A),M>0&&(x.rotation.x=-Math.PI/2);const D=new P(new ie(.43,.07,6,14),wt(we,.82));D.rotation.x=Math.PI/2,D.position.set(y,.32,A+M*.8),g.push(x,D)}l.add(...g),c.push(...g);const _=[];for(const[y,A]of[[-2.15,-2.1],[2.15,-2.1],[-2.15,2.32],[2.15,2.32]]){const M=new P(new st(.9,.72,.92),t);M.position.set(y,.82,A),M.rotation.y=y*A<0?.16:-.16,_.push(M)}l.add(..._),c.push(..._);const m=new P(new ie(3.25,.15,9,36),wt(Kt,.9));m.rotation.x=Math.PI/2,m.position.set(0,-.38,.1);const d=new P(new ie(6.28,.12,9,44),wt(Kt,.72));d.rotation.x=Math.PI/2,d.position.set(0,-.56,.08);const E=m;c.push(d);const w=new P(new mt(.74,14,10),wt(we,.78));w.position.set(0,.12,.16);const v=new P(new mt(.86,14,10),wt(Kt,.96));v.position.copy(w.position);const R=[],T=[];for(const[y,A,M]of[[-1.26,-.42,3.05],[1.26,-.42,3.05],[0,-.54,3.45]]){const x=new P(new Ht(.42,.56,.58,8),i);x.rotation.x=Math.PI/2,x.position.set(y,A,M);const D=new P(new mt(.48,10,6),wt(we,.92));D.position.set(y,A,M+.42),T.push(x),R.push(D)}return c.push(...T),s.add(r,o,a,l,m,d,w,v,...T,...R),Nn(s,r,l,E,w,R,v,c)}function Bg(){const s=new ae,t=1.7,e=It(Kn,Se,2.5),n=It(Yi,$t,1.8),i=It(Yi,$t,2.8),r=new P(new hn(1.62,1),e);r.scale.setScalar(t*.95);const o=new P(new hn(2.12,1),n);o.scale.setScalar(t*.84);const a=new P(new hn(2.78,2),vr(Se,.55));a.scale.setScalar(t*.92);const l=new P(new hn(2.45,1),vr($t,.28));l.scale.setScalar(t*1.02);const c=new ae,h=[o,l],u=[[0,0,-1],[.72,.28,-.62],[-.72,.28,-.62],[.76,-.3,.58],[-.76,-.3,.58],[0,.82,.38],[0,-.82,.42],[.72,.5,.18]],f=[],p=new L(0,1,0);for(const[T,y,A]of u){const M=new L(T,y,A).normalize(),x=new P(new Re(.34,1.8,5),i);x.position.copy(M).multiplyScalar(t*3.12),x.quaternion.setFromUnitVectors(p,M),x.scale.setScalar(t),f.push(x)}c.add(...f),h.push(...f);const g=new P(new ie(3.92*t,.13*t,9,42),wt(Se,.82));g.rotation.x=Math.PI/2;const _=new P(new ie(3.62*t,.1*t,9,38),wt(Se,.68)),m=new P(new ie(4.25*t,.115*t,9,44),wt($t,.74));m.rotation.y=Math.PI/2;const d=g;h.push(_,m);const E=new P(new mt(.7,14,10),wt($t,.74));E.scale.setScalar(t*.82);const w=new P(new mt(.86,14,10),wt($t,1));w.scale.setScalar(t*.82),w.position.set(0,-.28*t,.22*t);const v=[],R=[];for(const[T,y]of[[-1.38,-.72],[1.38,-.72],[-1.38,.72],[1.38,.72]]){const A=new P(new Ht(.38,.5,.62,8),n);A.rotation.x=Math.PI/2,A.position.set(T*t,y*t,3.35*t);const M=new P(new mt(.42,10,6),wt(we,.94));M.position.set(T*t,y*t,3.78*t),R.push(A),v.push(M)}return h.push(...R),s.add(r,o,a,l,c,g,_,m,E,w,...R,...v),Nn(s,r,c,d,E,v,w,h)}function di(s){return[s(-1),s(1)]}function Zn({hull:s=Kn,emit:t=$t,emitI:e=2.1,accent:n=Se,flame:i=we,body:r,extras:o=[],wingMeshes:a=[],ringR:l=.68,ringW:c=.07,ringZ:h=-1.05,coreR:u=.28,coreZ:f=-.42,engine:p=[[-.4,-.08,1.72],[.4,-.08,1.72]]}){const g=new ae,_=new ae,m=[];for(const y of a)_.add(y),m.push(y);for(const y of o)m.push(y);const d=new P(new ie(l,c,8,22),wt(n,.82));d.rotation.x=Math.PI/2,d.position.z=h;const E=new P(new mt(u,12,8),wt(n,.8));E.position.z=f;const w=new P(new mt(u*1.18,10,8),wt(t,.94));w.position.copy(E.position);const v=It(s,i,1.45),R=[],T=[];for(const[y,A,M]of p){const x=new P(new Ht(.2,.28,.34,8),v);x.rotation.x=Math.PI/2,x.position.set(y,A,M);const D=new P(new mt(.24,8,6),wt(i,.92));D.position.set(y,A,M+.3),T.push(x),R.push(D)}return m.push(...T),g.add(r,_,...o,d,E,w,...T,...R),Nn(g,r,_,d,E,R,w,m)}function kg(){const s=It(2754564,dn,2.5),t=It(1705476,we,1.7),e=new P(new Re(.72,2.6,6),s);e.rotation.x=Math.PI/2,e.position.z=-.12;const n=di(r=>{const o=new P(new st(1.35,.1,.72),t);return o.position.set(r*.85,.02,.35),o.rotation.z=r*.42,o.rotation.y=r*-.18,o}),i=new P(new st(.18,.7,1.1),t);return i.position.set(0,-.28,.4),Zn({hull:1705476,emit:dn,accent:we,flame:we,body:e,extras:[i],wingMeshes:n,ringR:.55,ringZ:-1.35,coreR:.24,coreZ:-.7,engine:[[0,-.06,1.55]]})}function zg(){const s=It(2363912,dn,2.3),t=It(3809800,Kt,1.6),e=new P(new st(2.1,1.15,2.4),s),n=[...di(o=>{const a=new P(new st(1.15,.55,1.35),t);return a.position.set(o*1.45,.05,.2),a.rotation.z=o*.12,a})],i=new P(new st(1.8,.28,.55),t);i.position.set(0,.55,-.7);const r=new P(new st(.9,.45,.9),s);return r.position.set(0,-.05,-1.45),Zn({hull:2363912,emit:dn,accent:Kt,flame:we,body:e,extras:[i,r],wingMeshes:n,ringR:1.15,ringW:.12,ringZ:-.35,coreR:.42,coreZ:.05,engine:[[-.7,-.35,1.55],[.7,-.35,1.55],[0,-.42,1.72]]})}function Hg(){const s=It(1708552,Kt,2.1),t=It(Kn,Kt,1.5),e=new P(new Ht(.28,.55,2.9,6),s);e.rotation.x=Math.PI/2;const n=new P(new ie(.72,.05,6,18),wt(Kt,.9));n.position.set(0,.55,-.2);const i=di(o=>{const a=new P(new st(1.55,.12,.22),t);return a.position.set(o*.85,.35,.15),a.rotation.z=o*-.35,a}),r=new P(new Re(.38,.9,4),t);return r.rotation.x=-Math.PI/2,r.position.z=-1.7,Zn({hull:1708552,emit:Kt,accent:Kt,flame:Kt,body:e,extras:[n,r],wingMeshes:i,ringR:.48,ringZ:-1.1,coreR:.26,coreZ:-.15,engine:[[0,-.12,1.7]]})}function Vg(){const s=It(2234376,Kt,2),t=new P(new Ht(1.45,1.55,.42,14),s);t.rotation.x=Math.PI/2;const e=new P(new ie(1.55,.12,8,24),wt(Kt,.85));e.rotation.x=Math.PI/2;const n=new P(new mt(.32,10,8),wt(Se,.8));n.position.z=.55;const i=di(r=>{const o=new P(new st(.28,.7,.28),s);return o.position.set(r*1.15,.55,0),o});return Zn({hull:2234376,emit:Kt,accent:Kt,flame:we,body:t,extras:[e,n],wingMeshes:i,ringR:1.05,ringW:.1,ringZ:-.15,coreR:.4,coreZ:-.02,engine:[[-.55,-.2,.95],[.55,-.2,.95]]})}function Gg(){const s=It(1705492,$t,2.2),t=It(2754584,$t,1.7),e=new P(new mt(.55,10,8),s),n=[];for(let r=0;r<6;r++){const o=new P(new Re(.42,1.35,5),t),a=r/6*Math.PI*2;o.position.set(Math.cos(a)*.95,Math.sin(a)*.55,.15),o.rotation.z=a+Math.PI/2,o.rotation.x=.55,n.push(o)}const i=new P(new Re(.22,1.1,5),wt(Kt,.85));return i.rotation.x=-Math.PI/2,i.position.z=-1.05,Zn({hull:1705492,emit:$t,accent:$t,flame:$t,body:e,extras:[i],wingMeshes:n,ringR:.82,ringZ:.05,coreR:.3,coreZ:0,engine:[[0,-.15,1.05]]})}function Wg(){const s=It(1312800,$t,2),t=It(2756672,Se,1.8),e=new P(new Ne(.85,0),s);e.scale.set(.7,.7,1.35);const n=[];for(const[i,r,o,a,l,c]of[[-.95,.25,-.2,.45,.45,1.4],[.95,.2,.1,.4,.4,1.25],[-.55,-.45,.35,.35,.55,1.1],[.5,-.4,-.45,.38,.38,1.2],[0,.7,.15,.32,.7,.9]]){const h=new P(new Ne(.55,0),t);h.scale.set(a,l,c),h.position.set(i,r,o),n.push(h)}return Zn({hull:1312800,emit:$t,accent:Se,flame:$t,body:e,extras:[],wingMeshes:n,ringR:.9,ringZ:-.85,coreR:.32,coreZ:-.1,engine:[[-.35,-.2,1.35],[.35,-.2,1.35]]})}function Xg(){const s=It(528408,Se,2.3),t=It(660776,Se,1.6),e=new P(new st(.55,.4,2.2),s),n=di(o=>{const a=new P(new Ht(.16,.16,2.8,6),t);return a.rotation.x=Math.PI/2,a.position.set(o*.85,.08,-.15),a}),i=di(o=>{const a=new P(new Re(.2,.7,5),wt(Se,.9));return a.rotation.x=-Math.PI/2,a.position.set(o*.85,.08,-1.7),a}),r=new P(new st(1.7,.16,.28),t);return r.position.set(0,.08,.35),Zn({hull:528408,emit:Se,accent:Se,flame:Se,body:e,extras:[r,...i],wingMeshes:n,ringR:.5,ringZ:-.55,coreR:.26,coreZ:.05,engine:[[-.85,.08,1.45],[.85,.08,1.45]]})}function qg(){const s=It(656920,Kt,1.8),t=wt(Se,.45),e=new P(new mt(.48,10,8),s);e.scale.set(.7,.55,1.4);const n=di(r=>{const o=new P(new xs(1.35,7),t);return o.position.set(r*1.15,.15,.1),o.rotation.y=r*.55,o.rotation.z=r*.35,o}),i=new P(new Re(.32,1.4,6),s);return i.rotation.x=Math.PI/2,i.position.z=1.05,Zn({hull:656920,emit:Kt,accent:Se,flame:Kt,body:e,extras:[i],wingMeshes:n,ringR:.62,ringZ:-.85,coreR:.28,coreZ:-.35,engine:[[0,-.12,1.85]]})}function Yg(){const s=new ae,t=It(2755588,dn,2.5),e=It(1705988,Kt,1.7),n=new P(new ie(1.85,.55,10,22),t);n.rotation.x=Math.PI/2;const i=new ae,r=[];for(let f=0;f<8;f++){const p=f/8*Math.PI*2,g=new P(new st(.55,.28,2.1),e);g.position.set(Math.cos(p)*2.15,Math.sin(p)*.35,Math.sin(p*2)*.4),g.rotation.y=p,i.add(g),r.push(g)}const o=new P(new Ht(.7,.9,1.4,8),t);o.rotation.x=Math.PI/2,r.push(o);const a=new P(new ie(2.4,.12,8,28),wt(we,.88));a.rotation.x=Math.PI/2;const l=new P(new mt(.7,12,8),wt(we,.85)),c=new P(new mt(.82,10,8),wt(Kt,.95)),h=[],u=[];for(const[f,p]of[[-1.6,-.4],[1.6,-.4],[0,.7]]){const g=new P(new Ht(.32,.42,.5,8),e);g.rotation.x=Math.PI/2,g.position.set(f,p,1.7);const _=new P(new mt(.36,8,6),wt(we,.92));_.position.set(f,p,2.05),u.push(g),h.push(_)}return r.push(o,...u),s.add(n,o,i,a,l,c,...u,...h),Nn(s,n,i,a,l,h,c,r)}function $g(){const s=new ae,t=It(Yi,$t,2.4),e=It(2754584,Kt,1.85),n=new P(new mt(1.15,12,10),t);n.scale.set(.85,.7,1.55);const i=new ae,r=[];for(let f=0;f<10;f++){const p=f/10*Math.PI*2,g=new P(new Re(.55,2.4,5),e);g.position.set(Math.cos(p)*1.7,Math.sin(p)*.85,-.2),g.rotation.z=p+Math.PI/2,g.rotation.x=.7,i.add(g),r.push(g)}const o=new P(new Re(.7,1.6,6),wt(Kt,.8));o.rotation.x=-Math.PI/2,o.position.z=-2.15,r.push(o);const a=new P(new ie(2.05,.14,8,28),wt($t,.88));a.rotation.x=Math.PI/2,a.position.z=-.4;const l=new P(new mt(.62,12,8),wt(Kt,.85));l.position.z=-.15;const c=new P(new mt(.72,10,8),wt($t,.95));c.position.copy(l.position);const h=[],u=[];for(const f of[-.7,.7]){const p=new P(new Ht(.28,.38,.45,8),e);p.rotation.x=Math.PI/2,p.position.set(f,-.25,1.85);const g=new P(new mt(.32,8,6),wt($t,.92));g.position.set(f,-.25,2.18),u.push(p),h.push(g)}return r.push(o,...u),s.add(n,i,o,a,l,c,...u,...h),Nn(s,n,i,a,l,h,c,r)}function Xn(s,t){const e=s._baseEmissive??2.2,n=Math.max(0,Math.min(1,t));s.body.material.emissiveIntensity=e+n*8}function fo(s,t){const e=Math.max(1,Math.min(3,t)),n=s.parts??[],i=s._coreBaseScale??1;if(e===1){for(const r of n)r.visible=!0;s.core.scale.setScalar(i),s.weak&&(s.weak.visible=!0),s.ring&&(s.ring.visible=!0),s.wings&&(s.wings.visible=!0)}else if(e===2){const r=Math.max(1,Math.floor(n.length*.45));n.forEach((o,a)=>{o.visible=a>=r}),s.core.scale.setScalar(i*1.35),s.weak&&(s.weak.visible=!0)}else n.forEach(r=>{r.visible=!1}),s.core.scale.setScalar(i*1.85),s.weak&&(s.weak.visible=!0),s.ring&&(s.ring.visible=!1)}const Xl={dive:Ig,sine:Ug,heavy:Ng,cinder:kg,slag:zg,acolyte:Hg,chime:Vg,bloom:Gg,prism:Wg,ion:Xg,wisp:qg,queen:Fg,warden:Og,coil:Yg,empress:$g};function Kg(s){return new _e({uniforms:{uTime:{value:0},uSeed:{value:Math.random()*40},uColor:{value:new Y(s)}},vertexShader:F0,fragmentShader:O0,transparent:!0,blending:Me,depthWrite:!1})}class Zg{constructor(t){this.scene=t,this.orbs=[],this.gates=[],this.enemies=[],this.blockers=[],this.bullets=[],this.enemyShots=[],this.pickups=[],this.explosions=[],this.impacts=[],this.boss=null,this.time=0,this.laneLimit=24,this._seedOrbs(),this._seedGates(),this._seedEnemies(),this._seedBlockers(),this._seedBullets(),this._seedPickups(),this._seedExplosions(),this._seedImpacts()}_seedOrbs(){for(let t=0;t<28;t++){const e=t%3===0?"#ffd166":"#5ce1ff",n=Kg(e),i=new P(new hn(.55,1),n),r=new P(new mt(1.1,16,12),new qt({color:e,transparent:!0,opacity:.18,blending:Me,depthWrite:!1}));i.add(r),i.visible=!1,this.scene.add(i),this.orbs.push({mesh:i,alive:!1,pathDist:0,radius:1.4,value:t%3===0?40:12,color:new Y(e),offset:new L})}}_seedGates(){for(let t=0;t<8;t++){const e=new ae,n=new P(new ie(6.4,.22,12,64),new Ln({color:1056816,emissive:16726996,emissiveIntensity:3.4,metalness:.4,roughness:.25})),i=new P(new xs(6,32),new qt({color:16726996,transparent:!0,opacity:.28,blending:Me,depthWrite:!1,side:ln}));e.add(n,i),e.visible=!1,this.scene.add(e),this.gates.push({mesh:e,ring:n,shield:i,alive:!1,pathDist:0,passed:!1,locked:!0,hp:4,burst:0,burstAge:0,pulse:0})}}_seedEnemies(){for(let t=0;t<28;t++){const e=new ae;e.visible=!1,this.scene.add(e),this.enemies.push({mesh:e,kits:{},craft:null,ring:null,wings:null,body:null,alive:!1,pathDist:0,hp:4,radius:3.4,cooldown:0,windup:0,windMax:.18,flash:0,elite:!1,offset:new L,role:"dive",nearMiss:!1,patternI:0,visPhase:1,weak:null,core:null})}}_seedBlockers(){for(let t=0;t<12;t++){const e=new P(new Ne(1,0),new Ln({color:2757120,metalness:.45,roughness:.28,emissive:16747034,emissiveIntensity:3.2})),n=new P(new mt(1.35,16,12),new qt({color:16751162,transparent:!0,opacity:.16,blending:Me,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.blockers.push({mesh:e,alive:!1,pathDist:0,hp:3,radius:3.2,offset:new L})}}_seedBullets(){this._shotGeo={spark:new st(.22,.22,1.15),needle:new st(.12,.12,14),titan:new st(1.85,.62,6.8),seeker:new Ne(.55,0),shard:new Oi(.42,0),mine:new mt(.55,10,8),nova:new Ne(.4,0),wing:new st(.28,.12,3.4),helix:new st(.22,.22,4.2),shear:new st(.55,.18,3.8),spire:new st(.1,.1,16),drone:new mt(.32,8,6),prism:new st(.22,.22,2.4)},this._tracerGeo=new st(.06,.06,3.6);for(let t=0;t<480;t++){const e=new P(this._shotGeo.spark,new qt({color:15269887})),n=new P(this._tracerGeo,new qt({color:11075576,transparent:!0,opacity:.55,blending:Me,depthWrite:!1}));n.position.z=1.4,e.add(n),e.visible=!1,this.scene.add(e),this.bullets.push({mesh:e,vel:new L,alive:!1,life:0,pathDist:0,laneX:0,along:1,speed:120,laneDrift:0,damage:1,home:0,homeSteer:0,pierce:0,hitR:1.6,wobble:0,phase:0,hitList:[],kind:"spark",tracer:n})}for(let t=0;t<96;t++){const e=new P(new mt(.58,12,10),new qt({color:16718408})),n=new P(new mt(1.05,12,10),new qt({color:16722530,transparent:!0,opacity:.55,blending:Me,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.enemyShots.push({mesh:e,vel:new L,alive:!1,life:0,pathDist:0,laneX:0,along:-1,speed:8,fat:!1})}}_seedPickups(){for(let t=0;t<64;t++){const e=new P(new Oi(1.15,0),new qt({color:8057087})),n=new P(new mt(1.85,10,8),new qt({color:6087167,transparent:!0,opacity:.28,blending:Me,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.pickups.push({mesh:e,glow:n,alive:!1,pathDist:0,laneX:0,radius:2.1,value:1,magnet:0,grace:0,kind:"mote"})}}_seedExplosions(){this._shardGeo=new Oi(.32,0),this._flashGeo=new mt(.7,8,6);for(let t=0;t<16;t++){const e=new ae,n=new qt({color:6087167,transparent:!0,opacity:1,depthWrite:!1}),i=[];for(let a=0;a<10;a++){const l=new P(this._shardGeo,n);l.userData.vel=new L,e.add(l),i.push(l)}const r=new qt({color:16777215,transparent:!0,opacity:0,blending:Me,depthWrite:!1}),o=new P(this._flashGeo,r);e.add(o),e.visible=!1,this.scene.add(e),this.explosions.push({group:e,shards:i,shardMat:n,flash:o,flashMat:r,alive:!1,life:0,duration:.45})}}_seedImpacts(){for(let t=0;t<72;t++){const e=new P(new mt(.22,6,6),new qt({color:10156031,transparent:!0,opacity:1,blending:Me,depthWrite:!1}));e.visible=!1,this.scene.add(e),this.impacts.push({mesh:e,vel:new L,alive:!1,life:0,duration:.16})}}reset(){for(const t of[this.orbs,this.gates,this.enemies,this.blockers,this.bullets,this.enemyShots,this.pickups])for(const e of t)e.alive=!1,e.mesh.visible=!1,"passed"in e&&(e.passed=!1),"locked"in e&&(e.locked=!0),"nearMiss"in e&&(e.nearMiss=!1),"burst"in e&&(e.burst=0),"burstAge"in e&&(e.burstAge=0),"grace"in e&&(e.grace=0);this.boss&&(this.scene.remove(this.boss.mesh),this.boss=null);for(const t of this.explosions)t.alive=!1,t.life=0,t.group.visible=!1;for(const t of this.impacts)t.alive=!1,t.life=0,t.mesh.visible=!1;this.time=0,this.laneLimit=24}spawnAhead(t,e){this._placeInactive(this.orbs,t,e,78,7,"orb")}spawnSquad(t,e,n,i,r,o=90){const a=this.laneLimit||24,l=r||4,c=yg(n,l,a);for(let h=0;h<l;h++){const u=this.enemies.find(p=>!p.alive);if(!u)break;const f=e+o+Sg(n,h);this._placeOne(u,t,f,"enemy"),this._dressEnemy(u,i||"dive",1,c[h]??0,a)}}spawnNamed(t,e,n,i=96,r=0,o=null){const a=this.enemies.find(l=>!l.alive);a&&(this._placeOne(a,t,e+i,"enemy"),this._dressEnemy(a,n,1,0,this.laneLimit||24,r,o))}spawnGateAt(t,e,n=72){const i=this.gates.find(r=>!r.alive);i&&this._placeOne(i,t,e+n,"gate")}spawnOrbsAt(t,e,n=4,i=48){for(let r=0;r<n;r++){const o=this.orbs.find(a=>!a.alive);if(!o)break;this._placeOne(o,t,e+i+r*9,"orb")}}spawnBlockersAt(t,e,n=2,i=80){for(let r=0;r<n;r++){const o=this.blockers.find(a=>!a.alive);if(!o)break;this._placeOne(o,t,e+i+r*14,"blocker")}}spawnFinale(t,e,n=96,i=0,r=null){this.boss?.alive||this._spawnBoss(t,e+n,i,r)}_placeInactive(t,e,n,i,r,o){let a=t.filter(l=>l.alive).length;for(;a<Math.min(r,t.length);){const l=t.find(c=>!c.alive);if(!l)break;this._placeOne(l,e,n+70+a*i+Math.random()*24,o),a++}}_placeOne(t,e,n,i){const r=e.sample(n),o=Dn(r.tangent),a=this.laneLimit||24;let l=0,c=0;if(i==="orb")l=(Math.random()-.5)*a*1.7,c=(Math.random()-.5)*16;else if(i==="enemy")l=(Math.random()-.5)*a*1.7,c=0;else if(i==="blocker"){l=(Math.random()-.5)*a*1.7,c=0;const h=2.4+Math.random()*1.6;t.mesh.scale.setScalar(h),t.radius=1.15*h,t.hp=3}else i==="gate"&&(t.passed=!1,t.locked=!0,t.hp=4,t.burst=0,t.burstAge=0,t.shield.visible=!0,t.shield.material.color.set(16726996),t.shield.material.opacity=.32,t.ring.material.emissive.set(16726996),t.ring.material.emissiveIntensity=3.4,t.ring.scale.set(1,1,1));t.mesh.position.copy(r.pos).addScaledVector(o.binormal,l).addScaledVector(o.normal,c),t.mesh.visible=!0,t.alive=!0,t.pathDist=n,t.offset=new L(l,c,0),i==="enemy"&&(t.baseX=l),t.mesh.lookAt(r.pos.clone().add(r.tangent))}_dressEnemy(t,e,n,i,r,o=0,a=null){this._bindCraft(t,e),t.role=e,t.nearMiss=!1,t.flash=0,t.windup=0,t.patternI=0,t.visPhase=1,t.elite=e==="queen"||e==="warden"||e==="coil"||e==="empress",t.offset.x=i+(Math.random()-.5)*r*.03,t.baseX=t.offset.x,t.weave=.55+Math.random()*.7;const l=n>2.4?1:0;t.mesh.scale.setScalar(1),t.craft&&fo(t.craft,1),e==="queen"?(t.hp=Di("queen",o,a),t.maxHp=t.hp,t.radius=7.4,t.descent=.52,t.cooldown=.85,t.windMax=.46,t.drop=4,t.bombDrop=1):e==="warden"?(t.hp=Di("warden",o,a),t.maxHp=t.hp,t.radius=7.6,t.descent=.38,t.cooldown=1.05,t.windMax=.55,t.drop=5,t.bombDrop=1):e==="coil"?(t.hp=Di("coil",o,a),t.maxHp=t.hp,t.radius=6.4,t.descent=.44,t.cooldown=.95,t.windMax=.48,t.drop=4,t.bombDrop=1):e==="empress"?(t.hp=Di("empress",o,a),t.maxHp=t.hp,t.radius=7.4,t.descent=.48,t.cooldown=.9,t.windMax=.5,t.drop=5,t.bombDrop=1):e==="heavy"||e==="slag"||e==="chime"?(t.hp=11+l,t.maxHp=t.hp,t.radius=4.8,t.descent=.85+Math.random()*.55,t.cooldown=1.4+Math.random()*.8,t.windMax=.45,t.drop=2,t.bombDrop=0):e==="sine"||e==="acolyte"||e==="prism"||e==="wisp"?(t.hp=6+l,t.maxHp=t.hp,t.radius=4.2,t.descent=1.35+Math.random()*1.1,t.cooldown=1.9+Math.random()*1.3,t.windMax=.22,t.drop=1,t.bombDrop=0):(t.hp=5+l,t.maxHp=t.hp,t.radius=3.35,t.descent=2.1+Math.random()*1.5,t.cooldown=1.7+Math.random()*1.4,t.windMax=.16,t.drop=1,t.bombDrop=0)}_bindCraft(t,e){const n=Xl[e]?e:"dive";if(t.kits||(t.kits={}),!t.kits[n]){const r=Xl[n]();t.mesh.add(r.mesh),t.kits[n]=r}for(const[r,o]of Object.entries(t.kits))o.mesh.visible=r===n;const i=t.kits[n];t.craft=i,t.body=i.body,t.wings=i.wings,t.ring=i.ring,t.core=i.core,t.weak=i.weak}_spawnBoss(t,e,n=0,i=null){const r=Bg();this.scene.add(r.mesh),this.boss={mesh:r.mesh,craft:r,body:r.body,wings:r.wings,ring:r.ring,core:r.core,weak:r.weak,shell:r.ring,pathDist:e,hp:Di("finale",n,i),maxHp:Di("finale",n,i),cooldown:.6,windup:0,windMax:.42,radius:7.6,alive:!0,elite:!0,role:"finale",phase:1,visPhase:1,patternI:0,flash:0,bombDrop:0,drop:8,offset:new L(0,0,0)},fo(r,1);const o=t.sample(e);r.mesh.position.copy(o.pos)}fireRail(t,e,n,i=1,r={}){const o=this.bullets.find(a=>!a.alive);return o?(o.alive=!0,o.life=r.life??1.15,o.pathDist=e,o.laneX=n,o.along=i,o.speed=r.speed??124,o.laneDrift=r.drift??0,o.damage=r.damage??1,o.home=r.home??0,o.homeSteer=r.homeSteer??0,o.pierce=r.pierce??0,o.hitR=r.hitR??1.6,o.wobble=r.wobble??0,o.phase=r.phase??Math.random()*6.28,o.kind=r.kind||"spark",o.hitList=[],this._dressBullet(o,r),o.mesh.visible=!0,this._placeRailShot(o,t),!0):!1}_dressBullet(t,e){const n=e.kind||"spark",i=this._shotGeo[n]||this._shotGeo.spark;t.mesh.geometry!==i&&(t.mesh.geometry=i);const r=e.scale??1;let o=r,a=r,l=1;if(n==="spark"||n==="shard"||n==="prism"?l=1:n==="seeker"?(o=r*1.15,a=r*1.15,l=1):n==="titan"?(o=r,a=r,l=1):n==="mine"?(o=r*1.2,a=r*1.2,l=1):n==="wing"||n==="nova"?l=1:n==="spire"||n==="needle"?(o=r,a=r,l=1):(n==="helix"||n==="shear"||n==="drone")&&(l=1),t.mesh.scale.set(o,a,l),t.mesh.material.color.set(e.color??15269887),t.tracer){const c=n==="needle"||n==="spire"||n==="spark"||n==="helix";t.tracer.visible=c,t.tracer.material.color.set(e.color??11075576),t.tracer.scale.set(n==="needle"||n==="spire"?.7:1,n==="needle"||n==="spire"?.7:1,n==="needle"||n==="spire"?2.4:1)}}enemyFireRail(t,e,n,i=8,r=!1){const o=this.enemyShots.find(a=>!a.alive);o&&(o.alive=!0,o.life=r?4.2:3.6,o.pathDist=e,o.laneX=n,o.along=-1,o.speed=i,o.fat=r,o.mesh.scale.setScalar(r?1.55:1),o.mesh.material.color.set(r?16711736:16718408),o.mesh.visible=!0,this._placeRailShot(o,t))}_placeRailShot(t,e){const n=hs(e,t.pathDist,t.laneX,.45);t.mesh.position.copy(n.pos),t.vel.copy(n.sample.tangent).multiplyScalar(t.along*t.speed),t.mesh.lookAt(n.pos.clone().addScaledVector(n.sample.tangent,t.along))}explode(t,e=6087167){let n=this.explosions.find(i=>!i.alive);if(!n){n=this.explosions[0];for(const i of this.explosions)i.life<n.life&&(n=i)}n.alive=!0,n.duration=.45,n.life=n.duration,n.group.visible=!0,n.group.position.copy(t),n.shardMat.color.set(e),n.shardMat.opacity=1,n.flashMat.color.set(e),n.flashMat.opacity=.85,n.flash.scale.setScalar(1);for(const i of n.shards)i.position.set(0,0,0),i.scale.setScalar(.65+Math.random()*.7),i.userData.vel.randomDirection().multiplyScalar(7+Math.random()*9)}spawnImpact(t,e=10156031){const n=5+(Math.random()*3|0);let i=0;for(const r of this.impacts)if(!r.alive&&(r.alive=!0,r.duration=.14+Math.random()*.08,r.life=r.duration,r.mesh.visible=!0,r.mesh.position.copy(t).add(new L().randomDirection().multiplyScalar(.35)),r.vel.randomDirection().multiplyScalar(10+Math.random()*16),r.mesh.material.color.set(e),r.mesh.scale.setScalar(.7+Math.random()*.9),i+=1,i>=n))break}bombSweep(t,e,n=16){let i=0,r=0;const o=[];for(const l of this.enemyShots)l.alive&&(this.spawnImpact(l.mesh.position.clone(),16769162),l.alive=!1,l.mesh.visible=!1,i+=1);const a=t+e;for(const l of this.enemies){if(!l.alive)continue;const c=l.pathDist-a;c<-10||c>78||(l.hp-=l.elite?Math.max(n,(l.maxHp||l.hp)*.08):n,l.flash=.2,l.craft&&Xn(l.craft,.9),this._syncVisPhase(l),r+=1,this.spawnImpact(l.mesh.position.clone(),16761165),l.hp<=0&&(l.alive=!1,l.mesh.visible=!1,this.explode(l.mesh.position.clone(),l.elite?16765286:16747066),o.push({type:l.elite?"midboss":"enemy",role:l.role,pos:l.mesh.position.clone(),pathDist:l.pathDist,laneX:l.offset.x,drop:l.drop??1,bombDrop:l.bombDrop??0})))}if(this.boss?.alive){const l=this.boss.pathDist-a;l>-10&&l<90&&(this.boss.hp-=Math.max(n,this.boss.maxHp*.08),this.boss.craft&&Xn(this.boss.craft,.9),this._syncVisPhase(this.boss),r+=1,this.spawnImpact(this.boss.mesh.position.clone(),16765286),this.boss.hp<=0&&(this.boss.alive=!1,this.boss.mesh.visible=!1,this.explode(this.boss.mesh.position.clone(),16726996),o.push({type:"boss",pos:this.boss.mesh.position.clone(),pathDist:this.boss.pathDist,laneX:0,drop:8,bombDrop:0})))}return{shots:i,hunters:r,killed:o}}spawnMote(t,e,n,i=1,r={}){const o=[],a=r.spread??3.4;for(let l=0;l<i;l++){const c=this.pickups.find(h=>!h.alive);if(!c)break;this._paintPickup(c,"mote"),c.alive=!0,c.pathDist=e+(Math.random()-.5)*3,c.laneX=n+(l-(i-1)/2)*a+(Math.random()-.5)*1.6,c.magnet=0,c.grace=r.grace??0,c.mesh.visible=!0,c.mesh.scale.setScalar(1),this._placeMote(c,t),o.push(c)}return o}spawnCoins(t,e,n,i=1,r={}){const o=[],a=r.spread??4.2;for(let l=0;l<i;l++){const c=this.pickups.find(h=>!h.alive);if(!c)break;this._paintPickup(c,"coin"),c.alive=!0,c.pathDist=e+(Math.random()-.5)*4,c.laneX=n+(l-(i-1)/2)*a+(Math.random()-.5)*1.8,c.magnet=0,c.grace=r.grace??0,c.mesh.visible=!0,c.mesh.scale.setScalar(1.08),this._placeMote(c,t),o.push(c)}return o}_paintPickup(t,e){const n=e==="coin";t.kind=n?"coin":"mote",t.value=n?8:1,t.radius=n?2.45:2.1,t.mesh.material.color.set(n?16765286:8057087),t.glow.material.color.set(n?16758531:6087167),t.glow.material.opacity=n?.42:.28}_placeMote(t,e){const n=hs(e,t.pathDist,t.laneX,.55);t.mesh.position.copy(n.pos)}recycleBehind(t,e=8){const n=t+Math.min(e,0)-40;for(const i of[this.orbs,this.gates,this.enemies,this.blockers,this.pickups])for(const r of i){if(!r.alive)continue;if(r.pathDist<n){if(r.burst>0||r.elite)continue;r.alive=!1,r.mesh.visible=!1}}}hunterCount(){return this.enemies.filter(t=>t.alive).length+(this.boss?.alive?1:0)}activeBoss(){const t=this.enemies.find(e=>e.alive&&e.elite);return t||(this.boss?.alive?this.boss:null)}blockerAhead(t){return this.blockers.some(e=>e.alive&&e.pathDist-t<70&&e.pathDist>t)}_telegraphAndFire(t,e,n,i,r){const o=t.body;if(t.flash>0?t.craft?Xn(t.craft,Math.min(1,t.flash*5)):o&&(o.material.emissiveIntensity=2.2+t.flash*8):(t.windup||0)<=0&&t.craft&&Xn(t.craft,0),!r){t.windup>0&&(t.windup=0),t.ring&&t.ring.scale.setScalar(1);return}if(t.windup>0){t.windup-=e;const a=1-t.windup/Math.max(.08,t.windMax||.4);if(t.ring&&t.ring.scale.setScalar(1+a*.55),t.craft?Xn(t.craft,.25+a*.85):o&&(o.material.emissiveIntensity=2.2+a*5.5),t.shell?.material?.opacity!=null&&(t.shell.material.opacity=.55+a*.4),t.windup<=0){const l=Tg(t,this.laneLimit||24,this._playerLane??0,this.time,(c,h,u,f)=>{this.enemyFireRail(n,c,h,u??8,f)});t.ring&&t.ring.scale.setScalar(1),t.cooldown=this._reloadFor(t,i)+(l||0)}return}t.cooldown-=e,t.cooldown<=0&&(t.windMax=t.windMax||.2,t.windup=t.windMax)}_syncVisPhase(t){if(!t?.craft||!(t.elite||t.role==="finale"))return;const e=t.hp/Math.max(1,t.maxHp||t.hp),n=e>.66?1:e>.33?2:3;n!==t.visPhase&&(t.visPhase=n,t.role==="finale"&&(t.phase=n),fo(t.craft,n))}_reloadFor(t,e){return t.role==="finale"?t.phase===3?1.15:t.phase===2?1.45:1.85:t.role==="queen"?1.55:t.role==="empress"?1.48:t.role==="warden"?1.7:t.role==="coil"?1.62:t.role==="heavy"||t.role==="slag"||t.role==="chime"?Math.max(1.85,2.4-e*.06):Math.max(2.1,2.8-e*.08)}_enemyVolley(t,e,n){const i=t.offset?.x??0,r=t.pathDist-4,o=this.laneLimit||24;if(t.role==="queen"){const a=o*.16;for(let l=-2;l<=2;l++)this.enemyFireRail(e,r,i+l*a,7.2,Math.abs(l)===0);return}if(t.role==="warden"){const a=o*.22;this.enemyFireRail(e,r,i-a,6.4,!0),this.enemyFireRail(e,r,i+a,6.4,!0),this.enemyFireRail(e,r,i,7.5,!0),this.enemyFireRail(e,r-6,i-a*.5,6.8),this.enemyFireRail(e,r-6,i+a*.5,6.8);return}if(t.role==="finale"){const a=o*(t.phase===3?.34:.26),l=t.phase===1?3:5;for(let c=0;c<l;c++){const h=l===1?0:c/(l-1)-.5;this.enemyFireRail(e,r,h*a*2,t.phase===3?7.2:8,!0)}t.phase===3&&this.enemyFireRail(e,r-8,Math.sin(this.time*2.4)*a,6.6,!0);return}if(t.role==="heavy"){const a=Math.min(8,o*.08);this.enemyFireRail(e,r,i-a,7),this.enemyFireRail(e,r,i+a,7);return}this.enemyFireRail(e,r+1,i,8)}update(t,e,n,i,r,o,a=8){this.time+=t;for(const l of this.orbs){if(!l.alive)continue;l.mesh.material.uniforms.uTime.value=this.time,l.mesh.rotation.y+=t*1.4;const c=e.sample(l.pathDist),h=Dn(c.tangent);l.mesh.position.copy(c.pos).addScaledVector(h.binormal,l.offset.x).addScaledVector(h.normal,l.offset.y+Math.sin(this.time*3+l.pathDist)*.35)}for(const l of this.gates){if(!l.alive)continue;const c=e.sample(l.pathDist);if(l.mesh.position.copy(c.pos),l.mesh.lookAt(c.pos.clone().add(c.tangent)),l.burst>0){l.burstAge=(l.burstAge||0)+t;const h=l.burstAge,u=(_,m)=>Math.exp(-(_*_)/(m*m)),f=1*u(h-.24,.18)+.62*u(h-.92,.26)+.32*u(h-1.64,.32)-.24*u(h-.55,.14)-.14*u(h-1.26,.18),p=1+f*1.18;l.pulse=Math.max(0,f),l.ring.scale.set(p,p,1),l.ring.rotation.z+=t*(.7+l.pulse*2.4);const g=3.2+l.pulse*8.5;l.ring.material.emissive.setRGB(.42+l.pulse*.55,.82+l.pulse*.18,1),l.ring.material.emissiveIntensity=g,h>2.2&&(l.burst=0,l.burstAge=0,l.alive=!1,l.mesh.visible=!1,l.ring.scale.set(1,1,1),l.ring.material.emissive.set(6087167),l.ring.material.emissiveIntensity=3.4);continue}l.ring.rotation.z+=t*.8,l.locked&&(l.shield.material.opacity=.22+.12*Math.sin(this.time*6))}for(const l of this.blockers){if(!l.alive)continue;l.mesh.rotation.y+=t*.9,l.mesh.rotation.x+=t*.4;const c=e.sample(l.pathDist),h=Dn(c.tangent);l.mesh.position.copy(c.pos).addScaledVector(h.binormal,l.offset.x).addScaledVector(h.normal,l.offset.y)}this._playerLane=r?.x??0;for(const l of this.enemies){if(!l.alive)continue;if(l.ring&&(l.ring.rotation.z+=t*2.2),l.pathDist-=(l.descent||2)*t,l.elite){const u=n+32;l.pathDist<u&&(l.pathDist=u)}if(l.role==="sine"||l.role==="queen"||l.role==="empress"){const u=(this.laneLimit||24)*(l.role==="sine"?.08:.22);l.offset.x=(l.baseX||0)+Math.sin(this.time*(l.weave||.9)+l.pathDist*.03)*u}l.offset.y=0;const c=hs(e,l.pathDist,l.offset.x,.4);l.mesh.position.copy(c.pos),l.mesh.up.copy(c.frame.normal),l.mesh.lookAt(c.pos.clone().addScaledVector(c.sample.tangent,-12)),l.flash=Math.max(0,(l.flash||0)-t);const h=l.pathDist>n+6&&l.pathDist<n+78;this._telegraphAndFire(l,t,e,o,h)}if(this.boss?.alive){this.boss.ring&&(this.boss.ring.rotation.z-=t*.9),this.boss.wings&&(this.boss.wings.rotation.y+=t*.35),this.boss.pathDist-=1.15*t,this.boss.pathDist<n+32&&(this.boss.pathDist=n+32);const l=hs(e,this.boss.pathDist,0,1.2);this.boss.mesh.position.copy(l.pos),this.boss.mesh.up.copy(l.frame.normal),this.boss.mesh.lookAt(l.pos.clone().addScaledVector(l.sample.tangent,-16)),this._syncVisPhase(this.boss),this.boss.flash=Math.max(0,(this.boss.flash||0)-t),this.boss.flash>0&&this.boss.craft&&Xn(this.boss.craft,this.boss.flash*4);const c=this.boss.pathDist>n+8&&this.boss.pathDist<n+90;this._telegraphAndFire(this.boss,t,e,o,c)}this._stepProjectiles(this.bullets,t,e),this._stepProjectiles(this.enemyShots,t,e),this._stepPickups(t,e,n,a,r);for(const l of this.impacts){if(!l.alive)continue;l.life-=t,l.mesh.position.addScaledVector(l.vel,t);const c=Math.max(0,l.life/l.duration);l.mesh.material.opacity=c,l.mesh.scale.setScalar(.45+(1-c)*1.6),l.life<=0&&(l.alive=!1,l.mesh.visible=!1)}for(const l of this.explosions){if(!l.alive)continue;l.life-=t;const c=Math.max(0,l.life/l.duration);for(const h of l.shards)h.position.addScaledVector(h.userData.vel,t),h.rotation.x+=t*8,h.rotation.y+=t*5;l.shardMat.opacity=c,l.flashMat.opacity=c*.7,l.flash.scale.setScalar(1+(1-c)*5),l.life<=0&&(l.alive=!1,l.group.visible=!1)}}_stepProjectiles(t,e,n){for(const i of t)if(i.alive){if(i.life-=e,i.home&&this._steerHome(i,e),i.wobble&&(i.laneX+=Math.sin(this.time*7.5+(i.phase||0))*i.wobble*e),i.pathDist+=(i.along||1)*(i.speed||100)*e,i.laneX+=(i.laneDrift||0)*e,i.life<=0||i.pathDist<12){i.alive=!1,i.mesh.visible=!1;continue}this._placeRailShot(i,n)}}_steerHome(t,e){let n=null,i=1e9;for(const h of this.enemies){if(!h.alive||h.pathDist<t.pathDist-4)continue;const u=Math.hypot(h.offset.x-t.laneX,h.pathDist-t.pathDist);u<i&&(i=u,n=h)}if(this.boss?.alive&&this.boss.pathDist>t.pathDist-6){const h=Math.hypot(0-t.laneX,this.boss.pathDist-t.pathDist);h<i&&(i=h,n=this.boss)}if(!n)return;const r=n.offset?.x??0,o=n.pathDist,a=t.homeSteer||60,l=r-t.laneX,c=o-t.pathDist;t.laneX+=Math.sign(l)*Math.min(Math.abs(l),a*e),c>0&&(t.pathDist+=Math.min(c,a*.35*e))}_stepPickups(t,e,n,i,r){const o=n+i,a=r?.x||0;for(const l of this.pickups){if(!l.alive)continue;l.grace>0&&(l.grace-=t),l.pathDist-=9.5*t,l.mesh.rotation.x+=t*2.4,l.mesh.rotation.y+=t*3.1;const c=a-l.laneX,h=o-l.pathDist,u=Math.hypot(c,h),f=h>0?14.5:11;if(l.grace<=0&&u<f&&u>.001){const g=(1-u/f)*38*t;l.laneX+=c/u*g,l.pathDist+=h/u*g}const p=.85+.18*Math.sin(this.time*8+l.pathDist);l.mesh.scale.setScalar(p),this._placeMote(l,e)}}collectOrbs(t,e){const n=[];for(const i of this.orbs)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius&&(i.alive=!1,i.mesh.visible=!1,n.push(i));return n}collectMotes(t,e){const n=[];for(const i of this.pickups)!i.alive||i.grace>0||i.mesh.position.distanceTo(t)<e+i.radius&&(i.alive=!1,i.mesh.visible=!1,n.push(i));return n}collectGates(t){const e=[];for(const n of this.gates)!n.alive||n.passed||n.mesh.position.distanceTo(t)<6.2&&(n.locked?e.push({gate:n,blocked:!0}):(n.passed=!0,n.burst=1,n.burstAge=0,e.push({gate:n,blocked:!1})));return e}collideEnemies(t,e){const n=[];for(const i of this.enemies)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius*.68&&n.push(i);return this.boss?.alive&&this.boss.mesh.position.distanceTo(t)<e+this.boss.radius&&n.push(this.boss),n}collideBlockers(t,e){const n=[];for(const i of this.blockers)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius&&n.push(i);return n}nearMisses(t){const e=[];for(const n of this.enemies){if(!n.alive||n.nearMiss)continue;const i=n.mesh.position.distanceTo(t);i>n.radius+1.2&&i<n.radius+3.4&&(n.nearMiss=!0,e.push(n))}return e}_hitPoint(t){return t.mesh.position.clone().addScaledVector(t.vel,.04)}_railHit(t,e,n,i){const r=t.hitR??1.6,o=Math.abs((t.pathDist||0)-e),a=Math.abs((t.laneX||0)-(n||0));return o<i+r+6&&a<i+r}_strike(t,e,n){const i=t.hitR??1.6;return this._hitPoint(t).distanceTo(e)<n+i}_alreadyHit(t,e){return t.hitList&&t.hitList.includes(e)}_applyHit(t,e){return t.hitList||(t.hitList=[]),t.hitList.push(e),(t.pierce||0)>0?(t.pierce-=1,!1):(t.alive=!1,t.mesh.visible=!1,!0)}bulletHits(){const t=[];for(const e of this.bullets){if(!e.alive)continue;let n=!1;for(const i of this.enemies)if(!(!i.alive||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,i.offset?.x??0,i.radius)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.alive=!1,i.mesh.visible=!1,t.push({type:i.elite?"midboss":"enemy",pos:i.mesh.position.clone(),role:i.role,pathDist:i.pathDist,laneX:i.offset.x,drop:i.drop??1,bombDrop:i.bombDrop??0})):(i.flash=i.elite?.22:.12,i.craft&&Xn(i.craft,i.elite?.95:.7),this._syncVisPhase(i),t.push({type:"ping",pos:i.mesh.position.clone(),color:i.elite?16769162:10156031})),n))break;if(!n){for(const i of this.blockers)if(!(!i.alive||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,i.offset?.x??0,i.radius)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.alive=!1,i.mesh.visible=!1,t.push({type:"blocker",pos:i.mesh.position.clone(),pathDist:i.pathDist,laneX:i.offset.x,drop:Math.random()<.45?1:0})):t.push({type:"ping",pos:i.mesh.position.clone(),color:16751162}),n))break;if(!n){for(const i of this.gates)if(!(!i.alive||!i.locked||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,0,5.2)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.locked=!1,i.shield.visible=!1,i.ring.material.emissive.set(6087167),i.ring.material.emissiveIntensity=5.2,t.push({type:"unlock",pos:i.mesh.position.clone(),pathDist:i.pathDist,laneX:0,drop:2})):t.push({type:"ping",pos:i.mesh.position.clone(),color:16737512}),n))break;n||this.boss?.alive&&!this._alreadyHit(e,this.boss)&&this._railHit(e,this.boss.pathDist,0,this.boss.radius)&&(this.boss.hp-=e.damage||1,this._applyHit(e,this.boss),this.boss.hp<=0?(this.boss.alive=!1,this.boss.mesh.visible=!1,t.push({type:"boss",pos:this.boss.mesh.position.clone(),pathDist:this.boss.pathDist,laneX:0,drop:8})):(this.boss.flash=.22,this.boss.craft&&Xn(this.boss.craft,.95),this._syncVisPhase(this.boss),t.push({type:"ping",pos:this.boss.mesh.position.clone(),color:16765286})))}}}return t}shotsHitPlayer(t,e){let n=!1;for(const i of this.enemyShots)i.alive&&i.mesh.position.distanceTo(t)<e&&(i.alive=!1,i.mesh.visible=!1,n=!0);return n}nearestLights(t,e){const n=[...e];for(const i of this.pickups)i.alive&&n.push({pos:i.mesh.position,color:new Y("#7af0ff"),intensity:8});for(const i of this.orbs)i.alive&&n.push({pos:i.mesh.position,color:i.color,intensity:9});for(const i of this.blockers)i.alive&&n.push({pos:i.mesh.position,color:new Y("#ff9a3a"),intensity:14});for(const i of this.gates)i.alive&&n.push({pos:i.mesh.position,color:new Y(i.burst>0?"#dcffff":i.locked?"#ff3bd4":"#5ce1ff"),intensity:i.burst>0?14+(i.pulse||0)*32:i.locked?10:16});return this.boss?.alive&&n.push({pos:this.boss.mesh.position,color:new Y("#ff3bd4"),intensity:18}),n.sort((i,r)=>i.pos.distanceToSquared(t)-r.pos.distanceToSquared(t)),n.slice(0,6)}}class Jg{constructor(){this.ctx=null,this.master=null,this.music=null,this.sfx=null,this.duck=null,this.engine=null,this.boost=0,this.enabled=!1,this.intensity=.2,this._paused=!1,this._nextBeat=0,this._step=0,this._noise=null,this._whooshOn=!1,this._chapter="default",this._arpGain=null,this._choirGain=null}async resume(){this.ctx||(this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.2,this.duck=this.ctx.createGain(),this.duck.gain.value=1,this.music=this.ctx.createGain(),this.music.gain.value=.55,this.sfx=this.ctx.createGain(),this.sfx.gain.value=1,this.music.connect(this.duck),this.duck.connect(this.master),this.sfx.connect(this.master),this.master.connect(this.ctx.destination),this._noise=this._makeNoise(2),this._startEngine(),this._startPad(),this._startStems(),this._nextBeat=this.ctx.currentTime+.05),this.ctx.state==="suspended"&&await this.ctx.resume(),this.enabled=!0,this.setPaused(!1)}setPaused(t){if(this._paused=t,!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?8e-4:.2,e,.04)}setIntensity(t){this.intensity=Math.max(0,Math.min(1,t))}tick(){if(!this.enabled||!this.ctx||this._paused)return;const t=this.ctx.currentTime,n=60/96/4;for(;this._nextBeat<t+.12;)this._scheduleBeat(this._nextBeat,this._step),this._nextBeat+=n,this._step=(this._step+1)%16;if(this._padFilt){const i=t;this._padFilt.frequency.setTargetAtTime(220+this.intensity*920,i,.2),this._padGain.gain.setTargetAtTime(.045+this.intensity*.05,i,.25)}this._mixStems(t)}setChapter(t){this._chapter=t||"default"}_makeNoise(t){const e=this.ctx,n=e.createBuffer(1,e.sampleRate*t,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;return n}_osc(t,e,n,i,r,o){const a=this.ctx.createOscillator(),l=this.ctx.createGain();return a.type=t,a.frequency.setValueAtTime(e,n),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(r,n+.01),l.gain.exponentialRampToValueAtTime(1e-4,n+i),a.connect(l),l.connect(o||this.sfx),a.start(n),a.stop(n+i+.02),a}_noiseBurst(t,e,n,i,r){const o=this.ctx.createBufferSource();o.buffer=this._noise;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(n,t),a.Q.value=i;const l=this.ctx.createGain();l.gain.setValueAtTime(r,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(a),a.connect(l),l.connect(this.sfx),o.start(t),o.stop(t+e+.02)}_startEngine(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator(),i=t.createBiquadFilter(),r=t.createGain();e.type="sawtooth",n.type="triangle",e.frequency.value=48,n.frequency.value=72,i.type="lowpass",i.frequency.value=220,r.gain.value=.1,e.connect(i),n.connect(i),i.connect(r),r.connect(this.sfx),e.start(),n.start(),this.engine={osc:e,osc2:n,filt:i,g:r}}_startPad(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator();e.type="sawtooth",n.type="sawtooth",e.frequency.value=55,n.frequency.value=82.5,n.detune.value=7;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=280,i.Q.value=.7;const r=t.createGain();r.gain.value=.05,e.connect(i),n.connect(i),i.connect(r),r.connect(this.music),e.start(),n.start(),this._padFilt=i,this._padGain=r}_startStems(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator();e.type="sine",n.type="sine",e.frequency.value=110,n.frequency.value=164.81,n.detune.value=6;const i=t.createGain();i.gain.value=.008,e.connect(i),n.connect(i),i.connect(this.music),e.start(),n.start(),this._choirGain=i,this._choirOsc=[e,n];const r=t.createGain();r.gain.value=.01,r.connect(this.music),this._arpGain=r}_mixStems(t){const e=this._chapter,n=e==="finale"?.055:e==="empress"?.048:e==="queen"?.042:e==="coil"?.036:e==="warden"?.03:.01,i=e==="finale"?.038:e==="empress"?.034:e==="coil"?.033:e==="warden"?.032:e==="queen"?.024:.008;if(this._choirGain&&this._choirGain.gain.setTargetAtTime(n+this.intensity*.02,t,.35),this._arpGain&&this._arpGain.gain.setTargetAtTime(i+this.intensity*.015,t,.35),this._choirOsc){const r=e==="warden"||e==="coil"?98:e==="finale"?82.5:e==="empress"?138:e==="queen"?130.81:110;this._choirOsc[0].frequency.setTargetAtTime(r,t,.4),this._choirOsc[1].frequency.setTargetAtTime(r*1.5,t,.4)}}_scheduleBeat(t,e){const n=this.intensity,i=[110,130.81,146.83,164.81,196,220,246.94,261.63];if(e%8===0&&n>.12){const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(150,t),r.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.16+n*.1,t+.008),o.gain.exponentialRampToValueAtTime(1e-4,t+.18),r.connect(o),o.connect(this.music),r.start(t),r.stop(t+.2)}if(e%2===0&&n>.38&&this._noiseBurst(t,.05,6e3,.6,.03+n*.025),n>.22){const r=i[(e*3+Math.floor(n*4))%i.length],o=n>.62&&e%4===0?2:1;this._osc("square",r*o,t,.09,.03+n*.025,this.music)}if(n>.7&&e%16===12&&this._osc("triangle",55,t,.28,.05,this.music),this._arpGain&&(this._chapter==="queen"||this._chapter==="warden"||this._chapter==="finale"||this._chapter==="coil"||this._chapter==="empress")&&e%2===0){const r=i[(e+4)%i.length]*(this._chapter==="finale"?2:1);this._osc("square",r*2,t,.06,.018+n*.012,this._arpGain)}}sting(t="chapter"){if(!this.enabled)return;const e=this.ctx.currentTime;if(t==="boss"){this._osc("sawtooth",55,e,.42,.12),this._osc("triangle",82.5,e+.04,.5,.08),this._osc("sine",110,e+.12,.55,.07),this._noiseBurst(e,.28,180,.8,.1),this._duck(.45,.4);return}if(t==="death"){this._osc("sine",220,e,.35,.1),this._osc("triangle",164.81,e+.08,.4,.08),this._osc("sine",110,e+.16,.55,.09),this._osc("sawtooth",55,e+.2,.45,.07),this._duck(.55,.5);return}if(t==="continue"){this._osc("sine",196,e,.22,.08),this._osc("triangle",246.94,e+.08,.28,.07),this._osc("sine",329.63,e+.16,.4,.06);return}if(t==="life"){this._osc("sine",523.25,e,.12,.07),this._osc("triangle",659.25,e+.05,.16,.05);return}this._osc("triangle",196,e,.16,.07),this._osc("sine",293.66,e+.06,.22,.06),this._osc("triangle",392,e+.12,.28,.05)}_duck(t=.35,e=.22){if(!this.duck)return;const n=this.ctx.currentTime;this.duck.gain.cancelScheduledValues(n),this.duck.gain.setValueAtTime(this.duck.gain.value,n),this.duck.gain.linearRampToValueAtTime(Math.max(.12,1-t),n+.02),this.duck.gain.linearRampToValueAtTime(1,n+e)}setBoost(t){if(this.boost=t,!this.engine)return;const e=this.ctx.currentTime;this.engine.osc.frequency.setTargetAtTime(48+t*36,e,.08),this.engine.filt.frequency.setTargetAtTime(220+t*520,e,.08),this.engine.g.gain.setTargetAtTime(.1+t*.08,e,.08),t>.5&&!this._whooshOn&&(this._whooshOn=!0,this._noiseBurst(e,.28,420,.8,.08)),t<.2&&(this._whooshOn=!1)}rumble(t=80,e=.4){try{const n=navigator.getGamepads?.()||[];for(const i of n){const r=i?.vibrationActuator;r?.playEffect&&r.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e*.6})}}catch{}}guns(t="primary",e={}){if(!this.enabled)return;const n=this.ctx.currentTime;if(t==="titan"){this._osc("sawtooth",64,n,.28,.14),this._osc("square",128,n,.18,.07),this._noiseBurst(n,.2,180,1.1,.1),this._duck(.28,.18);return}if(t==="missile"){this._osc("sawtooth",140,n,.16,.06),this._noiseBurst(n,.12,900,.8,.05);return}if(t==="mine"||t==="nova"){this._osc("triangle",380,n,.11,.045),this._osc("sine",620,n,.12,.035);return}if((e.needle||0)>0){const i=920+Math.min(6,e.needle)*48;this._osc("square",i,n,.055,.05),this._osc("sawtooth",380+e.needle*22,n,.08,.03);return}this._osc("square",480,n,.04,.04),this._noiseBurst(n,.05,2400,.7,.03)}mote(t=!1){if(!this.enabled)return;const e=this.ctx.currentTime;this._osc("sine",920,e,.09,.06),this._osc("sine",t?1460:1240,e+.04,.12,.05)}powerup(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",520,t,.16,.09),this._osc("triangle",780,t+.05,.18,.07),this._osc("sine",1170,t+.1,.22,.06)}collect(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",740,t,.1,.08),this._osc("sine",1180,t+.05,.14,.06)}coin(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("triangle",620,t,.08,.05),this._osc("sine",880,t+.03,.1,.06),this._osc("triangle",1320,t+.07,.12,.045)}buy(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",196,t,.14,.07),this._osc("triangle",392,t+.05,.16,.06),this._osc("sine",784,t+.1,.2,.05),this._osc("triangle",1175,t+.16,.18,.04)}gate(){if(!this.enabled)return;const t=this.ctx,e=t.currentTime,n=2.05,i=t.createOscillator(),r=t.createOscillator(),o=t.createOscillator();i.type="sine",r.type="triangle",o.type="sine",i.frequency.setValueAtTime(196,e),i.frequency.exponentialRampToValueAtTime(110,e+n),r.frequency.setValueAtTime(294,e),r.frequency.exponentialRampToValueAtTime(165,e+n),o.frequency.setValueAtTime(98,e),o.frequency.exponentialRampToValueAtTime(55,e+n);const a=t.createBiquadFilter();a.type="bandpass",a.Q.setValueAtTime(6.5,e),a.frequency.setValueAtTime(380,e),a.frequency.exponentialRampToValueAtTime(1650,e+.22),a.frequency.exponentialRampToValueAtTime(340,e+.55),a.frequency.exponentialRampToValueAtTime(1200,e+.92),a.frequency.exponentialRampToValueAtTime(280,e+1.28),a.frequency.exponentialRampToValueAtTime(820,e+1.64),a.frequency.exponentialRampToValueAtTime(200,e+n);const l=t.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.13,e+.05),l.gain.exponentialRampToValueAtTime(1e-4,e+n),i.connect(a),r.connect(a),a.connect(l),o.connect(l),l.connect(this.sfx),i.start(e),r.start(e),o.start(e),i.stop(e+n+.02),r.stop(e+n+.02),o.stop(e+n+.02),this._duck(.4,.5)}hit(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",70,t,.28,.2),this._osc("sawtooth",90,t,.18,.1),this._noiseBurst(t,.16,220,.9,.12),this._duck(.45,.2),this.rumble(120,.7)}explosion(t=!1){if(!this.enabled)return;const e=this.ctx.currentTime;this._osc("sine",t?48:64,e,t?.5:.28,t?.2:.12),this._osc("sawtooth",t?55:80,e,.22,.08),this._noiseBurst(e,t?.4:.22,t?160:280,.8,t?.14:.08),this._duck(t?.7:.32,t?.38:.16),t&&this.rumble(180,.85)}bomb(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",40,t,.55,.22),this._osc("triangle",90,t,.4,.1),this._noiseBurst(t,.45,140,.7,.16),this._duck(.8,.45),this.rumble(220,1)}boom(){this.explosion(!0)}}const Zc="aether-hangar",xr={spark:{title:"PARTICLE BLASTERS",blurb:"Forward guns. Every hull launches with these. Powerups thicken the volley — they never fan wide.",unlock:0},needle:{title:"NEEDLE LASERS",blurb:"Coherent lances under the wings. Bought once. The rift can charge them after that.",unlock:260},seeker:{title:"HOMING MISSILES",blurb:"Heat-seekers on the racks. They turn. You buy the rack before they exist.",unlock:400},shard:{title:"CRYSTAL SHARDS",blurb:"Splinter fire from the nose. Cheap, vicious, and locked until you pay for the cutter.",unlock:340},titan:{title:"TITAN CANNON",blurb:"A belly slab that hits like a door. The hull has to be rebuilt around it.",unlock:620},wing:{title:"WING FILAMENTS",blurb:"Angled guns on the tips. Without these, the blasters stay honest and forward.",unlock:480},helix:{title:"HELIX RIBBON",blurb:"Twinned oscillating streams. The coils have to be fitted before they sing.",unlock:460},drone:{title:"RIFT DRONES",blurb:"Orbiting guns that fly your formation. You purchase the pylons first.",unlock:540},mine:{title:"AETHER MINES",blurb:"Slow gifts left in the lane. The dispenser is a shipyard job.",unlock:380},shear:{title:"RIFT SHEAR",blurb:"Wide gold blades off the shoulders. Not a blaster. A cut.",unlock:500},spire:{title:"PIERCE SPIRE",blurb:"A nose spike that keeps going. Pierces. Costs like it looks.",unlock:680},nova:{title:"NOVA BURST",blurb:"A crown that coughs a radial bloom. Pretty. Mean. Expensive.",unlock:740},prism:{title:"PRISM SPLIT",blurb:"The bow learns to fan violet. Last luxury before the Sentinel.",unlock:800}};function ql(){return{gold:0,levels:ys()}}function tr(){try{const s=JSON.parse(localStorage.getItem(Zc)||"null");if(!s||typeof s!="object")return ql();const t=ys();for(const e of Ue){const n=Number(s.levels?.[e]);Number.isFinite(n)&&(t[e]=Math.max(0,Math.min(ye[e].max,n|0)))}return t.spark<1&&(t.spark=1),{gold:Math.max(0,Number(s.gold)||0),levels:t}}catch{return ql()}}function Jc(s){const t={gold:Math.max(0,s.gold|0),levels:{...ys(),...s.levels}};return t.levels.spark<1&&(t.levels.spark=1),localStorage.setItem(Zc,JSON.stringify(t)),t}function er(){return ya()}function jc(s){return Ue.filter(t=>(s[t]|0)>0)}function Yl(s,t={}){const e=ya();for(const n of Ue){const i=s[n]|0;if(i<=0){e[n]=0;continue}e[n]=Math.min(ye[n].max,i+(t[n]|0))}return e}function jg(s){return Ue.reduce((t,e)=>t+(s[e]|0),0)}function Qg(s,t){const e=xr[s];if(!e)return 0;const n=Math.max(1,t|0),i=.75+(e.unlock||120)/900;return Math.round((65+n*52)*(1+n*.2)*i)}function ia(s,t){const e=s[t]|0,n=ye[t].max;return e>=n?0:e<=0?xr[t]?.unlock||0:Qg(t,e)}function t_(s,t){const e=ia(s.levels,t);if(e<=0||s.gold<e)return{hangar:s,ok:!1,cost:e};const n={...s.levels,[t]:(s.levels[t]|0)+1};return{hangar:Jc({gold:s.gold-e,levels:n}),ok:!0,cost:e}}function $l(s,t){return t<=0?s:Jc({...s,gold:s.gold+(t|0)})}function e_(s,t,e){const n={...t},i=jc(s);let r=null,o=0,a=n._i||0;for(let l=0;l<e;l++){let c=!1;for(let h=0;h<i.length;h++){const u=i[(a+h)%i.length],f=(s[u]|0)+(n[u]|0);if(!(f>=ye[u].max)){n[u]=(n[u]|0)+1,a=(a+h+1)%i.length,o+=1,r=f+1>=ye[u].max?`${ye[u].tag} MAX`:`${ye[u].tag} UP`,c=!0;break}}if(!c)break}return n._i=a,{runBonus:n,toast:r,gained:o}}function n_(s,t){const e={...s};let n=Math.max(0,t|0);for(let i=Ue.length-1;i>=0&&n>0;i--){const r=Ue[i],o=e[r]|0,a=Math.min(o,n);e[r]=o-a,n-=a}return e}function po(s,t){let e=0,n=0;for(const i of jc(s)){const r=s[i]|0;e+=ye[i].max-r,n+=t[i]|0}return{cap:e,used:n,ratio:e<=0?1:n/e}}function i_(s,t,{superBoss:e=!1,finale:n=!1,mids:i=2}={}){const r=80+s*28+t*10,o=n?260:e?200:130,a=Math.max(0,i)*36;return{clear:r,boss:o,mid:a,total:r+o+a}}function s_(s,t){const e=s[t]|0,n=ye[t].max;return e>=n?"MAXED":e<=0?"INSTALL":`UPGRADE  ${e} → ${e+1}`}class r_{constructor(t){this.renderer=t,this.scene=new _a,this.scene.background=new Y("#07040f"),this.scene.fog=new ga("#07040f",14,42),this.camera=new He(34,1,.12,80),this.time=0,this._portrait=!1;const e=new pr(t);this.scene.environment=e.fromScene(new Gc,.08).texture,e.dispose(),this._buildBay(),this.craft=Xc(),this.craft.group.scale.setScalar(1.55),this.craft.group.position.set(0,.15,0),this.scene.add(this.craft.group),this.key=new Nc(16769690,2.4),this.key.position.set(4.5,6.5,3.2),this.fill=new Bi(6087167,18,22,2),this.fill.position.set(-4.2,1.6,2.4),this.rim=new Bi(16726996,16,20,2),this.rim.position.set(1.4,2.2,-5.2),this.floorLight=new _0(10217471,18,28,.7,.45,1),this.floorLight.position.set(0,8.5,2),this.floorLight.target.position.set(0,0,0),this.scene.add(this.key,this.fill,this.rim,this.floorLight,this.floorLight.target),this.scene.add(new Fc(1709104,.55)),this.composer=new zc(t),this.composer.addPass(new Hc(this.scene,this.camera)),this.bloom=new fi(new lt(1,1),.62,.55,.28),this.composer.addPass(this.bloom),this.composer.addPass(new Vc),this.resize(window.innerWidth,window.innerHeight),this.setLoadout({spark:1},null)}_buildBay(){const t=new Ln({color:788504,metalness:.88,roughness:.32,emissive:1181724,emissiveIntensity:.4}),e=new P(new xs(9.5,48),t);e.rotation.x=-Math.PI/2,e.position.y=-1.35,this.scene.add(e);const n=new P(new ie(4.4,.045,8,48),new qt({color:6087167,transparent:!0,opacity:.55}));n.rotation.x=Math.PI/2,n.position.y=-1.32,this.scene.add(n),this._ring=n;const i=n.clone();i.scale.setScalar(1.35),i.material=new qt({color:16765286,transparent:!0,opacity:.28}),this.scene.add(i),this._ring2=i;const r=new P(new Ht(11.5,11.5,10,32,1,!0),new Ln({color:591378,metalness:.7,roughness:.55,side:Ie,emissive:1706536,emissiveIntensity:.35}));r.position.y=2.2,this.scene.add(r);for(let l=0;l<8;l++){const c=l/8*Math.PI*2,h=new P(new st(.08,7.2,.08),new qt({color:l%2?6087167:16737512}));h.position.set(Math.cos(c)*10.6,2.1,Math.sin(c)*10.6),this.scene.add(h)}const o=new P(new vs(18,.55),new qt({color:16769690,transparent:!0,opacity:.35}));o.position.set(0,6.4,-4),o.rotation.x=.2,this.scene.add(o);const a=new P(new Ht(1.35,1.7,.28,24),new Ln({color:1445922,metalness:.9,roughness:.22,emissive:6087167,emissiveIntensity:.35}));a.position.y=-1.22,this.scene.add(a)}setLoadout(t,e=null){wa(this.craft,t,e)}resize(t,e){this._portrait=e>t*1.05,this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),this.composer.setSize(t,e),this.bloom.setSize(t,e)}update(t){this.time+=t;const e=this.time;if(this.craft.group.rotation.y+=t*.32,this.craft.rig.rotation.z=Math.sin(e*.7)*.045,this.craft.rig.rotation.x=Math.sin(e*.45)*.03,this.craft.group.position.y=.15+Math.sin(e*.9)*.08,this._ring&&(this._ring.rotation.z=e*.12),this._ring2&&(this._ring2.rotation.z=-e*.08),this.fill.intensity=16+Math.sin(e*1.4)*3,this.rim.intensity=14+Math.cos(e*1.1)*3,this.craft.exhausts)for(const n of this.craft.exhausts)n.scale.setScalar(.85+Math.sin(e*8+n.position.x)*.18);this._portrait?(this.camera.position.set(.2,2.35,11.2),this.camera.lookAt(0,.35,0)):(this.camera.position.set(-3.4,1.85,8.6),this.camera.lookAt(.85,.2,0))}render(){this.composer.render()}}class o_{constructor(t){this.canvas=t,this.state="title",this.clock=new Oc,this.input={keys:new Set,mouse:new lt(0,0),firing:!1},this._touch={id:null,x:0,y:0,held:!1,steerX:0,steerY:0},this._mouseFromTouch=0,this.audio=new Jg,this.view=localStorage.getItem("aether-view")||"scroll",["chase","cockpit","scroll"].includes(this.view)||(this.view="scroll"),this._hasRun=!1,this.gateFx=0,this._viewSnap=1,this._camLook=new L,this._camUp=new L(0,1,0),this._chaseX=0,this.stage=new Wl,this.progress=uo(),this.hangar=tr(),this.runBonus=er(),this.campaignIndex=this.progress.nextC||0,this.levelIndex=this.progress.nextL||0,this._runLive=!1,this._resumeTo="play",this._mapCursor={c:this.campaignIndex,l:this.levelIndex},this.hitStop=0,this.kick=new L,this.kickAmt=0,this.bombs=3,this.bombMax=5,this.bombCd=0,this._padPrev={fire:!1,bomb:!1,start:!1,y:0},this._setupRenderer(),this._setupScene(),this._setupPost(),this._setupWorld(),this.shipyard=new r_(this.renderer),this._hangarCursor=0,this._hangarFrom="map",this._bindInput(),this._bindUI(),this.reset(!1),this._onResize(),window.addEventListener("resize",()=>this._onResize()),this.loop=this.loop.bind(this)}_setupRenderer(){this.renderer=new Zm({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ze,this.renderer.toneMapping=ra,this.renderer.toneMappingExposure=.92,this.renderer.autoClear=!0}_setupScene(){this.scene=new _a,this.scene.background=new Y("#05010d"),this.camera=new He(62,window.innerWidth/window.innerHeight,.08,1400);const t=new pr(this.renderer);this.scene.environment=t.fromScene(new Gc,.04).texture,t.dispose()}_setupPost(){const t=new lt(window.innerWidth,window.innerHeight);this.composer=new zc(this.renderer),this.composer.addPass(new Hc(this.scene,this.camera)),this.bloom=new fi(t,.48,.5,.42),this.composer.addPass(this.bloom),this.fx=new kc(W0),this.fx.uniforms.uSunPos.value=new lt(.72,.68),this.fx.uniforms.uFlare.value=1,this.fx.uniforms.uCockpit.value=0,this.fx.uniforms.uGate.value=0,this.fx.uniforms.uKick.value=0,this.fx.uniforms.uResolution.value=t.clone(),this.composer.addPass(this.fx),this.composer.addPass(new Vc)}_setupWorld(){this.path=new X0,this.world=new Y0(this.scene),this.world.attachRibbon(this.path.rebuildRibbon()),this.entities=new Zg(this.scene);const t=Xc();this.shipCraft=t,this.ship=t.group,this.shipRig=t.rig,this.exhausts=t.exhausts,this.shipLights=t.lights,this.shipCore=t.core,this.muzzle=t.muzzle,this.muzzleSpike=t.muzzleSpike,this.muzzleFlash=0,this.scene.add(this.ship),this.trail=new fg(this.scene),this.traces=[];for(let e=0;e<4;e++){const n=new P(new mt(.42,10,8),new qt({color:16737512})),i=new P(new mt(.85,10,8),new qt({color:16737512,transparent:!0,opacity:.32,blending:Me,depthWrite:!1}));n.add(i),n.visible=!1,this.scene.add(n),this.traces.push(n)}}_bindInput(){this.canvas.tabIndex=0;const t=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Numpad8","Numpad4","Numpad6","Numpad2","Space"]),e=r=>{if(r.code==="Escape"){r.preventDefault(),r.repeat||this._onEscape();return}if(t.has(r.code)&&r.preventDefault(),this._setKey(r,!0),this.state==="playing"&&!r.repeat&&this._releaseUiFocus(),this.state==="hangar"){this._onHangarKey(r);return}r.code==="KeyP"&&this.state==="playing"&&this.pause(),(r.code==="KeyB"||r.code==="KeyC")&&this.state==="playing"&&!r.repeat&&this._tryBomb(),(r.code==="Digit1"||r.code==="Numpad1")&&this.setView("chase"),(r.code==="Digit2"||r.code==="Numpad2")&&this.setView("cockpit"),(r.code==="Digit3"||r.code==="Numpad3")&&this.setView("scroll"),r.code==="KeyV"&&this.cycleView()},n=r=>{t.has(r.code)&&r.preventDefault(),this._setKey(r,!1)};window.addEventListener("keydown",e,!0),window.addEventListener("keyup",n,!0),window.addEventListener("blur",()=>this._clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this._clearInput()});const i={passive:!1,capture:!0};document.addEventListener("pointerdown",r=>this._onPointerDown(r),i),document.addEventListener("pointermove",r=>this._onPointerMove(r),i),document.addEventListener("pointerup",r=>this._onPointerUp(r),i),document.addEventListener("pointercancel",r=>this._onPointerUp(r),i),window.PointerEvent||(document.addEventListener("touchstart",r=>this._onTouchStart(r),i),document.addEventListener("touchmove",r=>this._onTouchMove(r),i),document.addEventListener("touchend",r=>this._onTouchEnd(r),i),document.addEventListener("touchcancel",r=>this._onTouchEnd(r),i))}_isBlockingUi(t){if(!(t instanceof Element))return!1;const e=t.closest(".screen");return e?.classList.contains("hidden")?!1:e&&!e.classList.contains("hidden")?!0:!!t.closest("button, a, input, textarea, label")}_onPointerDown(t){if(this.state==="playing"&&t.isPrimary!==!1&&!(t.pointerType==="mouse"&&t.button!==0)&&!this._isBlockingUi(t.target)){t.preventDefault(),this._touch.held=!0,this._touch.id=t.pointerId,this._touch.x=t.clientX,this._touch.y=t.clientY,this._touch.steerX=0,this._touch.steerY=0,this.input.firing=!0,this.slide.set(0,0),this.input.mouse.x=t.clientX/window.innerWidth*2-1,this.input.mouse.y=-(t.clientY/window.innerHeight)*2-1;try{this.canvas.setPointerCapture(t.pointerId)}catch{}this.audio.resume?.()}}_onPointerMove(t){if(!this._touch.held||t.pointerId!==this._touch.id)return;t.preventDefault();const e=t.clientX-this._touch.x,n=t.clientY-this._touch.y;this._touch.x=t.clientX,this._touch.y=t.clientY,this._applyTouchDrag(e,n),this.input.mouse.x=t.clientX/window.innerWidth*2-1,this.input.mouse.y=-(t.clientY/window.innerHeight)*2-1}_onPointerUp(t){!this._touch.held||t.pointerId!==this._touch.id||this._endTouch()}_onTouchStart(t){const e=t.changedTouches?.[0];e&&this._onPointerDown({isPrimary:!0,pointerType:"touch",button:0,pointerId:e.identifier,clientX:e.clientX,clientY:e.clientY,target:t.target,preventDefault:()=>t.preventDefault()})}_onTouchMove(t){const e=t.touches?.[0]||t.changedTouches?.[0];e&&this._onPointerMove({pointerId:this._touch.id,clientX:e.clientX,clientY:e.clientY,preventDefault:()=>t.preventDefault()})}_onTouchEnd(t){this._onPointerUp({pointerId:this._touch.id}),t.preventDefault?.()}_applyTouchDrag(t,e){const n=this._laneLimit(),i=this._depthLimit(),r=Math.max(1,n*2),o=Math.max(1,i.max-i.min),a=Math.max(1,window.innerWidth),l=Math.max(1,window.innerHeight);this.offset.x=Ke(this.offset.x+t/a*r,-n,n),this.holdY=Ke(this.holdY+-e/l*o,i.min,i.max),this._touch.steerX=Ke(t/10,-1,1),this._touch.steerY=Ke(-e/10,-1,1)}_endTouch(){this._touch.held=!1,this._touch.id=null,this._touch.steerX=0,this._touch.steerY=0,this.input.firing=!1}_bindUI(){this.ui={hud:document.getElementById("hud"),score:document.getElementById("score"),combo:document.getElementById("combo"),depth:document.getElementById("depth"),threat:document.getElementById("threat"),health:document.getElementById("health-fill"),boost:document.getElementById("boost-fill"),riftFill:document.getElementById("rift-fill"),riftName:document.getElementById("rift-name"),riftWrap:document.querySelector(".rift-wrap"),toast:document.getElementById("toast"),title:document.getElementById("title-screen"),pause:document.getElementById("pause-screen"),dead:document.getElementById("dead-screen"),stats:document.getElementById("final-stats"),resultKicker:document.getElementById("result-kicker"),resultTitle:document.getElementById("result-title"),resultRank:document.getElementById("result-rank"),resultBoard:document.getElementById("result-board"),titleScores:document.getElementById("title-scores"),bombs:document.getElementById("bomb-pips"),lives:document.getElementById("life-pips"),continue:document.getElementById("continue-screen"),continueLeft:document.getElementById("continue-left"),map:document.getElementById("map-screen"),mapGrid:document.getElementById("campaign-map"),mapKicker:document.getElementById("map-kicker"),mapTitle:document.getElementById("map-title"),mapTag:document.getElementById("map-tag"),deployBtn:document.getElementById("deploy-btn"),mapMenuBtn:document.getElementById("map-menu-btn"),hangarMapBtn:document.getElementById("hangar-map-btn"),hangar:document.getElementById("hangar-screen"),hangarList:document.getElementById("hangar-list"),hangarGold:document.getElementById("hangar-gold"),hangarBuy:document.getElementById("hangar-buy"),hangarDone:document.getElementById("hangar-done"),hangarName:document.getElementById("hangar-item-name"),hangarBlurb:document.getElementById("hangar-item-blurb"),hangarCost:document.getElementById("hangar-item-cost"),hangarKicker:document.getElementById("hangar-kicker"),hangarTitle:document.getElementById("hangar-title"),hangarHint:document.getElementById("hangar-hint"),hangarPayout:document.getElementById("hangar-payout"),gold:document.getElementById("gold"),bossMeter:document.getElementById("boss-meter"),bossFill:document.getElementById("boss-fill"),bossName:document.getElementById("boss-name"),startBtn:document.getElementById("start-btn"),resumeTitleBtn:document.getElementById("resume-title-btn"),viewBtns:[...document.querySelectorAll("[data-view]")],pauseBtn:document.getElementById("pause-btn"),bombBtn:document.getElementById("bomb-btn")},this.ui.startBtn.addEventListener("click",()=>this.startPlay()),this.ui.resumeTitleBtn.addEventListener("click",()=>this.resumeFromMenu()),document.getElementById("resume-btn").addEventListener("click",()=>this.resume()),document.getElementById("menu-btn").addEventListener("click",()=>this.goToMenu({resumeable:!0})),document.getElementById("retry-btn").addEventListener("click",()=>this.startPlay()),this.ui.deployBtn?.addEventListener("click",()=>this._deployLevel()),this.ui.mapMenuBtn?.addEventListener("click",()=>this.goToMenu({resumeable:this._runLive})),this.ui.hangarMapBtn?.addEventListener("click",()=>this._openHangar({from:"map"})),this.ui.hangarBuy?.addEventListener("click",()=>this._hangarBuy()),this.ui.hangarDone?.addEventListener("click",()=>this._hangarDone()),this.ui.hangarList?.addEventListener("click",e=>{const n=e.target.closest("[data-mod]");n&&(this._hangarCursor=Ue.indexOf(n.dataset.mod),this._hangarCursor<0&&(this._hangarCursor=0),this._renderHangar())}),document.getElementById("continue-yes")?.addEventListener("click",()=>this._acceptContinue()),document.getElementById("continue-no")?.addEventListener("click",()=>this._declineContinue()),this.ui.pauseBtn?.addEventListener("click",()=>{this.state==="playing"?this.pause():this.state==="paused"&&this.resume()}),this.ui.bombBtn?.addEventListener("click",()=>this._tryBomb());const t=[this.ui.startBtn,this.ui.resumeTitleBtn,document.getElementById("resume-btn"),document.getElementById("menu-btn"),document.getElementById("retry-btn"),document.getElementById("continue-yes"),document.getElementById("continue-no"),this.ui.deployBtn,this.ui.mapMenuBtn,this.ui.hangarMapBtn,this.ui.hangarBuy,this.ui.hangarDone,this.ui.pauseBtn,this.ui.bombBtn].filter(Boolean);for(const e of t)e.addEventListener("mousedown",n=>n.stopPropagation()),e.addEventListener("pointerdown",n=>n.stopPropagation()),e.addEventListener("click",()=>this._releaseUiFocus());for(const e of this.ui.viewBtns)e.addEventListener("click",()=>{this.setView(e.dataset.view),this._releaseUiFocus()}),e.addEventListener("mousedown",n=>n.stopPropagation()),e.addEventListener("pointerdown",n=>n.stopPropagation());this._syncViewHud(),this._syncTitleActions(),this._renderScoreboard(this.ui.titleScores,na()),this._syncBombs(),this.ui.mapGrid?.addEventListener("click",e=>{const n=e.target.closest("[data-c]");if(!n)return;const i=Number(n.dataset.c),r=Number(n.dataset.l);this._nodeLocked(i,r)||(this._mapCursor={c:i,l:r},this._renderMap())})}_syncTitleActions(){!this.ui?.resumeTitleBtn||!this.ui?.startBtn||(this.ui.resumeTitleBtn.hidden=!this._hasRun,this.ui.startBtn.textContent=this._hasRun?"NEW RUN":"ENGAGE")}_setKey(t,e){const n=[t.code],i=(t.key||"").toLowerCase();i.length===1&&n.push(i);for(const r of n)e?this.input.keys.add(r):this.input.keys.delete(r)}_releaseUiFocus(){const t=document.activeElement;t&&t!==document.body&&t!==this.canvas&&typeof t.blur=="function"&&t.blur(),this.canvas?.focus({preventScroll:!0})}_clearInput(){this.input.keys.clear(),this.input.firing=!1,this.slide?.set(0,0),this._endTouch?.()}_onEscape(){if(this.state==="hangar"){this._hangarDone();return}if(this.state==="map"){this.goToMenu({resumeable:this._runLive});return}if(this.state==="playing"||this.state==="paused"){this.goToMenu({resumeable:!0});return}if(this.state==="title"&&this._hasRun){this.resumeFromMenu();return}this.state==="dead"&&this.goToMenu({resumeable:!1}),this.state==="continue"&&this._declineContinue()}goToMenu({resumeable:t=!1}={}){this._clearInput(),this._hasRun=t,this._resumeTo=this.state==="map"?"map":"play",this.state="title",this.audio.setPaused(!0),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.title.classList.remove("hidden"),this._syncTitleActions(),this._renderScoreboard(this.ui.titleScores,na()),t||(this._runLive=!1,this.reset(!0))}resumeFromMenu(){if(this._hasRun){if(this._resumeTo==="map"){this._openMap({keepRun:!0});return}this._clearInput(),this.state="playing",this.ui.title.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.hud.classList.add("visible"),this.audio.setPaused(!1),this.clock.getDelta(),this._releaseUiFocus()}}cycleView(){const t=["chase","cockpit","scroll"],e=t.indexOf(this.view);this.setView(t[(e+1)%t.length])}setView(t){if(!["chase","cockpit","scroll"].includes(t))return;if(this.view===t&&this._viewSnap===0){this._syncViewHud();return}this.view=t,this._viewSnap=1,localStorage.setItem("aether-view",t),this._syncViewHud();const e={chase:"CHASE CAM",cockpit:"COCKPIT",scroll:"SCROLL CAM"};(this.state==="playing"||this.state==="paused")&&this.toast(e[t])}_syncViewHud(){if(this.ui?.viewBtns)for(const t of this.ui.viewBtns)t.classList.toggle("active",t.dataset.view===this.view)}_activeView(){return this.state==="title"?"chase":this.view}_applyCamera(t,e,n,i,r){const o=this._activeView();this.ship.visible=o!=="cockpit";const a=r||n,l=i||e,c=new L,h=new L,u=new L;let f=62;const p=this._viewSnap>.02;if(o==="cockpit")f=78,c.copy(this.ship.position).addScaledVector(l.tangent,1.85).addScaledVector(a.normal,.72),h.copy(this.ship.position).addScaledVector(l.tangent,30),u.copy(a.normal);else if(o==="scroll"){f=38;const m=this.path.sample(this.traveled+22),d=Dn(m.tangent);c.copy(m.pos).addScaledVector(d.normal,168),h.copy(m.pos),u.copy(m.tangent)}else{f=62;const m=this.path.sample(this.traveled+this.holdY+6),d=Dn(m.tangent),E=p?14:2.45;this._chaseX+=(this.offset.x-this._chaseX)*(1-Math.exp(-t*E)),c.copy(m.pos).addScaledVector(m.tangent,-32).addScaledVector(d.normal,14).addScaledVector(d.binormal,this._chaseX),h.copy(m.pos).addScaledVector(m.tangent,16).addScaledVector(d.binormal,this._chaseX),u.copy(d.normal)}const g=p?16:o==="scroll"?12:o==="chase"?7.5:5,_=p?14:o==="scroll"?11:o==="chase"?6.5:5.5;this.camera.position.lerp(c,1-Math.exp(-t*g)),this.camera.position.addScaledVector(this.kick,this.kickAmt),this._camLook.lerp(h,1-Math.exp(-t*_)),this._camUp.lerp(u,1-Math.exp(-t*_)),this.camera.up.copy(this._camUp),this.camera.lookAt(this._camLook),this.camera.fov=Wn(this.camera.fov,f,1-Math.exp(-t*7)),this.camera.updateProjectionMatrix(),this._viewSnap=Math.max(0,this._viewSnap-t*2.4)}reset(t=!0){this._resetRun(),this._resetLevel(t)}_resetRun(){this.health=1,this.lives=3,this.continues=2,this.rank=0,this.step=0,this.charge=0,this.hangar=tr(),this.runBonus=er(),this._applyLoadout(),this.gunCd={primary:0,missile:0,titan:0,mine:0,nova:0},this.score=0,this.combo=1,this.comboTimer=0,this._lastCombo=1,this.kills=0,this.maxCombo=1,this.maxStep=0,this.nearMisses=0,this.bombsUsed=0,this.bombs=3,this.best=Number(localStorage.getItem("aether-best")||0),this.campaignIndex=this.progress?.nextC||0,this.levelIndex=this.progress?.nextL||0}_resetLevel(t=!0){if(this.traveled=40,this.speed=28,this.throttle=.55,this.boost=1,this.health=1,this.spawnIn=.65,this.hurt=0,this.invuln=2.2,this.gateFx=0,this.fireCd=0,this._blockWarn=!1,this.offset=new lt(0,0),this.holdY=8,this._chaseX=0,this.steer=new lt(0,0),this.slide=new lt(0,0),this._ribbonAt=-1,this.hitStop=0,this.kick.set(0,0,0),this.kickAmt=0,this.bombCd=0,this._chapterAt=-1,this.muzzleFlash=0,this._midsThisLevel=0,this.hangar=tr(),this.runBonus=er(),this._applyLoadout(),this.traces)for(const r of this.traces)r.visible=!1;const e=Qs(this.campaignIndex,this.levelIndex),n=e?.lv.script,i=e?.lv.length||1400;this.stage=new Wl(n,i),this._chapterId=e?.lv.world||"default",this.entities.reset(),t&&(this.world.layoutFromPath(this.path,this.traveled,this._laneLimit()),this.world.attachRibbon(this._localRibbon())),this.world.setChapter(this._chapterId),this.audio.setChapter(this._chapterId),this._syncBombs(),this._syncLives()}_localRibbon(){const t=[];for(let n=-6;n<36;n++)t.push(this.path.sample(Math.max(8,this.traveled+n*18)).pos.clone());const e=new _r(t,!1,"catmullrom",.5);return new wr(e,180,1.28,12,!1)}async startPlay(){await this.audio.resume(),this._runLive=!1,this._hasRun=!1,this.progress=uo(),this._mapCursor={c:this.progress.nextC||0,l:this.progress.nextL||0},this._openMap({fromTitle:!0})}pause(){this.state="paused",this.audio.setPaused(!0),this.ui.pause.classList.remove("hidden")}resume(){this.state="playing",this.audio.setPaused(!1),this.ui.pause.classList.add("hidden"),this.clock.getDelta(),this._releaseUiFocus()}die(){if(this.audio.sting("death"),this.entities.explode(this.ship.position.clone(),16726996),this.lives-=1,this._syncLives(),this.lives>0){this._respawn();return}if(this.continues>0){this._showContinue();return}this._endRun(!1)}_respawn(){this.health=1,this.hurt=0,this.invuln=2.2,this.spawnIn=.65,this.offset.x=0,this.holdY=8,this.slide.set(0,0),this.muzzleFlash=0,this.audio.sting("life"),this._syncLives()}_showContinue(){this.state="continue",this.audio.setPaused(!0),this.audio.sting("continue"),this.ui.continueLeft&&(this.ui.continueLeft.textContent=`${this.continues} CREDIT${this.continues===1?"":"S"} REMAIN`),this.ui.continue?.classList.remove("hidden")}_acceptContinue(){this.state!=="continue"||this.continues<=0||(this.continues-=1,this.lives=3,this.ui.continue?.classList.add("hidden"),this.state="playing",this.audio.setPaused(!1),this._respawn(),this.clock.getDelta(),this._releaseUiFocus())}_declineContinue(){this.ui.continue&&this.ui.continue.classList.add("hidden"),this._endRun(!1)}_endRun(t){this.state="dead",this._hasRun=!1,this._runLive=!1,this._syncTitleActions(),this.audio.setPaused(!1),this.audio.explosion(!0),this.best=Math.max(this.best,this.score),localStorage.setItem("aether-best",String(this.best));const e=bg({score:this.score,kills:this.kills,step:this.maxStep||this.step,maxCombo:this.maxCombo,victory:t,nearMisses:this.nearMisses,bombsUsed:this.bombsUsed}),n=Eg({score:this.score,rank:e,kills:this.kills,depth:Math.floor(this.traveled/10),victory:t,at:Date.now()});this.ui.hud.classList.remove("visible"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.dead.classList.remove("hidden");const i=Qs(this.campaignIndex,this.levelIndex),r=i?.lv.boss==="finale";this.ui.resultKicker&&(this.ui.resultKicker.textContent=t?r?"RIFT CLEARED":"SECTOR CLEAR":"SIGNAL LOST"),this.ui.resultTitle&&(this.ui.resultTitle.textContent=t?r?"SENTINEL FALLS":`${i?.lv.name||"SECTOR"} DONE`:"HULL BREACH"),this.ui.resultRank&&(this.ui.resultRank.textContent=e),this.ui.stats.textContent=`SCORE ${this.score}   BEST ${this.best}   KILLS ${this.kills}   GOLD ${this.hangar?.gold||0}   BOMBS ${this.bombsUsed}`,this._renderScoreboard(this.ui.resultBoard,n,this.score)}toast(t){this.ui.toast.textContent=t,this.ui.toast.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.ui.toast.classList.remove("show"),1200)}_currentLevel(){return Qs(this.campaignIndex,this.levelIndex)}_nodeLocked(t,e){const n=`${t}-${e}`;return!(this.progress.cleared.includes(n)||t===(this.progress.nextC||0)&&e===(this.progress.nextL||0)||this._runLive&&t===this._mapCursor.c&&e===this._mapCursor.l)}_openMap({fromTitle:t=!1,keepRun:e=!1}={}){this._clearInput(),this.state="map",this.audio.setPaused(!0),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.map?.classList.remove("hidden"),this.progress=uo(),!e&&!this._runLive&&(this._mapCursor={c:this.progress.nextC||0,l:this.progress.nextL||0}),this._renderMap(),this._syncTitleActions(),this._releaseUiFocus(),t&&this.clock.getDelta()}_renderMap(){const t=this.ui.mapGrid;if(!t)return;const e=this._mapCursor,n=Qs(e.c,e.l);if(this.ui.mapKicker&&(this.ui.mapKicker.textContent=n?.camp.kicker||"CAMPAIGN MAP"),this.ui.mapTitle&&(this.ui.mapTitle.textContent=n?.lv.name||"THE AETHER RIFT"),this.ui.mapTag&&(this.ui.mapTag.textContent=n?.camp.blurb||""),t.innerHTML=qi.map((i,r)=>{const o=r===e.c,a=i.levels.map((l,c)=>{const h=`${r}-${c}`,u=this.progress.cleared.includes(h),f=r===e.c&&c===e.l,p=this._nodeLocked(r,c),g=c===i.levels.length-1,_=l.boss==="finale"?"finale boss":g?"boss":"",m=l.boss==="finale"?"✦":g?"★":String(c+1);return`<button type="button" class="map-node ${_} ${u?"cleared":""} ${f?"current":""} ${p?"locked":""}" data-c="${r}" data-l="${c}" ${p?"disabled":""} aria-label="${l.id} ${l.name}">${m}</button>`}).join('<div class="map-rail"></div>');return`<div class="map-campaign${o?" current":""}"><div class="map-camp-meta"><span class="kicker">${i.kicker}</span><span class="name">${i.name}</span></div><div class="map-nodes">${a}</div></div>`}).join(""),this.ui.deployBtn){const i=n?.lv;this.ui.deployBtn.textContent=i?`DEPLOY ${i.id}`:"DEPLOY"}}_openHangar({from:t="map",payout:e=null,slot:n=null}={}){this._clearInput(),this._hangarFrom=t,this.state="hangar",this.hangar=tr(),this.audio.setPaused(!1),this.audio.setIntensity(.16),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.hangar?.classList.remove("hidden"),this.ui.hangarKicker&&(this.ui.hangarKicker.textContent=t==="win"?"CAMPAIGN COMPLETE":t==="clear"?"SECTOR CLEAR":"DRYDOCK"),this.ui.hangarTitle&&(this.ui.hangarTitle.textContent=t==="win"?"THE RIFT HOLDS":"SHIPYARD"),this.ui.hangarPayout&&(this.ui.hangarPayout.textContent=e?`CLEAR ₡${e.clear}   BOSS ₡${e.boss}   MINIS ₡${e.mid}   BANKED ₡${e.total}`:""),this.ui.hangarHint&&n&&t!=="map"?this.ui.hangarHint.textContent=`${n.lv.id} ${n.lv.name} is done. Spend it. The next hull starts with what you buy here.`:this.ui.hangarHint&&(this.ui.hangarHint.textContent="Preview a system on the hull. Install it. Powerups in the rift only charge what you bought."),this.ui.hangarDone&&(this.ui.hangarDone.textContent=t==="win"?"RESULTS":t==="clear"?"CAMPAIGN MAP":"RETURN"),this._hangarCursor=Math.max(0,Math.min(Ue.length-1,this._hangarCursor||0)),this._renderHangar(),this.clock.getDelta()}_hangarSelected(){return Ue[this._hangarCursor]||"spark"}_renderHangar(){const t=this._hangarSelected(),e=this.hangar.levels,n=(e[t]|0)>0?null:t;this.shipyard.setLoadout(Yl(e,er()),n),this.ui.hangarGold&&(this.ui.hangarGold.textContent=String(this.hangar.gold)),this.ui.hangarList&&(this.ui.hangarList.innerHTML=Ue.map((c,h)=>{const u=e[c]|0,f=ye[c].max,p=ia(e,c),g=h===this._hangarCursor,_=u<=0,m=u>=f,d=Array.from({length:f},(w,v)=>`<span class="pip${v<u?" on":""}${g&&_&&v===0?" ghost":""}"></span>`).join(""),E=m?"MAX":_?`₡${p}`:`${u}/${f}  ₡${p}`;return`<button type="button" class="hangar-row${g?" selected":""}${_?" locked":""}${m?" maxed":""}" data-mod="${c}" role="option" aria-selected="${g}"><span><strong>${xr[c].title}</strong><div class="pips">${d}</div></span><span class="meta">${E}</span></button>`}).join(""),this.ui.hangarList.querySelector(".selected")?.scrollIntoView({block:"nearest"}));const i=xr[t],r=e[t]|0,o=ia(e,t),a=o>0&&this.hangar.gold<o;this.ui.hangarName&&(this.ui.hangarName.textContent=i.title),this.ui.hangarBlurb&&(this.ui.hangarBlurb.textContent=r<=0?`Not fitted. ${i.blurb}`:r>=ye[t].max?`Mark ${r}. The bay is glowing. ${i.blurb}`:`Mark ${r}. ${i.blurb}`),this.ui.hangarCost&&(this.ui.hangarCost.classList.toggle("poor",a),this.ui.hangarCost.textContent=o<=0?"SYSTEM MAXED":a?`₡${o}  —  NOT ENOUGH`:`₡${o}`),this.ui.hangarBuy&&(this.ui.hangarBuy.textContent=s_(e,t),this.ui.hangarBuy.disabled=o<=0||a)}_hangarMove(t){const e=Ue.length;this._hangarCursor=(this._hangarCursor+t+e)%e,this._renderHangar()}_hangarBuy(){const t=this._hangarSelected(),e=t_(this.hangar,t);if(this.hangar=e.hangar,!e.ok){this.audio.hit?.();return}this.audio.buy(),this._applyLoadout(),this._renderHangar()}_hangarDone(){if(this.ui.hangar?.classList.add("hidden"),this._hangarFrom==="win"){this.win();return}this._openMap({keepRun:this._runLive})}_onHangarKey(t){(t.code==="ArrowUp"||t.code==="KeyW"||t.code==="Numpad8")&&(t.preventDefault(),this._hangarMove(-1)),(t.code==="ArrowDown"||t.code==="KeyS"||t.code==="Numpad2")&&(t.preventDefault(),this._hangarMove(1)),(t.code==="Enter"||t.code==="Space")&&!t.repeat&&(t.preventDefault(),this._hangarBuy())}async _deployLevel(){const t=this._mapCursor.c,e=this._mapCursor.l;if(this._nodeLocked(t,e))return;await this.audio.resume();const n=this._runLive;this.campaignIndex=t,this.levelIndex=e,n||(this._resetRun(),this.campaignIndex=t,this.levelIndex=e),this._resetLevel(!0),this._runLive=!0,this._hasRun=!0,this._resumeTo="play",this.state="playing",this.ui.map?.classList.add("hidden"),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.hud.classList.add("visible"),this._viewSnap=1,this.audio.setPaused(!1),this.clock.getDelta(),this._releaseUiFocus();const i=this._currentLevel();i&&this.toast(`${i.lv.id} — ${i.lv.name}`)}_clearLevel(){if(this.state!=="playing")return;this.stage.cleared=!0;const t=this._currentLevel(),e=this.campaignIndex,n=this.levelIndex;this.progress=_g(vg(this.progress,e,n));const i=Yc(e,n);i&&(this.campaignIndex=i.ci,this.levelIndex=i.li,this._mapCursor={c:i.ci,l:i.li}),this.audio.sting("chapter");const r=i_(e,n,{superBoss:t?.lv.chapters?.some(o=>/SUPER/.test(o.toast||"")),finale:t?.lv.boss==="finale",mids:this._midsThisLevel||2});this.hangar=$l(this.hangar,r.total),this._openHangar({from:i?"clear":"win",payout:r,slot:t})}win(){this._endRun(!0)}start(){requestAnimationFrame(this.loop)}loop(){requestAnimationFrame(this.loop);const t=Math.min(this.clock.getDelta(),.05);if(this._pollPad(),this.audio.tick(),this.state==="paused"||this.state==="dead"||this.state==="continue"||this.state==="map"||this.state==="hangar"||this.state==="title"&&this._hasRun){if(this.state==="hangar"){this.shipyard.update(t),this.shipyard.render();return}this._render();return}if(this.state==="playing"&&this.hitStop>0){this.hitStop-=t,this._render();return}this.update(t),this._render()}update(t){const e=this.state!=="playing",n=this._padState(),i=this.state==="playing"&&(this.input.keys.has("ShiftLeft")||this.input.keys.has("ShiftRight")||n.boost);let r=0;this.state==="playing"&&(i&&this.boost>.05?(r=1,this.boost=Math.max(0,this.boost-t*.32)):this.boost=Math.min(1,this.boost+t*.1)),this.kickAmt=Math.max(0,this.kickAmt-t*9),this.bombCd=Math.max(0,this.bombCd-t);const o=e?16:26+r*22+Math.min(this.traveled/2800,8);this.speed=Wn(this.speed,o,1-Math.exp(-t*2.4)),this.traveled+=this.speed*t,this.path.ensure(this.traveled+400),Math.floor(this.traveled/90)!==this._ribbonAt&&(this._ribbonAt=Math.floor(this.traveled/90),this.world.attachRibbon(this._localRibbon()));const a=this.path.sample(this.traveled),l=Dn(a.tangent);if(this.state==="playing"){const y=this._laneLimit(),A=this._depthLimit();if(this._touch.held){this.slide.set(0,0);const M=Math.exp(-t*12);this._touch.steerX*=M,this._touch.steerY*=M,this.steer.set(this._touch.steerX,this._touch.steerY)}else{let M=this._axisHeld(["KeyA","ArrowLeft","Numpad4","a"],["KeyD","ArrowRight","Numpad6","d"]),x=this._axisHeld(["KeyS","ArrowDown","Numpad2","s"],["KeyW","ArrowUp","Numpad8","w"]);Math.abs(n.x)>Math.abs(M)&&(M=n.x),Math.abs(n.y)>Math.abs(x)&&(x=n.y),this._applySlide(M,x,t),this.offset.x=Ke(this.offset.x+this.slide.x*t,-y,y),this.holdY=Ke(this.holdY+this.slide.y*t,A.min,A.max),this.offset.x<=-y&&this.slide.x<0&&(this.slide.x=0),this.offset.x>=y&&this.slide.x>0&&(this.slide.x=0),this.holdY<=A.min&&this.slide.y<0&&(this.slide.y=0),this.holdY>=A.max&&this.slide.y>0&&(this.slide.y=0),this.steer.set(M,x)}this.offset.x=Ke(this.offset.x,-y,y),this.holdY=Ke(this.holdY,A.min,A.max),this.offset.y=0}else this.slide.set(0,0),this.offset.x=Math.sin(this.clock.elapsedTime*.35)*this._laneLimit()*.42,this.holdY=8,this.steer.set(0,0);const c=hs(this.path,this.traveled+this.holdY,this.offset.x,.35),h=c.sample,u=c.frame;if(this.ship.position.copy(c.pos),this.ship.up.copy(u.normal),this.ship.lookAt(this.ship.position.clone().add(h.tangent)),this.shipRig){const y=1-Math.exp(-t*9);this.shipRig.rotation.z=Wn(this.shipRig.rotation.z,-this.steer.x*.35,y),this.shipRig.rotation.x=Wn(this.shipRig.rotation.x,this.steer.y*.12,y);const A=this.invuln>0&&Math.sin(this.clock.elapsedTime*28)<0;this.shipRig.visible=!A}if(this.spawnIn>0){this.spawnIn=Math.max(0,this.spawnIn-t);const y=1-this.spawnIn/.65,A=1-(1-y)*(1-y);this.ship.scale.setScalar(3.1*Math.max(.04,A))}else this.ship.scale.setScalar(3.1);this._applyCamera(t,a,l,h,u);const f=r,p=this.state==="playing"&&(this.input.firing||this.input.keys.has("Space")||n.fire);for(const y of this.exhausts){const A=1+f*.8+(p?.22:0)+this.muzzleFlash*.35;y.scale.setScalar(A),y.material.color.set(f>.2?16765286:10217471)}this.muzzleFlash=Math.max(0,this.muzzleFlash-t*8),this.muzzle&&(this.muzzle.material.opacity=this.muzzleFlash*.9,this.muzzle.scale.setScalar(.7+this.muzzleFlash*1.6)),this.muzzleSpike&&(this.muzzleSpike.material.opacity=this.muzzleFlash*.7,this.muzzleSpike.scale.set(1,1,.6+this.muzzleFlash*1.8));for(const y of this.shipLights)y.intensity=3.2+f*3;this.trail.push(this.ship.position.clone().addScaledVector(h.tangent,-1.4),f),this.audio.setBoost(f),this.world.update(t,this.camera,this.traveled),this.world.recycleCrystals(this.path,this.traveled,this._laneLimit());const g=1+this.traveled/900;this.entities.laneLimit=this._laneLimit(),this.entities.spawnAhead(this.path,this.traveled),this._runStage(),this.entities.recycleBehind(this.traveled,this.holdY),this.entities.update(t,this.path,this.traveled,this.ship.position,this.offset,g,this.holdY),this.audio.setIntensity(this.stage.intensity(this.traveled,this.entities.hunterCount(),r>0,!!this.entities.boss?.alive||this.entities.enemies.some(y=>y.alive&&y.elite))),this._updateTraces(u,t);const _=[{pos:this.shipLights[0].getWorldPosition(new L),color:new Y("#5ce1ff"),intensity:12+f*8},{pos:this.shipLights[1].getWorldPosition(new L),color:new Y("#5ce1ff"),intensity:12+f*8},{pos:this.world.sun.position,color:new Y("#ffe29a"),intensity:22}];this.world.setLights(this.entities.nearestLights(this.ship.position,_)),this.hurt=Math.max(0,this.hurt-t*1.8),this.invuln=Math.max(0,this.invuln-t);let m=0;for(const y of this.entities.gates)y.burst>0&&(m=Math.max(m,y.pulse||0));this.gateFx=m,this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1);for(const y of Object.keys(this.gunCd))this.gunCd[y]=Math.max(0,this.gunCd[y]-t);if(this.state==="playing"){if(this.input.firing||this.input.keys.has("Space")||n.fire){const O=Wc(this.loadout,this.clock.elapsedTime),W=this.traveled+this.holdY+6.2;let X=!1;for(const $ of["primary","missile","titan","mine","nova"]){const H=O[$];if(!H.shots.length||this.gunCd[$]>0)continue;let Z=!1;for(const at of H.shots)this.entities.fireRail(this.path,W,this.offset.x+at.x,1,at)&&(Z=!0);Z&&(this.gunCd[$]=H.cd,($==="primary"||$==="titan")&&(this.muzzleFlash=1),X?($==="titan"||$==="missile")&&this.audio.guns($,this.loadout):(this.audio.guns($,this.loadout),X=$==="primary"))}}const A=this.entities.collectOrbs(this.ship.position,2.2);for(const O of A)this.score+=O.value,this.audio.collect(),this.health=Math.min(1,this.health+.05);const M=this.entities.collectMotes(this.ship.position,2.4),x=M.filter(O=>O.kind!=="coin"),D=M.filter(O=>O.kind==="coin");x.length&&this._gainMotes(x.length),D.length&&this._gainGold(D.reduce((O,W)=>O+(W.value||8),0),D.length);const z=this.entities.collectGates(this.ship.position);for(const O of z)if(O.blocked){if(this.invuln<=0){if(this._damage(.34))return;this.toast("SHIELD LOCK")}}else this._combatScore(500),this.boost=1,this.audio.gate(),this.toast("GATE BREAK");const B=this.entities.bulletHits();for(const O of B){if(O.type==="ping"){this.entities.spawnImpact(O.pos,O.color||10156031),this._punch(.018,.35);continue}const W=O.type==="boss"||O.type==="midboss";if(this.entities.explode(O.pos,O.type==="blocker"?16751162:W?16765286:6087167),this.entities.spawnImpact(O.pos,W?16769690:10156031),this.audio.explosion(W),this._punch(W?.07:.038,W?1.4:.7),O.type==="enemy"||O.type==="midboss"){if(this.kills+=1,this._combatScore(O.type==="midboss"?1400:220),this.boost=Math.min(1,this.boost+.18),this._dropLoot(O),O.type==="midboss"&&(this._midsThisLevel=(this._midsThisLevel||0)+1,this.toast(this._bossToast(O.role)),this._isLevelBossKill(O))){this._clearLevel();return}}else if(O.type==="blocker")this._combatScore(160),this._dropLoot(O);else if(O.type==="unlock")this._combatScore(220),this.audio.gate(),this.toast("LOCK SHATTERED"),this._dropLoot(O);else if(O.type==="boss"){this.kills+=1,this._combatScore(3200),this._dropLoot(O),this.toast("SENTINEL DOWN"),this._clearLevel();return}}for(const O of this.entities.nearMisses(this.ship.position))this.nearMisses+=1,this._combatScore(90);if(this.invuln<=0){const O=this.world.hitTest(this.ship.position,1.2),W=this.entities.collideEnemies(this.ship.position,1.45),X=this.entities.collideBlockers(this.ship.position,1.4),$=this.entities.shotsHitPlayer(this.ship.position,1.35);if(X.length){for(const H of X)H.alive=!1,H.mesh.visible=!1,this.entities.explode(H.mesh.position.clone(),16751162);if(this.audio.explosion(),this._punch(.05,1.1),this._damage(.42))return}else if(W.length){let H=.3;for(const Z of W)if(Z.elite||Z.role==="finale"){if(Z.hp=(Z.hp||8)-6,this.entities.spawnImpact(Z.mesh.position.clone(),16765286),H=.38,Z.hp<=0&&Z.mesh&&(Z.alive=!1,Z.mesh.visible=!1,this.entities.explode(Z.mesh.position.clone(),16765286),this.kills+=1,this._dropLoot({drop:Z.drop??4,pathDist:Z.pathDist,laneX:Z.offset?.x??this.offset.x,bombDrop:Z.bombDrop??0}),this._isLevelBossKill({type:Z.role==="finale"?"boss":"midboss",role:Z.role}))){this.toast(this._bossToast(Z.role)),this._clearLevel();return}}else Z.hp!==void 0&&Z.mesh&&(Z.alive=!1,Z.mesh.visible=!1,this.entities.explode(Z.mesh.position.clone(),16720984),this.kills+=1,this._dropLoot({drop:Z.drop??1,pathDist:Z.pathDist,laneX:Z.offset?.x??this.offset.x}));if(this.audio.explosion(),this._punch(.045,.9),this._damage(H))return}else if($){if(this._damage(.16))return}else if(O&&this._damage(.12))return}}this.fx.uniforms.uTime.value=this.clock.elapsedTime,this.fx.uniforms.uBoost.value=f,this.fx.uniforms.uHurt.value=this.hurt,this.fx.uniforms.uGate.value=this.gateFx;const d=this.world.sun.position.clone().project(this.camera);this.fx.uniforms.uSunPos.value.set(d.x*.5+.5,d.y*.5+.5);const w=d.z<1&&d.x>-1.2&&d.x<1.2&&d.y>-1.2&&d.y<1.2?.85:0;this.fx.uniforms.uFlare.value=Wn(this.fx.uniforms.uFlare.value,w,1-Math.exp(-t*8)),this.fx.uniforms.uCockpit.value=0,this.fx.uniforms.uKick.value=this.kickAmt;const v=.48+this.gateFx*.28,R=.42,T=.5+this.gateFx*.12;this.bloom.strength=Wn(this.bloom.strength,v,1-Math.exp(-t*6)),this.bloom.threshold=Wn(this.bloom.threshold,R,1-Math.exp(-t*6)),this.bloom.radius=Wn(this.bloom.radius,T,1-Math.exp(-t*6)),this._syncHud()}_dropLoot(t){const e=t?.drop??0,n=t.pathDist??this.traveled+this.holdY+6,i=t.laneX??this.offset.x;e>0&&this.entities.spawnMote(this.path,n,i,e),t?.bombDrop&&this._gainBomb(t.bombDrop);const r=t?.role;let o=0;t?.type==="boss"||r==="finale"?o=5:t?.type==="midboss"||t?.elite?o=3:(r==="heavy"||r==="slag"||r==="chime"||Math.random()<.2)&&(o=1),o&&this.entities.spawnCoins(this.path,n,i,o,{grace:.12})}_applyLoadout(){this.loadout=Yl(this.hangar?.levels||{spark:1},this.runBonus),this.step=Ue.reduce((t,e)=>t+(this.runBonus[e]|0),0),this.rank=jg(this.loadout),this.maxStep=Math.max(this.maxStep||0,this.rank),wa(this.shipCraft,this.loadout)}_gainGold(t,e=1){t<=0||(this.hangar=$l(this.hangar,t),this.audio.coin(),e>2&&this.toast(`+₡${t}`))}_gainMotes(t){if(t<=0)return;this.audio.mote(t>1);const e=po(this.hangar.levels,this.runBonus);if(e.cap<=0||e.used>=e.cap){this._combatScore(36*t);return}this.charge+=t;const n=e_(this.hangar.levels,this.runBonus,t);this.runBonus=n.runBonus,this._applyLoadout(),n.toast&&(this.audio.powerup(),this.toast(n.toast))}_shedResonance(){const t=po(this.hangar.levels,this.runBonus).used;if(t<=0&&this.charge<=0)return;const e=Math.min(6,2+Math.floor(t/14));this.runBonus=n_(this.runBonus,e),this.charge=0,this._applyLoadout(),this.entities.spawnMote(this.path,this.traveled+this.holdY+12,this.offset.x,Math.min(4,e),{grace:.45,spread:7.5})}_updateTraces(t,e){const n=this.loadout?.drone||0,i=this.state==="playing"?Math.min(this.traces.length,n>=1?n>=5?4:n>=3?3:2:0):0,r=this.clock.elapsedTime;for(let o=0;o<this.traces.length;o++){const a=this.traces[o];if(a.visible=o<i,o>=i)continue;const l=o%2===0?-1:1,h=4.4+Math.floor(o/2)*1.6+Math.sin(r*3.2+o)*.35,u=.4+Math.cos(r*2.4+o*1.7)*.2;a.position.copy(this.ship.position).addScaledVector(t.binormal,l*h).addScaledVector(t.normal,u);const f=(this.loadout.titan||0)>=1;a.material.color.set(f?16765286:16737512),a.scale.setScalar(.85+n*.06+Math.sin(r*6+o)*.08)}if(this.shipCore){const o=(this.loadout.titan||0)>0?16765286:(this.loadout.seeker||0)>0?16747082:(this.loadout.needle||0)>0?10217471:13172726;this.shipCore.material.color.set(o)}}_combatScore(t){this.score+=Math.floor(t*this.combo),this.combo=Math.min(8,this.combo+.35),this.maxCombo=Math.max(this.maxCombo,this.combo),this.comboTimer=3.2}_score(t){this._combatScore(t)}_damage(t){return this.health-=t,this.hurt=1,this.invuln=.7,this.combo=1,this.audio.hit(),this._punch(.04,1.15),this._shedResonance(),this.health<=0?(this.die(),!0):!1}_syncHud(){if(this._syncBossMeter(),this.state!=="playing")return;this.ui.score.textContent=this.score.toLocaleString(),this.ui.combo.textContent=`×${this.combo.toFixed(1)}`,this.ui.combo.classList.toggle("combo-quiet",this.combo<=1.05),this.combo>(this._lastCombo||1)+.02&&(this.ui.combo.classList.remove("combo-pop"),this.ui.combo.offsetWidth,this.ui.combo.classList.add("combo-pop")),this._lastCombo=this.combo;const t=this._currentLevel()?.lv.id||"1-1";if(this.ui.depth.textContent=`${t} · ${(this.traveled/10).toFixed(0)} km`,this.ui.threat&&(this.ui.threat.textContent=String(this.entities.hunterCount())),this.ui.health.style.transform=`scaleX(${Ke(this.health,0,1)})`,this.ui.boost.style.transform=`scaleX(${Ke(this.boost,0,1)})`,this.ui.gold&&(this.ui.gold.textContent=String(this.hangar?.gold||0)),this.ui.riftName&&(this.ui.riftName.textContent=j0(this.loadout)),this.ui.riftFill){const e=po(this.hangar.levels,this.runBonus),n=e.ratio;this.ui.riftFill.style.transform=`scaleX(${Math.max(.03,n)})`,this.ui.riftWrap?.classList.toggle("rift-max",e.cap>0&&e.used>=e.cap),this.ui.riftWrap?.classList.toggle("rift-wings",(this.loadout.seeker||0)>0&&(this.loadout.titan||0)===0),this.ui.riftWrap?.classList.toggle("rift-titan",(this.loadout.titan||0)>0)}this._syncBombs(),this._syncLives()}_syncBossMeter(){const t=this.ui?.bossMeter;if(!t)return;const e=this.state==="playing"?this.entities.activeBoss():null;if(!e){t.classList.remove("show");return}t.classList.add("show");const n={queen:"WEAVER QUEEN",coil:"TITAN COIL",warden:"WARDEN",empress:"WEAVER EMPRESS",finale:"SENTINEL"};this.ui.bossName&&(this.ui.bossName.textContent=n[e.role]||"HUNTER");const i=Ke(e.hp/Math.max(1,e.maxHp||e.hp),0,1);this.ui.bossFill&&(this.ui.bossFill.style.transform=`scaleX(${Math.max(.02,i)})`)}_render(){this.composer.render()}_axisHeld(t,e){let n=0;for(const i of t)this.input.keys.has(i)&&(n-=1);for(const i of e)this.input.keys.has(i)&&(n+=1);return Math.max(-1,Math.min(1,n))}_applySlide(t,e,n){let l=t,c=e;const h=Math.hypot(l,c);h>1&&(l/=h,c/=h),this.slide.x=this._approachVel(this.slide.x,l*92,820,420,1280,n),this.slide.y=this._approachVel(this.slide.y,c*92,820,420,1280,n)}_approachVel(t,e,n,i,r,o){const a=t>.5&&e<0||t<-.5&&e>0,l=e===0?i:a?r:n;let c=t;return c<e?c=Math.min(e,c+l*o):c>e&&(c=Math.max(e,c-l*o)),e!==0&&Math.abs(c)<Math.abs(e)*.22&&(c=e*.22),c}_playfieldHalf(){const e=38*Math.PI/180;return 168*Math.tan(e/2)}_depthLimit(){const t=this._playfieldHalf(),e=22,n=5;return{min:e-t+n,max:e+t-n}}_laneLimit(){const t=this._playfieldHalf()*this.camera.aspect;return Math.max(22,t-5)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e),this.bloom.setSize(t,e),this.fx.uniforms.uResolution.value.set(t,e),this.shipyard?.resize(t,e)}_runStage(){const t=this._currentLevel(),e=t?.lv.chapters||[];for(const n of e)this.traveled>=n.at&&this._chapterAt<n.at&&(this._chapterAt=n.at,this.toast(n.toast),this._setChapter(n.world||t?.lv.world,n.sting));for(;this.stage.peek()&&this.stage.peek().at<=this.traveled;){const n=this.stage.consume();if(n.kind==="squad")this.entities.spawnSquad(this.path,this.traveled,n.form,n.role,n.n,n.ahead);else if(n.kind==="gate")this.entities.spawnGateAt(this.path,this.traveled);else if(n.kind==="orbs")this.entities.spawnOrbsAt(this.path,this.traveled,5),this.entities.spawnCoins(this.path,this.traveled+48,0,3);else if(n.kind==="blockers")this.entities.spawnBlockersAt(this.path,this.traveled,n.n||2);else if(n.kind==="midboss")this.entities.spawnNamed(this.path,this.traveled,n.id,96,this.step,this.loadout),this.stage.finaleAlive=!1;else if(n.kind==="boss"||n.kind==="finale"){const i=n.id||"finale";n.kind==="finale"||i==="finale"||i==="sentinel"?this.entities.spawnFinale(this.path,this.traveled,96,this.step,this.loadout):this.entities.spawnNamed(this.path,this.traveled,i,96,this.step,this.loadout),this.stage.finaleAlive=!0}}this._maybeClearLevel()}_maybeClearLevel(){const t=this._currentLevel();!t||t.lv.boss||this.stage.peek()||this.traveled<t.lv.exitAt||this._clearLevel()}_setChapter(t,e){t&&(this._chapterId!==t&&(this._chapterId=t,this.world.setChapter(t),this.audio.setChapter(t)),e&&this.audio.sting(e))}_syncLives(){const t=this.ui?.lives;if(t){t.innerHTML="";for(let e=0;e<3;e++){const n=document.createElement("div");n.className="life-pip"+(e<this.lives?" lit":""),t.appendChild(n)}}}_isLevelBossKill(t){const e=this._currentLevel()?.lv.boss;return e?t.type==="boss"||t.role==="finale"?e==="finale":t.role===e:!1}_bossToast(t){return t==="warden"?"WARDEN DOWN":t==="coil"?"COIL DOWN":t==="empress"?"EMPRESS DOWN":t==="finale"?"SENTINEL DOWN":"QUEEN DOWN"}_punch(t,e){this.hitStop=Math.max(this.hitStop,Math.min(.045,t)),this.kickAmt=Math.max(this.kickAmt,e),this.kick.set((Math.random()-.5)*1.6,(Math.random()-.5)*1.2,0)}_tryBomb(){if(this.state!=="playing"||this.bombCd>0||this.bombs<=0)return;this.bombs-=1,this.bombsUsed+=1,this.bombCd=.85,this.invuln=Math.max(this.invuln,.55),this.audio.bomb(),this._punch(.08,1.6);const t=this.entities.bombSweep(this.traveled,this.holdY,16);for(const e of t.killed){if(this.kills+=1,this._combatScore(e.type==="boss"?3200:e.type==="midboss"?1400:180),this._dropLoot(e),e.type==="boss"){this.toast("SENTINEL DOWN"),this._clearLevel();return}if(e.type==="midboss"&&this._isLevelBossKill(e)){this.toast(this._bossToast(e.role)),this._clearLevel();return}}this._syncBombs()}_gainBomb(t=1){const e=Math.min(this.bombMax,this.bombs+t);e!==this.bombs&&(this.bombs=e,this._syncBombs())}_syncBombs(){const t=this.ui?.bombs;if(t){t.innerHTML="";for(let e=0;e<this.bombMax;e++){const n=document.createElement("div");n.className="bomb-pip"+(e<this.bombs?" lit":""),t.appendChild(n)}}}_renderScoreboard(t,e,n){if(t){if(!e||!e.length){t.classList.add("empty"),t.textContent="NO HI-SCORES YET";return}t.classList.remove("empty"),t.innerHTML=e.map((i,r)=>{const o=n!=null&&i.score===n?" me":"",a=i.victory?"CLR":"KIA";return`<div class="row${o}"><span>${r+1}</span><span>${i.rank} · ${a}</span><span>${i.score}</span><span>${i.depth} km</span></div>`}).join("")}}_padState(){const t=typeof navigator<"u"?navigator.getGamepads?.()||[]:[];let e=null;for(const l of t)if(l){e=l;break}if(!e)return{x:0,y:0,fire:!1,bomb:!1,boost:!1,start:!1};const n=l=>Math.abs(l)<.18?0:l,i=n(e.axes[0]||0),r=-n(e.axes[1]||0),o=(e.buttons[15]?.pressed?1:0)-(e.buttons[14]?.pressed?1:0),a=(e.buttons[12]?.pressed?1:0)-(e.buttons[13]?.pressed?1:0);return{x:Math.max(-1,Math.min(1,i+o)),y:Math.max(-1,Math.min(1,r+a)),fire:!!(e.buttons[0]?.pressed||e.buttons[7]?.pressed),bomb:!!e.buttons[1]?.pressed,boost:!!(e.buttons[4]?.pressed||e.buttons[6]?.pressed||e.buttons[5]?.pressed),start:!!(e.buttons[9]?.pressed||e.buttons[8]?.pressed)}}_pollPad(){const t=this._padState(),e=this._padPrev;t.start&&!e.start&&(this.state==="playing"?this.pause():this.state==="paused"?this.resume():this.state==="hangar"?this._hangarDone():this.state==="title"?this._hasRun?this.resumeFromMenu():this.startPlay():this.state==="map"?this._deployLevel():this.state==="continue"?this._acceptContinue():this.state==="dead"&&this.startPlay()),t.bomb&&!e.bomb&&(this.state==="continue"?this._declineContinue():this.state==="hangar"?this._hangarDone():this.state==="map"?this.goToMenu({resumeable:this._runLive}):this._tryBomb()),t.fire&&this.state==="hangar"&&!e.fire&&this._hangarBuy(),this.state==="hangar"&&(t.y>.55&&e.y<=.55&&this._hangarMove(-1),t.y<-.55&&e.y>=-.55&&this._hangarMove(1)),t.fire&&this.state==="title"&&!this._hasRun&&!e.fire&&this.startPlay(),t.fire&&this.state==="map"&&!e.fire&&this._deployLevel(),t.fire&&this.state==="continue"&&!e.fire&&this._acceptContinue(),this._padPrev={fire:t.fire,bomb:t.bomb,start:t.start,y:t.y}}}const a_=document.getElementById("c"),l_=new o_(a_);l_.start();
