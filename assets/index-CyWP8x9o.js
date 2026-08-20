(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ra="170",lh=0,Na=1,ch=2,Ql=1,hh=2,Tn=3,$n=0,Ue=1,ln=2,Cn=0,ki=1,Me=2,Ua=3,Fa=4,uh=5,ai=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,vh=202,xh=203,_o=204,vo=205,Mh=206,yh=207,bh=208,wh=209,Sh=210,Eh=211,Th=212,Ah=213,Rh=214,xo=0,Mo=1,yo=2,Gi=3,bo=4,wo=5,So=6,Eo=7,tc=0,Ch=1,Ph=2,Yn=0,ec=1,nc=2,ic=3,oa=4,Lh=5,sc=6,rc=7,oc=300,Wi=301,Xi=302,To=303,Ao=304,br=306,Ro=1e3,ci=1001,Co=1002,un=1003,Ih=1004,Rs=1005,_n=1006,Pr=1007,hi=1008,Nn=1009,ac=1010,lc=1011,xs=1012,aa=1013,ui=1014,An=1015,Pn=1016,la=1017,ca=1018,qi=1020,cc=35902,hc=1021,uc=1022,cn=1023,dc=1024,fc=1025,Oi=1026,Yi=1027,pc=1028,ha=1029,mc=1030,ua=1031,da=1033,or=33776,ar=33777,lr=33778,cr=33779,Po=35840,Lo=35841,Io=35842,Do=35843,No=36196,Uo=37492,Fo=37496,ko=37808,Oo=37809,Bo=37810,zo=37811,Ho=37812,Vo=37813,Go=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,$o=37819,Ko=37820,Zo=37821,hr=36492,jo=36494,Jo=36495,gc=36283,Qo=36284,ta=36285,ea=36286,Dh=3200,Nh=3201,_c=0,Uh=1,qn="",je="srgb",Qi="srgb-linear",wr="linear",oe="srgb",_i=7680,ka=519,Fh=512,kh=513,Oh=514,vc=515,Bh=516,zh=517,Hh=518,Vh=519,Oa=35044,Ba="300 es",Rn=2e3,pr=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let za=1234567;const Bi=Math.PI/180,$i=180/Math.PI;function es(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function fa(s,t){return(s%t+t)%t}function Gh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Wh(s,t,e){return s!==t?(e-s)/(t-s):0}function gs(s,t,e){return(1-e)*s+e*t}function Xh(s,t,e,n){return gs(s,t,1-Math.exp(-e*n))}function qh(s,t=1){return t-Math.abs(fa(s,t*2)-t)}function Yh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $h(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Kh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Zh(s,t){return s+Math.random()*(t-s)}function jh(s){return s*(.5-Math.random())}function Jh(s){s!==void 0&&(za=s);let t=za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qh(s){return s*Bi}function tu(s){return s*$i}function eu(s){return(s&s-1)===0&&s!==0}function nu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function iu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function su(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ru={DEG2RAD:Bi,RAD2DEG:$i,generateUUID:es,clamp:Fe,euclideanModulo:fa,mapLinear:Gh,inverseLerp:Wh,lerp:gs,damp:Xh,pingpong:qh,smoothstep:Yh,smootherstep:$h,randInt:Kh,randFloat:Zh,randFloatSpread:jh,seededRandom:Jh,degToRad:Qh,radToDeg:tu,isPowerOfTwo:eu,ceilPowerOfTwo:nu,floorPowerOfTwo:iu,setQuaternionFromProperEuler:su,normalize:Ve,denormalize:Ni};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,i,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],S=i[1],w=i[4],M=i[7],I=i[2],E=i[5],y=i[8];return r[0]=o*_+a*S+l*I,r[3]=o*m+a*w+l*E,r[6]=o*f+a*M+l*y,r[1]=c*_+h*S+u*I,r[4]=c*m+h*w+u*E,r[7]=c*f+h*M+u*y,r[2]=d*_+p*S+g*I,r[5]=d*m+p*w+g*E,r[8]=d*f+p*M+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lr.makeScale(t,e)),this}rotate(t){return this.premultiply(Lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new kt;function xc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ou(){const s=mr("canvas");return s.style.display="block",s}const Ha={};function fs(s){s in Ha||(Ha[s]=!0,console.warn(s))}function au(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?wr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Va=[.64,.33,.3,.6,.15,.06],Ga=[.2126,.7152,.0722],Wa=[.3127,.329],Xa=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qa=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Qi]:{primaries:Va,whitePoint:Wa,transfer:wr,toXYZ:Xa,fromXYZ:qa,luminanceCoefficients:Ga,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:Va,whitePoint:Wa,transfer:oe,toXYZ:Xa,fromXYZ:qa,luminanceCoefficients:Ga,outputColorSpaceConfig:{drawingBufferColorSpace:je}}});let vi;class hu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=mr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uu=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ir(i[o].image)):r.push(Ir(i[o]))}else r=Ir(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ir(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let du=0;class Ye extends ts{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=ci,i=ci,r=_n,o=hi,a=cn,l=Nn,c=Ye.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=es(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=oc;Ye.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,M=(p+1)/2,I=(f+1)/2,E=(h+d)/4,y=(u+_)/4,A=(g+m)/4;return w>M&&w>I?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=y/n):M>I?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=A/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=y/r,i=A/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yc extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pu extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,S=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const I=Math.sqrt(w),E=Math.atan2(I,f*S);m=Math.sin(m*E)/I,a=Math.sin(a*E)/I}const M=a*S;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new P,Ya=new Ms;class di{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Ps.subVectors(this.max,os),xi.subVectors(t.a,os),Mi.subVectors(t.b,os),yi.subVectors(t.c,os),Bn.subVectors(Mi,xi),zn.subVectors(yi,Mi),Jn.subVectors(xi,yi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Jn.z,Jn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Jn.z,0,-Jn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Jn.y,Jn.x,0];return!Nr(e,xi,Mi,yi,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,xi,Mi,yi,Ps))?!1:(Ls.crossVectors(Bn,zn),e=[Ls.x,Ls.y,Ls.z],Nr(e,xi,Mi,yi,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,Cs=new di,xi=new P,Mi=new P,yi=new P,Bn=new P,zn=new P,Jn=new P,os=new P,Ps=new P,Ls=new P,Qn=new P;function Nr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qn.fromArray(s,r);const a=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mu=new di,as=new P,Ur=new P;class ys{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(Ur)),this.expandByPoint(as.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new P,Fr=new P,Is=new P,Hn=new P,kr=new P,Ds=new P,Or=new P;class pa{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fr.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Fr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Is),a=Hn.dot(this.direction),l=-Hn.dot(Is),c=Hn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fr).addScaledVector(Is,d),p}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,r){kr.subVectors(e,t),Ds.subVectors(n,t),Or.crossVectors(kr,Ds);let o=this.direction.dot(Or),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const l=a*this.direction.dot(Ds.crossVectors(Hn,Ds));if(l<0)return null;const c=a*this.direction.dot(kr.cross(Hn));if(c<0||l+c>o)return null;const h=-a*Hn.dot(Or);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),o=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gu,t,_u)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Vn.crossVectors(n,Ke),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Vn.crossVectors(n,Ke)),Vn.normalize(),Ns.crossVectors(Ke,Vn),i[0]=Vn.x,i[4]=Ns.x,i[8]=Ke.x,i[1]=Vn.y,i[5]=Ns.y,i[9]=Ke.y,i[2]=Vn.z,i[6]=Ns.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],w=n[7],M=n[11],I=n[15],E=i[0],y=i[4],A=i[8],v=i[12],x=i[1],L=i[5],B=i[9],O=i[13],W=i[2],Y=i[6],k=i[10],$=i[14],H=i[3],tt=i[7],rt=i[11],et=i[15];return r[0]=o*E+a*x+l*W+c*H,r[4]=o*y+a*L+l*Y+c*tt,r[8]=o*A+a*B+l*k+c*rt,r[12]=o*v+a*O+l*$+c*et,r[1]=h*E+u*x+d*W+p*H,r[5]=h*y+u*L+d*Y+p*tt,r[9]=h*A+u*B+d*k+p*rt,r[13]=h*v+u*O+d*$+p*et,r[2]=g*E+_*x+m*W+f*H,r[6]=g*y+_*L+m*Y+f*tt,r[10]=g*A+_*B+m*k+f*rt,r[14]=g*v+_*O+m*$+f*et,r[3]=S*E+w*x+M*W+I*H,r[7]=S*y+w*L+M*Y+I*tt,r[11]=S*A+w*B+M*k+I*rt,r[15]=S*v+w*O+M*$+I*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,w=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,I=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,E=e*S+n*w+i*M+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/E;return t[0]=S*y,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*y,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*y,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*y,t[4]=w*y,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*y,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*y,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*y,t[8]=M*y,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*y,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*y,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*y,t[12]=I*y,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*y,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*y,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*y,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,S=l*c,w=l*h,M=l*u,I=n.x,E=n.y,y=n.z;return i[0]=(1-(_+f))*I,i[1]=(p+M)*I,i[2]=(g-w)*I,i[3]=0,i[4]=(p-M)*E,i[5]=(1-(d+f))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(g+w)*y,i[9]=(m-S)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const o=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Rn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===Rn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Rn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h;let g,_;if(a===Rn)g=(o+r)*u,_=-2*u;else if(a===pr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new P,on=new fe,gu=new P(0,0,0),_u=new P(1,1,1),Vn=new P,Ns=new P,Ke=new P,$a=new fe,Ka=new Ms;class vn{constructor(t=0,e=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $a.makeRotationFromQuaternion(t),this.setFromRotationMatrix($a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vu=0;const Za=new P,wi=new Ms,wn=new fe,Us=new P,ls=new P,xu=new P,Mu=new Ms,ja=new P(1,0,0),Ja=new P(0,1,0),Qa=new P(0,0,1),tl={type:"added"},yu={type:"removed"},Si={type:"childadded",child:null},Br={type:"childremoved",child:null};class Re extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new P,e=new vn,n=new Ms,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(Ja,t)}rotateZ(t){return this.rotateOnAxis(Qa,t)}translateOnAxis(t,e){return Za.copy(t).applyQuaternion(this.quaternion),this.position.add(Za.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(Ja,t)}translateZ(t){return this.translateOnAxis(Qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Us.copy(t):Us.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ls,Us,this.up):wn.lookAt(Us,ls,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(wn),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tl),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tl),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Re.DEFAULT_UP=new P(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new P,Sn=new P,zr=new P,En=new P,Ei=new P,Ti=new P,el=new P,Hr=new P,Vr=new P,Gr=new P,Wr=new le,Xr=new le,qr=new le;class en{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),Sn.subVectors(n,e),zr.subVectors(t,e);const o=an.dot(an),a=an.dot(Sn),l=an.dot(zr),c=Sn.dot(Sn),h=Sn.dot(zr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(t,e),Xr.fromBufferAttribute(t,n),qr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wr,r.x),o.addScaledVector(Xr,r.y),o.addScaledVector(qr,r.z),o}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),Sn.subVectors(t,e),an.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),an.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ei.subVectors(i,n),Ti.subVectors(r,n),Hr.subVectors(t,n);const l=Ei.dot(Hr),c=Ti.dot(Hr);if(l<=0&&c<=0)return e.copy(n);Vr.subVectors(t,i);const h=Ei.dot(Vr),u=Ti.dot(Vr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ei,o);Gr.subVectors(t,r);const p=Ei.dot(Gr),g=Ti.dot(Gr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ti,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return el.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(el,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Ei,o).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Yr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class q{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=fa(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yr(o,r,t+1/3),this.g=Yr(o,r,t),this.b=Yr(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Kt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Fe(ze.r*255,0,255))*65536+Math.round(Fe(ze.g*255,0,255))*256+Math.round(Fe(ze.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,i=ze.g,r=ze.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=je){Kt.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,i=ze.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Fs);const n=gs(Gn.h,Fs.h,e),i=gs(Gn.s,Fs.s,e),r=gs(Gn.l,Fs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new q;q.NAMES=wc;let bu=0;class mi extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=es(),this.name="",this.blending=ki,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=vo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $t extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new P,ks=new ct;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}}class Sc extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ec extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wu=0;const tn=new fe,$r=new Re,Ai=new P,Ze=new di,cs=new di,Ne=new P;class Pe extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xc(t)?Ec:Sc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(Ze.min,cs.min),Ze.expandByPoint(Ne),Ne.addVectors(Ze.max,cs.max),Ze.expandByPoint(Ne)):(Ze.expandByPoint(cs.min),Ze.expandByPoint(cs.max))}Ze.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(t,c),Ne.add(Ai)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;const c=new P,h=new P,u=new P,d=new ct,p=new ct,g=new ct,_=new P,m=new P;function f(A,v,x){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[A].add(_),a[v].add(_),a[x].add(_),l[A].add(m),l[v].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let A=0,v=S.length;A<v;++A){const x=S[A],L=x.start,B=x.count;for(let O=L,W=L+B;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const w=new P,M=new P,I=new P,E=new P;function y(A){I.fromBufferAttribute(i,A),E.copy(I);const v=a[A];w.copy(v),w.sub(I.multiplyScalar(I.dot(v))).normalize(),M.crossVectors(E,v);const L=M.dot(l[A])<0?-1:1;o.setXYZW(A,w.x,w.y,w.z,L)}for(let A=0,v=S.length;A<v;++A){const x=S[A],L=x.start,B=x.count;for(let O=L,W=L+B;O<W;O+=3)y(t.getX(O+0)),y(t.getX(O+1)),y(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new fe,ti=new pa,Os=new ys,il=new P,Bs=new P,zs=new P,Hs=new P,Kr=new P,Vs=new P,sl=new P,Gs=new P;class R extends Re{constructor(t=new Pe,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Kr.fromBufferAttribute(u,t),o?Vs.addScaledVector(Kr,h):Vs.addScaledVector(Kr.sub(e),h))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Os.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Os,il)===null||ti.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(nl.copy(r).invert(),ti.copy(t.ray).applyMatrix4(nl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,I=w;M<I;M+=3){const E=a.getX(M),y=a.getX(M+1),A=a.getX(M+2);i=Ws(this,f,t,n,c,h,u,E,y,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);i=Ws(this,o,t,n,c,h,u,S,w,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,I=w;M<I;M+=3){const E=M,y=M+1,A=M+2;i=Ws(this,f,t,n,c,h,u,E,y,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=m,w=m+1,M=m+2;i=Ws(this,o,t,n,c,h,u,S,w,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Su(s,t,e,n,i,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===$n,a),l===null)return null;Gs.copy(a),Gs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Gs);return c<e.near||c>e.far?null:{distance:c,point:Gs.clone(),object:s}}function Ws(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Bs),s.getVertexPosition(l,zs),s.getVertexPosition(c,Hs);const h=Su(s,t,e,n,Bs,zs,Hs,sl);if(h){const u=new P;en.getBarycoord(sl,Bs,zs,Hs,u),i&&(h.uv=en.getInterpolatedAttribute(i,a,l,c,u,new ct)),r&&(h.uv1=en.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=en.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};en.getNormal(Bs,zs,Hs,d.normal),h.face=d,h.barycoord=u}return h}class ot extends Pe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,m,f,S,w,M,I,E,y,A,v){const x=M/y,L=I/A,B=M/2,O=I/2,W=E/2,Y=y+1,k=A+1;let $=0,H=0;const tt=new P;for(let rt=0;rt<k;rt++){const et=rt*L-O;for(let Dt=0;Dt<Y;Dt++){const Qt=Dt*x-B;tt[_]=Qt*S,tt[m]=et*w,tt[f]=W,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[f]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Dt/y),u.push(1-rt/A),$+=1}}for(let rt=0;rt<A;rt++)for(let et=0;et<y;et++){const Dt=d+et+Y*rt,Qt=d+et+Y*(rt+1),K=d+(et+1)+Y*(rt+1),nt=d+(et+1)+Y*rt;l.push(Dt,Qt,nt),l.push(Qt,K,nt),H+=6}a.addGroup(p,H,v),p+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=Ki(s[e]);for(const i in n)t[i]=n[i]}return t}function Eu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Zi={clone:Ki,merge:Ge};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ve extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ac extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new P,rl=new ct,ol=new ct;class We extends Ac{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,rl,ol),e.subVectors(ol,rl)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class Ru extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(Ri,Ci,t,e);i.layers=this.layers,this.add(i);const r=new We(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const o=new We(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const a=new We(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const l=new We(Ri,Ci,t,e);l.layers=this.layers,this.add(l);const c=new We(Ri,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rc extends Ye{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cu extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Rc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ot(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Cn});r.uniforms.tEquirect.value=e;const o=new R(i,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=_n),new Ru(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Zr=new P,Pu=new P,Lu=new kt;class ri{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Zr.subVectors(n,e).cross(Pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lu.getNormalMatrix(t),i=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new ys,Xs=new P;class ma{constructor(t=new ri,e=new ri,n=new ri,i=new ri,r=new ri,o=new ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],S=i[13],w=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+h,m+g,M+S).normalize(),n[3].setComponents(l-o,d-h,m-g,M-S).normalize(),n[4].setComponents(l-a,d-u,m-_,M-w).normalize(),e===Rn)n[5].setComponents(l+a,d+u,m+_,M+w).normalize();else if(e===pr)n[5].setComponents(a,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xs.x=i.normal.x>0?t.max.x:t.min.x,Xs.y=i.normal.y>0?t.max.y:t.min.y,Xs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Iu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class bs extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const S=f*d-o;for(let w=0;w<c;w++){const M=w*u-r;g.push(M,-S,0),_.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){const w=S+c*f,M=S+c*(f+1),I=S+1+c*(f+1),E=S+1+c*f;p.push(w,M,E),p.push(M,I,E)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
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
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
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
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nd=`#define PI 3.141592653589793
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
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sd=`vec3 transformedNormal = objectNormal;
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
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
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
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pd=`PhysicalMaterial material;
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
#endif`,Ld=`struct PhysicalMaterial {
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
}`,Id=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
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
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vf=`float getShadowMask() {
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
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nf=`uniform sampler2D t2D;
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
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
}`,zf=`#if DEPTH_PACKING == 3200
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
}`,Hf=`#define DISTANCE
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
}`,Vf=`#define DISTANCE
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`uniform float scale;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,$f=`uniform vec3 diffuse;
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
}`,Kf=`#define LAMBERT
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
}`,Zf=`#define LAMBERT
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
}`,jf=`#define MATCAP
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
}`,Jf=`#define MATCAP
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
}`,Qf=`#define NORMAL
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
}`,tp=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,np=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,sp=`#define STANDARD
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
}`,rp=`#define TOON
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
}`,op=`#define TOON
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
}`,ap=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,hp=`uniform vec3 color;
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
}`,up=`uniform float rotation;
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
}`,dp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Du,alphahash_pars_fragment:Nu,alphamap_fragment:Uu,alphamap_pars_fragment:Fu,alphatest_fragment:ku,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:Hu,batching_vertex:Vu,begin_vertex:Gu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:ju,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:td,color_vertex:ed,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:sd,displacementmap_pars_vertex:rd,displacementmap_vertex:od,emissivemap_fragment:ad,emissivemap_pars_fragment:ld,colorspace_fragment:cd,colorspace_pars_fragment:hd,envmap_fragment:ud,envmap_common_pars_fragment:dd,envmap_pars_fragment:fd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Ed,envmap_vertex:md,fog_vertex:gd,fog_pars_vertex:_d,fog_fragment:vd,fog_pars_fragment:xd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:yd,lights_lambert_fragment:bd,lights_lambert_pars_fragment:wd,lights_pars_begin:Sd,lights_toon_fragment:Td,lights_toon_pars_fragment:Ad,lights_phong_fragment:Rd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Pd,lights_physical_pars_fragment:Ld,lights_fragment_begin:Id,lights_fragment_maps:Dd,lights_fragment_end:Nd,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:zd,map_particle_fragment:Hd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Wd,morphinstance_vertex:Xd,morphcolor_vertex:qd,morphnormal_vertex:Yd,morphtarget_pars_vertex:$d,morphtarget_vertex:Kd,normal_fragment_begin:Zd,normal_fragment_maps:jd,normal_pars_fragment:Jd,normal_pars_vertex:Qd,normal_vertex:tf,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:of,opaque_fragment:af,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:hf,dithering_fragment:uf,dithering_pars_fragment:df,roughnessmap_fragment:ff,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:vf,skinbase_vertex:xf,skinning_pars_vertex:Mf,skinning_vertex:yf,skinnormal_vertex:bf,specularmap_fragment:wf,specularmap_pars_fragment:Sf,tonemapping_fragment:Ef,tonemapping_pars_fragment:Tf,transmission_fragment:Af,transmission_pars_fragment:Rf,uv_pars_fragment:Cf,uv_pars_vertex:Pf,uv_vertex:Lf,worldpos_vertex:If,background_vert:Df,background_frag:Nf,backgroundCube_vert:Uf,backgroundCube_frag:Ff,cube_vert:kf,cube_frag:Of,depth_vert:Bf,depth_frag:zf,distanceRGBA_vert:Hf,distanceRGBA_frag:Vf,equirect_vert:Gf,equirect_frag:Wf,linedashed_vert:Xf,linedashed_frag:qf,meshbasic_vert:Yf,meshbasic_frag:$f,meshlambert_vert:Kf,meshlambert_frag:Zf,meshmatcap_vert:jf,meshmatcap_frag:Jf,meshnormal_vert:Qf,meshnormal_frag:tp,meshphong_vert:ep,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:op,points_vert:ap,points_frag:lp,shadow_vert:cp,shadow_frag:hp,sprite_vert:up,sprite_frag:dp},lt={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},gn={basic:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new q(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ge([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ge([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new q(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ge([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ge([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ge([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ge([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ge([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ge([lt.lights,lt.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};gn.physical={uniforms:Ge([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const qs={r:0,b:0,g:0},ni=new vn,fp=new fe;function pp(s,t,e,n,i,r,o){const a=new q(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?e:t).get(w)),w}function _(S){let w=!1;const M=g(S);M===null?f(a,l):M&&M.isColor&&(f(M,1),w=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,w){const M=g(w);M&&(M.isCubeTexture||M.mapping===br)?(h===void 0&&(h=new R(new ot(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:Ki(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ni.copy(w.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(ni)),h.material.toneMapped=Kt.getTransfer(M.colorSpace)!==oe,(u!==M||d!==M.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new R(new bs(2,2),new ve({name:"BackgroundMaterial",uniforms:Ki(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==oe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,w){S.getRGB(qs,Tc(s)),n.buffers.color.setClear(qs.r,qs.g,qs.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),l=w,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:_,addToRenderList:m}}function mp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(x,L,B,O,W){let Y=!1;const k=u(O,B,L);r!==k&&(r=k,c(r.object)),Y=p(x,O,B,W),Y&&g(x,O,B,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(x,L,B,O),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,L,B){const O=B.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let Y=W[L.id];Y===void 0&&(Y={},W[L.id]=Y);let k=Y[O];return k===void 0&&(k=d(l()),Y[O]=k),k}function d(x){const L=[],B=[],O=[];for(let W=0;W<e;W++)L[W]=0,B[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,L,B,O){const W=r.attributes,Y=L.attributes;let k=0;const $=B.getAttributes();for(const H in $)if($[H].location>=0){const rt=W[H];let et=Y[H];if(et===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),rt===void 0||rt.attribute!==et||et&&rt.data!==et.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(x,L,B,O){const W={},Y=L.attributes;let k=0;const $=B.getAttributes();for(const H in $)if($[H].location>=0){let rt=Y[H];rt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const et={};et.attribute=rt,rt&&rt.data&&(et.data=rt.data),W[H]=et,k++}r.attributes=W,r.attributesNum=k,r.index=O}function _(){const x=r.newAttributes;for(let L=0,B=x.length;L<B;L++)x[L]=0}function m(x){f(x,0)}function f(x,L){const B=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;B[x]=1,O[x]===0&&(s.enableVertexAttribArray(x),O[x]=1),W[x]!==L&&(s.vertexAttribDivisor(x,L),W[x]=L)}function S(){const x=r.newAttributes,L=r.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==x[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function w(x,L,B,O,W,Y,k){k===!0?s.vertexAttribIPointer(x,L,B,W,Y):s.vertexAttribPointer(x,L,B,O,W,Y)}function M(x,L,B,O){_();const W=O.attributes,Y=B.getAttributes(),k=L.defaultAttributeValues;for(const $ in Y){const H=Y[$];if(H.location>=0){let tt=W[$];if(tt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){const rt=tt.normalized,et=tt.itemSize,Dt=t.get(tt);if(Dt===void 0)continue;const Qt=Dt.buffer,K=Dt.type,nt=Dt.bytesPerElement,xt=K===s.INT||K===s.UNSIGNED_INT||tt.gpuType===aa;if(tt.isInterleavedBufferAttribute){const at=tt.data,Tt=at.stride,Pt=tt.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)f(H.location+Ot,at.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)m(H.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Ot=0;Ot<H.locationSize;Ot++)w(H.location+Ot,et/H.locationSize,K,rt,Tt*nt,(Pt+et/H.locationSize*Ot)*nt,xt)}else{if(tt.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)f(H.location+at,tt.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let at=0;at<H.locationSize;at++)m(H.location+at);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let at=0;at<H.locationSize;at++)w(H.location+at,et/H.locationSize,K,rt,et*nt,et/H.locationSize*at*nt,xt)}}else if(k!==void 0){const rt=k[$];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(H.location,rt);break;case 3:s.vertexAttrib3fv(H.location,rt);break;case 4:s.vertexAttrib4fv(H.location,rt);break;default:s.vertexAttrib1fv(H.location,rt)}}}}S()}function I(){A();for(const x in n){const L=n[x];for(const B in L){const O=L[B];for(const W in O)h(O[W].object),delete O[W];delete L[B]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const B in L){const O=L[B];for(const W in O)h(O[W].object),delete O[W];delete L[B]}delete n[x.id]}function y(x){for(const L in n){const B=n[L];if(B[x.id]===void 0)continue;const O=B[x.id];for(const W in O)h(O[W].object),delete O[W];delete B[x.id]}}function A(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function gp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _p(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==cn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const A=y===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Nn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==An&&!A)}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:I,maxSamples:E}}function vp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ri,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,w=S*4;let M=f.clippingState||null;l.value=M,M=h(g,d,w,p);for(let I=0;I!==w;++I)M[I]=e[I];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,M=p;w!==_;++w,M+=4)o.copy(u[w]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xp(s){let t=new WeakMap;function e(o,a){return a===To?o.mapping=Wi:a===Ao&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===Ao)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cu(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ga extends Ac{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,al=[.125,.215,.35,.446,.526,.582],li=20,jr=new ga,ll=new q;let Jr=null,Qr=0,to=0,eo=!1;const oi=(1+Math.sqrt(5))/2,Pi=1/oi,cl=[new P(-oi,Pi,0),new P(oi,Pi,0),new P(-Pi,0,oi),new P(Pi,0,oi),new P(0,oi,-Pi),new P(0,oi,Pi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class gr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jr,Qr,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Pn,format:cn,colorSpace:Qi,depthBuffer:!1},i=hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=yp(r,t,e)}return i}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ll),h.toneMapping=Yn,h.autoClear=!1;const p=new $t({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new R(new ot,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ll),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const w=this._cubeSize;Ys(i,S*w,f>2?w:0,w,w),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Wi||t.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new R(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cl[(i-r-1)%cl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const f=[];let S=0;for(let y=0;y<li;++y){const A=y/_,v=Math.exp(-A*A/2);f.push(v),y===0?S+=v:y<m&&(S+=2*v)}for(let y=0;y<f.length;y++)f[y]=f[y]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const M=this._sizeLods[i],I=3*M*(i>w-Ui?i-w+Ui:0),E=4*(this._cubeSize-M);Ys(e,I,E,3*M,2*M),l.setRenderTarget(e),l.render(u,jr)}}function Mp(s){const t=[],e=[],n=[];let i=s;const r=s-Ui+1+al.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ui?l=al[o-s+Ui-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),w=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let E=0;E<p;E++){const y=E%3*2/3-1,A=E>2?0:-1,v=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];S.set(v,_*g*E),w.set(d,m*g*E);const x=[E,E,E,E,E,E];M.set(x,f*g*E)}const I=new Pe;I.setAttribute("position",new Ee(S,_)),I.setAttribute("uv",new Ee(w,m)),I.setAttribute("faceIndex",new Ee(M,f)),t.push(I),i>Ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hl(s,t,e){const n=new dn(s,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function yp(s,t,e){const n=new Float32Array(li),i=new P(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ul(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function dl(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function _a(){return`

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
	`}function bp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===To||l===Ao,h=l===Wi||l===Xi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new gr(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sp(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let w=0,M=S.length;w<M;w+=3){const I=S[w+0],E=S[w+1],y=S[w+2];d.push(I,E,E,y,y,I)}}else if(g!==void 0){const S=g.array;_=g.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const I=w+0,E=w+1,y=w+2;d.push(I,E,E,y,y,I)}}else return;const m=new(xc(d)?Ec:Sc)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ep(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*_[S];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ap(s,t,e){const n=new WeakMap,i=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let I=a.attributes.position.count*M,E=1;I>t.maxTextureSize&&(E=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const y=new Float32Array(I*E*4*u),A=new yc(y,I,E,u);A.type=An,A.needsUpdate=!0;const v=M*4;for(let L=0;L<u;L++){const B=f[L],O=S[L],W=w[L],Y=I*E*4*L;for(let k=0;k<B.count;k++){const $=k*v;g===!0&&(i.fromBufferAttribute(B,k),y[Y+$+0]=i.x,y[Y+$+1]=i.y,y[Y+$+2]=i.z,y[Y+$+3]=0),_===!0&&(i.fromBufferAttribute(O,k),y[Y+$+4]=i.x,y[Y+$+5]=i.y,y[Y+$+6]=i.z,y[Y+$+7]=0),m===!0&&(i.fromBufferAttribute(W,k),y[Y+$+8]=i.x,y[Y+$+9]=i.y,y[Y+$+10]=i.z,y[Y+$+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new ct(I,E)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Rp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Pc extends Ye{constructor(t,e,n,i,r,o,a,l,c,h=Oi){if(h!==Oi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=ui),n===void 0&&h===Yi&&(n=qi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lc=new Ye,fl=new Pc(1,1),Ic=new yc,Dc=new pu,Nc=new Rc,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),vl=new Float32Array(4);function ns(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=pl[i];if(r===void 0&&(r=new Float32Array(i),pl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Sr(s,t){let e=ml[t];e===void 0&&(e=new Int32Array(t),ml[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function Dp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;vl.set(n),s.uniformMatrix2fv(this.addr,!1,vl),De(e,n)}}function Np(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;_l.set(n),s.uniformMatrix3fv(this.addr,!1,_l),De(e,n)}}function Up(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;gl.set(n),s.uniformMatrix4fv(this.addr,!1,gl),De(e,n)}}function Fp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function zp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function Wp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fl.compareFunction=vc,r=fl):r=Lc,e.setTexture2D(t||r,i)}function Xp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Dc,i)}function qp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Nc,i)}function Yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ic,i)}function $p(s){switch(s){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Ip;case 35674:return Dp;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return kp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Hp;case 36295:return Vp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Kp(s,t){s.uniform1fv(this.addr,t)}function Zp(s,t){const e=ns(t,this.size,2);s.uniform2fv(this.addr,e)}function jp(s,t){const e=ns(t,this.size,3);s.uniform3fv(this.addr,e)}function Jp(s,t){const e=ns(t,this.size,4);s.uniform4fv(this.addr,e)}function Qp(s,t){const e=ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function tm(s,t){const e=ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function em(s,t){const e=ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function nm(s,t){s.uniform1iv(this.addr,t)}function im(s,t){s.uniform2iv(this.addr,t)}function sm(s,t){s.uniform3iv(this.addr,t)}function rm(s,t){s.uniform4iv(this.addr,t)}function om(s,t){s.uniform1uiv(this.addr,t)}function am(s,t){s.uniform2uiv(this.addr,t)}function lm(s,t){s.uniform3uiv(this.addr,t)}function cm(s,t){s.uniform4uiv(this.addr,t)}function hm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Lc,r[o])}function um(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Dc,r[o])}function dm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Nc,r[o])}function fm(s,t,e){const n=this.cache,i=t.length,r=Sr(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ic,r[o])}function pm(s){switch(s){case 5126:return Kp;case 35664:return Zp;case 35665:return jp;case 35666:return Jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}}class gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}}class _m{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function xl(s,t){s.seq.push(t),s.map[t.id]=t}function vm(s,t,e){const n=s.name,i=n.length;for(no.lastIndex=0;;){const r=no.exec(n),o=no.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xl(e,c===void 0?new mm(a,s,t):new gm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new _m(a),xl(e,u)),e=u}}}class ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);vm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ml(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const xm=37297;let Mm=0;function ym(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const yl=new kt;function bm(s){Kt._getMatrix(yl,Kt.workingColorSpace,s);const t=`mat3( ${yl.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case wr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ym(s.getShaderSource(t),o)}else return i}function wm(s,t){const e=bm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sm(s,t){let e;switch(t){case ec:e="Linear";break;case nc:e="Reinhard";break;case ic:e="Cineon";break;case oa:e="ACESFilmic";break;case sc:e="AgX";break;case rc:e="Neutral";break;case Lh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new P;function Em(){Kt.getLuminanceCoefficients($s);const s=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Am(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ps(s){return s!==""}function wl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(s){return s.replace(Cm,Lm)}const Pm=new Map;function Lm(s,t){let e=zt[t];if(e===void 0){const n=Pm.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return na(e)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(s){return s.replace(Im,Dm)}function Dm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Nm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Um(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function km(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case tc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ch:t="ENVMAP_BLENDING_MIX";break;case Ph:t="ENVMAP_BLENDING_ADD";break}return t}function Om(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Bm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Nm(e),c=Um(e),h=Fm(e),u=km(e),d=Om(e),p=Tm(e),g=Am(r),_=i.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),f.length>0&&(f+=`
`)):(m=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),f=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),o=na(o),o=wl(o,e),o=Sl(o,e),a=na(a),a=wl(a,e),a=Sl(a,e),o=El(o),a=El(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=S+m+o,M=S+f+a,I=Ml(i,i.VERTEX_SHADER,w),E=Ml(i,i.FRAGMENT_SHADER,M);i.attachShader(_,I),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function y(L){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(E).trim();let Y=!0,k=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,E);else{const $=bl(i,I,"vertex"),H=bl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+$+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||W==="")&&(k=!1);k&&(L.diagnostics={runnable:Y,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(I),i.deleteShader(E),A=new ur(i,_),v=Rm(i,_)}let A;this.getUniforms=function(){return A===void 0&&y(this),A};let v;this.getAttributes=function(){return v===void 0&&y(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,xm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=E,this}let zm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vm(t),e.set(t,n)),n}}class Vm{constructor(t){this.id=zm++,this.code=t,this.usedTimes=0}}function Gm(s,t,e,n,i,r,o){const a=new bc,l=new Hm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,L,B,O){const W=B.fog,Y=O.geometry,k=v.isMeshStandardMaterial?B.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),H=$&&$.mapping===br?$.image.height:null,tt=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,et=rt!==void 0?rt.length:0;let Dt=0;Y.morphAttributes.position!==void 0&&(Dt=1),Y.morphAttributes.normal!==void 0&&(Dt=2),Y.morphAttributes.color!==void 0&&(Dt=3);let Qt,K,nt,xt;if(tt){const se=gn[tt];Qt=se.vertexShader,K=se.fragmentShader}else Qt=v.vertexShader,K=v.fragmentShader,l.update(v),nt=l.getVertexShaderID(v),xt=l.getFragmentShaderID(v);const at=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,he=!!v.map,Gt=!!v.matcap,Se=!!$,F=!!v.aoMap,Je=!!v.lightMap,Xt=!!v.bumpMap,qt=!!v.normalMap,Rt=!!v.displacementMap,pe=!!v.emissiveMap,At=!!v.metalnessMap,C=!!v.roughnessMap,b=v.anisotropy>0,z=v.clearcoat>0,j=v.dispersion>0,Q=v.iridescence>0,Z=v.sheen>0,St=v.transmission>0,ut=b&&!!v.anisotropyMap,gt=z&&!!v.clearcoatMap,Jt=z&&!!v.clearcoatNormalMap,it=z&&!!v.clearcoatRoughnessMap,_t=Q&&!!v.iridescenceMap,Ct=Q&&!!v.iridescenceThicknessMap,Lt=Z&&!!v.sheenColorMap,vt=Z&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,Bt=!!v.specularColorMap,ue=!!v.specularIntensityMap,D=St&&!!v.transmissionMap,ht=St&&!!v.thicknessMap,X=!!v.gradientMap,J=!!v.alphaMap,pt=v.alphaTest>0,dt=!!v.alphaHash,Ut=!!v.extensions;let xe=Yn;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Oe={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:Qt,fragmentShader:K,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Qi,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:Gt,envMap:Se,envMapMode:Se&&$.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Je,bumpMap:Xt,normalMap:qt,displacementMap:d&&Rt,emissiveMap:pe,normalMapObjectSpace:qt&&v.normalMapType===Uh,normalMapTangentSpace:qt&&v.normalMapType===_c,metalnessMap:At,roughnessMap:C,anisotropy:b,anisotropyMap:ut,clearcoat:z,clearcoatMap:gt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:it,dispersion:j,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:Ct,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Yt,specularColorMap:Bt,specularIntensityMap:ue,transmission:St,transmissionMap:D,thicknessMap:ht,gradientMap:X,opaque:v.transparent===!1&&v.blending===ki&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:v.combine,mapUv:he&&_(v.map.channel),aoMapUv:F&&_(v.aoMap.channel),lightMapUv:Je&&_(v.lightMap.channel),bumpMapUv:Xt&&_(v.bumpMap.channel),normalMapUv:qt&&_(v.normalMap.channel),displacementMapUv:Rt&&_(v.displacementMap.channel),emissiveMapUv:pe&&_(v.emissiveMap.channel),metalnessMapUv:At&&_(v.metalnessMap.channel),roughnessMapUv:C&&_(v.roughnessMap.channel),anisotropyMapUv:ut&&_(v.anisotropyMap.channel),clearcoatMapUv:gt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(v.sheenRoughnessMap.channel),specularMapUv:Yt&&_(v.specularMap.channel),specularColorMapUv:Bt&&_(v.specularColorMap.channel),specularIntensityMapUv:ue&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:ht&&_(v.thicknessMap.channel),alphaMapUv:J&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(qt||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(he||J),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&Kt.getTransfer(v.map.colorSpace)===oe,decodeVideoTextureEmissive:pe&&v.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(v.emissiveMap.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ln,flipSided:v.side===Ue,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ut&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&v.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function f(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)x.push(L),x.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(S(x,v),w(x,v),x.push(s.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function S(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function w(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const x=g[v.type];let L;if(x){const B=gn[x];L=Zi.clone(B.uniforms)}else L=v.uniforms;return L}function I(v,x){let L;for(let B=0,O=h.length;B<O;B++){const W=h[B];if(W.cacheKey===x){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Bm(s,x,v,r),h.push(L)),L}function E(v){if(--v.usedTimes===0){const x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function y(v){l.remove(v)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:I,releaseProgram:E,releaseShaderCache:y,programs:h,dispose:A}}function Wm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Xm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Al(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Xm),n.length>1&&n.sort(d||Al),i.length>1&&i.sort(d||Al)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function qm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Rl,s.set(n,[o])):i>=r.length?(o=new Rl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ym(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new q};break;case"SpotLight":e={position:new P,direction:new P,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new q,groundColor:new q};break;case"RectAreaLight":e={color:new q,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function $m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Km=0;function Zm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jm(s){const t=new Ym,e=$m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new fe,o=new fe;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,w=0,M=0,I=0,E=0,y=0;c.sort(Zm);for(let v=0,x=c.length;v<x;v++){const L=c[v],B=L.color,O=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],O);y++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=k,p++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(B).multiplyScalar(O),k.distance=W,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[_]=k;const $=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,$.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=$.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,M++}_++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(B).multiplyScalar(O),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const $=L.shadow,H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=k,g++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(O),k.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[f]=k,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==S||A.numPointShadows!==w||A.numSpotShadows!==M||A.numSpotMaps!==I||A.numLightProbes!==y)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=y,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=S,A.numPointShadows=w,A.numSpotShadows=M,A.numSpotMaps=I,A.numLightProbes=y,n.version=Km++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const w=c[f];if(w.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(w.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Cl(s){const t=new jm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Jm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Cl(s),t.set(i,[a])):r>=o.length?(a=new Cl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Qm extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t0 extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`;function i0(s,t,e){let n=new ma;const i=new ct,r=new ct,o=new le,a=new Qm({depthPacking:Nh}),l=new t0,c={},h=e.maxTextureSize,u={[$n]:Ue,[Ue]:$n,[ln]:ln},d=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:e0,fragmentShader:n0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new R(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let f=this.type;this.render=function(E,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const v=s.getRenderTarget(),x=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Cn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=f!==Tn&&this.type===Tn,W=f===Tn&&this.type!==Tn;for(let Y=0,k=E.length;Y<k;Y++){const $=E[Y],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const tt=H.getFrameExtents();if(i.multiply(tt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,H.mapSize.y=r.y)),H.map===null||O===!0||W===!0){const et=this.type!==Tn?{minFilter:un,magFilter:un}:{};H.map!==null&&H.map.dispose(),H.map=new dn(i.x,i.y,et),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const rt=H.getViewportCount();for(let et=0;et<rt;et++){const Dt=H.getViewport(et);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),B.viewport(o),H.updateMatrices($,et),n=H.getFrustum(),M(y,A,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Tn&&S(H,A),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(v,x,L)};function S(E,y){const A=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new dn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(y,null,A,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(y,null,A,p,_,null)}function w(E,y,A,v){let x=null;const L=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)x=L;else if(x=A.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const B=x.uuid,O=y.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let Y=W[O];Y===void 0&&(Y=x.clone(),W[O]=Y,y.addEventListener("dispose",I)),x=Y}if(x.visible=y.visible,x.wireframe=y.wireframe,v===Tn?x.side=y.shadowSide!==null?y.shadowSide:y.side:x.side=y.shadowSide!==null?y.shadowSide:u[y.side],x.alphaMap=y.alphaMap,x.alphaTest=y.alphaTest,x.map=y.map,x.clipShadows=y.clipShadows,x.clippingPlanes=y.clippingPlanes,x.clipIntersection=y.clipIntersection,x.displacementMap=y.displacementMap,x.displacementScale=y.displacementScale,x.displacementBias=y.displacementBias,x.wireframeLinewidth=y.wireframeLinewidth,x.linewidth=y.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=s.properties.get(x);B.light=A}return x}function M(E,y,A,v,x){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Tn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const O=t.update(E),W=E.material;if(Array.isArray(W)){const Y=O.groups;for(let k=0,$=Y.length;k<$;k++){const H=Y[k],tt=W[H.materialIndex];if(tt&&tt.visible){const rt=w(E,tt,v,x);E.onBeforeShadow(s,E,y,A,O,rt,H),s.renderBufferDirect(A,null,O,rt,E,H),E.onAfterShadow(s,E,y,A,O,rt,H)}}}else if(W.visible){const Y=w(E,W,v,x);E.onBeforeShadow(s,E,y,A,O,Y,null),s.renderBufferDirect(A,null,O,Y,E,null),E.onAfterShadow(s,E,y,A,O,Y,null)}}const B=E.children;for(let O=0,W=B.length;O<W;O++)M(B[O],y,A,v,x)}function I(E){E.target.removeEventListener("dispose",I);for(const A in c){const v=c[A],x=E.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const s0={[xo]:Mo,[yo]:So,[bo]:Eo,[Gi]:wo,[Mo]:xo,[So]:yo,[Eo]:bo,[wo]:Gi};function r0(s,t){function e(){let D=!1;const ht=new le;let X=null;const J=new le(0,0,0,0);return{setMask:function(pt){X!==pt&&!D&&(s.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){D=pt},setClear:function(pt,dt,Ut,xe,Oe){Oe===!0&&(pt*=xe,dt*=xe,Ut*=xe),ht.set(pt,dt,Ut,xe),J.equals(ht)===!1&&(s.clearColor(pt,dt,Ut,xe),J.copy(ht))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ht=!1,X=null,J=null,pt=null;return{setReversed:function(dt){if(ht!==dt){const Ut=t.get("EXT_clip_control");ht?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const xe=pt;pt=null,this.setClear(xe)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?at(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(dt){X!==dt&&!D&&(s.depthMask(dt),X=dt)},setFunc:function(dt){if(ht&&(dt=s0[dt]),J!==dt){switch(dt){case xo:s.depthFunc(s.NEVER);break;case Mo:s.depthFunc(s.ALWAYS);break;case yo:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case bo:s.depthFunc(s.EQUAL);break;case wo:s.depthFunc(s.GEQUAL);break;case So:s.depthFunc(s.GREATER);break;case Eo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=dt}},setLocked:function(dt){D=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),s.clearDepth(dt),pt=dt)},reset:function(){D=!1,X=null,J=null,pt=null,ht=!1}}}function i(){let D=!1,ht=null,X=null,J=null,pt=null,dt=null,Ut=null,xe=null,Oe=null;return{setTest:function(se){D||(se?at(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(se){ht!==se&&!D&&(s.stencilMask(se),ht=se)},setFunc:function(se,nn,xn){(X!==se||J!==nn||pt!==xn)&&(s.stencilFunc(se,nn,xn),X=se,J=nn,pt=xn)},setOp:function(se,nn,xn){(dt!==se||Ut!==nn||xe!==xn)&&(s.stencilOp(se,nn,xn),dt=se,Ut=nn,xe=xn)},setLocked:function(se){D=se},setClear:function(se){Oe!==se&&(s.clearStencil(se),Oe=se)},reset:function(){D=!1,ht=null,X=null,J=null,pt=null,dt=null,Ut=null,xe=null,Oe=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,w=null,M=null,I=null,E=null,y=new q(0,0,0),A=0,v=!1,x=null,L=null,B=null,O=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=$>=2);let tt=null,rt={};const et=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Qt=new le().fromArray(et),K=new le().fromArray(Dt);function nt(D,ht,X,J){const pt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<X;Ut++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ht+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return dt}const xt={};xt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(s.DEPTH_TEST),o.setFunc(Gi),Xt(!1),qt(Na),at(s.CULL_FACE),F(Cn);function at(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Pt(D,ht){return u[D]!==ht?(s.bindFramebuffer(D,ht),u[D]=ht,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ot(D,ht){let X=p,J=!1;if(D){X=d.get(ht),X===void 0&&(X=[],d.set(ht,X));const pt=D.textures;if(X.length!==pt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Ut=pt.length;dt<Ut;dt++)X[dt]=s.COLOR_ATTACHMENT0+dt;X.length=pt.length,J=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,J=!0);J&&s.drawBuffers(X)}function he(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Gt={[ai]:s.FUNC_ADD,[dh]:s.FUNC_SUBTRACT,[fh]:s.FUNC_REVERSE_SUBTRACT};Gt[ph]=s.MIN,Gt[mh]=s.MAX;const Se={[gh]:s.ZERO,[_h]:s.ONE,[vh]:s.SRC_COLOR,[_o]:s.SRC_ALPHA,[Sh]:s.SRC_ALPHA_SATURATE,[bh]:s.DST_COLOR,[Mh]:s.DST_ALPHA,[xh]:s.ONE_MINUS_SRC_COLOR,[vo]:s.ONE_MINUS_SRC_ALPHA,[wh]:s.ONE_MINUS_DST_COLOR,[yh]:s.ONE_MINUS_DST_ALPHA,[Eh]:s.CONSTANT_COLOR,[Th]:s.ONE_MINUS_CONSTANT_COLOR,[Ah]:s.CONSTANT_ALPHA,[Rh]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,ht,X,J,pt,dt,Ut,xe,Oe,se){if(D===Cn){_===!0&&(Tt(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),D!==uh){if(D!==m||se!==v){if((f!==ai||M!==ai)&&(s.blendEquation(s.FUNC_ADD),f=ai,M=ai),se)switch(D){case ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Me:s.blendFunc(s.ONE,s.ONE);break;case Ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Me:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,I=null,E=null,y.set(0,0,0),A=0,m=D,v=se}return}pt=pt||ht,dt=dt||X,Ut=Ut||J,(ht!==f||pt!==M)&&(s.blendEquationSeparate(Gt[ht],Gt[pt]),f=ht,M=pt),(X!==S||J!==w||dt!==I||Ut!==E)&&(s.blendFuncSeparate(Se[X],Se[J],Se[dt],Se[Ut]),S=X,w=J,I=dt,E=Ut),(xe.equals(y)===!1||Oe!==A)&&(s.blendColor(xe.r,xe.g,xe.b,Oe),y.copy(xe),A=Oe),m=D,v=!1}function Je(D,ht){D.side===ln?Tt(s.CULL_FACE):at(s.CULL_FACE);let X=D.side===Ue;ht&&(X=!X),Xt(X),D.blending===ki&&D.transparent===!1?F(Cn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function qt(D){D!==lh?(at(s.CULL_FACE),D!==L&&(D===Na?s.cullFace(s.BACK):D===ch?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),L=D}function Rt(D){D!==B&&(k&&s.lineWidth(D),B=D)}function pe(D,ht,X){D?(at(s.POLYGON_OFFSET_FILL),(O!==ht||W!==X)&&(s.polygonOffset(ht,X),O=ht,W=X)):Tt(s.POLYGON_OFFSET_FILL)}function At(D){D?at(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+Y-1),tt!==D&&(s.activeTexture(D),tt=D)}function b(D,ht,X){X===void 0&&(tt===null?X=s.TEXTURE0+Y-1:X=tt);let J=rt[X];J===void 0&&(J={type:void 0,texture:void 0},rt[X]=J),(J.type!==D||J.texture!==ht)&&(tt!==X&&(s.activeTexture(X),tt=X),s.bindTexture(D,ht||xt[D]),J.type=D,J.texture=ht)}function z(){const D=rt[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){Qt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function vt(D){K.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Yt(D,ht){let X=c.get(ht);X===void 0&&(X=new WeakMap,c.set(ht,X));let J=X.get(D);J===void 0&&(J=s.getUniformBlockIndex(ht,D.name),X.set(D,J))}function Bt(D,ht){const J=c.get(ht).get(D);l.get(ht)!==J&&(s.uniformBlockBinding(ht,J,D.__bindingPointIndex),l.set(ht,J))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,rt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,w=null,M=null,I=null,E=null,y=new q(0,0,0),A=0,v=!1,x=null,L=null,B=null,O=null,W=null,Qt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Tt,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:he,setBlending:F,setMaterial:Je,setFlipSided:Xt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:pe,setScissorTest:At,activeTexture:C,bindTexture:b,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:_t,texImage3D:Ct,updateUBOMapping:Yt,uniformBlockBinding:Bt,texStorage2D:Jt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Lt,viewport:vt,reset:ue}}function Pl(s,t,e,n){const i=o0(n);switch(e){case hc:return s*t;case dc:return s*t;case fc:return s*t*2;case pc:return s*t/i.components*i.byteLength;case ha:return s*t/i.components*i.byteLength;case mc:return s*t*2/i.components*i.byteLength;case ua:return s*t*2/i.components*i.byteLength;case uc:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case da:return s*t*4/i.components*i.byteLength;case or:case ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Do:return Math.max(s,16)*Math.max(t,8)/4;case Po:case Io:return Math.max(s,8)*Math.max(t,8)/2;case No:case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case hr:case jo:case Jo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gc:case Qo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ta:case ea:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function o0(s){switch(s){case Nn:case ac:return{byteLength:1,components:1};case xs:case lc:case Pn:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case ui:case aa:case An:return{byteLength:4,components:1};case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function a0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return p?new OffscreenCanvas(C,b):mr("canvas")}function _(C,b,z){let j=1;const Q=At(C);if((Q.width>z||Q.height>z)&&(j=z/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(j*Q.width),St=Math.floor(j*Q.height);u===void 0&&(u=g(Z,St));const ut=b?g(Z,St):u;return ut.width=Z,ut.height=St,ut.getContext("2d").drawImage(C,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+St+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(C,b,z,j,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),b===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),b===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),b===s.RGBA){const St=Q?wr:Kt.getTransfer(j);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=St===oe?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(C,b){let z;return C?b===null||b===ui||b===qi?z=s.DEPTH24_STENCIL8:b===An?z=s.DEPTH32F_STENCIL8:b===xs&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ui||b===qi?z=s.DEPTH_COMPONENT24:b===An?z=s.DEPTH_COMPONENT32F:b===xs&&(z=s.DEPTH_COMPONENT16),z}function I(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){const b=C.target;b.removeEventListener("dispose",E),A(b),b.isVideoTexture&&h.delete(b)}function y(C){const b=C.target;b.removeEventListener("dispose",y),x(b)}function A(C){const b=n.get(C);if(b.__webglInit===void 0)return;const z=C.source,j=d.get(z);if(j){const Q=j[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(C),Object.keys(j).length===0&&d.delete(z)}n.remove(C)}function v(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const z=C.source,j=d.get(z);delete j[b.__cacheKey],o.memory.textures--}function x(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Q=0;Q<b.__webglFramebuffer[j].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[j][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)s.deleteFramebuffer(b.__webglFramebuffer[j]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=C.textures;for(let j=0,Q=z.length;j<Q;j++){const Z=n.get(z[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(C)}let L=0;function B(){L=0}function O(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function W(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Y(C,b){const z=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,C,b);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function k(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){K(z,C,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function $(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){K(z,C,b);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function H(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){nt(z,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}const tt={[Ro]:s.REPEAT,[ci]:s.CLAMP_TO_EDGE,[Co]:s.MIRRORED_REPEAT},rt={[un]:s.NEAREST,[Ih]:s.NEAREST_MIPMAP_NEAREST,[Rs]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[Pr]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},et={[Fh]:s.NEVER,[Vh]:s.ALWAYS,[kh]:s.LESS,[vc]:s.LEQUAL,[Oh]:s.EQUAL,[Hh]:s.GEQUAL,[Bh]:s.GREATER,[zh]:s.NOTEQUAL};function Dt(C,b){if(b.type===An&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===Pr||b.magFilter===Rs||b.magFilter===hi||b.minFilter===_n||b.minFilter===Pr||b.minFilter===Rs||b.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,tt[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,tt[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,tt[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,rt[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==Rs&&b.minFilter!==hi||b.type===An&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));const j=b.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const Z=W(b);if(Z!==C.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Z].usedTimes++;const St=Q[C.__cacheKey];St!==void 0&&(Q[C.__cacheKey].usedTimes--,St.usedTimes===0&&v(b)),C.__cacheKey=Z,C.__webglTexture=Q[Z].texture}return z}function K(C,b,z){let j=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=s.TEXTURE_3D);const Q=Qt(C,b),Z=b.source;e.bindTexture(j,C.__webglTexture,s.TEXTURE0+z);const St=n.get(Z);if(Z.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+z);const ut=Kt.getPrimaries(Kt.workingColorSpace),gt=b.colorSpace===qn?null:Kt.getPrimaries(b.colorSpace),Jt=b.colorSpace===qn||ut===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let it=_(b.image,!1,i.maxTextureSize);it=pe(b,it);const _t=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type);let Lt=w(b.internalFormat,_t,Ct,b.colorSpace,b.isVideoTexture);Dt(j,b);let vt;const Yt=b.mipmaps,Bt=b.isVideoTexture!==!0,ue=St.__version===void 0||Q===!0,D=Z.dataReady,ht=I(b,it);if(b.isDepthTexture)Lt=M(b.format===Yi,b.type),ue&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Lt,it.width,it.height,0,_t,Ct,null));else if(b.isDataTexture)if(Yt.length>0){Bt&&ue&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,Yt[0].width,Yt[0].height);for(let X=0,J=Yt.length;X<J;X++)vt=Yt[X],Bt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,Ct,vt.data):e.texImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,_t,Ct,vt.data);b.generateMipmaps=!1}else Bt?(ue&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,it.width,it.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,_t,Ct,it.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,it.width,it.height,0,_t,Ct,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Bt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Lt,Yt[0].width,Yt[0].height,it.depth);for(let X=0,J=Yt.length;X<J;X++)if(vt=Yt[X],b.format!==cn)if(_t!==null)if(Bt){if(D)if(b.layerUpdates.size>0){const pt=Pl(vt.width,vt.height,b.format,b.type);for(const dt of b.layerUpdates){const Ut=vt.data.subarray(dt*pt/vt.data.BYTES_PER_ELEMENT,(dt+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,dt,vt.width,vt.height,1,_t,Ut)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,it.depth,_t,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Lt,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,it.depth,_t,Ct,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Lt,vt.width,vt.height,it.depth,0,_t,Ct,vt.data)}else{Bt&&ue&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,Yt[0].width,Yt[0].height);for(let X=0,J=Yt.length;X<J;X++)vt=Yt[X],b.format!==cn?_t!==null?Bt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,Ct,vt.data):e.texImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,_t,Ct,vt.data)}else if(b.isDataArrayTexture)if(Bt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Lt,it.width,it.height,it.depth),D)if(b.layerUpdates.size>0){const X=Pl(it.width,it.height,b.format,b.type);for(const J of b.layerUpdates){const pt=it.data.subarray(J*X/it.data.BYTES_PER_ELEMENT,(J+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,_t,Ct,pt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Ct,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,_t,Ct,it.data);else if(b.isData3DTexture)Bt?(ue&&e.texStorage3D(s.TEXTURE_3D,ht,Lt,it.width,it.height,it.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Ct,it.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,_t,Ct,it.data);else if(b.isFramebufferTexture){if(ue)if(Bt)e.texStorage2D(s.TEXTURE_2D,ht,Lt,it.width,it.height);else{let X=it.width,J=it.height;for(let pt=0;pt<ht;pt++)e.texImage2D(s.TEXTURE_2D,pt,Lt,X,J,0,_t,Ct,null),X>>=1,J>>=1}}else if(Yt.length>0){if(Bt&&ue){const X=At(Yt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Lt,X.width,X.height)}for(let X=0,J=Yt.length;X<J;X++)vt=Yt[X],Bt?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,_t,Ct,vt):e.texImage2D(s.TEXTURE_2D,X,Lt,_t,Ct,vt);b.generateMipmaps=!1}else if(Bt){if(ue){const X=At(it);e.texStorage2D(s.TEXTURE_2D,ht,Lt,X.width,X.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Ct,it)}else e.texImage2D(s.TEXTURE_2D,0,Lt,_t,Ct,it);m(b)&&f(j),St.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function nt(C,b,z){if(b.image.length!==6)return;const j=Qt(C,b),Q=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const Z=n.get(Q);if(Q.version!==Z.__version||j===!0){e.activeTexture(s.TEXTURE0+z);const St=Kt.getPrimaries(Kt.workingColorSpace),ut=b.colorSpace===qn?null:Kt.getPrimaries(b.colorSpace),gt=b.colorSpace===qn||St===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!Jt&&!it?_t[J]=_(b.image[J],!0,i.maxCubemapSize):_t[J]=it?b.image[J].image:b.image[J],_t[J]=pe(b,_t[J]);const Ct=_t[0],Lt=r.convert(b.format,b.colorSpace),vt=r.convert(b.type),Yt=w(b.internalFormat,Lt,vt,b.colorSpace),Bt=b.isVideoTexture!==!0,ue=Z.__version===void 0||j===!0,D=Q.dataReady;let ht=I(b,Ct);Dt(s.TEXTURE_CUBE_MAP,b);let X;if(Jt){Bt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Yt,Ct.width,Ct.height);for(let J=0;J<6;J++){X=_t[J].mipmaps;for(let pt=0;pt<X.length;pt++){const dt=X[pt];b.format!==cn?Lt!==null?Bt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Lt,vt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Yt,dt.width,dt.height,0,Lt,vt,dt.data)}}}else{if(X=b.mipmaps,Bt&&ue){X.length>0&&ht++;const J=At(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(it){Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,Lt,vt,_t[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,_t[J].width,_t[J].height,0,Lt,vt,_t[J].data);for(let pt=0;pt<X.length;pt++){const Ut=X[pt].image[J].image;Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Ut.width,Ut.height,Lt,vt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Yt,Ut.width,Ut.height,0,Lt,vt,Ut.data)}}else{Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,vt,_t[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,Lt,vt,_t[J]);for(let pt=0;pt<X.length;pt++){const dt=X[pt];Bt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Lt,vt,dt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Yt,Lt,vt,dt.image[J])}}}m(b)&&f(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function xt(C,b,z,j,Q,Z){const St=r.convert(z.format,z.colorSpace),ut=r.convert(z.type),gt=w(z.internalFormat,St,ut,z.colorSpace),Jt=n.get(b),it=n.get(z);if(it.__renderTarget=b,!Jt.__hasExternalTextures){const _t=Math.max(1,b.width>>Z),Ct=Math.max(1,b.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,gt,_t,Ct,b.depth,0,St,ut,null):e.texImage2D(Q,Z,gt,_t,Ct,0,St,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),qt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Q,it.__webglTexture,0,Xt(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Q,it.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(C,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){const j=b.depthTexture,Q=j&&j.isDepthTexture?j.type:null,Z=M(b.stencilBuffer,Q),St=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=Xt(b);qt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Z,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Z,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Z,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,C)}else{const j=b.textures;for(let Q=0;Q<j.length;Q++){const Z=j[Q],St=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),gt=w(Z.internalFormat,St,ut,Z.colorSpace),Jt=Xt(b);z&&qt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,gt,b.width,b.height):qt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,gt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const Q=j.__webglTexture,Z=Xt(b);if(b.depthTexture.format===Oi)qt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Yi)qt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const b=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=j}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Tt(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=s.createRenderbuffer(),at(b.__webglDepthbuffer[j],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),at(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(C,b,z){const j=n.get(C);b!==void 0&&xt(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Pt(C)}function he(C){const b=C.texture,z=n.get(C),j=n.get(b);C.addEventListener("dispose",y);const Q=C.textures,Z=C.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=b.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let gt=0;gt<b.mipmaps.length;gt++)z.__webglFramebuffer[ut][gt]=s.createFramebuffer()}else z.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)z.__webglFramebuffer[ut]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(St)for(let ut=0,gt=Q.length;ut<gt;ut++){const Jt=n.get(Q[ut]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&qt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const gt=Q[ut];z.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const Jt=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),_t=w(gt.internalFormat,Jt,it,gt.colorSpace,C.isXRRenderTarget===!0),Ct=Xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),at(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)xt(z.__webglFramebuffer[ut][gt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else xt(z.__webglFramebuffer[ut],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(b)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ut=0,gt=Q.length;ut<gt;ut++){const Jt=Q[ut],it=n.get(Jt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Dt(s.TEXTURE_2D,Jt),xt(z.__webglFramebuffer,C,Jt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(Jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),Dt(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)xt(z.__webglFramebuffer[gt],C,b,s.COLOR_ATTACHMENT0,ut,gt);else xt(z.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,ut,0);m(b)&&f(ut),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Gt(C){const b=C.textures;for(let z=0,j=b.length;z<j;z++){const Q=b[z];if(m(Q)){const Z=S(C),St=n.get(Q).__webglTexture;e.bindTexture(Z,St),f(Z),e.unbindTexture()}}}const Se=[],F=[];function Je(C){if(C.samples>0){if(qt(C)===!1){const b=C.textures,z=C.width,j=C.height;let Q=s.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(C),ut=b.length>1;if(ut)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Jt=n.get(b[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,z,j,0,0,z,j,Q,s.NEAREST),l===!0&&(Se.length=0,F.length=0,Se.push(s.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Se.push(Z),F.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Jt=n.get(b[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Xt(C){return Math.min(i.maxSamples,C.samples)}function qt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function pe(C,b){const z=C.colorSpace,j=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Qi&&z!==qn&&(Kt.getTransfer(z)===oe?(j!==cn||Q!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function At(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=qt}function l0(s,t){function e(n,i=qn){let r;const o=Kt.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===la)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return s.BYTE;if(n===lc)return s.SHORT;if(n===xs)return s.UNSIGNED_SHORT;if(n===aa)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===Pn)return s.HALF_FLOAT;if(n===hc)return s.ALPHA;if(n===uc)return s.RGB;if(n===cn)return s.RGBA;if(n===dc)return s.LUMINANCE;if(n===fc)return s.LUMINANCE_ALPHA;if(n===Oi)return s.DEPTH_COMPONENT;if(n===Yi)return s.DEPTH_STENCIL;if(n===pc)return s.RED;if(n===ha)return s.RED_INTEGER;if(n===mc)return s.RG;if(n===ua)return s.RG_INTEGER;if(n===da)return s.RGBA_INTEGER;if(n===or||n===ar||n===lr||n===cr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Lo||n===Io||n===Do)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Uo||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Uo)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===Oo||n===Bo||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===jo||n===Jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===Qo||n===ta||n===ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class c0 extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
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

}`;class f0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ve({vertexShader:u0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends ts{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new f0,m=e.getContextAttributes();let f=null,S=null;const w=[],M=[],I=new ct;let E=null;const y=new We;y.viewport=new le;const A=new We;A.viewport=new le;const v=[y,A],x=new c0;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=w[K];return nt===void 0&&(nt=new io,w[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=w[K];return nt===void 0&&(nt=new io,w[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=w[K];return nt===void 0&&(nt=new io,w[K]=nt),nt.getHandSpace()};function O(K){const nt=M.indexOf(K.inputSource);if(nt===-1)return;const xt=w[nt];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||o),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let K=0;K<w.length;K++){const nt=M[K];nt!==null&&(M[K]=null,w[K].disconnect(nt))}L=null,B=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,S=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new dn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,xt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Yi:Oi,xt=m.stencil?qi:ui);const Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new dn(d.textureWidth,d.textureHeight,{format:cn,type:Nn,depthTexture:new Pc(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(K){for(let nt=0;nt<K.removed.length;nt++){const xt=K.removed[nt],at=M.indexOf(xt);at>=0&&(M[at]=null,w[at].disconnect(xt))}for(let nt=0;nt<K.added.length;nt++){const xt=K.added[nt];let at=M.indexOf(xt);if(at===-1){for(let Pt=0;Pt<w.length;Pt++)if(Pt>=M.length){M.push(xt),at=Pt;break}else if(M[Pt]===null){M[Pt]=xt,at=Pt;break}if(at===-1)break}const Tt=w[at];Tt&&Tt.connect(xt)}}const k=new P,$=new P;function H(K,nt,xt){k.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);const at=k.distanceTo($),Tt=nt.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,Ot=Tt[14]/(Tt[10]-1),he=Tt[14]/(Tt[10]+1),Gt=(Tt[9]+1)/Tt[5],Se=(Tt[9]-1)/Tt[5],F=(Tt[8]-1)/Tt[0],Je=(Pt[8]+1)/Pt[0],Xt=Ot*F,qt=Ot*Je,Rt=at/(-F+Je),pe=Rt*-F;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pe),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const At=Ot+Rt,C=he+Rt,b=Xt-pe,z=qt+(at-pe),j=Gt*he/C*At,Q=Se*he/C*At;K.projectionMatrix.makePerspective(b,z,j,Q,At,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function tt(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let nt=K.near,xt=K.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),x.near=A.near=y.near=nt,x.far=A.far=y.far=xt,(L!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,B=x.far),y.layers.mask=K.layers.mask|2,A.layers.mask=K.layers.mask|4,x.layers.mask=y.layers.mask|A.layers.mask;const at=K.parent,Tt=x.cameras;tt(x,at);for(let Pt=0;Pt<Tt.length;Pt++)tt(Tt[Pt],at);Tt.length===2?H(x,y,A):x.projectionMatrix.copy(y.projectionMatrix),rt(K,x,at)};function rt(K,nt,xt){xt===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$i*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let et=null;function Dt(K,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let at=!1;xt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Pt=0;Pt<xt.length;Pt++){const Ot=xt[Pt];let he=null;if(p!==null)he=p.getViewport(Ot);else{const Se=u.getViewSubImage(d,Ot);he=Se.viewport,Pt===0&&(t.setRenderTargetTextures(S,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(S))}let Gt=v[Pt];Gt===void 0&&(Gt=new We,Gt.layers.enable(Pt),Gt.viewport=new le,v[Pt]=Gt),Gt.matrix.fromArray(Ot.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ot.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(x.matrix.copy(Gt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Gt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Pt=u.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let xt=0;xt<w.length;xt++){const at=M[xt],Tt=w[xt];at!==null&&Tt!==void 0&&Tt.update(at,nt,c||o)}et&&et(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Qt=new Cc;Qt.setAnimationLoop(Dt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}}const ii=new vn,m0=new fe;function g0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Tc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,w,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),w=S.envMap,M=S.envMapRotation;w&&(m.envMap.value=w,ii.copy(M),ii.x*=-1,ii.y*=-1,ii.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(ii)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const M=w.program;n.uniformBlockBinding(S,M)}function c(S,w){let M=i[S.id];M===void 0&&(g(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",m));const I=w.program;n.updateUBOMapping(S,I);const E=t.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function h(S){const w=u();S.__bindingPointIndex=w;const M=s.createBuffer(),I=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,I,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,M),M}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=i[S.id],M=S.uniforms,I=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,y=M.length;E<y;E++){const A=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,x=A.length;v<x;v++){const L=A[v];if(p(L,E,v,I)===!0){const B=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Y=0;Y<O.length;Y++){const k=O[Y],$=_(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,B+W,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,w,M,I){const E=S.value,y=w+"_"+M;if(I[y]===void 0)return typeof E=="number"||typeof E=="boolean"?I[y]=E:I[y]=E.clone(),!0;{const A=I[y];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return I[y]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(S){const w=S.uniforms;let M=0;const I=16;for(let y=0,A=w.length;y<A;y++){const v=Array.isArray(w[y])?w[y]:[w[y]];for(let x=0,L=v.length;x<L;x++){const B=v[x],O=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Y=O.length;W<Y;W++){const k=O[W],$=_(k),H=M%I,tt=H%$.boundary,rt=H+tt;M+=tt,rt!==0&&I-rt<$.storage&&(M+=I-rt),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=$.storage}}}const E=M%I;return E>0&&(M+=I-E),S.__size=M,S.__cache={},this}function _(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class v0{constructor(t={}){const{canvas:e=ou(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=Yn,this.toneMappingExposure=1;const M=this;let I=!1,E=0,y=0,A=null,v=-1,x=null;const L=new le,B=new le;let O=null;const W=new q(0);let Y=0,k=e.width,$=e.height,H=1,tt=null,rt=null;const et=new le(0,0,k,$),Dt=new le(0,0,k,$);let Qt=!1;const K=new ma;let nt=!1,xt=!1;const at=new fe,Tt=new fe,Pt=new P,Ot=new le,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Se(){return A===null?H:1}let F=n;function Je(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ra}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),F===null){const N="webgl2";if(F=Je(N,T),F===null)throw Je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Xt,qt,Rt,pe,At,C,b,z,j,Q,Z,St,ut,gt,Jt,it,_t,Ct,Lt,vt,Yt,Bt,ue,D;function ht(){Xt=new wp(F),Xt.init(),Bt=new l0(F,Xt),qt=new _p(F,Xt,t,Bt),Rt=new r0(F,Xt),qt.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),pe=new Tp(F),At=new Wm,C=new a0(F,Xt,Rt,At,qt,Bt,pe),b=new xp(M),z=new bp(M),j=new Iu(F),ue=new mp(F,j),Q=new Sp(F,j,pe,ue),Z=new Rp(F,Q,j,pe),Lt=new Ap(F,qt,C),it=new vp(At),St=new Gm(M,b,z,Xt,qt,ue,it),ut=new g0(M,At),gt=new qm,Jt=new Jm(Xt),Ct=new pp(M,b,z,Rt,Z,p,l),_t=new i0(M,Z,qt),D=new _0(F,pe,qt,Rt),vt=new gp(F,Xt,pe),Yt=new Ep(F,Xt,pe),pe.programs=St.programs,M.capabilities=qt,M.extensions=Xt,M.properties=At,M.renderLists=gt,M.shadowMap=_t,M.state=Rt,M.info=pe}ht();const X=new p0(M,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Xt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Xt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(k,$,!1))},this.getSize=function(T){return T.set(k,$)},this.setSize=function(T,N,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,$=N,e.width=Math.floor(T*H),e.height=Math.floor(N*H),V===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(k*H,$*H).floor()},this.setDrawingBufferSize=function(T,N,V){k=T,$=N,H=V,e.width=Math.floor(T*V),e.height=Math.floor(N*V),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,N,V,G){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,N,V,G),Rt.viewport(L.copy(et).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Dt)},this.setScissor=function(T,N,V,G){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,N,V,G),Rt.scissor(B.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(T){Rt.setScissorTest(Qt=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(T=!0,N=!0,V=!0){let G=0;if(T){let U=!1;if(A!==null){const st=A.texture.format;U=st===da||st===ua||st===ha}if(U){const st=A.texture.type,ft=st===Nn||st===ui||st===xs||st===qi||st===la||st===ca,Mt=Ct.getClearColor(),yt=Ct.getClearAlpha(),It=Mt.r,Ft=Mt.g,bt=Mt.b;ft?(g[0]=It,g[1]=Ft,g[2]=bt,g[3]=yt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=It,_[1]=Ft,_[2]=bt,_[3]=yt,F.clearBufferiv(F.COLOR,0,_))}else G|=F.COLOR_BUFFER_BIT}N&&(G|=F.DEPTH_BUFFER_BIT),V&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Jt.dispose(),At.dispose(),b.dispose(),z.dispose(),Z.dispose(),ue.dispose(),D.dispose(),St.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ta),X.removeEventListener("sessionend",Aa),jn.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=pe.autoReset,N=_t.enabled,V=_t.autoUpdate,G=_t.needsUpdate,U=_t.type;ht(),pe.autoReset=T,_t.enabled=N,_t.autoUpdate=V,_t.needsUpdate=G,_t.type=U}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ut(T){const N=T.target;N.removeEventListener("dispose",Ut),xe(N)}function xe(T){Oe(T),At.remove(T)}function Oe(T){const N=At.get(T).programs;N!==void 0&&(N.forEach(function(V){St.releaseProgram(V)}),T.isShaderMaterial&&St.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,V,G,U,st){N===null&&(N=he);const ft=U.isMesh&&U.matrixWorld.determinant()<0,Mt=rh(T,N,V,G,U);Rt.setMaterial(G,ft);let yt=V.index,It=1;if(G.wireframe===!0){if(yt=Q.getWireframeAttribute(V),yt===void 0)return;It=2}const Ft=V.drawRange,bt=V.attributes.position;let te=Ft.start*It,de=(Ft.start+Ft.count)*It;st!==null&&(te=Math.max(te,st.start*It),de=Math.min(de,(st.start+st.count)*It)),yt!==null?(te=Math.max(te,0),de=Math.min(de,yt.count)):bt!=null&&(te=Math.max(te,0),de=Math.min(de,bt.count));const me=de-te;if(me<0||me===1/0)return;ue.setup(U,G,Mt,V,yt);let qe,ee=vt;if(yt!==null&&(qe=j.get(yt),ee=Yt,ee.setIndex(qe)),U.isMesh)G.wireframe===!0?(Rt.setLineWidth(G.wireframeLinewidth*Se()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(U.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*Se()),U.isLineSegments?ee.setMode(F.LINES):U.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else U.isPoints?ee.setMode(F.POINTS):U.isSprite&&ee.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ee.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ee.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,Mn=U._multiDrawCounts,ne=U._multiDrawCount,sn=yt?j.get(yt).bytesPerElement:1,gi=At.get(G).currentProgram.getUniforms();for(let $e=0;$e<ne;$e++)gi.setValue(F,"_gl_DrawID",$e),ee.render(Et[$e]/sn,Mn[$e])}else if(U.isInstancedMesh)ee.renderInstances(te,me,U.count);else if(V.isInstancedBufferGeometry){const Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mn=Math.min(V.instanceCount,Et);ee.renderInstances(te,me,Mn)}else ee.render(te,me)};function se(T,N,V){T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=Ue,T.needsUpdate=!0,As(T,N,V),T.side=$n,T.needsUpdate=!0,As(T,N,V),T.side=ln):As(T,N,V)}this.compile=function(T,N,V=null){V===null&&(V=T),f=Jt.get(V),f.init(N),w.push(f),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),T!==V&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const G=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const st=U.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const Mt=st[ft];se(Mt,V,U),G.add(Mt)}else se(st,V,U),G.add(st)}),w.pop(),f=null,G},this.compileAsync=function(T,N,V=null){const G=this.compile(T,N,V);return new Promise(U=>{function st(){if(G.forEach(function(ft){At.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){U(T);return}setTimeout(st,10)}Xt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let nn=null;function xn(T){nn&&nn(T)}function Ta(){jn.stop()}function Aa(){jn.start()}const jn=new Cc;jn.setAnimationLoop(xn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(T){nn=T,X.setAnimationLoop(T),T===null?jn.stop():jn.start()},X.addEventListener("sessionstart",Ta),X.addEventListener("sessionend",Aa),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,N,A),f=Jt.get(T,w.length),f.init(N),w.push(f),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Tt),xt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,xt),m=gt.get(T,S.length),m.init(),S.push(m),X.enabled===!0&&X.isPresenting===!0){const st=M.xr.getDepthSensingMesh();st!==null&&Cr(st,N,-1/0,M.sortObjects)}Cr(T,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(tt,rt),Gt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Gt&&Ct.addToRenderList(m,T),this.info.render.frame++,nt===!0&&it.beginShadows();const V=f.state.shadowsArray;_t.render(V,T,N),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){const st=N.cameras;if(U.length>0)for(let ft=0,Mt=st.length;ft<Mt;ft++){const yt=st[ft];Ca(G,U,T,yt)}Gt&&Ct.render(T);for(let ft=0,Mt=st.length;ft<Mt;ft++){const yt=st[ft];Ra(m,T,yt,yt.viewport)}}else U.length>0&&Ca(G,U,T,N),Gt&&Ct.render(T),Ra(m,T,N);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(M,T,N),ue.resetDefaultState(),v=-1,x=null,w.pop(),w.length>0?(f=w[w.length-1],nt===!0&&it.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Cr(T,N,V,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){G&&Ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Tt);const ft=Z.update(T),Mt=T.material;Mt.visible&&m.push(T,ft,Mt,V,Ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const ft=Z.update(T),Mt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ot.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ot.copy(ft.boundingSphere.center)),Ot.applyMatrix4(T.matrixWorld).applyMatrix4(Tt)),Array.isArray(Mt)){const yt=ft.groups;for(let It=0,Ft=yt.length;It<Ft;It++){const bt=yt[It],te=Mt[bt.materialIndex];te&&te.visible&&m.push(T,ft,te,V,Ot.z,bt)}}else Mt.visible&&m.push(T,ft,Mt,V,Ot.z,null)}}const st=T.children;for(let ft=0,Mt=st.length;ft<Mt;ft++)Cr(st[ft],N,V,G)}function Ra(T,N,V,G){const U=T.opaque,st=T.transmissive,ft=T.transparent;f.setupLightsView(V),nt===!0&&it.setGlobalState(M.clippingPlanes,V),G&&Rt.viewport(L.copy(G)),U.length>0&&Ts(U,N,V),st.length>0&&Ts(st,N,V),ft.length>0&&Ts(ft,N,V),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Ca(T,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new dn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Pn:Nn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const st=f.state.transmissionRenderTarget[G.id],ft=G.viewport||L;st.setSize(ft.z,ft.w);const Mt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(W),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),Gt&&Ct.render(V);const yt=M.toneMapping;M.toneMapping=Yn;const It=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),nt===!0&&it.setGlobalState(M.clippingPlanes,G),Ts(T,V,G),C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let bt=0,te=N.length;bt<te;bt++){const de=N[bt],me=de.object,qe=de.geometry,ee=de.material,Et=de.group;if(ee.side===ln&&me.layers.test(G.layers)){const Mn=ee.side;ee.side=Ue,ee.needsUpdate=!0,Pa(me,V,G,qe,ee,Et),ee.side=Mn,ee.needsUpdate=!0,Ft=!0}}Ft===!0&&(C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st))}M.setRenderTarget(Mt),M.setClearColor(W,Y),It!==void 0&&(G.viewport=It),M.toneMapping=yt}function Ts(T,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,st=T.length;U<st;U++){const ft=T[U],Mt=ft.object,yt=ft.geometry,It=G===null?ft.material:G,Ft=ft.group;Mt.layers.test(V.layers)&&Pa(Mt,N,V,yt,It,Ft)}}function Pa(T,N,V,G,U,st){T.onBeforeRender(M,N,V,G,U,st),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(M,N,V,G,T,st),U.transparent===!0&&U.side===ln&&U.forceSinglePass===!1?(U.side=Ue,U.needsUpdate=!0,M.renderBufferDirect(V,N,G,U,T,st),U.side=$n,U.needsUpdate=!0,M.renderBufferDirect(V,N,G,U,T,st),U.side=ln):M.renderBufferDirect(V,N,G,U,T,st),T.onAfterRender(M,N,V,G,U,st)}function As(T,N,V){N.isScene!==!0&&(N=he);const G=At.get(T),U=f.state.lights,st=f.state.shadowsArray,ft=U.state.version,Mt=St.getParameters(T,U.state,st,N,V),yt=St.getProgramCacheKey(Mt);let It=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?z:b).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",Ut),It=new Map,G.programs=It);let Ft=It.get(yt);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===ft)return Ia(T,Mt),Ft}else Mt.uniforms=St.getUniforms(T),T.onBeforeCompile(Mt,M),Ft=St.acquireProgram(Mt,yt),It.set(yt,Ft),G.uniforms=Mt.uniforms;const bt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(bt.clippingPlanes=it.uniform),Ia(T,Mt),G.needsLights=ah(T),G.lightsStateVersion=ft,G.needsLights&&(bt.ambientLightColor.value=U.state.ambient,bt.lightProbe.value=U.state.probe,bt.directionalLights.value=U.state.directional,bt.directionalLightShadows.value=U.state.directionalShadow,bt.spotLights.value=U.state.spot,bt.spotLightShadows.value=U.state.spotShadow,bt.rectAreaLights.value=U.state.rectArea,bt.ltc_1.value=U.state.rectAreaLTC1,bt.ltc_2.value=U.state.rectAreaLTC2,bt.pointLights.value=U.state.point,bt.pointLightShadows.value=U.state.pointShadow,bt.hemisphereLights.value=U.state.hemi,bt.directionalShadowMap.value=U.state.directionalShadowMap,bt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,bt.spotShadowMap.value=U.state.spotShadowMap,bt.spotLightMatrix.value=U.state.spotLightMatrix,bt.spotLightMap.value=U.state.spotLightMap,bt.pointShadowMap.value=U.state.pointShadowMap,bt.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function La(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=ur.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Ia(T,N){const V=At.get(T);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function rh(T,N,V,G,U){N.isScene!==!0&&(N=he),C.resetTextureUnits();const st=N.fog,ft=G.isMeshStandardMaterial?N.environment:null,Mt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qi,yt=(G.isMeshStandardMaterial?z:b).get(G.envMap||ft),It=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!V.morphAttributes.position,te=!!V.morphAttributes.normal,de=!!V.morphAttributes.color;let me=Yn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=M.toneMapping);const qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=qe!==void 0?qe.length:0,Et=At.get(G),Mn=f.state.lights;if(nt===!0&&(xt===!0||T!==x)){const Qe=T===x&&G.id===v;it.setState(G,T,Qe)}let ne=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Mn.state.version||Et.outputColorSpace!==Mt||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==yt||G.fog===!0&&Et.fog!==st||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==It||Et.vertexTangents!==Ft||Et.morphTargets!==bt||Et.morphNormals!==te||Et.morphColors!==de||Et.toneMapping!==me||Et.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Et.__version=G.version);let sn=Et.currentProgram;ne===!0&&(sn=As(G,N,U));let gi=!1,$e=!1,ss=!1;const ge=sn.getUniforms(),pn=Et.uniforms;if(Rt.useProgram(sn.program)&&(gi=!0,$e=!0,ss=!0),G.id!==v&&(v=G.id,$e=!0),gi||x!==T){Rt.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),lu(at),cu(at),ge.setValue(F,"projectionMatrix",at)):ge.setValue(F,"projectionMatrix",T.projectionMatrix),ge.setValue(F,"viewMatrix",T.matrixWorldInverse);const kn=ge.map.cameraPosition;kn!==void 0&&kn.setValue(F,Pt.setFromMatrixPosition(T.matrixWorld)),qt.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,$e=!0,ss=!0)}if(U.isSkinnedMesh){ge.setOptional(F,U,"bindMatrix"),ge.setOptional(F,U,"bindMatrixInverse");const Qe=U.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ge.setValue(F,"boneTexture",Qe.boneTexture,C))}U.isBatchedMesh&&(ge.setOptional(F,U,"batchingTexture"),ge.setValue(F,"batchingTexture",U._matricesTexture,C),ge.setOptional(F,U,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",U._indirectTexture,C),ge.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",U._colorsTexture,C));const rs=V.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Lt.update(U,V,sn),($e||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,ge.setValue(F,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pn.envMap.value=yt,pn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),$e&&(ge.setValue(F,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&oh(pn,ss),st&&G.fog===!0&&ut.refreshFogUniforms(pn,st),ut.refreshMaterialUniforms(pn,G,H,$,f.state.transmissionRenderTarget[T.id]),ur.upload(F,La(Et),pn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ur.upload(F,La(Et),pn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(F,"center",U.center),ge.setValue(F,"modelViewMatrix",U.modelViewMatrix),ge.setValue(F,"normalMatrix",U.normalMatrix),ge.setValue(F,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qe=G.uniformsGroups;for(let kn=0,On=Qe.length;kn<On;kn++){const Da=Qe[kn];D.update(Da,sn),D.bind(Da,sn)}}return sn}function oh(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function ah(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,N,V){At.get(T.texture).__webglTexture=N,At.get(T.depthTexture).__webglTexture=V;const G=At.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const V=At.get(T);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,V=0){A=T,E=N,y=V;let G=!0,U=null,st=!1,ft=!1;if(T){const yt=At.get(T);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(yt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(yt.__hasExternalTextures)C.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const bt=T.depthTexture;if(yt.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(T.width!==bt.image.width||T.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Ft=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?U=Ft[N][V]:U=Ft[N],st=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?U=At.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?U=Ft[V]:U=Ft,L.copy(T.viewport),B.copy(T.scissor),O=T.scissorTest}else L.copy(et).multiplyScalar(H).floor(),B.copy(Dt).multiplyScalar(H).floor(),O=Qt;if(Rt.bindFramebuffer(F.FRAMEBUFFER,U)&&G&&Rt.drawBuffers(T,U),Rt.viewport(L),Rt.scissor(B),Rt.setScissorTest(O),st){const yt=At.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,V)}else if(ft){const yt=At.get(T.texture),It=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,yt.__webglTexture,V||0,It)}v=-1},this.readRenderTargetPixels=function(T,N,V,G,U,st,ft){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Rt.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const yt=T.texture,It=yt.format,Ft=yt.type;if(!qt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&V>=0&&V<=T.height-U&&F.readPixels(N,V,G,U,Bt.convert(It),Bt.convert(Ft),st)}finally{const yt=A!==null?At.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(T,N,V,G,U,st,ft){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const yt=T.texture,It=yt.format,Ft=yt.type;if(!qt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-G&&V>=0&&V<=T.height-U){Rt.bindFramebuffer(F.FRAMEBUFFER,Mt);const bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.bufferData(F.PIXEL_PACK_BUFFER,st.byteLength,F.STREAM_READ),F.readPixels(N,V,G,U,Bt.convert(It),Bt.convert(Ft),0);const te=A!==null?At.get(A).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,te);const de=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await au(F,de,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,st),F.deleteBuffer(bt),F.deleteSync(de),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,V=0){T.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),U=Math.floor(T.image.width*G),st=Math.floor(T.image.height*G),ft=N!==null?N.x:0,Mt=N!==null?N.y:0;C.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,ft,Mt,U,st),Rt.unbindTexture()},this.copyTextureToTexture=function(T,N,V=null,G=null,U=0){T.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],N=arguments[2],U=arguments[3]||0,V=null);let st,ft,Mt,yt,It,Ft,bt,te,de;const me=T.isCompressedTexture?T.mipmaps[U]:T.image;V!==null?(st=V.max.x-V.min.x,ft=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,It=V.min.y,Ft=V.isBox3?V.min.z:0):(st=me.width,ft=me.height,Mt=me.depth||1,yt=0,It=0,Ft=0),G!==null?(bt=G.x,te=G.y,de=G.z):(bt=0,te=0,de=0);const qe=Bt.convert(N.format),ee=Bt.convert(N.type);let Et;N.isData3DTexture?(C.setTexture3D(N,0),Et=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Et=F.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const Mn=F.getParameter(F.UNPACK_ROW_LENGTH),ne=F.getParameter(F.UNPACK_IMAGE_HEIGHT),sn=F.getParameter(F.UNPACK_SKIP_PIXELS),gi=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);const ss=T.isDataArrayTexture||T.isData3DTexture,ge=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const pn=At.get(T),rs=At.get(N),Qe=At.get(pn.__renderTarget),kn=At.get(rs.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let On=0;On<Mt;On++)ss&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(T).__webglTexture,U,Ft+On),T.isDepthTexture?(ge&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(N).__webglTexture,U,de+On),F.blitFramebuffer(yt,It,st,ft,bt,te,st,ft,F.DEPTH_BUFFER_BIT,F.NEAREST)):ge?F.copyTexSubImage3D(Et,U,bt,te,de+On,yt,It,st,ft):F.copyTexSubImage2D(Et,U,bt,te,de+On,yt,It,st,ft);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Et,U,bt,te,de,st,ft,Mt,qe,ee,me.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,U,bt,te,de,st,ft,Mt,qe,me.data):F.texSubImage3D(Et,U,bt,te,de,st,ft,Mt,qe,ee,me):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,bt,te,st,ft,qe,ee,me.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,bt,te,me.width,me.height,qe,me.data):F.texSubImage2D(F.TEXTURE_2D,U,bt,te,st,ft,qe,ee,me);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne),F.pixelStorei(F.UNPACK_SKIP_PIXELS,sn),F.pixelStorei(F.UNPACK_SKIP_ROWS,gi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),U===0&&N.generateMipmaps&&F.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(T,N,V=null,G=null,U=0){return T.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],N=arguments[3],U=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,V,G,U)},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Rt.unbindTexture()},this.resetState=function(){E=0,y=0,A=null,Rt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class va{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new q(t),this.near=e,this.far=n}clone(){return new va(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xa extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uc extends mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _r=new P,vr=new P,Ll=new fe,hs=new pa,Ks=new ys,so=new P,Il=new P;class Fc extends Re{constructor(t=new Pe,e=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)_r.fromBufferAttribute(e,i-1),vr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_r.distanceTo(vr);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;Ll.copy(i).invert(),hs.copy(t.ray).applyMatrix4(Ll);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),S=h.getX(_+1),w=Zs(this,t,hs,l,f,S);w&&e.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Zs(this,t,hs,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=Zs(this,t,hs,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Zs(this,t,hs,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zs(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(_r.fromBufferAttribute(o,i),vr.fromBufferAttribute(o,r),e.distanceSqToSegment(_r,vr,so,Il)>n)return;so.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(so);if(!(l<t.near||l>t.far))return{distance:l,point:Il.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Dl=new P,Nl=new P;class x0 extends Fc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Dl.fromBufferAttribute(e,i),Nl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dl.distanceTo(Nl);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M0 extends mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ul=new fe,ia=new pa,js=new ys,Js=new P;class Fl extends Re{constructor(t=new Pe,e=new M0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;Ul.copy(i).invert(),ia.copy(t.ray).applyMatrix4(Ul);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Js.fromBufferAttribute(u,m),kl(Js,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Js.fromBufferAttribute(u,g),kl(Js,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kl(s,t,e,n,i,r,o){const a=ia.distanceSqToPoint(s);if(a<e){const l=new P;ia.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new ct:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],o=[],a=new P,l=new fe;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Fe(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Fe(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class kc extends Un{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class y0 extends kc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ma(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Qs=new P,ro=new Ma,oo=new Ma,ao=new Ma;class xr extends Un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Qs.subVectors(i[0],i[1]).add(i[0]),c=Qs);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Qs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ro.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),oo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ao.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ro.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),oo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ao.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ro.calc(l),oo.calc(l),ao.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ol(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function b0(s,t){const e=1-s;return e*e*t}function w0(s,t){return 2*(1-s)*s*t}function S0(s,t){return s*s*t}function _s(s,t,e,n){return b0(s,t)+w0(s,e)+S0(s,n)}function E0(s,t){const e=1-s;return e*e*e*t}function T0(s,t){const e=1-s;return 3*e*e*s*t}function A0(s,t){return 3*(1-s)*s*s*t}function R0(s,t){return s*s*s*t}function vs(s,t,e,n,i){return E0(s,t)+T0(s,e)+A0(s,n)+R0(s,i)}class C0 extends Un{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,i.x,r.x,o.x,a.x),vs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class P0 extends Un{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,i.x,r.x,o.x,a.x),vs(t,i.y,r.y,o.y,a.y),vs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class L0 extends Un{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I0 extends Un{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D0 extends Un{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,i.x,r.x,o.x),_s(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oc extends Un{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,i.x,r.x,o.x),_s(t,i.y,r.y,o.y),_s(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class N0 extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ol(a,l.x,c.x,h.x,u.x),Ol(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var U0=Object.freeze({__proto__:null,ArcCurve:y0,CatmullRomCurve3:xr,CubicBezierCurve:C0,CubicBezierCurve3:P0,EllipseCurve:kc,LineCurve:L0,LineCurve3:I0,QuadraticBezierCurve:D0,QuadraticBezierCurve3:Oc,SplineCurve:N0});class ws extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ht extends Pe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;S(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function S(){const M=new P,I=new P;let E=0;const y=(e-t)/n;for(let A=0;A<=r;A++){const v=[],x=A/r,L=x*(e-t)+t;for(let B=0;B<=i;B++){const O=B/i,W=O*l+a,Y=Math.sin(W),k=Math.cos(W);I.x=L*Y,I.y=-x*n+m,I.z=L*k,u.push(I.x,I.y,I.z),M.set(Y,y,k).normalize(),d.push(M.x,M.y,M.z),p.push(O,1-x),v.push(g++)}_.push(v)}for(let A=0;A<i;A++)for(let v=0;v<r;v++){const x=_[v][A],L=_[v+1][A],B=_[v+1][A+1],O=_[v][A+1];(t>0||v!==0)&&(h.push(x,L,O),E+=3),(e>0||v!==r-1)&&(h.push(L,B,O),E+=3)}c.addGroup(f,E,0),f+=E}function w(M){const I=g,E=new ct,y=new P;let A=0;const v=M===!0?t:e,x=M===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const L=g;for(let B=0;B<=i;B++){const W=B/i*l+a,Y=Math.cos(W),k=Math.sin(W);y.x=v*k,y.y=m*x,y.z=v*Y,u.push(y.x,y.y,y.z),d.push(0,x,0),E.x=Y*.5+.5,E.y=k*.5*x+.5,p.push(E.x,E.y),g++}for(let B=0;B<i;B++){const O=I+B,W=L+B;M===!0?h.push(W,W+1,O):h.push(W+1,W,O),A+=3}c.addGroup(f,A,M===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ce extends Ht{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ce(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ss extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const w=new P,M=new P,I=new P;for(let E=0;E<e.length;E+=3)p(e[E+0],w),p(e[E+1],M),p(e[E+2],I),l(w,M,I,S)}function l(S,w,M,I){const E=I+1,y=[];for(let A=0;A<=E;A++){y[A]=[];const v=S.clone().lerp(M,A/E),x=w.clone().lerp(M,A/E),L=E-A;for(let B=0;B<=L;B++)B===0&&A===E?y[A][B]=v:y[A][B]=v.clone().lerp(x,B/L)}for(let A=0;A<E;A++)for(let v=0;v<2*(E-A)-1;v++){const x=Math.floor(v/2);v%2===0?(d(y[A][x+1]),d(y[A+1][x]),d(y[A][x])):(d(y[A][x+1]),d(y[A+1][x+1]),d(y[A+1][x]))}}function c(S){const w=new P;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(S),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function h(){const S=new P;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const M=m(S)/2/Math.PI+.5,I=f(S)/Math.PI+.5;o.push(M,1-I)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const w=o[S+0],M=o[S+2],I=o[S+4],E=Math.max(w,M,I),y=Math.min(w,M,I);E>.9&&y<.1&&(w<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),I<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,w){const M=S*3;w.x=t[M+0],w.y=t[M+1],w.z=t[M+2]}function g(){const S=new P,w=new P,M=new P,I=new P,E=new ct,y=new ct,A=new ct;for(let v=0,x=0;v<r.length;v+=9,x+=6){S.set(r[v+0],r[v+1],r[v+2]),w.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),E.set(o[x+0],o[x+1]),y.set(o[x+2],o[x+3]),A.set(o[x+4],o[x+5]),I.copy(S).add(w).add(M).divideScalar(3);const L=m(I);_(E,x+0,S,L),_(y,x+2,w,L),_(A,x+4,M,L)}}function _(S,w,M,I){I<0&&S.x===1&&(o[w]=S.x-1),M.x===0&&M.z===0&&(o[w]=I/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.vertices,t.indices,t.radius,t.details)}}const tr=new P,er=new P,lo=new P,nr=new en;class F0 extends Pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Bi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:f}=nr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),nr.getNormal(lo),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const w=(S+1)%3,M=u[S],I=u[w],E=nr[h[S]],y=nr[h[w]],A=`${M}_${I}`,v=`${I}_${M}`;v in d&&d[v]?(lo.dot(d[v].normal)<=r&&(p.push(E.x,E.y,E.z),p.push(y.x,y.y,y.z)),d[v]=null):A in d||(d[A]={index0:c[S],index1:c[w],normal:lo.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];tr.fromBufferAttribute(a,_),er.fromBufferAttribute(a,m),p.push(tr.x,tr.y,tr.z),p.push(er.x,er.y,er.z)}this.setAttribute("position",new ie(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class hn extends Ss{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hn(t.radius,t.detail)}}class ke extends Ss{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ke(t.radius,t.detail)}}class mt extends Pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const S=[],w=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){const E=I/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+M,1-w),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const w=h[f][S+1],M=h[f][S],I=h[f+1][S],E=h[f+1][S+1];(f!==0||o>0)&&p.push(w,M,E),(f!==n-1||l<Math.PI)&&p.push(M,I,E)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hi extends Ss{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hi(t.radius,t.detail)}}class Wt extends Pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,S=(i+1)*p+g;o.push(_,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Er extends Pe{constructor(t=new Oc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new ct;let h=new P;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function _(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),S(),f()}function m(w){h=t.getPointAt(w/e,h);const M=o.normals[w],I=o.binormals[w];for(let E=0;E<=i;E++){const y=E/i*Math.PI*2,A=Math.sin(y),v=-Math.cos(y);l.x=v*M.x+A*I.x,l.y=v*M.y+A*I.y,l.z=v*M.z+A*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let w=1;w<=e;w++)for(let M=1;M<=i;M++){const I=(i+1)*(w-1)+(M-1),E=(i+1)*w+(M-1),y=(i+1)*w+M,A=(i+1)*(w-1)+M;g.push(I,E,A),g.push(E,y,A)}}function S(){for(let w=0;w<=e;w++)for(let M=0;M<=i;M++)c.x=w/e,c.y=M/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Er(new U0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class k0 extends ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class In extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tr extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new q(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const co=new fe,Bl=new P,zl=new P;class ya{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bl),zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zl),e.updateMatrixWorld(),co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class O0 extends ya{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=$i*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class B0 extends Tr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new O0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Hl=new fe,us=new P,ho=new P;class z0 extends ya{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(t.matrixWorld),n.position.copy(us),ho.copy(n.position),ho.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ho),n.updateMatrixWorld(),i.makeTranslation(-us.x,-us.y,-us.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl)}}class Vi extends Tr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new z0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class H0 extends ya{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bc extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new H0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zc extends Tr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);const Vc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V0=new ga(-1,1,1,-1,0,1);class G0 extends Pe{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const W0=new G0;class ba{constructor(t){this._mesh=new R(W0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,V0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Gc extends is{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Zi.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ba(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gl extends is{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class X0 extends is{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Wc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ct);this._width=n.width,this._height=n.height,e=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gc(Vc),this.copyPass.material.blending=Cn,this.clock=new Hc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gl!==void 0&&(o instanceof Gl?n=!0:o instanceof X0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xc extends is{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new q}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const q0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class fi extends is{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new q(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(r,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new dn(r,o,{type:Pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new dn(r,o,{type:Pn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=q0;this.highPassUniforms=Zi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ct(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Vc;this.copyUniforms=Zi.clone(h.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Me,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new q,this.oldClearAlpha=1,this.basic=new $t,this.fsQuad=new ba(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=fi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=fi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}fi.BlurDirectionX=new ct(1,0);fi.BlurDirectionY=new ct(0,1);const Y0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class qc extends is{constructor(){super();const t=Y0;this.uniforms=Zi.clone(t.uniforms),this.material=new k0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ba(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ec?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yc extends xa{constructor(){super();const t=new ot;t.deleteAttribute("uv");const e=new In({side:Ue}),n=new In,i=new Vi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new R(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new R(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new R(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new R(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new R(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new R(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new R(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new R(t,Li(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new R(t,Li(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new R(t,Li(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new R(t,Li(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new R(t,Li(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new R(t,Li(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Li(s){const t=new $t;return t.color.setScalar(s),t}const Ar=`
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
`,$0=`
varying vec3 vWorldPos;
varying vec3 vDir;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,K0=`
uniform float uTime;
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uC;
varying vec3 vWorldPos;
varying vec3 vDir;

${Ar}

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
`,Z0=`
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
`,j0=`
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

${Ar}

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
`,J0=`
varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  vUv = uv;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Q0=`
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec2 vUv;
varying vec3 vWorldPos;

${Ar}

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
`,tg=`
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
`,eg=`
uniform float uTime;
uniform vec3 uLightDir;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vObj;

${Ar}

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
`,ng=`
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,ig=`
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
`,sg=`
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
`,rg=`
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
`,og=`
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
`,ag=`
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
`,lg=`
attribute vec3 aColor;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;

void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,cg=`
varying vec3 vColor;
varying float vAlpha;

void main() {
  gl_FragColor = vec4(vColor, vAlpha);
}
`,hg=`
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,ug=`
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
`,dg={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBoost:{value:0},uHurt:{value:0},uSunPos:{value:new ct(.72,.68)},uResolution:{value:new ct(1,1)},uFlare:{value:1},uCockpit:{value:0},uGate:{value:0},uKick:{value:0}},vertexShader:`
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
  `};function dr(s){let t=s>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Dn(s,t=new P(0,1,0)){const e=s.clone().normalize(),n=t.clone();Math.abs(e.dot(n))>.92&&n.set(1,0,0),n.addScaledVector(e,-n.dot(e)),n.lengthSq()<1e-8&&n.set(1,0,0),n.normalize();const i=new P().crossVectors(e,n).normalize(),r=new P().crossVectors(i,e).normalize();return{tangent:e,normal:r,binormal:i}}function ms(s,t,e=0,n=0){const i=s.sample(Math.max(8,t)),r=Dn(i.tangent),o=i.pos.clone().addScaledVector(r.binormal,e).addScaledVector(r.normal,n);return{sample:i,frame:r,pos:o}}function mn(s,t,e){return s+(t-s)*e}function He(s,t,e){return Math.max(t,Math.min(e,s))}class fg{constructor(){this.points=[],this.rng=dr(41854),this.cursor=0;for(let t=0;t<64;t++)this._append();this.curve=new xr(this.points,!1,"catmullrom",.45),this._length=this.curve.getLength()}_append(){const t=this.cursor++,e=Math.sin(t*.09)*16+Math.sin(t*.031)*8,n=Math.cos(t*.055)*7+Math.sin(t*.13)*3.5,i=-t*42;this.points.push(new P(e,n,i))}ensure(t){for(;this._length-t<900;)this._append(),this.curve=new xr(this.points,!1,"catmullrom",.45),this._length=this.curve.getLength()}sample(t){this.ensure(t);const e=this._length,n=He(t/e,0,.995),i=this.curve.getPointAt(n),r=this.curve.getTangentAt(n).normalize(),o=this.curve.getPointAt(He(n+.01,0,1));return{pos:i,tangent:r,ahead:o,u:n}}rebuildRibbon(){return new Er(this.curve,360,1.35,12,!1)}}const pg=90,ds=1800,Ii=700;class mg{constructor(t){this.scene=t,this.time=0,this.crystals=[],this.crystalData=[],this.lightPos=Array.from({length:6},()=>new P),this.lightColor=Array.from({length:6},()=>new P(1,1,1)),this.lightInt=new Float32Array(6),this.crystalMat=this._crystalMaterial(),this._chapterId="default",this._chapterT=1,this._chapterFrom=this._palette("default"),this._chapterTo=this._chapterFrom,this._addSky(),this._addPlanet(),this._addSun(),this._addDust(),this._addSpores(),this._buildCrystals()}_palette(t){const e={default:{skyA:new q("#3a0a58"),skyB:new q("#0b3d6a"),skyC:new q("#ff3bd4"),ribbonA:new q("#5ce1ff"),ribbonB:new q("#ff3bd4"),fog:new q("#12051f"),crystal:new q("#6a3cff"),glow:new q("#7cf0ff"),sun:new q("#ffe6c4"),ambient:new q("#3a1a58")},queen:{skyA:new q("#4a0528"),skyB:new q("#1a0840"),skyC:new q("#ff3bd4"),ribbonA:new q("#ff64e8"),ribbonB:new q("#5ce1ff"),fog:new q("#220818"),crystal:new q("#9b2bff"),glow:new q("#ff64e8"),sun:new q("#ffb0d8"),ambient:new q("#4a1238")},warden:{skyA:new q("#3a1808"),skyB:new q("#1a0a28"),skyC:new q("#ffd166"),ribbonA:new q("#ffd166"),ribbonB:new q("#ff8a1a"),fog:new q("#1a0c08"),crystal:new q("#5a1a8a"),glow:new q("#ffd166"),sun:new q("#ffd9a0"),ambient:new q("#3a2210")},coil:{skyA:new q("#4a0a10"),skyB:new q("#2a0818"),skyC:new q("#ff6a3a"),ribbonA:new q("#ff8a3a"),ribbonB:new q("#ff3bd4"),fog:new q("#180608"),crystal:new q("#ff5a2a"),glow:new q("#ffb07a"),sun:new q("#ffc8a0"),ambient:new q("#3a1210")},empress:{skyA:new q("#2a0428"),skyB:new q("#120830"),skyC:new q("#ffd166"),ribbonA:new q("#ff3bd4"),ribbonB:new q("#ffd166"),fog:new q("#140414"),crystal:new q("#ff64e8"),glow:new q("#ffe29a"),sun:new q("#ffd0ea"),ambient:new q("#3a0a30")},finale:{skyA:new q("#081828"),skyB:new q("#2a0548"),skyC:new q("#5ce1ff"),ribbonA:new q("#5ce1ff"),ribbonB:new q("#ffd166"),fog:new q("#081018"),crystal:new q("#1f6dff"),glow:new q("#9be7ff"),sun:new q("#c8e8ff"),ambient:new q("#1a2858")}};return e[t]||e.default}setChapter(t){const e=t||"default";this._chapterId===e&&this._chapterT>=1||this._chapterId!==e&&(this._chapterFrom=this._sampleChapter(),this._chapterTo=this._palette(e),this._chapterId=e,this._chapterT=0)}_sampleChapter(){const t=this._chapterT??1,e=this._chapterFrom||this._palette("default"),n=this._chapterTo||e,i=(r,o)=>new q().lerpColors(r,o,t);return{skyA:i(e.skyA,n.skyA),skyB:i(e.skyB,n.skyB),skyC:i(e.skyC,n.skyC),ribbonA:i(e.ribbonA,n.ribbonA),ribbonB:i(e.ribbonB,n.ribbonB),fog:i(e.fog,n.fog),crystal:i(e.crystal,n.crystal),glow:i(e.glow,n.glow),sun:i(e.sun,n.sun),ambient:i(e.ambient,n.ambient)}}_applyChapter(t){const e=this._chapterFrom,n=this._chapterTo;if(!e||!n)return;this.skyMat.uniforms.uA.value.lerpColors(e.skyA,n.skyA,t),this.skyMat.uniforms.uB.value.lerpColors(e.skyB,n.skyB,t),this.skyMat.uniforms.uC.value.lerpColors(e.skyC,n.skyC,t),this.ribbonMat&&(this.ribbonMat.uniforms.uColorA.value.lerpColors(e.ribbonA,n.ribbonA,t),this.ribbonMat.uniforms.uColorB.value.lerpColors(e.ribbonB,n.ribbonB,t)),this.sunLight&&this.sunLight.color.lerpColors(e.sun,n.sun,t),this._ambient&&this._ambient.color.lerpColors(e.ambient,n.ambient,t);const i=new q().lerpColors(e.fog,n.fog,t),r=new q().lerpColors(e.glow,n.glow,t);for(const o of this.crystals)o.material.uniforms.uFogColor.value.copy(i),o.material.uniforms.uGlow.value.copy(r)}_crystalMaterial(){return new ve({uniforms:{uTime:{value:0},uColor:{value:new q("#6a3cff")},uGlow:{value:new q("#7cf0ff")},uLightPos:{value:this.lightPos},uLightColor:{value:this.lightColor},uLightInt:{value:this.lightInt},uFogColor:{value:new q("#12051f")},uFogDensity:{value:.0048}},vertexShader:Z0,fragmentShader:j0,transparent:!0,depthWrite:!0})}_addSky(){const t=new mt(900,48,32);this.skyMat=new ve({uniforms:{uTime:{value:0},uA:{value:new q("#3a0a58")},uB:{value:new q("#0b3d6a")},uC:{value:new q("#ff3bd4")}},vertexShader:$0,fragmentShader:K0,side:Ue,depthWrite:!1,fog:!1}),this.sky=new R(t,this.skyMat),this.scene.add(this.sky)}_addPlanet(){this.planetGroup=new ae;const t=new ve({uniforms:{uTime:{value:0},uLightDir:{value:new P(.45,.35,.82).normalize()}},vertexShader:tg,fragmentShader:eg});this.planet=new R(new mt(70,64,48),t);const e=new ve({uniforms:{uColor:{value:new q("#66a0ff")}},vertexShader:ng,fragmentShader:ig,transparent:!0,blending:Me,depthWrite:!1,side:Ue});this.atmo=new R(new mt(82,48,32),e),this.planetGroup.add(this.planet,this.atmo),this.scene.add(this.planetGroup),this.planetMat=t}_addSun(){this.sun=new R(new mt(10,24,16),new $t({color:16773570}));const t=new R(new mt(18,24,16),new $t({color:16761162,transparent:!0,opacity:.28,blending:Me,depthWrite:!1}));this.sun.add(t),this.scene.add(this.sun),this.sunLight=new Bc(16770756,1.4),this.scene.add(this.sunLight),this._ambient=new zc(3807832,.35),this.scene.add(this._ambient)}_addDust(){const t=new Float32Array(ds*3),e=new Float32Array(ds*3),n=new Float32Array(ds),i=new Float32Array(ds),r=dr(20942);for(let a=0;a<ds;a++){t[a*3]=(r()-.5)*520,t[a*3+1]=(r()-.5)*280,t[a*3+2]=-r()*1600;const l=r();e[a*3]=l>.7?1:.45,e[a*3+1]=l>.7?.55:.85,e[a*3+2]=l>.7?.95:1,n[a]=.6+r()*2.4,i[a]=r()*100}const o=new Pe;o.setAttribute("position",new Ee(t,3)),o.setAttribute("aColor",new Ee(e,3)),o.setAttribute("aSize",new Ee(n,1)),o.setAttribute("aSeed",new Ee(i,1)),this.dustMat=new ve({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:og,fragmentShader:ag,transparent:!0,depthWrite:!1,blending:Me}),this.dust=new Fl(o,this.dustMat),this.scene.add(this.dust)}_addSpores(){const t=new Float32Array(Ii*3),e=new Float32Array(Ii*3),n=new Float32Array(Ii),i=new Float32Array(Ii),r=dr(30625);for(let a=0;a<Ii;a++)t[a*3]=(r()-.5)*80,t[a*3+1]=(r()-.5)*50,t[a*3+2]=-r()*400,e[a*3]=.3+r()*.4,e[a*3+1]=.8+r()*.2,e[a*3+2]=1,n[a]=1.5+r()*3.5,i[a]=r()*80;const o=new Pe;o.setAttribute("position",new Ee(t,3)),o.setAttribute("aColor",new Ee(e,3)),o.setAttribute("aSize",new Ee(n,1)),o.setAttribute("aSeed",new Ee(i,1)),this.sporeMat=this.dustMat.clone(),this.spores=new Fl(o,this.sporeMat),this.scene.add(this.spores),this.sporeOrigins=t}_buildCrystals(){const t=[new ke(1,0),new Hi(1,0),new hn(1,0),new Ce(.7,2.4,5)],e=[{color:"#4b2dff",glow:"#66f0ff"},{color:"#9b2bff",glow:"#ff64e8"},{color:"#1f6dff",glow:"#9be7ff"},{color:"#5a1a8a",glow:"#ffd166"}];for(let n=0;n<pg;n++){const i=this.crystalMat.clone();i.uniforms=Zi.clone(this.crystalMat.uniforms);const r=e[n%e.length];i.uniforms.uColor.value=new q(r.color),i.uniforms.uGlow.value=new q(r.glow),i.uniforms.uLightPos.value=this.lightPos,i.uniforms.uLightColor.value=this.lightColor,i.uniforms.uLightInt.value=this.lightInt;const o=new R(t[n%t.length],i);o.scale.setScalar(1.4+n%7*.55),this.scene.add(o),this.crystals.push(o),this.crystalData.push({radius:1.6*o.scale.x,spin:.15+n%5*.08,placed:!1,pathDist:0})}}attachRibbon(t){if(this.ribbon){this.ribbon.geometry.dispose(),this.ribbon.geometry=t;return}this.ribbonMat=new ve({uniforms:{uTime:{value:0},uColorA:{value:new q("#5ce1ff")},uColorB:{value:new q("#ff3bd4")}},vertexShader:J0,fragmentShader:Q0,transparent:!0,blending:Me,depthWrite:!1,side:ln}),this.ribbon=new R(t,this.ribbonMat),this.scene.add(this.ribbon)}layoutFromPath(t,e,n=24){const i=dr(2333+Math.floor(e/80)),r=n+16;for(let o=0;o<this.crystals.length;o++){const a=e+40+o*22+i()*10,l=t.sample(a),c=Dn(l.tangent),h=i()*Math.PI*2,u=r+i()*18,d=this.crystals[o];d.position.copy(l.pos).addScaledVector(c.normal,Math.cos(h)*u).addScaledVector(c.binormal,Math.sin(h)*u),d.lookAt(l.pos),this.crystalData[o].pathDist=a,this.crystalData[o].placed=!0,this.crystalData[o].radius=1.35*Math.max(d.scale.x,d.scale.y)}}recycleCrystals(t,e,n=24){const i=n+16;for(let r=0;r<this.crystals.length;r++){const o=this.crystalData[r];if(o.pathDist<e-30){const a=e+380+Math.random()*220,l=t.sample(a),c=Dn(l.tangent),h=Math.random()*Math.PI*2,u=i+Math.random()*18;this.crystals[r].position.copy(l.pos).addScaledVector(c.normal,Math.cos(h)*u).addScaledVector(c.binormal,Math.sin(h)*u),this.crystals[r].lookAt(l.pos),o.pathDist=a}}}setLights(t){for(let e=0;e<6;e++){const n=t[e];if(!n){this.lightInt[e]=0;continue}this.lightPos[e].copy(n.pos),this.lightColor[e].set(n.color.r,n.color.g,n.color.b),this.lightInt[e]=n.intensity}}update(t,e,n){this.time+=t,this._chapterT<1&&(this._chapterT=Math.min(1,this._chapterT+t*.42),this._applyChapter(this._chapterT)),this.skyMat.uniforms.uTime.value=this.time,this.planetMat.uniforms.uTime.value=this.time,this.ribbonMat&&(this.ribbonMat.uniforms.uTime.value=this.time),this.dustMat.uniforms.uTime.value=this.time,this.sporeMat.uniforms.uTime.value=this.time;for(const r of this.crystals)r.material.uniforms.uTime.value=this.time,r.rotation.y+=t*.25,r.rotation.x+=t*.08;this.sky.position.copy(e.position),this.planetGroup.position.copy(e.position).add(new P(-180,40,-260)),this.planet.rotation.y+=t*.03,this.sun.position.copy(e.position).add(new P(220,90,-180)),this.sunLight.position.copy(this.sun.position),this.dust.position.copy(e.position);const i=this.spores.geometry.attributes.position;for(let r=0;r<Ii;r++){let o=i.getZ(r)+t*(18+r%5*4);o>20&&(o-=420),i.setZ(r,o),i.setY(r,i.getY(r)+Math.sin(this.time+r)*t*.6)}i.needsUpdate=!0,this.spores.position.copy(e.position),this.spores.position.z=e.position.z}hitTest(t,e){for(let n=0;n<this.crystals.length;n++)if(this.crystals[n].position.distanceTo(t)<e+this.crystalData[n].radius)return this.crystals[n];return null}}const ye={spark:{max:8,tag:"SPARK",unlock:"SPARK ARRAY"},tractor:{max:5,tag:"TRACTOR",unlock:"TRACTOR WELL"},pull:{max:5,tag:"PULL",unlock:"TRACTOR FORCE"},needle:{max:8,tag:"NEEDLE",unlock:"LASERS ONLINE"},seeker:{max:8,tag:"SEEKER",unlock:"SEEKERS LOCKED"},shard:{max:7,tag:"SHARD",unlock:"CRYSTAL SHARDS"},titan:{max:6,tag:"TITAN",unlock:"TITAN BLASTER"},wing:{max:6,tag:"WING",unlock:"WING FILAMENTS"},helix:{max:6,tag:"HELIX",unlock:"HELIX RIBBON"},drone:{max:6,tag:"DRONE",unlock:"RIFT DRONES"},mine:{max:6,tag:"MINE",unlock:"AETHER MINES"},shear:{max:6,tag:"SHEAR",unlock:"RIFT SHEAR"},spire:{max:5,tag:"SPIRE",unlock:"PIERCE SPIRE"},nova:{max:5,tag:"NOVA",unlock:"NOVA BURST"},prism:{max:5,tag:"PRISM",unlock:"PRISM SPLIT"}},Ae=Object.keys(ye),gg=["needle","seeker","shard","titan","wing","helix","drone","mine","shear","spire","nova","prism"];function wa(){const s={};for(const t of Ae)s[t]=0;return s}function Es(){const s=wa();return s.spark=1,s}function _g(){const s=Es(),t=["spark"],e=gg.slice(),n=[],i=new Set([3,8,14,20,26,32,38,44,50,56,62,68]);let r=0;const o=Ae.reduce((a,l)=>a+ye[l].max,0)-1;for(;n.length<o;){if(e.length&&i.has(n.length)){const l=e.shift();s[l]=1,t.push(l),n.push({module:l,toast:ye[l].unlock});continue}let a=!1;for(let l=0;l<t.length;l++){const c=t[(r+l)%t.length];if(s[c]<ye[c].max){s[c]+=1,n.push({module:c,toast:s[c]===ye[c].max?`${ye[c].tag} MAX`:null}),r=(r+l+1)%t.length,a=!0;break}}if(!a){if(!e.length)break;const l=e.shift();s[l]=1,t.push(l),n.push({module:l,toast:ye[l].unlock})}}return n}const Sa=_g(),vg=Sa.length;function xg(s){const t=Es(),e=Math.max(0,Math.min(vg,s|0));for(let n=0;n<e;n++)t[Sa[n].module]+=1;return t}function Mg(s){const t=Ae.filter(e=>s[e]>0).map(e=>ye[e].tag);return t.length?t.slice(-3).join(" · "):"SPARK"}function _e(s,t,e={}){return{x:s,drift:t,home:0,pierce:0,wobble:0,phase:0,hitR:1.35,damage:1,...e}}function $c(s,t=0){const e=[],n=[],i=[],r=[],o=[],a=s.spark|0;if(a>0){const E=1+Math.min(a,7);for(let y=0;y<E;y++){const A=E===1?0:y/(E-1)-.5;e.push(_e(A*(.16+a*.04),A*(1.4+a*.28),{kind:"spark",scale:.82+a*.04,speed:84+a*4,life:.32+a*.018,color:13172726,hitR:1.25}))}}const l=s.needle|0;if(l>0){const E=l<=2?[-1.9,1.9]:l<=4?[-2.5,0,2.5]:[-3.3,-1.15,0,1.15,3.3];for(const y of E)e.push(_e(y,0,{kind:"needle",scale:1.05+l*.04,speed:128+l*3,life:.78,color:10217471,hitR:1.55}))}const c=s.wing|0;if(c>0){const E=5.1+c*.45,y=10+c*2.2;e.push(_e(-E,-y,{kind:"wing",scale:1.08,speed:122,life:.72,color:16737512,hitR:1.45})),e.push(_e(E,y,{kind:"wing",scale:1.08,speed:122,life:.72,color:16737512,hitR:1.45})),c>=4&&(e.push(_e(-E-1.8,-y-7,{kind:"wing",scale:.95,speed:118,life:.68,color:16751584,hitR:1.35})),e.push(_e(E+1.8,y+7,{kind:"wing",scale:.95,speed:118,life:.68,color:16751584,hitR:1.35})))}const h=s.helix|0;if(h>0){const E=14+h*4;e.push(_e(-2.2,0,{kind:"helix",scale:1.05,speed:118,life:.8,color:8057087,wobble:E,phase:0})),e.push(_e(2.2,0,{kind:"helix",scale:1.05,speed:118,life:.8,color:8057087,wobble:E,phase:Math.PI})),h>=4&&e.push(_e(0,0,{kind:"helix",scale:1,speed:120,life:.76,color:14483455,wobble:E*.7,phase:1.2}))}const u=s.shear|0;if(u>0){const E=22+u*4;e.push(_e(-3.8,-E,{kind:"shear",scale:1.15,speed:110,life:.7,color:16765286,hitR:1.7})),e.push(_e(3.8,E,{kind:"shear",scale:1.15,speed:110,life:.7,color:16765286,hitR:1.7})),u>=4&&(e.push(_e(-6.2,-E-10,{kind:"shear",scale:1.05,speed:104,life:.64,color:16769690})),e.push(_e(6.2,E+10,{kind:"shear",scale:1.05,speed:104,life:.64,color:16769690})))}const d=s.spire|0;d>0&&(e.push(_e(-.9,0,{kind:"spire",scale:.72,speed:156,life:.9,color:16777215,pierce:d,damage:2,hitR:1.4})),e.push(_e(.9,0,{kind:"spire",scale:.72,speed:156,life:.9,color:16777215,pierce:d,damage:2,hitR:1.4})));const p=s.drone|0;if(p>0){const E=Math.min(4,2+Math.floor((p-1)/2));for(let y=0;y<E;y++){const A=y%2===0?-1:1,v=Math.floor(y/2);e.push(_e(A*(4.8+v*1.4),A*(4+v*3),{kind:"drone",scale:.9,speed:124,life:.7,color:16743144,hitR:1.3}))}}const g=s.prism|0;if(g>0){const E=2+Math.min(g,4);for(let y=0;y<E;y++){const A=y/(E-1)-.5;e.push(_e(A*2.4,A*(18+g*5),{kind:"prism",scale:.78,speed:100,life:.48,color:13940991,hitR:1.2}))}}const _=s.seeker|0;if(_>0){const E=Math.min(6,1+Math.ceil(_/2));for(let y=0;y<E;y++){const A=E===1?0:y/(E-1)-.5;n.push(_e(A*(2.2+_*.5),A*4,{kind:"seeker",scale:1.25+_*.06,speed:52+_*3,life:1.35,color:16747082,damage:2,home:1,homeSteer:58+_*6,hitR:1.8}))}}const m=s.shard|0;if(m>0){const E=2+Math.min(m,6);for(let y=0;y<E;y++){const A=E===1?0:y/(E-1)-.5;e.push(_e(A*1.2,A*(16+m*3),{kind:"shard",scale:.7,speed:96+m*2,life:.42,color:16751570,hitR:1.2}))}}const f=s.titan|0;f>0&&(i.push(_e(0,0,{kind:"titan",scale:2.4+f*.28,speed:64+f*3,life:1.05,color:16765286,damage:6+f,hitR:3.2+f*.35})),f>=4&&(i.push(_e(-2.6,-6,{kind:"titan",scale:1.6,speed:70,life:.9,color:16769690,damage:3,hitR:2.4})),i.push(_e(2.6,6,{kind:"titan",scale:1.6,speed:70,life:.9,color:16769690,damage:3,hitR:2.4}))));const S=s.mine|0;if(S>0){const E=Math.min(4,1+Math.floor(S/2));for(let y=0;y<E;y++){const A=E===1?0:y/(E-1)-.5;r.push(_e(A*(3+S*.8),A*5,{kind:"mine",scale:1.35,speed:16+S,life:1.7,color:6087167,damage:4,hitR:2.1}))}}const w=s.nova|0;if(w>0){const E=6+w;for(let y=0;y<E;y++){const A=y/(E-1)-.5;o.push(_e(A*2,A*(36+w*6),{kind:"nova",scale:.95,speed:88,life:.62,color:16737512,damage:2,hitR:1.5}))}}const I={primary:{cd:a>0&&l===0?.094:.078,shots:e},missile:{cd:Math.max(.28,.42-_*.018),shots:n},titan:{cd:Math.max(.52,.86-f*.048),shots:i},mine:{cd:.52,shots:r},nova:{cd:Math.max(.72,1.18-w*.08),shots:o}};for(const E of Object.values(I))for(const y of E.shots)y.kick=yg[y.kind]??.2;return I}const yg={spark:.22,needle:.3,wing:.16,helix:.2,shear:.3,spire:.24,drone:.12,prism:.16,shard:.15,seeker:.34,titan:.92,mine:.4,nova:.58};function Di(s,t,e){const n=bg(t,e);return Math.round(s==="queen"?90+n*6.2:s==="coil"?110+n*6.8:s==="warden"?140+n*7.5:s==="empress"?180+n*8.2:220+n*9.5)}function bg(s,t){const e=$c(t||xg(s),0),n=(i,r)=>i.shots.length?i.shots.reduce((a,l)=>a+(l.damage||1),0)/Math.max(.04,i.cd)*r:0;return n(e.primary,.36)+n(e.missile,.82)+n(e.titan,.78)+n(e.mine,.18)+n(e.nova,.14)}Sa.map((s,t)=>({name:ye[s.module].tag,toast:s.toast||ye[s.module].tag,step:t+1}));function uo(s,t){return new ve({uniforms:{uColor:{value:new q(s)},uRim:{value:new q(t)},uLightDir:{value:new P(.35,.8,.4).normalize()}},vertexShader:hg,fragmentShader:ug})}function si(s,t=10217471){const e=new x0(new F0(s.geometry,18),new Uc({color:t}));s.add(e)}function ce(s,t,e=1.6){return new In({color:s,metalness:.72,roughness:.28,emissive:t,emissiveIntensity:e})}function Le(s,t=.7){return new $t({color:s,transparent:!0,opacity:t,blending:Me,depthWrite:!1})}function Vt(s,t,e,n,i=0){return s.add(t),t.material?.emissive&&e.push(t),i>0&&(t.visible=!1,n.push({mesh:t,at:i})),t}function Xe(){return{group:new ae,glows:[],extras:[],auras:[]}}function wg(){const s=Xe();for(const t of[-1,1]){const e=new R(new Ht(.035,.05,1.55,6),ce(1384496,10217471,1.4));e.rotation.x=Math.PI/2,e.position.set(t*1.05,-.1,-.35),Vt(s.group,e,s.glows,s.extras);const n=new R(new Ht(.02,.02,.7,6),Le(10217471,.55));n.rotation.x=Math.PI/2,n.position.set(t*1.05,-.1,-1.15),s.group.add(n),s.auras.push(n);const i=new R(new Ht(.028,.04,1.2,6),ce(1384496,6087167,1.2));i.rotation.x=Math.PI/2,i.position.set(t*1.45,-.08,-.15),Vt(s.group,i,s.glows,s.extras,5)}return s}function Sg(){const s=Xe();for(const t of[-1,1]){const e=new R(new ot(.42,.16,.7),ce(2757640,16747082,1.3));e.position.set(t*.95,-.22,.35),Vt(s.group,e,s.glows,s.extras);for(let n=0;n<3;n++){const i=new R(new Ht(.05,.055,.55,6),ce(1707016,16747082,1.1));i.rotation.x=Math.PI/2,i.position.set(t*(.82+n*.12),-.28,.22),Vt(s.group,i,s.glows,s.extras,n===2?4:0);const r=new R(new mt(.045,6,6),Le(16747082,.7));r.position.set(t*(.82+n*.12),-.28,-.08),s.group.add(r),s.auras.push(r)}}return s}function Eg(){const s=Xe();for(const[n,i,r]of[[-.22,.12,-1.15],[.22,.12,-1.15],[0,.22,-1.05]]){const o=new R(new ke(.12,0),ce(2756672,16751570,1.7));o.position.set(n,i,r),Vt(s.group,o,s.glows,s.extras)}const t=new R(new ke(.16,0),ce(1706024,16737512,2));t.position.set(0,.28,-1.25),Vt(s.group,t,s.glows,s.extras,5);const e=new R(new mt(.22,8,6),Le(16751570,.4));return e.position.set(0,.16,-1.12),s.group.add(e),s.auras.push(e),s}function Tg(){const s=Xe(),t=new R(new Ht(.16,.22,1.35,8),ce(2761224,16765286,1.8));t.rotation.x=Math.PI/2,t.position.set(0,-.38,-.55),Vt(s.group,t,s.glows,s.extras);const e=new R(new Wt(.18,.04,6,12),Le(16765286,.8));e.position.set(0,-.38,-1.22),s.group.add(e),s.auras.push(e);const n=new R(new ot(.55,.12,.7),ce(1709576,16751162,1.2));n.position.set(0,-.32,-.15),Vt(s.group,n,s.glows,s.extras);const i=new R(new Ht(.08,.1,.9,6),ce(2761224,16769690,1.5));i.rotation.x=Math.PI/2,i.position.set(-.28,-.36,-.4);const r=i.clone();return r.position.x=.28,Vt(s.group,i,s.glows,s.extras,4),Vt(s.group,r,s.glows,s.extras,4),s}function Ag(){const s=Xe();for(const t of[-1,1]){const e=new R(new ot(.55,.12,.38),ce(1712696,16737512,1.5));e.position.set(t*1.62,-.04,.28),e.rotation.y=t*-.35,Vt(s.group,e,s.glows,s.extras);const n=new R(new Ht(.04,.055,.7,6),ce(1312792,16737512,1.6));n.rotation.x=Math.PI/2,n.rotation.y=t*-.4,n.position.set(t*1.72,-.04,.02),Vt(s.group,n,s.glows,s.extras);const i=new R(new mt(.07,8,6),Le(16737512,.75));i.position.set(t*1.82,-.04,-.28),s.group.add(i),s.auras.push(i);const r=new R(new Ht(.03,.04,.55,6),ce(1312792,16751584,1.4));r.rotation.x=Math.PI/2,r.rotation.y=t*-.55,r.position.set(t*1.95,.02,.12),Vt(s.group,r,s.glows,s.extras,4)}return s}function Rg(){const s=Xe(),t=new R(new Wt(.42,.045,6,18),ce(528408,8057087,1.8));t.rotation.x=Math.PI/2,t.position.set(0,.02,.15),Vt(s.group,t,s.glows,s.extras);const e=t.clone();e.position.z=.55,e.scale.setScalar(.82),Vt(s.group,e,s.glows,s.extras);const n=new R(new Wt(.5,.03,6,18),Le(8057087,.55));n.rotation.x=Math.PI/2,n.position.set(0,.02,.35),s.group.add(n),s.auras.push(n);const i=t.clone();return i.position.z=-.2,i.scale.setScalar(.7),Vt(s.group,i,s.glows,s.extras,4),s}function Cg(){const s=Xe();return[[-1,0],[1,0],[-1,1],[1,1]].forEach(([e,n],i)=>{const r=new R(new ot(.08,.08,.45),ce(1706004,16743144,1.2));r.position.set(e*(1.15+n*.25),.18+n*.12,.55),Vt(s.group,r,s.glows,s.extras,i>=2?3:0);const o=new R(new ke(.14,0),ce(1312784,16743144,1.8));o.position.set(e*(1.45+n*.35),.22+n*.18,.7),Vt(s.group,o,s.glows,s.extras,i>=2?3:0);const a=new R(new mt(.18,8,6),Le(16743144,.45));a.position.copy(o.position),s.group.add(a),s.auras.push(a),i>=2&&s.extras.push({mesh:a,at:3})}),s}function Pg(){const s=Xe(),t=new R(new ot(.55,.18,.7),ce(528408,6087167,1.3));t.position.set(0,-.42,.55),Vt(s.group,t,s.glows,s.extras);for(const n of[-.16,.16]){const i=new R(new mt(.1,8,6),ce(661544,6087167,1.7));i.position.set(n,-.52,.55),Vt(s.group,i,s.glows,s.extras);const r=new R(new mt(.14,8,6),Le(6087167,.5));r.position.copy(i.position),s.group.add(r),s.auras.push(r)}const e=new R(new mt(.1,8,6),ce(661544,6087167,1.7));return e.position.set(0,-.54,.78),Vt(s.group,e,s.glows,s.extras,4),s}function Lg(){const s=Xe();for(const t of[-1,1]){const e=new R(new ot(1.15,.06,.22),ce(2761224,16765286,1.7));e.position.set(t*1.35,.08,-.15),e.rotation.y=t*.45,e.rotation.z=t*-.18,Vt(s.group,e,s.glows,s.extras);const n=new R(new ot(.9,.03,.06),Le(16765286,.8));n.position.set(t*1.55,.1,-.28),n.rotation.y=t*.45,s.group.add(n),s.auras.push(n);const i=e.clone();i.position.set(t*1.15,-.12,.05),i.rotation.z=t*.22,Vt(s.group,i,s.glows,s.extras,4)}return s}function Ig(){const s=Xe(),t=new R(new Ce(.08,1.65,6),ce(2238512,16777215,1.6));t.rotation.x=-Math.PI/2,t.position.set(0,-.02,-1.85),Vt(s.group,t,s.glows,s.extras);const e=new R(new Ht(.03,.03,1.2,6),Le(16777215,.65));e.rotation.x=Math.PI/2,e.position.set(0,-.02,-1.7),s.group.add(e),s.auras.push(e);const n=new R(new Wt(.12,.02,6,12),Le(10217471,.7));n.position.set(0,-.02,-1.15),s.group.add(n),s.auras.push(n);const i=t.clone();return i.scale.setScalar(.55),i.position.set(0,.12,-1.55),Vt(s.group,i,s.glows,s.extras,4),s}function Dg(){const s=Xe(),t=new R(new Wt(.38,.045,6,16),ce(1706004,16737512,1.8));t.position.set(0,.42,-.15),t.rotation.x=.4,Vt(s.group,t,s.glows,s.extras);const e=new R(new Wt(.46,.03,6,16),Le(16737512,.55));e.position.copy(t.position),e.rotation.copy(t.rotation),s.group.add(e),s.auras.push(e);for(let i=0;i<6;i++){const r=i/6*Math.PI*2,o=new R(new mt(.05,6,6),Le(16751584,.8));o.position.set(Math.cos(r)*.38,.42+Math.sin(r)*.12,-.15),s.group.add(o),s.auras.push(o)}const n=t.clone();return n.scale.setScalar(.62),n.position.y=.52,Vt(s.group,n,s.glows,s.extras,4),s}function Ng(){const s=Xe();for(const i of[-1,1]){const r=new R(new Ce(.12,.7,5),ce(1708072,13940991,1.8));r.rotation.x=-Math.PI/2,r.rotation.y=i*.35,r.position.set(i*.28,.08,-1.35),Vt(s.group,r,s.glows,s.extras)}const t=new R(new ke(.14,0),Le(13940991,.7));t.position.set(0,.1,-1.2),s.group.add(t),s.auras.push(t);const e=new R(new Ce(.1,.55,5),ce(1708072,16737512,1.5));e.rotation.x=-Math.PI/2,e.rotation.y=.7,e.position.set(-.48,.02,-1.15);const n=e.clone();return n.rotation.y=-.7,n.position.x=.48,Vt(s.group,e,s.glows,s.extras,4),Vt(s.group,n,s.glows,s.extras,4),s}function Ug(){const s=Xe(),t=new R(new Ht(.42,.22,.12,16),ce(1054752,6087167,1.4));t.position.set(0,-.38,.15),Vt(s.group,t,s.glows,s.extras);const e=new R(new Wt(.38,.03,8,20),Le(6087167,.55));e.rotation.x=Math.PI/2,e.position.set(0,-.42,.15),s.group.add(e),s.auras.push(e);const n=new R(new Wt(.52,.025,8,20),Le(10217471,.4));n.rotation.x=Math.PI/2,n.position.set(0,-.44,.15),s.group.add(n),s.auras.push(n);const i=new R(new Wt(.68,.02,8,22),Le(6087167,.32));return i.rotation.x=Math.PI/2,i.position.set(0,-.46,.15),Vt(s.group,i,s.glows,s.extras,3),s.auras.push(i),s}function Fg(){const s=Xe();for(const i of[-1,1]){const r=new R(new Wt(.12,.04,8,12),ce(1706004,16737512,1.7));r.position.set(i*.38,-.36,.15),r.rotation.z=i*.5,Vt(s.group,r,s.glows,s.extras);const o=new R(new mt(.07,8,6),Le(16737512,.7));o.position.copy(r.position),s.group.add(o),s.auras.push(o)}const t=new R(new mt(.09,8,6),ce(1181720,16765286,2));t.position.set(0,-.48,.15),Vt(s.group,t,s.glows,s.extras);const e=new R(new Wt(.1,.03,6,12),ce(1706004,16737512,1.8));e.position.set(-.22,-.5,.32),Vt(s.group,e,s.glows,s.extras,3);const n=e.clone();return n.position.x=.22,Vt(s.group,n,s.glows,s.extras,3),s}function Kc(s,t){const e=s?.kits?.tractor;if(e)for(const i of e.auras)i.rotation.z+=t*1.6;const n=s?.kits?.pull;if(n)for(const i of n.auras)i.rotation.y+=t*2.4}function Ea(s,t={},e=null){const n=s?.kits;if(n)for(const i of Ae){const r=n[i];if(!r)continue;const o=t[i]|0,a=e===i&&o<=0,l=o>0||a;r.group.visible=l;const c=ye[i]?.max||8,h=a?.18:Math.max(0,Math.min(1,o/c));for(const u of r.glows)u.material?.emissive&&(u.material.emissiveIntensity=a?.45:.7+h*2.6,u.material.transparent=a,u.material.opacity=a?.42:1);for(const u of r.auras)u.material&&(u.visible=l,u.material.opacity=a?.18:.28+h*.62,u.scale.setScalar(a?.92:.9+h*.45));for(const u of r.extras)u.mesh.visible=l&&(a?u.at<=3:o>=u.at),u.mesh.material?.emissive&&(u.mesh.material.emissiveIntensity=a?.4:1.2+h*2,u.mesh.material.transparent=a,u.mesh.material.opacity=a?.38:1)}}function Zc(){const s=new ae;s.scale.setScalar(3.1);const t=new ae;s.add(t);const e=uo("#647a9a","#7ad8ff"),n=uo("#2a3348","#ff7ae0"),i=uo("#1a2238","#5ce1ff"),r=new $t({color:10217471}),o=new $t({color:9234431}),a=new $t({color:16765286}),l=new $t({color:16737512}),c=new R(new Ce(.42,2.9,6),e);c.rotation.x=-Math.PI/2,si(c),t.add(c);const h=new R(new ot(.55,.28,1.9),n);h.position.z=.1,si(h,16751584),t.add(h);const u=new R(new ot(.18,.16,2.35),i);u.position.set(0,.18,.05),t.add(u);const d=new R(new ot(.42,.12,1.55),n);d.position.set(0,-.22,.2),si(d,6087167),t.add(d);const p=new R(new mt(.24,12,10),o);p.scale.set(1,.62,1.35),p.position.set(0,.2,-.35),t.add(p);const g=new R(new ot(.38,.05,.85),a);g.position.set(0,.32,-.28),t.add(g);const _=new R(new ot(3.1,.07,.95),e);_.position.set(0,-.08,.55),si(_),t.add(_);const m=new R(new ot(2.2,.05,.18),r);m.position.set(0,-.05,.18),t.add(m);const f=new R(new ot(.95,.05,.42),i);f.position.set(-.85,-.02,-.35),f.rotation.y=.35;const S=f.clone();S.position.x=.85,S.rotation.y=-.35,t.add(f,S);const w=new R(new ot(.72,.045,.28),e);w.position.set(-.55,.02,-.95),w.rotation.z=.18;const M=w.clone();M.position.x=.55,M.rotation.z=-.18,si(w),si(M),t.add(w,M);const I=new R(new Ht(.07,.09,.7,8),n);I.rotation.x=Math.PI/2,I.position.set(-.38,-.12,-.85);const E=I.clone();E.position.x=.38;const y={},A=Xe();A.group.add(I,E);const v=new R(new mt(.08,8,6),Le(13172726,.35));v.position.set(-.38,-.12,-1.18);const x=v.clone();x.position.x=.38,A.group.add(v,x),A.auras.push(v,x);const L=new R(new Ht(.045,.055,.85,6),ce(1712696,6087167,.8));L.rotation.x=Math.PI/2,L.position.set(-.22,-.16,-.95);const B=L.clone();B.position.x=.22,Vt(A.group,L,A.glows,A.extras,5),Vt(A.group,B,A.glows,A.extras,5),y.spark=A,y.needle=wg(),y.seeker=Sg(),y.shard=Eg(),y.titan=Tg(),y.wing=Ag(),y.helix=Rg(),y.drone=Cg(),y.mine=Pg(),y.shear=Lg(),y.spire=Ig(),y.nova=Dg(),y.prism=Ng(),y.tractor=Ug(),y.pull=Fg();for(const Gt of Ae)y[Gt]&&t.add(y[Gt].group);const O=new R(new ot(.22,.08,.45),i);O.position.set(-1.55,-.06,.42);const W=O.clone();W.position.x=1.55,t.add(O,W);const Y=new R(new mt(.07,8,6),l);Y.position.set(-1.62,-.04,.18);const k=Y.clone();k.position.x=1.62,k.material=a,t.add(Y,k);const $=new R(new ot(.07,.78,.7),e);$.position.set(0,.42,.7),si($),t.add($);const H=new R(new ot(.05,.12,.55),r);H.position.set(0,.82,.62),t.add(H);const tt=new R(new Ht(.14,.2,.55,10),n);tt.rotation.x=Math.PI/2,tt.position.set(-.55,-.1,1.15);const rt=tt.clone();rt.position.x=.55,t.add(tt,rt);const et=new R(new Ht(.11,.16,.22,8),i);et.rotation.x=Math.PI/2,et.position.set(-.55,-.1,1.38);const Dt=et.clone();Dt.position.x=.55,t.add(et,Dt);const Qt=new R(new mt(.16,12,10),r);Qt.position.set(-.55,-.1,1.42);const K=Qt.clone();K.position.x=.55,t.add(Qt,K);const nt=new R(new mt(.12,10,8),new $t({color:16734932}));nt.position.set(0,.05,.85),t.add(nt);const xt=new R(new mt(.2,10,8),new $t({color:13172726,transparent:!0,opacity:0,blending:Me,depthWrite:!1}));xt.position.set(0,-.02,-1.52);const at=new R(new ot(.08,.08,.85),new $t({color:10217471,transparent:!0,opacity:0,blending:Me,depthWrite:!1}));at.position.set(0,-.02,-1.85),t.add(xt,at);const Tt=new Vi(6087167,3.5,18,2);Tt.position.set(-.55,-.1,1.35);const Pt=new Vi(6087167,3.5,18,2);Pt.position.set(.55,-.1,1.35);const Ot=new Vi(16737512,2.2,14,2);Ot.position.set(0,.15,-1.3),s.add(Tt,Pt,Ot);const he={group:s,rig:t,exhausts:[Qt,K],lights:[Tt,Pt],core:nt,muzzle:xt,muzzleSpike:at,kits:y};return Ea(he,{spark:1}),he}class kg{constructor(t,e=40){this.max=e,this.history=[];const n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e);this.geo=new Pe,this.geo.setAttribute("position",new Ee(n,3)),this.geo.setAttribute("aColor",new Ee(i,3)),this.geo.setAttribute("aAlpha",new Ee(r,1)),this.mat=new ve({vertexShader:lg,fragmentShader:cg,transparent:!0,depthWrite:!1,blending:Me}),this.line=new Fc(this.geo,this.mat),t.add(this.line),this.positions=n,this.colors=i,this.alphas=r}push(t,e){this.history.unshift(t.clone()),this.history.length>this.max&&this.history.pop();const n=this.history.length;for(let i=0;i<n;i++){const r=this.history[i];this.positions[i*3]=r.x,this.positions[i*3+1]=r.y,this.positions[i*3+2]=r.z;const o=1-i/this.max;this.colors[i*3]=(e>.4?.7:.2)*o,this.colors[i*3+1]=.45*o,this.colors[i*3+2]=.7*o,this.alphas[i]=.28*o}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this.geo.setDrawRange(0,n)}}const Og={stinger:[{at:88,kind:"squad",form:"silk-cut",role:"sine",n:8,ahead:88},{at:112,kind:"gate"},{at:148,kind:"breath"},{at:188,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:86},{at:228,kind:"blockers",n:2},{at:268,kind:"squad",form:"silk-cut",role:"dive",n:6,ahead:84},{at:310,kind:"squad",form:"flank",role:"heavy",n:2,ahead:96},{at:360,kind:"breath"},{at:400,kind:"squad",form:"silk-cut",role:"sine",n:7,ahead:88},{at:448,kind:"orbs"},{at:500,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:86},{at:548,kind:"gate"},{at:600,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:660,kind:"squad",form:"silk-cut",role:"sine",n:7,ahead:88},{at:720,kind:"breath"},{at:780,kind:"squad",form:"escort",role:"heavy",n:3,ahead:96},{at:840,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:86},{at:900,kind:"orbs"},{at:960,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:88},{at:1020,kind:"gate"},{at:1080,kind:"squad",form:"silk-cut",role:"dive",n:6,ahead:84},{at:1140,kind:"squad",form:"pair",role:"sine",n:4,ahead:86},{at:1188,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:86},{at:1228,kind:"gate"},{at:1288,kind:"squad",form:"silk-cut",role:"sine",n:5,ahead:88}],crimson:[{at:86,kind:"squad",form:"curtain",role:"cinder",n:8,ahead:86},{at:118,kind:"blockers",n:3},{at:170,kind:"breath"},{at:214,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:86},{at:258,kind:"gate"},{at:304,kind:"squad",form:"curtain",role:"dive",n:6,ahead:84},{at:352,kind:"squad",form:"flank",role:"slag",n:2,ahead:96},{at:510,kind:"breath"},{at:554,kind:"squad",form:"curtain",role:"cinder",n:7,ahead:86},{at:600,kind:"orbs"},{at:648,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:88},{at:700,kind:"blockers",n:2},{at:748,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:800,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:86},{at:860,kind:"breath"},{at:980,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:88},{at:1036,kind:"orbs"},{at:1088,kind:"squad",form:"escort",role:"slag",n:3,ahead:96},{at:1140,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:86},{at:1176,kind:"squad",form:"curtain",role:"cinder",n:7,ahead:84},{at:1216,kind:"blockers",n:3},{at:1276,kind:"squad",form:"curtain",role:"cinder",n:5,ahead:86}],cathedral:[{at:88,kind:"squad",form:"aisle",role:"chime",n:4,ahead:80},{at:108,kind:"gate"},{at:132,kind:"breath"},{at:180,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:228,kind:"gate"},{at:276,kind:"squad",form:"aisle",role:"dive",n:6,ahead:84},{at:328,kind:"squad",form:"line",role:"chime",n:3,ahead:92},{at:448,kind:"breath"},{at:492,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:540,kind:"orbs"},{at:588,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:88},{at:640,kind:"gate"},{at:688,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:736,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:780,kind:"breath"},{at:900,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:88},{at:952,kind:"gate"},{at:1004,kind:"squad",form:"escort",role:"chime",n:3,ahead:94},{at:1060,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:1112,kind:"orbs"},{at:1168,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:1210,kind:"gate"},{at:1268,kind:"squad",form:"aisle",role:"acolyte",n:5,ahead:88}],iris:[{at:90,kind:"squad",form:"split",role:"bloom",n:6,ahead:88},{at:122,kind:"orbs"},{at:154,kind:"breath"},{at:200,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:248,kind:"gate"},{at:296,kind:"squad",form:"split",role:"dive",n:6,ahead:84},{at:344,kind:"squad",form:"flank",role:"prism",n:2,ahead:96},{at:488,kind:"breath"},{at:532,kind:"squad",form:"split",role:"bloom",n:6,ahead:88},{at:580,kind:"blockers",n:2},{at:628,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:680,kind:"orbs"},{at:728,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:776,kind:"squad",form:"split",role:"bloom",n:6,ahead:88},{at:840,kind:"breath"},{at:960,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:1012,kind:"gate"},{at:1064,kind:"squad",form:"escort",role:"prism",n:3,ahead:94},{at:1116,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:1180,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:1220,kind:"orbs"},{at:1280,kind:"squad",form:"split",role:"bloom",n:5,ahead:88}],heart:[{at:84,kind:"squad",form:"dark",role:"ion",n:6,ahead:90},{at:116,kind:"orbs"},{at:140,kind:"breath"},{at:188,kind:"squad",form:"dark",role:"ion",n:6,ahead:86},{at:236,kind:"gate"},{at:284,kind:"squad",form:"dark",role:"dive",n:7,ahead:84},{at:336,kind:"squad",form:"line",role:"wisp",n:3,ahead:92},{at:520,kind:"breath"},{at:564,kind:"squad",form:"dark",role:"ion",n:6,ahead:88},{at:612,kind:"orbs"},{at:660,kind:"squad",form:"dark",role:"ion",n:6,ahead:86},{at:712,kind:"blockers",n:2},{at:760,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:800,kind:"breath"},{at:920,kind:"squad",form:"dark",role:"ion",n:6,ahead:88},{at:972,kind:"orbs"},{at:1024,kind:"squad",form:"escort",role:"wisp",n:3,ahead:94},{at:1076,kind:"squad",form:"dark",role:"ion",n:6,ahead:86},{at:1128,kind:"gate"},{at:1172,kind:"squad",form:"dark",role:"ion",n:6,ahead:86},{at:1214,kind:"orbs"},{at:1272,kind:"squad",form:"dark",role:"ion",n:5,ahead:88}]},Wl=new Set(["midboss","boss","finale"]),Bg={"1-2":{camp:"stinger",mids:[340,820],midIds:["coil","empress"],boss:1320,bossId:"queen",banner:{at:88,toast:"SILK CUT"}},"1-3":{camp:"stinger",mids:[420,760],midIds:["empress","coil"],boss:1320,bossId:"warden",cut:[228],extra:[{at:228,kind:"orbs"}]},"1-4":{camp:"stinger",mids:[300,880],midIds:["warden","queen"],boss:1320,bossId:"coil",ending:{at:[1176,1236,1296],kinds:["squad","blockers","squad"]}},"1-5":{camp:"stinger",mids:[460,840],midIds:["coil","warden"],boss:1320,bossId:"empress",extra:[{at:132,kind:"blockers",n:2}]},"1-6":{camp:"stinger",mids:[350,790],midIds:["warden","coil"],boss:1400,bossId:"queen",super:!0},"2-1":{camp:"crimson",mids:[390,870],midIds:["queen","empress"],boss:1320,bossId:"coil",banner:{at:86,toast:"ASH CURTAIN"}},"2-2":{camp:"crimson",mids:[410,800],midIds:["warden","queen"],boss:1320,bossId:"empress",extra:[{at:148,kind:"gate"}]},"2-3":{camp:"crimson",mids:[280,930],midIds:["empress","warden"],boss:1320,bossId:"queen",extra:[{at:430,kind:"orbs"}]},"2-4":{camp:"crimson",mids:[450,780],midIds:["coil","queen"],boss:1320,bossId:"warden",ending:{at:[1168,1224,1284],kinds:["squad","gate","squad"]}},"2-5":{camp:"crimson",mids:[360,890],midIds:["empress","coil"],boss:1320,bossId:"queen",extra:[{at:430,kind:"gate"}]},"2-6":{camp:"crimson",mids:[330,810],midIds:["warden","empress"],boss:1400,bossId:"coil",super:!0},"3-1":{camp:"cathedral",mids:[380,850],midIds:["coil","queen"],boss:1320,bossId:"empress",banner:{at:88,toast:"LOCKED AISLE"}},"3-2":{camp:"cathedral",mids:[410,770],midIds:["empress","coil"],boss:1320,bossId:"queen",extra:[{at:616,kind:"orbs"}]},"3-3":{camp:"cathedral",mids:[300,910],midIds:["queen","coil"],boss:1320,bossId:"empress",extra:[{at:400,kind:"blockers",n:2}]},"3-4":{camp:"cathedral",mids:[450,830],midIds:["coil","empress"],boss:1320,bossId:"queen",ending:{at:[1156,1200,1260],kinds:["squad","orbs","squad"]}},"3-5":{camp:"cathedral",mids:[370,800],midIds:["queen","empress"],boss:1400,bossId:"warden",super:!0},"4-1":{camp:"iris",mids:[370,865],midIds:["coil","warden"],boss:1320,bossId:"queen",banner:{at:90,toast:"IRIS SPLIT"}},"4-2":{camp:"iris",mids:[415,755],midIds:["warden","coil"],boss:1320,bossId:"queen",extra:[{at:176,kind:"gate"}]},"4-3":{camp:"iris",mids:[290,925],midIds:["queen","coil"],boss:1320,bossId:"warden",extra:[{at:430,kind:"blockers",n:2}]},"4-4":{camp:"iris",mids:[440,785],midIds:["coil","queen"],boss:1320,bossId:"warden",ending:{at:[1164,1212,1272],kinds:["squad","gate","squad"]}},"4-5":{camp:"iris",mids:[355,875],midIds:["warden","queen"],boss:1320,bossId:"coil",extra:[{at:430,kind:"gate"}]},"4-6":{camp:"iris",mids:[395,815],midIds:["coil","warden"],boss:1320,bossId:"queen",extra:[{at:460,kind:"blockers",n:2}]},"4-7":{camp:"iris",mids:[345,805],midIds:["warden","coil"],boss:1400,bossId:"empress",super:!0},"5-1":{camp:"heart",mids:[380,855],midIds:["queen","coil"],boss:1320,bossId:"warden",banner:{at:84,toast:"DARK STRETCH"}},"5-2":{camp:"heart",mids:[405,775],midIds:["empress","warden"],boss:1320,bossId:"coil",extra:[{at:168,kind:"gate"}]},"5-3":{camp:"heart",mids:[300,915],midIds:["coil","empress"],boss:1320,bossId:"queen",extra:[{at:400,kind:"blockers",n:2}]},"5-4":{camp:"heart",mids:[445,825],midIds:["warden","queen"],boss:1320,bossId:"empress",ending:{at:[1160,1208,1264],kinds:["squad","gate","squad"]}},"5-5":{camp:"heart",mids:[365,885],midIds:["empress","coil"],boss:1320,bossId:"warden",extra:[{at:400,kind:"gate"}]},"5-6":{camp:"heart",mids:[375,795],midIds:["queen","warden"],boss:1400,bossId:"finale",super:!0}};function jc(s){return{stinger:"silk-cut",crimson:"curtain",cathedral:"aisle",iris:"split",heart:"dark"}[s]}function Jc(s){return{stinger:"sine",crimson:"cinder",cathedral:"acolyte",iris:"bloom",heart:"ion"}[s]}function zg(s,t){s.push({at:t.mids[0],kind:"midboss",id:t.midIds[0]}),s.push({at:t.mids[1],kind:"midboss",id:t.midIds[1]})}function Hg(s,t){t.bossId==="finale"?s.push({at:t.boss,kind:"finale"}):s.push({at:t.boss,kind:"boss",id:t.bossId})}function Vg(s,t){const e=t.camp,n=jc(e),i=Jc(e);if(t.ending){const[r,o,a]=t.ending.at,[l,c,h]=t.ending.kinds,u=(d,p)=>d==="squad"?{at:p,kind:d,form:n,role:i,n:6,ahead:86}:d==="blockers"?{at:p,kind:d,n:2}:d==="orbs"?{at:p,kind:d}:{at:p,kind:d};s.push(u(l,r),u(c,o),u(h,a));return}}function Gg(s,t){const e=jc(t.camp),n=Jc(t.camp);s.push({at:1188,kind:"squad",form:e,role:n,n:6,ahead:86}),s.push({at:1360,kind:"hold"})}function Wg(s,t){let e=(Og[s]||[]).map(i=>({...i}));for(const i of t.cut||[])e=e.filter(r=>r.at!==i);t.super?(e=e.filter(i=>i.at<1160),Gg(e,t)):t.ending&&(e=e.filter(i=>i.at<1160),Vg(e,t));for(const i of t.extra||[])e.push({...i});const n=[...t.mids||[],t.boss];return e=e.filter(i=>n.every(r=>Math.abs(i.at-r)>=26)),zg(e,t),Hg(e,t),e.sort((i,r)=>i.at-r.at||(Wl.has(r.kind)?1:0)-(Wl.has(i.kind)?1:0)),e}const Xg=[{at:70,toast:"WAVE 01 — STINGER FAN",world:"default",sting:"chapter"},{at:380,toast:"MID-BOSS — WEAVER QUEEN",world:"queen",sting:"boss"},{at:820,toast:"MID-BOSS — WARDEN",world:"warden",sting:"boss"},{at:1320,toast:"FINALE — SENTINEL",world:"finale",sting:"boss"}],qg=[{at:70,kind:"squad",form:"v",role:"dive",n:5,ahead:88},{at:118,kind:"squad",form:"line",role:"sine",n:4,ahead:92},{at:160,kind:"breath"},{at:188,kind:"squad",form:"flank",role:"heavy",n:2,ahead:96},{at:210,kind:"squad",form:"pair",role:"dive",n:2,ahead:84},{at:248,kind:"gate"},{at:268,kind:"orbs"},{at:292,kind:"squad",form:"cross",role:"sine",n:6,ahead:100},{at:330,kind:"blockers",n:2},{at:348,kind:"squad",form:"v",role:"dive",n:7,ahead:90},{at:380,kind:"midboss",id:"queen"},{at:470,kind:"breath"},{at:490,kind:"orbs"},{at:512,kind:"squad",form:"escort",role:"dive",n:5,ahead:94},{at:548,kind:"gate"},{at:572,kind:"squad",form:"line",role:"heavy",n:3,ahead:100},{at:610,kind:"squad",form:"cross",role:"sine",n:6,ahead:88},{at:648,kind:"blockers",n:3},{at:670,kind:"squad",form:"v",role:"dive",n:5,ahead:86},{at:710,kind:"squad",form:"pair",role:"sine",n:4,ahead:92},{at:748,kind:"gate"},{at:780,kind:"squad",form:"flank",role:"heavy",n:2,ahead:98},{at:820,kind:"midboss",id:"warden"},{at:920,kind:"breath"},{at:944,kind:"orbs"},{at:968,kind:"squad",form:"cross",role:"dive",n:8,ahead:90},{at:1010,kind:"squad",form:"line",role:"sine",n:5,ahead:94},{at:1048,kind:"gate"},{at:1072,kind:"blockers",n:3},{at:1100,kind:"squad",form:"escort",role:"heavy",n:5,ahead:100},{at:1148,kind:"squad",form:"v",role:"dive",n:7,ahead:88},{at:1190,kind:"squad",form:"cross",role:"sine",n:6,ahead:96},{at:1240,kind:"gate"},{at:1270,kind:"squad",form:"line",role:"dive",n:6,ahead:90},{at:1320,kind:"finale"}],fo={queen:"WEAVER QUEEN",warden:"WARDEN",coil:"TITAN COIL",empress:"WEAVER EMPRESS",finale:"SENTINEL"},fr={queen:"queen",warden:"warden",coil:"coil",empress:"empress",finale:"finale"};function Yg(s,t,e,n,i,r,o={},a=null){const l=r==="super",c=r==="finale",h=c?"FINALE":l?"SUPER BOSS":"LEVEL BOSS",u=o.mids||[380,820],d=o.boss||1320,p=[{at:70,toast:`${s} — ${t}`,world:e,sting:"chapter"},{at:u[0],toast:`MINI-BOSS — ${fo[n[0]]}`,world:fr[n[0]],sting:"boss"},{at:u[1],toast:`MINI-BOSS — ${fo[n[1]]}`,world:fr[n[1]],sting:"boss"},{at:d,toast:`${h} — ${fo[i]}`,world:fr[i],sting:"boss"}];return a&&p.splice(1,0,{at:a.at,toast:a.toast,world:e,sting:"chapter"}),(l||c)&&p.splice(-1,0,{at:1188,toast:"LAST AISLE",world:e,sting:"chapter"}),p}function re(s,t,e,n){const i=n.mid,r=n.boss,o=Bg[s];if(!o)throw new Error(`missing beat sheet for ${s}`);const a=n.banner==="super"||n.banner==="finale",l=Wg(o.camp,o),c=Yg(s,t,e,i,r,n.banner,{mids:o.mids,boss:o.boss},o.banner);return{id:s,name:t,world:e,boss:r,banner:n.banner||"",bossWorld:fr[r]||e,exitAt:a?1480:1360,length:a?1520:1400,chapters:c,script:l}}function $g(){return{id:"1-1",name:"STINGER FAN",world:"default",boss:"finale",bossWorld:"finale",exitAt:1360,length:1400,chapters:Xg.map(s=>({...s})),script:qg.map(s=>({...s}))}}const ji=[{id:"stinger",kicker:"CAMPAIGN 01",name:"STINGER FAN",blurb:"The original rift. Sine weavers and heavy bricks live here. Dive fodder still leaks through.",world:"default",levels:[$g(),re("1-2","SILK BREAK","default",{mid:["coil","empress"],boss:"queen"}),re("1-3","CROSS THREAD","default",{mid:["empress","coil"],boss:"warden"}),re("1-4","FAN STORM","default",{mid:["warden","queen"],boss:"coil"}),re("1-5","RIFT SPINE","default",{mid:["coil","warden"],boss:"empress"}),re("1-6","WEAVER CROWN","queen",{mid:["warden","coil"],boss:"queen",banner:"super"})]},{id:"crimson",kicker:"CAMPAIGN 02",name:"CRIMSON SHOALS",blurb:"Hot ribbon. Ember darts and slag hulls. The coil is the law here.",world:"coil",levels:[re("2-1","EMBER DRIFT","coil",{mid:["queen","empress"],boss:"coil"}),re("2-2","SLAG GATES","coil",{mid:["warden","queen"],boss:"empress"}),re("2-3","MAGMA FAN","coil",{mid:["empress","warden"],boss:"queen"}),re("2-4","ASH RIBBON","coil",{mid:["coil","queen"],boss:"warden"}),re("2-5","CINDER NAVE","coil",{mid:["empress","coil"],boss:"queen"}),re("2-6","TITAN COIL","coil",{mid:["warden","empress"],boss:"coil",banner:"super"})]},{id:"cathedral",kicker:"CAMPAIGN 03",name:"NULL CATHEDRAL",blurb:"Gold hush. Acolyte spires and chime discs fill the aisles. The Warden keeps every door.",world:"warden",levels:[re("3-1","AISLE FIRE","warden",{mid:["coil","queen"],boss:"empress"}),re("3-2","NAVE LOCK","warden",{mid:["empress","coil"],boss:"queen"}),re("3-3","CHOIR WALL","warden",{mid:["queen","coil"],boss:"empress"}),re("3-4","GOLD HUSH","warden",{mid:["coil","empress"],boss:"queen"}),re("3-5","WARDEN KEEP","warden",{mid:["queen","empress"],boss:"warden",banner:"super"})]},{id:"iris",kicker:"CAMPAIGN 04",name:"IRIS FORGE",blurb:"Magenta heat. Bloom drones and prism shards. The silk learns your name.",world:"empress",levels:[re("4-1","BLOOM CUT","empress",{mid:["coil","warden"],boss:"queen"}),re("4-2","PRISM GAUNTLET","empress",{mid:["warden","coil"],boss:"queen"}),re("4-3","MAGENTA HEAT","empress",{mid:["queen","coil"],boss:"warden"}),re("4-4","LOOM WAKE","empress",{mid:["coil","queen"],boss:"warden"}),re("4-5","SHARD NAVE","empress",{mid:["warden","queen"],boss:"coil"}),re("4-6","ROYAL SILK","empress",{mid:["coil","warden"],boss:"queen"}),re("4-7","EMPRESS LOOM","empress",{mid:["warden","coil"],boss:"empress",banner:"super"})]},{id:"heart",kicker:"CAMPAIGN 05",name:"HEART OF THE RIFT",blurb:"The ribbon ends here. Ion lances and void wisps. Everything you fought was a door.",world:"finale",levels:[re("5-1","LAST LIGHT","finale",{mid:["queen","coil"],boss:"warden"}),re("5-2","CORE APPROACH","finale",{mid:["empress","warden"],boss:"coil"}),re("5-3","VOID CHOIR","finale",{mid:["coil","empress"],boss:"queen"}),re("5-4","ION WAKE","finale",{mid:["warden","queen"],boss:"empress"}),re("5-5","CROWN GATE","finale",{mid:["empress","coil"],boss:"warden"}),re("5-6","SENTINEL","finale",{mid:["queen","warden"],boss:"finale",banner:"finale"})]}];function ir(s,t){const e=ji[s];if(!e)return null;const n=e.levels[t];return n?{camp:e,ci:s,lv:n,li:t}:null}function Qc(s,t){const e=ji[s];return e?t+1<e.levels.length?{ci:s,li:t+1}:s+1<ji.length?{ci:s+1,li:0}:null:null}const th="aether-campaign";function Xl(){return{nextC:0,nextL:0,cleared:[],best:0}}function po(){try{const s=JSON.parse(localStorage.getItem(th)||"null");return!s||typeof s!="object"?Xl():{nextC:Number(s.nextC)||0,nextL:Number(s.nextL)||0,cleared:Array.isArray(s.cleared)?s.cleared:[],best:Number(s.best)||0}}catch{return Xl()}}function Kg(s){return localStorage.setItem(th,JSON.stringify(s)),s}function Zg(s,t,e){const n=`${t}-${e}`,i=s.cleared.includes(n)?s.cleared:s.cleared.concat(n),r=Qc(t,e);return{...s,cleared:i,nextC:r?r.ci:0,nextL:r?r.li:0}}function jg(s=0,t=0){return 1+Math.max(0,s)*.16+Math.max(0,t)*.045}function Jg(s=0){return 5+Math.max(0,s)}const Qg=ji[0].levels[0].script;ji[0].levels[0].chapters;const t_=[-.84,-.5,-.18,.18,.5,.84];function e_(s,t,e){const n=e;if(s==="v"){const i=[],r=(t-1)/2;for(let o=0;o<t;o++)i.push((o-r)/Math.max(1,r)*n*.72);return i}if(s==="line"){const i=[];for(let r=0;r<t;r++)i.push((r/Math.max(1,t-1)-.5)*n*1.5);return i}if(s==="flank")return[-n*.72,n*.72].slice(0,t);if(s==="pair"){const i=[];for(let r=0;r<t;r++)i.push((r%2===0?-1:1)*n*(.22+Math.floor(r/2)*.28));return i}if(s==="cross"){const i=[];for(let r=0;r<t;r++)i.push((r/Math.max(1,t-1)-.5)*n*1.55);return i}if(s==="escort"){const i=[0],r=[];for(let o=1;o<t;o++)r.push((o%2===0?-1:1)*n*(.35+Math.floor((o-1)/2)*.28));return i.concat(r).slice(0,t)}if(s==="silk-cut"){const i=[],r=t+1;for(let o=0;o<r&&i.length<t;o++){const a=o/Math.max(1,r-1)-.5;Math.abs(a)<.07||i.push(a*n*1.72)}return i}if(s==="curtain"){const i=[];for(let r=0;r<t;r++)i.push((r/Math.max(1,t-1)-.5)*n*1.9);return i}if(s==="aisle"){const i=[],r=Math.floor(t/2);for(let o=0;o<t;o++){const a=o<r,l=a?o:o-r;i.push((a?-1:1)*n*(.5+l*.16))}return i}if(s==="split"){const i=[];for(let r=0;r<t;r++)i.push((r%2===0?-1:1)*n*(.72+Math.floor(r/2)*.1));return i}if(s==="dark"){const i=[];for(let r=0;r<t;r++){const o=r%2===0?-1:1;i.push(o*n*(.64+Math.floor(r/2)*.14))}return i}return t_.slice(0,t).map(i=>i*n)}function n_(s,t,e=7){return s==="v"?Math.abs(t-2)*9:s==="cross"?t%2*14:s==="escort"?t===0?18:0:s==="silk-cut"?t*8:s==="curtain"||s==="aisle"?0:s==="split"?Math.floor(t/2)*10:s==="dark"?t===0?28:4:0}class ql{constructor(t=Qg,e=1400){this.script=t,this.length=e,this.index=0,this.cleared=!1,this.finaleAlive=!1,this.peakThreat=0}reset(){this.index=0,this.cleared=!1,this.finaleAlive=!1,this.peakThreat=0}peek(){return this.script[this.index]||null}consume(){const t=this.script[this.index];return this.index+=1,t}intensity(t,e,n,i){const r=Math.min(1,t/Math.max(240,this.length)),o=Math.min(1,e/10);let a=.18+r*.42+o*.28+(n?.08:0);return i&&(a=Math.max(a,.78)),this.cleared&&(a=.35),this.peakThreat=Math.max(this.peakThreat,a),i_(a)}}function i_(s){return Math.max(0,Math.min(1,s))}function s_(s){let t=0;return t+=Math.min(38,s.score/900),t+=Math.min(18,s.kills/5),t+=Math.min(16,(s.step||0)/5),t+=Math.min(10,(s.maxCombo||1)*1.1),t+=s.victory?14:0,t+=Math.min(8,(s.nearMisses||0)*.15),t-=Math.min(8,(s.bombsUsed||0)*1.2),t>=86?"S":t>=72?"A":t>=56?"B":t>=40?"C":"D"}const eh="aether-scores";function sa(){try{const s=JSON.parse(localStorage.getItem(eh)||"[]");return Array.isArray(s)?s.slice(0,8):[]}catch{return[]}}function r_(s){const t=sa();t.push(s),t.sort((n,i)=>i.score-n.score);const e=t.slice(0,8);return localStorage.setItem(eh,JSON.stringify(e)),e}const nh="aether-hangar",Fi={spark:{title:"PARTICLE BLASTERS",blurb:"The trickle. Forward guns. They never fan wide. Everything else is a different job.",unlock:0},tractor:{title:"TRACTOR WELL",blurb:"A belly well that drinks gold and powerups. This bay is range — how far the sip starts. Force is a different install. Mark 1 only tugs what you almost touch.",unlock:200},pull:{title:"TRACTOR FORCE",blurb:"How hard the well yanks. Logarithmic: fat near the hull, a whisper at the rim. Without the well you still have to be on top of the loot.",unlock:260},needle:{title:"NEEDLE LASERS",blurb:"Kills the brick. Thin lances that stay on a fat hull. Buy them for heavies, not for dives.",unlock:240},seeker:{title:"HOMING MISSILES",blurb:"Heat-seekers on the racks. They turn. You buy the rack before they exist.",unlock:380},shard:{title:"CRYSTAL SHARDS",blurb:"Splinter fire from the nose. Cheap, vicious, and locked until you pay for the cutter.",unlock:400},titan:{title:"TITAN CANNON",blurb:"The boss tooth. A door slam in the belly. You feel the kick. The Queen does too.",unlock:580},wing:{title:"WING FILAMENTS",blurb:"Owns the flanks. Angled guns so the center can stay honest.",unlock:480},helix:{title:"HELIX RIBBON",blurb:"Twinned oscillating streams. The coils have to be fitted before they sing.",unlock:460},drone:{title:"RIFT DRONES",blurb:"Orbiting guns that fly your formation. You purchase the pylons first.",unlock:540},mine:{title:"AETHER MINES",blurb:"Drops on hold. Slow crawlers in the lane. Same trigger — not gifts you place.",unlock:360},shear:{title:"RIFT SHEAR",blurb:"Wide gold blades off the shoulders. Not a blaster. A cut.",unlock:500},spire:{title:"PIERCE SPIRE",blurb:"A nose spike that keeps going. Pierces. Costs like it looks.",unlock:680},nova:{title:"NOVA BURST",blurb:"Clears the flanks. A crown bloom when the aisle fills. Pretty. Mean.",unlock:700},prism:{title:"PRISM SPLIT",blurb:"The bow learns to fan violet. Last luxury before the Sentinel.",unlock:760}};function Yl(){return{gold:0,levels:Es()}}function sr(){try{const s=JSON.parse(localStorage.getItem(nh)||"null");if(!s||typeof s!="object")return Yl();const t=Es();for(const e of Ae){const n=Number(s.levels?.[e]);Number.isFinite(n)&&(t[e]=Math.max(0,Math.min(ye[e].max,n|0)))}return t.spark<1&&(t.spark=1),{gold:Math.max(0,Number(s.gold)||0),levels:t}}catch{return Yl()}}function ih(s){const t={gold:Math.max(0,s.gold|0),levels:{...Es(),...s.levels}};return t.levels.spark<1&&(t.levels.spark=1),localStorage.setItem(nh,JSON.stringify(t)),t}function rr(){return wa()}function sh(s){return Ae.filter(t=>(s[t]|0)>0)}function $l(s,t={}){const e=wa();for(const n of Ae){const i=s[n]|0;if(i<=0){e[n]=0;continue}e[n]=Math.min(ye[n].max,i+(t[n]|0))}return e}function o_(s){return Ae.reduce((t,e)=>t+(s[e]|0),0)}function a_(s,t){const e=Fi[s];if(!e)return 0;const n=Math.max(1,t|0),i=.75+(e.unlock||120)/900;return Math.round((58+n*46)*(1+n*.16)*i)}function Mr(s,t){const e=s[t]|0,n=ye[t].max;return e>=n?0:e<=0?Fi[t]?.unlock||0:a_(t,e)}function l_(s,t){const e=Mr(s.levels,t);if(e<=0||s.gold<e)return{hangar:s,ok:!1,cost:e};const n={...s.levels,[t]:(s.levels[t]|0)+1};return{hangar:ih({gold:s.gold-e,levels:n}),ok:!0,cost:e}}function Kl(s,t){return t<=0?s:ih({...s,gold:s.gold+(t|0)})}function c_(s,t,e){const n={...t},i=sh(s);let r=null,o=0,a=n._i||0;for(let l=0;l<e;l++){let c=!1;for(let h=0;h<i.length;h++){const u=i[(a+h)%i.length],d=(s[u]|0)+(n[u]|0);if(!(d>=ye[u].max)){n[u]=(n[u]|0)+1,a=(a+h+1)%i.length,o+=1,r=d+1>=ye[u].max?`${ye[u].tag} MAX`:`${ye[u].tag} UP`,c=!0;break}}if(!c)break}return n._i=a,{runBonus:n,toast:r,gained:o}}function h_(s,t){const e={...s};let n=Math.max(0,t|0);for(let i=Ae.length-1;i>=0&&n>0;i--){const r=Ae[i],o=e[r]|0,a=Math.min(o,n);e[r]=o-a,n-=a}return e}function mo(s,t){let e=0,n=0;for(const i of sh(s)){const r=s[i]|0;e+=ye[i].max-r,n+=t[i]|0}return{cap:e,used:n,ratio:e<=0?1:n/e}}function u_(s,t,{superBoss:e=!1,finale:n=!1,mids:i=2}={}){const r=55+s*30+t*12,o=n?220:e?175:110,a=Math.max(0,i)*28;return{clear:r,boss:o,mid:a,total:r+o+a}}const Zl=.28;function d_(s={}){const t=s.tractor|0,e=s.pull|0;if(t<=0&&e<=0)return{range:0,force:0,rangeLv:t,forceLv:e};const n=t>0?6.2+(t-1)*3.15:5.4,i=e>0?28+(e-1)*22:16;return{range:n,force:i,rangeLv:t,forceLv:e}}function jl(s,t){const e=t?.range||0,n=t?.force||0;if(e<=0||n<=0||s>=e||s<=0)return 0;const i=Math.log(e/Zl);return i>1e-8?n*(Math.log(e/Math.max(s,Zl))/i):n}function f_(s,t=0,e=""){if(e==="1-1"){if((s.tractor|0)<=0)return"tractor";if((s.needle|0)<=0)return"needle"}const n=e==="1-1"?["tractor","needle",...Ae]:Ae;for(const i of n){const r=Mr(s,i);if(r>0&&t>=r)return i}return null}function p_(s,t){const e=s[t]|0,n=ye[t].max;return e>=n?"MAXED":e<=0?"INSTALL":`UPGRADE  ${e} → ${e+1}`}function m_(s,t,e,n,i){const r=s.offset?.x??0,o=s.pathDist-4,a=e??r;s.patternI=(s.patternI||0)%12;const l=s.patternI;if(s.patternI+=1,s.role==="queen")return g_(l,o,r,a,t,i,s);if(s.role==="empress")return __(l,o,r,a,t,i,s);if(s.role==="warden")return x_(l,o,r,a,t,i,s);if(s.role==="coil")return v_(l,o,r,a,t,i,s);if(s.role==="finale")return M_(s,o,t,a,n,i);if(s.role==="cinder")return i(o,r-t*.04,7.8,!1),i(o,r+t*.04,7.8,!1),0;if(s.role==="acolyte")return i(o,r,7.2,!1),i(o-3,r,6.8,!1),0;if(s.role==="heavy"||s.role==="slag"||s.role==="chime"){const c=Math.min(8,t*.08);return l%3===0?(i(o,r-c,7,!1),i(o,r+c,7,!1)):l%3===1?(i(o,a,7.4,!0),i(o,r,7,!1)):(i(o,r-c*.5,6.8,!1),i(o,r+c*.5,6.8,!1),i(o-3,r,7.2,!0)),0}return s.role==="prism"?(i(o,r-t*.08,7.2,!1),i(o,r+t*.08,7.2,!1),i(o-2,r-t*.14,6.6,!1),i(o-2,r+t*.14,6.6,!1),0):s.role==="ion"?(i(o,r-t*.045,8.2,!1),i(o,r+t*.045,8.2,!1),0):s.role==="bloom"?(i(o,r-t*.06,7.6,!1),i(o,r+t*.06,7.6,!1),0):s.role==="wisp"?(i(o+1,r+Math.sin(n*3.2)*t*.1,7.4,!1),0):(i(o+1,r,8,!1),0)}function Rr(s){return!!(s&&(s.levelBoss||s.superBoss)&&(s.phase||1)>=3)}function g_(s,t,e,n,i,r,o){if(Rr(o)){const h=s%4;if(h===0){for(let u=0;u<5;u++)r(t-u*3,e+(u-2)*i*.15,6.8,u===2);return 0}return h===1?o.superBoss?.72:.58:h===2?(r(t,n,7.5,!0),r(t-6,n-i*.2,6.6,!0),r(t-6,n+i*.2,6.6,!0),0):.46}const a=s%6,l=i*.16,c=i*.12;if(a===0){for(let h=-2;h<=2;h++)r(t,e+h*l,7.2,h===0);return 0}if(a===1)return r(t,n,7.6,!0),r(t,n-i*.06,7.2,!1),r(t,n+i*.06,7.2,!1),0;if(a===2)return .55;if(a===3){for(let h=-3;h<=3;h++)r(t-Math.abs(h)*2,e+h*c,6.4,!1);return 0}return a===4?(r(t,e-l*1.4,6.8,!0),r(t,e+l*1.4,6.8,!0),r(t-5,n,7.4,!0),0):.4}function __(s,t,e,n,i,r,o){if(Rr(o)){const h=s%4;return h===0?(r(t,e-i*.72,6.6,!0),r(t,e+i*.72,6.6,!0),r(t-4,e-i*.82,6.4,!1),r(t-4,e+i*.82,6.4,!1),0):h===1?o.superBoss?.64:.5:h===2?(r(t,n,7.4,!0),r(t-5,e,7,!0),0):.4}const a=s%6,l=i*.18,c=i*.13;if(a===0){for(let h=-3;h<=3;h++)r(t,e+h*l*.72,7.1,h===0);return 0}if(a===1)return r(t,n,7.6,!0),r(t,n-i*.07,7.2,!1),r(t,n+i*.07,7.2,!1),r(t-4,e,7,!0),0;if(a===2)return .5;if(a===3){for(let h=-3;h<=3;h++)r(t-Math.abs(h)*2,e+h*c,6.4,!1);return 0}return a===4?(r(t,e-l*1.5,6.8,!0),r(t,e+l*1.5,6.8,!0),r(t-5,n,7.4,!0),r(t-8,n-l,6.6,!1),r(t-8,n+l,6.6,!1),0):.38}function v_(s,t,e,n,i,r,o){if(Rr(o)){const c=i*.28;return s%2===0?(r(t,e-c,6.4,!0),r(t-5,e-c*.5,6.6,!1),.16):(r(t,e+c,6.4,!0),r(t-5,e+c*.5,6.6,!1),r(t-8,n,7.1,!0),o.superBoss?.55:.42)}const a=s%6,l=i*.2;if(a===0)return r(t,e-l,6.6,!0),r(t,e+l,6.6,!0),r(t,e,7.4,!0),0;if(a===1)return r(t,n,7.3,!0),r(t,e-l*.5,6.8,!1),r(t,e+l*.5,6.8,!1),0;if(a===2)return .52;if(a===3){for(let c=-2;c<=2;c++)r(t,e+c*l*.55,6.4,c===0);return 0}return a===4?(r(t,e-l,6.5,!0),r(t,e+l,6.5,!0),r(t-6,n,7.1,!0),0):.42}function x_(s,t,e,n,i,r,o){if(Rr(o)){const c=s%4;return c===0?(r(t,e-i*.5,6.3,!0),r(t,e+i*.5,6.3,!0),r(t-6,e-i*.66,6.1,!1),r(t-6,e+i*.66,6.1,!1),0):c===1?o.superBoss?.76:.62:c===2?(r(t,n-i*.48,6.8,!0),r(t,n+i*.48,6.8,!0),0):.44}const a=s%6,l=i*.22;if(a===0)return r(t,e-l,6.4,!0),r(t,e+l,6.4,!0),r(t,e,7.5,!0),r(t-6,e-l*.5,6.8,!1),r(t-6,e+l*.5,6.8,!1),0;if(a===1)return r(t,n-4,6.8,!0),r(t,n+4,6.8,!0),r(t,n,7.2,!0),0;if(a===2)return .62;if(a===3){for(let c=-2;c<=2;c++)r(t,e+c*l*.55,6.2,c===0);return 0}return a===4?(r(t,e-l,6.2,!0),r(t,e+l,6.2,!0),r(t-8,n-6,6.6,!1),r(t-8,n+6,6.6,!1),r(t-4,n,7,!0),0):.48}function M_(s,t,e,n,i,r){const o=s.phase||1,a=e*(o===3?.34:.26),l=(s.patternI||0)%4;if(o===1){if(l===2)return .42;const c=3;for(let h=0;h<c;h++){const u=h/(c-1)-.5;r(t,u*a*2,8,!0)}return r(t-3,n,7.4,!0),0}if(o===2){if(l%2===0){for(let c=0;c<5;c++){const h=c/4-.5;r(t,h*a*2,7.6,!0)}return 0}return l===1?(r(t,n-a*.35,7.2,!0),r(t,n+a*.35,7.2,!0),r(t-5,n,6.8,!0),0):.4}return l===0?(r(t,-a*.7,6.6,!0),r(t,a*.7,6.6,!0),r(t-8,Math.sin(i*2.4)*a,6.4,!0),0):l===1?.58:l===2?(r(t,n,6.8,!0),r(t-6,-a*.45,6.4,!0),r(t-6,a*.45,6.4,!0),0):.4}const Zt=16726996,be=6087167,jt=16765286,Kn=656916,Ji=1705224,we=16747034,fn=16738842,y_=16720984;function Nt(s,t,e=2.2){return new In({color:s,metalness:.72,roughness:.28,emissive:t,emissiveIntensity:e})}function wt(s,t=.85){return new $t({color:s,transparent:!0,opacity:t,blending:Me,depthWrite:!1})}function yr(s,t=.55){return new $t({color:s,wireframe:!0,transparent:!0,opacity:t})}function Fn(s,t,e,n,i,r,o,a=[]){return{mesh:s,body:t,wings:e,ring:n,core:i,engines:r,weak:o,parts:a,_baseEmissive:t.material.emissiveIntensity,_coreBaseScale:i.scale.x}}function b_(){const s=new ae,t=Nt(Ji,y_,2.2),e=Nt(2755090,Zt,1.45),n=Nt(Kn,Zt,1.2),i=Nt(1444626,fn,1.4),r=new R(new ke(1.05,1),t);r.scale.set(.48,.43,2.15),r.position.z=.12;const o=new ae,a=[],l=new R(new ot(.44,.32,2.75),n);l.position.set(0,.08,.22);const c=new R(new ot(1.65,.12,.78),e);c.position.set(-.95,0,.22),c.rotation.z=.14;const h=c.clone();h.position.x=.95,h.rotation.z=-.14;const u=new R(new ot(1.1,.1,.58),e);u.position.set(-1.92,-.02,.62),u.rotation.set(0,-.16,.28);const d=u.clone();d.position.x=1.92,d.rotation.y=.16,d.rotation.z=-.28;const p=new R(new ot(.9,.09,.5),n);p.position.set(-.82,.02,-1.03),p.rotation.set(0,.14,.3);const g=p.clone();g.position.x=.82,g.rotation.y=-.14,g.rotation.z=-.3;const _=new R(new Ce(.2,.82,4),n);_.position.set(-2.18,.22,.54);const m=_.clone();m.position.x=2.18;const f=new R(new ot(.24,.52,1.28),n);f.position.set(0,-.34,.68);const S=new R(new ot(.16,.3,.78),i);S.position.set(-.5,-.12,.78);const w=S.clone();w.position.x=.5;const M=new R(new ot(.54,.28,.66),n);M.position.set(0,.01,-1.3),M.rotation.y=Math.PI/4;const I=new R(new Ce(.3,.86,5),n);I.rotation.x=-Math.PI/2,I.position.z=-1.98;const E=new R(new Ce(.15,.68,4),e);E.rotation.x=-Math.PI/2,E.position.z=-2.63;const y=new R(new ot(.035,.018,1.42),wt(Zt,.75));y.position.set(-.26,.31,-.05),y.rotation.y=-.08;const A=y.clone();A.position.x=.26,A.rotation.y=.08;const v=new R(new ot(.28,.025,.035),wt(Zt,.8));v.position.set(0,.25,-1.18);const x=new R(new ot(.34,.025,.04),wt(be,.7));x.position.set(0,.28,1.18);const L=new R(new mt(.13,8,6),wt(be,.95));L.position.set(-2.42,.02,.72);const B=L.clone();B.position.x=2.42,o.add(c,h,u,d,p,g,_,m,L,B);const O=new R(new Wt(.62,.07,8,24),wt(Zt,.8));O.rotation.x=Math.PI/2,O.position.set(0,.02,-1.15);const W=new R(new mt(.29,12,8),wt(Zt,.78));W.position.set(0,.04,-.48);const Y=new R(new mt(.35,10,8),wt(16734932,.95));Y.position.copy(W.position);const k=[],$=[];for(const H of[-.42,.42]){const tt=new R(new Ht(.24,.32,.36,8),i);tt.rotation.x=Math.PI/2,tt.position.set(H,-.1,1.75);const rt=new R(new Wt(.27,.045,6,12),wt(we,.75));rt.rotation.x=Math.PI/2,rt.position.set(H,-.1,1.96);const et=new R(new mt(.27,10,6),wt(we,.92));et.position.set(H,-.1,2.08),$.push(tt,rt),k.push(et)}return a.push(l,c,h,u,d,p,g,_,m,f,S,w,M,I,E,y,A,v,x,...$),s.add(r,l,o,f,S,w,M,I,E,y,A,v,x,O,W,Y,...$,...k),Fn(s,r,o,O,W,k,Y,a)}function w_(){const s=new ae,t=Nt(Ji,Zt,1.9),e=Nt(1641245,Zt,1.35),n=Nt(2758408,jt,1.65),i=Nt(Kn,fn,1.35),r=new R(new Ht(.98,1.12,.62,12),t);r.rotation.x=Math.PI/2,r.position.z=.12;const o=new R(new ke(.82,1),e);o.scale.set(.85,.52,.95),o.position.set(0,.02,-.62);const a=new R(new ot(.34,.28,1.8),n);a.position.set(0,-.03,1.12);const l=new ae,c=[o,a],h=[1,1.48,2.05,2.64,3.18,3.62],u=[.15,.28,.48,.74,1,.58],d=[1,1.08,1.12,1.06,.9,.68];for(const E of[-1,1])for(let y=0;y<h.length;y++){const A=new R(new ot(d[y],.12,.58+y%2*.12),e);A.position.set(E*h[y],.02+Math.sin(y*.8)*.05,u[y]),A.rotation.y=E*(.12+y*.075),A.rotation.z=E*(.1-y*.035),l.add(A),y>=2&&c.push(A)}for(const E of[-1,1]){const y=new R(new ot(.62,.1,1.15),n);y.position.set(E*2.1,-.18,1.72),y.rotation.y=E*.22;const A=new R(new ot(.46,.08,1.28),e);A.position.set(E*3.18,-.1,1.88),A.rotation.y=E*.3,l.add(y,A),c.push(y,A)}const p=new R(new ke(.35,0),e);p.scale.set(.7,.42,1.25),p.position.set(-3.9,0,.44);const g=p.clone();g.position.x=3.9,l.add(p,g),c.push(p,g);const _=new R(new Wt(1.42,.11,8,28),wt(jt,.86));_.rotation.x=Math.PI/2,_.position.set(0,.08,-.55);const m=new R(new mt(.44,12,8),wt(be,.72));m.position.set(0,0,-.03);const f=new R(new mt(.5,10,8),wt(Zt,.92));f.position.copy(m.position);const S=[];for(const[E,y,A,v,x]of[[-.72,-.08,1.35,2.45,-.12],[.72,-.08,1.35,2.45,.12],[-.34,.18,1.72,1.7,-.22],[.34,.18,1.72,1.7,.22]]){const L=new R(new Ht(.045,.035,v,6),n);L.rotation.x=Math.PI/2,L.rotation.y=x,L.position.set(E,y,A),S.push(L)}const w=S.map(E=>{const y=new R(new Ht(.075,.06,E.geometry.parameters.height,5),wt(jt,.48));return y.position.copy(E.position),y.rotation.copy(E.rotation),y}),M=[],I=[];for(const E of[-1.22,1.22]){const y=new R(new Ht(.4,.5,.72,8),i);y.rotation.x=Math.PI/2,y.position.set(E,-.16,2.08);const A=new R(new Wt(.42,.06,6,14),wt(we,.72));A.rotation.x=Math.PI/2,A.position.set(E,-.16,2.45);const v=new R(new mt(.34,10,6),wt(we,.9));v.position.set(E,-.16,2.55),I.push(y,A),M.push(v)}return c.push(...S,...w,...I),s.add(r,o,a,l,_,m,f,...S,...w,...I,...M),Fn(s,r,l,_,m,M,f,c)}function S_(){const s=new ae,t=Nt(2757120,fn,2.6),e=Nt(2758664,jt,1.8),n=Nt(Kn,jt,1.45),i=Nt(1706500,fn,2.4),r=new R(new ot(2.7,1.45,3.1),t);r.position.set(0,.02,.15);const o=new R(new ke(1.2,0),t);o.scale.set(.95,.62,1.15),o.position.set(0,.02,-1.02);const a=new R(new ot(1.55,.4,2),n);a.position.set(0,-.72,.5);const l=new ae,c=[o,a],h=new R(new ot(2.65,.42,1.72),e);h.position.set(-2,0,.52);const u=h.clone();u.position.x=2;const d=new R(new ot(1.28,.68,1.32),n);d.position.set(-3.36,.02,.46),d.rotation.y=-.1;const p=d.clone();p.position.x=3.36,p.rotation.y=.1;const g=new R(new ot(1,.28,1.52),e);g.position.set(-1.72,.48,1.34);const _=g.clone();_.position.x=1.72;const m=new R(new ot(3.7,.3,.72),n);m.position.set(0,.63,-.68),m.rotation.x=-.08,l.add(h,u,d,p,g,_),c.push(h,u,d,p,g,_,m);const f=[],S=[];for(const O of[-1.02,1.02]){const W=new R(new Ht(.27,.38,1.55,8),i);W.rotation.x=Math.PI/2,W.position.set(O,.42,-1.78);const Y=new R(new Wt(.3,.065,6,12),wt(we,.8));Y.rotation.x=Math.PI/2,Y.position.set(O,.42,-2.56),f.push(W),S.push(Y)}const w=new R(new Ht(.32,.42,.42,8),i);w.position.set(-1.22,.95,.18);const M=w.clone();M.position.x=1.22;const I=new R(new ot(.18,.06,.8),wt(be,.7));I.position.set(-.72,.75,.55);const E=I.clone();E.position.x=.72,c.push(...f,...S,w,M,I,E);const y=new R(new Wt(2.48,.2,8,30),wt(jt,.88));y.rotation.x=Math.PI/2,y.position.set(0,-.08,-.32);const A=new R(new mt(.57,12,8),wt(we,.82));A.position.set(0,-.02,-.05);const v=new R(new mt(.64,10,8),wt(jt,.95));v.position.copy(A.position);const x=[],L=[];for(const[O,W,Y,k]of[[-.94,-.43,2.1,1],[.94,-.43,2.1,1],[0,-.52,2.32,.88]]){const $=new R(new Ht(.36*k,.47*k,.5,8),i);$.rotation.x=Math.PI/2,$.position.set(O,W,Y);const H=new R(new Wt(.39*k,.065,6,14),wt(we,.72));H.rotation.x=Math.PI/2,H.position.set(O,W,Y+.27);const tt=new R(new mt(.4*k,10,6),wt(we,.93));tt.position.set(O,W,Y+.42),L.push($,H),x.push(tt)}const B=new R(new ot(1.15,1.15,1),n);return B.position.set(0,.88,.22),c.push(B,...L),s.add(r,o,a,l,m,...f,...S,w,M,I,E,y,A,v,B,...L,...x),Fn(s,r,l,y,A,x,v,c)}function E_(){const s=new ae,t=Nt(Ji,Zt,2.4),e=Nt(1706008,Zt,1.6),n=Nt(Kn,Zt,2),i=Nt(2496263,jt,1.6),r=new R(new hn(1.25,1),t);r.position.set(0,.12,.18);const o=new R(new hn(1.7,2),yr(Zt,.52));o.position.copy(r.position);const a=new R(new hn(1.42,1),yr(be,.32));a.position.set(0,.12,.18);const l=new ae,c=[o,a],h=[1.15,1.82,2.62,3.5,4.38,5.22,6.03,6.65],u=[.12,.24,.43,.64,.82,.94,.76,.45],d=[1.15,1.3,1.42,1.45,1.32,1.14,.92,.58];for(const M of[-1,1])for(let I=0;I<h.length;I++){const E=new R(new ot(d[I],.16,.78+I%3*.12),e);E.position.set(M*h[I],.03+Math.sin(I)*.08,u[I]),E.rotation.y=M*(.08+I*.065),E.rotation.z=M*(.08+I*.025),l.add(E),c.push(E)}const p=[];for(const[M,I,E,y,A,v,x]of[[-3.2,1.05,-.18,.34,.9,.5,-.4],[3.2,1.05,-.18,.34,.9,.5,.4],[-5.18,-.42,1.05,.26,.75,.42,-.55],[5.18,-.42,1.05,.26,.75,.42,.55],[-6.78,.36,.32,.2,.65,.34,-.72],[6.78,.36,.32,.2,.65,.34,.72]]){const L=new R(new ke(.75,0),n);L.position.set(M,I,E),L.scale.set(y,A,v),L.rotation.z=x,p.push(L)}const g=[];for(const[M,I,E,y]of[[-1.55,1.22,-.18,-.45],[-.78,1.55,-.32,-.2],[0,1.75,-.4,0],[.78,1.55,-.32,.2],[1.55,1.22,-.18,.45],[-2.4,.88,-.08,-.65],[2.4,.88,-.08,.65]]){const A=new R(new Ce(.26,1.08,5),n);A.position.set(M,I,E),A.rotation.z=y,g.push(A)}l.add(...p,...g),c.push(...p,...g);const _=new R(new Wt(3.82,.13,10,42),wt(Zt,.88));_.rotation.x=Math.PI/2,_.position.set(0,.3,.1);const m=new R(new mt(.68,14,10),wt(be,.68));m.position.set(0,.08,.1);const f=new R(new mt(.92,14,10),wt(Zt,1));f.position.set(0,-1.55,.28);const S=[],w=[];for(const M of[-1.82,0,1.82]){const I=new R(new Ht(.38,.5,.58,8),i);I.rotation.x=Math.PI/2,I.position.set(M,-.25,2.55);const E=new R(new mt(M===0?.42:.47,10,6),wt(we,.9));E.position.set(M,-.25,2.92),w.push(I),S.push(E)}return c.push(...w),s.add(r,o,a,l,_,m,f,...w,...S),Fn(s,r,l,_,m,S,f,c)}function T_(){const s=new ae,t=Nt(Kn,jt,2),e=Nt(2757120,jt,2.2),n=Nt(1706504,fn,2.3),i=Nt(1705988,fn,2.8),r=new R(new ot(3.65,1.5,3.65),t);r.position.set(0,0,.12);const o=new R(new ot(3.05,1,3.05),n);o.position.set(0,.48,.18);const a=new R(new ot(1.65,2.25,1.65),t);a.position.set(0,1.18,.08);const l=new ae,c=[o,a],h=new R(new ot(11,.58,1.38),e);h.position.set(0,-.02,.16);const u=new R(new ot(1.38,.58,11),e);u.position.set(0,-.02,.16);const d=new R(new ot(3.2,.42,1.05),t);d.position.set(-2.45,.35,-2.45),d.rotation.y=-Math.PI/4;const p=d.clone();p.position.x=2.45,p.rotation.y=Math.PI/4,l.add(h,u,d,p),c.push(h,u,d,p);const g=[];for(const[y,A,v]of[[-4.55,-4.32,-1],[4.55,-4.32,-1],[-4.55,4.62,1],[4.55,4.62,1]]){const x=new R(new Ht(.4,.54,1.6,8),i);x.rotation.x=Math.PI/2,x.position.set(y,.32,A),v>0&&(x.rotation.x=-Math.PI/2);const L=new R(new Wt(.43,.07,6,14),wt(we,.82));L.rotation.x=Math.PI/2,L.position.set(y,.32,A+v*.8),g.push(x,L)}l.add(...g),c.push(...g);const _=[];for(const[y,A]of[[-2.15,-2.1],[2.15,-2.1],[-2.15,2.32],[2.15,2.32]]){const v=new R(new ot(.9,.72,.92),t);v.position.set(y,.82,A),v.rotation.y=y*A<0?.16:-.16,_.push(v)}l.add(..._),c.push(..._);const m=new R(new Wt(3.25,.15,9,36),wt(jt,.9));m.rotation.x=Math.PI/2,m.position.set(0,-.38,.1);const f=new R(new Wt(6.28,.12,9,44),wt(jt,.72));f.rotation.x=Math.PI/2,f.position.set(0,-.56,.08);const S=m;c.push(f);const w=new R(new mt(.74,14,10),wt(we,.78));w.position.set(0,.12,.16);const M=new R(new mt(.86,14,10),wt(jt,.96));M.position.copy(w.position);const I=[],E=[];for(const[y,A,v]of[[-1.26,-.42,3.05],[1.26,-.42,3.05],[0,-.54,3.45]]){const x=new R(new Ht(.42,.56,.58,8),i);x.rotation.x=Math.PI/2,x.position.set(y,A,v);const L=new R(new mt(.48,10,6),wt(we,.92));L.position.set(y,A,v+.42),E.push(x),I.push(L)}return c.push(...E),s.add(r,o,a,l,m,f,w,M,...E,...I),Fn(s,r,l,S,w,I,M,c)}function A_(){const s=new ae,t=1.7,e=Nt(Kn,be,2.5),n=Nt(Ji,Zt,1.8),i=Nt(Ji,Zt,2.8),r=new R(new hn(1.62,1),e);r.scale.setScalar(t*.95);const o=new R(new hn(2.12,1),n);o.scale.setScalar(t*.84);const a=new R(new hn(2.78,2),yr(be,.55));a.scale.setScalar(t*.92);const l=new R(new hn(2.45,1),yr(Zt,.28));l.scale.setScalar(t*1.02);const c=new ae,h=[o,l,a],u=[[0,0,-1],[.72,.28,-.62],[-.72,.28,-.62],[.76,-.3,.58],[-.76,-.3,.58],[0,.82,.38],[0,-.82,.42],[.72,.5,.18]],d=[],p=new P(0,1,0);for(const[E,y,A]of u){const v=new P(E,y,A).normalize(),x=new R(new Ce(.34,1.8,5),i);x.position.copy(v).multiplyScalar(t*3.12),x.quaternion.setFromUnitVectors(p,v),x.scale.setScalar(t),d.push(x)}c.add(...d),h.push(...d);const g=new R(new Wt(3.92*t,.13*t,9,42),wt(be,.82));g.rotation.x=Math.PI/2;const _=new R(new Wt(3.62*t,.1*t,9,38),wt(be,.68)),m=new R(new Wt(4.25*t,.115*t,9,44),wt(Zt,.74));m.rotation.y=Math.PI/2;const f=g;h.push(_,m);const S=new R(new mt(.7,14,10),wt(Zt,.74));S.scale.setScalar(t*.82);const w=new R(new mt(.86,14,10),wt(Zt,1));w.scale.setScalar(t*.82),w.position.set(0,-.28*t,.22*t);const M=[],I=[];for(const[E,y]of[[-1.38,-.72],[1.38,-.72],[-1.38,.72],[1.38,.72]]){const A=new R(new Ht(.38,.5,.62,8),n);A.rotation.x=Math.PI/2,A.position.set(E*t,y*t,3.35*t);const v=new R(new mt(.42,10,6),wt(we,.94));v.position.set(E*t,y*t,3.78*t),I.push(A),M.push(v)}return h.push(...I),s.add(r,o,a,l,c,g,_,m,S,w,...I,...M),Fn(s,r,c,f,S,M,w,h)}function pi(s){return[s(-1),s(1)]}function Zn({hull:s=Kn,emit:t=Zt,emitI:e=2.1,accent:n=be,flame:i=we,body:r,extras:o=[],wingMeshes:a=[],ringR:l=.68,ringW:c=.07,ringZ:h=-1.05,coreR:u=.28,coreZ:d=-.42,engine:p=[[-.4,-.08,1.72],[.4,-.08,1.72]]}){const g=new ae,_=new ae,m=[];for(const y of a)_.add(y),m.push(y);for(const y of o)m.push(y);const f=new R(new Wt(l,c,8,22),wt(n,.82));f.rotation.x=Math.PI/2,f.position.z=h;const S=new R(new mt(u,12,8),wt(n,.8));S.position.z=d;const w=new R(new mt(u*1.18,10,8),wt(t,.94));w.position.copy(S.position);const M=Nt(s,i,1.45),I=[],E=[];for(const[y,A,v]of p){const x=new R(new Ht(.2,.28,.34,8),M);x.rotation.x=Math.PI/2,x.position.set(y,A,v);const L=new R(new mt(.24,8,6),wt(i,.92));L.position.set(y,A,v+.3),E.push(x),I.push(L)}return m.push(...E),g.add(r,_,...o,f,S,w,...E,...I),Fn(g,r,_,f,S,I,w,m)}function R_(){const s=Nt(2754564,fn,2.5),t=Nt(1705476,we,1.7),e=new R(new Ce(.72,2.6,6),s);e.rotation.x=Math.PI/2,e.position.z=-.12;const n=pi(r=>{const o=new R(new ot(1.35,.1,.72),t);return o.position.set(r*.85,.02,.35),o.rotation.z=r*.42,o.rotation.y=r*-.18,o}),i=new R(new ot(.18,.7,1.1),t);return i.position.set(0,-.28,.4),Zn({hull:1705476,emit:fn,accent:we,flame:we,body:e,extras:[i],wingMeshes:n,ringR:.55,ringZ:-1.35,coreR:.24,coreZ:-.7,engine:[[0,-.06,1.55]]})}function C_(){const s=Nt(2363912,fn,2.3),t=Nt(3809800,jt,1.6),e=new R(new ot(2.1,1.15,2.4),s),n=[...pi(o=>{const a=new R(new ot(1.15,.55,1.35),t);return a.position.set(o*1.45,.05,.2),a.rotation.z=o*.12,a})],i=new R(new ot(1.8,.28,.55),t);i.position.set(0,.55,-.7);const r=new R(new ot(.9,.45,.9),s);return r.position.set(0,-.05,-1.45),Zn({hull:2363912,emit:fn,accent:jt,flame:we,body:e,extras:[i,r],wingMeshes:n,ringR:1.15,ringW:.12,ringZ:-.35,coreR:.42,coreZ:.05,engine:[[-.7,-.35,1.55],[.7,-.35,1.55],[0,-.42,1.72]]})}function P_(){const s=Nt(1708552,jt,2.1),t=Nt(Kn,jt,1.5),e=new R(new Ht(.28,.55,2.9,6),s);e.rotation.x=Math.PI/2;const n=new R(new Wt(.72,.05,6,18),wt(jt,.9));n.position.set(0,.55,-.2);const i=pi(o=>{const a=new R(new ot(1.55,.12,.22),t);return a.position.set(o*.85,.35,.15),a.rotation.z=o*-.35,a}),r=new R(new Ce(.38,.9,4),t);return r.rotation.x=-Math.PI/2,r.position.z=-1.7,Zn({hull:1708552,emit:jt,accent:jt,flame:jt,body:e,extras:[n,r],wingMeshes:i,ringR:.48,ringZ:-1.1,coreR:.26,coreZ:-.15,engine:[[0,-.12,1.7]]})}function L_(){const s=Nt(2234376,jt,2),t=new R(new Ht(1.45,1.55,.42,14),s);t.rotation.x=Math.PI/2;const e=new R(new Wt(1.55,.12,8,24),wt(jt,.85));e.rotation.x=Math.PI/2;const n=new R(new mt(.32,10,8),wt(be,.8));n.position.z=.55;const i=pi(r=>{const o=new R(new ot(.28,.7,.28),s);return o.position.set(r*1.15,.55,0),o});return Zn({hull:2234376,emit:jt,accent:jt,flame:we,body:t,extras:[e,n],wingMeshes:i,ringR:1.05,ringW:.1,ringZ:-.15,coreR:.4,coreZ:-.02,engine:[[-.55,-.2,.95],[.55,-.2,.95]]})}function I_(){const s=Nt(1705492,Zt,2.2),t=Nt(2754584,Zt,1.7),e=new R(new mt(.55,10,8),s),n=[];for(let r=0;r<6;r++){const o=new R(new Ce(.42,1.35,5),t),a=r/6*Math.PI*2;o.position.set(Math.cos(a)*.95,Math.sin(a)*.55,.15),o.rotation.z=a+Math.PI/2,o.rotation.x=.55,n.push(o)}const i=new R(new Ce(.22,1.1,5),wt(jt,.85));return i.rotation.x=-Math.PI/2,i.position.z=-1.05,Zn({hull:1705492,emit:Zt,accent:Zt,flame:Zt,body:e,extras:[i],wingMeshes:n,ringR:.82,ringZ:.05,coreR:.3,coreZ:0,engine:[[0,-.15,1.05]]})}function D_(){const s=Nt(1312800,Zt,2),t=Nt(2756672,be,1.8),e=new R(new ke(.85,0),s);e.scale.set(.7,.7,1.35);const n=[];for(const[i,r,o,a,l,c]of[[-.95,.25,-.2,.45,.45,1.4],[.95,.2,.1,.4,.4,1.25],[-.55,-.45,.35,.35,.55,1.1],[.5,-.4,-.45,.38,.38,1.2],[0,.7,.15,.32,.7,.9]]){const h=new R(new ke(.55,0),t);h.scale.set(a,l,c),h.position.set(i,r,o),n.push(h)}return Zn({hull:1312800,emit:Zt,accent:be,flame:Zt,body:e,extras:[],wingMeshes:n,ringR:.9,ringZ:-.85,coreR:.32,coreZ:-.1,engine:[[-.35,-.2,1.35],[.35,-.2,1.35]]})}function N_(){const s=Nt(528408,be,2.3),t=Nt(660776,be,1.6),e=new R(new ot(.55,.4,2.2),s),n=pi(o=>{const a=new R(new Ht(.16,.16,2.8,6),t);return a.rotation.x=Math.PI/2,a.position.set(o*.85,.08,-.15),a}),i=pi(o=>{const a=new R(new Ce(.2,.7,5),wt(be,.9));return a.rotation.x=-Math.PI/2,a.position.set(o*.85,.08,-1.7),a}),r=new R(new ot(1.7,.16,.28),t);return r.position.set(0,.08,.35),Zn({hull:528408,emit:be,accent:be,flame:be,body:e,extras:[r,...i],wingMeshes:n,ringR:.5,ringZ:-.55,coreR:.26,coreZ:.05,engine:[[-.85,.08,1.45],[.85,.08,1.45]]})}function U_(){const s=Nt(656920,jt,1.8),t=wt(be,.45),e=new R(new mt(.48,10,8),s);e.scale.set(.7,.55,1.4);const n=pi(r=>{const o=new R(new ws(1.35,7),t);return o.position.set(r*1.15,.15,.1),o.rotation.y=r*.55,o.rotation.z=r*.35,o}),i=new R(new Ce(.32,1.4,6),s);return i.rotation.x=Math.PI/2,i.position.z=1.05,Zn({hull:656920,emit:jt,accent:be,flame:jt,body:e,extras:[i],wingMeshes:n,ringR:.62,ringZ:-.85,coreR:.28,coreZ:-.35,engine:[[0,-.12,1.85]]})}function F_(){const s=new ae,t=Nt(2755588,fn,2.5),e=Nt(1705988,jt,1.7),n=new R(new Wt(1.85,.55,10,22),t);n.rotation.x=Math.PI/2;const i=new ae,r=[];for(let d=0;d<8;d++){const p=d/8*Math.PI*2,g=new R(new ot(.55,.28,2.1),e);g.position.set(Math.cos(p)*2.15,Math.sin(p)*.35,Math.sin(p*2)*.4),g.rotation.y=p,i.add(g),r.push(g)}const o=new R(new Ht(.7,.9,1.4,8),t);o.rotation.x=Math.PI/2,r.push(o);const a=new R(new Wt(2.4,.12,8,28),wt(we,.88));a.rotation.x=Math.PI/2;const l=new R(new mt(.7,12,8),wt(we,.85)),c=new R(new mt(.82,10,8),wt(jt,.95)),h=[],u=[];for(const[d,p]of[[-1.6,-.4],[1.6,-.4],[0,.7]]){const g=new R(new Ht(.32,.42,.5,8),e);g.rotation.x=Math.PI/2,g.position.set(d,p,1.7);const _=new R(new mt(.36,8,6),wt(we,.92));_.position.set(d,p,2.05),u.push(g),h.push(_)}return r.push(o,...u),s.add(n,o,i,a,l,c,...u,...h),Fn(s,n,i,a,l,h,c,r)}function k_(){const s=new ae,t=Nt(Ji,Zt,2.4),e=Nt(2754584,jt,1.85),n=new R(new mt(1.15,12,10),t);n.scale.set(.85,.7,1.55);const i=new ae,r=[];for(let d=0;d<10;d++){const p=d/10*Math.PI*2,g=new R(new Ce(.55,2.4,5),e);g.position.set(Math.cos(p)*1.7,Math.sin(p)*.85,-.2),g.rotation.z=p+Math.PI/2,g.rotation.x=.7,i.add(g),r.push(g)}const o=new R(new Ce(.7,1.6,6),wt(jt,.8));o.rotation.x=-Math.PI/2,o.position.z=-2.15,r.push(o);const a=new R(new Wt(2.05,.14,8,28),wt(Zt,.88));a.rotation.x=Math.PI/2,a.position.z=-.4;const l=new R(new mt(.62,12,8),wt(jt,.85));l.position.z=-.15;const c=new R(new mt(.72,10,8),wt(Zt,.95));c.position.copy(l.position);const h=[],u=[];for(const d of[-.7,.7]){const p=new R(new Ht(.28,.38,.45,8),e);p.rotation.x=Math.PI/2,p.position.set(d,-.25,1.85);const g=new R(new mt(.32,8,6),wt(Zt,.92));g.position.set(d,-.25,2.18),u.push(p),h.push(g)}return r.push(o,...u),s.add(n,i,o,a,l,c,...u,...h),Fn(s,n,i,a,l,h,c,r)}function Xn(s,t){const e=s._baseEmissive??2.2,n=Math.max(0,Math.min(1,t));s.body.material.emissiveIntensity=e+n*8}function go(s,t){const e=Math.max(1,Math.min(3,t)),n=s.parts??[],i=s._coreBaseScale??1;if(e===1){for(const r of n)r.visible=!0;s.core.scale.setScalar(i),s.weak&&(s.weak.visible=!0),s.ring&&(s.ring.visible=!0),s.wings&&(s.wings.visible=!0)}else if(e===2){const r=Math.max(1,Math.floor(n.length*.45));n.forEach((o,a)=>{o.visible=a>=r}),s.core.scale.setScalar(i*1.35),s.weak&&(s.weak.visible=!0)}else n.forEach(r=>{r.visible=!1}),s.core.scale.setScalar(i*1.85),s.weak&&(s.weak.visible=!0),s.ring&&(s.ring.visible=!1)}const Jl={dive:b_,sine:w_,heavy:S_,cinder:R_,slag:C_,acolyte:P_,chime:L_,bloom:I_,prism:D_,ion:N_,wisp:U_,queen:E_,warden:T_,coil:F_,empress:k_};function O_(s){return new ve({uniforms:{uTime:{value:0},uSeed:{value:Math.random()*40},uColor:{value:new q(s)}},vertexShader:sg,fragmentShader:rg,transparent:!0,blending:Me,depthWrite:!1})}class B_{constructor(t){this.scene=t,this.orbs=[],this.gates=[],this.enemies=[],this.blockers=[],this.bullets=[],this.enemyShots=[],this.pickups=[],this._tractor={range:0,force:0},this.explosions=[],this.impacts=[],this.boss=null,this.time=0,this.laneLimit=24,this.coinValue=5,this._seedOrbs(),this._seedGates(),this._seedEnemies(),this._seedBlockers(),this._seedBullets(),this._seedPickups(),this._seedExplosions(),this._seedImpacts()}_seedOrbs(){for(let t=0;t<28;t++){const e=t%3===0?"#ffd166":"#5ce1ff",n=O_(e),i=new R(new hn(.55,1),n),r=new R(new mt(1.1,16,12),new $t({color:e,transparent:!0,opacity:.18,blending:Me,depthWrite:!1}));i.add(r),i.visible=!1,this.scene.add(i),this.orbs.push({mesh:i,alive:!1,pathDist:0,radius:1.4,value:t%3===0?40:12,color:new q(e),offset:new P})}}_seedGates(){for(let t=0;t<8;t++){const e=new ae,n=new R(new Wt(6.4,.22,12,64),new In({color:1056816,emissive:16726996,emissiveIntensity:3.4,metalness:.4,roughness:.25})),i=new R(new ws(6,32),new $t({color:16726996,transparent:!0,opacity:.28,blending:Me,depthWrite:!1,side:ln}));e.add(n,i),e.visible=!1,this.scene.add(e),this.gates.push({mesh:e,ring:n,shield:i,alive:!1,pathDist:0,passed:!1,locked:!0,hp:4,burst:0,burstAge:0,pulse:0})}}_seedEnemies(){for(let t=0;t<28;t++){const e=new ae;e.visible=!1,this.scene.add(e),this.enemies.push({mesh:e,kits:{},craft:null,ring:null,wings:null,body:null,alive:!1,pathDist:0,hp:4,radius:3.4,cooldown:0,windup:0,windMax:.18,flash:0,elite:!1,offset:new P,role:"dive",nearMiss:!1,patternI:0,visPhase:1,weak:null,core:null})}}_seedBlockers(){for(let t=0;t<12;t++){const e=new R(new ke(1,0),new In({color:2757120,metalness:.45,roughness:.28,emissive:16747034,emissiveIntensity:3.2})),n=new R(new mt(1.35,16,12),new $t({color:16751162,transparent:!0,opacity:.16,blending:Me,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.blockers.push({mesh:e,alive:!1,pathDist:0,hp:3,radius:3.2,offset:new P})}}_seedBullets(){this._shotGeo={spark:new ot(.22,.22,1.15),needle:new ot(.12,.12,14),titan:new ot(1.85,.62,6.8),seeker:new ke(.55,0),shard:new Hi(.42,0),mine:new mt(.55,10,8),nova:new ke(.4,0),wing:new ot(.28,.12,3.4),helix:new ot(.22,.22,4.2),shear:new ot(.55,.18,3.8),spire:new ot(.1,.1,16),drone:new mt(.32,8,6),prism:new ot(.22,.22,2.4)},this._tracerGeo=new ot(.06,.06,3.6);for(let t=0;t<480;t++){const e=new R(this._shotGeo.spark,new $t({color:15269887})),n=new R(this._tracerGeo,new $t({color:11075576,transparent:!0,opacity:.55,blending:Me,depthWrite:!1}));n.position.z=1.4,e.add(n),e.visible=!1,this.scene.add(e),this.bullets.push({mesh:e,vel:new P,alive:!1,life:0,pathDist:0,laneX:0,along:1,speed:120,laneDrift:0,damage:1,home:0,homeSteer:0,pierce:0,hitR:1.6,wobble:0,phase:0,hitList:[],kind:"spark",tracer:n})}for(let t=0;t<96;t++){const e=new R(new mt(.58,12,10),new $t({color:16718408})),n=new R(new mt(1.05,12,10),new $t({color:16722530,transparent:!0,opacity:.55,blending:Me,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.enemyShots.push({mesh:e,vel:new P,alive:!1,life:0,pathDist:0,laneX:0,along:-1,speed:8,fat:!1})}}_seedPickups(){for(let t=0;t<64;t++){const e=new R(new Hi(1.15,0),new $t({color:8057087})),n=new R(new mt(1.85,10,8),new $t({color:6087167,transparent:!0,opacity:.28,blending:Me,depthWrite:!1}));e.add(n),e.visible=!1,this.scene.add(e),this.pickups.push({mesh:e,glow:n,alive:!1,pathDist:0,laneX:0,radius:2.1,value:1,magnet:0,grace:0,kind:"mote"})}}_seedExplosions(){this._shardGeo=new Hi(.32,0),this._flashGeo=new mt(.7,8,6);for(let t=0;t<16;t++){const e=new ae,n=new $t({color:6087167,transparent:!0,opacity:1,depthWrite:!1}),i=[];for(let a=0;a<10;a++){const l=new R(this._shardGeo,n);l.userData.vel=new P,e.add(l),i.push(l)}const r=new $t({color:16777215,transparent:!0,opacity:0,blending:Me,depthWrite:!1}),o=new R(this._flashGeo,r);e.add(o),e.visible=!1,this.scene.add(e),this.explosions.push({group:e,shards:i,shardMat:n,flash:o,flashMat:r,alive:!1,life:0,duration:.45})}}_seedImpacts(){for(let t=0;t<72;t++){const e=new R(new mt(.22,6,6),new $t({color:10156031,transparent:!0,opacity:1,blending:Me,depthWrite:!1}));e.visible=!1,this.scene.add(e),this.impacts.push({mesh:e,vel:new P,alive:!1,life:0,duration:.16})}}reset(){for(const t of[this.orbs,this.gates,this.enemies,this.blockers,this.bullets,this.enemyShots,this.pickups])for(const e of t)e.alive=!1,e.mesh.visible=!1,"passed"in e&&(e.passed=!1),"locked"in e&&(e.locked=!0),"nearMiss"in e&&(e.nearMiss=!1),"burst"in e&&(e.burst=0),"burstAge"in e&&(e.burstAge=0),"grace"in e&&(e.grace=0);this.boss&&(this.scene.remove(this.boss.mesh),this.boss=null);for(const t of this.explosions)t.alive=!1,t.life=0,t.group.visible=!1;for(const t of this.impacts)t.alive=!1,t.life=0,t.mesh.visible=!1;this.time=0,this.laneLimit=24,this.coinValue=5}spawnAhead(t,e){this._placeInactive(this.orbs,t,e,78,7,"orb")}spawnSquad(t,e,n,i,r,o=90,a=1){const l=this.laneLimit||24,c=r||4,h=e_(n,c,l);for(let u=0;u<c;u++){const d=this.enemies.find(g=>!g.alive);if(!d)break;const p=e+o+n_(n,u,c);this._placeOne(d,t,p,"enemy"),this._dressEnemy(d,i||"dive",a,h[u]??0,l)}}spawnNamed(t,e,n,i=96,r=0,o=null,a=1,l={}){const c=this.enemies.find(h=>!h.alive);c&&(this._placeOne(c,t,e+i,"enemy"),this._dressEnemy(c,n,a,0,this.laneLimit||24,r,o,l))}spawnGateAt(t,e,n=72,i=1){const r=this.gates.find(o=>!o.alive);r&&this._placeOne(r,t,e+n,"gate",i)}spawnOrbsAt(t,e,n=4,i=48){for(let r=0;r<n;r++){const o=this.orbs.find(a=>!a.alive);if(!o)break;this._placeOne(o,t,e+i+r*9,"orb")}}spawnBlockersAt(t,e,n=2,i=80,r=1){for(let o=0;o<n;o++){const a=this.blockers.find(l=>!l.alive);if(!a)break;this._placeOne(a,t,e+i+o*14,"blocker",r)}}spawnFinale(t,e,n=96,i=0,r=null,o=1){this.boss?.alive||(this.boss&&(this.scene.remove(this.boss.mesh),this.boss=null),this._spawnBoss(t,e+n,i,r,o))}_placeInactive(t,e,n,i,r,o){let a=t.filter(l=>l.alive).length;for(;a<Math.min(r,t.length);){const l=t.find(c=>!c.alive);if(!l)break;this._placeOne(l,e,n+70+a*i+Math.random()*24,o),a++}}_placeOne(t,e,n,i,r=1){const o=e.sample(n),a=Dn(o.tangent),l=this.laneLimit||24;let c=0,h=0;if(i==="orb")c=(Math.random()-.5)*l*1.7,h=(Math.random()-.5)*16;else if(i==="enemy")c=(Math.random()-.5)*l*1.7,h=0;else if(i==="blocker"){c=(Math.random()-.5)*l*1.7,h=0;const u=2.4+Math.random()*1.6;t.mesh.scale.setScalar(u),t.radius=1.15*u,t.hp=3+Math.max(0,Math.round((r-1)*2))}else i==="gate"&&(t.passed=!1,t.locked=!0,t.hp=4+Math.max(0,Math.round((r-1)*3)),t.burst=0,t.burstAge=0,t.shield.visible=!0,t.shield.material.color.set(16726996),t.shield.material.opacity=.32,t.ring.material.emissive.set(16726996),t.ring.material.emissiveIntensity=3.4,t.ring.scale.set(1,1,1));t.mesh.position.copy(o.pos).addScaledVector(a.binormal,c).addScaledVector(a.normal,h),t.mesh.visible=!0,t.alive=!0,t.pathDist=n,t.offset=new P(c,h,0),i==="enemy"&&(t.baseX=c),t.mesh.lookAt(o.pos.clone().add(o.tangent))}_dressEnemy(t,e,n,i,r,o=0,a=null,l={}){this._bindCraft(t,e),t.role=e,t.nearMiss=!1,t.flash=0,t.windup=0,t.patternI=0,t.visPhase=1,t.phase=1,t.levelBoss=!!l.levelBoss,t.superBoss=!!l.superBoss,t.elite=e==="queen"||e==="warden"||e==="coil"||e==="empress",t.offset.x=i+(Math.random()-.5)*r*.03,t.baseX=t.offset.x,t.weave=.55+Math.random()*.7;const c=Number(n)||1,h=p=>c<=1.001?0:Math.max(0,Math.round(p*(c-1)*.75)),d=e==="queen"||e==="warden"||e==="finale"?1:1+Math.max(0,c-1)*.18;t.mesh.scale.setScalar(1),t.craft&&go(t.craft,1),e==="queen"?(t.hp=Math.round(Di("queen",o,a)*d),t.maxHp=t.hp,t.radius=7.4,t.descent=.52,t.cooldown=.85,t.windMax=.46,t.drop=3,t.bombDrop=1):e==="warden"?(t.hp=Math.round(Di("warden",o,a)*d),t.maxHp=t.hp,t.radius=7.6,t.descent=.38,t.cooldown=1.05,t.windMax=.55,t.drop=3,t.bombDrop=1):e==="coil"?(t.hp=Math.round(Di("coil",o,a)*d),t.maxHp=t.hp,t.radius=6.4,t.descent=.44,t.cooldown=.95,t.windMax=.48,t.drop=3,t.bombDrop=1):e==="empress"?(t.hp=Math.round(Di("empress",o,a)*d),t.maxHp=t.hp,t.radius=7.4,t.descent=.48,t.cooldown=.9,t.windMax=.5,t.drop=3,t.bombDrop=1):e==="heavy"||e==="slag"||e==="chime"||e==="prism"||e==="wisp"?(t.hp=11+h(11),t.maxHp=t.hp,t.radius=4.8,t.descent=.85+Math.random()*.55,t.cooldown=1.4+Math.random()*.8,t.windMax=.45,t.drop=1,t.bombDrop=0):e==="sine"||e==="cinder"||e==="acolyte"||e==="bloom"||e==="ion"?(t.hp=6+h(6),t.maxHp=t.hp,t.radius=4.2,t.descent=1.35+Math.random()*1.1,t.cooldown=1.9+Math.random()*1.3,t.windMax=.22,t.drop=0,t.bombDrop=0):(t.hp=5+h(5),t.maxHp=t.hp,t.radius=3.35,t.descent=2.1+Math.random()*1.5,t.cooldown=1.7+Math.random()*1.4,t.windMax=.16,t.drop=0,t.bombDrop=0)}_bindCraft(t,e){const n=Jl[e]?e:"dive";if(t.kits||(t.kits={}),!t.kits[n]){const r=Jl[n]();t.mesh.add(r.mesh),t.kits[n]=r}for(const[r,o]of Object.entries(t.kits))o.mesh.visible=r===n;const i=t.kits[n];t.craft=i,t.body=i.body,t.wings=i.wings,t.ring=i.ring,t.core=i.core,t.weak=i.weak}_spawnBoss(t,e,n=0,i=null,r=1){const o=A_();this.scene.add(o.mesh),this.boss={mesh:o.mesh,craft:o,body:o.body,wings:o.wings,ring:o.ring,core:o.core,weak:o.weak,shell:o.ring,pathDist:e,hp:Di("finale",n,i),maxHp:Di("finale",n,i),cooldown:.6,windup:0,windMax:.42,radius:7.6,alive:!0,elite:!0,role:"finale",phase:1,visPhase:1,patternI:0,flash:0,bombDrop:0,drop:5,offset:new P(0,0,0)},go(o,1);const a=t.sample(e);o.mesh.position.copy(a.pos)}fireRail(t,e,n,i=1,r={}){const o=this.bullets.find(a=>!a.alive);return o?(o.alive=!0,o.life=r.life??1.15,o.pathDist=e,o.laneX=n,o.along=i,o.speed=r.speed??124,o.laneDrift=r.drift??0,o.damage=r.damage??1,o.home=r.home??0,o.homeSteer=r.homeSteer??0,o.pierce=r.pierce??0,o.hitR=r.hitR??1.6,o.wobble=r.wobble??0,o.phase=r.phase??Math.random()*6.28,o.kind=r.kind||"spark",o.hitList=[],this._dressBullet(o,r),o.mesh.visible=!0,this._placeRailShot(o,t),!0):!1}_dressBullet(t,e){const n=e.kind||"spark",i=this._shotGeo[n]||this._shotGeo.spark;t.mesh.geometry!==i&&(t.mesh.geometry=i);const r=e.scale??1;let o=r,a=r,l=1;if(n==="spark"||n==="shard"||n==="prism"?l=1:n==="seeker"?(o=r*1.15,a=r*1.15,l=1):n==="titan"?(o=r,a=r,l=1):n==="mine"?(o=r*1.2,a=r*1.2,l=1):n==="wing"||n==="nova"?l=1:n==="spire"||n==="needle"?(o=r,a=r,l=1):(n==="helix"||n==="shear"||n==="drone")&&(l=1),t.mesh.scale.set(o,a,l),t.mesh.material.color.set(e.color??15269887),t.tracer){const c=n==="needle"||n==="spire"||n==="spark"||n==="helix";t.tracer.visible=c,t.tracer.material.color.set(e.color??11075576),t.tracer.scale.set(n==="needle"||n==="spire"?.7:1,n==="needle"||n==="spire"?.7:1,n==="needle"||n==="spire"?2.4:1)}}enemyFireRail(t,e,n,i=8,r=!1){const o=this.enemyShots.find(a=>!a.alive);o&&(o.alive=!0,o.life=r?4.2:3.6,o.pathDist=e,o.laneX=n,o.along=-1,o.speed=i,o.fat=r,o.mesh.scale.setScalar(r?1.55:1),o.mesh.material.color.set(r?16711736:16718408),o.mesh.visible=!0,this._placeRailShot(o,t))}_placeRailShot(t,e){const n=ms(e,t.pathDist,t.laneX,.45);t.mesh.position.copy(n.pos),t.vel.copy(n.sample.tangent).multiplyScalar(t.along*t.speed),t.mesh.lookAt(n.pos.clone().addScaledVector(n.sample.tangent,t.along))}explode(t,e=6087167){let n=this.explosions.find(i=>!i.alive);if(!n){n=this.explosions[0];for(const i of this.explosions)i.life<n.life&&(n=i)}n.alive=!0,n.duration=.45,n.life=n.duration,n.group.visible=!0,n.group.position.copy(t),n.shardMat.color.set(e),n.shardMat.opacity=1,n.flashMat.color.set(e),n.flashMat.opacity=.85,n.flash.scale.setScalar(1);for(const i of n.shards)i.position.set(0,0,0),i.scale.setScalar(.65+Math.random()*.7),i.userData.vel.randomDirection().multiplyScalar(7+Math.random()*9)}spawnImpact(t,e=10156031){const n=5+(Math.random()*3|0);let i=0;for(const r of this.impacts)if(!r.alive&&(r.alive=!0,r.duration=.14+Math.random()*.08,r.life=r.duration,r.mesh.visible=!0,r.mesh.position.copy(t).add(new P().randomDirection().multiplyScalar(.35)),r.vel.randomDirection().multiplyScalar(10+Math.random()*16),r.mesh.material.color.set(e),r.mesh.scale.setScalar(.7+Math.random()*.9),i+=1,i>=n))break}bombSweep(t,e,n=16){let i=0,r=0;const o=[];for(const l of this.enemyShots)l.alive&&(this.spawnImpact(l.mesh.position.clone(),16769162),l.alive=!1,l.mesh.visible=!1,i+=1);const a=t+e;for(const l of this.enemies){if(!l.alive)continue;const c=l.pathDist-a;c<-10||c>78||(l.hp-=l.elite?Math.max(n,(l.maxHp||l.hp)*.08):n,l.flash=.2,l.craft&&Xn(l.craft,.9),this._syncVisPhase(l),r+=1,this.spawnImpact(l.mesh.position.clone(),16761165),l.hp<=0&&(l.alive=!1,l.mesh.visible=!1,this.explode(l.mesh.position.clone(),l.elite?16765286:16747066),o.push({type:l.elite?"midboss":"enemy",role:l.role,pos:l.mesh.position.clone(),pathDist:l.pathDist,laneX:l.offset.x,drop:l.drop??1,bombDrop:l.bombDrop??0})))}if(this.boss?.alive){const l=this.boss.pathDist-a;l>-10&&l<90&&(this.boss.hp-=Math.max(n,this.boss.maxHp*.08),this.boss.craft&&Xn(this.boss.craft,.9),this._syncVisPhase(this.boss),r+=1,this.spawnImpact(this.boss.mesh.position.clone(),16765286),this.boss.hp<=0&&(this.boss.alive=!1,this.boss.mesh.visible=!1,this.explode(this.boss.mesh.position.clone(),16726996),o.push({type:"boss",pos:this.boss.mesh.position.clone(),pathDist:this.boss.pathDist,laneX:0,drop:this.boss.drop??5,bombDrop:0})))}return{shots:i,hunters:r,killed:o}}spawnMote(t,e,n,i=1,r={}){const o=[],a=r.spread??3.4;for(let l=0;l<i;l++){const c=this.pickups.find(h=>!h.alive);if(!c)break;this._paintPickup(c,"mote",1),c.alive=!0,c.pathDist=e+(Math.random()-.5)*3,c.laneX=n+(l-(i-1)/2)*a+(Math.random()-.5)*1.6,c.magnet=0,c.grace=r.grace??0,c.mesh.visible=!0,c.mesh.scale.setScalar(1),this._placeMote(c,t),o.push(c)}return o}spawnCoins(t,e,n,i=1,r={}){const o=[],a=r.spread??4.2;for(let l=0;l<i;l++){const c=this.pickups.find(h=>!h.alive);if(!c)break;this._paintPickup(c,"coin",r.value||this.coinValue||5),c.alive=!0,c.pathDist=e+(Math.random()-.5)*4,c.laneX=n+(l-(i-1)/2)*a+(Math.random()-.5)*1.8,c.magnet=0,c.grace=r.grace??0,c.mesh.visible=!0,c.mesh.scale.setScalar(1.08),this._placeMote(c,t),o.push(c)}return o}_paintPickup(t,e,n){const i=e==="coin";t.kind=i?"coin":"mote",t.value=i?n||this.coinValue||5:1,t.radius=i?2.45:2.1,t.mesh.material.color.set(i?16765286:8057087),t.glow.material.color.set(i?16758531:6087167),t.glow.material.opacity=i?.42:.28}_placeMote(t,e){const n=ms(e,t.pathDist,t.laneX,.55);t.mesh.position.copy(n.pos)}recycleBehind(t,e=8){const n=t+Math.min(e,0)-40;for(const i of[this.orbs,this.gates,this.enemies,this.blockers,this.pickups])for(const r of i){if(!r.alive)continue;if(r.pathDist<n){if(r.burst>0||r.elite)continue;r.alive=!1,r.mesh.visible=!1}}}hunterCount(){return this.enemies.filter(t=>t.alive).length+(this.boss?.alive?1:0)}activeBoss(){const t=this.enemies.find(e=>e.alive&&e.elite);return t||(this.boss?.alive?this.boss:null)}blockerAhead(t){return this.blockers.some(e=>e.alive&&e.pathDist-t<70&&e.pathDist>t)}_telegraphAndFire(t,e,n,i,r){const o=t.body;if(t.flash>0?t.craft?Xn(t.craft,Math.min(1,t.flash*5)):o&&(o.material.emissiveIntensity=2.2+t.flash*8):(t.windup||0)<=0&&t.craft&&Xn(t.craft,0),!r){t.windup>0&&(t.windup=0),t.ring&&t.ring.scale.setScalar(1);return}if(t.windup>0){t.windup-=e;const a=1-t.windup/Math.max(.08,t.windMax||.4);if(t.ring&&t.ring.scale.setScalar(1+a*.55),t.craft?Xn(t.craft,.25+a*.85):o&&(o.material.emissiveIntensity=2.2+a*5.5),t.shell?.material?.opacity!=null&&(t.shell.material.opacity=.55+a*.4),t.windup<=0){const l=m_(t,this.laneLimit||24,this._playerLane??0,this.time,(c,h,u,d)=>{this.enemyFireRail(n,c,h,u??8,d)});t.ring&&t.ring.scale.setScalar(1),t.cooldown=this._reloadFor(t,i)+(l||0)}return}t.cooldown-=e,t.cooldown<=0&&(t.windMax=t.windMax||.2,t.windup=t.windMax)}_syncVisPhase(t){if(!t?.craft||!(t.elite||t.role==="finale"))return;const e=t.hp/Math.max(1,t.maxHp||t.hp),n=e>.66?1:e>.33?2:3;n!==t.visPhase&&(t.visPhase=n,(t.role==="finale"||t.levelBoss||t.superBoss)&&(t.phase=n,go(t.craft,n)))}_reloadFor(t,e){if(t.role==="finale")return t.phase===3?1.15:t.phase===2?1.45:1.85;const n=(t.levelBoss||t.superBoss)&&(t.phase||1)>=3;return t.role==="queen"?n?1.28:1.55:t.role==="empress"?n?1.22:1.48:t.role==="warden"?n?1.4:1.7:t.role==="coil"?n?1.34:1.62:t.role==="heavy"||t.role==="slag"||t.role==="chime"||t.role==="prism"||t.role==="wisp"?Math.max(1.7,2.4-e*.07):Math.max(2.1,2.8-e*.08)}_enemyVolley(t,e,n){const i=t.offset?.x??0,r=t.pathDist-4,o=this.laneLimit||24;if(t.role==="queen"){const a=o*.16;for(let l=-2;l<=2;l++)this.enemyFireRail(e,r,i+l*a,7.2,Math.abs(l)===0);return}if(t.role==="warden"){const a=o*.22;this.enemyFireRail(e,r,i-a,6.4,!0),this.enemyFireRail(e,r,i+a,6.4,!0),this.enemyFireRail(e,r,i,7.5,!0),this.enemyFireRail(e,r-6,i-a*.5,6.8),this.enemyFireRail(e,r-6,i+a*.5,6.8);return}if(t.role==="finale"){const a=o*(t.phase===3?.34:.26),l=t.phase===1?3:5;for(let c=0;c<l;c++){const h=l===1?0:c/(l-1)-.5;this.enemyFireRail(e,r,h*a*2,t.phase===3?7.2:8,!0)}t.phase===3&&this.enemyFireRail(e,r-8,Math.sin(this.time*2.4)*a,6.6,!0);return}if(t.role==="heavy"){const a=Math.min(8,o*.08);this.enemyFireRail(e,r,i-a,7),this.enemyFireRail(e,r,i+a,7);return}this.enemyFireRail(e,r+1,i,8)}update(t,e,n,i,r,o,a=8,l=null){this._tractor=l||{range:0,force:0},this.time+=t;for(const c of this.orbs){if(!c.alive)continue;this._attractOrb(c,t,n,a,r),c.mesh.material.uniforms.uTime.value=this.time,c.mesh.rotation.y+=t*1.4;const h=e.sample(c.pathDist),u=Dn(h.tangent);c.mesh.position.copy(h.pos).addScaledVector(u.binormal,c.offset.x).addScaledVector(u.normal,c.offset.y+Math.sin(this.time*3+c.pathDist)*.35)}for(const c of this.gates){if(!c.alive)continue;const h=e.sample(c.pathDist);if(c.mesh.position.copy(h.pos),c.mesh.lookAt(h.pos.clone().add(h.tangent)),c.burst>0){c.burstAge=(c.burstAge||0)+t;const u=c.burstAge,d=(m,f)=>Math.exp(-(m*m)/(f*f)),p=1*d(u-.24,.18)+.62*d(u-.92,.26)+.32*d(u-1.64,.32)-.24*d(u-.55,.14)-.14*d(u-1.26,.18),g=1+p*1.18;c.pulse=Math.max(0,p),c.ring.scale.set(g,g,1),c.ring.rotation.z+=t*(.7+c.pulse*2.4);const _=3.2+c.pulse*8.5;c.ring.material.emissive.setRGB(.42+c.pulse*.55,.82+c.pulse*.18,1),c.ring.material.emissiveIntensity=_,u>2.2&&(c.burst=0,c.burstAge=0,c.alive=!1,c.mesh.visible=!1,c.ring.scale.set(1,1,1),c.ring.material.emissive.set(6087167),c.ring.material.emissiveIntensity=3.4);continue}c.ring.rotation.z+=t*.8,c.locked&&(c.shield.material.opacity=.22+.12*Math.sin(this.time*6))}for(const c of this.blockers){if(!c.alive)continue;c.mesh.rotation.y+=t*.9,c.mesh.rotation.x+=t*.4;const h=e.sample(c.pathDist),u=Dn(h.tangent);c.mesh.position.copy(h.pos).addScaledVector(u.binormal,c.offset.x).addScaledVector(u.normal,c.offset.y)}this._playerLane=r?.x??0;for(const c of this.enemies){if(!c.alive)continue;if(c.ring&&(c.ring.rotation.z+=t*2.2),c.pathDist-=(c.descent||2)*t,c.elite){const d=n+32;c.pathDist<d&&(c.pathDist=d)}if(c.role==="sine"||c.role==="cinder"||c.role==="acolyte"||c.role==="bloom"||c.role==="ion"||c.role==="queen"||c.role==="empress"){const d=(this.laneLimit||24)*(c.role==="queen"||c.role==="empress"?.22:.08);c.offset.x=(c.baseX||0)+Math.sin(this.time*(c.weave||.9)+c.pathDist*.03)*d}c.offset.y=0;const h=ms(e,c.pathDist,c.offset.x,.4);c.mesh.position.copy(h.pos),c.mesh.up.copy(h.frame.normal),c.mesh.lookAt(h.pos.clone().addScaledVector(h.sample.tangent,-12)),c.flash=Math.max(0,(c.flash||0)-t);const u=c.pathDist>n+6&&c.pathDist<n+78;this._telegraphAndFire(c,t,e,o,u)}if(this.boss?.alive){this.boss.ring&&(this.boss.ring.rotation.z-=t*.9),this.boss.wings&&(this.boss.wings.rotation.y+=t*.35),this.boss.pathDist-=1.15*t,this.boss.pathDist<n+32&&(this.boss.pathDist=n+32);const c=ms(e,this.boss.pathDist,0,1.2);this.boss.mesh.position.copy(c.pos),this.boss.mesh.up.copy(c.frame.normal),this.boss.mesh.lookAt(c.pos.clone().addScaledVector(c.sample.tangent,-16)),this._syncVisPhase(this.boss),this.boss.flash=Math.max(0,(this.boss.flash||0)-t),this.boss.flash>0&&this.boss.craft&&Xn(this.boss.craft,this.boss.flash*4);const h=this.boss.pathDist>n+8&&this.boss.pathDist<n+90;this._telegraphAndFire(this.boss,t,e,o,h)}this._stepProjectiles(this.bullets,t,e),this._stepProjectiles(this.enemyShots,t,e),this._stepPickups(t,e,n,a,r);for(const c of this.impacts){if(!c.alive)continue;c.life-=t,c.mesh.position.addScaledVector(c.vel,t);const h=Math.max(0,c.life/c.duration);c.mesh.material.opacity=h,c.mesh.scale.setScalar(.45+(1-h)*1.6),c.life<=0&&(c.alive=!1,c.mesh.visible=!1)}for(const c of this.explosions){if(!c.alive)continue;c.life-=t;const h=Math.max(0,c.life/c.duration);for(const u of c.shards)u.position.addScaledVector(u.userData.vel,t),u.rotation.x+=t*8,u.rotation.y+=t*5;c.shardMat.opacity=h,c.flashMat.opacity=h*.7,c.flash.scale.setScalar(1+(1-h)*5),c.life<=0&&(c.alive=!1,c.group.visible=!1)}}_stepProjectiles(t,e,n){for(const i of t)if(i.alive){if(i.life-=e,i.home&&this._steerHome(i,e),i.wobble&&(i.laneX+=Math.sin(this.time*7.5+(i.phase||0))*i.wobble*e),i.pathDist+=(i.along||1)*(i.speed||100)*e,i.laneX+=(i.laneDrift||0)*e,i.life<=0||i.pathDist<12){i.alive=!1,i.mesh.visible=!1;continue}this._placeRailShot(i,n)}}_steerHome(t,e){let n=null,i=1e9;for(const h of this.enemies){if(!h.alive||h.pathDist<t.pathDist-4)continue;const u=Math.hypot(h.offset.x-t.laneX,h.pathDist-t.pathDist);u<i&&(i=u,n=h)}if(this.boss?.alive&&this.boss.pathDist>t.pathDist-6){const h=Math.hypot(0-t.laneX,this.boss.pathDist-t.pathDist);h<i&&(i=h,n=this.boss)}if(!n)return;const r=n.offset?.x??0,o=n.pathDist,a=t.homeSteer||60,l=r-t.laneX,c=o-t.pathDist;t.laneX+=Math.sign(l)*Math.min(Math.abs(l),a*e),c>0&&(t.pathDist+=Math.min(c,a*.35*e))}_attractOrb(t,e,n,i,r){const o=this._tractor;if(!o?.range)return;const a=r?.x||0,l=n+i,c=a-(t.offset?.x||0),h=l-t.pathDist,u=-(t.offset?.y||0),d=Math.hypot(c,h,u),p=jl(d,o)*e;if(p<=0||d<1e-4)return;const g=p/d;t.offset.x+=c*g,t.offset.y+=u*g,t.pathDist+=h*g}_stepPickups(t,e,n,i,r){const o=n+i,a=r?.x||0,l=this._tractor;for(const c of this.pickups){if(!c.alive)continue;c.grace>0&&(c.grace-=t),c.pathDist-=9.5*t,c.mesh.rotation.x+=t*2.4,c.mesh.rotation.y+=t*3.1;const h=a-c.laneX,u=o-c.pathDist,d=Math.hypot(h,u);let p=0;c.grace<=0&&l?.range&&(p=jl(d,l)*t,p>0&&d>1e-4&&(c.laneX+=h/d*p,c.pathDist+=u/d*p));const g=.85+.18*Math.sin(this.time*8+c.pathDist);c.mesh.scale.setScalar(g*(p>0?1.08:1)),this._placeMote(c,e)}}collectOrbs(t,e){const n=[];for(const i of this.orbs)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius&&(i.alive=!1,i.mesh.visible=!1,n.push(i));return n}collectMotes(t,e){const n=[];for(const i of this.pickups)!i.alive||i.grace>0||i.mesh.position.distanceTo(t)<e+i.radius&&(i.alive=!1,i.mesh.visible=!1,n.push(i));return n}collectGates(t){const e=[];for(const n of this.gates)!n.alive||n.passed||n.mesh.position.distanceTo(t)<6.2&&(n.locked?e.push({gate:n,blocked:!0}):(n.passed=!0,n.burst=1,n.burstAge=0,e.push({gate:n,blocked:!1})));return e}collideEnemies(t,e){const n=[];for(const i of this.enemies)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius*.68&&n.push(i);return this.boss?.alive&&this.boss.mesh.position.distanceTo(t)<e+this.boss.radius&&n.push(this.boss),n}collideBlockers(t,e){const n=[];for(const i of this.blockers)i.alive&&i.mesh.position.distanceTo(t)<e+i.radius&&n.push(i);return n}nearMisses(t){const e=[];for(const n of this.enemies){if(!n.alive||n.nearMiss)continue;const i=n.mesh.position.distanceTo(t);i>n.radius+1.2&&i<n.radius+3.4&&(n.nearMiss=!0,e.push(n))}return e}_hitPoint(t){return t.mesh.position.clone().addScaledVector(t.vel,.04)}_railHit(t,e,n,i){const r=t.hitR??1.6,o=Math.abs((t.pathDist||0)-e),a=Math.abs((t.laneX||0)-(n||0));return o<i+r+6&&a<i+r}_strike(t,e,n){const i=t.hitR??1.6;return this._hitPoint(t).distanceTo(e)<n+i}_alreadyHit(t,e){return t.hitList&&t.hitList.includes(e)}_applyHit(t,e){return t.hitList||(t.hitList=[]),t.hitList.push(e),(t.pierce||0)>0?(t.pierce-=1,!1):(t.alive=!1,t.mesh.visible=!1,!0)}bulletHits(){const t=[];for(const e of this.bullets){if(!e.alive)continue;let n=!1;for(const i of this.enemies)if(!(!i.alive||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,i.offset?.x??0,i.radius)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.alive=!1,i.mesh.visible=!1,t.push({type:i.elite?"midboss":"enemy",pos:i.mesh.position.clone(),role:i.role,pathDist:i.pathDist,laneX:i.offset.x,drop:i.drop??1,bombDrop:i.bombDrop??0})):(i.flash=i.elite?.22:.12,i.craft&&Xn(i.craft,i.elite?.95:.7),this._syncVisPhase(i),t.push({type:"ping",pos:i.mesh.position.clone(),color:i.elite?16769162:10156031})),n))break;if(!n){for(const i of this.blockers)if(!(!i.alive||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,i.offset?.x??0,i.radius)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.alive=!1,i.mesh.visible=!1,t.push({type:"blocker",pos:i.mesh.position.clone(),pathDist:i.pathDist,laneX:i.offset.x,drop:Math.random()<.45?1:0})):t.push({type:"ping",pos:i.mesh.position.clone(),color:16751162}),n))break;if(!n){for(const i of this.gates)if(!(!i.alive||!i.locked||this._alreadyHit(e,i))&&this._railHit(e,i.pathDist,0,5.2)&&(i.hp-=e.damage||1,n=this._applyHit(e,i),i.hp<=0?(i.locked=!1,i.shield.visible=!1,i.ring.material.emissive.set(6087167),i.ring.material.emissiveIntensity=5.2,t.push({type:"unlock",pos:i.mesh.position.clone(),pathDist:i.pathDist,laneX:0,drop:2})):t.push({type:"ping",pos:i.mesh.position.clone(),color:16737512}),n))break;n||this.boss?.alive&&!this._alreadyHit(e,this.boss)&&this._railHit(e,this.boss.pathDist,0,this.boss.radius)&&(this.boss.hp-=e.damage||1,this._applyHit(e,this.boss),this.boss.hp<=0?(this.boss.alive=!1,this.boss.mesh.visible=!1,t.push({type:"boss",pos:this.boss.mesh.position.clone(),pathDist:this.boss.pathDist,laneX:0,drop:this.boss.drop??5})):(this.boss.flash=.22,this.boss.craft&&Xn(this.boss.craft,.95),this._syncVisPhase(this.boss),t.push({type:"ping",pos:this.boss.mesh.position.clone(),color:16765286})))}}}return t}shotsHitPlayer(t,e){let n=!1;for(const i of this.enemyShots)i.alive&&i.mesh.position.distanceTo(t)<e&&(i.alive=!1,i.mesh.visible=!1,n=!0);return n}nearestLights(t,e){const n=[...e];for(const i of this.pickups)i.alive&&n.push({pos:i.mesh.position,color:new q("#7af0ff"),intensity:8});for(const i of this.orbs)i.alive&&n.push({pos:i.mesh.position,color:i.color,intensity:9});for(const i of this.blockers)i.alive&&n.push({pos:i.mesh.position,color:new q("#ff9a3a"),intensity:14});for(const i of this.gates)i.alive&&n.push({pos:i.mesh.position,color:new q(i.burst>0?"#dcffff":i.locked?"#ff3bd4":"#5ce1ff"),intensity:i.burst>0?14+(i.pulse||0)*32:i.locked?10:16});return this.boss?.alive&&n.push({pos:this.boss.mesh.position,color:new q("#ff3bd4"),intensity:18}),n.sort((i,r)=>i.pos.distanceToSquared(t)-r.pos.distanceToSquared(t)),n.slice(0,6)}}class z_{constructor(){this.ctx=null,this.master=null,this.music=null,this.sfx=null,this.duck=null,this.engine=null,this.boost=0,this.enabled=!1,this.intensity=.2,this._paused=!1,this._nextBeat=0,this._step=0,this._noise=null,this._whooshOn=!1,this._chapter="default",this._arpGain=null,this._choirGain=null}async resume(){this.ctx||(this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.2,this.duck=this.ctx.createGain(),this.duck.gain.value=1,this.music=this.ctx.createGain(),this.music.gain.value=.55,this.sfx=this.ctx.createGain(),this.sfx.gain.value=1,this.music.connect(this.duck),this.duck.connect(this.master),this.sfx.connect(this.master),this.master.connect(this.ctx.destination),this._noise=this._makeNoise(2),this._startEngine(),this._startPad(),this._startStems(),this._nextBeat=this.ctx.currentTime+.05),this.ctx.state==="suspended"&&await this.ctx.resume(),this.enabled=!0,this.setPaused(!1)}setPaused(t){if(this._paused=t,!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?8e-4:.2,e,.04)}setIntensity(t){this.intensity=Math.max(0,Math.min(1,t))}tick(){if(!this.enabled||!this.ctx||this._paused)return;const t=this.ctx.currentTime,n=60/96/4;for(;this._nextBeat<t+.12;)this._scheduleBeat(this._nextBeat,this._step),this._nextBeat+=n,this._step=(this._step+1)%16;if(this._padFilt){const i=t;this._padFilt.frequency.setTargetAtTime(220+this.intensity*920,i,.2),this._padGain.gain.setTargetAtTime(.045+this.intensity*.05,i,.25)}this._mixStems(t)}setChapter(t){this._chapter=t||"default"}_makeNoise(t){const e=this.ctx,n=e.createBuffer(1,e.sampleRate*t,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;return n}_osc(t,e,n,i,r,o,a){const l=this.ctx.createOscillator(),c=this.ctx.createGain();return l.type=t,l.frequency.setValueAtTime(e,n),a&&l.frequency.exponentialRampToValueAtTime(a,n+i),c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(Math.max(2e-4,r),n+.01),c.gain.exponentialRampToValueAtTime(1e-4,n+i),l.connect(c),c.connect(o||this.sfx),l.start(n),l.stop(n+i+.02),l}_noiseBurst(t,e,n,i,r){const o=this.ctx.createBufferSource();o.buffer=this._noise;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(n,t),a.Q.value=i;const l=this.ctx.createGain();l.gain.setValueAtTime(r,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(a),a.connect(l),l.connect(this.sfx),o.start(t),o.stop(t+e+.02)}_startEngine(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator(),i=t.createBiquadFilter(),r=t.createGain();e.type="sawtooth",n.type="triangle",e.frequency.value=48,n.frequency.value=72,i.type="lowpass",i.frequency.value=220,r.gain.value=.1,e.connect(i),n.connect(i),i.connect(r),r.connect(this.sfx),e.start(),n.start(),this.engine={osc:e,osc2:n,filt:i,g:r}}_startPad(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator();e.type="sawtooth",n.type="sawtooth",e.frequency.value=55,n.frequency.value=82.5,n.detune.value=7;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=280,i.Q.value=.7;const r=t.createGain();r.gain.value=.05,e.connect(i),n.connect(i),i.connect(r),r.connect(this.music),e.start(),n.start(),this._padFilt=i,this._padGain=r}_startStems(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator();e.type="sine",n.type="sine",e.frequency.value=110,n.frequency.value=164.81,n.detune.value=6;const i=t.createGain();i.gain.value=.008,e.connect(i),n.connect(i),i.connect(this.music),e.start(),n.start(),this._choirGain=i,this._choirOsc=[e,n];const r=t.createGain();r.gain.value=.01,r.connect(this.music),this._arpGain=r}_mixStems(t){const e=this._chapter,n=e==="finale"?.055:e==="empress"?.048:e==="queen"?.042:e==="coil"?.036:e==="warden"?.03:.01,i=e==="finale"?.038:e==="empress"?.034:e==="coil"?.033:e==="warden"?.032:e==="queen"?.024:.008;if(this._choirGain&&this._choirGain.gain.setTargetAtTime(n+this.intensity*.02,t,.35),this._arpGain&&this._arpGain.gain.setTargetAtTime(i+this.intensity*.015,t,.35),this._choirOsc){const r=e==="warden"||e==="coil"?98:e==="finale"?82.5:e==="empress"?138:e==="queen"?130.81:110;this._choirOsc[0].frequency.setTargetAtTime(r,t,.4),this._choirOsc[1].frequency.setTargetAtTime(r*1.5,t,.4)}}_scheduleBeat(t,e){const n=this.intensity,i=[110,130.81,146.83,164.81,196,220,246.94,261.63];if(e%8===0&&n>.12){const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(150,t),r.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.16+n*.1,t+.008),o.gain.exponentialRampToValueAtTime(1e-4,t+.18),r.connect(o),o.connect(this.music),r.start(t),r.stop(t+.2)}if(e%2===0&&n>.38&&this._noiseBurst(t,.05,6e3,.6,.03+n*.025),n>.22){const r=i[(e*3+Math.floor(n*4))%i.length],o=n>.62&&e%4===0?2:1;this._osc("square",r*o,t,.09,.03+n*.025,this.music)}if(n>.7&&e%16===12&&this._osc("triangle",55,t,.28,.05,this.music),this._arpGain&&(this._chapter==="queen"||this._chapter==="warden"||this._chapter==="finale"||this._chapter==="coil"||this._chapter==="empress")&&e%2===0){const r=i[(e+4)%i.length]*(this._chapter==="finale"?2:1);this._osc("square",r*2,t,.06,.018+n*.012,this._arpGain)}}sting(t="chapter"){if(!this.enabled)return;const e=this.ctx.currentTime;if(t==="boss"){this._osc("sawtooth",55,e,.42,.12),this._osc("triangle",82.5,e+.04,.5,.08),this._osc("sine",110,e+.12,.55,.07),this._noiseBurst(e,.28,180,.8,.1),this._duck(.45,.4);return}if(t==="fall"){this._osc("sine",196,e,.28,.1,null,82),this._osc("triangle",147,e+.06,.4,.08,null,55),this._osc("sawtooth",73,e+.12,.55,.09,null,36),this._noiseBurst(e+.08,.32,140,.9,.1),this._duck(.62,.55);return}if(t==="death"){this._osc("sine",220,e,.35,.1),this._osc("triangle",164.81,e+.08,.4,.08),this._osc("sine",110,e+.16,.55,.09),this._osc("sawtooth",55,e+.2,.45,.07),this._duck(.55,.5);return}if(t==="continue"){this._osc("sine",196,e,.22,.08),this._osc("triangle",246.94,e+.08,.28,.07),this._osc("sine",329.63,e+.16,.4,.06);return}if(t==="life"){this._osc("sine",523.25,e,.12,.07),this._osc("triangle",659.25,e+.05,.16,.05);return}this._osc("triangle",196,e,.16,.07),this._osc("sine",293.66,e+.06,.22,.06),this._osc("triangle",392,e+.12,.28,.05)}hold(t="breath"){this.enabled&&(this.setIntensity(Math.min(this.intensity,t==="hold"?.14:.2)),this._duck(t==="hold"?.7:.32,t==="hold"?1.15:.28))}_duck(t=.35,e=.22){if(!this.duck)return;const n=this.ctx.currentTime;this.duck.gain.cancelScheduledValues(n),this.duck.gain.setValueAtTime(this.duck.gain.value,n),this.duck.gain.linearRampToValueAtTime(Math.max(.12,1-t),n+.02),this.duck.gain.linearRampToValueAtTime(1,n+e)}setBoost(t){if(this.boost=t,!this.engine)return;const e=this.ctx.currentTime;this.engine.osc.frequency.setTargetAtTime(48+t*36,e,.08),this.engine.filt.frequency.setTargetAtTime(220+t*520,e,.08),this.engine.g.gain.setTargetAtTime(.1+t*.08,e,.08),t>.5&&!this._whooshOn&&(this._whooshOn=!0,this._noiseBurst(e,.28,420,.8,.08)),t<.2&&(this._whooshOn=!1)}rumble(t=80,e=.4){try{const n=navigator.getGamepads?.()||[];for(const i of n){const r=i?.vibrationActuator;r?.playEffect&&r.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e*.6})}}catch{}}guns(t="primary",e={}){const n=t==="titan"?"titan":t==="missile"?"seeker":t==="mine"?"mine":t==="nova"?"nova":(e.needle||0)>0?"needle":"spark";this.shotFor(n)}shotFor(t="spark",e={}){if(!this.enabled)return;const n=this.ctx.currentTime,i=e.gain==null?1:Math.max(.12,e.gain);if(t==="titan"){this._noiseBurst(n,.035,4200,2.2,.08*i),this._osc("sine",46,n,.48,.2*i,null,28),this._osc("sawtooth",78,n,.3,.11*i,null,38),this._osc("square",110,n,.08,.05*i),this._duck(.4,.3),this.rumble(110,.62);return}if(t==="seeker"){this._osc("sawtooth",128,n,.2,.07*i),this._osc("triangle",210,n+.02,.16,.045*i),this._noiseBurst(n,.14,720,.9,.055*i);return}if(t==="mine"){this._osc("sine",90,n,.18,.07*i),this._osc("triangle",160,n+.03,.22,.05*i),this._noiseBurst(n,.1,280,1.4,.04*i);return}if(t==="nova"){this._osc("sine",220,n,.2,.07*i),this._osc("triangle",330,n,.24,.06*i),this._osc("sine",495,n+.04,.28,.05*i),this._noiseBurst(n,.18,1400,.6,.05*i),i>.7&&this._duck(.18,.16);return}if(t==="needle"){this._osc("square",1680,n,.14,.05*i,null,1240),this._osc("sine",2520,n,.12,.028*i,null,1880),this._osc("sawtooth",820,n,.09,.016*i,null,620);return}if(t==="wing"){this._osc("triangle",640,n,.06,.045),this._osc("square",960,n,.04,.03);return}if(t==="helix"){this._osc("square",520,n,.07,.035),this._osc("square",533,n,.07,.03);return}if(t==="shear"){this._osc("sawtooth",210,n,.09,.06),this._noiseBurst(n,.08,1800,.7,.045);return}if(t==="spire"){this._osc("sine",1880,n,.08,.05),this._osc("triangle",940,n,.1,.035);return}if(t==="drone"){this._osc("triangle",420,n,.05,.03),this._osc("sine",840,n+.02,.06,.025);return}if(t==="prism"){this._osc("sine",700,n,.06,.035),this._osc("sine",1050,n,.06,.03);return}if(t==="shard"){this._osc("triangle",1100,n,.04,.04),this._osc("sine",1760,n,.035,.025);return}this._osc("square",480,n,.045,.038*i),this._noiseBurst(n,.05,2400,.7,.028*i)}mote(t=!1){if(!this.enabled)return;const e=this.ctx.currentTime;this._osc("sine",920,e,.09,.06),this._osc("sine",t?1460:1240,e+.04,.12,.05)}powerup(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",520,t,.16,.09),this._osc("triangle",780,t+.05,.18,.07),this._osc("sine",1170,t+.1,.22,.06)}collect(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",740,t,.1,.08),this._osc("sine",1180,t+.05,.14,.06)}coin(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("triangle",620,t,.08,.05),this._osc("sine",880,t+.03,.1,.06),this._osc("triangle",1320,t+.07,.12,.045)}buy(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",196,t,.14,.07),this._osc("triangle",392,t+.05,.16,.06),this._osc("sine",784,t+.1,.2,.05),this._osc("triangle",1175,t+.16,.18,.04)}gate(){if(!this.enabled)return;const t=this.ctx,e=t.currentTime,n=2.05,i=t.createOscillator(),r=t.createOscillator(),o=t.createOscillator();i.type="sine",r.type="triangle",o.type="sine",i.frequency.setValueAtTime(196,e),i.frequency.exponentialRampToValueAtTime(110,e+n),r.frequency.setValueAtTime(294,e),r.frequency.exponentialRampToValueAtTime(165,e+n),o.frequency.setValueAtTime(98,e),o.frequency.exponentialRampToValueAtTime(55,e+n);const a=t.createBiquadFilter();a.type="bandpass",a.Q.setValueAtTime(6.5,e),a.frequency.setValueAtTime(380,e),a.frequency.exponentialRampToValueAtTime(1650,e+.22),a.frequency.exponentialRampToValueAtTime(340,e+.55),a.frequency.exponentialRampToValueAtTime(1200,e+.92),a.frequency.exponentialRampToValueAtTime(280,e+1.28),a.frequency.exponentialRampToValueAtTime(820,e+1.64),a.frequency.exponentialRampToValueAtTime(200,e+n);const l=t.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.13,e+.05),l.gain.exponentialRampToValueAtTime(1e-4,e+n),i.connect(a),r.connect(a),a.connect(l),o.connect(l),l.connect(this.sfx),i.start(e),r.start(e),o.start(e),i.stop(e+n+.02),r.stop(e+n+.02),o.stop(e+n+.02),this._duck(.4,.5)}hit(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",70,t,.28,.2),this._osc("sawtooth",90,t,.18,.1),this._noiseBurst(t,.16,220,.9,.12),this._duck(.45,.2),this.rumble(120,.7)}explosion(t=!1){if(!this.enabled)return;const e=this.ctx.currentTime;this._osc("sine",t?48:64,e,t?.5:.28,t?.2:.12),this._osc("sawtooth",t?55:80,e,.22,.08),this._noiseBurst(e,t?.4:.22,t?160:280,.8,t?.14:.08),this._duck(t?.7:.32,t?.38:.16),t&&this.rumble(180,.85)}bomb(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",40,t,.55,.22),this._osc("triangle",90,t,.4,.1),this._noiseBurst(t,.45,140,.7,.16),this._duck(.8,.45),this.rumble(220,1)}boom(){this.explosion(!0)}}class H_{constructor(t){this.renderer=t,this.scene=new xa,this.scene.background=new q("#07040f"),this.scene.fog=new va("#07040f",36,90),this.camera=new We(34,1,.12,140),this.time=0,this._portrait=!1,this._stageShift=0,this._stage=null,this._fitDirty=!0,this._hullRadius=3.2,this._hullTarget=new P(0,.1,0),this._fitDir=new P,this._fitBox=new di,this._fitTmp=new di,this._fitSize=new P,this._pin=new P;const e=new gr(t);this.scene.environment=e.fromScene(new Yc,.03).texture,e.dispose(),this.scene.environmentIntensity=.48,this._buildBay(),this.craft=Zc(),this.craft.group.scale.setScalar(1.55),this.craft.group.position.set(0,.15,0),this.scene.add(this.craft.group),this.key=new Bc(16769690,3.1),this.key.position.set(4.5,6.5,3.2),this.fill=new Vi(6087167,14,22,2),this.fill.position.set(-4.2,1.6,2.4),this.rim=new Vi(16726996,13,20,2),this.rim.position.set(1.4,2.2,-5.2),this.floorLight=new B0(10217471,16,28,.7,.45,1),this.floorLight.position.set(0,8.5,2),this.floorLight.target.position.set(0,0,0),this.scene.add(this.key,this.fill,this.rim,this.floorLight,this.floorLight.target),this.scene.add(new zc(1709104,.62)),this.composer=new Wc(t),this.composer.addPass(new Xc(this.scene,this.camera));const n=Math.max(2,window.innerWidth||2),i=Math.max(2,window.innerHeight||2);this.bloom=new fi(new ct(n,i),.3,.14,.42),this.composer.addPass(this.bloom),this.composer.addPass(new qc),this.resize(window.innerWidth,window.innerHeight),this.setLoadout({spark:1},null)}_buildBay(){const t=new In({color:788504,metalness:.88,roughness:.32,emissive:1181724,emissiveIntensity:.4}),e=new R(new ws(9.5,48),t);e.rotation.x=-Math.PI/2,e.position.y=-1.35,this.scene.add(e);const n=new R(new Wt(4.4,.045,8,48),new $t({color:6087167,transparent:!0,opacity:.62}));n.rotation.x=Math.PI/2,n.position.y=-1.32,this.scene.add(n),this._ring=n;const i=n.clone();i.scale.setScalar(1.35),i.material=new $t({color:16765286,transparent:!0,opacity:.38}),this.scene.add(i),this._ring2=i;const r=new R(new Ht(11.5,11.5,10,32,1,!0),new In({color:591378,metalness:.7,roughness:.55,side:Ue,emissive:1706536,emissiveIntensity:.42}));r.position.y=2.2,this.scene.add(r);for(let l=0;l<8;l++){const c=l/8*Math.PI*2,h=new R(new ot(.08,7.2,.08),new $t({color:l%2?6087167:16737512,transparent:!0,opacity:.55}));h.position.set(Math.cos(c)*10.6,2.1,Math.sin(c)*10.6),this.scene.add(h)}const o=new R(new bs(18,.55),new $t({color:16769690,transparent:!0,opacity:.42}));o.position.set(0,6.4,-4),o.rotation.x=.2,this.scene.add(o);const a=new R(new Ht(1.35,1.7,.28,24),new In({color:1445922,metalness:.9,roughness:.22,emissive:6087167,emissiveIntensity:.55}));a.position.y=-1.22,this.scene.add(a)}setLoadout(t,e=null){Ea(this.craft,t,e),this._fitDirty=!0}projectKit(t){const e=this.craft?.kits?.[t],n=e?.glows?.[0]||e?.auras?.[0]||e?.group,i=this._stage;return!n||!i||(n.updateWorldMatrix(!0,!0),n.getWorldPosition(this._pin),this._pin.project(this.camera),!Number.isFinite(this._pin.x)||!Number.isFinite(this._pin.y))?null:{x:(this._pin.x*.5+.5)*i.width,y:(-this._pin.y*.5+.5)*i.height}}resize(t,e,n=null,i=null){this._w=t,this._h=e,this._stage=n&&n.width>8&&n.height>8?n:null,this._portrait=!!(i&&n&&i.top>n.bottom-8);const r=this._stage?this._stage.width:t,o=this._stage?this._stage.height:e;this.camera.aspect=r/Math.max(1,o),this.camera.fov=this._portrait?30:34,this.camera.clearViewOffset(),this.camera.updateProjectionMatrix(),this.composer.setSize(Math.max(2,r),Math.max(2,o)),this.bloom.setSize(Math.max(2,r),Math.max(2,o));const a=this._portrait?1.78:1.72;Math.abs(this.craft.group.scale.x-a)>.001&&(this.craft.group.scale.setScalar(a),this._fitDirty=!0),this._fitCamera()}_stageViewport(){const t=this._stage;if(!t)return null;const e=Math.round(t.left),n=Math.round(this._h-t.top-t.height),i=Math.max(1,Math.round(t.width)),r=Math.max(1,Math.round(t.height));return{x:e,y:n,w:i,h:r}}update(t){this.time+=t;const e=this.time;if(this.craft.group.rotation.y+=t*.32,this.craft.rig.rotation.z=Math.sin(e*.7)*.045,this.craft.rig.rotation.x=Math.sin(e*.45)*.03,this.craft.group.position.y=.15+Math.sin(e*.9)*.08,this._ring&&(this._ring.rotation.z=e*.12),this._ring2&&(this._ring2.rotation.z=-e*.08),this.fill.intensity=14+Math.sin(e*1.4)*2.2,this.rim.intensity=13+Math.cos(e*1.1)*2,this.craft.exhausts)for(const n of this.craft.exhausts)n.scale.setScalar(.85+Math.sin(e*8+n.position.x)*.18);Kc(this.craft,t),this._fitCamera()}_measureHull(){const t=this.craft.group;t.updateWorldMatrix(!0,!0);const e=this._fitBox.makeEmpty(),n=this._fitTmp;if(t.traverse(r=>{if(!r.isMesh||!r.geometry)return;let o=r;for(;o;){if(o.visible===!1)return;o=o.parent}n.setFromObject(r),n.isEmpty()||e.union(n)}),e.isEmpty()){this._hullRadius=3.2,this._hullTarget.set(0,.1,0),this._fitDirty=!1;return}e.getSize(this._fitSize),e.getCenter(this._hullTarget);const i=.5*Math.hypot(this._fitSize.x,this._fitSize.z);this._hullRadius=Math.max(2.2,Math.hypot(i,this._fitSize.y*.5)),this._fitDirty=!1}_fitCamera(){this._fitDirty&&this._measureHull();const t=this._stage?this._stage.height:this._h,e=this._portrait?58:28,n=Math.max(.6,1-e/Math.max(1,t)),i=ru.degToRad(this.camera.fov*.5),r=Math.tan(i)*n,o=Math.tan(i)*this.camera.aspect,a=this._hullRadius*1.14/Math.min(r,o);this._fitDir.set(this._portrait?.46:.5,this._portrait?.3:.26,1).normalize(),this.camera.position.copy(this._hullTarget).addScaledVector(this._fitDir,a),this.camera.lookAt(this._hullTarget),this.camera.updateProjectionMatrix()}render(){const t=this.renderer,e=this._stageViewport();t.setClearColor(459791,1),t.setViewport(0,0,this._w,this._h),t.setScissorTest(!1),t.clear(),e&&(t.setViewport(e.x,e.y,e.w,e.h),t.setScissor(e.x,e.y,e.w,e.h),t.setScissorTest(!0)),this.composer.render(),t.setScissorTest(!1),t.setViewport(0,0,this._w,this._h)}}class V_{constructor(t){this.canvas=t,this.state="title",this.clock=new Hc,this.input={keys:new Set,mouse:new ct(0,0),firing:!1},this._touch={id:null,x:0,y:0,held:!1,steerX:0,steerY:0},this._mouseFromTouch=0,this.audio=new z_,this.view=localStorage.getItem("aether-view")||"scroll",["chase","cockpit","scroll"].includes(this.view)||(this.view="scroll"),this._hasRun=!1,this._levelBossSpawned=!1,this._railHold=0,this._bossHold=0,this._bossSlow=0,this._pendingClear=!1,this._bossPhaseSeen=1,this.gateFx=0,this._viewSnap=1,this._camLook=new P,this._camUp=new P(0,1,0),this._chaseX=0,this._chaseV=0,this._chasePull=0,this._proj=new P,this._camFwd=new P,this._camRight=new P,this.stage=new ql,this.progress=po(),this.hangar=sr(),this.runBonus=rr(),this.campaignIndex=this.progress.nextC||0,this.levelIndex=this.progress.nextL||0,this._runLive=!1,this._hinted=new Set,this._teachQueue=[],this._resumeTo="play",this._mapCursor={c:this.campaignIndex,l:this.levelIndex},this.hitStop=0,this.kick=new P,this.kickAmt=0,this.bombs=3,this.bombMax=5,this.bombCd=0,this._padPrev={fire:!1,bomb:!1,start:!1,y:0},this._setupRenderer(),this._setupScene(),this._setupPost(),this._setupWorld(),this.shipyard=new H_(this.renderer),this._hangarCursor=0,this._hangarFrom="map",this._bindInput(),this._bindUI(),this.reset(!1),this._onResize(),window.addEventListener("resize",()=>this._onResize()),this.loop=this.loop.bind(this)}_setupRenderer(){this.renderer=new v0({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=je,this.renderer.toneMapping=oa,this.renderer.toneMappingExposure=.92,this.renderer.autoClear=!0}_setupScene(){this.scene=new xa,this.scene.background=new q("#05010d"),this.camera=new We(62,window.innerWidth/window.innerHeight,.08,1400);const t=new gr(this.renderer);this.scene.environment=t.fromScene(new Yc,.04).texture,t.dispose()}_setupPost(){const t=new ct(window.innerWidth,window.innerHeight);this.composer=new Wc(this.renderer),this.composer.addPass(new Xc(this.scene,this.camera)),this.bloom=new fi(t,.48,.5,.42),this.composer.addPass(this.bloom),this.fx=new Gc(dg),this.fx.uniforms.uSunPos.value=new ct(.72,.68),this.fx.uniforms.uFlare.value=1,this.fx.uniforms.uCockpit.value=0,this.fx.uniforms.uGate.value=0,this.fx.uniforms.uKick.value=0,this.fx.uniforms.uResolution.value=t.clone(),this.composer.addPass(this.fx),this.composer.addPass(new qc)}_setupWorld(){this.path=new fg,this.world=new mg(this.scene),this.world.attachRibbon(this.path.rebuildRibbon()),this.entities=new B_(this.scene);const t=Zc();this.shipCraft=t,this.ship=t.group,this.shipRig=t.rig,this.exhausts=t.exhausts,this.shipLights=t.lights,this.shipCore=t.core,this.muzzle=t.muzzle,this.muzzleSpike=t.muzzleSpike,this.muzzleFlash=0,this.scene.add(this.ship),this.trail=new kg(this.scene),this.traces=[];for(let e=0;e<4;e++){const n=new R(new mt(.42,10,8),new $t({color:16737512})),i=new R(new mt(.85,10,8),new $t({color:16737512,transparent:!0,opacity:.32,blending:Me,depthWrite:!1}));n.add(i),n.visible=!1,this.scene.add(n),this.traces.push(n)}}_bindInput(){this.canvas.tabIndex=0;const t=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Numpad8","Numpad4","Numpad6","Numpad2","Space"]),e=r=>{if(r.code==="Escape"){r.preventDefault(),r.repeat||this._onEscape();return}if(t.has(r.code)&&r.preventDefault(),this._setKey(r,!0),this.state==="playing"&&!r.repeat&&this._releaseUiFocus(),this.state==="hangar"){this._onHangarKey(r);return}r.code==="KeyP"&&this.state==="playing"&&this.pause(),(r.code==="KeyB"||r.code==="KeyC")&&this.state==="playing"&&!r.repeat&&this._tryBomb(),(r.code==="Digit1"||r.code==="Numpad1")&&this.setView("chase"),(r.code==="Digit2"||r.code==="Numpad2")&&this.setView("cockpit"),(r.code==="Digit3"||r.code==="Numpad3")&&this.setView("scroll"),r.code==="KeyV"&&this.cycleView()},n=r=>{t.has(r.code)&&r.preventDefault(),this._setKey(r,!1)};window.addEventListener("keydown",e,!0),window.addEventListener("keyup",n,!0),window.addEventListener("blur",()=>this._clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this._clearInput()});const i={passive:!1,capture:!0};document.addEventListener("pointerdown",r=>this._onPointerDown(r),i),document.addEventListener("pointermove",r=>this._onPointerMove(r),i),document.addEventListener("pointerup",r=>this._onPointerUp(r),i),document.addEventListener("pointercancel",r=>this._onPointerUp(r),i),window.PointerEvent||(document.addEventListener("touchstart",r=>this._onTouchStart(r),i),document.addEventListener("touchmove",r=>this._onTouchMove(r),i),document.addEventListener("touchend",r=>this._onTouchEnd(r),i),document.addEventListener("touchcancel",r=>this._onTouchEnd(r),i))}_isBlockingUi(t){if(!(t instanceof Element))return!1;const e=t.closest(".screen");return e?.classList.contains("hidden")?!1:e&&!e.classList.contains("hidden")?!0:!!t.closest("button, a, input, textarea, label")}_onPointerDown(t){if(this.state==="playing"&&t.isPrimary!==!1&&!(t.pointerType==="mouse"&&t.button!==0)&&!this._isBlockingUi(t.target)){t.preventDefault(),this._touch.held=!0,this._touch.id=t.pointerId,this._touch.x=t.clientX,this._touch.y=t.clientY,this._touch.steerX=0,this._touch.steerY=0,this.input.firing=!0,this.slide.set(0,0),this.input.mouse.x=t.clientX/window.innerWidth*2-1,this.input.mouse.y=-(t.clientY/window.innerHeight)*2-1;try{this.canvas.setPointerCapture(t.pointerId)}catch{}this.audio.resume?.()}}_onPointerMove(t){if(!this._touch.held||t.pointerId!==this._touch.id)return;t.preventDefault();const e=t.clientX-this._touch.x,n=t.clientY-this._touch.y;this._touch.x=t.clientX,this._touch.y=t.clientY,this._applyTouchDrag(e,n),this.input.mouse.x=t.clientX/window.innerWidth*2-1,this.input.mouse.y=-(t.clientY/window.innerHeight)*2-1}_onPointerUp(t){!this._touch.held||t.pointerId!==this._touch.id||this._endTouch()}_onTouchStart(t){const e=t.changedTouches?.[0];e&&this._onPointerDown({isPrimary:!0,pointerType:"touch",button:0,pointerId:e.identifier,clientX:e.clientX,clientY:e.clientY,target:t.target,preventDefault:()=>t.preventDefault()})}_onTouchMove(t){const e=t.touches?.[0]||t.changedTouches?.[0];e&&this._onPointerMove({pointerId:this._touch.id,clientX:e.clientX,clientY:e.clientY,preventDefault:()=>t.preventDefault()})}_onTouchEnd(t){this._onPointerUp({pointerId:this._touch.id}),t.preventDefault?.()}_applyTouchDrag(t,e){const n=this._laneLimit(),i=this._depthLimit(),r=Math.max(1,n*2),o=Math.max(1,i.max-i.min),a=Math.max(1,window.innerWidth),l=Math.max(1,window.innerHeight);this.offset.x=He(this.offset.x+t/a*r,-n,n),this.holdY=He(this.holdY+-e/l*o,i.min,i.max),this._touch.steerX=He(t/10,-1,1),this._touch.steerY=He(-e/10,-1,1)}_endTouch(){this._touch.held=!1,this._touch.id=null,this._touch.steerX=0,this._touch.steerY=0,this.input.firing=!1}_bindUI(){this.ui={hud:document.getElementById("hud"),score:document.getElementById("score"),combo:document.getElementById("combo"),depth:document.getElementById("depth"),threat:document.getElementById("threat"),health:document.getElementById("health-fill"),boost:document.getElementById("boost-fill"),riftFill:document.getElementById("rift-fill"),riftName:document.getElementById("rift-name"),riftWrap:document.querySelector(".rift-wrap"),toast:document.getElementById("toast"),teach:document.getElementById("teach"),title:document.getElementById("title-screen"),pause:document.getElementById("pause-screen"),dead:document.getElementById("dead-screen"),stats:document.getElementById("final-stats"),resultKicker:document.getElementById("result-kicker"),resultTitle:document.getElementById("result-title"),resultRank:document.getElementById("result-rank"),resultBoard:document.getElementById("result-board"),titleScores:document.getElementById("title-scores"),bombs:document.getElementById("bomb-pips"),lives:document.getElementById("life-pips"),continue:document.getElementById("continue-screen"),continueLeft:document.getElementById("continue-left"),map:document.getElementById("map-screen"),mapGrid:document.getElementById("campaign-map"),mapKicker:document.getElementById("map-kicker"),mapTitle:document.getElementById("map-title"),mapTag:document.getElementById("map-tag"),deployBtn:document.getElementById("deploy-btn"),mapMenuBtn:document.getElementById("map-menu-btn"),hangarMapBtn:document.getElementById("hangar-map-btn"),hangar:document.getElementById("hangar-screen"),hangarList:document.getElementById("hangar-list"),hangarGold:document.getElementById("hangar-gold"),hangarBuy:document.getElementById("hangar-buy"),hangarDone:document.getElementById("hangar-done"),hangarHullBtn:document.getElementById("hangar-hull-btn"),hangarName:document.getElementById("hangar-item-name"),hangarBlurb:document.getElementById("hangar-item-blurb"),hangarCost:document.getElementById("hangar-item-cost"),hangarKicker:document.getElementById("hangar-kicker"),hangarTitle:document.getElementById("hangar-title"),hangarHint:document.getElementById("hangar-hint"),hangarPayout:document.getElementById("hangar-payout"),hangarNext:document.getElementById("hangar-next"),gold:document.getElementById("gold"),bossMeter:document.getElementById("boss-meter"),bossFill:document.getElementById("boss-fill"),bossName:document.getElementById("boss-name"),bossTitle:document.getElementById("boss-title"),startBtn:document.getElementById("start-btn"),resumeTitleBtn:document.getElementById("resume-title-btn"),viewBtns:[...document.querySelectorAll("[data-view]")],pauseBtn:document.getElementById("pause-btn"),bombBtn:document.getElementById("bomb-btn")},this.ui.startBtn.addEventListener("click",()=>this.startPlay()),this.ui.resumeTitleBtn.addEventListener("click",()=>this.resumeFromMenu()),document.getElementById("resume-btn").addEventListener("click",()=>this.resume()),document.getElementById("menu-btn").addEventListener("click",()=>this.goToMenu({resumeable:!0})),document.getElementById("retry-btn").addEventListener("click",()=>this.startPlay()),this.ui.deployBtn?.addEventListener("click",()=>this._deployLevel()),this.ui.mapMenuBtn?.addEventListener("click",()=>this.goToMenu({resumeable:this._runLive})),this.ui.hangarMapBtn?.addEventListener("click",()=>this._openHangar({from:"map"})),this.ui.hangarBuy?.addEventListener("click",()=>this._hangarBuy()),this.ui.hangarDone?.addEventListener("click",()=>this._hangarDone()),this.ui.hangarHullBtn?.addEventListener("click",()=>this._toggleHangarShop()),this.ui.hangarList?.addEventListener("click",e=>{const n=e.target.closest("[data-mod]");n&&(this._hangarCursor=Ae.indexOf(n.dataset.mod),this._hangarCursor<0&&(this._hangarCursor=0),this._renderHangar())}),document.getElementById("continue-yes")?.addEventListener("click",()=>this._acceptContinue()),document.getElementById("continue-no")?.addEventListener("click",()=>this._declineContinue()),this.ui.pauseBtn?.addEventListener("click",()=>{this.state==="playing"?this.pause():this.state==="paused"&&this.resume()}),this.ui.bombBtn?.addEventListener("click",()=>this._tryBomb());const t=[this.ui.startBtn,this.ui.resumeTitleBtn,document.getElementById("resume-btn"),document.getElementById("menu-btn"),document.getElementById("retry-btn"),document.getElementById("continue-yes"),document.getElementById("continue-no"),this.ui.deployBtn,this.ui.mapMenuBtn,this.ui.hangarMapBtn,this.ui.hangarBuy,this.ui.hangarDone,this.ui.hangarHullBtn,this.ui.pauseBtn,this.ui.bombBtn].filter(Boolean);for(const e of t)e.addEventListener("mousedown",n=>n.stopPropagation()),e.addEventListener("pointerdown",n=>n.stopPropagation()),e.addEventListener("click",()=>this._releaseUiFocus());for(const e of this.ui.viewBtns)e.addEventListener("click",()=>{this.setView(e.dataset.view),this._releaseUiFocus()}),e.addEventListener("mousedown",n=>n.stopPropagation()),e.addEventListener("pointerdown",n=>n.stopPropagation());this._syncViewHud(),this._syncTitleActions(),this._renderScoreboard(this.ui.titleScores,sa()),this._syncBombs(),this.ui.mapGrid?.addEventListener("click",e=>{const n=e.target.closest("[data-c]");if(!n)return;const i=Number(n.dataset.c),r=Number(n.dataset.l);this._nodeLocked(i,r)||(this._mapCursor={c:i,l:r},this._renderMap())})}_syncTitleActions(){!this.ui?.resumeTitleBtn||!this.ui?.startBtn||(this.ui.resumeTitleBtn.hidden=!this._hasRun,this.ui.startBtn.textContent=this._hasRun?"NEW RUN":"ENGAGE")}_setKey(t,e){const n=[t.code],i=(t.key||"").toLowerCase();i.length===1&&n.push(i);for(const r of n)e?this.input.keys.add(r):this.input.keys.delete(r)}_releaseUiFocus(){const t=document.activeElement;t&&t!==document.body&&t!==this.canvas&&typeof t.blur=="function"&&t.blur(),this.canvas?.focus({preventScroll:!0})}_clearInput(){this.input.keys.clear(),this.input.firing=!1,this.slide?.set(0,0),this._endTouch?.()}_onEscape(){if(this.state==="hangar"){this._hangarDone();return}if(this.state==="map"){this.goToMenu({resumeable:this._runLive});return}if(this.state==="playing"||this.state==="paused"){this.goToMenu({resumeable:!0});return}if(this.state==="title"&&this._hasRun){this.resumeFromMenu();return}this.state==="dead"&&this.goToMenu({resumeable:!1}),this.state==="continue"&&this._declineContinue()}goToMenu({resumeable:t=!1}={}){this._clearInput(),this._hasRun=t,this._resumeTo=this.state==="map"?"map":"play",this.state="title",this.audio.setPaused(!0),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.title.classList.remove("hidden"),this._syncTitleActions(),this._renderScoreboard(this.ui.titleScores,sa()),t||(this._runLive=!1,this.reset(!0))}resumeFromMenu(){if(this._hasRun){if(this._resumeTo==="map"){this._openMap({keepRun:!0});return}this._clearInput(),this.state="playing",this.ui.title.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.hud.classList.add("visible"),this.audio.setPaused(!1),this.clock.getDelta(),this._releaseUiFocus()}}cycleView(){const t=["chase","cockpit","scroll"],e=t.indexOf(this.view);this.setView(t[(e+1)%t.length])}setView(t){if(!["chase","cockpit","scroll"].includes(t))return;if(this.view===t&&this._viewSnap===0){this._syncViewHud();return}this.view=t,this._viewSnap=1,localStorage.setItem("aether-view",t),this._syncViewHud();const e={chase:"CHASE CAM",cockpit:"COCKPIT",scroll:"SCROLL CAM"};(this.state==="playing"||this.state==="paused")&&this.toast(e[t])}_syncViewHud(){if(this.ui?.viewBtns)for(const t of this.ui.viewBtns)t.classList.toggle("active",t.dataset.view===this.view)}_activeView(){return this.state==="title"?"chase":this.view}_applyCamera(t,e,n,i,r){const o=this._activeView();this.ship.visible=o!=="cockpit";const a=r||n,l=i||e,c=new P,h=new P,u=new P;let d=62;const p=this._viewSnap>.02;if(o==="cockpit")d=78,c.copy(this.ship.position).addScaledVector(l.tangent,1.85).addScaledVector(a.normal,.72),h.copy(this.ship.position).addScaledVector(l.tangent,30),u.copy(a.normal);else if(o==="scroll"){d=38;const f=this.path.sample(this.traveled+22),S=Dn(f.tangent);c.copy(f.pos).addScaledVector(S.normal,168),h.copy(f.pos),u.copy(f.tangent)}else{d=58;const f=this.path.sample(this.traveled+this.holdY+10),S=Dn(f.tangent);this._stepChaseFollow(t,p),c.copy(f.pos).addScaledVector(f.tangent,-56).addScaledVector(S.normal,23).addScaledVector(S.binormal,this._chaseX),h.copy(f.pos).addScaledVector(f.tangent,28).addScaledVector(S.binormal,this._chaseX),u.copy(S.normal)}const g=o==="chase"?this._chasePull:0,_=p?16:o==="scroll"?12:o==="chase"?mn(9.5,22,g):5,m=p?14:o==="scroll"?11:o==="chase"?mn(8.2,20,g):5.5;this.camera.position.lerp(c,1-Math.exp(-t*_)),this.camera.position.addScaledVector(this.kick,this.kickAmt),this._camLook.lerp(h,1-Math.exp(-t*m)),this._camUp.lerp(u,1-Math.exp(-t*m)),this.camera.up.copy(this._camUp),this.camera.lookAt(this._camLook),this.camera.fov=mn(this.camera.fov,d,1-Math.exp(-t*7)),this.camera.updateProjectionMatrix(),o==="chase"&&this._keepShipInFrame(),this._viewSnap=Math.max(0,this._viewSnap-t*2.4)}_chaseViewHalf(){const t=this.camera.fov*Math.PI/180;return Math.max(8,Math.tan(t/2)*this.camera.aspect*66)}_stepChaseFollow(t,e){const n=this.offset.x-this._chaseX,i=this._chaseViewHalf(),r=He(Math.abs(n)/i,0,1.35);if(this._chasePull=He(r*r,0,1),e){this._chaseX=this.offset.x,this._chaseV=0,this._chasePull=1;return}const o=1.45+11*this._chasePull,a=2*o;this._chaseV+=(n*o*o-this._chaseV*a)*t,this._chaseX+=this._chaseV*t;const l=Math.max(4,i*.72),c=He(this._chaseX,this.offset.x-l,this.offset.x+l);c!==this._chaseX&&(this._chaseX=c,this._chaseV=0)}_keepShipInFrame(){this.camera.updateMatrixWorld();const t=this._proj.copy(this.ship.position).project(this.camera),e=.86;if(!Number.isFinite(t.x)||Math.abs(t.x)<=e)return;this.camera.getWorldDirection(this._camFwd);const n=Math.max(8,(this.ship.position.x-this.camera.position.x)*this._camFwd.x+(this.ship.position.y-this.camera.position.y)*this._camFwd.y+(this.ship.position.z-this.camera.position.z)*this._camFwd.z),i=this.camera.fov*Math.PI/180,r=Math.tan(i/2)*this.camera.aspect*n,a=(Math.abs(t.x)-e)*r*Math.sign(t.x);this._camRight.crossVectors(this._camFwd,this.camera.up).normalize(),this.camera.position.addScaledVector(this._camRight,a),this._camLook.addScaledVector(this._camRight,a),this._chaseX+=a,this._chaseV=0,this.camera.lookAt(this._camLook)}reset(t=!0){this._resetRun(),this._resetLevel(t)}_resetRun(){this.health=1,this.lives=3,this.continues=2,this.rank=0,this.step=0,this.charge=0,this.hangar=sr(),this.runBonus=rr(),this._applyLoadout(),this.gunCd={primary:0,missile:0,titan:0,mine:0,nova:0},this.score=0,this.combo=1,this.comboTimer=0,this._lastCombo=1,this.kills=0,this.maxCombo=1,this.maxStep=0,this.nearMisses=0,this.bombsUsed=0,this.bombs=3,this.best=Number(localStorage.getItem("aether-best")||0),this.campaignIndex=this.progress?.nextC||0,this.levelIndex=this.progress?.nextL||0,this._teachQueue=[],clearTimeout(this._teachTimer),this.ui?.teach&&this.ui.teach.classList.remove("show")}_resetLevel(t=!0){if(this.traveled=40,this.speed=28,this.throttle=.55,this.boost=1,this.health=1,this.spawnIn=.65,this.hurt=0,this.invuln=2.2,this.gateFx=0,this.fireCd=0,this._blockWarn=!1,this.offset=new ct(0,0),this.holdY=8,this._chaseX=0,this._chaseV=0,this._chasePull=0,this.steer=new ct(0,0),this.slide=new ct(0,0),this._ribbonAt=-1,this.hitStop=0,this.kick.set(0,0,0),this.kickAmt=0,this.bombCd=0,this._chapterAt=-1,this._levelBossSpawned=!1,this._railHold=0,this._bossHold=0,this._bossSlow=0,this._pendingClear=!1,this._bossPhaseSeen=1,this.muzzleFlash=0,this._midsThisLevel=0,this.hangar=sr(),this.runBonus=rr(),this._applyLoadout(),this.traces)for(const r of this.traces)r.visible=!1;const e=ir(this.campaignIndex,this.levelIndex),n=e?.lv.script,i=e?.lv.length||1400;this.stage=new ql(n,i),this._chapterId=e?.lv.world||"default",this.entities.reset(),t&&(this.world.layoutFromPath(this.path,this.traveled,this._laneLimit()),this.world.attachRibbon(this._localRibbon())),this.world.setChapter(this._chapterId),this.audio.setChapter(this._chapterId),this._syncBombs(),this._syncLives()}_localRibbon(){const t=[];for(let n=-6;n<36;n++)t.push(this.path.sample(Math.max(8,this.traveled+n*18)).pos.clone());const e=new xr(t,!1,"catmullrom",.5);return new Er(e,180,1.28,12,!1)}async startPlay(){await this.audio.resume(),this._runLive=!1,this._hasRun=!1,this.progress=po(),this._mapCursor={c:this.progress.nextC||0,l:this.progress.nextL||0},this._openMap({fromTitle:!0})}pause(){this.state="paused",this.audio.setPaused(!0),this.ui.pause.classList.remove("hidden")}resume(){this.state="playing",this.audio.setPaused(!1),this.ui.pause.classList.add("hidden"),this.clock.getDelta(),this._releaseUiFocus()}die(){if(this.audio.sting("death"),this.entities.explode(this.ship.position.clone(),16726996),this.lives-=1,this._syncLives(),this.lives>0){this._respawn();return}if(this.continues>0){this._showContinue();return}this._endRun(!1)}_respawn(){this.health=1,this.hurt=0,this.invuln=2.2,this.spawnIn=.65,this.offset.x=0,this.holdY=8,this.slide.set(0,0),this.muzzleFlash=0,this.audio.sting("life"),this._syncLives()}_showContinue(){this.state="continue",this.audio.setPaused(!0),this.audio.sting("continue"),this.ui.continueLeft&&(this.ui.continueLeft.textContent=`${this.continues} CREDIT${this.continues===1?"":"S"} REMAIN`),this.ui.continue?.classList.remove("hidden")}_acceptContinue(){this.state!=="continue"||this.continues<=0||(this.continues-=1,this.lives=3,this.ui.continue?.classList.add("hidden"),this.state="playing",this.audio.setPaused(!1),this._respawn(),this.clock.getDelta(),this._releaseUiFocus())}_declineContinue(){this.ui.continue&&this.ui.continue.classList.add("hidden"),this._endRun(!1)}_endRun(t){this.state="dead",this._hasRun=!1,this._runLive=!1,this._syncTitleActions(),this.audio.setPaused(!1),this.audio.explosion(!0),this.best=Math.max(this.best,this.score),localStorage.setItem("aether-best",String(this.best));const e=s_({score:this.score,kills:this.kills,step:this.maxStep||this.step,maxCombo:this.maxCombo,victory:t,nearMisses:this.nearMisses,bombsUsed:this.bombsUsed}),n=r_({score:this.score,rank:e,kills:this.kills,depth:Math.floor(this.traveled/10),victory:t,at:Date.now()});this.ui.hud.classList.remove("visible"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.dead.classList.remove("hidden");const i=ir(this.campaignIndex,this.levelIndex),r=i?.lv.boss==="finale";this.ui.resultKicker&&(this.ui.resultKicker.textContent=t?r?"RIFT CLEARED":"SECTOR CLEAR":"SIGNAL LOST"),this.ui.resultTitle&&(this.ui.resultTitle.textContent=t?r?"SENTINEL FALLS":`${i?.lv.name||"SECTOR"} DONE`:"HULL BREACH"),this.ui.resultRank&&(this.ui.resultRank.textContent=e),this.ui.stats.textContent=`SCORE ${this.score}   BEST ${this.best}   KILLS ${this.kills}   GOLD ${this.hangar?.gold||0}   BOMBS ${this.bombsUsed}`,this._renderScoreboard(this.ui.resultBoard,n,this.score)}toast(t){this.ui.toast.textContent=t,this.ui.toast.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.ui.toast.classList.remove("show"),1200)}_teach(t,e){if(!this._hinted.has(t)&&(this._hinted.add(t),!!this.ui.teach)){if(this.ui.teach.classList.contains("show")||this._teachQueue.length){this._teachQueue.push(e);return}this._showTeach(e)}}_showTeach(t){this.ui.teach&&(this.ui.teach.textContent=t,this.ui.teach.classList.add("show"),clearTimeout(this._teachTimer),this._teachTimer=setTimeout(()=>{this.ui.teach.classList.remove("show");const e=this._teachQueue.shift();e&&(this._teachTimer=setTimeout(()=>this._showTeach(e),200))},2200))}_maybeBoardTeach(){this.state!=="playing"||!this.entities||(this._hinted.has("gate")||this.entities.gates.find(e=>e.alive&&e.locked&&e.pathDist-this.traveled<64&&e.pathDist-this.traveled>22)&&this._teach("gate","SHOOT THE LOCK — OR SLIDE THE GAP"),this._hinted.has("heavy")||this.entities.enemies.find(e=>e.alive&&/heavy|slag|chime|prism|wisp/.test(e.role)&&e.pathDist-this.traveled<88&&e.pathDist-this.traveled>22)&&this._teach("heavy","HOLD FIRE ON THE BRICK"))}_currentLevel(){return ir(this.campaignIndex,this.levelIndex)}_nodeLocked(t,e){const n=`${t}-${e}`;return!(this.progress.cleared.includes(n)||t===(this.progress.nextC||0)&&e===(this.progress.nextL||0)||this._runLive&&t===this._mapCursor.c&&e===this._mapCursor.l)}_openMap({fromTitle:t=!1,keepRun:e=!1}={}){this._clearInput(),this.state="map",this.audio.setPaused(!0),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.map?.classList.remove("hidden"),this.progress=po(),!e&&!this._runLive&&(this._mapCursor={c:this.progress.nextC||0,l:this.progress.nextL||0}),this._renderMap(),this._syncTitleActions(),this._releaseUiFocus(),t&&this.clock.getDelta()}_renderMap(){const t=this.ui.mapGrid;if(!t)return;const e=this._mapCursor,n=ir(e.c,e.l);if(this.ui.mapKicker&&(this.ui.mapKicker.textContent=n?.camp.kicker||"CAMPAIGN MAP"),this.ui.mapTitle&&(this.ui.mapTitle.textContent=n?.lv.name||"THE AETHER RIFT"),this.ui.mapTag&&(this.ui.mapTag.textContent=n?.camp.blurb||""),t.innerHTML=ji.map((i,r)=>{const o=r===e.c,a=i.levels.map((l,c)=>{const h=`${r}-${c}`,u=this.progress.cleared.includes(h),d=r===e.c&&c===e.l,p=this._nodeLocked(r,c),g=c===i.levels.length-1,_=l.boss==="finale"?"finale boss":g?"boss":"",m=l.boss==="finale"?"✦":g?"★":String(c+1);return`<button type="button" class="map-node ${_} ${u?"cleared":""} ${d?"current":""} ${p?"locked":""}" data-c="${r}" data-l="${c}" ${p?"disabled":""} aria-label="${l.id} ${l.name}">${m}</button>`}).join('<div class="map-rail"></div>');return`<div class="map-campaign${o?" current":""}"><div class="map-camp-meta"><span class="kicker">${i.kicker}</span><span class="name">${i.name}</span></div><div class="map-nodes">${a}</div></div>`}).join(""),this.ui.deployBtn){const i=n?.lv;this.ui.deployBtn.textContent=i?`DEPLOY ${i.id}`:"DEPLOY"}}_openHangar({from:t="map",payout:e=null,slot:n=null}={}){if(this._clearInput(),this._hangarFrom=t,this.state="hangar",this.hangar=sr(),this.audio.setPaused(!1),this.audio.setIntensity(.16),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.hangar?.classList.remove("hidden"),this._setHangarShopMin(!1),this.ui.hangarKicker&&(this.ui.hangarKicker.textContent=t==="win"?"CAMPAIGN COMPLETE":t==="clear"?"SECTOR CLEAR":"DRYDOCK"),this.ui.hangarTitle&&(this.ui.hangarTitle.textContent=t==="win"?"THE RIFT HOLDS":"SHIPYARD"),this.ui.hangarPayout&&(this.ui.hangarPayout.textContent=e?`CLEAR ₡${e.clear}   BOSS ₡${e.boss}   MINIS ₡${e.mid}   BANKED ₡${e.total}`:""),this.ui.hangarHint){const i=t==="clear"||t==="win";this.ui.hangarHint.hidden=i,this.ui.hangarHint.textContent=i?"":"Preview a system on the hull. Install it. Powerups in the rift only charge what you bought."}if(this.ui.hangarDone&&(this.ui.hangarDone.textContent=t==="win"?"RESULTS":t==="clear"?"CAMPAIGN MAP":"RETURN"),this._hangarRecommend=t==="clear"||t==="win"?f_(this.hangar.levels,this.hangar.gold,n?.lv.id||""):null,this._hangarRecommend){const i=Ae.indexOf(this._hangarRecommend);i>=0&&(this._hangarCursor=i)}else this._hangarCursor=Math.max(0,Math.min(Ae.length-1,this._hangarCursor||0));this._renderHangar(),this.clock.getDelta(),this._syncShipyardView()}_hangarSelected(){return Ae[this._hangarCursor]||"spark"}_renderHangar(){const t=this._hangarSelected(),e=this.hangar.levels,n=(e[t]|0)>0?null:t;this.shipyard.setLoadout($l(e,rr()),n),this.ui.hangarGold&&(this.ui.hangarGold.textContent=String(this.hangar.gold)),this.ui.hangarList&&(this.ui.hangarList.innerHTML=Ae.map((c,h)=>{const u=e[c]|0,d=ye[c].max,p=Mr(e,c),g=h===this._hangarCursor,_=u<=0,m=u>=d,f=Array.from({length:d},(M,I)=>`<span class="pip${I<u?" on":""}${g&&_&&I===0?" ghost":""}"></span>`).join(""),S=m?"MAX":_?`₡${p}`:`${u}/${d}  ₡${p}`,w=this._hangarRecommend===c;return`<button type="button" class="hangar-row${g?" selected":""}${_?" locked":""}${m?" maxed":""}${w?" recommend":""}" data-mod="${c}" role="option" aria-selected="${g}"><span><strong>${Fi[c].title}</strong><div class="pips">${f}</div></span><span class="meta">${S}</span></button>`}).join(""),this.ui.hangarList.querySelector(".selected")?.scrollIntoView({block:"nearest"}));const i=Fi[t],r=e[t]|0,o=Mr(e,t),a=o>0&&this.hangar.gold<o;if(this.ui.hangarName&&(this.ui.hangarName.textContent=i.title),this.ui.hangarBlurb&&(this.ui.hangarBlurb.textContent=r<=0?`Not fitted. ${i.blurb}`:r>=ye[t].max?`Mark ${r}. The bay is glowing. ${i.blurb}`:`Mark ${r}. ${i.blurb}`),this.ui.hangarCost&&(this.ui.hangarCost.classList.toggle("poor",a),this.ui.hangarCost.textContent=o<=0?"SYSTEM MAXED":a?`₡${o}  —  NOT ENOUGH`:`₡${o}`),this.ui.hangarNext){const l=this._hangarRecommend;l&&Fi[l]?(this.ui.hangarNext.hidden=!1,this.ui.hangarNext.textContent=`NEXT · ${Fi[l].title}`):(this.ui.hangarNext.hidden=!0,this.ui.hangarNext.textContent="")}if(this.ui.hangarBuy){const l=p_(e,t);this.ui.hangarBuy.textContent=o<=0?l:a?`NOT ENOUGH  ₡${o}`:`${l}  ₡${o}`,this.ui.hangarBuy.disabled=o<=0||a,this.ui.hangarBuy.classList.toggle("poor",a)}}_setHangarShopMin(t){const e=this.ui.hangar;e&&(e.classList.toggle("shop-min",!!t),this.ui.hangarHullBtn&&(this.ui.hangarHullBtn.textContent=t?"SHOP":"VIEW HULL",this.ui.hangarHullBtn.setAttribute("aria-pressed",t?"true":"false")))}_toggleHangarShop(){const t=this.ui.hangar;t&&(this._setHangarShopMin(!t.classList.contains("shop-min")),requestAnimationFrame(()=>this._syncShipyardView()))}_hangarMove(t){const e=Ae.length;this._hangarCursor=(this._hangarCursor+t+e)%e,this._renderHangar()}_hangarBuy(){const t=this._hangarSelected(),e=l_(this.hangar,t);if(this.hangar=e.hangar,!e.ok){this.audio.hit?.();return}this.audio.buy(),this._applyLoadout(),this._renderHangar()}_hangarDone(){if(this.ui.hangar?.classList.add("hidden"),this._hangarFrom==="win"){this.win();return}this._openMap({keepRun:this._runLive})}_onHangarKey(t){(t.code==="ArrowUp"||t.code==="KeyW"||t.code==="Numpad8")&&(t.preventDefault(),this._hangarMove(-1)),(t.code==="ArrowDown"||t.code==="KeyS"||t.code==="Numpad2")&&(t.preventDefault(),this._hangarMove(1)),(t.code==="Enter"||t.code==="Space")&&!t.repeat&&(t.preventDefault(),this._hangarBuy())}async _deployLevel(){const t=this._mapCursor.c,e=this._mapCursor.l;if(this._nodeLocked(t,e))return;await this.audio.resume();const n=this._runLive;this.campaignIndex=t,this.levelIndex=e,n||(this._resetRun(),this.campaignIndex=t,this.levelIndex=e),this._resetLevel(!0),this._runLive=!0,this._hasRun=!0,this._resumeTo="play",this.state="playing",this.ui.map?.classList.add("hidden"),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.hud.classList.add("visible"),this._viewSnap=1,this.audio.setPaused(!1),this.clock.getDelta(),this._releaseUiFocus();const i=this._currentLevel();i&&this.toast(`${i.lv.id} — ${i.lv.name}`)}_clearLevel(){if(this.state!=="playing")return;this.stage.cleared=!0;const t=this._currentLevel(),e=this.campaignIndex,n=this.levelIndex;this.progress=Kg(Zg(this.progress,e,n));const i=Qc(e,n);i&&(this.campaignIndex=i.ci,this.levelIndex=i.li,this._mapCursor={c:i.ci,l:i.li}),this.audio.sting("chapter");const r=u_(e,n,{superBoss:t?.lv.chapters?.some(o=>/SUPER/.test(o.toast||"")),finale:t?.lv.boss==="finale",mids:this._midsThisLevel||2});this.hangar=Kl(this.hangar,r.total),this._openHangar({from:i?"clear":"win",payout:r,slot:t})}win(){this._endRun(!0)}start(){requestAnimationFrame(this.loop)}loop(){requestAnimationFrame(this.loop);const t=Math.min(this.clock.getDelta(),.05);if(this._pollPad(),this.audio.tick(),this.state==="paused"||this.state==="dead"||this.state==="continue"||this.state==="map"||this.state==="hangar"||this.state==="title"&&this._hasRun){if(this.state==="hangar"){this._syncShipyardView(),this.shipyard.update(t),this.shipyard.render(),this._pinHangarNext();return}this._render();return}if(this.state==="playing"&&this.hitStop>0){this.hitStop-=t,this._render();return}this.update(t),this._render()}update(t){const e=this.state!=="playing",n=this._padState(),i=this.state==="playing"&&(this.input.keys.has("ShiftLeft")||this.input.keys.has("ShiftRight")||n.boost);let r=0;this.state==="playing"&&(i&&this.boost>.05?(r=1,this.boost=Math.max(0,this.boost-t*.32)):this.boost=Math.min(1,this.boost+t*.1)),this.kickAmt=Math.max(0,this.kickAmt-t*9),this.bombCd=Math.max(0,this.bombCd-t);const o=e?16:26+r*22+Math.min(this.traveled/2800,8);if(this.speed=mn(this.speed,o,1-Math.exp(-t*2.4)),this.state==="playing"&&this._railHold>0&&(this._railHold-=t),this.state==="playing"&&this._bossHold>0&&(this._bossHold-=t),this.state==="playing"&&this._bossSlow>0&&(this._bossSlow-=t,this._bossSlow<=0&&this._pendingClear)){this._pendingClear=!1,this._clearLevel();return}const a=this.state==="playing"&&(this._railHold>0||this._bossHold>0||this._bossSlow>0);this.traveled+=this.speed*t*(a?.32:1),this.path.ensure(this.traveled+400),Math.floor(this.traveled/90)!==this._ribbonAt&&(this._ribbonAt=Math.floor(this.traveled/90),this.world.attachRibbon(this._localRibbon()));const l=this.path.sample(this.traveled),c=Dn(l.tangent);if(this.state==="playing"){const v=this._laneLimit(),x=this._depthLimit();if(this._touch.held){this.slide.set(0,0);const L=Math.exp(-t*12);this._touch.steerX*=L,this._touch.steerY*=L,this.steer.set(this._touch.steerX,this._touch.steerY)}else{let L=this._axisHeld(["KeyA","ArrowLeft","Numpad4","a"],["KeyD","ArrowRight","Numpad6","d"]),B=this._axisHeld(["KeyS","ArrowDown","Numpad2","s"],["KeyW","ArrowUp","Numpad8","w"]);Math.abs(n.x)>Math.abs(L)&&(L=n.x),Math.abs(n.y)>Math.abs(B)&&(B=n.y),this._applySlide(L,B,t),this.offset.x=He(this.offset.x+this.slide.x*t,-v,v),this.holdY=He(this.holdY+this.slide.y*t,x.min,x.max),this.offset.x<=-v&&this.slide.x<0&&(this.slide.x=0),this.offset.x>=v&&this.slide.x>0&&(this.slide.x=0),this.holdY<=x.min&&this.slide.y<0&&(this.slide.y=0),this.holdY>=x.max&&this.slide.y>0&&(this.slide.y=0),this.steer.set(L,B)}this.offset.x=He(this.offset.x,-v,v),this.holdY=He(this.holdY,x.min,x.max),this.offset.y=0}else this.slide.set(0,0),this.offset.x=Math.sin(this.clock.elapsedTime*.35)*this._laneLimit()*.42,this.holdY=8,this.steer.set(0,0);const h=ms(this.path,this.traveled+this.holdY,this.offset.x,.35),u=h.sample,d=h.frame;if(this.ship.position.copy(h.pos),this.ship.up.copy(d.normal),this.ship.lookAt(this.ship.position.clone().add(u.tangent)),Kc(this.shipCraft,t),this.shipRig){const v=1-Math.exp(-t*9);this.shipRig.rotation.z=mn(this.shipRig.rotation.z,-this.steer.x*.35,v),this.shipRig.rotation.x=mn(this.shipRig.rotation.x,this.steer.y*.12,v);const x=this.invuln>0&&Math.sin(this.clock.elapsedTime*28)<0;this.shipRig.visible=!x}if(this.spawnIn>0){this.spawnIn=Math.max(0,this.spawnIn-t);const v=1-this.spawnIn/.65,x=1-(1-v)*(1-v);this.ship.scale.setScalar(3.1*Math.max(.04,x))}else this.ship.scale.setScalar(3.1);this._applyCamera(t,l,c,u,d);const p=r,g=this.state==="playing"&&(this.input.firing||this.input.keys.has("Space")||n.fire);for(const v of this.exhausts){const x=1+p*.8+(g?.22:0)+this.muzzleFlash*.35;v.scale.setScalar(x),v.material.color.set(p>.2?16765286:10217471)}this.muzzleFlash=Math.max(0,this.muzzleFlash-t*8),this.muzzle&&(this.muzzle.material.opacity=this.muzzleFlash*.9,this.muzzle.scale.setScalar((this._muzzleFat||.7)+this.muzzleFlash*1.6)),this.muzzleSpike&&(this.muzzleSpike.material.opacity=this.muzzleFlash*.7,this.muzzleSpike.scale.set(this._muzzleThin||1,1,.6+this.muzzleFlash*(this._muzzleLong||1.8)));for(const v of this.shipLights)v.intensity=3.2+p*3;this.trail.push(this.ship.position.clone().addScaledVector(u.tangent,-1.4),p),this.audio.setBoost(p),this.world.update(t,this.camera,this.traveled),this.world.recycleCrystals(this.path,this.traveled,this._laneLimit());const _=this._stageHeat(),m=(1+this.traveled/900)*_;this.entities.laneLimit=this._laneLimit(),this.entities.coinValue=Jg(this.campaignIndex),this.entities.spawnAhead(this.path,this.traveled),this.state==="playing"&&this._runStage(),this.state==="playing"&&this._maybeBoardTeach(),this.state==="playing"&&this._watchBossPhase(),this.entities.recycleBehind(this.traveled,this.holdY),this.entities.update(t,this.path,this.traveled,this.ship.position,this.offset,m,this.holdY,d_(this.loadout)),this.audio.setIntensity(this.stage.intensity(this.traveled,this.entities.hunterCount(),r>0,!!this.entities.boss?.alive||this.entities.enemies.some(v=>v.alive&&v.elite))),this._updateTraces(d,t);const f=[{pos:this.shipLights[0].getWorldPosition(new P),color:new q("#5ce1ff"),intensity:12+p*8},{pos:this.shipLights[1].getWorldPosition(new P),color:new q("#5ce1ff"),intensity:12+p*8},{pos:this.world.sun.position,color:new q("#ffe29a"),intensity:22}];this.world.setLights(this.entities.nearestLights(this.ship.position,f)),this.hurt=Math.max(0,this.hurt-t*1.8),this.invuln=Math.max(0,this.invuln-t);let S=0;for(const v of this.entities.gates)v.burst>0&&(S=Math.max(S,v.pulse||0));this.gateFx=S,this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1);for(const v of Object.keys(this.gunCd))this.gunCd[v]=Math.max(0,this.gunCd[v]-t);if(this.state==="playing"){if(this.input.firing||this.input.keys.has("Space")||n.fire){const k=$c(this.loadout,this.clock.elapsedTime),$=this.traveled+this.holdY+6.2;let H=!1;for(const tt of["titan","nova","mine","missile","primary"]){const rt=k[tt];if(!rt.shots.length||this.gunCd[tt]>0)continue;let et=!1;for(const Dt of rt.shots)this.entities.fireRail(this.path,$,this.offset.x+Dt.x,1,Dt)&&(et=!0);et&&(this.gunCd[tt]=rt.cd,this._voiceGun(rt.shots,tt,{ownHands:!H,quiet:H}),H=!0)}}const x=this.entities.collectOrbs(this.ship.position,2.2);for(const k of x)this.score+=k.value,this.audio.collect(),this.health=Math.min(1,this.health+.05);const L=this.entities.collectMotes(this.ship.position,2.4),B=L.filter(k=>k.kind!=="coin"),O=L.filter(k=>k.kind==="coin");B.length&&this._gainMotes(B.length),O.length&&this._gainGold(O.reduce((k,$)=>k+($.value||this.entities.coinValue||5),0),O.length);const W=this.entities.collectGates(this.ship.position);for(const k of W)if(k.blocked){if(this.invuln<=0){if(this._damage(.34))return;this.toast("SHIELD LOCK")}}else this._combatScore(500),this.boost=1,this.audio.gate(),this.toast("GATE BREAK");const Y=this.entities.bulletHits();for(const k of Y){if(k.type==="ping"){this.entities.spawnImpact(k.pos,k.color||10156031),this._punch(.018,.35);continue}const $=k.type==="boss"||k.type==="midboss";if(this.entities.explode(k.pos,k.type==="blocker"?16751162:$?16765286:6087167),this.entities.spawnImpact(k.pos,$?16769690:10156031),this.audio.explosion($),this._punch($?.07:.038,$?1.4:.7),k.type==="enemy"||k.type==="midboss"){if(this.kills+=1,this._combatScore(k.type==="midboss"?1400:220),this.boost=Math.min(1,this.boost+.18),this._dropLoot(k),k.type==="midboss"){if(this._midsThisLevel=(this._midsThisLevel||0)+1,this._isLevelBossKill(k)){this._beginBossClear(k.role);return}this.toast(this._bossToast(k.role))}}else if(k.type==="blocker")this._combatScore(160),this._dropLoot(k);else if(k.type==="unlock")this._combatScore(220),this.audio.gate(),this.toast("LOCK SHATTERED"),this._dropLoot(k);else if(k.type==="boss"){this.kills+=1,this._combatScore(3200),this._dropLoot(k),this._beginBossClear("finale");return}}for(const k of this.entities.nearMisses(this.ship.position))this.nearMisses+=1,this._combatScore(90);if(this.invuln<=0){const k=this.world.hitTest(this.ship.position,1.2),$=this.entities.collideEnemies(this.ship.position,1.45),H=this.entities.collideBlockers(this.ship.position,1.4),tt=this.entities.shotsHitPlayer(this.ship.position,1.35);if(H.length){for(const rt of H)rt.alive=!1,rt.mesh.visible=!1,this.entities.explode(rt.mesh.position.clone(),16751162);if(this.audio.explosion(),this._punch(.05,1.1),this._damage(.42))return}else if($.length){let rt=.3;for(const et of $)if(et.elite||et.role==="finale"){if(et.hp=(et.hp||8)-6,this.entities.spawnImpact(et.mesh.position.clone(),16765286),rt=.38,et.hp<=0&&et.mesh&&(et.alive=!1,et.mesh.visible=!1,this.entities.explode(et.mesh.position.clone(),16765286),this.kills+=1,this._dropLoot({drop:et.drop??4,pathDist:et.pathDist,laneX:et.offset?.x??this.offset.x,bombDrop:et.bombDrop??0}),this._isLevelBossKill({type:et.role==="finale"?"boss":"midboss",role:et.role}))){this._beginBossClear(et.role);return}}else et.hp!==void 0&&et.mesh&&(et.alive=!1,et.mesh.visible=!1,this.entities.explode(et.mesh.position.clone(),16720984),this.kills+=1,this._dropLoot({drop:et.drop??1,pathDist:et.pathDist,laneX:et.offset?.x??this.offset.x}));if(this.audio.explosion(),this._punch(.045,.9),this._damage(rt))return}else if(tt){if(this._damage(.16))return}else if(k&&this._damage(.12))return}}this.fx.uniforms.uTime.value=this.clock.elapsedTime,this.fx.uniforms.uBoost.value=p,this.fx.uniforms.uHurt.value=this.hurt,this.fx.uniforms.uGate.value=this.gateFx;const w=this.world.sun.position.clone().project(this.camera);this.fx.uniforms.uSunPos.value.set(w.x*.5+.5,w.y*.5+.5);const I=w.z<1&&w.x>-1.2&&w.x<1.2&&w.y>-1.2&&w.y<1.2?.85:0;this.fx.uniforms.uFlare.value=mn(this.fx.uniforms.uFlare.value,I,1-Math.exp(-t*8)),this.fx.uniforms.uCockpit.value=0,this.fx.uniforms.uKick.value=this.kickAmt;const E=.48+this.gateFx*.28,y=.42,A=.5+this.gateFx*.12;this.bloom.strength=mn(this.bloom.strength,E,1-Math.exp(-t*6)),this.bloom.threshold=mn(this.bloom.threshold,y,1-Math.exp(-t*6)),this.bloom.radius=mn(this.bloom.radius,A,1-Math.exp(-t*6)),this._syncHud()}_dropLoot(t){const e=t?.drop??0,n=t.pathDist??this.traveled+this.holdY+6,i=t.laneX??this.offset.x;e>0&&this.entities.spawnMote(this.path,n,i,e),t?.bombDrop&&this._gainBomb(t.bombDrop);const r=t?.role;let o=0;t?.type==="boss"||r==="finale"?o=5:t?.type==="midboss"||t?.elite?o=3:(r==="heavy"||r==="slag"||r==="chime"||r==="prism"||r==="wisp"||Math.random()<.16)&&(o=1),o&&this.entities.spawnCoins(this.path,n,i,o,{grace:.12})}_applyLoadout(){this.loadout=$l(this.hangar?.levels||{spark:1},this.runBonus),this.step=Ae.reduce((t,e)=>t+(this.runBonus[e]|0),0),this.rank=o_(this.loadout),this.maxStep=Math.max(this.maxStep||0,this.rank),Ea(this.shipCraft,this.loadout)}_gainGold(t,e=1){t<=0||(this.hangar=Kl(this.hangar,t),this.audio.coin(),this._teach("gold","GOLD BUYS BAYS IN DRYDOCK"),e>2&&this.toast(`+₡${t}`))}_gainMotes(t){if(t<=0)return;const e=!this._hinted.has("mote");this._teach("mote","MOTES CHARGE OWNED BAYS"),this.audio.mote(t>1);const n=mo(this.hangar.levels,this.runBonus);if(n.cap<=0||n.used>=n.cap){this._combatScore(36*t);return}this.charge+=t;const i=c_(this.hangar.levels,this.runBonus,t);this.runBonus=i.runBonus,this._applyLoadout(),i.toast&&!e&&(this.audio.powerup(),this.toast(i.toast))}_shedResonance(){const t=mo(this.hangar.levels,this.runBonus).used;if(t<=0&&this.charge<=0)return;const e=Math.min(6,2+Math.floor(t/14));this.runBonus=h_(this.runBonus,e),this.charge=0,this._applyLoadout(),this.entities.spawnMote(this.path,this.traveled+this.holdY+12,this.offset.x,Math.min(4,e),{grace:.45,spread:7.5})}_updateTraces(t,e){const n=this.loadout?.drone||0,i=this.state==="playing"?Math.min(this.traces.length,n>=1?n>=5?4:n>=3?3:2:0):0,r=this.clock.elapsedTime;for(let o=0;o<this.traces.length;o++){const a=this.traces[o];if(a.visible=o<i,o>=i)continue;const l=o%2===0?-1:1,h=4.4+Math.floor(o/2)*1.6+Math.sin(r*3.2+o)*.35,u=.4+Math.cos(r*2.4+o*1.7)*.2;a.position.copy(this.ship.position).addScaledVector(t.binormal,l*h).addScaledVector(t.normal,u);const d=(this.loadout.titan||0)>=1;a.material.color.set(d?16765286:16737512),a.scale.setScalar(.85+n*.06+Math.sin(r*6+o)*.08)}if(this.shipCore){const o=(this.loadout.titan||0)>0?16765286:(this.loadout.seeker||0)>0?16747082:(this.loadout.needle||0)>0?10217471:13172726;this.shipCore.material.color.set(o)}}_combatScore(t){this.score+=Math.floor(t*this.combo),this.combo=Math.min(8,this.combo+.35),this.maxCombo=Math.max(this.maxCombo,this.combo),this.comboTimer=3.2}_score(t){this._combatScore(t)}_damage(t){return this.health-=t,this.hurt=1,this.invuln=.7,this.combo=1,this.audio.hit(),this._punch(.04,1.15),this._shedResonance(),this.health<=0?(this.die(),!0):!1}_syncHud(){if(this._syncBossMeter(),this.state!=="playing")return;this.ui.score.textContent=this.score.toLocaleString(),this.ui.combo.textContent=`×${this.combo.toFixed(1)}`,this.ui.combo.classList.toggle("combo-quiet",this.combo<=1.05),this.combo>(this._lastCombo||1)+.02&&(this.ui.combo.classList.remove("combo-pop"),this.ui.combo.offsetWidth,this.ui.combo.classList.add("combo-pop")),this._lastCombo=this.combo;const t=this._currentLevel()?.lv.id||"1-1";if(this.ui.depth.textContent=`${t} · ${(this.traveled/10).toFixed(0)} km`,this.ui.threat&&(this.ui.threat.textContent=String(this.entities.hunterCount())),this.ui.health.style.transform=`scaleX(${He(this.health,0,1)})`,this.ui.boost.style.transform=`scaleX(${He(this.boost,0,1)})`,this.ui.gold&&(this.ui.gold.textContent=String(this.hangar?.gold||0)),this.ui.riftName&&(this.ui.riftName.textContent=Mg(this.loadout)),this.ui.riftFill){const e=mo(this.hangar.levels,this.runBonus),n=e.ratio;this.ui.riftFill.style.transform=`scaleX(${Math.max(.03,n)})`,this.ui.riftWrap?.classList.toggle("rift-max",e.cap>0&&e.used>=e.cap),this.ui.riftWrap?.classList.toggle("rift-wings",(this.loadout.seeker||0)>0&&(this.loadout.titan||0)===0),this.ui.riftWrap?.classList.toggle("rift-titan",(this.loadout.titan||0)>0)}this._syncBombs(),this._syncLives()}_syncBossMeter(){const t=this.ui?.bossMeter;if(!t)return;const e=this.state==="playing"?this.entities.activeBoss():null;if(!(e&&(e.levelBoss||e.superBoss||e.role==="finale"))){t.classList.remove("show","phase-2","phase-3","phase-sting","arrive");return}t.classList.add("show"),t.classList.toggle("phase-2",e.visPhase===2),t.classList.toggle("phase-3",(e.visPhase||1)>=3),this.ui.bossName&&(this.ui.bossName.textContent=this._bossName(e.role));const i=He(e.hp/Math.max(1,e.maxHp||e.hp),0,1);this.ui.bossFill&&(this.ui.bossFill.style.transform=`scaleX(${Math.max(.02,i)})`)}_render(){this.composer.render()}_axisHeld(t,e){let n=0;for(const i of t)this.input.keys.has(i)&&(n-=1);for(const i of e)this.input.keys.has(i)&&(n+=1);return Math.max(-1,Math.min(1,n))}_applySlide(t,e,n){let l=t,c=e;const h=Math.hypot(l,c);h>1&&(l/=h,c/=h),this.slide.x=this._approachVel(this.slide.x,l*92,820,420,1280,n),this.slide.y=this._approachVel(this.slide.y,c*92,820,420,1280,n)}_approachVel(t,e,n,i,r,o){const a=t>.5&&e<0||t<-.5&&e>0,l=e===0?i:a?r:n;let c=t;return c<e?c=Math.min(e,c+l*o):c>e&&(c=Math.max(e,c-l*o)),e!==0&&Math.abs(c)<Math.abs(e)*.22&&(c=e*.22),c}_playfieldHalf(){const e=38*Math.PI/180;return 168*Math.tan(e/2)}_depthLimit(){const t=this._playfieldHalf(),e=22,n=5;return{min:e-t+n,max:e+t-n}}_laneLimit(){const t=this._playfieldHalf()*this.camera.aspect;return Math.max(22,t-5)}_stageHeat(){return jg(this.campaignIndex||0,this.levelIndex||0)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e),this.bloom.setSize(t,e),this.fx.uniforms.uResolution.value.set(t,e),this.shipyard?.resize(t,e),this._syncShipyardView()}_pinHangarNext(){const t=this.ui.hangarNext,e=this._hangarRecommend;if(!t||t.hidden||!e||!this.shipyard)return;const n=this.shipyard.projectKit(e);n&&(t.style.left=`${Math.round(n.x)}px`,t.style.top=`${Math.round(n.y)}px`)}_syncShipyardView(){if(this.state!=="hangar"||!this.shipyard)return;window.matchMedia("(max-width: 900px)").matches||this._setHangarShopMin(!1);const t=this.ui.hangar?.querySelector(".hangar-stage"),e=this.ui.hangar?.querySelector(".hangar-panel");this.shipyard.resize(window.innerWidth,window.innerHeight,t?.getBoundingClientRect()??null,e?.getBoundingClientRect()??null)}_runStage(){const t=this._currentLevel(),e=t?.lv.chapters||[];for(const n of e)if(this.traveled>=n.at&&this._chapterAt<n.at){this._chapterAt=n.at;const i=t?`${t.lv.id} — ${t.lv.name}`:"",r=n.at<=90&&(n.toast===i||/^WAVE 0?1\b/.test(n.toast||"")),o=/^(LEVEL BOSS|SUPER BOSS|FINALE|BOSS)\b/.test(n.toast||"");!r&&!o&&this.toast(n.toast),this._setChapter(n.world||t?.lv.world,n.sting)}for(;this.stage.peek()&&this.stage.peek().at<=this.traveled;){const n=this.stage.consume();if(n.kind==="squad")this.entities.spawnSquad(this.path,this.traveled,n.form,n.role,n.n,n.ahead,this._stageHeat());else if(n.kind==="gate")this.entities.spawnGateAt(this.path,this.traveled,72,this._stageHeat());else if(n.kind==="orbs")this.entities.spawnOrbsAt(this.path,this.traveled,3),this.entities.spawnCoins(this.path,this.traveled+48,0,2);else if(n.kind==="blockers")this.entities.spawnBlockersAt(this.path,this.traveled,n.n||2,80,this._stageHeat());else if(n.kind==="breath")this.audio.hold("breath");else if(n.kind==="hold")this._railHold=1.35,this.audio.hold("hold");else if(n.kind==="midboss")this.entities.spawnNamed(this.path,this.traveled,n.id,96,this.step,this.loadout,this._stageHeat()),this.stage.finaleAlive=!1;else if(n.kind==="boss"||n.kind==="finale"){const i=n.id||"finale",r=this._bossFlags();n.kind==="finale"||i==="finale"||i==="sentinel"?this.entities.spawnFinale(this.path,this.traveled,96,this.step,this.loadout,this._stageHeat()):this.entities.spawnNamed(this.path,this.traveled,i,96,this.step,this.loadout,this._stageHeat(),r),this.stage.finaleAlive=!0,this._levelBossSpawned=!0,this._announceBoss(i==="sentinel"?"finale":i,r.superBoss||n.kind==="finale")}}this._ensureLevelBoss(),this._maybeClearLevel()}_ensureLevelBoss(){const t=this._currentLevel();if(!t||this.state!=="playing")return;const e=t.lv.boss;if(!e)return;const n=t.lv.script.find(i=>i.kind==="finale"||i.kind==="boss")?.at??t.lv.exitAt;this.traveled<n||this.entities.boss?.alive||this.entities.enemies.some(i=>i.alive&&i.elite&&(i.role===e||e==="finale"&&i.role==="finale"))||this._levelBossSpawned||(this._levelBossSpawned=!0,e==="finale"?this.entities.spawnFinale(this.path,this.traveled,96,this.step,this.loadout,this._stageHeat()):this.entities.spawnNamed(this.path,this.traveled,e,96,this.step,this.loadout,this._stageHeat(),this._bossFlags()),this.stage.finaleAlive=!0,this._announceBoss(e,t.lv.banner==="super"||e==="finale"))}_maybeClearLevel(){if(this._pendingClear||this._bossSlow>0)return;const t=this._currentLevel();t&&(this.stage.peek()||this.traveled<t.lv.exitAt||t.lv.boss&&(this.entities.boss?.alive||this.entities.enemies.some(e=>e.alive&&e.elite&&e.role===t.lv.boss)||!this._levelBossSpawned&&this.traveled<t.lv.exitAt+80)||this._clearLevel())}_setChapter(t,e){t&&(this._chapterId!==t&&(this._chapterId=t,this.world.setChapter(t),this.audio.setChapter(t)),e&&this.audio.sting(e))}_syncLives(){const t=this.ui?.lives;if(t){t.innerHTML="";for(let e=0;e<3;e++){const n=document.createElement("div");n.className="life-pip"+(e<this.lives?" lit":""),t.appendChild(n)}}}_bossName(t){return{queen:"WEAVER QUEEN",coil:"TITAN COIL",warden:"WARDEN",empress:"WEAVER EMPRESS",finale:"SENTINEL",sentinel:"SENTINEL"}[t]||"HUNTER"}_announceBoss(t,e=!1){const n=this._bossName(t);this.ui.bossName&&(this.ui.bossName.textContent=n),this.ui.bossTitle&&(this.ui.bossTitle.textContent=n,this.ui.bossTitle.classList.add("show"),this.ui.bossTitle.classList.remove("fall"),clearTimeout(this._bossTitleTimer),this._bossTitleTimer=setTimeout(()=>this.ui.bossTitle?.classList.remove("show"),e?1400:1100)),this.ui.bossMeter?.classList.add("show","arrive"),this._bossHold=e?1.15:.85,this._bossPhaseSeen=1,this.audio.sting("boss")}_beginBossClear(t){const e=this._currentLevel()?.lv.banner==="super"||t==="finale";this._bossSlow=e?.95:.75,this._pendingClear=!0,clearTimeout(this._bossTitleTimer),this.ui.bossTitle&&(this.ui.bossTitle.textContent=this._bossName(t),this.ui.bossTitle.classList.remove("fall"),this.ui.bossTitle.classList.add("show"),requestAnimationFrame(()=>{requestAnimationFrame(()=>this.ui.bossTitle?.classList.add("fall"))})),this.audio.sting("fall")}_watchBossPhase(){const t=this.entities.activeBoss();if(!t||!(t.levelBoss||t.superBoss||t.role==="finale")){this._bossPhaseSeen=1,this.ui.bossMeter?.classList.remove("phase-sting","arrive");return}t.visPhase!==this._bossPhaseSeen&&(this._bossPhaseSeen=t.visPhase,this.ui.bossMeter?.classList.add("phase-sting"),this.audio.sting("chapter"),clearTimeout(this._phaseStingTimer),this._phaseStingTimer=setTimeout(()=>this.ui.bossMeter?.classList.remove("phase-sting"),420))}_bossFlags(){return{levelBoss:!0,superBoss:this._currentLevel()?.lv?.banner==="super"}}_isLevelBossKill(t){const e=this._currentLevel()?.lv.boss;return e?t.type==="boss"||t.role==="finale"?e==="finale":t.role===e:!1}_bossToast(t){return t==="warden"?"WARDEN DOWN":t==="coil"?"COIL DOWN":t==="empress"?"EMPRESS DOWN":t==="finale"?"SENTINEL DOWN":"QUEEN DOWN"}_voiceGun(t,e,{ownHands:n=!0,quiet:i=!1}={}){const r=[...new Set(t.map(u=>u.kind).filter(Boolean))],o=r.find(u=>u!=="spark")||r[0]||e,a=i?.38:1;if(this.audio.shotFor(o,{gain:a}),r.includes("spark")&&o!=="spark"&&this.audio.shotFor("spark",{gain:i?.2:.35}),!n)return;const l=t.find(u=>u.kind===o)?.kick??.2;this.kickAmt=Math.max(this.kickAmt,l);const c={titan:[.08,.45,1.35],needle:[.04,.06,.9],mine:[.05,-.62,.18],nova:[.72,.22,.28],seeker:[.22,.16,.52],spark:[.05,.08,.26],wing:[.58,.1,.32],shear:[.62,.12,.3]}[o]||[.1,.1,.35];this.kick.set(c[0],c[1],c[2]);const h={titan:[16765286,1.45,1.8,.7,1.1],needle:[10217471,.72,.45,.55,2.4],nova:[16737512,1.15,1.2,1.1,1.6],mine:[6087167,.55,1.1,1.4,.9],seeker:[16747082,.7,.8,1.1,1.4],spark:[13172726,1,.7,1,1.8]}[o]||[10217471,.85,.75,1,1.7];this.muzzleFlash=h[1],this._muzzleFat=h[2],this._muzzleThin=h[3],this._muzzleLong=h[4],this.muzzle?.material?.color&&this.muzzle.material.color.setHex(h[0]),this.muzzleSpike?.material?.color&&this.muzzleSpike.material.color.setHex(h[0])}_punch(t,e){this.hitStop=Math.max(this.hitStop,Math.min(.045,t)),this.kickAmt=Math.max(this.kickAmt,e),this.kick.set((Math.random()-.5)*1.6,(Math.random()-.5)*1.2,0)}_tryBomb(){if(this.state!=="playing"||this.bombCd>0||this.bombs<=0)return;this.bombs-=1,this.bombsUsed+=1,this.bombCd=.85,this.invuln=Math.max(this.invuln,.55),this.audio.bomb(),this._punch(.08,1.6);const t=this.entities.bombSweep(this.traveled,this.holdY,16);for(const e of t.killed){if(this.kills+=1,this._combatScore(e.type==="boss"?3200:e.type==="midboss"?1400:180),this._dropLoot(e),e.type==="boss"){this._beginBossClear("finale");return}if(e.type==="midboss"&&this._isLevelBossKill(e)){this._beginBossClear(e.role);return}}this._syncBombs()}_gainBomb(t=1){const e=Math.min(this.bombMax,this.bombs+t);e!==this.bombs&&(this.bombs=e,this._syncBombs())}_syncBombs(){const t=this.ui?.bombs;if(t){t.innerHTML="";for(let e=0;e<this.bombMax;e++){const n=document.createElement("div");n.className="bomb-pip"+(e<this.bombs?" lit":""),t.appendChild(n)}}}_renderScoreboard(t,e,n){if(t){if(!e||!e.length){t.classList.add("empty"),t.textContent="NO HI-SCORES YET";return}t.classList.remove("empty"),t.innerHTML=e.map((i,r)=>{const o=n!=null&&i.score===n?" me":"",a=i.victory?"CLR":"KIA";return`<div class="row${o}"><span>${r+1}</span><span>${i.rank} · ${a}</span><span>${i.score}</span><span>${i.depth} km</span></div>`}).join("")}}_padState(){const t=typeof navigator<"u"?navigator.getGamepads?.()||[]:[];let e=null;for(const l of t)if(l){e=l;break}if(!e)return{x:0,y:0,fire:!1,bomb:!1,boost:!1,start:!1};const n=l=>Math.abs(l)<.18?0:l,i=n(e.axes[0]||0),r=-n(e.axes[1]||0),o=(e.buttons[15]?.pressed?1:0)-(e.buttons[14]?.pressed?1:0),a=(e.buttons[12]?.pressed?1:0)-(e.buttons[13]?.pressed?1:0);return{x:Math.max(-1,Math.min(1,i+o)),y:Math.max(-1,Math.min(1,r+a)),fire:!!(e.buttons[0]?.pressed||e.buttons[7]?.pressed),bomb:!!e.buttons[1]?.pressed,boost:!!(e.buttons[4]?.pressed||e.buttons[6]?.pressed||e.buttons[5]?.pressed),start:!!(e.buttons[9]?.pressed||e.buttons[8]?.pressed)}}_pollPad(){const t=this._padState(),e=this._padPrev;t.start&&!e.start&&(this.state==="playing"?this.pause():this.state==="paused"?this.resume():this.state==="hangar"?this._hangarDone():this.state==="title"?this._hasRun?this.resumeFromMenu():this.startPlay():this.state==="map"?this._deployLevel():this.state==="continue"?this._acceptContinue():this.state==="dead"&&this.startPlay()),t.bomb&&!e.bomb&&(this.state==="continue"?this._declineContinue():this.state==="hangar"?this._hangarDone():this.state==="map"?this.goToMenu({resumeable:this._runLive}):this._tryBomb()),t.fire&&this.state==="hangar"&&!e.fire&&this._hangarBuy(),this.state==="hangar"&&(t.y>.55&&e.y<=.55&&this._hangarMove(-1),t.y<-.55&&e.y>=-.55&&this._hangarMove(1)),t.fire&&this.state==="title"&&!this._hasRun&&!e.fire&&this.startPlay(),t.fire&&this.state==="map"&&!e.fire&&this._deployLevel(),t.fire&&this.state==="continue"&&!e.fire&&this._acceptContinue(),this._padPrev={fire:t.fire,bomb:t.bomb,start:t.start,y:t.y}}}const G_=document.getElementById("c"),W_=new V_(G_);W_.start();
