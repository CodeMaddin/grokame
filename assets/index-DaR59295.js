(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="170",ph=0,Ha=1,mh=2,oc=1,gh=2,Ti=3,$i=0,Ne=1,ai=2,Ri=0,On=1,Me=2,Va=3,Ga=4,_h=5,ln=100,vh=101,xh=102,Mh=103,yh=104,bh=200,Sh=201,wh=202,Eh=203,Mo=204,yo=205,Th=206,Ah=207,Ch=208,Rh=209,Ph=210,Lh=211,Ih=212,Dh=213,Uh=214,bo=0,So=1,wo=2,Xn=3,Eo=4,To=5,Ao=6,Co=7,ac=0,Nh=1,Fh=2,Yi=0,lc=1,cc=2,hc=3,ca=4,kh=5,uc=6,dc=7,fc=300,qn=301,Yn=302,Ro=303,Po=304,br=306,Lo=1e3,hn=1001,Io=1002,ui=1003,Bh=1004,Rs=1005,_i=1006,Pr=1007,un=1008,Ui=1009,pc=1010,mc=1011,Ms=1012,ha=1013,dn=1014,Ai=1015,Pi=1016,ua=1017,da=1018,$n=1020,gc=35902,_c=1021,vc=1022,li=1023,xc=1024,Mc=1025,zn=1026,Kn=1027,yc=1028,fa=1029,bc=1030,pa=1031,ma=1033,or=33776,ar=33777,lr=33778,cr=33779,Do=35840,Uo=35841,No=35842,Fo=35843,ko=36196,Bo=37492,Oo=37496,zo=37808,Ho=37809,Vo=37810,Go=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,$o=37816,Ko=37817,Zo=37818,jo=37819,Jo=37820,Qo=37821,hr=36492,ta=36494,ea=36495,Sc=36283,ia=36284,na=36285,sa=36286,Oh=3200,zh=3201,wc=0,Hh=1,qi="",je="srgb",ts="srgb-linear",Sr="linear",ae="srgb",vn=7680,Wa=519,Vh=512,Gh=513,Wh=514,Ec=515,Xh=516,qh=517,Yh=518,$h=519,Xa=35044,qa="300 es",Ci=2e3,pr=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ya=1234567;const Hn=Math.PI/180,Zn=180/Math.PI;function is(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function ga(s,t){return(s%t+t)%t}function Kh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Zh(s,t,e){return s!==t?(e-s)/(t-s):0}function _s(s,t,e){return(1-e)*s+e*t}function jh(s,t,e,i){return _s(s,t,1-Math.exp(-e*i))}function Jh(s,t=1){return t-Math.abs(ga(s,t*2)-t)}function Qh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function tu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function eu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function iu(s,t){return s+Math.random()*(t-s)}function nu(s){return s*(.5-Math.random())}function su(s){s!==void 0&&(Ya=s);let t=Ya+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ru(s){return s*Hn}function ou(s){return s*Zn}function au(s){return(s&s-1)===0&&s!==0}function lu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hu(s,t,e,i,n){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(n){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const uu={DEG2RAD:Hn,RAD2DEG:Zn,generateUUID:is,clamp:Fe,euclideanModulo:ga,mapLinear:Kh,inverseLerp:Zh,lerp:_s,damp:jh,pingpong:Jh,smoothstep:Qh,smootherstep:tu,randInt:eu,randFloat:iu,randFloatSpread:nu,seededRandom:su,degToRad:ru,radToDeg:ou,isPowerOfTwo:au,ceilPowerOfTwo:lu,floorPowerOfTwo:cu,setQuaternionFromProperEuler:hu,normalize:Ve,denormalize:Nn};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,n,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],w=n[1],S=n[4],M=n[7],I=n[2],E=n[5],y=n[8];return r[0]=o*_+a*w+l*I,r[3]=o*m+a*S+l*E,r[6]=o*p+a*M+l*y,r[1]=c*_+h*w+u*I,r[4]=c*m+h*S+u*E,r[7]=c*p+h*M+u*y,r[2]=d*_+f*w+g*I,r[5]=d*m+f*S+g*E,r[8]=d*p+f*M+g*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*c-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=d*_,t[4]=(h*e-n*l)*_,t[5]=(n*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lr.makeScale(t,e)),this}rotate(t){return this.premultiply(Lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new kt;function Tc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function du(){const s=mr("canvas");return s.style.display="block",s}const $a={};function ps(s){s in $a||($a[s]=!0,console.warn(s))}function fu(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function pu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?Sr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ka=[.64,.33,.3,.6,.15,.06],Za=[.2126,.7152,.0722],ja=[.3127,.329],Ja=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[ts]:{primaries:Ka,whitePoint:ja,transfer:Sr,toXYZ:Ja,fromXYZ:Qa,luminanceCoefficients:Za,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:Ka,whitePoint:ja,transfer:ae,toXYZ:Ja,fromXYZ:Qa,luminanceCoefficients:Za,outputColorSpaceConfig:{drawingBufferColorSpace:je}}});let xn;class gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xn===void 0&&(xn=mr("canvas")),xn.width=t.width,xn.height=t.height;const i=xn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _u=0;class Ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Ir(n[o].image)):r.push(Ir(n[o]))}else r=Ir(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ir(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vu=0;class Ye extends es{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=hn,n=hn,r=_i,o=un,a=li,l=Ui,c=Ye.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=is(),this.name="",this.source=new Ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=fc;Ye.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,n=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(f+1)/2,I=(p+1)/2,E=(h+d)/4,y=(u+_)/4,A=(g+m)/4;return S>M&&S>I?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=E/i,r=y/i):M>I?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=E/n,r=A/n):I<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(I),i=y/r,n=A/r),this.set(i,n,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xu extends es{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ye(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ac(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends xu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Cc extends Ye{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends Ye{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const I=Math.sqrt(S),E=Math.atan2(I,p*w);m=Math.sin(m*E)/I,a=Math.sin(a*E)/I}const M=a*w;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new P,tl=new ys;class fn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ps.copy(i.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Ls.subVectors(this.max,as),Mn.subVectors(t.a,as),yn.subVectors(t.b,as),bn.subVectors(t.c,as),Oi.subVectors(yn,Mn),zi.subVectors(bn,yn),Ji.subVectors(Mn,bn);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-Ji.z,Ji.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,Ji.z,0,-Ji.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-Ji.y,Ji.x,0];return!Ur(e,Mn,yn,bn,Ls)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,Mn,yn,bn,Ls))?!1:(Is.crossVectors(Oi,zi),e=[Is.x,Is.y,Is.z],Ur(e,Mn,yn,bn,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new P,new P,new P,new P,new P,new P,new P,new P],si=new P,Ps=new fn,Mn=new P,yn=new P,bn=new P,Oi=new P,zi=new P,Ji=new P,as=new P,Ls=new P,Is=new P,Qi=new P;function Ur(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Qi.fromArray(s,r);const a=n.x*Math.abs(Qi.x)+n.y*Math.abs(Qi.y)+n.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),h=i.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yu=new fn,ls=new P,Nr=new P;class bs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):yu.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ls,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(Nr)),this.expandByPoint(ls.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new P,Fr=new P,Ds=new P,Hi=new P,kr=new P,Us=new P,Br=new P;class _a{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Fr.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(Fr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=Hi.dot(this.direction),l=-Hi.dot(Ds),c=Hi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Fr).addScaledVector(Ds,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const i=bi.dot(this.direction),n=bi.dot(bi)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,i,n,r){kr.subVectors(e,t),Us.subVectors(i,t),Br.crossVectors(kr,Us);let o=this.direction.dot(Br),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,t);const l=a*this.direction.dot(Us.crossVectors(Hi,Us));if(l<0)return null;const c=a*this.direction.dot(kr.cross(Hi));if(c<0||l+c>o)return null;const h=-a*Hi.dot(Br);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,n,r,o,a,l,c,h,u,d,f,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,i,n,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Sn.setFromMatrixColumn(t,0).length(),r=1/Sn.setFromMatrixColumn(t,1).length(),o=1/Sn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bu,t,Su)}lookAt(t,e,i){const n=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Vi.crossVectors(i,Ke),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Vi.crossVectors(i,Ke)),Vi.normalize(),Ns.crossVectors(Ke,Vi),n[0]=Vi.x,n[4]=Ns.x,n[8]=Ke.x,n[1]=Vi.y,n[5]=Ns.y,n[9]=Ke.y,n[2]=Vi.z,n[6]=Ns.z,n[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],S=i[7],M=i[11],I=i[15],E=n[0],y=n[4],A=n[8],v=n[12],x=n[1],L=n[5],O=n[9],B=n[13],X=n[2],Y=n[6],k=n[10],$=n[14],H=n[3],et=n[7],rt=n[11],tt=n[15];return r[0]=o*E+a*x+l*X+c*H,r[4]=o*y+a*L+l*Y+c*et,r[8]=o*A+a*O+l*k+c*rt,r[12]=o*v+a*B+l*$+c*tt,r[1]=h*E+u*x+d*X+f*H,r[5]=h*y+u*L+d*Y+f*et,r[9]=h*A+u*O+d*k+f*rt,r[13]=h*v+u*B+d*$+f*tt,r[2]=g*E+_*x+m*X+p*H,r[6]=g*y+_*L+m*Y+p*et,r[10]=g*A+_*O+m*k+p*rt,r[14]=g*v+_*B+m*$+p*tt,r[3]=w*E+S*x+M*X+I*H,r[7]=w*y+S*L+M*Y+I*et,r[11]=w*A+S*O+M*k+I*rt,r[15]=w*v+S*B+M*$+I*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-n*o*f+n*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-n*a*h-e*l*u+e*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,M=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,I=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,E=e*w+i*S+n*M+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/E;return t[0]=w*y,t[1]=(_*d*r-u*m*r-_*n*f+i*m*f+u*n*p-i*d*p)*y,t[2]=(a*m*r-_*l*r+_*n*c-i*m*c-a*n*p+i*l*p)*y,t[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*f-i*l*f)*y,t[4]=S*y,t[5]=(h*m*r-g*d*r+g*n*f-e*m*f-h*n*p+e*d*p)*y,t[6]=(g*l*r-o*m*r-g*n*c+e*m*c+o*n*p-e*l*p)*y,t[7]=(o*d*r-h*l*r+h*n*c-e*d*c-o*n*f+e*l*f)*y,t[8]=M*y,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*p-e*u*p)*y,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*y,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*y,t[12]=I*y,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*y,t[14]=(g*a*n-o*_*n-g*i*l+e*_*l+o*i*m-e*a*m)*y,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*d+e*a*d)*y,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,w=l*c,S=l*h,M=l*u,I=i.x,E=i.y,y=i.z;return n[0]=(1-(_+p))*I,n[1]=(f+M)*I,n[2]=(g-S)*I,n[3]=0,n[4]=(f-M)*E,n[5]=(1-(d+p))*E,n[6]=(m+w)*E,n[7]=0,n[8]=(g+S)*y,n[9]=(m-w)*y,n[10]=(1-(d+_))*y,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Sn.set(n[0],n[1],n[2]).length();const o=Sn.set(n[4],n[5],n[6]).length(),a=Sn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],ri.copy(this);const c=1/r,h=1/o,u=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,e.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=Ci){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let f,g;if(a===Ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Ci){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),d=(e+t)*c,f=(i+n)*h;let g,_;if(a===Ci)g=(o+r)*u,_=-2*u;else if(a===pr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Sn=new P,ri=new fe,bu=new P(0,0,0),Su=new P(1,1,1),Vi=new P,Ns=new P,Ke=new P,el=new fe,il=new ys;class vi{constructor(t=0,e=0,i=0,n=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return il.setFromEuler(this),this.setFromQuaternion(il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wu=0;const nl=new P,wn=new ys,Si=new fe,Fs=new P,cs=new P,Eu=new P,Tu=new ys,sl=new P(1,0,0),rl=new P(0,1,0),ol=new P(0,0,1),al={type:"added"},Au={type:"removed"},En={type:"childadded",child:null},Or={type:"childremoved",child:null};class Ce extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new P,e=new vi,i=new ys,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new fe},normalMatrix:{value:new kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.multiply(wn),this}rotateOnWorldAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.premultiply(wn),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return nl.copy(t).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fs.copy(t):Fs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(cs,Fs,this.up):Si.lookAt(Fs,cs,this.up),this.quaternion.setFromRotationMatrix(Si),n&&(Si.extractRotation(n.matrixWorld),wn.setFromRotationMatrix(Si),this.quaternion.premultiply(wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(al),En.child=t,this.dispatchEvent(En),En.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au),Or.child=t,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(al),En.child=t,this.dispatchEvent(En),En.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ce.DEFAULT_UP=new P(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new P,wi=new P,zr=new P,Ei=new P,Tn=new P,An=new P,ll=new P,Hr=new P,Vr=new P,Gr=new P,Wr=new le,Xr=new le,qr=new le;class ei{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),oi.subVectors(t,e),n.cross(oi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){oi.subVectors(n,e),wi.subVectors(i,e),zr.subVectors(t,e);const o=oi.dot(oi),a=oi.dot(wi),l=oi.dot(zr),c=wi.dot(wi),h=wi.dot(zr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(t,e),Xr.fromBufferAttribute(t,i),qr.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Wr,r.x),o.addScaledVector(Xr,r.y),o.addScaledVector(qr,r.z),o}static isFrontFacing(t,e,i,n){return oi.subVectors(i,e),wi.subVectors(t,e),oi.cross(wi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),oi.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return ei.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;Tn.subVectors(n,i),An.subVectors(r,i),Hr.subVectors(t,i);const l=Tn.dot(Hr),c=An.dot(Hr);if(l<=0&&c<=0)return e.copy(i);Vr.subVectors(t,n);const h=Tn.dot(Vr),u=An.dot(Vr);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Tn,o);Gr.subVectors(t,r);const f=Tn.dot(Gr),g=An.dot(Gr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(An,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ll.subVectors(r,n),a=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(ll,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(Tn,o).addScaledVector(An,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Yr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class W{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Kt.workingColorSpace){if(t=ga(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yr(o,r,t+1/3),this.g=Yr(o,r,t),this.b=Yr(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,n),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=Pc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Kt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Fe(ze.r*255,0,255))*65536+Math.round(Fe(ze.g*255,0,255))*256+Math.round(Fe(ze.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(ze.copy(this),e);const i=ze.r,n=ze.g,r=ze.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=je){Kt.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,n=ze.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(ks);const i=_s(Gi.h,ks.h,e),n=_s(Gi.s,ks.s,e),r=_s(Gi.l,ks.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new W;W.NAMES=Pc;let Cu=0;class gn extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=is(),this.name="",this.blending=On,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=yo,this.blendEquation=ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=Xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vn,this.stencilZFail=vn,this.stencilZPass=vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mo&&(i.blendSrc=this.blendSrc),this.blendDst!==yo&&(i.blendDst=this.blendDst),this.blendEquation!==ln&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends gn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new P,Bs=new ct;class Ee{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xa,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),n=Ve(n,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class Lc extends Ee{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ic extends Ee{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends Ee{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ru=0;const ti=new fe,$r=new Ce,Cn=new P,Ze=new fn,hs=new fn,Ue=new P;class Pe extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tc(t)?Ic:Lc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{for(let i=0,n=e.count;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(Ze.min,hs.min),Ze.expandByPoint(Ue),Ue.addVectors(Ze.max,hs.max),Ze.expandByPoint(Ue)):(Ze.expandByPoint(hs.min),Ze.expandByPoint(hs.max))}Ze.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(Cn.fromBufferAttribute(t,c),Ue.add(Cn)),n=Math.max(n,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new P,l[A]=new P;const c=new P,h=new P,u=new P,d=new ct,f=new ct,g=new ct,_=new P,m=new P;function p(A,v,x){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,v),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[A].add(_),a[v].add(_),a[x].add(_),l[A].add(m),l[v].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let A=0,v=w.length;A<v;++A){const x=w[A],L=x.start,O=x.count;for(let B=L,X=L+O;B<X;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new P,M=new P,I=new P,E=new P;function y(A){I.fromBufferAttribute(n,A),E.copy(I);const v=a[A];S.copy(v),S.sub(I.multiplyScalar(I.dot(v))).normalize(),M.crossVectors(E,v);const L=M.dot(l[A])<0?-1:1;o.setXYZW(A,S.x,S.y,S.z,L)}for(let A=0,v=w.length;A<v;++A){const x=w[A],L=x.start,O=x.count;for(let B=L,X=L+O;B<X;B+=3)y(t.getX(B+0)),y(t.getX(B+1)),y(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new fe,tn=new _a,Os=new bs,hl=new P,zs=new P,Hs=new P,Vs=new P,Kr=new P,Gs=new P,ul=new P,Ws=new P;class C extends Ce{constructor(t=new Pe,e=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){Gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Kr.fromBufferAttribute(u,t),o?Gs.addScaledVector(Kr,h):Gs.addScaledVector(Kr.sub(e),h))}e.add(Gs)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),tn.copy(t.ray).recast(t.near),!(Os.containsPoint(tn.origin)===!1&&(tn.intersectSphere(Os,hl)===null||tn.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(cl.copy(r).invert(),tn.copy(t.ray).applyMatrix4(cl),!(i.boundingBox!==null&&tn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,tn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,I=S;M<I;M+=3){const E=a.getX(M),y=a.getX(M+1),A=a.getX(M+2);n=Xs(this,p,t,i,c,h,u,E,y,A),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);n=Xs(this,o,t,i,c,h,u,w,S,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,I=S;M<I;M+=3){const E=M,y=M+1,A=M+2;n=Xs(this,p,t,i,c,h,u,E,y,A),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,S=m+1,M=m+2;n=Xs(this,o,t,i,c,h,u,w,S,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Pu(s,t,e,i,n,r,o,a){let l;if(t.side===Ne?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===$i,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:s}}function Xs(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,zs),s.getVertexPosition(l,Hs),s.getVertexPosition(c,Vs);const h=Pu(s,t,e,i,zs,Hs,Vs,ul);if(h){const u=new P;ei.getBarycoord(ul,zs,Hs,Vs,u),n&&(h.uv=ei.getInterpolatedAttribute(n,a,l,c,u,new ct)),r&&(h.uv1=ei.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};ei.getNormal(zs,Hs,Vs,d.normal),h.face=d,h.barycoord=u}return h}class ot extends Pe{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,m,p,w,S,M,I,E,y,A,v){const x=M/y,L=I/A,O=M/2,B=I/2,X=E/2,Y=y+1,k=A+1;let $=0,H=0;const et=new P;for(let rt=0;rt<k;rt++){const tt=rt*L-B;for(let Dt=0;Dt<Y;Dt++){const Qt=Dt*x-O;et[_]=Qt*w,et[m]=tt*S,et[p]=X,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=E>0?1:-1,h.push(et.x,et.y,et.z),u.push(Dt/y),u.push(1-rt/A),$+=1}}for(let rt=0;rt<A;rt++)for(let tt=0;tt<y;tt++){const Dt=d+tt+Y*rt,Qt=d+tt+Y*(rt+1),K=d+(tt+1)+Y*(rt+1),it=d+(tt+1)+Y*rt;l.push(Dt,Qt,it),l.push(Qt,K,it),H+=6}a.addGroup(f,H,v),f+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const i=jn(s[e]);for(const n in i)t[n]=i[n]}return t}function Lu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Jn={clone:jn,merge:Ge};var Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ve extends gn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=Lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Uc extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new P,dl=new ct,fl=new ct;class We extends Uc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zn*2*Math.atan(Math.tan(Hn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,dl,fl),e.subVectors(fl,dl)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rn=-90,Pn=1;class Uu extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new We(Rn,Pn,t,e);n.layers=this.layers,this.add(n);const r=new We(Rn,Pn,t,e);r.layers=this.layers,this.add(r);const o=new We(Rn,Pn,t,e);o.layers=this.layers,this.add(o);const a=new We(Rn,Pn,t,e);a.layers=this.layers,this.add(a);const l=new We(Rn,Pn,t,e);l.layers=this.layers,this.add(l);const c=new We(Rn,Pn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nc extends Ye{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qn,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nu extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Nc(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_i}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ot(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:Ri});r.uniforms.tEquirect.value=e;const o=new C(n,r),a=e.minFilter;return e.minFilter===un&&(e.minFilter=_i),new Uu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const Zr=new P,Fu=new P,ku=new kt;class on{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Zr.subVectors(i,e).cross(Fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Zr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ku.getNormalMatrix(t),n=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const en=new bs,qs=new P;class va{constructor(t=new on,e=new on,i=new on,n=new on,r=new on,o=new on){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ci){const i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],_=n[10],m=n[11],p=n[12],w=n[13],S=n[14],M=n[15];if(i[0].setComponents(l-r,d-c,m-f,M-p).normalize(),i[1].setComponents(l+r,d+c,m+f,M+p).normalize(),i[2].setComponents(l+o,d+h,m+g,M+w).normalize(),i[3].setComponents(l-o,d-h,m-g,M-w).normalize(),i[4].setComponents(l-a,d-u,m-_,M-S).normalize(),e===Ci)i[5].setComponents(l+a,d+u,m+_,M+S).normalize();else if(e===pr)i[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),en.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),en.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(en)}intersectsSprite(t){return en.center.set(0,0,0),en.radius=.7071067811865476,en.applyMatrix4(t.matrixWorld),this.intersectsSphere(en)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(qs.x=n.normal.x>0?t.max.x:t.min.x,qs.y=n.normal.y>0?t.max.y:t.min.y,qs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fc(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Bu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}class Ss extends Pe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*d-o;for(let S=0;S<c;S++){const M=S*u-r;g.push(M,-w,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const S=w+c*p,M=w+c*(p+1),I=w+1+c*(p+1),E=w+1+c*p;f.push(S,M,E),f.push(M,I,E)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zu=`#ifdef USE_ALPHAHASH
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
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
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
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
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
#endif`,$u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
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
#endif`,Qu=`#ifdef USE_BUMPMAP
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ld=`#define PI 3.141592653589793
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
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hd=`vec3 transformedNormal = objectNormal;
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
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
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
}`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
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
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
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
#endif`,kd=`struct PhysicalMaterial {
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
}`,Bd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$d=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
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
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
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
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wf=`float getShadowMask() {
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
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,Af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cf=`#ifdef USE_SKINNING
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
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,If=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zf=`uniform sampler2D t2D;
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
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
}`,qf=`#if DEPTH_PACKING == 3200
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
}`,Yf=`#define DISTANCE
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
}`,$f=`#define DISTANCE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#define LAMBERT
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
}`,ip=`#define LAMBERT
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
}`,np=`#define MATCAP
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
}`,sp=`#define MATCAP
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
}`,rp=`#define NORMAL
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
}`,op=`#define NORMAL
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
}`,ap=`#define PHONG
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
}`,lp=`#define PHONG
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
}`,cp=`#define STANDARD
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
}`,hp=`#define STANDARD
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
}`,up=`#define TOON
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
}`,dp=`#define TOON
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
}`,fp=`uniform float size;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 color;
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
}`,_p=`uniform float rotation;
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
}`,vp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Ou,alphahash_pars_fragment:zu,alphamap_fragment:Hu,alphamap_pars_fragment:Vu,alphatest_fragment:Gu,alphatest_pars_fragment:Wu,aomap_fragment:Xu,aomap_pars_fragment:qu,batching_pars_vertex:Yu,batching_vertex:$u,begin_vertex:Ku,beginnormal_vertex:Zu,bsdfs:ju,iridescence_fragment:Ju,bumpmap_pars_fragment:Qu,clipping_planes_fragment:td,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:id,clipping_planes_vertex:nd,color_fragment:sd,color_pars_fragment:rd,color_pars_vertex:od,color_vertex:ad,common:ld,cube_uv_reflection_fragment:cd,defaultnormal_vertex:hd,displacementmap_pars_vertex:ud,displacementmap_vertex:dd,emissivemap_fragment:fd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:_d,envmap_common_pars_fragment:vd,envmap_pars_fragment:xd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Ld,envmap_vertex:yd,fog_vertex:bd,fog_pars_vertex:Sd,fog_fragment:wd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Td,lightmap_pars_fragment:Ad,lights_lambert_fragment:Cd,lights_lambert_pars_fragment:Rd,lights_pars_begin:Pd,lights_toon_fragment:Id,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Nd,lights_physical_fragment:Fd,lights_physical_pars_fragment:kd,lights_fragment_begin:Bd,lights_fragment_maps:Od,lights_fragment_end:zd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Wd,map_fragment:Xd,map_pars_fragment:qd,map_particle_fragment:Yd,map_particle_pars_fragment:$d,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:jd,morphcolor_vertex:Jd,morphnormal_vertex:Qd,morphtarget_pars_vertex:tf,morphtarget_vertex:ef,normal_fragment_begin:nf,normal_fragment_maps:sf,normal_pars_fragment:rf,normal_pars_vertex:of,normal_vertex:af,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:uf,iridescence_pars_fragment:df,opaque_fragment:ff,packing:pf,premultiplied_alpha_fragment:mf,project_vertex:gf,dithering_fragment:_f,dithering_pars_fragment:vf,roughnessmap_fragment:xf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:yf,shadowmap_pars_vertex:bf,shadowmap_vertex:Sf,shadowmask_pars_fragment:wf,skinbase_vertex:Ef,skinning_pars_vertex:Tf,skinning_vertex:Af,skinnormal_vertex:Cf,specularmap_fragment:Rf,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:If,transmission_fragment:Df,transmission_pars_fragment:Uf,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:kf,worldpos_vertex:Bf,background_vert:Of,background_frag:zf,backgroundCube_vert:Hf,backgroundCube_frag:Vf,cube_vert:Gf,cube_frag:Wf,depth_vert:Xf,depth_frag:qf,distanceRGBA_vert:Yf,distanceRGBA_frag:$f,equirect_vert:Kf,equirect_frag:Zf,linedashed_vert:jf,linedashed_frag:Jf,meshbasic_vert:Qf,meshbasic_frag:tp,meshlambert_vert:ep,meshlambert_frag:ip,meshmatcap_vert:np,meshmatcap_frag:sp,meshnormal_vert:rp,meshnormal_frag:op,meshphong_vert:ap,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:hp,meshtoon_vert:up,meshtoon_frag:dp,points_vert:fp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:_p,sprite_frag:vp},lt={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},gi={basic:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new W(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ge([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ge([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new W(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ge([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ge([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ge([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ge([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ge([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ge([lt.lights,lt.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};gi.physical={uniforms:Ge([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Ys={r:0,b:0,g:0},nn=new vi,xp=new fe;function Mp(s,t,e,i,n,r,o){const a=new W(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function _(w){let S=!1;const M=g(w);M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,S){const M=g(S);M&&(M.isCubeTexture||M.mapping===br)?(h===void 0&&(h=new C(new ot(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:jn(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),nn.copy(S.backgroundRotation),nn.x*=-1,nn.y*=-1,nn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(nn.y*=-1,nn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xp.makeRotationFromEuler(nn)),h.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,(u!==M||d!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new C(new Ss(2,2),new ve({name:"BackgroundMaterial",uniforms:jn(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,S){w.getRGB(Ys,Dc(s)),i.buffers.color.setClear(Ys.r,Ys.g,Ys.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:_,addToRenderList:m}}function yp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,o=!1;function a(x,L,O,B,X){let Y=!1;const k=u(B,O,L);r!==k&&(r=k,c(r.object)),Y=f(x,B,O,X),Y&&g(x,B,O,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(x,L,O,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,L,O){const B=O.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[L.id];Y===void 0&&(Y={},X[L.id]=Y);let k=Y[B];return k===void 0&&(k=d(l()),Y[B]=k),k}function d(x){const L=[],O=[],B=[];for(let X=0;X<e;X++)L[X]=0,O[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,L,O,B){const X=r.attributes,Y=L.attributes;let k=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){const rt=X[H];let tt=Y[H];if(tt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),rt===void 0||rt.attribute!==tt||tt&&rt.data!==tt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(x,L,O,B){const X={},Y=L.attributes;let k=0;const $=O.getAttributes();for(const H in $)if($[H].location>=0){let rt=Y[H];rt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const tt={};tt.attribute=rt,rt&&rt.data&&(tt.data=rt.data),X[H]=tt,k++}r.attributes=X,r.attributesNum=k,r.index=B}function _(){const x=r.newAttributes;for(let L=0,O=x.length;L<O;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const O=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;O[x]=1,B[x]===0&&(s.enableVertexAttribArray(x),B[x]=1),X[x]!==L&&(s.vertexAttribDivisor(x,L),X[x]=L)}function w(){const x=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==x[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function S(x,L,O,B,X,Y,k){k===!0?s.vertexAttribIPointer(x,L,O,X,Y):s.vertexAttribPointer(x,L,O,B,X,Y)}function M(x,L,O,B){_();const X=B.attributes,Y=O.getAttributes(),k=L.defaultAttributeValues;for(const $ in Y){const H=Y[$];if(H.location>=0){let et=X[$];if(et===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const rt=et.normalized,tt=et.itemSize,Dt=t.get(et);if(Dt===void 0)continue;const Qt=Dt.buffer,K=Dt.type,it=Dt.bytesPerElement,xt=K===s.INT||K===s.UNSIGNED_INT||et.gpuType===ha;if(et.isInterleavedBufferAttribute){const at=et.data,Tt=at.stride,Pt=et.offset;if(at.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)p(H.location+Bt,at.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)m(H.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Bt=0;Bt<H.locationSize;Bt++)S(H.location+Bt,tt/H.locationSize,K,rt,Tt*it,(Pt+tt/H.locationSize*Bt)*it,xt)}else{if(et.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)p(H.location+at,et.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let at=0;at<H.locationSize;at++)m(H.location+at);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let at=0;at<H.locationSize;at++)S(H.location+at,tt/H.locationSize,K,rt,tt*it,tt/H.locationSize*at*it,xt)}}else if(k!==void 0){const rt=k[$];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(H.location,rt);break;case 3:s.vertexAttrib3fv(H.location,rt);break;case 4:s.vertexAttrib4fv(H.location,rt);break;default:s.vertexAttrib1fv(H.location,rt)}}}}w()}function I(){A();for(const x in i){const L=i[x];for(const O in L){const B=L[O];for(const X in B)h(B[X].object),delete B[X];delete L[O]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const O in L){const B=L[O];for(const X in B)h(B[X].object),delete B[X];delete L[O]}delete i[x.id]}function y(x){for(const L in i){const O=i[L];if(O[x.id]===void 0)continue;const B=O[x.id];for(const X in B)h(B[X].object),delete B[X];delete O[x.id]}}function A(){v(),o=!0,r!==n&&(r=n,c(r.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:A,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function bp(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sp(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(y){return!(y!==li&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const A=y===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Ui&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Ai&&!A)}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:I,maxSamples:E}}function wp(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new on,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:i,S=w*4;let M=p.clippingState||null;l.value=M,M=h(g,d,S,f);for(let I=0;I!==S;++I)M[I]=e[I];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==_;++S,M+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ep(s){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=qn:a===Po&&(o.mapping=Yn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Po)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nu(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class xa extends Uc{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fn=4,pl=[.125,.215,.35,.446,.526,.582],cn=20,jr=new xa,ml=new W;let Jr=null,Qr=0,to=0,eo=!1;const an=(1+Math.sqrt(5))/2,Ln=1/an,gl=[new P(-an,Ln,0),new P(an,Ln,0),new P(-Ln,0,an),new P(Ln,0,an),new P(0,an,-Ln),new P(0,an,Ln),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class gr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jr,Qr,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qn||t.mapping===Yn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Pi,format:li,colorSpace:ts,depthBuffer:!1},n=_l(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(r)),this._blurMaterial=Ap(r,t,e)}return n}_compileMaterial(t){const e=new C(this._lodPlanes[0],t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,i,n){const a=new We(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ml),h.toneMapping=Yi,h.autoClear=!1;const f=new Wt({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new C(new ot,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ml),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;$s(n,w*S,p>2?S:0,S,S),h.setRenderTarget(n),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===qn||t.mapping===Yn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new C(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,jr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gl[(n-r-1)%gl.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new C(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):cn;m>cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cn}`);const p=[];let w=0;for(let y=0;y<cn;++y){const A=y/_,v=Math.exp(-A*A/2);p.push(v),y===0?w+=v:y<m&&(w+=2*v)}for(let y=0;y<p.length;y++)p[y]=p[y]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const M=this._sizeLods[n],I=3*M*(n>S-Fn?n-S+Fn:0),E=4*(this._cubeSize-M);$s(e,I,E,3*M,2*M),l.setRenderTarget(e),l.render(u,jr)}}function Tp(s){const t=[],e=[],i=[];let n=s;const r=s-Fn+1+pl.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>s-Fn?l=pl[o-s+Fn-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){const y=E%3*2/3-1,A=E>2?0:-1,v=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];w.set(v,_*g*E),S.set(d,m*g*E);const x=[E,E,E,E,E,E];M.set(x,p*g*E)}const I=new Pe;I.setAttribute("position",new Ee(w,_)),I.setAttribute("uv",new Ee(S,m)),I.setAttribute("faceIndex",new Ee(M,p)),t.push(I),n>Fn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _l(s,t,e){const i=new di(s,t,e);return i.texture.mapping=br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Ap(s,t,e){const i=new Float32Array(cn),n=new P(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:cn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function vl(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xl(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function Cp(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ro||l===Po,h=l===qn||l===Yn;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new gr(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Rp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&ps("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Pp(s,t,e,i){const n={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete n[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let S=0,M=w.length;S<M;S+=3){const I=w[S+0],E=w[S+1],y=w[S+2];d.push(I,E,E,y,y,I)}}else if(g!==void 0){const w=g.array;_=g.version;for(let S=0,M=w.length/3-1;S<M;S+=3){const I=S+0,E=S+1,y=S+2;d.push(I,E,E,y,y,I)}}else return;const m=new(Tc(d)?Ic:Lc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Lp(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ip(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Dp(s,t,e){const i=new WeakMap,n=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let x=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let I=a.attributes.position.count*M,E=1;I>t.maxTextureSize&&(E=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const y=new Float32Array(I*E*4*u),A=new Cc(y,I,E,u);A.type=Ai,A.needsUpdate=!0;const v=M*4;for(let L=0;L<u;L++){const O=p[L],B=w[L],X=S[L],Y=I*E*4*L;for(let k=0;k<O.count;k++){const $=k*v;g===!0&&(n.fromBufferAttribute(O,k),y[Y+$+0]=n.x,y[Y+$+1]=n.y,y[Y+$+2]=n.z,y[Y+$+3]=0),_===!0&&(n.fromBufferAttribute(B,k),y[Y+$+4]=n.x,y[Y+$+5]=n.y,y[Y+$+6]=n.z,y[Y+$+7]=0),m===!0&&(n.fromBufferAttribute(X,k),y[Y+$+8]=n.x,y[Y+$+9]=n.y,y[Y+$+10]=n.z,y[Y+$+11]=X.itemSize===4?n.w:1)}}d={count:u,texture:A,size:new ct(I,E)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Up(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class kc extends Ye{constructor(t,e,i,n,r,o,a,l,c,h=zn){if(h!==zn&&h!==Kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zn&&(i=dn),i===void 0&&h===Kn&&(i=$n),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ui,this.minFilter=l!==void 0?l:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bc=new Ye,Ml=new kc(1,1),Oc=new Cc,zc=new Mu,Hc=new Nc,yl=[],bl=[],Sl=new Float32Array(16),wl=new Float32Array(9),El=new Float32Array(4);function ns(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=yl[n];if(r===void 0&&(r=new Float32Array(n),yl[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function wr(s,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Np(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function Op(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;El.set(i),s.uniformMatrix2fv(this.addr,!1,El),De(e,i)}}function zp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;wl.set(i),s.uniformMatrix3fv(this.addr,!1,wl),De(e,i)}}function Hp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;Sl.set(i),s.uniformMatrix4fv(this.addr,!1,Sl),De(e,i)}}function Vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function qp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function $p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function Kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function Zp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ml.compareFunction=Ec,r=Ml):r=Bc,e.setTexture2D(t||r,n)}function jp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||zc,n)}function Jp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Hc,n)}function Qp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Oc,n)}function tm(s){switch(s){case 5126:return Np;case 35664:return Fp;case 35665:return kp;case 35666:return Bp;case 35674:return Op;case 35675:return zp;case 35676:return Hp;case 5124:case 35670:return Vp;case 35667:case 35671:return Gp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function em(s,t){s.uniform1fv(this.addr,t)}function im(s,t){const e=ns(t,this.size,2);s.uniform2fv(this.addr,e)}function nm(s,t){const e=ns(t,this.size,3);s.uniform3fv(this.addr,e)}function sm(s,t){const e=ns(t,this.size,4);s.uniform4fv(this.addr,e)}function rm(s,t){const e=ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function om(s,t){const e=ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function am(s,t){const e=ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function lm(s,t){s.uniform1iv(this.addr,t)}function cm(s,t){s.uniform2iv(this.addr,t)}function hm(s,t){s.uniform3iv(this.addr,t)}function um(s,t){s.uniform4iv(this.addr,t)}function dm(s,t){s.uniform1uiv(this.addr,t)}function fm(s,t){s.uniform2uiv(this.addr,t)}function pm(s,t){s.uniform3uiv(this.addr,t)}function mm(s,t){s.uniform4uiv(this.addr,t)}function gm(s,t,e){const i=this.cache,n=t.length,r=wr(e,n);Ie(i,r)||(s.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Bc,r[o])}function _m(s,t,e){const i=this.cache,n=t.length,r=wr(e,n);Ie(i,r)||(s.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||zc,r[o])}function vm(s,t,e){const i=this.cache,n=t.length,r=wr(e,n);Ie(i,r)||(s.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Hc,r[o])}function xm(s,t,e){const i=this.cache,n=t.length,r=wr(e,n);Ie(i,r)||(s.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Oc,r[o])}function Mm(s){switch(s){case 5126:return em;case 35664:return im;case 35665:return nm;case 35666:return sm;case 35674:return rm;case 35675:return om;case 35676:return am;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return xm}}class ym{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}}class bm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mm(e.type)}}class Sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Tl(s,t){s.seq.push(t),s.map[t.id]=t}function wm(s,t,e){const i=s.name,n=i.length;for(io.lastIndex=0;;){const r=io.exec(i),o=io.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Tl(e,c===void 0?new ym(a,s,t):new bm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Sm(a),Tl(e,u)),e=u}}}class ur{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);wm(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Al(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Em=37297;let Tm=0;function Am(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Cl=new kt;function Cm(s){Kt._getMatrix(Cl,Kt.workingColorSpace,s);const t=`mat3( ${Cl.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case Sr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Am(s.getShaderSource(t),o)}else return n}function Rm(s,t){const e=Cm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pm(s,t){let e;switch(t){case lc:e="Linear";break;case cc:e="Reinhard";break;case hc:e="Cineon";break;case ca:e="ACESFilmic";break;case uc:e="AgX";break;case dc:e="Neutral";break;case kh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ks=new P;function Lm(){Kt.getLuminanceCoefficients(Ks);const s=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Dm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Um(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ms(s){return s!==""}function Pl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ll(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(s){return s.replace(Nm,km)}const Fm=new Map;function km(s,t){let e=zt[t];if(e===void 0){const i=Fm.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(s){return s.replace(Bm,Om)}function Om(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Dl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function zm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Hm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qn:case Yn:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yn:t="ENVMAP_MODE_REFRACTION";break}return t}function Gm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ac:t="ENVMAP_BLENDING_MULTIPLY";break;case Nh:t="ENVMAP_BLENDING_MIX";break;case Fh:t="ENVMAP_BLENDING_ADD";break}return t}function Wm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Xm(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=zm(e),c=Hm(e),h=Vm(e),u=Gm(e),d=Wm(e),f=Im(e),g=Dm(r),_=n.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(m=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?zt.tonemapping_pars_fragment:"",e.toneMapping!==Yi?Pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Rm("linearToOutputTexel",e.outputColorSpace),Lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),o=ra(o),o=Pl(o,e),o=Ll(o,e),a=ra(a),a=Pl(a,e),a=Ll(a,e),o=Il(o),a=Il(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+m+o,M=w+p+a,I=Al(n,n.VERTEX_SHADER,S),E=Al(n,n.FRAGMENT_SHADER,M);n.attachShader(_,I),n.attachShader(_,E),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function y(L){if(s.debug.checkShaderErrors){const O=n.getProgramInfoLog(_).trim(),B=n.getShaderInfoLog(I).trim(),X=n.getShaderInfoLog(E).trim();let Y=!0,k=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,I,E);else{const $=Rl(n,I,"vertex"),H=Rl(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+$+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||X==="")&&(k=!1);k&&(L.diagnostics={runnable:Y,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}n.deleteShader(I),n.deleteShader(E),A=new ur(n,_),v=Um(n,_)}let A;this.getUniforms=function(){return A===void 0&&y(this),A};let v;this.getAttributes=function(){return v===void 0&&y(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(_,Em)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=E,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $m(t),e.set(t,i)),i}}class $m{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function Km(s,t,e,i,n,r,o){const a=new Rc,l=new Ym,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,L,O,B){const X=O.fog,Y=B.geometry,k=v.isMeshStandardMaterial?O.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),H=$&&$.mapping===br?$.image.height:null,et=g[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=rt!==void 0?rt.length:0;let Dt=0;Y.morphAttributes.position!==void 0&&(Dt=1),Y.morphAttributes.normal!==void 0&&(Dt=2),Y.morphAttributes.color!==void 0&&(Dt=3);let Qt,K,it,xt;if(et){const re=gi[et];Qt=re.vertexShader,K=re.fragmentShader}else Qt=v.vertexShader,K=v.fragmentShader,l.update(v),it=l.getVertexShaderID(v),xt=l.getFragmentShaderID(v);const at=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,he=!!v.map,Gt=!!v.matcap,we=!!$,F=!!v.aoMap,Je=!!v.lightMap,qt=!!v.bumpMap,Yt=!!v.normalMap,Ct=!!v.displacementMap,pe=!!v.emissiveMap,At=!!v.metalnessMap,R=!!v.roughnessMap,b=v.anisotropy>0,z=v.clearcoat>0,j=v.dispersion>0,Q=v.iridescence>0,Z=v.sheen>0,wt=v.transmission>0,ut=b&&!!v.anisotropyMap,gt=z&&!!v.clearcoatMap,Jt=z&&!!v.clearcoatNormalMap,nt=z&&!!v.clearcoatRoughnessMap,_t=Q&&!!v.iridescenceMap,Rt=Q&&!!v.iridescenceThicknessMap,Lt=Z&&!!v.sheenColorMap,vt=Z&&!!v.sheenRoughnessMap,$t=!!v.specularMap,Ot=!!v.specularColorMap,ue=!!v.specularIntensityMap,D=wt&&!!v.transmissionMap,ht=wt&&!!v.thicknessMap,q=!!v.gradientMap,J=!!v.alphaMap,pt=v.alphaTest>0,dt=!!v.alphaHash,Nt=!!v.extensions;let xe=Yi;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Be={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Qt,fragmentShader:K,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:xt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ts,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:Gt,envMap:we,envMapMode:we&&$.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Je,bumpMap:qt,normalMap:Yt,displacementMap:d&&Ct,emissiveMap:pe,normalMapObjectSpace:Yt&&v.normalMapType===Hh,normalMapTangentSpace:Yt&&v.normalMapType===wc,metalnessMap:At,roughnessMap:R,anisotropy:b,anisotropyMap:ut,clearcoat:z,clearcoatMap:gt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:nt,dispersion:j,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:Rt,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:$t,specularColorMap:Ot,specularIntensityMap:ue,transmission:wt,transmissionMap:D,thicknessMap:ht,gradientMap:q,opaque:v.transparent===!1&&v.blending===On&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:v.combine,mapUv:he&&_(v.map.channel),aoMapUv:F&&_(v.aoMap.channel),lightMapUv:Je&&_(v.lightMap.channel),bumpMapUv:qt&&_(v.bumpMap.channel),normalMapUv:Yt&&_(v.normalMap.channel),displacementMapUv:Ct&&_(v.displacementMap.channel),emissiveMapUv:pe&&_(v.emissiveMap.channel),metalnessMapUv:At&&_(v.metalnessMap.channel),roughnessMapUv:R&&_(v.roughnessMap.channel),anisotropyMapUv:ut&&_(v.anisotropyMap.channel),clearcoatMapUv:gt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(v.sheenRoughnessMap.channel),specularMapUv:$t&&_(v.specularMap.channel),specularColorMapUv:Ot&&_(v.specularColorMap.channel),specularIntensityMapUv:ue&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:ht&&_(v.thicknessMap.channel),alphaMapUv:J&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Yt||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(he||J),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&Kt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:pe&&v.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ai,flipSided:v.side===Ne,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Nt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&v.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)x.push(L),x.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(w(x,v),S(x,v),x.push(s.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function w(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function S(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const x=g[v.type];let L;if(x){const O=gi[x];L=Jn.clone(O.uniforms)}else L=v.uniforms;return L}function I(v,x){let L;for(let O=0,B=h.length;O<B;O++){const X=h[O];if(X.cacheKey===x){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Xm(s,x,v,r),h.push(L)),L}function E(v){if(--v.usedTimes===0){const x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function y(v){l.remove(v)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:E,releaseShaderCache:y,programs:h,dispose:A}}function Zm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function jm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ul(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||jm),i.length>1&&i.sort(d||Ul),n.length>1&&n.sort(d||Ul)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function Jm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new Nl,s.set(i,[o])):n>=r.length?(o=new Nl,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Qm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new W};break;case"SpotLight":e={position:new P,direction:new P,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new W,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new W,groundColor:new W};break;case"RectAreaLight":e={color:new W,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function t0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let e0=0;function i0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function n0(s){const t=new Qm,e=t0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,r=new fe,o=new fe;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,S=0,M=0,I=0,E=0,y=0;c.sort(i0);for(let v=0,x=c.length;v<x;v++){const L=c[v],O=L.color,B=L.intensity,X=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],B);y++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=L.shadow.matrix,w++}i.directional[f]=k,f++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(O).multiplyScalar(B),k.distance=X,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[_]=k;const $=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,$.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[_]=$.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=Y,M++}_++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(O).multiplyScalar(B),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=k,m++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const $=L.shadow,H=e.get(L);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=k,g++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(B),k.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==w||A.numPointShadows!==S||A.numSpotShadows!==M||A.numSpotMaps!==I||A.numLightProbes!==y)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+I-E,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=y,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=w,A.numPointShadows=S,A.numSpotShadows=M,A.numSpotMaps=I,A.numLightProbes=y,i.version=e0++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const S=c[p];if(S.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),u++}else if(S.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Fl(s){const t=new n0(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function s0(s){let t=new WeakMap;function e(n,r=0){const o=t.get(n);let a;return o===void 0?(a=new Fl(s),t.set(n,[a])):r>=o.length?(a=new Fl(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class r0 extends gn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class o0 extends gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
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
}`;function c0(s,t,e){let i=new va;const n=new ct,r=new ct,o=new le,a=new r0({depthPacking:zh}),l=new o0,c={},h=e.maxTextureSize,u={[$i]:Ne,[Ne]:$i,[ai]:ai},d=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:a0,fragmentShader:l0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new C(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let p=this.type;this.render=function(E,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const v=s.getRenderTarget(),x=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Ri),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==Ti&&this.type===Ti,X=p===Ti&&this.type!==Ti;for(let Y=0,k=E.length;Y<k;Y++){const $=E[Y],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const et=H.getFrameExtents();if(n.multiply(et),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/et.x),n.x=r.x*et.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/et.y),n.y=r.y*et.y,H.mapSize.y=r.y)),H.map===null||B===!0||X===!0){const tt=this.type!==Ti?{minFilter:ui,magFilter:ui}:{};H.map!==null&&H.map.dispose(),H.map=new di(n.x,n.y,tt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const rt=H.getViewportCount();for(let tt=0;tt<rt;tt++){const Dt=H.getViewport(tt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),O.viewport(o),H.updateMatrices($,tt),i=H.getFrustum(),M(y,A,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&w(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,x,L)};function w(E,y){const A=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new di(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(y,null,A,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(y,null,A,f,_,null)}function S(E,y,A,v){let x=null;const L=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)x=L;else if(x=A.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const O=x.uuid,B=y.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,y.addEventListener("dispose",I)),x=Y}if(x.visible=y.visible,x.wireframe=y.wireframe,v===Ti?x.side=y.shadowSide!==null?y.shadowSide:y.side:x.side=y.shadowSide!==null?y.shadowSide:u[y.side],x.alphaMap=y.alphaMap,x.alphaTest=y.alphaTest,x.map=y.map,x.clipShadows=y.clipShadows,x.clippingPlanes=y.clippingPlanes,x.clipIntersection=y.clipIntersection,x.displacementMap=y.displacementMap,x.displacementScale=y.displacementScale,x.displacementBias=y.displacementBias,x.wireframeLinewidth=y.wireframeLinewidth,x.linewidth=y.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=s.properties.get(x);O.light=A}return x}function M(E,y,A,v,x){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Ti)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const B=t.update(E),X=E.material;if(Array.isArray(X)){const Y=B.groups;for(let k=0,$=Y.length;k<$;k++){const H=Y[k],et=X[H.materialIndex];if(et&&et.visible){const rt=S(E,et,v,x);E.onBeforeShadow(s,E,y,A,B,rt,H),s.renderBufferDirect(A,null,B,rt,E,H),E.onAfterShadow(s,E,y,A,B,rt,H)}}}else if(X.visible){const Y=S(E,X,v,x);E.onBeforeShadow(s,E,y,A,B,Y,null),s.renderBufferDirect(A,null,B,Y,E,null),E.onAfterShadow(s,E,y,A,B,Y,null)}}const O=E.children;for(let B=0,X=O.length;B<X;B++)M(O[B],y,A,v,x)}function I(E){E.target.removeEventListener("dispose",I);for(const A in c){const v=c[A],x=E.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const h0={[bo]:So,[wo]:Ao,[Eo]:Co,[Xn]:To,[So]:bo,[Ao]:wo,[Co]:Eo,[To]:Xn};function u0(s,t){function e(){let D=!1;const ht=new le;let q=null;const J=new le(0,0,0,0);return{setMask:function(pt){q!==pt&&!D&&(s.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){D=pt},setClear:function(pt,dt,Nt,xe,Be){Be===!0&&(pt*=xe,dt*=xe,Nt*=xe),ht.set(pt,dt,Nt,xe),J.equals(ht)===!1&&(s.clearColor(pt,dt,Nt,xe),J.copy(ht))},reset:function(){D=!1,q=null,J.set(-1,0,0,0)}}}function i(){let D=!1,ht=!1,q=null,J=null,pt=null;return{setReversed:function(dt){if(ht!==dt){const Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const xe=pt;pt=null,this.setClear(xe)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?at(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(dt){q!==dt&&!D&&(s.depthMask(dt),q=dt)},setFunc:function(dt){if(ht&&(dt=h0[dt]),J!==dt){switch(dt){case bo:s.depthFunc(s.NEVER);break;case So:s.depthFunc(s.ALWAYS);break;case wo:s.depthFunc(s.LESS);break;case Xn:s.depthFunc(s.LEQUAL);break;case Eo:s.depthFunc(s.EQUAL);break;case To:s.depthFunc(s.GEQUAL);break;case Ao:s.depthFunc(s.GREATER);break;case Co:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=dt}},setLocked:function(dt){D=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),s.clearDepth(dt),pt=dt)},reset:function(){D=!1,q=null,J=null,pt=null,ht=!1}}}function n(){let D=!1,ht=null,q=null,J=null,pt=null,dt=null,Nt=null,xe=null,Be=null;return{setTest:function(re){D||(re?at(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(re){ht!==re&&!D&&(s.stencilMask(re),ht=re)},setFunc:function(re,ii,xi){(q!==re||J!==ii||pt!==xi)&&(s.stencilFunc(re,ii,xi),q=re,J=ii,pt=xi)},setOp:function(re,ii,xi){(dt!==re||Nt!==ii||xe!==xi)&&(s.stencilOp(re,ii,xi),dt=re,Nt=ii,xe=xi)},setLocked:function(re){D=re},setClear:function(re){Be!==re&&(s.clearStencil(re),Be=re)},reset:function(){D=!1,ht=null,q=null,J=null,pt=null,dt=null,Nt=null,xe=null,Be=null}}}const r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,S=null,M=null,I=null,E=null,y=new W(0,0,0),A=0,v=!1,x=null,L=null,O=null,B=null,X=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=$>=2);let et=null,rt={};const tt=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Qt=new le().fromArray(tt),K=new le().fromArray(Dt);function it(D,ht,q,J){const pt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<q;Nt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ht+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return dt}const xt={};xt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(s.DEPTH_TEST),o.setFunc(Xn),qt(!1),Yt(Ha),at(s.CULL_FACE),F(Ri);function at(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Pt(D,ht){return u[D]!==ht?(s.bindFramebuffer(D,ht),u[D]=ht,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Bt(D,ht){let q=f,J=!1;if(D){q=d.get(ht),q===void 0&&(q=[],d.set(ht,q));const pt=D.textures;if(q.length!==pt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Nt=pt.length;dt<Nt;dt++)q[dt]=s.COLOR_ATTACHMENT0+dt;q.length=pt.length,J=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,J=!0);J&&s.drawBuffers(q)}function he(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Gt={[ln]:s.FUNC_ADD,[vh]:s.FUNC_SUBTRACT,[xh]:s.FUNC_REVERSE_SUBTRACT};Gt[Mh]=s.MIN,Gt[yh]=s.MAX;const we={[bh]:s.ZERO,[Sh]:s.ONE,[wh]:s.SRC_COLOR,[Mo]:s.SRC_ALPHA,[Ph]:s.SRC_ALPHA_SATURATE,[Ch]:s.DST_COLOR,[Th]:s.DST_ALPHA,[Eh]:s.ONE_MINUS_SRC_COLOR,[yo]:s.ONE_MINUS_SRC_ALPHA,[Rh]:s.ONE_MINUS_DST_COLOR,[Ah]:s.ONE_MINUS_DST_ALPHA,[Lh]:s.CONSTANT_COLOR,[Ih]:s.ONE_MINUS_CONSTANT_COLOR,[Dh]:s.CONSTANT_ALPHA,[Uh]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,ht,q,J,pt,dt,Nt,xe,Be,re){if(D===Ri){_===!0&&(Tt(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),D!==_h){if(D!==m||re!==v){if((p!==ln||M!==ln)&&(s.blendEquation(s.FUNC_ADD),p=ln,M=ln),re)switch(D){case On:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Me:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ga:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case On:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Me:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ga:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,S=null,I=null,E=null,y.set(0,0,0),A=0,m=D,v=re}return}pt=pt||ht,dt=dt||q,Nt=Nt||J,(ht!==p||pt!==M)&&(s.blendEquationSeparate(Gt[ht],Gt[pt]),p=ht,M=pt),(q!==w||J!==S||dt!==I||Nt!==E)&&(s.blendFuncSeparate(we[q],we[J],we[dt],we[Nt]),w=q,S=J,I=dt,E=Nt),(xe.equals(y)===!1||Be!==A)&&(s.blendColor(xe.r,xe.g,xe.b,Be),y.copy(xe),A=Be),m=D,v=!1}function Je(D,ht){D.side===ai?Tt(s.CULL_FACE):at(s.CULL_FACE);let q=D.side===Ne;ht&&(q=!q),qt(q),D.blending===On&&D.transparent===!1?F(Ri):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function Yt(D){D!==ph?(at(s.CULL_FACE),D!==L&&(D===Ha?s.cullFace(s.BACK):D===mh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),L=D}function Ct(D){D!==O&&(k&&s.lineWidth(D),O=D)}function pe(D,ht,q){D?(at(s.POLYGON_OFFSET_FILL),(B!==ht||X!==q)&&(s.polygonOffset(ht,q),B=ht,X=q)):Tt(s.POLYGON_OFFSET_FILL)}function At(D){D?at(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+Y-1),et!==D&&(s.activeTexture(D),et=D)}function b(D,ht,q){q===void 0&&(et===null?q=s.TEXTURE0+Y-1:q=et);let J=rt[q];J===void 0&&(J={type:void 0,texture:void 0},rt[q]=J),(J.type!==D||J.texture!==ht)&&(et!==q&&(s.activeTexture(q),et=q),s.bindTexture(D,ht||xt[D]),J.type=D,J.texture=ht)}function z(){const D=rt[et];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){Qt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function vt(D){K.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function $t(D,ht){let q=c.get(ht);q===void 0&&(q=new WeakMap,c.set(ht,q));let J=q.get(D);J===void 0&&(J=s.getUniformBlockIndex(ht,D.name),q.set(D,J))}function Ot(D,ht){const J=c.get(ht).get(D);l.get(ht)!==J&&(s.uniformBlockBinding(ht,J,D.__bindingPointIndex),l.set(ht,J))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},et=null,rt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,S=null,M=null,I=null,E=null,y=new W(0,0,0),A=0,v=!1,x=null,L=null,O=null,B=null,X=null,Qt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Tt,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:he,setBlending:F,setMaterial:Je,setFlipSided:qt,setCullFace:Yt,setLineWidth:Ct,setPolygonOffset:pe,setScissorTest:At,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:_t,texImage3D:Rt,updateUBOMapping:$t,uniformBlockBinding:Ot,texStorage2D:Jt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Lt,viewport:vt,reset:ue}}function kl(s,t,e,i){const n=d0(i);switch(e){case _c:return s*t;case xc:return s*t;case Mc:return s*t*2;case yc:return s*t/n.components*n.byteLength;case fa:return s*t/n.components*n.byteLength;case bc:return s*t*2/n.components*n.byteLength;case pa:return s*t*2/n.components*n.byteLength;case vc:return s*t*3/n.components*n.byteLength;case li:return s*t*4/n.components*n.byteLength;case ma:return s*t*4/n.components*n.byteLength;case or:case ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Fo:return Math.max(s,16)*Math.max(t,8)/4;case Do:case No:return Math.max(s,8)*Math.max(t,8)/2;case ko:case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case hr:case ta:case ea:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sc:case ia:return Math.ceil(s/4)*Math.ceil(t/4)*8;case na:case sa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(s){switch(s){case Ui:case pc:return{byteLength:1,components:1};case Ms:case mc:case Pi:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case dn:case ha:case Ai:return{byteLength:4,components:1};case gc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function f0(s,t,e,i,n,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):mr("canvas")}function _(R,b,z){let j=1;const Q=At(R);if((Q.width>z||Q.height>z)&&(j=z/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(j*Q.width),wt=Math.floor(j*Q.height);u===void 0&&(u=g(Z,wt));const ut=b?g(Z,wt):u;return ut.width=Z,ut.height=wt,ut.getContext("2d").drawImage(R,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+wt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(R,b,z,j,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),b===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),b===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),b===s.RGBA){const wt=Q?Sr:Kt.getTransfer(j);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=wt===ae?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(R,b){let z;return R?b===null||b===dn||b===$n?z=s.DEPTH24_STENCIL8:b===Ai?z=s.DEPTH32F_STENCIL8:b===Ms&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===dn||b===$n?z=s.DEPTH_COMPONENT24:b===Ai?z=s.DEPTH_COMPONENT32F:b===Ms&&(z=s.DEPTH_COMPONENT16),z}function I(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ui&&R.minFilter!==_i?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),A(b),b.isVideoTexture&&h.delete(b)}function y(R){const b=R.target;b.removeEventListener("dispose",y),x(b)}function A(R){const b=i.get(R);if(b.__webglInit===void 0)return;const z=R.source,j=d.get(z);if(j){const Q=j[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(R),Object.keys(j).length===0&&d.delete(z)}i.remove(R)}function v(R){const b=i.get(R);s.deleteTexture(b.__webglTexture);const z=R.source,j=d.get(z);delete j[b.__cacheKey],o.memory.textures--}function x(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Q=0;Q<b.__webglFramebuffer[j].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[j][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)s.deleteFramebuffer(b.__webglFramebuffer[j]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,Q=z.length;j<Q;j++){const Z=i.get(z[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[j])}i.remove(R)}let L=0;function O(){L=0}function B(){const R=L;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),L+=1,R}function X(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Y(R,b){const z=i.get(R);if(R.isVideoTexture&&Ct(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,R,b);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function k(R,b){const z=i.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function $(R,b){const z=i.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,b);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function H(R,b){const z=i.get(R);if(R.version>0&&z.__version!==R.version){it(z,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}const et={[Lo]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[Io]:s.MIRRORED_REPEAT},rt={[ui]:s.NEAREST,[Bh]:s.NEAREST_MIPMAP_NEAREST,[Rs]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[Pr]:s.LINEAR_MIPMAP_NEAREST,[un]:s.LINEAR_MIPMAP_LINEAR},tt={[Vh]:s.NEVER,[$h]:s.ALWAYS,[Gh]:s.LESS,[Ec]:s.LEQUAL,[Wh]:s.EQUAL,[Yh]:s.GEQUAL,[Xh]:s.GREATER,[qh]:s.NOTEQUAL};function Dt(R,b){if(b.type===Ai&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===_i||b.magFilter===Pr||b.magFilter===Rs||b.magFilter===un||b.minFilter===_i||b.minFilter===Pr||b.minFilter===Rs||b.minFilter===un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,et[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,et[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,et[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,rt[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ui||b.minFilter!==Rs&&b.minFilter!==un||b.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const j=b.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const Z=X(b);if(Z!==R.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Z].usedTimes++;const wt=Q[R.__cacheKey];wt!==void 0&&(Q[R.__cacheKey].usedTimes--,wt.usedTimes===0&&v(b)),R.__cacheKey=Z,R.__webglTexture=Q[Z].texture}return z}function K(R,b,z){let j=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=s.TEXTURE_3D);const Q=Qt(R,b),Z=b.source;e.bindTexture(j,R.__webglTexture,s.TEXTURE0+z);const wt=i.get(Z);if(Z.version!==wt.__version||Q===!0){e.activeTexture(s.TEXTURE0+z);const ut=Kt.getPrimaries(Kt.workingColorSpace),gt=b.colorSpace===qi?null:Kt.getPrimaries(b.colorSpace),Jt=b.colorSpace===qi||ut===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let nt=_(b.image,!1,n.maxTextureSize);nt=pe(b,nt);const _t=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type);let Lt=S(b.internalFormat,_t,Rt,b.colorSpace,b.isVideoTexture);Dt(j,b);let vt;const $t=b.mipmaps,Ot=b.isVideoTexture!==!0,ue=wt.__version===void 0||Q===!0,D=Z.dataReady,ht=I(b,nt);if(b.isDepthTexture)Lt=M(b.format===Kn,b.type),ue&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Lt,nt.width,nt.height,0,_t,Rt,null));else if(b.isDataTexture)if($t.length>0){Ot&&ue&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,$t[0].width,$t[0].height);for(let q=0,J=$t.length;q<J;q++)vt=$t[q],Ot?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(s.TEXTURE_2D,q,Lt,vt.width,vt.height,0,_t,Rt,vt.data);b.generateMipmaps=!1}else Ot?(ue&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,nt.width,nt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,_t,Rt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,nt.width,nt.height,0,_t,Rt,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Lt,$t[0].width,$t[0].height,nt.depth);for(let q=0,J=$t.length;q<J;q++)if(vt=$t[q],b.format!==li)if(_t!==null)if(Ot){if(D)if(b.layerUpdates.size>0){const pt=kl(vt.width,vt.height,b.format,b.type);for(const dt of b.layerUpdates){const Nt=vt.data.subarray(dt*pt/vt.data.BYTES_PER_ELEMENT,(dt+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,dt,vt.width,vt.height,1,_t,Nt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,nt.depth,_t,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,nt.depth,_t,Rt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,nt.depth,0,_t,Rt,vt.data)}else{Ot&&ue&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,$t[0].width,$t[0].height);for(let q=0,J=$t.length;q<J;q++)vt=$t[q],b.format!==li?_t!==null?Ot?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(s.TEXTURE_2D,q,Lt,vt.width,vt.height,0,_t,Rt,vt.data)}else if(b.isDataArrayTexture)if(Ot){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Lt,nt.width,nt.height,nt.depth),D)if(b.layerUpdates.size>0){const q=kl(nt.width,nt.height,b.format,b.type);for(const J of b.layerUpdates){const pt=nt.data.subarray(J*q/nt.data.BYTES_PER_ELEMENT,(J+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,_t,Rt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,_t,Rt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,_t,Rt,nt.data);else if(b.isData3DTexture)Ot?(ue&&e.texStorage3D(s.TEXTURE_3D,ht,Lt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,_t,Rt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,_t,Rt,nt.data);else if(b.isFramebufferTexture){if(ue)if(Ot)e.texStorage2D(s.TEXTURE_2D,ht,Lt,nt.width,nt.height);else{let q=nt.width,J=nt.height;for(let pt=0;pt<ht;pt++)e.texImage2D(s.TEXTURE_2D,pt,Lt,q,J,0,_t,Rt,null),q>>=1,J>>=1}}else if($t.length>0){if(Ot&&ue){const q=At($t[0]);e.texStorage2D(s.TEXTURE_2D,ht,Lt,q.width,q.height)}for(let q=0,J=$t.length;q<J;q++)vt=$t[q],Ot?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t,Rt,vt):e.texImage2D(s.TEXTURE_2D,q,Lt,_t,Rt,vt);b.generateMipmaps=!1}else if(Ot){if(ue){const q=At(nt);e.texStorage2D(s.TEXTURE_2D,ht,Lt,q.width,q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Rt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Lt,_t,Rt,nt);m(b)&&p(j),wt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function it(R,b,z){if(b.image.length!==6)return;const j=Qt(R,b),Q=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);const Z=i.get(Q);if(Q.version!==Z.__version||j===!0){e.activeTexture(s.TEXTURE0+z);const wt=Kt.getPrimaries(Kt.workingColorSpace),ut=b.colorSpace===qi?null:Kt.getPrimaries(b.colorSpace),gt=b.colorSpace===qi||wt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!Jt&&!nt?_t[J]=_(b.image[J],!0,n.maxCubemapSize):_t[J]=nt?b.image[J].image:b.image[J],_t[J]=pe(b,_t[J]);const Rt=_t[0],Lt=r.convert(b.format,b.colorSpace),vt=r.convert(b.type),$t=S(b.internalFormat,Lt,vt,b.colorSpace),Ot=b.isVideoTexture!==!0,ue=Z.__version===void 0||j===!0,D=Q.dataReady;let ht=I(b,Rt);Dt(s.TEXTURE_CUBE_MAP,b);let q;if(Jt){Ot&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,$t,Rt.width,Rt.height);for(let J=0;J<6;J++){q=_t[J].mipmaps;for(let pt=0;pt<q.length;pt++){const dt=q[pt];b.format!==li?Lt!==null?Ot?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,$t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Lt,vt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,$t,dt.width,dt.height,0,Lt,vt,dt.data)}}}else{if(q=b.mipmaps,Ot&&ue){q.length>0&&ht++;const J=At(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,$t,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,Lt,vt,_t[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,_t[J].width,_t[J].height,0,Lt,vt,_t[J].data);for(let pt=0;pt<q.length;pt++){const Nt=q[pt].image[J].image;Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Nt.width,Nt.height,Lt,vt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,$t,Nt.width,Nt.height,0,Lt,vt,Nt.data)}}else{Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,vt,_t[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,Lt,vt,_t[J]);for(let pt=0;pt<q.length;pt++){const dt=q[pt];Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Lt,vt,dt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,$t,Lt,vt,dt.image[J])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function xt(R,b,z,j,Q,Z){const wt=r.convert(z.format,z.colorSpace),ut=r.convert(z.type),gt=S(z.internalFormat,wt,ut,z.colorSpace),Jt=i.get(b),nt=i.get(z);if(nt.__renderTarget=b,!Jt.__hasExternalTextures){const _t=Math.max(1,b.width>>Z),Rt=Math.max(1,b.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,gt,_t,Rt,b.depth,0,wt,ut,null):e.texImage2D(Q,Z,gt,_t,Rt,0,wt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Yt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Q,nt.__webglTexture,0,qt(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Q,nt.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(R,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){const j=b.depthTexture,Q=j&&j.isDepthTexture?j.type:null,Z=M(b.stencilBuffer,Q),wt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=qt(b);Yt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Z,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Z,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Z,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,R)}else{const j=b.textures;for(let Q=0;Q<j.length;Q++){const Z=j[Q],wt=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),gt=S(Z.internalFormat,wt,ut,Z.colorSpace),Jt=qt(b);z&&Yt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,gt,b.width,b.height):Yt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,gt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const Q=j.__webglTexture,Z=qt(b);if(b.depthTexture.format===zn)Yt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Kn)Yt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(R){const b=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=j}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Tt(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=s.createRenderbuffer(),at(b.__webglDepthbuffer[j],R,!1);else{const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),at(b.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(R,b,z){const j=i.get(R);b!==void 0&&xt(j.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Pt(R)}function he(R){const b=R.texture,z=i.get(R),j=i.get(b);R.addEventListener("dispose",y);const Q=R.textures,Z=R.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=b.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let gt=0;gt<b.mipmaps.length;gt++)z.__webglFramebuffer[ut][gt]=s.createFramebuffer()}else z.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)z.__webglFramebuffer[ut]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ut=0,gt=Q.length;ut<gt;ut++){const Jt=i.get(Q[ut]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Yt(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const gt=Q[ut];z.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const Jt=r.convert(gt.format,gt.colorSpace),nt=r.convert(gt.type),_t=S(gt.internalFormat,Jt,nt,gt.colorSpace,R.isXRRenderTarget===!0),Rt=qt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,_t,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),at(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)xt(z.__webglFramebuffer[ut][gt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else xt(z.__webglFramebuffer[ut],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ut=0,gt=Q.length;ut<gt;ut++){const Jt=Q[ut],nt=i.get(Jt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Dt(s.TEXTURE_2D,Jt),xt(z.__webglFramebuffer,R,Jt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),Dt(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)xt(z.__webglFramebuffer[gt],R,b,s.COLOR_ATTACHMENT0,ut,gt);else xt(z.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,ut,0);m(b)&&p(ut),e.unbindTexture()}R.depthBuffer&&Pt(R)}function Gt(R){const b=R.textures;for(let z=0,j=b.length;z<j;z++){const Q=b[z];if(m(Q)){const Z=w(R),wt=i.get(Q).__webglTexture;e.bindTexture(Z,wt),p(Z),e.unbindTexture()}}}const we=[],F=[];function Je(R){if(R.samples>0){if(Yt(R)===!1){const b=R.textures,z=R.width,j=R.height;let Q=s.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=i.get(R),ut=b.length>1;if(ut)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);const Jt=i.get(b[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,z,j,0,0,z,j,Q,s.NEAREST),l===!0&&(we.length=0,F.length=0,we.push(s.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(Z),F.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);const Jt=i.get(b[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function qt(R){return Math.min(n.maxSamples,R.samples)}function Yt(R){const b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ct(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function pe(R,b){const z=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==ts&&z!==qi&&(Kt.getTransfer(z)===ae?(j!==li||Q!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Yt}function p0(s,t){function e(i,n=qi){let r;const o=Kt.getTransfer(n);if(i===Ui)return s.UNSIGNED_BYTE;if(i===ua)return s.UNSIGNED_SHORT_4_4_4_4;if(i===da)return s.UNSIGNED_SHORT_5_5_5_1;if(i===gc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===pc)return s.BYTE;if(i===mc)return s.SHORT;if(i===Ms)return s.UNSIGNED_SHORT;if(i===ha)return s.INT;if(i===dn)return s.UNSIGNED_INT;if(i===Ai)return s.FLOAT;if(i===Pi)return s.HALF_FLOAT;if(i===_c)return s.ALPHA;if(i===vc)return s.RGB;if(i===li)return s.RGBA;if(i===xc)return s.LUMINANCE;if(i===Mc)return s.LUMINANCE_ALPHA;if(i===zn)return s.DEPTH_COMPONENT;if(i===Kn)return s.DEPTH_STENCIL;if(i===yc)return s.RED;if(i===fa)return s.RED_INTEGER;if(i===bc)return s.RG;if(i===pa)return s.RG_INTEGER;if(i===ma)return s.RGBA_INTEGER;if(i===or||i===ar||i===lr||i===cr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Do||i===Uo||i===No||i===Fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===Bo||i===Oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ko||i===Bo)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zo||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo||i===jo||i===Jo||i===Qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ho)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Go)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$o)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hr||i===ta||i===ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===hr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sc||i===ia||i===na||i===sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$n?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class m0 extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ne extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g0={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const _0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v0=`
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

}`;class x0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ye,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ve({vertexShader:_0,fragmentShader:v0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new C(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M0 extends es{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new x0,m=e.getContextAttributes();let p=null,w=null;const S=[],M=[],I=new ct;let E=null;const y=new We;y.viewport=new le;const A=new We;A.viewport=new le;const v=[y,A],x=new m0;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=S[K];return it===void 0&&(it=new no,S[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=S[K];return it===void 0&&(it=new no,S[K]=it),it.getGripSpace()},this.getHand=function(K){let it=S[K];return it===void 0&&(it=new no,S[K]=it),it.getHandSpace()};function B(K){const it=M.indexOf(K.inputSource);if(it===-1)return;const xt=S[it];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||o),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",Y);for(let K=0;K<S.length;K++){const it=M[K];it!==null&&(M[K]=null,S[K].disconnect(it))}L=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,n=null,w=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",X),n.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),n.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,it),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new di(f.framebufferWidth,f.framebufferHeight,{format:li,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,xt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Kn:zn,xt=m.stencil?$n:dn);const Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Tt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new di(d.textureWidth,d.textureHeight,{format:li,type:Ui,depthTexture:new kc(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Qt.setContext(n),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(K){for(let it=0;it<K.removed.length;it++){const xt=K.removed[it],at=M.indexOf(xt);at>=0&&(M[at]=null,S[at].disconnect(xt))}for(let it=0;it<K.added.length;it++){const xt=K.added[it];let at=M.indexOf(xt);if(at===-1){for(let Pt=0;Pt<S.length;Pt++)if(Pt>=M.length){M.push(xt),at=Pt;break}else if(M[Pt]===null){M[Pt]=xt,at=Pt;break}if(at===-1)break}const Tt=S[at];Tt&&Tt.connect(xt)}}const k=new P,$=new P;function H(K,it,xt){k.setFromMatrixPosition(it.matrixWorld),$.setFromMatrixPosition(xt.matrixWorld);const at=k.distanceTo($),Tt=it.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,Bt=Tt[14]/(Tt[10]-1),he=Tt[14]/(Tt[10]+1),Gt=(Tt[9]+1)/Tt[5],we=(Tt[9]-1)/Tt[5],F=(Tt[8]-1)/Tt[0],Je=(Pt[8]+1)/Pt[0],qt=Bt*F,Yt=Bt*Je,Ct=at/(-F+Je),pe=Ct*-F;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pe),K.translateZ(Ct),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const At=Bt+Ct,R=he+Ct,b=qt-pe,z=Yt+(at-pe),j=Gt*he/R*At,Q=we*he/R*At;K.projectionMatrix.makePerspective(b,z,j,Q,At,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function et(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let it=K.near,xt=K.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),x.near=A.near=y.near=it,x.far=A.far=y.far=xt,(L!==x.near||O!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,O=x.far),y.layers.mask=K.layers.mask|2,A.layers.mask=K.layers.mask|4,x.layers.mask=y.layers.mask|A.layers.mask;const at=K.parent,Tt=x.cameras;et(x,at);for(let Pt=0;Pt<Tt.length;Pt++)et(Tt[Pt],at);Tt.length===2?H(x,y,A):x.projectionMatrix.copy(y.projectionMatrix),rt(K,x,at)};function rt(K,it,xt){xt===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Zn*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let tt=null;function Dt(K,it){if(h=it.getViewerPose(c||o),g=it,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let at=!1;xt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Pt=0;Pt<xt.length;Pt++){const Bt=xt[Pt];let he=null;if(f!==null)he=f.getViewport(Bt);else{const we=u.getViewSubImage(d,Bt);he=we.viewport,Pt===0&&(t.setRenderTargetTextures(w,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(w))}let Gt=v[Pt];Gt===void 0&&(Gt=new We,Gt.layers.enable(Pt),Gt.viewport=new le,v[Pt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(x.matrix.copy(Gt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Gt)}const Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Pt=u.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,n.renderState)}}for(let xt=0;xt<S.length;xt++){const at=M[xt],Tt=S[xt];at!==null&&Tt!==void 0&&Tt.update(at,it,c||o)}tt&&tt(K,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}const Qt=new Fc;Qt.setAnimationLoop(Dt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const sn=new vi,y0=new fe;function b0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,w,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ne&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ne&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),S=w.envMap,M=w.envMapRotation;S&&(m.envMap.value=S,sn.copy(M),sn.x*=-1,sn.y*=-1,sn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),m.envMapRotation.value.setFromMatrix4(y0.makeRotationFromEuler(sn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function S0(s,t,e,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const M=S.program;i.uniformBlockBinding(w,M)}function c(w,S){let M=n[w.id];M===void 0&&(g(w),M=h(w),n[w.id]=M,w.addEventListener("dispose",m));const I=S.program;i.updateUBOMapping(w,I);const E=t.render.frame;r[w.id]!==E&&(d(w),r[w.id]=E)}function h(w){const S=u();w.__bindingPointIndex=S;const M=s.createBuffer(),I=w.__size,E=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,I,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const S=n[w.id],M=w.uniforms,I=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,y=M.length;E<y;E++){const A=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,x=A.length;v<x;v++){const L=A[v];if(f(L,E,v,I)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let Y=0;Y<B.length;Y++){const k=B[Y],$=_(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,O+X,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,S,M,I){const E=w.value,y=S+"_"+M;if(I[y]===void 0)return typeof E=="number"||typeof E=="boolean"?I[y]=E:I[y]=E.clone(),!0;{const A=I[y];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return I[y]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(w){const S=w.uniforms;let M=0;const I=16;for(let y=0,A=S.length;y<A;y++){const v=Array.isArray(S[y])?S[y]:[S[y]];for(let x=0,L=v.length;x<L;x++){const O=v[x],B=Array.isArray(O.value)?O.value:[O.value];for(let X=0,Y=B.length;X<Y;X++){const k=B[X],$=_(k),H=M%I,et=H%$.boundary,rt=H+et;M+=et,rt!==0&&I-rt<$.storage&&(M+=I-rt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=$.storage}}}const E=M%I;return E>0&&(M+=I-E),w.__size=M,w.__cache={},this}function _(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function p(){for(const w in n)s.deleteBuffer(n[w]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}class w0{constructor(t={}){const{canvas:e=du(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=Yi,this.toneMappingExposure=1;const M=this;let I=!1,E=0,y=0,A=null,v=-1,x=null;const L=new le,O=new le;let B=null;const X=new W(0);let Y=0,k=e.width,$=e.height,H=1,et=null,rt=null;const tt=new le(0,0,k,$),Dt=new le(0,0,k,$);let Qt=!1;const K=new va;let it=!1,xt=!1;const at=new fe,Tt=new fe,Pt=new P,Bt=new le,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function we(){return A===null?H:1}let F=i;function Je(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),F===null){const U="webgl2";if(F=Je(U,T),F===null)throw Je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let qt,Yt,Ct,pe,At,R,b,z,j,Q,Z,wt,ut,gt,Jt,nt,_t,Rt,Lt,vt,$t,Ot,ue,D;function ht(){qt=new Rp(F),qt.init(),Ot=new p0(F,qt),Yt=new Sp(F,qt,t,Ot),Ct=new u0(F,qt),Yt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),pe=new Ip(F),At=new Zm,R=new f0(F,qt,Ct,At,Yt,Ot,pe),b=new Ep(M),z=new Cp(M),j=new Bu(F),ue=new yp(F,j),Q=new Pp(F,j,pe,ue),Z=new Up(F,Q,j,pe),Lt=new Dp(F,Yt,R),nt=new wp(At),wt=new Km(M,b,z,qt,Yt,ue,nt),ut=new b0(M,At),gt=new Jm,Jt=new s0(qt),Rt=new Mp(M,b,z,Ct,Z,f,l),_t=new c0(M,Z,Yt),D=new S0(F,pe,Yt,Ct),vt=new bp(F,qt,pe),$t=new Lp(F,qt,pe),pe.programs=wt.programs,M.capabilities=Yt,M.extensions=qt,M.properties=At,M.renderLists=gt,M.shadowMap=_t,M.state=Ct,M.info=pe}ht();const q=new M0(M,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(k,$,!1))},this.getSize=function(T){return T.set(k,$)},this.setSize=function(T,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,$=U,e.width=Math.floor(T*H),e.height=Math.floor(U*H),V===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(k*H,$*H).floor()},this.setDrawingBufferSize=function(T,U,V){k=T,$=U,H=V,e.width=Math.floor(T*V),e.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(tt)},this.setViewport=function(T,U,V,G){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,U,V,G),Ct.viewport(L.copy(tt).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Dt)},this.setScissor=function(T,U,V,G){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,U,V,G),Ct.scissor(O.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(T){Ct.setScissorTest(Qt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(T=!0,U=!0,V=!0){let G=0;if(T){let N=!1;if(A!==null){const st=A.texture.format;N=st===ma||st===pa||st===fa}if(N){const st=A.texture.type,ft=st===Ui||st===dn||st===Ms||st===$n||st===ua||st===da,Mt=Rt.getClearColor(),yt=Rt.getClearAlpha(),It=Mt.r,Ft=Mt.g,bt=Mt.b;ft?(g[0]=It,g[1]=Ft,g[2]=bt,g[3]=yt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=It,_[1]=Ft,_[2]=bt,_[3]=yt,F.clearBufferiv(F.COLOR,0,_))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),V&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Jt.dispose(),At.dispose(),b.dispose(),z.dispose(),Z.dispose(),ue.dispose(),D.dispose(),wt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Da),q.removeEventListener("sessionend",Ua),ji.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=pe.autoReset,U=_t.enabled,V=_t.autoUpdate,G=_t.needsUpdate,N=_t.type;ht(),pe.autoReset=T,_t.enabled=U,_t.autoUpdate=V,_t.needsUpdate=G,_t.type=N}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nt(T){const U=T.target;U.removeEventListener("dispose",Nt),xe(U)}function xe(T){Be(T),At.remove(T)}function Be(T){const U=At.get(T).programs;U!==void 0&&(U.forEach(function(V){wt.releaseProgram(V)}),T.isShaderMaterial&&wt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,G,N,st){U===null&&(U=he);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Mt=uh(T,U,V,G,N);Ct.setMaterial(G,ft);let yt=V.index,It=1;if(G.wireframe===!0){if(yt=Q.getWireframeAttribute(V),yt===void 0)return;It=2}const Ft=V.drawRange,bt=V.attributes.position;let te=Ft.start*It,de=(Ft.start+Ft.count)*It;st!==null&&(te=Math.max(te,st.start*It),de=Math.min(de,(st.start+st.count)*It)),yt!==null?(te=Math.max(te,0),de=Math.min(de,yt.count)):bt!=null&&(te=Math.max(te,0),de=Math.min(de,bt.count));const me=de-te;if(me<0||me===1/0)return;ue.setup(N,G,Mt,V,yt);let qe,ee=vt;if(yt!==null&&(qe=j.get(yt),ee=$t,ee.setIndex(qe)),N.isMesh)G.wireframe===!0?(Ct.setLineWidth(G.wireframeLinewidth*we()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(N.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),Ct.setLineWidth(Et*we()),N.isLineSegments?ee.setMode(F.LINES):N.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else N.isPoints?ee.setMode(F.POINTS):N.isSprite&&ee.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,Mi=N._multiDrawCounts,ie=N._multiDrawCount,ni=yt?j.get(yt).bytesPerElement:1,_n=At.get(G).currentProgram.getUniforms();for(let $e=0;$e<ie;$e++)_n.setValue(F,"_gl_DrawID",$e),ee.render(Et[$e]/ni,Mi[$e])}else if(N.isInstancedMesh)ee.renderInstances(te,me,N.count);else if(V.isInstancedBufferGeometry){const Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mi=Math.min(V.instanceCount,Et);ee.renderInstances(te,me,Mi)}else ee.render(te,me)};function re(T,U,V){T.transparent===!0&&T.side===ai&&T.forceSinglePass===!1?(T.side=Ne,T.needsUpdate=!0,Cs(T,U,V),T.side=$i,T.needsUpdate=!0,Cs(T,U,V),T.side=ai):Cs(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),p=Jt.get(V),p.init(U),S.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==V&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const Mt=st[ft];re(Mt,V,N),G.add(Mt)}else re(st,V,N),G.add(st)}),S.pop(),p=null,G},this.compileAsync=function(T,U,V=null){const G=this.compile(T,U,V);return new Promise(N=>{function st(){if(G.forEach(function(ft){At.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){N(T);return}setTimeout(st,10)}qt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ii=null;function xi(T){ii&&ii(T)}function Da(){ji.stop()}function Ua(){ji.start()}const ji=new Fc;ji.setAnimationLoop(xi),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(T){ii=T,q.setAnimationLoop(T),T===null?ji.stop():ji.start()},q.addEventListener("sessionstart",Da),q.addEventListener("sessionend",Ua),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,U,A),p=Jt.get(T,S.length),p.init(U),S.push(p),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Tt),xt=this.localClippingEnabled,it=nt.init(this.clippingPlanes,xt),m=gt.get(T,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){const st=M.xr.getDepthSensingMesh();st!==null&&Rr(st,U,-1/0,M.sortObjects)}Rr(T,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(et,rt),Gt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Gt&&Rt.addToRenderList(m,T),this.info.render.frame++,it===!0&&nt.beginShadows();const V=p.state.shadowsArray;_t.render(V,T,U),it===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let ft=0,Mt=st.length;ft<Mt;ft++){const yt=st[ft];Fa(G,N,T,yt)}Gt&&Rt.render(T);for(let ft=0,Mt=st.length;ft<Mt;ft++){const yt=st[ft];Na(m,T,yt,yt.viewport)}}else N.length>0&&Fa(G,N,T,U),Gt&&Rt.render(T),Na(m,T,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(M,T,U),ue.resetDefaultState(),v=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&nt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Rr(T,U,V,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){G&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Tt);const ft=Z.update(T),Mt=T.material;Mt.visible&&m.push(T,ft,Mt,V,Bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const ft=Z.update(T),Mt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Bt.copy(ft.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(Tt)),Array.isArray(Mt)){const yt=ft.groups;for(let It=0,Ft=yt.length;It<Ft;It++){const bt=yt[It],te=Mt[bt.materialIndex];te&&te.visible&&m.push(T,ft,te,V,Bt.z,bt)}}else Mt.visible&&m.push(T,ft,Mt,V,Bt.z,null)}}const st=T.children;for(let ft=0,Mt=st.length;ft<Mt;ft++)Rr(st[ft],U,V,G)}function Na(T,U,V,G){const N=T.opaque,st=T.transmissive,ft=T.transparent;p.setupLightsView(V),it===!0&&nt.setGlobalState(M.clippingPlanes,V),G&&Ct.viewport(L.copy(G)),N.length>0&&As(N,U,V),st.length>0&&As(st,U,V),ft.length>0&&As(ft,U,V),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Fa(T,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new di(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Pi:Ui,minFilter:un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const st=p.state.transmissionRenderTarget[G.id],ft=G.viewport||L;st.setSize(ft.z,ft.w);const Mt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(X),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),Gt&&Rt.render(V);const yt=M.toneMapping;M.toneMapping=Yi;const It=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),it===!0&&nt.setGlobalState(M.clippingPlanes,G),As(T,V,G),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let bt=0,te=U.length;bt<te;bt++){const de=U[bt],me=de.object,qe=de.geometry,ee=de.material,Et=de.group;if(ee.side===ai&&me.layers.test(G.layers)){const Mi=ee.side;ee.side=Ne,ee.needsUpdate=!0,ka(me,V,G,qe,ee,Et),ee.side=Mi,ee.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}M.setRenderTarget(Mt),M.setClearColor(X,Y),It!==void 0&&(G.viewport=It),M.toneMapping=yt}function As(T,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=T.length;N<st;N++){const ft=T[N],Mt=ft.object,yt=ft.geometry,It=G===null?ft.material:G,Ft=ft.group;Mt.layers.test(V.layers)&&ka(Mt,U,V,yt,It,Ft)}}function ka(T,U,V,G,N,st){T.onBeforeRender(M,U,V,G,N,st),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(M,U,V,G,T,st),N.transparent===!0&&N.side===ai&&N.forceSinglePass===!1?(N.side=Ne,N.needsUpdate=!0,M.renderBufferDirect(V,U,G,N,T,st),N.side=$i,N.needsUpdate=!0,M.renderBufferDirect(V,U,G,N,T,st),N.side=ai):M.renderBufferDirect(V,U,G,N,T,st),T.onAfterRender(M,U,V,G,N,st)}function Cs(T,U,V){U.isScene!==!0&&(U=he);const G=At.get(T),N=p.state.lights,st=p.state.shadowsArray,ft=N.state.version,Mt=wt.getParameters(T,N.state,st,U,V),yt=wt.getProgramCacheKey(Mt);let It=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?z:b).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",Nt),It=new Map,G.programs=It);let Ft=It.get(yt);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===ft)return Oa(T,Mt),Ft}else Mt.uniforms=wt.getUniforms(T),T.onBeforeCompile(Mt,M),Ft=wt.acquireProgram(Mt,yt),It.set(yt,Ft),G.uniforms=Mt.uniforms;const bt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(bt.clippingPlanes=nt.uniform),Oa(T,Mt),G.needsLights=fh(T),G.lightsStateVersion=ft,G.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function Ba(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=ur.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Oa(T,U){const V=At.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function uh(T,U,V,G,N){U.isScene!==!0&&(U=he),R.resetTextureUnits();const st=U.fog,ft=G.isMeshStandardMaterial?U.environment:null,Mt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ts,yt=(G.isMeshStandardMaterial?z:b).get(G.envMap||ft),It=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!V.morphAttributes.position,te=!!V.morphAttributes.normal,de=!!V.morphAttributes.color;let me=Yi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=M.toneMapping);const qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=qe!==void 0?qe.length:0,Et=At.get(G),Mi=p.state.lights;if(it===!0&&(xt===!0||T!==x)){const Qe=T===x&&G.id===v;nt.setState(G,T,Qe)}let ie=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Mi.state.version||Et.outputColorSpace!==Mt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==yt||G.fog===!0&&Et.fog!==st||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==It||Et.vertexTangents!==Ft||Et.morphTargets!==bt||Et.morphNormals!==te||Et.morphColors!==de||Et.toneMapping!==me||Et.morphTargetsCount!==ee)&&(ie=!0):(ie=!0,Et.__version=G.version);let ni=Et.currentProgram;ie===!0&&(ni=Cs(G,U,N));let _n=!1,$e=!1,rs=!1;const ge=ni.getUniforms(),pi=Et.uniforms;if(Ct.useProgram(ni.program)&&(_n=!0,$e=!0,rs=!0),G.id!==v&&(v=G.id,$e=!0),_n||x!==T){Ct.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),pu(at),mu(at),ge.setValue(F,"projectionMatrix",at)):ge.setValue(F,"projectionMatrix",T.projectionMatrix),ge.setValue(F,"viewMatrix",T.matrixWorldInverse);const ki=ge.map.cameraPosition;ki!==void 0&&ki.setValue(F,Pt.setFromMatrixPosition(T.matrixWorld)),Yt.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,$e=!0,rs=!0)}if(N.isSkinnedMesh){ge.setOptional(F,N,"bindMatrix"),ge.setOptional(F,N,"bindMatrixInverse");const Qe=N.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ge.setValue(F,"boneTexture",Qe.boneTexture,R))}N.isBatchedMesh&&(ge.setOptional(F,N,"batchingTexture"),ge.setValue(F,"batchingTexture",N._matricesTexture,R),ge.setOptional(F,N,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",N._indirectTexture,R),ge.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",N._colorsTexture,R));const os=V.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Lt.update(N,V,ni),($e||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,ge.setValue(F,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pi.envMap.value=yt,pi.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(pi.envMapIntensity.value=U.environmentIntensity),$e&&(ge.setValue(F,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&dh(pi,rs),st&&G.fog===!0&&ut.refreshFogUniforms(pi,st),ut.refreshMaterialUniforms(pi,G,H,$,p.state.transmissionRenderTarget[T.id]),ur.upload(F,Ba(Et),pi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ur.upload(F,Ba(Et),pi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(F,"center",N.center),ge.setValue(F,"modelViewMatrix",N.modelViewMatrix),ge.setValue(F,"normalMatrix",N.normalMatrix),ge.setValue(F,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qe=G.uniformsGroups;for(let ki=0,Bi=Qe.length;ki<Bi;ki++){const za=Qe[ki];D.update(za,ni),D.bind(za,ni)}}return ni}function dh(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function fh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,V){At.get(T.texture).__webglTexture=U,At.get(T.depthTexture).__webglTexture=V;const G=At.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const V=At.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){A=T,E=U,y=V;let G=!0,N=null,st=!1,ft=!1;if(T){const yt=At.get(T);if(yt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(yt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(yt.__hasExternalTextures)R.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const bt=T.depthTexture;if(yt.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(T.width!==bt.image.width||T.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Ft=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][V]:N=Ft[U],st=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?N=At.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[V]:N=Ft,L.copy(T.viewport),O.copy(T.scissor),B=T.scissorTest}else L.copy(tt).multiplyScalar(H).floor(),O.copy(Dt).multiplyScalar(H).floor(),B=Qt;if(Ct.bindFramebuffer(F.FRAMEBUFFER,N)&&G&&Ct.drawBuffers(T,N),Ct.viewport(L),Ct.scissor(O),Ct.setScissorTest(B),st){const yt=At.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,V)}else if(ft){const yt=At.get(T.texture),It=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,yt.__webglTexture,V||0,It)}v=-1},this.readRenderTargetPixels=function(T,U,V,G,N,st,ft){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Ct.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const yt=T.texture,It=yt.format,Ft=yt.type;if(!Yt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&V>=0&&V<=T.height-N&&F.readPixels(U,V,G,N,Ot.convert(It),Ot.convert(Ft),st)}finally{const yt=A!==null?At.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(T,U,V,G,N,st,ft){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const yt=T.texture,It=yt.format,Ft=yt.type;if(!Yt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-G&&V>=0&&V<=T.height-N){Ct.bindFramebuffer(F.FRAMEBUFFER,Mt);const bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.bufferData(F.PIXEL_PACK_BUFFER,st.byteLength,F.STREAM_READ),F.readPixels(U,V,G,N,Ot.convert(It),Ot.convert(Ft),0);const te=A!==null?At.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,te);const de=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fu(F,de,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,st),F.deleteBuffer(bt),F.deleteSync(de),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,V=0){T.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(T.image.width*G),st=Math.floor(T.image.height*G),ft=U!==null?U.x:0,Mt=U!==null?U.y:0;R.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,ft,Mt,N,st),Ct.unbindTexture()},this.copyTextureToTexture=function(T,U,V=null,G=null,N=0){T.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let st,ft,Mt,yt,It,Ft,bt,te,de;const me=T.isCompressedTexture?T.mipmaps[N]:T.image;V!==null?(st=V.max.x-V.min.x,ft=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,It=V.min.y,Ft=V.isBox3?V.min.z:0):(st=me.width,ft=me.height,Mt=me.depth||1,yt=0,It=0,Ft=0),G!==null?(bt=G.x,te=G.y,de=G.z):(bt=0,te=0,de=0);const qe=Ot.convert(U.format),ee=Ot.convert(U.type);let Et;U.isData3DTexture?(R.setTexture3D(U,0),Et=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Et=F.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Mi=F.getParameter(F.UNPACK_ROW_LENGTH),ie=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ni=F.getParameter(F.UNPACK_SKIP_PIXELS),_n=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);const rs=T.isDataArrayTexture||T.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const pi=At.get(T),os=At.get(U),Qe=At.get(pi.__renderTarget),ki=At.get(os.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Bi=0;Bi<Mt;Bi++)rs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(T).__webglTexture,N,Ft+Bi),T.isDepthTexture?(ge&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(U).__webglTexture,N,de+Bi),F.blitFramebuffer(yt,It,st,ft,bt,te,st,ft,F.DEPTH_BUFFER_BIT,F.NEAREST)):ge?F.copyTexSubImage3D(Et,N,bt,te,de+Bi,yt,It,st,ft):F.copyTexSubImage2D(Et,N,bt,te,de+Bi,yt,It,st,ft);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Et,N,bt,te,de,st,ft,Mt,qe,ee,me.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,N,bt,te,de,st,ft,Mt,qe,me.data):F.texSubImage3D(Et,N,bt,te,de,st,ft,Mt,qe,ee,me):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,bt,te,st,ft,qe,ee,me.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,bt,te,me.width,me.height,qe,me.data):F.texSubImage2D(F.TEXTURE_2D,N,bt,te,st,ft,qe,ee,me);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ni),F.pixelStorei(F.UNPACK_SKIP_ROWS,_n),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),N===0&&U.generateMipmaps&&F.generateMipmap(Et),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V=null,G=null,N=0){return T.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,V,G,N)},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){E=0,y=0,A=null,Ct.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class ya{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new W(t),this.near=e,this.far=i}clone(){return new ya(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ba extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vc extends gn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _r=new P,vr=new P,Bl=new fe,us=new _a,Zs=new bs,so=new P,Ol=new P;class Gc extends Ce{constructor(t=new Pe,e=new Vc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)_r.fromBufferAttribute(e,n-1),vr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=_r.distanceTo(vr);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(n),Zs.radius+=r,t.ray.intersectsSphere(Zs)===!1)return;Bl.copy(n).invert(),us.copy(t.ray).applyMatrix4(Bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),w=h.getX(_+1),S=js(this,t,us,l,p,w);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=js(this,t,us,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=js(this,t,us,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=js(this,t,us,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function js(s,t,e,i,n,r){const o=s.geometry.attributes.position;if(_r.fromBufferAttribute(o,n),vr.fromBufferAttribute(o,r),e.distanceSqToSegment(_r,vr,so,Ol)>i)return;so.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(so);if(!(l<t.near||l>t.far))return{distance:l,point:Ol.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const zl=new P,Hl=new P;class E0 extends Gc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)zl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+zl.distanceTo(Hl);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class T0 extends gn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vl=new fe,oa=new _a,Js=new bs,Qs=new P;class Gl extends Ce{constructor(t=new Pe,e=new T0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(n),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Vl.copy(n).invert(),oa.copy(t.ray).applyMatrix4(Vl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Qs.fromBufferAttribute(u,m),Wl(Qs,m,l,n,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Qs.fromBufferAttribute(u,g),Wl(Qs,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wl(s,t,e,i,n,r,o){const a=oa.distanceSqToPoint(s);if(a<e){const l=new P;oa.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new ct:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,n=[],r=[],o=[],a=new P,l=new fe;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Fe(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wc extends Ni{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class A0 extends Wc{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sa(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+i*a}}}const tr=new P,ro=new Sa,oo=new Sa,ao=new Sa;class xr extends Ni{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){const i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(tr.subVectors(n[0],n[1]).add(n[0]),c=tr);const u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(tr.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=tr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ro.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),oo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ao.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ro.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),oo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ao.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ro.calc(l),oo.calc(l),ao.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xl(s,t,e,i,n){const r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function C0(s,t){const e=1-s;return e*e*t}function R0(s,t){return 2*(1-s)*s*t}function P0(s,t){return s*s*t}function vs(s,t,e,i){return C0(s,t)+R0(s,e)+P0(s,i)}function L0(s,t){const e=1-s;return e*e*e*t}function I0(s,t){const e=1-s;return 3*e*e*s*t}function D0(s,t){return 3*(1-s)*s*s*t}function U0(s,t){return s*s*s*t}function xs(s,t,e,i,n){return L0(s,t)+I0(s,e)+D0(s,i)+U0(s,n)}class N0 extends Ni{constructor(t=new ct,e=new ct,i=new ct,n=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ct){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xs(t,n.x,r.x,o.x,a.x),xs(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class F0 extends Ni{constructor(t=new P,e=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new P){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xs(t,n.x,r.x,o.x,a.x),xs(t,n.y,r.y,o.y,a.y),xs(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class k0 extends Ni{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B0 extends Ni{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class O0 extends Ni{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(vs(t,n.x,r.x,o.x),vs(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xc extends Ni{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(vs(t,n.x,r.x,o.x),vs(t,n.y,r.y,o.y),vs(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z0 extends Ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Xl(a,l.x,c.x,h.x,u.x),Xl(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new ct().fromArray(n))}return this}}var H0=Object.freeze({__proto__:null,ArcCurve:A0,CatmullRomCurve3:xr,CubicBezierCurve:N0,CubicBezierCurve3:F0,EllipseCurve:Wc,LineCurve:k0,LineCurve3:B0,QuadraticBezierCurve:O0,QuadraticBezierCurve3:Xc,SplineCurve:z0});class ws extends Pe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ht extends Pe{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;w(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function w(){const M=new P,I=new P;let E=0;const y=(e-t)/i;for(let A=0;A<=r;A++){const v=[],x=A/r,L=x*(e-t)+t;for(let O=0;O<=n;O++){const B=O/n,X=B*l+a,Y=Math.sin(X),k=Math.cos(X);I.x=L*Y,I.y=-x*i+m,I.z=L*k,u.push(I.x,I.y,I.z),M.set(Y,y,k).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-x),v.push(g++)}_.push(v)}for(let A=0;A<n;A++)for(let v=0;v<r;v++){const x=_[v][A],L=_[v+1][A],O=_[v+1][A+1],B=_[v][A+1];(t>0||v!==0)&&(h.push(x,L,B),E+=3),(e>0||v!==r-1)&&(h.push(L,O,B),E+=3)}c.addGroup(p,E,0),p+=E}function S(M){const I=g,E=new ct,y=new P;let A=0;const v=M===!0?t:e,x=M===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const L=g;for(let O=0;O<=n;O++){const X=O/n*l+a,Y=Math.cos(X),k=Math.sin(X);y.x=v*k,y.y=m*x,y.z=v*Y,u.push(y.x,y.y,y.z),d.push(0,x,0),E.x=Y*.5+.5,E.y=k*.5*x+.5,f.push(E.x,E.y),g++}for(let O=0;O<n;O++){const B=I+O,X=L+O;M===!0?h.push(X,X+1,B):h.push(X+1,X,B),A+=3}c.addGroup(p,A,M===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends Ht{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Re(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends Pe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const S=new P,M=new P,I=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],M),f(e[E+2],I),l(S,M,I,w)}function l(w,S,M,I){const E=I+1,y=[];for(let A=0;A<=E;A++){y[A]=[];const v=w.clone().lerp(M,A/E),x=S.clone().lerp(M,A/E),L=E-A;for(let O=0;O<=L;O++)O===0&&A===E?y[A][O]=v:y[A][O]=v.clone().lerp(x,O/L)}for(let A=0;A<E;A++)for(let v=0;v<2*(E-A)-1;v++){const x=Math.floor(v/2);v%2===0?(d(y[A][x+1]),d(y[A+1][x]),d(y[A][x])):(d(y[A][x+1]),d(y[A+1][x+1]),d(y[A+1][x]))}}function c(w){const S=new P;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(w),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){const w=new P;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];const M=m(w)/2/Math.PI+.5,I=p(w)/Math.PI+.5;o.push(M,1-I)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const S=o[w+0],M=o[w+2],I=o[w+4],E=Math.max(S,M,I),y=Math.min(S,M,I);E>.9&&y<.1&&(S<.2&&(o[w+0]+=1),M<.2&&(o[w+2]+=1),I<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,S){const M=w*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){const w=new P,S=new P,M=new P,I=new P,E=new ct,y=new ct,A=new ct;for(let v=0,x=0;v<r.length;v+=9,x+=6){w.set(r[v+0],r[v+1],r[v+2]),S.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),E.set(o[x+0],o[x+1]),y.set(o[x+2],o[x+3]),A.set(o[x+4],o[x+5]),I.copy(w).add(S).add(M).divideScalar(3);const L=m(I);_(E,x+0,w,L),_(y,x+2,S,L),_(A,x+4,M,L)}}function _(w,S,M,I){I<0&&w.x===1&&(o[S]=w.x-1),M.x===0&&M.z===0&&(o[S]=I/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.vertices,t.indices,t.radius,t.details)}}const er=new P,ir=new P,lo=new P,nr=new ei;class V0 extends Pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),r=Math.cos(Hn*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=nr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),nr.getNormal(lo),u[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let w=0;w<3;w++){const S=(w+1)%3,M=u[w],I=u[S],E=nr[h[w]],y=nr[h[S]],A=`${M}_${I}`,v=`${I}_${M}`;v in d&&d[v]?(lo.dot(d[v].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(y.x,y.y,y.z)),d[v]=null):A in d||(d[A]={index0:c[w],index1:c[S],normal:lo.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];er.fromBufferAttribute(a,_),ir.fromBufferAttribute(a,m),f.push(er.x,er.y,er.z),f.push(ir.x,ir.y,ir.z)}this.setAttribute("position",new se(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ci extends Es{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ci(t.radius,t.detail)}}class ke extends Es{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ke(t.radius,t.detail)}}class mt extends Pe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const w=[],S=p/i;let M=0;p===0&&o===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){const E=I/e;u.x=-t*Math.cos(n+E*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(n+E*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+M,1-S),w.push(c++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){const S=h[p][w+1],M=h[p][w],I=h[p+1][w],E=h[p+1][w+1];(p!==0||o>0)&&f.push(S,M,E),(p!==i-1||l<Math.PI)&&f.push(M,I,E)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gn extends Es{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gn(t.radius,t.detail)}}class Xt extends Pe{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const _=g/n*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const _=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,w=(n+1)*f+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Er extends Pe{constructor(t=new Xc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new ct;let h=new P;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),w(),p()}function m(S){h=t.getPointAt(S/e,h);const M=o.normals[S],I=o.binormals[S];for(let E=0;E<=n;E++){const y=E/n*Math.PI*2,A=Math.sin(y),v=-Math.cos(y);l.x=v*M.x+A*I.x,l.y=v*M.y+A*I.y,l.z=v*M.z+A*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let M=1;M<=n;M++){const I=(n+1)*(S-1)+(M-1),E=(n+1)*S+(M-1),y=(n+1)*S+M,A=(n+1)*(S-1)+M;g.push(I,E,A),g.push(E,y,A)}}function w(){for(let S=0;S<=e;S++)for(let M=0;M<=n;M++)c.x=S/e,c.y=M/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Er(new H0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class G0 extends ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Ii extends gn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tr extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new W(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const co=new fe,ql=new P,Yl=new P;class wa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(ql),Yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yl),e.updateMatrixWorld(),co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class W0 extends wa{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Zn*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class X0 extends Tr{constructor(t,e,i=0,n=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new W0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const $l=new fe,ds=new P,ho=new P;class q0 extends wa{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ds.setFromMatrixPosition(t.matrixWorld),i.position.copy(ds),ho.copy(i.position),ho.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ho),i.updateMatrixWorld(),n.makeTranslation(-ds.x,-ds.y,-ds.z),$l.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l)}}class Wn extends Tr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new q0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Y0 extends wa{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yc extends Tr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $c{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Kl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);const Kc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $0=new xa(-1,1,1,-1,0,1);class K0 extends Pe{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const Z0=new K0;class Ea{constructor(t){this._mesh=new C(Z0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Zc extends ss{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Jn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ea(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zl extends ss{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class j0 extends ss{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class jc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new ct);this._width=i.width,this._height=i.height,e=new di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zc(Kc),this.copyPass.material.blending=Ri,this.clock=new $c}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zl!==void 0&&(o instanceof Zl?i=!0:o instanceof j0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jc extends ss{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new W}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}}const J0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pn extends ss{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new W(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new di(r,o,{type:Pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new di(r,o,{type:Pi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new di(r,o,{type:Pi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=J0;this.highPassUniforms=Jn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ct(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Kc;this.copyUniforms=Jn.clone(h.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Me,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new W,this.oldClearAlpha=1,this.basic=new Wt,this.fsQuad=new Ea(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=pn.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=pn.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}pn.BlurDirectionX=new ct(1,0);pn.BlurDirectionY=new ct(0,1);const Q0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Qc extends ss{constructor(){super();const t=Q0;this.uniforms=Jn.clone(t.uniforms),this.material=new G0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ea(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class th extends ba{constructor(){super();const t=new ot;t.deleteAttribute("uv");const e=new Ii({side:Ne}),i=new Ii,n=new Wn(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);const r=new C(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new C(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new C(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new C(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new C(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new C(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new C(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new C(t,In(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new C(t,In(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new C(t,In(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new C(t,In(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new C(t,In(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new C(t,In(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function In(s){const t=new Wt;return t.color.setScalar(s),t}const Ar=`
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
`,tg=`
varying vec3 vWorldPos;
varying vec3 vDir;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,eg=`
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
`,ig=`
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
`,ng=`
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
`,sg=`
varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  vUv = uv;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,rg=`
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
`,og=`
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
`,ag=`
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
`,lg=`
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,cg=`
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
`,hg=`
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
`,ug=`
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
`,dg=`
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
`,fg=`
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
`,pg=`
attribute vec3 aColor;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;

void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,mg=`
varying vec3 vColor;
varying float vAlpha;

void main() {
  gl_FragColor = vec4(vColor, vAlpha);
}
`,gg=`
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,_g=`
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
`,vg={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBoost:{value:0},uHurt:{value:0},uSunPos:{value:new ct(.72,.68)},uResolution:{value:new ct(1,1)},uFlare:{value:1},uCockpit:{value:0},uGate:{value:0},uKick:{value:0}},vertexShader:`
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
  `};function dr(s){let t=s>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Di(s,t=new P(0,1,0)){const e=s.clone().normalize(),i=t.clone();Math.abs(e.dot(i))>.92&&i.set(1,0,0),i.addScaledVector(e,-i.dot(e)),i.lengthSq()<1e-8&&i.set(1,0,0),i.normalize();const n=new P().crossVectors(e,i).normalize(),r=new P().crossVectors(n,e).normalize();return{tangent:e,normal:r,binormal:n}}function gs(s,t,e=0,i=0){const n=s.sample(Math.max(8,t)),r=Di(n.tangent),o=n.pos.clone().addScaledVector(r.binormal,e).addScaledVector(r.normal,i);return{sample:n,frame:r,pos:o}}function mi(s,t,e){return s+(t-s)*e}function He(s,t,e){return Math.max(t,Math.min(e,s))}class xg{constructor(){this.points=[],this.rng=dr(41854),this.cursor=0;for(let t=0;t<64;t++)this._append();this.curve=new xr(this.points,!1,"catmullrom",.45),this._length=this.curve.getLength()}_append(){const t=this.cursor++,e=Math.sin(t*.09)*16+Math.sin(t*.031)*8,i=Math.cos(t*.055)*7+Math.sin(t*.13)*3.5,n=-t*42;this.points.push(new P(e,i,n))}ensure(t){for(;this._length-t<900;)this._append(),this.curve=new xr(this.points,!1,"catmullrom",.45),this._length=this.curve.getLength()}sample(t){this.ensure(t);const e=this._length,i=He(t/e,0,.995),n=this.curve.getPointAt(i),r=this.curve.getTangentAt(i).normalize(),o=this.curve.getPointAt(He(i+.01,0,1));return{pos:n,tangent:r,ahead:o,u:i}}rebuildRibbon(){return new Er(this.curve,360,1.35,12,!1)}}const Mg=90,fs=1800,Dn=700;class yg{constructor(t){this.scene=t,this.time=0,this.crystals=[],this.crystalData=[],this.lightPos=Array.from({length:6},()=>new P),this.lightColor=Array.from({length:6},()=>new P(1,1,1)),this.lightInt=new Float32Array(6),this.crystalMat=this._crystalMaterial(),this._chapterId="default",this._chapterT=1,this._chapterFrom=this._palette("default"),this._chapterTo=this._chapterFrom,this._addSky(),this._addPlanet(),this._addSun(),this._addDust(),this._addSpores(),this._buildCrystals()}_palette(t){const e={default:{skyA:new W("#3a0a58"),skyB:new W("#0b3d6a"),skyC:new W("#ff3bd4"),ribbonA:new W("#5ce1ff"),ribbonB:new W("#ff3bd4"),fog:new W("#12051f"),crystal:new W("#6a3cff"),glow:new W("#7cf0ff"),sun:new W("#ffe6c4"),ambient:new W("#3a1a58")},queen:{skyA:new W("#4a0528"),skyB:new W("#1a0840"),skyC:new W("#ff3bd4"),ribbonA:new W("#ff64e8"),ribbonB:new W("#5ce1ff"),fog:new W("#220818"),crystal:new W("#9b2bff"),glow:new W("#ff64e8"),sun:new W("#ffb0d8"),ambient:new W("#4a1238")},warden:{skyA:new W("#3a1808"),skyB:new W("#1a0a28"),skyC:new W("#ffd166"),ribbonA:new W("#ffd166"),ribbonB:new W("#ff8a1a"),fog:new W("#1a0c08"),crystal:new W("#5a1a8a"),glow:new W("#ffd166"),sun:new W("#ffd9a0"),ambient:new W("#3a2210")},coil:{skyA:new W("#4a0a10"),skyB:new W("#2a0818"),skyC:new W("#ff6a3a"),ribbonA:new W("#ff8a3a"),ribbonB:new W("#ff3bd4"),fog:new W("#180608"),crystal:new W("#ff5a2a"),glow:new W("#ffb07a"),sun:new W("#ffc8a0"),ambient:new W("#3a1210")},empress:{skyA:new W("#2a0428"),skyB:new W("#120830"),skyC:new W("#ffd166"),ribbonA:new W("#ff3bd4"),ribbonB:new W("#ffd166"),fog:new W("#140414"),crystal:new W("#ff64e8"),glow:new W("#ffe29a"),sun:new W("#ffd0ea"),ambient:new W("#3a0a30")},heart:{skyA:new W("#18040c"),skyB:new W("#0a0614"),skyC:new W("#ff5a7a"),ribbonA:new W("#ff3bd4"),ribbonB:new W("#5ce1ff"),fog:new W("#100308"),crystal:new W("#ff5a7a"),glow:new W("#ff8ab0"),sun:new W("#ffd0d8"),ambient:new W("#2a0814")},finale:{skyA:new W("#081828"),skyB:new W("#2a0548"),skyC:new W("#5ce1ff"),ribbonA:new W("#5ce1ff"),ribbonB:new W("#ffd166"),fog:new W("#081018"),crystal:new W("#1f6dff"),glow:new W("#9be7ff"),sun:new W("#c8e8ff"),ambient:new W("#1a2858")}};return e[t]||e.default}setChapter(t){const e=t||"default";this._chapterId===e&&this._chapterT>=1||this._chapterId!==e&&(this._chapterFrom=this._sampleChapter(),this._chapterTo=this._palette(e),this._chapterId=e,this._chapterT=0)}_sampleChapter(){const t=this._chapterT??1,e=this._chapterFrom||this._palette("default"),i=this._chapterTo||e,n=(r,o)=>new W().lerpColors(r,o,t);return{skyA:n(e.skyA,i.skyA),skyB:n(e.skyB,i.skyB),skyC:n(e.skyC,i.skyC),ribbonA:n(e.ribbonA,i.ribbonA),ribbonB:n(e.ribbonB,i.ribbonB),fog:n(e.fog,i.fog),crystal:n(e.crystal,i.crystal),glow:n(e.glow,i.glow),sun:n(e.sun,i.sun),ambient:n(e.ambient,i.ambient)}}_applyChapter(t){const e=this._chapterFrom,i=this._chapterTo;if(!e||!i)return;this.skyMat.uniforms.uA.value.lerpColors(e.skyA,i.skyA,t),this.skyMat.uniforms.uB.value.lerpColors(e.skyB,i.skyB,t),this.skyMat.uniforms.uC.value.lerpColors(e.skyC,i.skyC,t),this.ribbonMat&&(this.ribbonMat.uniforms.uColorA.value.lerpColors(e.ribbonA,i.ribbonA,t),this.ribbonMat.uniforms.uColorB.value.lerpColors(e.ribbonB,i.ribbonB,t)),this.sunLight&&this.sunLight.color.lerpColors(e.sun,i.sun,t),this._ambient&&this._ambient.color.lerpColors(e.ambient,i.ambient,t);const n=new W().lerpColors(e.fog,i.fog,t),r=new W().lerpColors(e.glow,i.glow,t);for(const o of this.crystals)o.material.uniforms.uFogColor.value.copy(n),o.material.uniforms.uGlow.value.copy(r)}_crystalMaterial(){return new ve({uniforms:{uTime:{value:0},uColor:{value:new W("#6a3cff")},uGlow:{value:new W("#7cf0ff")},uLightPos:{value:this.lightPos},uLightColor:{value:this.lightColor},uLightInt:{value:this.lightInt},uFogColor:{value:new W("#12051f")},uFogDensity:{value:.0048}},vertexShader:ig,fragmentShader:ng,transparent:!0,depthWrite:!0})}_addSky(){const t=new mt(900,48,32);this.skyMat=new ve({uniforms:{uTime:{value:0},uA:{value:new W("#3a0a58")},uB:{value:new W("#0b3d6a")},uC:{value:new W("#ff3bd4")}},vertexShader:tg,fragmentShader:eg,side:Ne,depthWrite:!1,fog:!1}),this.sky=new C(t,this.skyMat),this.scene.add(this.sky)}_addPlanet(){this.planetGroup=new ne;const t=new ve({uniforms:{uTime:{value:0},uLightDir:{value:new P(.45,.35,.82).normalize()}},vertexShader:og,fragmentShader:ag});this.planet=new C(new mt(70,64,48),t);const e=new ve({uniforms:{uColor:{value:new W("#66a0ff")}},vertexShader:lg,fragmentShader:cg,transparent:!0,blending:Me,depthWrite:!1,side:Ne});this.atmo=new C(new mt(82,48,32),e),this.planetGroup.add(this.planet,this.atmo),this.scene.add(this.planetGroup),this.planetMat=t}_addSun(){this.sun=new C(new mt(10,24,16),new Wt({color:16773570}));const t=new C(new mt(18,24,16),new Wt({color:16761162,transparent:!0,opacity:.28,blending:Me,depthWrite:!1}));this.sun.add(t),this.scene.add(this.sun),this.sunLight=new qc(16770756,1.4),this.scene.add(this.sunLight),this._ambient=new Yc(3807832,.35),this.scene.add(this._ambient)}_addDust(){const t=new Float32Array(fs*3),e=new Float32Array(fs*3),i=new Float32Array(fs),n=new Float32Array(fs),r=dr(20942);for(let a=0;a<fs;a++){t[a*3]=(r()-.5)*520,t[a*3+1]=(r()-.5)*280,t[a*3+2]=-r()*1600;const l=r();e[a*3]=l>.7?1:.45,e[a*3+1]=l>.7?.55:.85,e[a*3+2]=l>.7?.95:1,i[a]=.6+r()*2.4,n[a]=r()*100}const o=new Pe;o.setAttribute("position",new Ee(t,3)),o.setAttribute("aColor",new Ee(e,3)),o.setAttribute("aSize",new Ee(i,1)),o.setAttribute("aSeed",new Ee(n,1)),this.dustMat=new ve({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:dg,fragmentShader:fg,transparent:!0,depthWrite:!1,blending:Me}),this.dust=new Gl(o,this.dustMat),this.scene.add(this.dust)}_addSpores(){const t=new Float32Array(Dn*3),e=new Float32Array(Dn*3),i=new Float32Array(Dn),n=new Float32Array(Dn),r=dr(30625);for(let a=0;a<Dn;a++)t[a*3]=(r()-.5)*80,t[a*3+1]=(r()-.5)*50,t[a*3+2]=-r()*400,e[a*3]=.3+r()*.4,e[a*3+1]=.8+r()*.2,e[a*3+2]=1,i[a]=1.5+r()*3.5,n[a]=r()*80;const o=new Pe;o.setAttribute("position",new Ee(t,3)),o.setAttribute("aColor",new Ee(e,3)),o.setAttribute("aSize",new Ee(i,1)),o.setAttribute("aSeed",new Ee(n,1)),this.sporeMat=this.dustMat.clone(),this.spores=new Gl(o,this.sporeMat),this.scene.add(this.spores),this.sporeOrigins=t}_buildCrystals(){const t=[new ke(1,0),new Gn(1,0),new ci(1,0),new Re(.7,2.4,5)],e=[{color:"#4b2dff",glow:"#66f0ff"},{color:"#9b2bff",glow:"#ff64e8"},{color:"#1f6dff",glow:"#9be7ff"},{color:"#5a1a8a",glow:"#ffd166"}];for(let i=0;i<Mg;i++){const n=this.crystalMat.clone();n.uniforms=Jn.clone(this.crystalMat.uniforms);const r=e[i%e.length];n.uniforms.uColor.value=new W(r.color),n.uniforms.uGlow.value=new W(r.glow),n.uniforms.uLightPos.value=this.lightPos,n.uniforms.uLightColor.value=this.lightColor,n.uniforms.uLightInt.value=this.lightInt;const o=new C(t[i%t.length],n);o.scale.setScalar(1.4+i%7*.55),this.scene.add(o),this.crystals.push(o),this.crystalData.push({radius:1.6*o.scale.x,spin:.15+i%5*.08,placed:!1,pathDist:0})}}attachRibbon(t){if(this.ribbon){this.ribbon.geometry.dispose(),this.ribbon.geometry=t;return}this.ribbonMat=new ve({uniforms:{uTime:{value:0},uColorA:{value:new W("#5ce1ff")},uColorB:{value:new W("#ff3bd4")}},vertexShader:sg,fragmentShader:rg,transparent:!0,blending:Me,depthWrite:!1,side:ai}),this.ribbon=new C(t,this.ribbonMat),this.scene.add(this.ribbon)}layoutFromPath(t,e,i=24){const n=dr(2333+Math.floor(e/80)),r=i+16;for(let o=0;o<this.crystals.length;o++){const a=e+40+o*22+n()*10,l=t.sample(a),c=Di(l.tangent),h=n()*Math.PI*2,u=r+n()*18,d=this.crystals[o];d.position.copy(l.pos).addScaledVector(c.normal,Math.cos(h)*u).addScaledVector(c.binormal,Math.sin(h)*u),d.lookAt(l.pos),this.crystalData[o].pathDist=a,this.crystalData[o].placed=!0,this.crystalData[o].radius=1.35*Math.max(d.scale.x,d.scale.y)}}recycleCrystals(t,e,i=24){const n=i+16;for(let r=0;r<this.crystals.length;r++){const o=this.crystalData[r];if(o.pathDist<e-30){const a=e+380+Math.random()*220,l=t.sample(a),c=Di(l.tangent),h=Math.random()*Math.PI*2,u=n+Math.random()*18;this.crystals[r].position.copy(l.pos).addScaledVector(c.normal,Math.cos(h)*u).addScaledVector(c.binormal,Math.sin(h)*u),this.crystals[r].lookAt(l.pos),o.pathDist=a}}}setLights(t){for(let e=0;e<6;e++){const i=t[e];if(!i){this.lightInt[e]=0;continue}this.lightPos[e].copy(i.pos),this.lightColor[e].set(i.color.r,i.color.g,i.color.b),this.lightInt[e]=i.intensity}}update(t,e,i){this.time+=t,this._chapterT<1&&(this._chapterT=Math.min(1,this._chapterT+t*.42),this._applyChapter(this._chapterT)),this.skyMat.uniforms.uTime.value=this.time,this.planetMat.uniforms.uTime.value=this.time,this.ribbonMat&&(this.ribbonMat.uniforms.uTime.value=this.time),this.dustMat.uniforms.uTime.value=this.time,this.sporeMat.uniforms.uTime.value=this.time;for(const r of this.crystals)r.material.uniforms.uTime.value=this.time,r.rotation.y+=t*.25,r.rotation.x+=t*.08;this.sky.position.copy(e.position),this.planetGroup.position.copy(e.position).add(new P(-180,40,-260)),this.planet.rotation.y+=t*.03,this.sun.position.copy(e.position).add(new P(220,90,-180)),this.sunLight.position.copy(this.sun.position),this.dust.position.copy(e.position);const n=this.spores.geometry.attributes.position;for(let r=0;r<Dn;r++){let o=n.getZ(r)+t*(18+r%5*4);o>20&&(o-=420),n.setZ(r,o),n.setY(r,n.getY(r)+Math.sin(this.time+r)*t*.6)}n.needsUpdate=!0,this.spores.position.copy(e.position),this.spores.position.z=e.position.z}hitTest(t,e){for(let i=0;i<this.crystals.length;i++)if(this.crystals[i].position.distanceTo(t)<e+this.crystalData[i].radius)return this.crystals[i];return null}}const ye={spark:{max:8,tag:"SPARK",unlock:"SPARK ARRAY"},tractor:{max:5,tag:"TRACTOR",unlock:"TRACTOR WELL"},pull:{max:5,tag:"PULL",unlock:"TRACTOR FORCE"},needle:{max:8,tag:"NEEDLE",unlock:"LASERS ONLINE"},seeker:{max:8,tag:"SEEKER",unlock:"SEEKERS LOCKED"},shard:{max:7,tag:"SHARD",unlock:"CRYSTAL SHARDS"},titan:{max:6,tag:"TITAN",unlock:"TITAN BLASTER"},wing:{max:6,tag:"WING",unlock:"WING FILAMENTS"},helix:{max:6,tag:"HELIX",unlock:"HELIX RIBBON"},drone:{max:6,tag:"DRONE",unlock:"RIFT DRONES"},mine:{max:6,tag:"MINE",unlock:"AETHER MINES"},shear:{max:6,tag:"SHEAR",unlock:"RIFT SHEAR"},spire:{max:5,tag:"SPIRE",unlock:"PIERCE SPIRE"},nova:{max:5,tag:"NOVA",unlock:"NOVA BURST"},prism:{max:5,tag:"PRISM",unlock:"PRISM SPLIT"}},Ae=Object.keys(ye),bg=["needle","seeker","shard","titan","wing","helix","drone","mine","shear","spire","nova","prism"];function Ta(){const s={};for(const t of Ae)s[t]=0;return s}function Ts(){const s=Ta();return s.spark=1,s}function Sg(){const s=Ts(),t=["spark"],e=bg.slice(),i=[],n=new Set([3,8,14,20,26,32,38,44,50,56,62,68]);let r=0;const o=Ae.reduce((a,l)=>a+ye[l].max,0)-1;for(;i.length<o;){if(e.length&&n.has(i.length)){const l=e.shift();s[l]=1,t.push(l),i.push({module:l,toast:ye[l].unlock});continue}let a=!1;for(let l=0;l<t.length;l++){const c=t[(r+l)%t.length];if(s[c]<ye[c].max){s[c]+=1,i.push({module:c,toast:s[c]===ye[c].max?`${ye[c].tag} MAX`:null}),r=(r+l+1)%t.length,a=!0;break}}if(!a){if(!e.length)break;const l=e.shift();s[l]=1,t.push(l),i.push({module:l,toast:ye[l].unlock})}}return i}const Aa=Sg(),wg=Aa.length;function Eg(s){const t=Ts(),e=Math.max(0,Math.min(wg,s|0));for(let i=0;i<e;i++)t[Aa[i].module]+=1;return t}function Tg(s){const t=Ae.filter(e=>s[e]>0).map(e=>ye[e].tag);return t.length?t.slice(-3).join(" · "):"SPARK"}function _e(s,t,e={}){return{x:s,drift:t,home:0,pierce:0,wobble:0,phase:0,hitR:1.35,damage:1,...e}}function eh(s,t=0){const e=[],i=[],n=[],r=[],o=[],a=s.spark|0;if(a>0){const E=1+Math.min(a,7);for(let y=0;y<E;y++){const A=E===1?0:y/(E-1)-.5;e.push(_e(A*(.16+a*.04),A*(1.4+a*.28),{kind:"spark",scale:.82+a*.04,speed:84+a*4,life:.32+Math.max(0,a-1)*.042,color:13172726,hitR:1.25}))}}const l=s.needle|0;if(l>0){const E=l<=2?[-1.9,1.9]:l<=4?[-2.5,0,2.5]:[-3.3,-1.15,0,1.15,3.3];for(const y of E)e.push(_e(y,0,{kind:"needle",scale:1.05+l*.04,speed:128+l*3,life:.78+Math.max(0,l-1)*.04,color:10217471,hitR:1.55}))}const c=s.wing|0;if(c>0){const E=5.1+c*.45,y=10+c*2.2;e.push(_e(-E,-y,{kind:"wing",scale:1.08,speed:122,life:.72,color:16737512,hitR:1.45})),e.push(_e(E,y,{kind:"wing",scale:1.08,speed:122,life:.72,color:16737512,hitR:1.45})),c>=4&&(e.push(_e(-E-1.8,-y-7,{kind:"wing",scale:.95,speed:118,life:.68,color:16751584,hitR:1.35})),e.push(_e(E+1.8,y+7,{kind:"wing",scale:.95,speed:118,life:.68,color:16751584,hitR:1.35})))}const h=s.helix|0;if(h>0){const E=14+h*4;e.push(_e(-2.2,0,{kind:"helix",scale:1.05,speed:118,life:.8,color:8057087,wobble:E,phase:0})),e.push(_e(2.2,0,{kind:"helix",scale:1.05,speed:118,life:.8,color:8057087,wobble:E,phase:Math.PI})),h>=4&&e.push(_e(0,0,{kind:"helix",scale:1,speed:120,life:.76,color:14483455,wobble:E*.7,phase:1.2}))}const u=s.shear|0;if(u>0){const E=22+u*4;e.push(_e(-3.8,-E,{kind:"shear",scale:1.15,speed:110,life:.7,color:16765286,hitR:1.7})),e.push(_e(3.8,E,{kind:"shear",scale:1.15,speed:110,life:.7,color:16765286,hitR:1.7})),u>=4&&(e.push(_e(-6.2,-E-10,{kind:"shear",scale:1.05,speed:104,life:.64,color:16769690})),e.push(_e(6.2,E+10,{kind:"shear",scale:1.05,speed:104,life:.64,color:16769690})))}const d=s.spire|0;d>0&&(e.push(_e(-.9,0,{kind:"spire",scale:.72,speed:156,life:.9,color:16777215,pierce:d,damage:2,hitR:1.4})),e.push(_e(.9,0,{kind:"spire",scale:.72,speed:156,life:.9,color:16777215,pierce:d,damage:2,hitR:1.4})));const f=s.drone|0;if(f>0){const E=Math.min(4,2+Math.floor((f-1)/2));for(let y=0;y<E;y++){const A=y%2===0?-1:1,v=Math.floor(y/2);e.push(_e(A*(4.8+v*1.4),A*(4+v*3),{kind:"drone",scale:.9,speed:124,life:.7,color:16743144,hitR:1.3}))}}const g=s.prism|0;if(g>0){const E=2+Math.min(g,4);for(let y=0;y<E;y++){const A=y/(E-1)-.5;e.push(_e(A*2.4,A*(18+g*5),{kind:"prism",scale:.78,speed:100,life:.48,color:13940991,hitR:1.2}))}}const _=s.seeker|0;if(_>0){const E=Math.min(6,1+Math.ceil(_/2));for(let y=0;y<E;y++){const A=E===1?0:y/(E-1)-.5;i.push(_e(A*(2.2+_*.5),A*4,{kind:"seeker",scale:1.25+_*.06,speed:52+_*3,life:1.35,color:16747082,damage:2,home:1,homeSteer:58+_*6,hitR:1.8}))}}const m=s.shard|0;if(m>0){const E=2+Math.min(m,6);for(let y=0;y<E;y++){const A=E===1?0:y/(E-1)-.5;e.push(_e(A*1.2,A*(16+m*3),{kind:"shard",scale:.7,speed:96+m*2,life:.42,color:16751570,hitR:1.2}))}}const p=s.titan|0;p>0&&(n.push(_e(0,0,{kind:"titan",scale:2.4+p*.28,speed:64+p*3,life:1.05,color:16765286,damage:6+p,hitR:3.2+p*.35})),p>=4&&(n.push(_e(-2.6,-6,{kind:"titan",scale:1.6,speed:70,life:.9,color:16769690,damage:3,hitR:2.4})),n.push(_e(2.6,6,{kind:"titan",scale:1.6,speed:70,life:.9,color:16769690,damage:3,hitR:2.4}))));const w=s.mine|0;if(w>0){const E=Math.min(4,1+Math.floor(w/2));for(let y=0;y<E;y++){const A=E===1?0:y/(E-1)-.5;r.push(_e(A*(3+w*.8),A*5,{kind:"mine",scale:1.35,speed:16+w,life:1.7,color:6087167,damage:4,hitR:2.1}))}}const S=s.nova|0;if(S>0){const E=6+S;for(let y=0;y<E;y++){const A=y/(E-1)-.5;o.push(_e(A*2,A*(36+S*6),{kind:"nova",scale:.95,speed:88,life:.62,color:16737512,damage:2,hitR:1.5}))}}const I={primary:{cd:a>0&&l===0?.094:.078,shots:e},missile:{cd:Math.max(.28,.42-_*.018),shots:i},titan:{cd:Math.max(.52,.86-p*.048),shots:n},mine:{cd:.52,shots:r},nova:{cd:Math.max(.72,1.18-S*.08),shots:o}};for(const E of Object.values(I))for(const y of E.shots)y.kick=Ag[y.kind]??.2;return I}const Ag={spark:.22,needle:.3,wing:.16,helix:.2,shear:.3,spire:.24,drone:.12,prism:.16,shard:.15,seeker:.34,titan:.92,mine:.4,nova:.58};function Un(s,t,e){const i=Cg(t,e);return Math.round(s==="queen"?90+i*6.2:s==="coil"?110+i*6.8:s==="warden"?140+i*7.5:s==="empress"?180+i*8.2:220+i*9.5)}function Cg(s,t){const e=eh(t||Eg(s),0),i=(n,r)=>n.shots.length?n.shots.reduce((a,l)=>a+(l.damage||1),0)/Math.max(.04,n.cd)*r:0;return i(e.primary,.36)+i(e.missile,.82)+i(e.titan,.78)+i(e.mine,.18)+i(e.nova,.14)}Aa.map((s,t)=>({name:ye[s.module].tag,toast:s.toast||ye[s.module].tag,step:t+1}));function uo(s,t){return new ve({uniforms:{uColor:{value:new W(s)},uRim:{value:new W(t)},uLightDir:{value:new P(.35,.8,.4).normalize()}},vertexShader:gg,fragmentShader:_g})}function rn(s,t=10217471){const e=new E0(new V0(s.geometry,18),new Vc({color:t}));s.add(e)}function ce(s,t,e=1.6){return new Ii({color:s,metalness:.72,roughness:.28,emissive:t,emissiveIntensity:e})}function Le(s,t=.7){return new Wt({color:s,transparent:!0,opacity:t,blending:Me,depthWrite:!1})}function Vt(s,t,e,i,n=0){return s.add(t),t.material?.emissive&&e.push(t),n>0&&(t.visible=!1,i.push({mesh:t,at:n})),t}function Xe(){return{group:new ne,glows:[],extras:[],auras:[]}}function Rg(){const s=Xe();for(const t of[-1,1]){const e=new C(new Ht(.035,.05,1.55,6),ce(1384496,10217471,1.4));e.rotation.x=Math.PI/2,e.position.set(t*1.05,-.1,-.35),Vt(s.group,e,s.glows,s.extras);const i=new C(new Ht(.02,.02,.7,6),Le(10217471,.55));i.rotation.x=Math.PI/2,i.position.set(t*1.05,-.1,-1.15),s.group.add(i),s.auras.push(i);const n=new C(new Ht(.028,.04,1.2,6),ce(1384496,6087167,1.2));n.rotation.x=Math.PI/2,n.position.set(t*1.45,-.08,-.15),Vt(s.group,n,s.glows,s.extras,5)}return s}function Pg(){const s=Xe();for(const t of[-1,1]){const e=new C(new ot(.42,.16,.7),ce(2757640,16747082,1.3));e.position.set(t*.95,-.22,.35),Vt(s.group,e,s.glows,s.extras);for(let i=0;i<3;i++){const n=new C(new Ht(.05,.055,.55,6),ce(1707016,16747082,1.1));n.rotation.x=Math.PI/2,n.position.set(t*(.82+i*.12),-.28,.22),Vt(s.group,n,s.glows,s.extras,i===2?4:0);const r=new C(new mt(.045,6,6),Le(16747082,.7));r.position.set(t*(.82+i*.12),-.28,-.08),s.group.add(r),s.auras.push(r)}}return s}function Lg(){const s=Xe();for(const[i,n,r]of[[-.22,.12,-1.15],[.22,.12,-1.15],[0,.22,-1.05]]){const o=new C(new ke(.12,0),ce(2756672,16751570,1.7));o.position.set(i,n,r),Vt(s.group,o,s.glows,s.extras)}const t=new C(new ke(.16,0),ce(1706024,16737512,2));t.position.set(0,.28,-1.25),Vt(s.group,t,s.glows,s.extras,5);const e=new C(new mt(.22,8,6),Le(16751570,.4));return e.position.set(0,.16,-1.12),s.group.add(e),s.auras.push(e),s}function Ig(){const s=Xe(),t=new C(new Ht(.16,.22,1.35,8),ce(2761224,16765286,1.8));t.rotation.x=Math.PI/2,t.position.set(0,-.38,-.55),Vt(s.group,t,s.glows,s.extras);const e=new C(new Xt(.18,.04,6,12),Le(16765286,.8));e.position.set(0,-.38,-1.22),s.group.add(e),s.auras.push(e);const i=new C(new ot(.55,.12,.7),ce(1709576,16751162,1.2));i.position.set(0,-.32,-.15),Vt(s.group,i,s.glows,s.extras);const n=new C(new Ht(.08,.1,.9,6),ce(2761224,16769690,1.5));n.rotation.x=Math.PI/2,n.position.set(-.28,-.36,-.4);const r=n.clone();return r.position.x=.28,Vt(s.group,n,s.glows,s.extras,4),Vt(s.group,r,s.glows,s.extras,4),s}function Dg(){const s=Xe();for(const t of[-1,1]){const e=new C(new ot(.55,.12,.38),ce(1712696,16737512,1.5));e.position.set(t*1.62,-.04,.28),e.rotation.y=t*-.35,Vt(s.group,e,s.glows,s.extras);const i=new C(new Ht(.04,.055,.7,6),ce(1312792,16737512,1.6));i.rotation.x=Math.PI/2,i.rotation.y=t*-.4,i.position.set(t*1.72,-.04,.02),Vt(s.group,i,s.glows,s.extras);const n=new C(new mt(.07,8,6),Le(16737512,.75));n.position.set(t*1.82,-.04,-.28),s.group.add(n),s.auras.push(n);const r=new C(new Ht(.03,.04,.55,6),ce(1312792,16751584,1.4));r.rotation.x=Math.PI/2,r.rotation.y=t*-.55,r.position.set(t*1.95,.02,.12),Vt(s.group,r,s.glows,s.extras,4)}return s}function Ug(){const s=Xe(),t=new C(new Xt(.42,.045,6,18),ce(528408,8057087,1.8));t.rotation.x=Math.PI/2,t.position.set(0,.02,.15),Vt(s.group,t,s.glows,s.extras);const e=t.clone();e.position.z=.55,e.scale.setScalar(.82),Vt(s.group,e,s.glows,s.extras);const i=new C(new Xt(.5,.03,6,18),Le(8057087,.55));i.rotation.x=Math.PI/2,i.position.set(0,.02,.35),s.group.add(i),s.auras.push(i);const n=t.clone();return n.position.z=-.2,n.scale.setScalar(.7),Vt(s.group,n,s.glows,s.extras,4),s}function Ng(){const s=Xe();return[[-1,0],[1,0],[-1,1],[1,1]].forEach(([e,i],n)=>{const r=new C(new ot(.08,.08,.45),ce(1706004,16743144,1.2));r.position.set(e*(1.15+i*.25),.18+i*.12,.55),Vt(s.group,r,s.glows,s.extras,n>=2?3:0);const o=new C(new ke(.14,0),ce(1312784,16743144,1.8));o.position.set(e*(1.45+i*.35),.22+i*.18,.7),Vt(s.group,o,s.glows,s.extras,n>=2?3:0);const a=new C(new mt(.18,8,6),Le(16743144,.45));a.position.copy(o.position),s.group.add(a),s.auras.push(a),n>=2&&s.extras.push({mesh:a,at:3})}),s}function Fg(){const s=Xe(),t=new C(new ot(.55,.18,.7),ce(528408,6087167,1.3));t.position.set(0,-.42,.55),Vt(s.group,t,s.glows,s.extras);for(const i of[-.16,.16]){const n=new C(new mt(.1,8,6),ce(661544,6087167,1.7));n.position.set(i,-.52,.55),Vt(s.group,n,s.glows,s.extras);const r=new C(new mt(.14,8,6),Le(6087167,.5));r.position.copy(n.position),s.group.add(r),s.auras.push(r)}const e=new C(new mt(.1,8,6),ce(661544,6087167,1.7));return e.position.set(0,-.54,.78),Vt(s.group,e,s.glows,s.extras,4),s}function kg(){const s=Xe();for(const t of[-1,1]){const e=new C(new ot(1.15,.06,.22),ce(2761224,16765286,1.7));e.position.set(t*1.35,.08,-.15),e.rotation.y=t*.45,e.rotation.z=t*-.18,Vt(s.group,e,s.glows,s.extras);const i=new C(new ot(.9,.03,.06),Le(16765286,.8));i.position.set(t*1.55,.1,-.28),i.rotation.y=t*.45,s.group.add(i),s.auras.push(i);const n=e.clone();n.position.set(t*1.15,-.12,.05),n.rotation.z=t*.22,Vt(s.group,n,s.glows,s.extras,4)}return s}function Bg(){const s=Xe(),t=new C(new Re(.08,1.65,6),ce(2238512,16777215,1.6));t.rotation.x=-Math.PI/2,t.position.set(0,-.02,-1.85),Vt(s.group,t,s.glows,s.extras);const e=new C(new Ht(.03,.03,1.2,6),Le(16777215,.65));e.rotation.x=Math.PI/2,e.position.set(0,-.02,-1.7),s.group.add(e),s.auras.push(e);const i=new C(new Xt(.12,.02,6,12),Le(10217471,.7));i.position.set(0,-.02,-1.15),s.group.add(i),s.auras.push(i);const n=t.clone();return n.scale.setScalar(.55),n.position.set(0,.12,-1.55),Vt(s.group,n,s.glows,s.extras,4),s}function Og(){const s=Xe(),t=new C(new Xt(.38,.045,6,16),ce(1706004,16737512,1.8));t.position.set(0,.42,-.15),t.rotation.x=.4,Vt(s.group,t,s.glows,s.extras);const e=new C(new Xt(.46,.03,6,16),Le(16737512,.55));e.position.copy(t.position),e.rotation.copy(t.rotation),s.group.add(e),s.auras.push(e);for(let n=0;n<6;n++){const r=n/6*Math.PI*2,o=new C(new mt(.05,6,6),Le(16751584,.8));o.position.set(Math.cos(r)*.38,.42+Math.sin(r)*.12,-.15),s.group.add(o),s.auras.push(o)}const i=t.clone();return i.scale.setScalar(.62),i.position.y=.52,Vt(s.group,i,s.glows,s.extras,4),s}function zg(){const s=Xe();for(const n of[-1,1]){const r=new C(new Re(.12,.7,5),ce(1708072,13940991,1.8));r.rotation.x=-Math.PI/2,r.rotation.y=n*.35,r.position.set(n*.28,.08,-1.35),Vt(s.group,r,s.glows,s.extras)}const t=new C(new ke(.14,0),Le(13940991,.7));t.position.set(0,.1,-1.2),s.group.add(t),s.auras.push(t);const e=new C(new Re(.1,.55,5),ce(1708072,16737512,1.5));e.rotation.x=-Math.PI/2,e.rotation.y=.7,e.position.set(-.48,.02,-1.15);const i=e.clone();return i.rotation.y=-.7,i.position.x=.48,Vt(s.group,e,s.glows,s.extras,4),Vt(s.group,i,s.glows,s.extras,4),s}function Hg(){const s=Xe(),t=new C(new Ht(.42,.22,.12,16),ce(1054752,6087167,1.4));t.position.set(0,-.38,.15),Vt(s.group,t,s.glows,s.extras);const e=new C(new Xt(.38,.03,8,20),Le(6087167,.55));e.rotation.x=Math.PI/2,e.position.set(0,-.42,.15),s.group.add(e),s.auras.push(e);const i=new C(new Xt(.52,.025,8,20),Le(10217471,.4));i.rotation.x=Math.PI/2,i.position.set(0,-.44,.15),s.group.add(i),s.auras.push(i);const n=new C(new Xt(.68,.02,8,22),Le(6087167,.32));return n.rotation.x=Math.PI/2,n.position.set(0,-.46,.15),Vt(s.group,n,s.glows,s.extras,3),s.auras.push(n),s}function Vg(){const s=Xe();for(const n of[-1,1]){const r=new C(new Xt(.12,.04,8,12),ce(1706004,16737512,1.7));r.position.set(n*.38,-.36,.15),r.rotation.z=n*.5,Vt(s.group,r,s.glows,s.extras);const o=new C(new mt(.07,8,6),Le(16737512,.7));o.position.copy(r.position),s.group.add(o),s.auras.push(o)}const t=new C(new mt(.09,8,6),ce(1181720,16765286,2));t.position.set(0,-.48,.15),Vt(s.group,t,s.glows,s.extras);const e=new C(new Xt(.1,.03,6,12),ce(1706004,16737512,1.8));e.position.set(-.22,-.5,.32),Vt(s.group,e,s.glows,s.extras,3);const i=e.clone();return i.position.x=.22,Vt(s.group,i,s.glows,s.extras,3),s}function ih(s,t){const e=s?.kits?.tractor;if(e)for(const n of e.auras)n.rotation.z+=t*1.6;const i=s?.kits?.pull;if(i)for(const n of i.auras)n.rotation.y+=t*2.4}function Ca(s,t={},e=null){const i=s?.kits;if(i)for(const n of Ae){const r=i[n];if(!r)continue;const o=t[n]|0,a=e===n&&o<=0,l=o>0||a;r.group.visible=l;const c=ye[n]?.max||8,h=a?.18:Math.max(0,Math.min(1,o/c));for(const u of r.glows)u.material?.emissive&&(u.material.emissiveIntensity=a?.45:.7+h*2.6,u.material.transparent=a,u.material.opacity=a?.42:1);for(const u of r.auras)u.material&&(u.visible=l,u.material.opacity=a?.18:.28+h*.62,u.scale.setScalar(a?.92:.9+h*.45));for(const u of r.extras)u.mesh.visible=l&&(a?u.at<=3:o>=u.at),u.mesh.material?.emissive&&(u.mesh.material.emissiveIntensity=a?.4:1.2+h*2,u.mesh.material.transparent=a,u.mesh.material.opacity=a?.38:1)}}function nh(){const s=new ne;s.scale.setScalar(3.1);const t=new ne;s.add(t);const e=uo("#647a9a","#7ad8ff"),i=uo("#2a3348","#ff7ae0"),n=uo("#1a2238","#5ce1ff"),r=new Wt({color:10217471}),o=new Wt({color:9234431}),a=new Wt({color:16765286}),l=new Wt({color:16737512}),c=new C(new Re(.42,2.9,6),e);c.rotation.x=-Math.PI/2,rn(c),t.add(c);const h=new C(new ot(.55,.28,1.9),i);h.position.z=.1,rn(h,16751584),t.add(h);const u=new C(new ot(.18,.16,2.35),n);u.position.set(0,.18,.05),t.add(u);const d=new C(new ot(.42,.12,1.55),i);d.position.set(0,-.22,.2),rn(d,6087167),t.add(d);const f=new C(new mt(.24,12,10),o);f.scale.set(1,.62,1.35),f.position.set(0,.2,-.35),t.add(f);const g=new C(new ot(.38,.05,.85),a);g.position.set(0,.32,-.28),t.add(g);const _=new C(new ot(3.1,.07,.95),e);_.position.set(0,-.08,.55),rn(_),t.add(_);const m=new C(new ot(2.2,.05,.18),r);m.position.set(0,-.05,.18),t.add(m);const p=new C(new ot(.95,.05,.42),n);p.position.set(-.85,-.02,-.35),p.rotation.y=.35;const w=p.clone();w.position.x=.85,w.rotation.y=-.35,t.add(p,w);const S=new C(new ot(.72,.045,.28),e);S.position.set(-.55,.02,-.95),S.rotation.z=.18;const M=S.clone();M.position.x=.55,M.rotation.z=-.18,rn(S),rn(M),t.add(S,M);const I=new C(new Ht(.07,.09,.7,8),i);I.rotation.x=Math.PI/2,I.position.set(-.38,-.12,-.85);const E=I.clone();E.position.x=.38;const y={},A=Xe();A.group.add(I,E);const v=new C(new mt(.08,8,6),Le(13172726,.35));v.position.set(-.38,-.12,-1.18);const x=v.clone();x.position.x=.38,A.group.add(v,x),A.auras.push(v,x);const L=new C(new Ht(.045,.055,.85,6),ce(1712696,6087167,.8));L.rotation.x=Math.PI/2,L.position.set(-.22,-.16,-.95);const O=L.clone();O.position.x=.22,Vt(A.group,L,A.glows,A.extras,5),Vt(A.group,O,A.glows,A.extras,5),y.spark=A,y.needle=Rg(),y.seeker=Pg(),y.shard=Lg(),y.titan=Ig(),y.wing=Dg(),y.helix=Ug(),y.drone=Ng(),y.mine=Fg(),y.shear=kg(),y.spire=Bg(),y.nova=Og(),y.prism=zg(),y.tractor=Hg(),y.pull=Vg();for(const Gt of Ae)y[Gt]&&t.add(y[Gt].group);const B=new C(new ot(.22,.08,.45),n);B.position.set(-1.55,-.06,.42);const X=B.clone();X.position.x=1.55,t.add(B,X);const Y=new C(new mt(.07,8,6),l);Y.position.set(-1.62,-.04,.18);const k=Y.clone();k.position.x=1.62,k.material=a,t.add(Y,k);const $=new C(new ot(.07,.78,.7),e);$.position.set(0,.42,.7),rn($),t.add($);const H=new C(new ot(.05,.12,.55),r);H.position.set(0,.82,.62),t.add(H);const et=new C(new Ht(.14,.2,.55,10),i);et.rotation.x=Math.PI/2,et.position.set(-.55,-.1,1.15);const rt=et.clone();rt.position.x=.55,t.add(et,rt);const tt=new C(new Ht(.11,.16,.22,8),n);tt.rotation.x=Math.PI/2,tt.position.set(-.55,-.1,1.38);const Dt=tt.clone();Dt.position.x=.55,t.add(tt,Dt);const Qt=new C(new mt(.16,12,10),r);Qt.position.set(-.55,-.1,1.42);const K=Qt.clone();K.position.x=.55,t.add(Qt,K);const it=new C(new mt(.12,10,8),new Wt({color:16734932}));it.position.set(0,.05,.85),t.add(it);const xt=new C(new mt(.2,10,8),new Wt({color:13172726,transparent:!0,opacity:0,blending:Me,depthWrite:!1}));xt.position.set(0,-.02,-1.52);const at=new C(new ot(.08,.08,.85),new Wt({color:10217471,transparent:!0,opacity:0,blending:Me,depthWrite:!1}));at.position.set(0,-.02,-1.85),t.add(xt,at);const Tt=new Wn(6087167,3.5,18,2);Tt.position.set(-.55,-.1,1.35);const Pt=new Wn(6087167,3.5,18,2);Pt.position.set(.55,-.1,1.35);const Bt=new Wn(16737512,2.2,14,2);Bt.position.set(0,.15,-1.3),s.add(Tt,Pt,Bt);const he={group:s,rig:t,exhausts:[Qt,K],lights:[Tt,Pt],core:it,muzzle:xt,muzzleSpike:at,kits:y};return Ca(he,{spark:1}),he}class Gg{constructor(t,e=40){this.max=e,this.history=[];const i=new Float32Array(e*3),n=new Float32Array(e*3),r=new Float32Array(e);this.geo=new Pe,this.geo.setAttribute("position",new Ee(i,3)),this.geo.setAttribute("aColor",new Ee(n,3)),this.geo.setAttribute("aAlpha",new Ee(r,1)),this.mat=new ve({vertexShader:pg,fragmentShader:mg,transparent:!0,depthWrite:!1,blending:Me}),this.line=new Gc(this.geo,this.mat),t.add(this.line),this.positions=i,this.colors=n,this.alphas=r}push(t,e){this.history.unshift(t.clone()),this.history.length>this.max&&this.history.pop();const i=this.history.length;for(let n=0;n<i;n++){const r=this.history[n];this.positions[n*3]=r.x,this.positions[n*3+1]=r.y,this.positions[n*3+2]=r.z;const o=1-n/this.max;this.colors[n*3]=(e>.4?.7:.2)*o,this.colors[n*3+1]=.45*o,this.colors[n*3+2]=.7*o,this.alphas[n]=.28*o}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this.geo.setDrawRange(0,i)}}const Wg={stinger:[{at:88,kind:"squad",form:"silk-cut",role:"sine",n:8,ahead:88},{at:112,kind:"gate"},{at:148,kind:"breath"},{at:188,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:86},{at:228,kind:"blockers",n:2},{at:268,kind:"squad",form:"silk-cut",role:"dive",n:6,ahead:84},{at:310,kind:"squad",form:"flank",role:"heavy",n:2,ahead:96},{at:360,kind:"breath"},{at:400,kind:"squad",form:"silk-cut",role:"sine",n:7,ahead:88},{at:448,kind:"orbs"},{at:500,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:86},{at:548,kind:"gate"},{at:600,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:660,kind:"squad",form:"silk-cut",role:"sine",n:7,ahead:88},{at:720,kind:"breath"},{at:780,kind:"squad",form:"escort",role:"heavy",n:3,ahead:96},{at:840,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:86},{at:900,kind:"orbs"},{at:960,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:88},{at:1020,kind:"gate"},{at:1080,kind:"squad",form:"silk-cut",role:"dive",n:6,ahead:84},{at:1140,kind:"squad",form:"pair",role:"sine",n:4,ahead:86},{at:1188,kind:"squad",form:"silk-cut",role:"sine",n:6,ahead:86},{at:1228,kind:"gate"},{at:1288,kind:"squad",form:"silk-cut",role:"sine",n:5,ahead:88}],crimson:[{at:86,kind:"squad",form:"curtain",role:"cinder",n:8,ahead:86},{at:118,kind:"blockers",n:3},{at:170,kind:"breath"},{at:214,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:86},{at:258,kind:"gate"},{at:304,kind:"squad",form:"curtain",role:"dive",n:6,ahead:84},{at:352,kind:"squad",form:"flank",role:"slag",n:2,ahead:96},{at:510,kind:"breath"},{at:554,kind:"squad",form:"curtain",role:"cinder",n:7,ahead:86},{at:600,kind:"orbs"},{at:648,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:88},{at:700,kind:"blockers",n:2},{at:748,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:800,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:86},{at:860,kind:"breath"},{at:980,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:88},{at:1036,kind:"orbs"},{at:1088,kind:"squad",form:"escort",role:"slag",n:3,ahead:96},{at:1140,kind:"squad",form:"curtain",role:"cinder",n:6,ahead:86},{at:1176,kind:"squad",form:"curtain",role:"cinder",n:7,ahead:84},{at:1216,kind:"blockers",n:3},{at:1276,kind:"squad",form:"curtain",role:"cinder",n:5,ahead:86}],cathedral:[{at:88,kind:"squad",form:"aisle",role:"chime",n:4,ahead:80},{at:108,kind:"gate"},{at:132,kind:"breath"},{at:180,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:228,kind:"gate"},{at:276,kind:"squad",form:"aisle",role:"dive",n:6,ahead:84},{at:328,kind:"squad",form:"line",role:"chime",n:3,ahead:92},{at:448,kind:"breath"},{at:492,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:540,kind:"orbs"},{at:588,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:88},{at:640,kind:"gate"},{at:688,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:736,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:780,kind:"breath"},{at:900,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:88},{at:952,kind:"gate"},{at:1004,kind:"squad",form:"escort",role:"chime",n:3,ahead:94},{at:1060,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:1112,kind:"orbs"},{at:1168,kind:"squad",form:"aisle",role:"acolyte",n:6,ahead:86},{at:1210,kind:"gate"},{at:1268,kind:"squad",form:"aisle",role:"acolyte",n:5,ahead:88}],iris:[{at:90,kind:"squad",form:"split",role:"bloom",n:6,ahead:88},{at:122,kind:"orbs"},{at:154,kind:"breath"},{at:200,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:248,kind:"gate"},{at:296,kind:"squad",form:"split",role:"dive",n:6,ahead:84},{at:344,kind:"squad",form:"flank",role:"prism",n:2,ahead:96},{at:488,kind:"breath"},{at:532,kind:"squad",form:"split",role:"bloom",n:6,ahead:88},{at:580,kind:"blockers",n:2},{at:628,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:680,kind:"orbs"},{at:728,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:776,kind:"squad",form:"split",role:"bloom",n:6,ahead:88},{at:840,kind:"breath"},{at:960,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:1012,kind:"gate"},{at:1064,kind:"squad",form:"escort",role:"prism",n:3,ahead:94},{at:1116,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:1180,kind:"squad",form:"split",role:"bloom",n:6,ahead:86},{at:1220,kind:"orbs"},{at:1280,kind:"squad",form:"split",role:"bloom",n:5,ahead:88}],heart:[{at:84,kind:"squad",form:"dark",role:"ion",n:6,ahead:90},{at:116,kind:"orbs"},{at:140,kind:"breath"},{at:188,kind:"squad",form:"dark",role:"ion",n:6,ahead:86},{at:236,kind:"gate"},{at:284,kind:"squad",form:"dark",role:"dive",n:7,ahead:84},{at:336,kind:"squad",form:"line",role:"wisp",n:3,ahead:92},{at:520,kind:"breath"},{at:564,kind:"squad",form:"dark",role:"ion",n:6,ahead:88},{at:612,kind:"orbs"},{at:660,kind:"squad",form:"dark",role:"ion",n:6,ahead:86},{at:712,kind:"blockers",n:2},{at:760,kind:"squad",form:"pair",role:"dive",n:4,ahead:84},{at:800,kind:"breath"},{at:920,kind:"squad",form:"dark",role:"ion",n:6,ahead:88},{at:972,kind:"orbs"},{at:1024,kind:"squad",form:"escort",role:"wisp",n:3,ahead:94},{at:1076,kind:"squad",form:"dark",role:"ion",n:6,ahead:86},{at:1128,kind:"gate"},{at:1172,kind:"squad",form:"dark",role:"ion",n:6,ahead:86},{at:1214,kind:"orbs"},{at:1272,kind:"squad",form:"dark",role:"ion",n:5,ahead:88}]},jl=new Set(["midboss","boss","finale"]),Xg={"1-2":{camp:"stinger",mids:[340,820],midIds:["coil","empress"],boss:1320,bossId:"queen",banner:{at:88,toast:"SILK CUT"}},"1-3":{camp:"stinger",mids:[420,760],midIds:["empress","coil"],boss:1320,bossId:"warden",cut:[228],extra:[{at:228,kind:"orbs"}]},"1-4":{camp:"stinger",mids:[300,880],midIds:["warden","queen"],boss:1320,bossId:"coil",ending:{at:[1176,1236,1296],kinds:["squad","blockers","squad"]}},"1-5":{camp:"stinger",mids:[460,840],midIds:["coil","warden"],boss:1320,bossId:"empress",extra:[{at:132,kind:"blockers",n:2}]},"1-6":{camp:"stinger",mids:[350,790],midIds:["warden","coil"],boss:1400,bossId:"queen",super:!0},"2-1":{camp:"crimson",mids:[390,870],midIds:["queen","empress"],boss:1320,bossId:"coil",banner:{at:86,toast:"ASH CURTAIN"}},"2-2":{camp:"crimson",mids:[410,800],midIds:["warden","queen"],boss:1320,bossId:"empress",extra:[{at:148,kind:"gate"}]},"2-3":{camp:"crimson",mids:[280,930],midIds:["empress","warden"],boss:1320,bossId:"queen",extra:[{at:430,kind:"orbs"}]},"2-4":{camp:"crimson",mids:[450,780],midIds:["coil","queen"],boss:1320,bossId:"warden",ending:{at:[1168,1224,1284],kinds:["squad","gate","squad"]}},"2-5":{camp:"crimson",mids:[360,890],midIds:["empress","coil"],boss:1320,bossId:"queen",extra:[{at:430,kind:"gate"}]},"2-6":{camp:"crimson",mids:[330,810],midIds:["warden","empress"],boss:1400,bossId:"coil",super:!0},"3-1":{camp:"cathedral",mids:[380,850],midIds:["coil","queen"],boss:1320,bossId:"empress",banner:{at:88,toast:"LOCKED AISLE"}},"3-2":{camp:"cathedral",mids:[410,770],midIds:["empress","coil"],boss:1320,bossId:"queen",extra:[{at:616,kind:"orbs"}]},"3-3":{camp:"cathedral",mids:[300,910],midIds:["queen","coil"],boss:1320,bossId:"empress",extra:[{at:400,kind:"blockers",n:2}]},"3-4":{camp:"cathedral",mids:[450,830],midIds:["coil","empress"],boss:1320,bossId:"queen",ending:{at:[1156,1200,1260],kinds:["squad","orbs","squad"]}},"3-5":{camp:"cathedral",mids:[370,800],midIds:["queen","empress"],boss:1400,bossId:"warden",super:!0},"4-1":{camp:"iris",mids:[370,865],midIds:["coil","warden"],boss:1320,bossId:"queen",banner:{at:90,toast:"IRIS SPLIT"}},"4-2":{camp:"iris",mids:[415,755],midIds:["warden","coil"],boss:1320,bossId:"queen",extra:[{at:176,kind:"gate"}]},"4-3":{camp:"iris",mids:[290,925],midIds:["queen","coil"],boss:1320,bossId:"warden",extra:[{at:430,kind:"blockers",n:2}]},"4-4":{camp:"iris",mids:[440,785],midIds:["coil","queen"],boss:1320,bossId:"warden",ending:{at:[1164,1212,1272],kinds:["squad","gate","squad"]}},"4-5":{camp:"iris",mids:[355,875],midIds:["warden","queen"],boss:1320,bossId:"coil",extra:[{at:430,kind:"gate"}]},"4-6":{camp:"iris",mids:[395,815],midIds:["coil","warden"],boss:1320,bossId:"queen",extra:[{at:460,kind:"blockers",n:2}]},"4-7":{camp:"iris",mids:[345,805],midIds:["warden","coil"],boss:1400,bossId:"empress",super:!0},"5-1":{camp:"heart",mids:[380,855],midIds:["queen","coil"],boss:1320,bossId:"warden",banner:{at:84,toast:"DARK STRETCH"}},"5-2":{camp:"heart",mids:[405,775],midIds:["empress","warden"],boss:1320,bossId:"coil",extra:[{at:168,kind:"gate"}]},"5-3":{camp:"heart",mids:[300,915],midIds:["coil","empress"],boss:1320,bossId:"queen",extra:[{at:400,kind:"blockers",n:2}]},"5-4":{camp:"heart",mids:[445,825],midIds:["warden","queen"],boss:1320,bossId:"empress",ending:{at:[1160,1208,1264],kinds:["squad","gate","squad"]}},"5-5":{camp:"heart",mids:[365,885],midIds:["empress","coil"],boss:1320,bossId:"warden",extra:[{at:400,kind:"gate"}]},"5-6":{camp:"heart",mids:[375,795],midIds:["queen","warden"],boss:1400,bossId:"finale",super:!0}};function sh(s){return{stinger:"silk-cut",crimson:"curtain",cathedral:"aisle",iris:"split",heart:"dark"}[s]}function rh(s){return{stinger:"sine",crimson:"cinder",cathedral:"acolyte",iris:"bloom",heart:"ion"}[s]}function qg(s,t){s.push({at:t.mids[0],kind:"midboss",id:t.midIds[0]}),s.push({at:t.mids[1],kind:"midboss",id:t.midIds[1]})}function Yg(s,t){t.bossId==="finale"?s.push({at:t.boss,kind:"finale"}):s.push({at:t.boss,kind:"boss",id:t.bossId})}function $g(s,t){const e=t.camp,i=sh(e),n=rh(e);if(t.ending){const[r,o,a]=t.ending.at,[l,c,h]=t.ending.kinds,u=(d,f)=>d==="squad"?{at:f,kind:d,form:i,role:n,n:6,ahead:86}:d==="blockers"?{at:f,kind:d,n:2}:d==="orbs"?{at:f,kind:d}:{at:f,kind:d};s.push(u(l,r),u(c,o),u(h,a));return}}function Kg(s,t){const e=sh(t.camp),i=rh(t.camp);s.push({at:1188,kind:"squad",form:e,role:i,n:6,ahead:86}),s.push({at:1360,kind:"hold"})}function Zg(s,t){let e=(Wg[s]||[]).map(n=>({...n}));for(const n of t.cut||[])e=e.filter(r=>r.at!==n);t.super?(e=e.filter(n=>n.at<1160),Kg(e,t)):t.ending&&(e=e.filter(n=>n.at<1160),$g(e,t));for(const n of t.extra||[])e.push({...n});const i=[...t.mids||[],t.boss];return e=e.filter(n=>i.every(r=>Math.abs(n.at-r)>=26)),qg(e,t),Yg(e,t),e.sort((n,r)=>n.at-r.at||(jl.has(r.kind)?1:0)-(jl.has(n.kind)?1:0)),e}const jg=[{at:70,toast:"WAVE 01 — STINGER FAN",world:"default",sting:"chapter"},{at:380,toast:"MID-BOSS — WEAVER QUEEN",world:"queen",sting:"boss"},{at:820,toast:"MID-BOSS — WARDEN",world:"warden",sting:"boss"},{at:1320,toast:"FINALE — SENTINEL",world:"finale",sting:"boss"}],Jg=[{at:70,kind:"squad",form:"v",role:"dive",n:5,ahead:88},{at:118,kind:"squad",form:"line",role:"sine",n:4,ahead:92},{at:160,kind:"breath"},{at:188,kind:"squad",form:"flank",role:"heavy",n:2,ahead:96},{at:210,kind:"squad",form:"pair",role:"dive",n:2,ahead:84},{at:248,kind:"gate"},{at:268,kind:"orbs"},{at:292,kind:"squad",form:"cross",role:"sine",n:6,ahead:100},{at:330,kind:"blockers",n:2},{at:348,kind:"squad",form:"v",role:"dive",n:7,ahead:90},{at:380,kind:"midboss",id:"queen"},{at:470,kind:"breath"},{at:490,kind:"orbs"},{at:512,kind:"squad",form:"escort",role:"dive",n:5,ahead:94},{at:548,kind:"gate"},{at:572,kind:"squad",form:"line",role:"heavy",n:3,ahead:100},{at:610,kind:"squad",form:"cross",role:"sine",n:6,ahead:88},{at:648,kind:"blockers",n:3},{at:670,kind:"squad",form:"v",role:"dive",n:5,ahead:86},{at:710,kind:"squad",form:"pair",role:"sine",n:4,ahead:92},{at:748,kind:"gate"},{at:780,kind:"squad",form:"flank",role:"heavy",n:2,ahead:98},{at:820,kind:"midboss",id:"warden"},{at:920,kind:"breath"},{at:944,kind:"orbs"},{at:968,kind:"squad",form:"cross",role:"dive",n:8,ahead:90},{at:1010,kind:"squad",form:"line",role:"sine",n:5,ahead:94},{at:1048,kind:"gate"},{at:1072,kind:"blockers",n:3},{at:1100,kind:"squad",form:"escort",role:"heavy",n:5,ahead:100},{at:1148,kind:"squad",form:"v",role:"dive",n:7,ahead:88},{at:1190,kind:"squad",form:"cross",role:"sine",n:6,ahead:96},{at:1240,kind:"gate"},{at:1270,kind:"squad",form:"line",role:"dive",n:6,ahead:90},{at:1320,kind:"finale"}],fo={queen:"WEAVER QUEEN",warden:"WARDEN",coil:"TITAN COIL",empress:"WEAVER EMPRESS",finale:"SENTINEL"},fr={queen:"queen",warden:"warden",coil:"coil",empress:"empress",finale:"finale"};function Qg(s,t,e,i,n,r,o={},a=null){const l=r==="super",c=r==="finale",h=c?"FINALE":l?"SUPER BOSS":"LEVEL BOSS",u=o.mids||[380,820],d=o.boss||1320,f=[{at:70,toast:`${s} — ${t}`,world:e,sting:"chapter"},{at:u[0],toast:`MINI-BOSS — ${fo[i[0]]}`,world:fr[i[0]],sting:"boss"},{at:u[1],toast:`MINI-BOSS — ${fo[i[1]]}`,world:fr[i[1]],sting:"boss"},{at:d,toast:`${h} — ${fo[n]}`,world:fr[n],sting:"boss"}];return a&&f.splice(1,0,{at:a.at,toast:a.toast,world:e,sting:"chapter"}),(l||c)&&f.splice(-1,0,{at:1188,toast:"LAST AISLE",world:e,sting:"chapter"}),f}function oe(s,t,e,i){const n=i.mid,r=i.boss,o=Xg[s];if(!o)throw new Error(`missing beat sheet for ${s}`);const a=i.banner==="super"||i.banner==="finale",l=Zg(o.camp,o),c=Qg(s,t,e,n,r,i.banner,{mids:o.mids,boss:o.boss},o.banner);return{id:s,name:t,world:e,boss:r,banner:i.banner||"",bossWorld:fr[r]||e,exitAt:a?1480:1360,length:a?1520:1400,chapters:c,script:l}}function t_(){return{id:"1-1",name:"STINGER FAN",world:"default",boss:"finale",bossWorld:"finale",exitAt:1360,length:1400,chapters:jg.map(s=>({...s})),script:Jg.map(s=>({...s}))}}const hi=[{id:"stinger",kicker:"CAMPAIGN 01",name:"STINGER FAN",blurb:"The original rift. Sine weavers and heavy bricks live here. Dive fodder still leaks through.",world:"default",levels:[t_(),oe("1-2","SILK BREAK","default",{mid:["coil","empress"],boss:"queen"}),oe("1-3","CROSS THREAD","default",{mid:["empress","coil"],boss:"warden"}),oe("1-4","FAN STORM","default",{mid:["warden","queen"],boss:"coil"}),oe("1-5","RIFT SPINE","default",{mid:["coil","warden"],boss:"empress"}),oe("1-6","WEAVER CROWN","queen",{mid:["warden","coil"],boss:"queen",banner:"super"})]},{id:"crimson",kicker:"CAMPAIGN 02",name:"CRIMSON SHOALS",blurb:"Hot ribbon. Ember darts and slag hulls. The coil is the law here.",world:"coil",levels:[oe("2-1","EMBER DRIFT","coil",{mid:["queen","empress"],boss:"coil"}),oe("2-2","SLAG GATES","coil",{mid:["warden","queen"],boss:"empress"}),oe("2-3","MAGMA FAN","coil",{mid:["empress","warden"],boss:"queen"}),oe("2-4","ASH RIBBON","coil",{mid:["coil","queen"],boss:"warden"}),oe("2-5","CINDER NAVE","coil",{mid:["empress","coil"],boss:"queen"}),oe("2-6","TITAN COIL","coil",{mid:["warden","empress"],boss:"coil",banner:"super"})]},{id:"cathedral",kicker:"CAMPAIGN 03",name:"NULL CATHEDRAL",blurb:"Gold hush. Acolyte spires and chime discs fill the aisles. The Warden keeps every door.",world:"warden",levels:[oe("3-1","AISLE FIRE","warden",{mid:["coil","queen"],boss:"empress"}),oe("3-2","NAVE LOCK","warden",{mid:["empress","coil"],boss:"queen"}),oe("3-3","CHOIR WALL","warden",{mid:["queen","coil"],boss:"empress"}),oe("3-4","GOLD HUSH","warden",{mid:["coil","empress"],boss:"queen"}),oe("3-5","WARDEN KEEP","warden",{mid:["queen","empress"],boss:"warden",banner:"super"})]},{id:"iris",kicker:"CAMPAIGN 04",name:"IRIS FORGE",blurb:"Magenta heat. Bloom drones and prism shards. The silk learns your name.",world:"empress",levels:[oe("4-1","BLOOM CUT","empress",{mid:["coil","warden"],boss:"queen"}),oe("4-2","PRISM GAUNTLET","empress",{mid:["warden","coil"],boss:"queen"}),oe("4-3","MAGENTA HEAT","empress",{mid:["queen","coil"],boss:"warden"}),oe("4-4","LOOM WAKE","empress",{mid:["coil","queen"],boss:"warden"}),oe("4-5","SHARD NAVE","empress",{mid:["warden","queen"],boss:"coil"}),oe("4-6","ROYAL SILK","empress",{mid:["coil","warden"],boss:"queen"}),oe("4-7","EMPRESS LOOM","empress",{mid:["warden","coil"],boss:"empress",banner:"super"})]},{id:"heart",kicker:"CAMPAIGN 05",name:"HEART OF THE RIFT",blurb:"The ribbon ends here. Ion lances and void wisps. Everything you fought was a door.",world:"heart",levels:[oe("5-1","LAST LIGHT","heart",{mid:["queen","coil"],boss:"warden"}),oe("5-2","CORE APPROACH","heart",{mid:["empress","warden"],boss:"coil"}),oe("5-3","VOID CHOIR","heart",{mid:["coil","empress"],boss:"queen"}),oe("5-4","ION WAKE","heart",{mid:["warden","queen"],boss:"empress"}),oe("5-5","CROWN GATE","heart",{mid:["empress","coil"],boss:"warden"}),oe("5-6","SENTINEL","finale",{mid:["queen","warden"],boss:"finale",banner:"finale"})]}];function kn(s,t){const e=hi[s];if(!e)return null;const i=e.levels[t];return i?{camp:e,ci:s,lv:i,li:t}:null}function Jl(s,t){const e=hi[s];return e?t+1<e.levels.length?kn(s,t+1):s+1<hi.length?kn(s+1,0):null:null}const oh="aether-campaign";function Ql(){return{nextC:0,nextL:0,cleared:[],best:0}}function po(){try{const s=JSON.parse(localStorage.getItem(oh)||"null");return!s||typeof s!="object"?Ql():{nextC:Number(s.nextC)||0,nextL:Number(s.nextL)||0,cleared:Array.isArray(s.cleared)?s.cleared:[],best:Number(s.best)||0}}catch{return Ql()}}function e_(s){return localStorage.setItem(oh,JSON.stringify(s)),s}function i_(s,t,e){const i=`${t}-${e}`,n=s.cleared.includes(i)?s.cleared:s.cleared.concat(i);let r=hi.length-1,o=hi[r].levels.length-1;t:for(let a=0;a<hi.length;a++)for(let l=0;l<hi[a].levels.length;l++)if(!n.includes(`${a}-${l}`)){r=a,o=l;break t}return{...s,cleared:n,nextC:r,nextL:o}}function n_(s=0,t=0){return 1+Math.max(0,s)*.16+Math.max(0,t)*.045}function s_(s=0){return 5+Math.max(0,s)}const r_=hi[0].levels[0].script;hi[0].levels[0].chapters;const o_=[-.84,-.5,-.18,.18,.5,.84];function a_(s,t,e){const i=e;if(s==="v"){const n=[],r=(t-1)/2;for(let o=0;o<t;o++)n.push((o-r)/Math.max(1,r)*i*.72);return n}if(s==="line"){const n=[];for(let r=0;r<t;r++)n.push((r/Math.max(1,t-1)-.5)*i*1.5);return n}if(s==="flank")return[-i*.72,i*.72].slice(0,t);if(s==="pair"){const n=[];for(let r=0;r<t;r++)n.push((r%2===0?-1:1)*i*(.22+Math.floor(r/2)*.28));return n}if(s==="cross"){const n=[];for(let r=0;r<t;r++)n.push((r/Math.max(1,t-1)-.5)*i*1.55);return n}if(s==="escort"){const n=[0],r=[];for(let o=1;o<t;o++)r.push((o%2===0?-1:1)*i*(.35+Math.floor((o-1)/2)*.28));return n.concat(r).slice(0,t)}if(s==="silk-cut"){const n=[],r=t+1;for(let o=0;o<r&&n.length<t;o++){const a=o/Math.max(1,r-1)-.5;Math.abs(a)<.07||n.push(a*i*1.72)}return n}if(s==="curtain"){const n=[];for(let r=0;r<t;r++)n.push((r/Math.max(1,t-1)-.5)*i*1.9);return n}if(s==="aisle"){const n=[],r=Math.floor(t/2);for(let o=0;o<t;o++){const a=o<r,l=a?o:o-r;n.push((a?-1:1)*i*(.5+l*.16))}return n}if(s==="split"){const n=[];for(let r=0;r<t;r++)n.push((r%2===0?-1:1)*i*(.72+Math.floor(r/2)*.1));return n}if(s==="dark"){const n=[];for(let r=0;r<t;r++){const o=r%2===0?-1:1;n.push(o*i*(.64+Math.floor(r/2)*.14))}return n}return o_.slice(0,t).map(n=>n*i)}function l_(s,t,e=7){return s==="v"?Math.abs(t-2)*9:s==="cross"?t%2*14:s==="escort"?t===0?18:0:s==="silk-cut"?t*8:s==="curtain"||s==="aisle"?0:s==="split"?Math.floor(t/2)*10:s==="dark"?t===0?28:4:0}class tc{constructor(t=r_,e=1400){this.script=t,this.length=e,this.index=0,this.cleared=!1,this.finaleAlive=!1,this.peakThreat=0}reset(){this.index=0,this.cleared=!1,this.finaleAlive=!1,this.peakThreat=0}peek(){return this.script[this.index]||null}consume(){const t=this.script[this.index];return this.index+=1,t}intensity(t,e,i,n){const r=Math.min(1,t/Math.max(240,this.length)),o=Math.min(1,e/10);let a=.18+r*.42+o*.28+(i?.08:0);return n&&(a=Math.max(a,.78)),this.cleared&&(a=.35),this.peakThreat=Math.max(this.peakThreat,a),c_(a)}}function c_(s){return Math.max(0,Math.min(1,s))}function h_(s){let t=0;return t+=Math.min(38,s.score/900),t+=Math.min(18,s.kills/5),t+=Math.min(16,(s.step||0)/5),t+=Math.min(10,(s.maxCombo||1)*1.1),t+=s.victory?14:0,t+=Math.min(8,(s.nearMisses||0)*.15),t-=Math.min(8,(s.bombsUsed||0)*1.2),t>=86?"S":t>=72?"A":t>=56?"B":t>=40?"C":"D"}const ah="aether-scores";function aa(){try{const s=JSON.parse(localStorage.getItem(ah)||"[]");return Array.isArray(s)?s.slice(0,8):[]}catch{return[]}}function u_(s){const t=aa();t.push(s),t.sort((i,n)=>n.score-i.score);const e=t.slice(0,8);return localStorage.setItem(ah,JSON.stringify(e)),e}const lh="aether-hangar",Bn={spark:{title:"PARTICLE BLASTERS",blurb:"The trickle. Forward guns. They never fan wide. Marks stretch the throw. Everything else is a different job.",unlock:0},tractor:{title:"TRACTOR WELL",blurb:"A belly well that drinks gold and powerups. This bay is range — how far the sip starts. Force is a different install. Mark 1 only tugs what you almost touch.",unlock:200},pull:{title:"TRACTOR FORCE",blurb:"How hard the well yanks. Logarithmic: fat near the hull, a whisper at the rim. Without the well you still have to be on top of the loot.",unlock:260},needle:{title:"NEEDLE LASERS",blurb:"Kills the brick. Thin lances that stay on a fat hull. Buy them for heavies, not for dives.",unlock:240},seeker:{title:"HOMING MISSILES",blurb:"Heat-seekers on the racks. They turn. You buy the rack before they exist.",unlock:380},shard:{title:"CRYSTAL SHARDS",blurb:"Splinter fire from the nose. Cheap, vicious, and locked until you pay for the cutter.",unlock:400},titan:{title:"TITAN CANNON",blurb:"The boss tooth. A door slam in the belly. You feel the kick. The Queen does too.",unlock:580},wing:{title:"WING FILAMENTS",blurb:"Owns the flanks. Angled guns so the center can stay honest.",unlock:480},helix:{title:"HELIX RIBBON",blurb:"Twinned oscillating streams. The coils have to be fitted before they sing.",unlock:460},drone:{title:"RIFT DRONES",blurb:"Orbiting guns that fly your formation. You purchase the pylons first.",unlock:540},mine:{title:"AETHER MINES",blurb:"Drops on hold. Slow crawlers in the lane. Same trigger — not gifts you place.",unlock:360},shear:{title:"RIFT SHEAR",blurb:"Wide gold blades off the shoulders. Not a blaster. A cut.",unlock:500},spire:{title:"PIERCE SPIRE",blurb:"A nose spike that keeps going. Pierces. Costs like it looks.",unlock:680},nova:{title:"NOVA BURST",blurb:"Clears the flanks. A crown bloom when the aisle fills. Pretty. Mean.",unlock:700},prism:{title:"PRISM SPLIT",blurb:"The bow learns to fan violet. Last luxury before the Sentinel.",unlock:760}};function ec(){return{gold:0,levels:Ts()}}function sr(){try{const s=JSON.parse(localStorage.getItem(lh)||"null");if(!s||typeof s!="object")return ec();const t=Ts();for(const e of Ae){const i=Number(s.levels?.[e]);Number.isFinite(i)&&(t[e]=Math.max(0,Math.min(ye[e].max,i|0)))}return t.spark<1&&(t.spark=1),{gold:Math.max(0,Number(s.gold)||0),levels:t}}catch{return ec()}}function ch(s){const t={gold:Math.max(0,s.gold|0),levels:{...Ts(),...s.levels}};return t.levels.spark<1&&(t.levels.spark=1),localStorage.setItem(lh,JSON.stringify(t)),t}function rr(){return Ta()}function hh(s){return Ae.filter(t=>(s[t]|0)>0)}function ic(s,t={}){const e=Ta();for(const i of Ae){const n=s[i]|0;if(n<=0){e[i]=0;continue}e[i]=Math.min(ye[i].max,n+(t[i]|0))}return e}function d_(s){return Ae.reduce((t,e)=>t+(s[e]|0),0)}function f_(s,t){const e=Bn[s];if(!e)return 0;const i=Math.max(1,t|0),n=.75+(e.unlock||120)/900;return Math.round((58+i*46)*(1+i*.16)*n)}function Mr(s,t){const e=s[t]|0,i=ye[t].max;return e>=i?0:e<=0?Bn[t]?.unlock||0:f_(t,e)}function p_(s,t){const e=Mr(s.levels,t);if(e<=0||s.gold<e)return{hangar:s,ok:!1,cost:e};const i={...s.levels,[t]:(s.levels[t]|0)+1};return{hangar:ch({gold:s.gold-e,levels:i}),ok:!0,cost:e}}function mo(s,t){return t<=0?s:ch({...s,gold:s.gold+(t|0)})}function m_(s,t,e){const i={...t},n=hh(s);let r=null,o=0,a=i._i||0;for(let l=0;l<e;l++){let c=!1;for(let h=0;h<n.length;h++){const u=n[(a+h)%n.length],d=(s[u]|0)+(i[u]|0);if(!(d>=ye[u].max)){i[u]=(i[u]|0)+1,a=(a+h+1)%n.length,o+=1,r=d+1>=ye[u].max?`${ye[u].tag} MAX`:`${ye[u].tag} UP`,c=!0;break}}if(!c)break}return i._i=a,{runBonus:i,toast:r,gained:o}}function g_(s,t){const e={...s};let i=Math.max(0,t|0);for(let n=Ae.length-1;n>=0&&i>0;n--){const r=Ae[n],o=e[r]|0,a=Math.min(o,i);e[r]=o-a,i-=a}return e}function go(s,t){let e=0,i=0;for(const n of hh(s)){const r=s[n]|0;e+=ye[n].max-r,i+=t[n]|0}return{cap:e,used:i,ratio:e<=0?1:i/e}}function __(s,t,{superBoss:e=!1,finale:i=!1,mids:n=2}={}){const r=55+s*30+t*12,o=i?220:e?175:110,a=Math.max(0,n)*28;return{clear:r,boss:o,mid:a,total:r+o+a}}const nc=.28;function v_(s={}){const t=s.tractor|0,e=s.pull|0;if(t<=0&&e<=0)return{range:0,force:0,rangeLv:t,forceLv:e};const i=t>0?6.2+(t-1)*3.15:5.4,n=e>0?28+(e-1)*22:16;return{range:i,force:n,rangeLv:t,forceLv:e}}function sc(s,t){const e=t?.range||0,i=t?.force||0;if(e<=0||i<=0||s>=e||s<=0)return 0;const n=Math.log(e/nc);return n>1e-8?i*(Math.log(e/Math.max(s,nc))/n):i}function _o(s,t=0,e=""){if(e==="1-1"){if((s.tractor|0)<=0)return"tractor";if((s.needle|0)<=0)return"needle"}const i=e==="1-1"?["tractor","needle",...Ae]:Ae;for(const n of i){const r=Mr(s,n);if(r>0&&t>=r)return n}return null}function x_(s,t){const e=s[t]|0,i=ye[t].max;return e>=i?"MAXED":e<=0?"INSTALL":`UPGRADE  ${e} → ${e+1}`}function M_(s,t,e,i,n){const r=s.offset?.x??0,o=s.pathDist-4,a=e??r;s.patternI=(s.patternI||0)%12;const l=s.patternI;if(s.patternI+=1,s.role==="queen")return y_(l,o,r,a,t,n,s);if(s.role==="empress")return b_(l,o,r,a,t,n,s);if(s.role==="warden")return w_(l,o,r,a,t,n,s);if(s.role==="coil")return S_(l,o,r,a,t,n,s);if(s.role==="finale")return E_(s,o,t,a,i,n);if(s.role==="cinder")return n(o,r-t*.04,7.8,!1),n(o,r+t*.04,7.8,!1),0;if(s.role==="acolyte")return n(o,r,7.2,!1),n(o-3,r,6.8,!1),0;if(s.role==="heavy"||s.role==="slag"||s.role==="chime"){const c=Math.min(8,t*.08);return l%3===0?(n(o,r-c,7,!1),n(o,r+c,7,!1)):l%3===1?(n(o,a,7.4,!0),n(o,r,7,!1)):(n(o,r-c*.5,6.8,!1),n(o,r+c*.5,6.8,!1),n(o-3,r,7.2,!0)),0}return s.role==="prism"?(n(o,r-t*.08,7.2,!1),n(o,r+t*.08,7.2,!1),n(o-2,r-t*.14,6.6,!1),n(o-2,r+t*.14,6.6,!1),0):s.role==="ion"?(n(o,r-t*.045,8.2,!1),n(o,r+t*.045,8.2,!1),0):s.role==="bloom"?(n(o,r-t*.06,7.6,!1),n(o,r+t*.06,7.6,!1),0):s.role==="wisp"?(n(o+1,r+Math.sin(i*3.2)*t*.1,7.4,!1),0):(n(o+1,r,8,!1),0)}function Cr(s){return!!(s&&(s.levelBoss||s.superBoss)&&(s.phase||1)>=3)}function y_(s,t,e,i,n,r,o){if(Cr(o)){const h=s%4;if(h===0){for(let u=0;u<5;u++)r(t-u*3,e+(u-2)*n*.15,6.8,u===2);return 0}return h===1?o.superBoss?.72:.58:h===2?(r(t,i,7.5,!0),r(t-6,i-n*.2,6.6,!0),r(t-6,i+n*.2,6.6,!0),0):.46}const a=s%6,l=n*.16,c=n*.12;if(a===0){for(let h=-2;h<=2;h++)r(t,e+h*l,7.2,h===0);return 0}if(a===1)return r(t,i,7.6,!0),r(t,i-n*.06,7.2,!1),r(t,i+n*.06,7.2,!1),0;if(a===2)return .55;if(a===3){for(let h=-3;h<=3;h++)r(t-Math.abs(h)*2,e+h*c,6.4,!1);return 0}return a===4?(r(t,e-l*1.4,6.8,!0),r(t,e+l*1.4,6.8,!0),r(t-5,i,7.4,!0),0):.4}function b_(s,t,e,i,n,r,o){if(Cr(o)){const h=s%4;return h===0?(r(t,e-n*.72,6.6,!0),r(t,e+n*.72,6.6,!0),r(t-4,e-n*.82,6.4,!1),r(t-4,e+n*.82,6.4,!1),0):h===1?o.superBoss?.64:.5:h===2?(r(t,i,7.4,!0),r(t-5,e,7,!0),0):.4}const a=s%6,l=n*.18,c=n*.13;if(a===0){for(let h=-3;h<=3;h++)r(t,e+h*l*.72,7.1,h===0);return 0}if(a===1)return r(t,i,7.6,!0),r(t,i-n*.07,7.2,!1),r(t,i+n*.07,7.2,!1),r(t-4,e,7,!0),0;if(a===2)return .5;if(a===3){for(let h=-3;h<=3;h++)r(t-Math.abs(h)*2,e+h*c,6.4,!1);return 0}return a===4?(r(t,e-l*1.5,6.8,!0),r(t,e+l*1.5,6.8,!0),r(t-5,i,7.4,!0),r(t-8,i-l,6.6,!1),r(t-8,i+l,6.6,!1),0):.38}function S_(s,t,e,i,n,r,o){if(Cr(o)){const c=n*.28;return s%2===0?(r(t,e-c,6.4,!0),r(t-5,e-c*.5,6.6,!1),.16):(r(t,e+c,6.4,!0),r(t-5,e+c*.5,6.6,!1),r(t-8,i,7.1,!0),o.superBoss?.55:.42)}const a=s%6,l=n*.2;if(a===0)return r(t,e-l,6.6,!0),r(t,e+l,6.6,!0),r(t,e,7.4,!0),0;if(a===1)return r(t,i,7.3,!0),r(t,e-l*.5,6.8,!1),r(t,e+l*.5,6.8,!1),0;if(a===2)return .52;if(a===3){for(let c=-2;c<=2;c++)r(t,e+c*l*.55,6.4,c===0);return 0}return a===4?(r(t,e-l,6.5,!0),r(t,e+l,6.5,!0),r(t-6,i,7.1,!0),0):.42}function w_(s,t,e,i,n,r,o){if(Cr(o)){const c=s%4;return c===0?(r(t,e-n*.5,6.3,!0),r(t,e+n*.5,6.3,!0),r(t-6,e-n*.66,6.1,!1),r(t-6,e+n*.66,6.1,!1),0):c===1?o.superBoss?.76:.62:c===2?(r(t,i-n*.48,6.8,!0),r(t,i+n*.48,6.8,!0),0):.44}const a=s%6,l=n*.22;if(a===0)return r(t,e-l,6.4,!0),r(t,e+l,6.4,!0),r(t,e,7.5,!0),r(t-6,e-l*.5,6.8,!1),r(t-6,e+l*.5,6.8,!1),0;if(a===1)return r(t,i-4,6.8,!0),r(t,i+4,6.8,!0),r(t,i,7.2,!0),0;if(a===2)return .62;if(a===3){for(let c=-2;c<=2;c++)r(t,e+c*l*.55,6.2,c===0);return 0}return a===4?(r(t,e-l,6.2,!0),r(t,e+l,6.2,!0),r(t-8,i-6,6.6,!1),r(t-8,i+6,6.6,!1),r(t-4,i,7,!0),0):.48}function E_(s,t,e,i,n,r){const o=s.phase||1,a=e*(o===3?.34:.26),l=(s.patternI||0)%4;if(o===1){if(l===2)return .42;const c=3;for(let h=0;h<c;h++){const u=h/(c-1)-.5;r(t,u*a*2,8,!0)}return r(t-3,i,7.4,!0),0}if(o===2){if(l%2===0){for(let c=0;c<5;c++){const h=c/4-.5;r(t,h*a*2,7.6,!0)}return 0}return l===1?(r(t,i-a*.35,7.2,!0),r(t,i+a*.35,7.2,!0),r(t-5,i,6.8,!0),0):.4}return l===0?(r(t,-a*.7,6.6,!0),r(t,a*.7,6.6,!0),r(t-8,Math.sin(n*2.4)*a,6.4,!0),0):l===1?.58:l===2?(r(t,i,6.8,!0),r(t-6,-a*.45,6.4,!0),r(t-6,a*.45,6.4,!0),0):.4}const Zt=16726996,be=6087167,jt=16765286,Ki=656916,Qn=1705224,Se=16747034,fi=16738842,T_=16720984;function Ut(s,t,e=2.2){return new Ii({color:s,metalness:.72,roughness:.28,emissive:t,emissiveIntensity:e})}function St(s,t=.85){return new Wt({color:s,transparent:!0,opacity:t,blending:Me,depthWrite:!1})}function yr(s,t=.55){return new Wt({color:s,wireframe:!0,transparent:!0,opacity:t})}function Fi(s,t,e,i,n,r,o,a=[]){return{mesh:s,body:t,wings:e,ring:i,core:n,engines:r,weak:o,parts:a,_baseEmissive:t.material.emissiveIntensity,_coreBaseScale:n.scale.x}}function A_(){const s=new ne,t=Ut(Qn,T_,2.2),e=Ut(2755090,Zt,1.45),i=Ut(Ki,Zt,1.2),n=Ut(1444626,fi,1.4),r=new C(new ke(1.05,1),t);r.scale.set(.48,.43,2.15),r.position.z=.12;const o=new ne,a=[],l=new C(new ot(.44,.32,2.75),i);l.position.set(0,.08,.22);const c=new C(new ot(1.65,.12,.78),e);c.position.set(-.95,0,.22),c.rotation.z=.14;const h=c.clone();h.position.x=.95,h.rotation.z=-.14;const u=new C(new ot(1.1,.1,.58),e);u.position.set(-1.92,-.02,.62),u.rotation.set(0,-.16,.28);const d=u.clone();d.position.x=1.92,d.rotation.y=.16,d.rotation.z=-.28;const f=new C(new ot(.9,.09,.5),i);f.position.set(-.82,.02,-1.03),f.rotation.set(0,.14,.3);const g=f.clone();g.position.x=.82,g.rotation.y=-.14,g.rotation.z=-.3;const _=new C(new Re(.2,.82,4),i);_.position.set(-2.18,.22,.54);const m=_.clone();m.position.x=2.18;const p=new C(new ot(.24,.52,1.28),i);p.position.set(0,-.34,.68);const w=new C(new ot(.16,.3,.78),n);w.position.set(-.5,-.12,.78);const S=w.clone();S.position.x=.5;const M=new C(new ot(.54,.28,.66),i);M.position.set(0,.01,-1.3),M.rotation.y=Math.PI/4;const I=new C(new Re(.3,.86,5),i);I.rotation.x=-Math.PI/2,I.position.z=-1.98;const E=new C(new Re(.15,.68,4),e);E.rotation.x=-Math.PI/2,E.position.z=-2.63;const y=new C(new ot(.035,.018,1.42),St(Zt,.75));y.position.set(-.26,.31,-.05),y.rotation.y=-.08;const A=y.clone();A.position.x=.26,A.rotation.y=.08;const v=new C(new ot(.28,.025,.035),St(Zt,.8));v.position.set(0,.25,-1.18);const x=new C(new ot(.34,.025,.04),St(be,.7));x.position.set(0,.28,1.18);const L=new C(new mt(.13,8,6),St(be,.95));L.position.set(-2.42,.02,.72);const O=L.clone();O.position.x=2.42,o.add(c,h,u,d,f,g,_,m,L,O);const B=new C(new Xt(.62,.07,8,24),St(Zt,.8));B.rotation.x=Math.PI/2,B.position.set(0,.02,-1.15);const X=new C(new mt(.29,12,8),St(Zt,.78));X.position.set(0,.04,-.48);const Y=new C(new mt(.35,10,8),St(16734932,.95));Y.position.copy(X.position);const k=[],$=[];for(const H of[-.42,.42]){const et=new C(new Ht(.24,.32,.36,8),n);et.rotation.x=Math.PI/2,et.position.set(H,-.1,1.75);const rt=new C(new Xt(.27,.045,6,12),St(Se,.75));rt.rotation.x=Math.PI/2,rt.position.set(H,-.1,1.96);const tt=new C(new mt(.27,10,6),St(Se,.92));tt.position.set(H,-.1,2.08),$.push(et,rt),k.push(tt)}return a.push(l,c,h,u,d,f,g,_,m,p,w,S,M,I,E,y,A,v,x,...$),s.add(r,l,o,p,w,S,M,I,E,y,A,v,x,B,X,Y,...$,...k),Fi(s,r,o,B,X,k,Y,a)}function C_(){const s=new ne,t=Ut(Qn,Zt,1.9),e=Ut(1641245,Zt,1.35),i=Ut(2758408,jt,1.65),n=Ut(Ki,fi,1.35),r=new C(new Ht(.98,1.12,.62,12),t);r.rotation.x=Math.PI/2,r.position.z=.12;const o=new C(new ke(.82,1),e);o.scale.set(.85,.52,.95),o.position.set(0,.02,-.62);const a=new C(new ot(.34,.28,1.8),i);a.position.set(0,-.03,1.12);const l=new ne,c=[o,a],h=[1,1.48,2.05,2.64,3.18,3.62],u=[.15,.28,.48,.74,1,.58],d=[1,1.08,1.12,1.06,.9,.68];for(const E of[-1,1])for(let y=0;y<h.length;y++){const A=new C(new ot(d[y],.12,.58+y%2*.12),e);A.position.set(E*h[y],.02+Math.sin(y*.8)*.05,u[y]),A.rotation.y=E*(.12+y*.075),A.rotation.z=E*(.1-y*.035),l.add(A),y>=2&&c.push(A)}for(const E of[-1,1]){const y=new C(new ot(.62,.1,1.15),i);y.position.set(E*2.1,-.18,1.72),y.rotation.y=E*.22;const A=new C(new ot(.46,.08,1.28),e);A.position.set(E*3.18,-.1,1.88),A.rotation.y=E*.3,l.add(y,A),c.push(y,A)}const f=new C(new ke(.35,0),e);f.scale.set(.7,.42,1.25),f.position.set(-3.9,0,.44);const g=f.clone();g.position.x=3.9,l.add(f,g),c.push(f,g);const _=new C(new Xt(1.42,.11,8,28),St(jt,.86));_.rotation.x=Math.PI/2,_.position.set(0,.08,-.55);const m=new C(new mt(.44,12,8),St(be,.72));m.position.set(0,0,-.03);const p=new C(new mt(.5,10,8),St(Zt,.92));p.position.copy(m.position);const w=[];for(const[E,y,A,v,x]of[[-.72,-.08,1.35,2.45,-.12],[.72,-.08,1.35,2.45,.12],[-.34,.18,1.72,1.7,-.22],[.34,.18,1.72,1.7,.22]]){const L=new C(new Ht(.045,.035,v,6),i);L.rotation.x=Math.PI/2,L.rotation.y=x,L.position.set(E,y,A),w.push(L)}const S=w.map(E=>{const y=new C(new Ht(.075,.06,E.geometry.parameters.height,5),St(jt,.48));return y.position.copy(E.position),y.rotation.copy(E.rotation),y}),M=[],I=[];for(const E of[-1.22,1.22]){const y=new C(new Ht(.4,.5,.72,8),n);y.rotation.x=Math.PI/2,y.position.set(E,-.16,2.08);const A=new C(new Xt(.42,.06,6,14),St(Se,.72));A.rotation.x=Math.PI/2,A.position.set(E,-.16,2.45);const v=new C(new mt(.34,10,6),St(Se,.9));v.position.set(E,-.16,2.55),I.push(y,A),M.push(v)}return c.push(...w,...S,...I),s.add(r,o,a,l,_,m,p,...w,...S,...I,...M),Fi(s,r,l,_,m,M,p,c)}function R_(){const s=new ne,t=Ut(2757120,fi,2.6),e=Ut(2758664,jt,1.8),i=Ut(Ki,jt,1.45),n=Ut(1706500,fi,2.4),r=new C(new ot(2.7,1.45,3.1),t);r.position.set(0,.02,.15);const o=new C(new ke(1.2,0),t);o.scale.set(.95,.62,1.15),o.position.set(0,.02,-1.02);const a=new C(new ot(1.55,.4,2),i);a.position.set(0,-.72,.5);const l=new ne,c=[o,a],h=new C(new ot(2.65,.42,1.72),e);h.position.set(-2,0,.52);const u=h.clone();u.position.x=2;const d=new C(new ot(1.28,.68,1.32),i);d.position.set(-3.36,.02,.46),d.rotation.y=-.1;const f=d.clone();f.position.x=3.36,f.rotation.y=.1;const g=new C(new ot(1,.28,1.52),e);g.position.set(-1.72,.48,1.34);const _=g.clone();_.position.x=1.72;const m=new C(new ot(3.7,.3,.72),i);m.position.set(0,.63,-.68),m.rotation.x=-.08,l.add(h,u,d,f,g,_),c.push(h,u,d,f,g,_,m);const p=[],w=[];for(const B of[-1.02,1.02]){const X=new C(new Ht(.27,.38,1.55,8),n);X.rotation.x=Math.PI/2,X.position.set(B,.42,-1.78);const Y=new C(new Xt(.3,.065,6,12),St(Se,.8));Y.rotation.x=Math.PI/2,Y.position.set(B,.42,-2.56),p.push(X),w.push(Y)}const S=new C(new Ht(.32,.42,.42,8),n);S.position.set(-1.22,.95,.18);const M=S.clone();M.position.x=1.22;const I=new C(new ot(.18,.06,.8),St(be,.7));I.position.set(-.72,.75,.55);const E=I.clone();E.position.x=.72,c.push(...p,...w,S,M,I,E);const y=new C(new Xt(2.48,.2,8,30),St(jt,.88));y.rotation.x=Math.PI/2,y.position.set(0,-.08,-.32);const A=new C(new mt(.57,12,8),St(Se,.82));A.position.set(0,-.02,-.05);const v=new C(new mt(.64,10,8),St(jt,.95));v.position.copy(A.position);const x=[],L=[];for(const[B,X,Y,k]of[[-.94,-.43,2.1,1],[.94,-.43,2.1,1],[0,-.52,2.32,.88]]){const $=new C(new Ht(.36*k,.47*k,.5,8),n);$.rotation.x=Math.PI/2,$.position.set(B,X,Y);const H=new C(new Xt(.39*k,.065,6,14),St(Se,.72));H.rotation.x=Math.PI/2,H.position.set(B,X,Y+.27);const et=new C(new mt(.4*k,10,6),St(Se,.93));et.position.set(B,X,Y+.42),L.push($,H),x.push(et)}const O=new C(new ot(1.15,1.15,1),i);return O.position.set(0,.88,.22),c.push(O,...L),s.add(r,o,a,l,m,...p,...w,S,M,I,E,y,A,v,O,...L,...x),Fi(s,r,l,y,A,x,v,c)}function P_(){const s=new ne,t=Ut(Qn,Zt,2.4),e=Ut(1706008,Zt,1.6),i=Ut(Ki,Zt,2),n=Ut(2496263,jt,1.6),r=new C(new ci(1.25,1),t);r.position.set(0,.12,.18);const o=new C(new ci(1.7,2),yr(Zt,.52));o.position.copy(r.position);const a=new C(new ci(1.42,1),yr(be,.32));a.position.set(0,.12,.18);const l=new ne,c=[o,a],h=[1.15,1.82,2.62,3.5,4.38,5.22,6.03,6.65],u=[.12,.24,.43,.64,.82,.94,.76,.45],d=[1.15,1.3,1.42,1.45,1.32,1.14,.92,.58];for(const M of[-1,1])for(let I=0;I<h.length;I++){const E=new C(new ot(d[I],.16,.78+I%3*.12),e);E.position.set(M*h[I],.03+Math.sin(I)*.08,u[I]),E.rotation.y=M*(.08+I*.065),E.rotation.z=M*(.08+I*.025),l.add(E),c.push(E)}const f=[];for(const[M,I,E,y,A,v,x]of[[-3.2,1.05,-.18,.34,.9,.5,-.4],[3.2,1.05,-.18,.34,.9,.5,.4],[-5.18,-.42,1.05,.26,.75,.42,-.55],[5.18,-.42,1.05,.26,.75,.42,.55],[-6.78,.36,.32,.2,.65,.34,-.72],[6.78,.36,.32,.2,.65,.34,.72]]){const L=new C(new ke(.75,0),i);L.position.set(M,I,E),L.scale.set(y,A,v),L.rotation.z=x,f.push(L)}const g=[];for(const[M,I,E,y]of[[-1.55,1.22,-.18,-.45],[-.78,1.55,-.32,-.2],[0,1.75,-.4,0],[.78,1.55,-.32,.2],[1.55,1.22,-.18,.45],[-2.4,.88,-.08,-.65],[2.4,.88,-.08,.65]]){const A=new C(new Re(.26,1.08,5),i);A.position.set(M,I,E),A.rotation.z=y,g.push(A)}l.add(...f,...g),c.push(...f,...g);const _=new C(new Xt(3.82,.13,10,42),St(Zt,.88));_.rotation.x=Math.PI/2,_.position.set(0,.3,.1);const m=new C(new mt(.68,14,10),St(be,.68));m.position.set(0,.08,.1);const p=new C(new mt(.92,14,10),St(Zt,1));p.position.set(0,-1.55,.28);const w=[],S=[];for(const M of[-1.82,0,1.82]){const I=new C(new Ht(.38,.5,.58,8),n);I.rotation.x=Math.PI/2,I.position.set(M,-.25,2.55);const E=new C(new mt(M===0?.42:.47,10,6),St(Se,.9));E.position.set(M,-.25,2.92),S.push(I),w.push(E)}return c.push(...S),s.add(r,o,a,l,_,m,p,...S,...w),Fi(s,r,l,_,m,w,p,c)}function L_(){const s=new ne,t=Ut(Ki,jt,2),e=Ut(2757120,jt,2.2),i=Ut(1706504,fi,2.3),n=Ut(1705988,fi,2.8),r=new C(new ot(3.65,1.5,3.65),t);r.position.set(0,0,.12);const o=new C(new ot(3.05,1,3.05),i);o.position.set(0,.48,.18);const a=new C(new ot(1.65,2.25,1.65),t);a.position.set(0,1.18,.08);const l=new ne,c=[o,a],h=new C(new ot(11,.58,1.38),e);h.position.set(0,-.02,.16);const u=new C(new ot(1.38,.58,11),e);u.position.set(0,-.02,.16);const d=new C(new ot(3.2,.42,1.05),t);d.position.set(-2.45,.35,-2.45),d.rotation.y=-Math.PI/4;const f=d.clone();f.position.x=2.45,f.rotation.y=Math.PI/4,l.add(h,u,d,f),c.push(h,u,d,f);const g=[];for(const[y,A,v]of[[-4.55,-4.32,-1],[4.55,-4.32,-1],[-4.55,4.62,1],[4.55,4.62,1]]){const x=new C(new Ht(.4,.54,1.6,8),n);x.rotation.x=Math.PI/2,x.position.set(y,.32,A),v>0&&(x.rotation.x=-Math.PI/2);const L=new C(new Xt(.43,.07,6,14),St(Se,.82));L.rotation.x=Math.PI/2,L.position.set(y,.32,A+v*.8),g.push(x,L)}l.add(...g),c.push(...g);const _=[];for(const[y,A]of[[-2.15,-2.1],[2.15,-2.1],[-2.15,2.32],[2.15,2.32]]){const v=new C(new ot(.9,.72,.92),t);v.position.set(y,.82,A),v.rotation.y=y*A<0?.16:-.16,_.push(v)}l.add(..._),c.push(..._);const m=new C(new Xt(3.25,.15,9,36),St(jt,.9));m.rotation.x=Math.PI/2,m.position.set(0,-.38,.1);const p=new C(new Xt(6.28,.12,9,44),St(jt,.72));p.rotation.x=Math.PI/2,p.position.set(0,-.56,.08);const w=m;c.push(p);const S=new C(new mt(.74,14,10),St(Se,.78));S.position.set(0,.12,.16);const M=new C(new mt(.86,14,10),St(jt,.96));M.position.copy(S.position);const I=[],E=[];for(const[y,A,v]of[[-1.26,-.42,3.05],[1.26,-.42,3.05],[0,-.54,3.45]]){const x=new C(new Ht(.42,.56,.58,8),n);x.rotation.x=Math.PI/2,x.position.set(y,A,v);const L=new C(new mt(.48,10,6),St(Se,.92));L.position.set(y,A,v+.42),E.push(x),I.push(L)}return c.push(...E),s.add(r,o,a,l,m,p,S,M,...E,...I),Fi(s,r,l,w,S,I,M,c)}function I_(){const s=new ne,t=1.7,e=Ut(Ki,be,2.5),i=Ut(Qn,Zt,1.8),n=Ut(Qn,Zt,2.8),r=new C(new ci(1.62,1),e);r.scale.setScalar(t*.95);const o=new C(new ci(2.12,1),i);o.scale.setScalar(t*.84);const a=new C(new ci(2.78,2),yr(be,.55));a.scale.setScalar(t*.92);const l=new C(new ci(2.45,1),yr(Zt,.28));l.scale.setScalar(t*1.02);const c=new ne,h=[o,l,a],u=[[0,0,-1],[.72,.28,-.62],[-.72,.28,-.62],[.76,-.3,.58],[-.76,-.3,.58],[0,.82,.38],[0,-.82,.42],[.72,.5,.18]],d=[],f=new P(0,1,0);for(const[E,y,A]of u){const v=new P(E,y,A).normalize(),x=new C(new Re(.34,1.8,5),n);x.position.copy(v).multiplyScalar(t*3.12),x.quaternion.setFromUnitVectors(f,v),x.scale.setScalar(t),d.push(x)}c.add(...d),h.push(...d);const g=new C(new Xt(3.92*t,.13*t,9,42),St(be,.82));g.rotation.x=Math.PI/2;const _=new C(new Xt(3.62*t,.1*t,9,38),St(be,.68)),m=new C(new Xt(4.25*t,.115*t,9,44),St(Zt,.74));m.rotation.y=Math.PI/2;const p=g;h.push(_,m);const w=new C(new mt(.7,14,10),St(Zt,.74));w.scale.setScalar(t*.82);const S=new C(new mt(.86,14,10),St(Zt,1));S.scale.setScalar(t*.82),S.position.set(0,-.28*t,.22*t);const M=[],I=[];for(const[E,y]of[[-1.38,-.72],[1.38,-.72],[-1.38,.72],[1.38,.72]]){const A=new C(new Ht(.38,.5,.62,8),i);A.rotation.x=Math.PI/2,A.position.set(E*t,y*t,3.35*t);const v=new C(new mt(.42,10,6),St(Se,.94));v.position.set(E*t,y*t,3.78*t),I.push(A),M.push(v)}return h.push(...I),s.add(r,o,a,l,c,g,_,m,w,S,...I,...M),Fi(s,r,c,p,w,M,S,h)}function mn(s){return[s(-1),s(1)]}function Zi({hull:s=Ki,emit:t=Zt,emitI:e=2.1,accent:i=be,flame:n=Se,body:r,extras:o=[],wingMeshes:a=[],ringR:l=.68,ringW:c=.07,ringZ:h=-1.05,coreR:u=.28,coreZ:d=-.42,engine:f=[[-.4,-.08,1.72],[.4,-.08,1.72]]}){const g=new ne,_=new ne,m=[];for(const y of a)_.add(y),m.push(y);for(const y of o)m.push(y);const p=new C(new Xt(l,c,8,22),St(i,.82));p.rotation.x=Math.PI/2,p.position.z=h;const w=new C(new mt(u,12,8),St(i,.8));w.position.z=d;const S=new C(new mt(u*1.18,10,8),St(t,.94));S.position.copy(w.position);const M=Ut(s,n,1.45),I=[],E=[];for(const[y,A,v]of f){const x=new C(new Ht(.2,.28,.34,8),M);x.rotation.x=Math.PI/2,x.position.set(y,A,v);const L=new C(new mt(.24,8,6),St(n,.92));L.position.set(y,A,v+.3),E.push(x),I.push(L)}return m.push(...E),g.add(r,_,...o,p,w,S,...E,...I),Fi(g,r,_,p,w,I,S,m)}function D_(){const s=Ut(2754564,fi,2.5),t=Ut(1705476,Se,1.7),e=new C(new Re(.72,2.6,6),s);e.rotation.x=Math.PI/2,e.position.z=-.12;const i=mn(r=>{const o=new C(new ot(1.35,.1,.72),t);return o.position.set(r*.85,.02,.35),o.rotation.z=r*.42,o.rotation.y=r*-.18,o}),n=new C(new ot(.18,.7,1.1),t);return n.position.set(0,-.28,.4),Zi({hull:1705476,emit:fi,accent:Se,flame:Se,body:e,extras:[n],wingMeshes:i,ringR:.55,ringZ:-1.35,coreR:.24,coreZ:-.7,engine:[[0,-.06,1.55]]})}function U_(){const s=Ut(2363912,fi,2.3),t=Ut(3809800,jt,1.6),e=new C(new ot(2.1,1.15,2.4),s),i=[...mn(o=>{const a=new C(new ot(1.15,.55,1.35),t);return a.position.set(o*1.45,.05,.2),a.rotation.z=o*.12,a})],n=new C(new ot(1.8,.28,.55),t);n.position.set(0,.55,-.7);const r=new C(new ot(.9,.45,.9),s);return r.position.set(0,-.05,-1.45),Zi({hull:2363912,emit:fi,accent:jt,flame:Se,body:e,extras:[n,r],wingMeshes:i,ringR:1.15,ringW:.12,ringZ:-.35,coreR:.42,coreZ:.05,engine:[[-.7,-.35,1.55],[.7,-.35,1.55],[0,-.42,1.72]]})}function N_(){const s=Ut(1708552,jt,2.1),t=Ut(Ki,jt,1.5),e=new C(new Ht(.28,.55,2.9,6),s);e.rotation.x=Math.PI/2;const i=new C(new Xt(.72,.05,6,18),St(jt,.9));i.position.set(0,.55,-.2);const n=mn(o=>{const a=new C(new ot(1.55,.12,.22),t);return a.position.set(o*.85,.35,.15),a.rotation.z=o*-.35,a}),r=new C(new Re(.38,.9,4),t);return r.rotation.x=-Math.PI/2,r.position.z=-1.7,Zi({hull:1708552,emit:jt,accent:jt,flame:jt,body:e,extras:[i,r],wingMeshes:n,ringR:.48,ringZ:-1.1,coreR:.26,coreZ:-.15,engine:[[0,-.12,1.7]]})}function F_(){const s=Ut(2234376,jt,2),t=new C(new Ht(1.45,1.55,.42,14),s);t.rotation.x=Math.PI/2;const e=new C(new Xt(1.55,.12,8,24),St(jt,.85));e.rotation.x=Math.PI/2;const i=new C(new mt(.32,10,8),St(be,.8));i.position.z=.55;const n=mn(r=>{const o=new C(new ot(.28,.7,.28),s);return o.position.set(r*1.15,.55,0),o});return Zi({hull:2234376,emit:jt,accent:jt,flame:Se,body:t,extras:[e,i],wingMeshes:n,ringR:1.05,ringW:.1,ringZ:-.15,coreR:.4,coreZ:-.02,engine:[[-.55,-.2,.95],[.55,-.2,.95]]})}function k_(){const s=Ut(1705492,Zt,2.2),t=Ut(2754584,Zt,1.7),e=new C(new mt(.55,10,8),s),i=[];for(let r=0;r<6;r++){const o=new C(new Re(.42,1.35,5),t),a=r/6*Math.PI*2;o.position.set(Math.cos(a)*.95,Math.sin(a)*.55,.15),o.rotation.z=a+Math.PI/2,o.rotation.x=.55,i.push(o)}const n=new C(new Re(.22,1.1,5),St(jt,.85));return n.rotation.x=-Math.PI/2,n.position.z=-1.05,Zi({hull:1705492,emit:Zt,accent:Zt,flame:Zt,body:e,extras:[n],wingMeshes:i,ringR:.82,ringZ:.05,coreR:.3,coreZ:0,engine:[[0,-.15,1.05]]})}function B_(){const s=Ut(1312800,Zt,2),t=Ut(2756672,be,1.8),e=new C(new ke(.85,0),s);e.scale.set(.7,.7,1.35);const i=[];for(const[n,r,o,a,l,c]of[[-.95,.25,-.2,.45,.45,1.4],[.95,.2,.1,.4,.4,1.25],[-.55,-.45,.35,.35,.55,1.1],[.5,-.4,-.45,.38,.38,1.2],[0,.7,.15,.32,.7,.9]]){const h=new C(new ke(.55,0),t);h.scale.set(a,l,c),h.position.set(n,r,o),i.push(h)}return Zi({hull:1312800,emit:Zt,accent:be,flame:Zt,body:e,extras:[],wingMeshes:i,ringR:.9,ringZ:-.85,coreR:.32,coreZ:-.1,engine:[[-.35,-.2,1.35],[.35,-.2,1.35]]})}function O_(){const s=Ut(528408,be,2.3),t=Ut(660776,be,1.6),e=new C(new ot(.55,.4,2.2),s),i=mn(o=>{const a=new C(new Ht(.16,.16,2.8,6),t);return a.rotation.x=Math.PI/2,a.position.set(o*.85,.08,-.15),a}),n=mn(o=>{const a=new C(new Re(.2,.7,5),St(be,.9));return a.rotation.x=-Math.PI/2,a.position.set(o*.85,.08,-1.7),a}),r=new C(new ot(1.7,.16,.28),t);return r.position.set(0,.08,.35),Zi({hull:528408,emit:be,accent:be,flame:be,body:e,extras:[r,...n],wingMeshes:i,ringR:.5,ringZ:-.55,coreR:.26,coreZ:.05,engine:[[-.85,.08,1.45],[.85,.08,1.45]]})}function z_(){const s=Ut(656920,jt,1.8),t=St(be,.45),e=new C(new mt(.48,10,8),s);e.scale.set(.7,.55,1.4);const i=mn(r=>{const o=new C(new ws(1.35,7),t);return o.position.set(r*1.15,.15,.1),o.rotation.y=r*.55,o.rotation.z=r*.35,o}),n=new C(new Re(.32,1.4,6),s);return n.rotation.x=Math.PI/2,n.position.z=1.05,Zi({hull:656920,emit:jt,accent:be,flame:jt,body:e,extras:[n],wingMeshes:i,ringR:.62,ringZ:-.85,coreR:.28,coreZ:-.35,engine:[[0,-.12,1.85]]})}function H_(){const s=new ne,t=Ut(2755588,fi,2.5),e=Ut(1705988,jt,1.7),i=new C(new Xt(1.85,.55,10,22),t);i.rotation.x=Math.PI/2;const n=new ne,r=[];for(let d=0;d<8;d++){const f=d/8*Math.PI*2,g=new C(new ot(.55,.28,2.1),e);g.position.set(Math.cos(f)*2.15,Math.sin(f)*.35,Math.sin(f*2)*.4),g.rotation.y=f,n.add(g),r.push(g)}const o=new C(new Ht(.7,.9,1.4,8),t);o.rotation.x=Math.PI/2,r.push(o);const a=new C(new Xt(2.4,.12,8,28),St(Se,.88));a.rotation.x=Math.PI/2;const l=new C(new mt(.7,12,8),St(Se,.85)),c=new C(new mt(.82,10,8),St(jt,.95)),h=[],u=[];for(const[d,f]of[[-1.6,-.4],[1.6,-.4],[0,.7]]){const g=new C(new Ht(.32,.42,.5,8),e);g.rotation.x=Math.PI/2,g.position.set(d,f,1.7);const _=new C(new mt(.36,8,6),St(Se,.92));_.position.set(d,f,2.05),u.push(g),h.push(_)}return r.push(o,...u),s.add(i,o,n,a,l,c,...u,...h),Fi(s,i,n,a,l,h,c,r)}function V_(){const s=new ne,t=Ut(Qn,Zt,2.4),e=Ut(2754584,jt,1.85),i=new C(new mt(1.15,12,10),t);i.scale.set(.85,.7,1.55);const n=new ne,r=[];for(let d=0;d<10;d++){const f=d/10*Math.PI*2,g=new C(new Re(.55,2.4,5),e);g.position.set(Math.cos(f)*1.7,Math.sin(f)*.85,-.2),g.rotation.z=f+Math.PI/2,g.rotation.x=.7,n.add(g),r.push(g)}const o=new C(new Re(.7,1.6,6),St(jt,.8));o.rotation.x=-Math.PI/2,o.position.z=-2.15,r.push(o);const a=new C(new Xt(2.05,.14,8,28),St(Zt,.88));a.rotation.x=Math.PI/2,a.position.z=-.4;const l=new C(new mt(.62,12,8),St(jt,.85));l.position.z=-.15;const c=new C(new mt(.72,10,8),St(Zt,.95));c.position.copy(l.position);const h=[],u=[];for(const d of[-.7,.7]){const f=new C(new Ht(.28,.38,.45,8),e);f.rotation.x=Math.PI/2,f.position.set(d,-.25,1.85);const g=new C(new mt(.32,8,6),St(Zt,.92));g.position.set(d,-.25,2.18),u.push(f),h.push(g)}return r.push(o,...u),s.add(i,n,o,a,l,c,...u,...h),Fi(s,i,n,a,l,h,c,r)}function Xi(s,t){const e=s._baseEmissive??2.2,i=Math.max(0,Math.min(1,t));s.body.material.emissiveIntensity=e+i*8}function vo(s,t){const e=Math.max(1,Math.min(3,t)),i=s.parts??[],n=s._coreBaseScale??1;if(e===1){for(const r of i)r.visible=!0;s.core.scale.setScalar(n),s.weak&&(s.weak.visible=!0),s.ring&&(s.ring.visible=!0),s.wings&&(s.wings.visible=!0)}else if(e===2){const r=Math.max(1,Math.floor(i.length*.45));i.forEach((o,a)=>{o.visible=a>=r}),s.core.scale.setScalar(n*1.35),s.weak&&(s.weak.visible=!0)}else i.forEach(r=>{r.visible=!1}),s.core.scale.setScalar(n*1.85),s.weak&&(s.weak.visible=!0),s.ring&&(s.ring.visible=!1)}const rc={dive:A_,sine:C_,heavy:R_,cinder:D_,slag:U_,acolyte:N_,chime:F_,bloom:k_,prism:B_,ion:O_,wisp:z_,queen:P_,warden:L_,coil:H_,empress:V_};function G_(s){return new ve({uniforms:{uTime:{value:0},uSeed:{value:Math.random()*40},uColor:{value:new W(s)}},vertexShader:hg,fragmentShader:ug,transparent:!0,blending:Me,depthWrite:!1})}class W_{constructor(t){this.scene=t,this.orbs=[],this.gates=[],this.enemies=[],this.blockers=[],this.bullets=[],this.enemyShots=[],this.pickups=[],this._tractor={range:0,force:0},this.explosions=[],this.impacts=[],this.boss=null,this.time=0,this.laneLimit=24,this.coinValue=5,this.onWindup=null,this.onShot=null,this._seedOrbs(),this._seedGates(),this._seedEnemies(),this._seedBlockers(),this._seedBullets(),this._seedPickups(),this._seedExplosions(),this._seedImpacts()}_seedOrbs(){for(let t=0;t<28;t++){const e=t%3===0?"#ffd166":"#5ce1ff",i=G_(e),n=new C(new ci(.55,1),i),r=new C(new mt(1.1,16,12),new Wt({color:e,transparent:!0,opacity:.18,blending:Me,depthWrite:!1}));n.add(r),n.visible=!1,this.scene.add(n),this.orbs.push({mesh:n,alive:!1,pathDist:0,radius:1.4,value:t%3===0?40:12,color:new W(e),offset:new P})}}_seedGates(){for(let t=0;t<8;t++){const e=new ne,i=new C(new Xt(6.4,.22,12,64),new Ii({color:1056816,emissive:16726996,emissiveIntensity:3.4,metalness:.4,roughness:.25})),n=new C(new ws(6,32),new Wt({color:16726996,transparent:!0,opacity:.28,blending:Me,depthWrite:!1,side:ai}));e.add(i,n),e.visible=!1,this.scene.add(e),this.gates.push({mesh:e,ring:i,shield:n,alive:!1,pathDist:0,passed:!1,locked:!0,hp:4,burst:0,burstAge:0,pulse:0})}}_seedEnemies(){for(let t=0;t<28;t++){const e=new ne;e.visible=!1,this.scene.add(e),this.enemies.push({mesh:e,kits:{},craft:null,ring:null,wings:null,body:null,alive:!1,pathDist:0,hp:4,radius:3.4,cooldown:0,windup:0,windMax:.18,flash:0,elite:!1,offset:new P,role:"dive",nearMiss:!1,patternI:0,visPhase:1,weak:null,core:null})}}_seedBlockers(){for(let t=0;t<12;t++){const e=new C(new ke(1,0),new Ii({color:2757120,metalness:.45,roughness:.28,emissive:16747034,emissiveIntensity:3.2})),i=new C(new mt(1.35,16,12),new Wt({color:16751162,transparent:!0,opacity:.16,blending:Me,depthWrite:!1}));e.add(i),e.visible=!1,this.scene.add(e),this.blockers.push({mesh:e,alive:!1,pathDist:0,hp:3,radius:3.2,offset:new P})}}_seedBullets(){this._shotGeo={spark:new ot(.22,.22,1.15),needle:new ot(.12,.12,14),titan:new ot(1.85,.62,6.8),seeker:new ke(.55,0),shard:new Gn(.42,0),mine:new mt(.55,10,8),nova:new ke(.4,0),wing:new ot(.28,.12,3.4),helix:new ot(.22,.22,4.2),shear:new ot(.55,.18,3.8),spire:new ot(.1,.1,16),drone:new mt(.32,8,6),prism:new ot(.22,.22,2.4)},this._tracerGeo=new ot(.06,.06,3.6);for(let t=0;t<480;t++){const e=new C(this._shotGeo.spark,new Wt({color:15269887})),i=new C(this._tracerGeo,new Wt({color:11075576,transparent:!0,opacity:.55,blending:Me,depthWrite:!1}));i.position.z=1.4,e.add(i),e.visible=!1,this.scene.add(e),this.bullets.push({mesh:e,vel:new P,alive:!1,life:0,pathDist:0,laneX:0,along:1,speed:120,laneDrift:0,damage:1,home:0,homeSteer:0,pierce:0,hitR:1.6,wobble:0,phase:0,hitList:[],kind:"spark",tracer:i})}for(let t=0;t<96;t++){const e=new C(new mt(.58,12,10),new Wt({color:16718408})),i=new C(new mt(1.05,12,10),new Wt({color:16722530,transparent:!0,opacity:.55,blending:Me,depthWrite:!1}));e.add(i),e.visible=!1,this.scene.add(e),this.enemyShots.push({mesh:e,vel:new P,alive:!1,life:0,pathDist:0,laneX:0,along:-1,speed:8,fat:!1})}}_seedPickups(){for(let t=0;t<64;t++){const e=new C(new Gn(1.15,0),new Wt({color:8057087})),i=new C(new mt(1.85,10,8),new Wt({color:6087167,transparent:!0,opacity:.28,blending:Me,depthWrite:!1}));e.add(i),e.visible=!1,this.scene.add(e),this.pickups.push({mesh:e,glow:i,alive:!1,pathDist:0,laneX:0,radius:2.1,value:1,magnet:0,grace:0,kind:"mote"})}}_seedExplosions(){this._shardGeo=new Gn(.32,0),this._flashGeo=new mt(.7,8,6);for(let t=0;t<16;t++){const e=new ne,i=new Wt({color:6087167,transparent:!0,opacity:1,depthWrite:!1}),n=[];for(let a=0;a<10;a++){const l=new C(this._shardGeo,i);l.userData.vel=new P,e.add(l),n.push(l)}const r=new Wt({color:16777215,transparent:!0,opacity:0,blending:Me,depthWrite:!1}),o=new C(this._flashGeo,r);e.add(o),e.visible=!1,this.scene.add(e),this.explosions.push({group:e,shards:n,shardMat:i,flash:o,flashMat:r,alive:!1,life:0,duration:.45})}}_seedImpacts(){for(let t=0;t<72;t++){const e=new C(new mt(.22,6,6),new Wt({color:10156031,transparent:!0,opacity:1,blending:Me,depthWrite:!1}));e.visible=!1,this.scene.add(e),this.impacts.push({mesh:e,vel:new P,alive:!1,life:0,duration:.16})}}reset(){for(const t of[this.orbs,this.gates,this.enemies,this.blockers,this.bullets,this.enemyShots,this.pickups])for(const e of t)e.alive=!1,e.mesh.visible=!1,"passed"in e&&(e.passed=!1),"locked"in e&&(e.locked=!0),"nearMiss"in e&&(e.nearMiss=!1),"burst"in e&&(e.burst=0),"burstAge"in e&&(e.burstAge=0),"grace"in e&&(e.grace=0);this.boss&&(this.scene.remove(this.boss.mesh),this.boss=null);for(const t of this.explosions)t.alive=!1,t.life=0,t.group.visible=!1;for(const t of this.impacts)t.alive=!1,t.life=0,t.mesh.visible=!1;this.time=0,this.laneLimit=24,this.coinValue=5}spawnAhead(t,e){this._placeInactive(this.orbs,t,e,78,7,"orb")}spawnSquad(t,e,i,n,r,o=90,a=1){const l=this.laneLimit||24,c=r||4,h=a_(i,c,l);for(let u=0;u<c;u++){const d=this.enemies.find(g=>!g.alive);if(!d)break;const f=e+o+l_(i,u,c);this._placeOne(d,t,f,"enemy"),this._dressEnemy(d,n||"dive",a,h[u]??0,l)}}spawnNamed(t,e,i,n=96,r=0,o=null,a=1,l={}){const c=this.enemies.find(h=>!h.alive);c&&(this._placeOne(c,t,e+n,"enemy"),this._dressEnemy(c,i,a,0,this.laneLimit||24,r,o,l))}spawnGateAt(t,e,i=72,n=1){const r=this.gates.find(o=>!o.alive);r&&this._placeOne(r,t,e+i,"gate",n)}spawnOrbsAt(t,e,i=4,n=48){for(let r=0;r<i;r++){const o=this.orbs.find(a=>!a.alive);if(!o)break;this._placeOne(o,t,e+n+r*9,"orb")}}spawnBlockersAt(t,e,i=2,n=80,r=1){for(let o=0;o<i;o++){const a=this.blockers.find(l=>!l.alive);if(!a)break;this._placeOne(a,t,e+n+o*14,"blocker",r)}}spawnFinale(t,e,i=96,n=0,r=null,o=1){this.boss?.alive||(this.boss&&(this.scene.remove(this.boss.mesh),this.boss=null),this._spawnBoss(t,e+i,n,r,o))}_placeInactive(t,e,i,n,r,o){let a=t.filter(l=>l.alive).length;for(;a<Math.min(r,t.length);){const l=t.find(c=>!c.alive);if(!l)break;this._placeOne(l,e,i+70+a*n+Math.random()*24,o),a++}}_placeOne(t,e,i,n,r=1){const o=e.sample(i),a=Di(o.tangent),l=this.laneLimit||24;let c=0,h=0;if(n==="orb")c=(Math.random()-.5)*l*1.7,h=(Math.random()-.5)*16;else if(n==="enemy")c=(Math.random()-.5)*l*1.7,h=0;else if(n==="blocker"){c=(Math.random()-.5)*l*1.7,h=0;const u=2.4+Math.random()*1.6;t.mesh.scale.setScalar(u),t.radius=1.15*u,t.hp=3+Math.max(0,Math.round((r-1)*2))}else n==="gate"&&(t.passed=!1,t.locked=!0,t.hp=4+Math.max(0,Math.round((r-1)*3)),t.burst=0,t.burstAge=0,t.shield.visible=!0,t.shield.material.color.set(16726996),t.shield.material.opacity=.32,t.ring.material.emissive.set(16726996),t.ring.material.emissiveIntensity=3.4,t.ring.scale.set(1,1,1));t.mesh.position.copy(o.pos).addScaledVector(a.binormal,c).addScaledVector(a.normal,h),t.mesh.visible=!0,t.alive=!0,t.pathDist=i,t.offset=new P(c,h,0),n==="enemy"&&(t.baseX=c),t.mesh.lookAt(o.pos.clone().add(o.tangent))}_dressEnemy(t,e,i,n,r,o=0,a=null,l={}){this._bindCraft(t,e),t.role=e,t.nearMiss=!1,t.flash=0,t.windup=0,t.patternI=0,t.visPhase=1,t.phase=1,t.levelBoss=!!l.levelBoss,t.superBoss=!!l.superBoss,t.elite=e==="queen"||e==="warden"||e==="coil"||e==="empress",t.offset.x=n+(Math.random()-.5)*r*.03,t.baseX=t.offset.x,t.weave=.55+Math.random()*.7;const c=Number(i)||1,h=g=>c<=1.001?0:Math.max(0,Math.round(g*(c-1)*.75)),d=e==="queen"||e==="warden"||e==="finale"?1:1+Math.max(0,c-1)*.18;t.heat=c,t.mid=!l.levelBoss&&!l.superBoss&&(e==="queen"||e==="warden"||e==="coil"||e==="empress");const f=t.mid&&c>1.001?.48:1;t.mesh.scale.setScalar(1),t.craft&&vo(t.craft,1),e==="queen"?(t.hp=Math.round(Un("queen",o,a)*d*f),t.maxHp=t.hp,t.radius=7.4,t.descent=.52,t.cooldown=.85,t.windMax=.46,t.drop=3,t.bombDrop=1):e==="warden"?(t.hp=Math.round(Un("warden",o,a)*d*f),t.maxHp=t.hp,t.radius=7.6,t.descent=.38,t.cooldown=1.05,t.windMax=.55,t.drop=3,t.bombDrop=1):e==="coil"?(t.hp=Math.round(Un("coil",o,a)*d*f),t.maxHp=t.hp,t.radius=6.4,t.descent=.44,t.cooldown=.95,t.windMax=.48,t.drop=3,t.bombDrop=1):e==="empress"?(t.hp=Math.round(Un("empress",o,a)*d*f),t.maxHp=t.hp,t.radius=7.4,t.descent=.48,t.cooldown=.9,t.windMax=.5,t.drop=3,t.bombDrop=1):e==="heavy"||e==="slag"||e==="chime"||e==="prism"||e==="wisp"?(t.hp=11+h(11),t.maxHp=t.hp,t.radius=4.8,t.descent=.85+Math.random()*.55,t.cooldown=1.4+Math.random()*.8,t.windMax=.45,t.drop=1,t.bombDrop=0):e==="sine"||e==="cinder"||e==="acolyte"||e==="bloom"||e==="ion"?(t.hp=6+h(6),t.maxHp=t.hp,t.radius=4.2,t.descent=1.35+Math.random()*1.1,t.cooldown=1.9+Math.random()*1.3,t.windMax=.22,t.drop=0,t.bombDrop=0):(t.hp=5+h(5),t.maxHp=t.hp,t.radius=3.35,t.descent=2.1+Math.random()*1.5,t.cooldown=1.7+Math.random()*1.4,t.windMax=.16,t.drop=0,t.bombDrop=0),this._syncHullMeter(t)}_hullMeterMats(){this._pipGeo||(this._pipGeo=new ot(.2,.2,.07),this._pipOn=new Wt({color:16765286,transparent:!0,opacity:.96,depthTest:!1,depthWrite:!1}),this._pipOff=new Wt({color:2756632,transparent:!0,opacity:.4,depthTest:!1,depthWrite:!1}))}_ensureHullMeter(t){if(t.hullMeter?.pips)return t.hullMeter;t.hullMeter?.group&&t.mesh.remove(t.hullMeter.group),this._hullMeterMats();const e=new ne,i=[];for(let n=0;n<3;n++){const r=new C(this._pipGeo,this._pipOn);r.position.x=(n-1)*.32,r.renderOrder=9,e.add(r),i.push(r)}return e.position.set(0,2.05,.42),t.mesh.add(e),t.hullMeter={group:e,pips:i,lit:3,punch:0},t.hullMeter}_syncHullMeter(t,e=null){if(!!!(t?.alive&&t.mid&&!t.levelBoss&&!t.superBoss)){t?.hullMeter&&(t.hullMeter.group.visible=!1);return}const n=this._ensureHullMeter(t);n.group.visible=!0;const r=Math.max(0,Math.min(1,t.hp/Math.max(1,t.maxHp||t.hp))),o=Math.ceil(r*n.pips.length);o<(n.lit??n.pips.length)&&(n.punch=1,t.hullChip=!0),n.lit=o,n.punch=Math.max(0,(n.punch||0)-.14),n.group.scale.setScalar(1+n.punch*.45),n.pips.forEach((a,l)=>{a.material=l<o?this._pipOn:this._pipOff,a.scale.setScalar(l<o?1:.62)}),e&&n.group.lookAt(e.position)}_bindCraft(t,e){const i=rc[e]?e:"dive";if(t.kits||(t.kits={}),!t.kits[i]){const r=rc[i]();t.mesh.add(r.mesh),t.kits[i]=r}for(const[r,o]of Object.entries(t.kits))o.mesh.visible=r===i;const n=t.kits[i];t.craft=n,t.body=n.body,t.wings=n.wings,t.ring=n.ring,t.core=n.core,t.weak=n.weak}_spawnBoss(t,e,i=0,n=null,r=1){const o=I_();this.scene.add(o.mesh),this.boss={mesh:o.mesh,craft:o,body:o.body,wings:o.wings,ring:o.ring,core:o.core,weak:o.weak,shell:o.ring,pathDist:e,hp:Un("finale",i,n),maxHp:Un("finale",i,n),cooldown:.6,windup:0,windMax:.42,radius:7.6,alive:!0,elite:!0,role:"finale",phase:1,visPhase:1,patternI:0,flash:0,bombDrop:0,drop:5,offset:new P(0,0,0)},vo(o,1);const a=t.sample(e);o.mesh.position.copy(a.pos)}fireRail(t,e,i,n=1,r={}){const o=this.bullets.find(a=>!a.alive);return o?(o.alive=!0,o.life=r.life??1.15,o.pathDist=e,o.laneX=i,o.along=n,o.speed=r.speed??124,o.laneDrift=r.drift??0,o.damage=r.damage??1,o.home=r.home??0,o.homeSteer=r.homeSteer??0,o.pierce=r.pierce??0,o.hitR=r.hitR??1.6,o.wobble=r.wobble??0,o.phase=r.phase??Math.random()*6.28,o.kind=r.kind||"spark",o.hitList=[],this._dressBullet(o,r),o.mesh.visible=!0,this._placeRailShot(o,t),!0):!1}_dressBullet(t,e){const i=e.kind||"spark",n=this._shotGeo[i]||this._shotGeo.spark;t.mesh.geometry!==n&&(t.mesh.geometry=n);const r=e.scale??1;let o=r,a=r,l=1;if(i==="spark"||i==="shard"||i==="prism"?l=1:i==="seeker"?(o=r*1.15,a=r*1.15,l=1):i==="titan"?(o=r,a=r,l=1):i==="mine"?(o=r*1.2,a=r*1.2,l=1):i==="wing"||i==="nova"?l=1:i==="spire"||i==="needle"?(o=r,a=r,l=1):(i==="helix"||i==="shear"||i==="drone")&&(l=1),t.mesh.scale.set(o,a,l),t.mesh.material.color.set(e.color??15269887),t.tracer){const c=i==="needle"||i==="spire"||i==="spark"||i==="helix";t.tracer.visible=c,t.tracer.material.color.set(e.color??11075576),t.tracer.scale.set(i==="needle"||i==="spire"?.7:1,i==="needle"||i==="spire"?.7:1,i==="needle"||i==="spire"?2.4:1)}}enemyFireRail(t,e,i,n=8,r=!1){const o=this.enemyShots.find(a=>!a.alive);o&&(o.alive=!0,o.life=r?4.2:3.6,o.pathDist=e,o.laneX=i,o.along=-1,o.speed=n,o.fat=r,o.mesh.scale.setScalar(r?1.55:1),o.mesh.material.color.set(r?16711736:16718408),o.mesh.visible=!0,this._placeRailShot(o,t))}_placeRailShot(t,e){const i=gs(e,t.pathDist,t.laneX,.45);t.mesh.position.copy(i.pos),t.vel.copy(i.sample.tangent).multiplyScalar(t.along*t.speed),t.mesh.lookAt(i.pos.clone().addScaledVector(i.sample.tangent,t.along))}explode(t,e=6087167){let i=this.explosions.find(n=>!n.alive);if(!i){i=this.explosions[0];for(const n of this.explosions)n.life<i.life&&(i=n)}i.alive=!0,i.duration=.45,i.life=i.duration,i.group.visible=!0,i.group.position.copy(t),i.shardMat.color.set(e),i.shardMat.opacity=1,i.flashMat.color.set(e),i.flashMat.opacity=.85,i.flash.scale.setScalar(1);for(const n of i.shards)n.position.set(0,0,0),n.scale.setScalar(.65+Math.random()*.7),n.userData.vel.randomDirection().multiplyScalar(7+Math.random()*9)}spawnImpact(t,e=10156031){const i=5+(Math.random()*3|0);let n=0;for(const r of this.impacts)if(!r.alive&&(r.alive=!0,r.duration=.14+Math.random()*.08,r.life=r.duration,r.mesh.visible=!0,r.mesh.position.copy(t).add(new P().randomDirection().multiplyScalar(.35)),r.vel.randomDirection().multiplyScalar(10+Math.random()*16),r.mesh.material.color.set(e),r.mesh.scale.setScalar(.7+Math.random()*.9),n+=1,n>=i))break}bombSweep(t,e,i=16){let n=0,r=0;const o=[];for(const l of this.enemyShots)l.alive&&(this.spawnImpact(l.mesh.position.clone(),16769162),l.alive=!1,l.mesh.visible=!1,n+=1);const a=t+e;for(const l of this.enemies){if(!l.alive)continue;const c=l.pathDist-a;c<-10||c>78||(l.hp-=l.elite?Math.max(i,(l.maxHp||l.hp)*.08):i,l.flash=.2,l.craft&&Xi(l.craft,.9),this._syncVisPhase(l),r+=1,this.spawnImpact(l.mesh.position.clone(),16761165),l.hp<=0&&(l.alive=!1,l.mesh.visible=!1,this.explode(l.mesh.position.clone(),l.elite?16765286:16747066),o.push({type:l.elite?"midboss":"enemy",role:l.role,pos:l.mesh.position.clone(),pathDist:l.pathDist,laneX:l.offset.x,drop:l.drop??1,bombDrop:l.bombDrop??0})))}if(this.boss?.alive){const l=this.boss.pathDist-a;l>-10&&l<90&&(this.boss.hp-=Math.max(i,this.boss.maxHp*.08),this.boss.craft&&Xi(this.boss.craft,.9),this._syncVisPhase(this.boss),r+=1,this.spawnImpact(this.boss.mesh.position.clone(),16765286),this.boss.hp<=0&&(this.boss.alive=!1,this.boss.mesh.visible=!1,this.explode(this.boss.mesh.position.clone(),16726996),o.push({type:"boss",pos:this.boss.mesh.position.clone(),pathDist:this.boss.pathDist,laneX:0,drop:this.boss.drop??5,bombDrop:0})))}return{shots:n,hunters:r,killed:o}}spawnMote(t,e,i,n=1,r={}){const o=[],a=r.spread??3.4;for(let l=0;l<n;l++){const c=this.pickups.find(h=>!h.alive);if(!c)break;this._paintPickup(c,"mote",1),c.alive=!0,c.pathDist=e+(Math.random()-.5)*3,c.laneX=i+(l-(n-1)/2)*a+(Math.random()-.5)*1.6,c.magnet=0,c.grace=r.grace??0,c.mesh.visible=!0,c.mesh.scale.setScalar(1),this._placeMote(c,t),o.push(c)}return o}spawnCoins(t,e,i,n=1,r={}){const o=[],a=r.spread??4.2;for(let l=0;l<n;l++){const c=this.pickups.find(h=>!h.alive);if(!c)break;this._paintPickup(c,"coin",r.value||this.coinValue||5),c.alive=!0,c.pathDist=e+(Math.random()-.5)*4,c.laneX=i+(l-(n-1)/2)*a+(Math.random()-.5)*1.8,c.magnet=0,c.grace=r.grace??0,c.mesh.visible=!0,c.mesh.scale.setScalar(1.08),this._placeMote(c,t),o.push(c)}return o}_paintPickup(t,e,i){const n=e==="coin";t.kind=n?"coin":"mote",t.value=n?i||this.coinValue||5:1,t.radius=n?2.45:2.1,t.mesh.material.color.set(n?16765286:8057087),t.glow.material.color.set(n?16758531:6087167),t.glow.material.opacity=n?.42:.28}_placeMote(t,e){const i=gs(e,t.pathDist,t.laneX,.55);t.mesh.position.copy(i.pos)}pullLoot(t){this._lootPull=!!t}recycleBehind(t,e=8){const i=t+Math.min(e,0)-40;for(const n of[this.orbs,this.gates,this.enemies,this.blockers,this.pickups])for(const r of n){if(!r.alive)continue;if(r.pathDist<i){if(r.burst>0||r.elite||this._lootPull&&r.kind==="coin")continue;r.alive=!1,r.mesh.visible=!1,r.hullMeter&&(r.hullMeter.group.visible=!1)}}}hunterCount(){return this.enemies.filter(t=>t.alive).length+(this.boss?.alive?1:0)}activeBoss(){return this.boss?.alive?this.boss:this.enemies.find(t=>t.alive&&t.elite&&(t.levelBoss||t.superBoss||t.role==="finale"))||null}blockerAhead(t){return this.blockers.some(e=>e.alive&&e.pathDist-t<70&&e.pathDist>t)}_telegraphAndFire(t,e,i,n,r){const o=t.body;if(t.flash>0?t.craft?Xi(t.craft,Math.min(1,t.flash*5)):o&&(o.material.emissiveIntensity=2.2+t.flash*8):(t.windup||0)<=0&&t.craft&&Xi(t.craft,0),!r){t.windup>0&&(t.windup=0),t.ring&&t.ring.scale.setScalar(1);return}if(t.windup>0){t.windup-=e;const a=1-t.windup/Math.max(.08,t.windMax||.4);if(t.ring&&t.ring.scale.setScalar(1+a*.55),t.craft?Xi(t.craft,.25+a*.85):o&&(o.material.emissiveIntensity=2.2+a*5.5),t.shell?.material?.opacity!=null&&(t.shell.material.opacity=.55+a*.4),t.windup<=0){const l=M_(t,this.laneLimit||24,this._playerLane??0,this.time,(c,h,u,d)=>{this.enemyFireRail(i,c,h,u??8,d)});this.onShot?.(!!(t.elite||t.role==="finale")),t.ring&&t.ring.scale.setScalar(1),t.cooldown=this._reloadFor(t,n)+(l||0)}return}t.cooldown-=e,t.cooldown<=0&&(t.windMax=t.windMax||.2,t.windup=t.windMax,this.onWindup?.())}_syncVisPhase(t){if(!t?.craft||!(t.elite||t.role==="finale"))return;const e=t.hp/Math.max(1,t.maxHp||t.hp),i=e>.66?1:e>.33?2:3;i!==t.visPhase&&(t.visPhase=i,(t.role==="finale"||t.levelBoss||t.superBoss)&&(t.phase=i,vo(t.craft,i)))}_reloadFor(t,e){if(t.role==="finale")return t.phase===3?1.15:t.phase===2?1.45:1.85;const i=(t.levelBoss||t.superBoss)&&(t.phase||1)>=3;let n=2.2;return t.role==="queen"?n=i?1.28:1.55:t.role==="empress"?n=i?1.22:1.48:t.role==="warden"?n=i?1.4:1.7:t.role==="coil"?n=i?1.34:1.62:t.role==="heavy"||t.role==="slag"||t.role==="chime"||t.role==="prism"||t.role==="wisp"?n=Math.max(1.7,2.4-e*.07):n=Math.max(2.1,2.8-e*.08),t.mid&&(t.heat||1)>1.001&&(n*=1.2),n}_enemyVolley(t,e,i){const n=t.offset?.x??0,r=t.pathDist-4,o=this.laneLimit||24;if(t.role==="queen"){const a=o*.16;for(let l=-2;l<=2;l++)this.enemyFireRail(e,r,n+l*a,7.2,Math.abs(l)===0);return}if(t.role==="warden"){const a=o*.22;this.enemyFireRail(e,r,n-a,6.4,!0),this.enemyFireRail(e,r,n+a,6.4,!0),this.enemyFireRail(e,r,n,7.5,!0),this.enemyFireRail(e,r-6,n-a*.5,6.8),this.enemyFireRail(e,r-6,n+a*.5,6.8);return}if(t.role==="finale"){const a=o*(t.phase===3?.34:.26),l=t.phase===1?3:5;for(let c=0;c<l;c++){const h=l===1?0:c/(l-1)-.5;this.enemyFireRail(e,r,h*a*2,t.phase===3?7.2:8,!0)}t.phase===3&&this.enemyFireRail(e,r-8,Math.sin(this.time*2.4)*a,6.6,!0);return}if(t.role==="heavy"){const a=Math.min(8,o*.08);this.enemyFireRail(e,r,n-a,7),this.enemyFireRail(e,r,n+a,7);return}this.enemyFireRail(e,r+1,n,8)}update(t,e,i,n,r,o,a=8,l=null,c=null){this._tractor=l||{range:0,force:0},this.time+=t;for(const h of this.orbs){if(!h.alive)continue;this._attractOrb(h,t,i,a,r),h.mesh.material.uniforms.uTime.value=this.time,h.mesh.rotation.y+=t*1.4;const u=e.sample(h.pathDist),d=Di(u.tangent);h.mesh.position.copy(u.pos).addScaledVector(d.binormal,h.offset.x).addScaledVector(d.normal,h.offset.y+Math.sin(this.time*3+h.pathDist)*.35)}for(const h of this.gates){if(!h.alive)continue;const u=e.sample(h.pathDist);if(h.mesh.position.copy(u.pos),h.mesh.lookAt(u.pos.clone().add(u.tangent)),h.burst>0){h.burstAge=(h.burstAge||0)+t;const d=h.burstAge,f=(p,w)=>Math.exp(-(p*p)/(w*w)),g=1*f(d-.24,.18)+.62*f(d-.92,.26)+.32*f(d-1.64,.32)-.24*f(d-.55,.14)-.14*f(d-1.26,.18),_=1+g*1.18;h.pulse=Math.max(0,g),h.ring.scale.set(_,_,1),h.ring.rotation.z+=t*(.7+h.pulse*2.4);const m=3.2+h.pulse*8.5;h.ring.material.emissive.setRGB(.42+h.pulse*.55,.82+h.pulse*.18,1),h.ring.material.emissiveIntensity=m,d>2.2&&(h.burst=0,h.burstAge=0,h.alive=!1,h.mesh.visible=!1,h.ring.scale.set(1,1,1),h.ring.material.emissive.set(6087167),h.ring.material.emissiveIntensity=3.4);continue}h.ring.rotation.z+=t*.8,h.locked&&(h.shield.material.opacity=.22+.12*Math.sin(this.time*6))}for(const h of this.blockers){if(!h.alive)continue;h.mesh.rotation.y+=t*.9,h.mesh.rotation.x+=t*.4;const u=e.sample(h.pathDist),d=Di(u.tangent);h.mesh.position.copy(u.pos).addScaledVector(d.binormal,h.offset.x).addScaledVector(d.normal,h.offset.y)}this._playerLane=r?.x??0;for(const h of this.enemies){if(!h.alive)continue;if(h.ring&&(h.ring.rotation.z+=t*2.2),h.pathDist-=(h.descent||2)*t,h.elite){const f=i+32;h.pathDist<f&&(h.pathDist=f)}if(h.role==="sine"||h.role==="cinder"||h.role==="acolyte"||h.role==="bloom"||h.role==="ion"||h.role==="queen"||h.role==="empress"){const f=(this.laneLimit||24)*(h.role==="queen"||h.role==="empress"?.22:.08);h.offset.x=(h.baseX||0)+Math.sin(this.time*(h.weave||.9)+h.pathDist*.03)*f}h.offset.y=0;const u=gs(e,h.pathDist,h.offset.x,.4);h.mesh.position.copy(u.pos),h.mesh.up.copy(u.frame.normal),h.mesh.lookAt(u.pos.clone().addScaledVector(u.sample.tangent,-12)),h.flash=Math.max(0,(h.flash||0)-t);const d=h.pathDist>i+6&&h.pathDist<i+78;this._telegraphAndFire(h,t,e,o,d),this._syncHullMeter(h,c)}if(this.boss?.alive){this.boss.ring&&(this.boss.ring.rotation.z-=t*.9),this.boss.wings&&(this.boss.wings.rotation.y+=t*.35),this.boss.pathDist-=1.15*t,this.boss.pathDist<i+32&&(this.boss.pathDist=i+32);const h=gs(e,this.boss.pathDist,0,1.2);this.boss.mesh.position.copy(h.pos),this.boss.mesh.up.copy(h.frame.normal),this.boss.mesh.lookAt(h.pos.clone().addScaledVector(h.sample.tangent,-16)),this._syncVisPhase(this.boss),this.boss.flash=Math.max(0,(this.boss.flash||0)-t),this.boss.flash>0&&this.boss.craft&&Xi(this.boss.craft,this.boss.flash*4);const u=this.boss.pathDist>i+8&&this.boss.pathDist<i+90;this._telegraphAndFire(this.boss,t,e,o,u)}this._stepProjectiles(this.bullets,t,e),this._stepProjectiles(this.enemyShots,t,e),this._stepPickups(t,e,i,a,r);for(const h of this.impacts){if(!h.alive)continue;h.life-=t,h.mesh.position.addScaledVector(h.vel,t);const u=Math.max(0,h.life/h.duration);h.mesh.material.opacity=u,h.mesh.scale.setScalar(.45+(1-u)*1.6),h.life<=0&&(h.alive=!1,h.mesh.visible=!1)}for(const h of this.explosions){if(!h.alive)continue;h.life-=t;const u=Math.max(0,h.life/h.duration);for(const d of h.shards)d.position.addScaledVector(d.userData.vel,t),d.rotation.x+=t*8,d.rotation.y+=t*5;h.shardMat.opacity=u,h.flashMat.opacity=u*.7,h.flash.scale.setScalar(1+(1-u)*5),h.life<=0&&(h.alive=!1,h.group.visible=!1)}}_stepProjectiles(t,e,i){for(const n of t)if(n.alive){if(n.life-=e,n.home&&this._steerHome(n,e),n.wobble&&(n.laneX+=Math.sin(this.time*7.5+(n.phase||0))*n.wobble*e),n.pathDist+=(n.along||1)*(n.speed||100)*e,n.laneX+=(n.laneDrift||0)*e,n.life<=0||n.pathDist<12){n.alive=!1,n.mesh.visible=!1;continue}this._placeRailShot(n,i)}}_steerHome(t,e){let i=null,n=1e9;for(const h of this.enemies){if(!h.alive||h.pathDist<t.pathDist-4)continue;const u=Math.hypot(h.offset.x-t.laneX,h.pathDist-t.pathDist);u<n&&(n=u,i=h)}if(this.boss?.alive&&this.boss.pathDist>t.pathDist-6){const h=Math.hypot(0-t.laneX,this.boss.pathDist-t.pathDist);h<n&&(n=h,i=this.boss)}if(!i)return;const r=i.offset?.x??0,o=i.pathDist,a=t.homeSteer||60,l=r-t.laneX,c=o-t.pathDist;t.laneX+=Math.sign(l)*Math.min(Math.abs(l),a*e),c>0&&(t.pathDist+=Math.min(c,a*.35*e))}_attractOrb(t,e,i,n,r){const o=this._tractor;if(!o?.range)return;const a=r?.x||0,l=i+n,c=a-(t.offset?.x||0),h=l-t.pathDist,u=-(t.offset?.y||0),d=Math.hypot(c,h,u),f=sc(d,o)*e;if(f<=0||d<1e-4)return;const g=f/d;t.offset.x+=c*g,t.offset.y+=u*g,t.pathDist+=h*g}_stepPickups(t,e,i,n,r){const o=i+n,a=r?.x||0,l=this._tractor;for(const c of this.pickups){if(!c.alive)continue;c.grace>0&&(c.grace-=t),c.pathDist-=9.5*t,c.mesh.rotation.x+=t*2.4,c.mesh.rotation.y+=t*3.1;const h=a-c.laneX,u=o-c.pathDist,d=Math.hypot(h,u);let f=0;if(c.grace<=0&&l?.range&&(f=sc(d,l)*t,f>0&&d>1e-4&&(c.laneX+=h/d*f,c.pathDist+=u/d*f)),c.grace<=0&&this._lootPull&&c.kind==="coin"&&d>1e-4){const _=42*t;c.laneX+=h/d*_,c.pathDist+=u/d*_,f=Math.max(f,_)}const g=.85+.18*Math.sin(this.time*8+c.pathDist);c.mesh.scale.setScalar(g*(f>0?1.08:1)),this._placeMote(c,e)}}collectOrbs(t,e){const i=[];for(const n of this.orbs)n.alive&&n.mesh.position.distanceTo(t)<e+n.radius&&(n.alive=!1,n.mesh.visible=!1,i.push(n));return i}collectMotes(t,e){const i=[];for(const n of this.pickups)!n.alive||n.grace>0||n.mesh.position.distanceTo(t)<e+n.radius&&(n.alive=!1,n.mesh.visible=!1,i.push(n));return i}collectGates(t){const e=[];for(const i of this.gates)!i.alive||i.passed||i.mesh.position.distanceTo(t)<6.2&&(i.locked?e.push({gate:i,blocked:!0}):(i.passed=!0,i.burst=1,i.burstAge=0,e.push({gate:i,blocked:!1})));return e}collideEnemies(t,e){const i=[];for(const n of this.enemies)n.alive&&n.mesh.position.distanceTo(t)<e+n.radius*.68&&i.push(n);return this.boss?.alive&&this.boss.mesh.position.distanceTo(t)<e+this.boss.radius&&i.push(this.boss),i}collideBlockers(t,e){const i=[];for(const n of this.blockers)n.alive&&n.mesh.position.distanceTo(t)<e+n.radius&&i.push(n);return i}nearMisses(t){const e=[];for(const i of this.enemies){if(!i.alive||i.nearMiss)continue;const n=i.mesh.position.distanceTo(t);n>i.radius+1.2&&n<i.radius+3.4&&(i.nearMiss=!0,e.push(i))}return e}_hitPoint(t){return t.mesh.position.clone().addScaledVector(t.vel,.04)}_railHit(t,e,i,n){const r=t.hitR??1.6,o=Math.abs((t.pathDist||0)-e),a=Math.abs((t.laneX||0)-(i||0));return o<n+r+6&&a<n+r}_strike(t,e,i){const n=t.hitR??1.6;return this._hitPoint(t).distanceTo(e)<i+n}_alreadyHit(t,e){return t.hitList&&t.hitList.includes(e)}_applyHit(t,e){return t.hitList||(t.hitList=[]),t.hitList.push(e),(t.pierce||0)>0?(t.pierce-=1,!1):(t.alive=!1,t.mesh.visible=!1,!0)}bulletHits(){const t=[];for(const e of this.bullets){if(!e.alive)continue;let i=!1;for(const n of this.enemies)if(!(!n.alive||this._alreadyHit(e,n))&&this._railHit(e,n.pathDist,n.offset?.x??0,n.radius)){if(n.hp-=e.damage||1,i=this._applyHit(e,n),this._syncHullMeter(n),n.hp<=0)n.alive=!1,n.mesh.visible=!1,t.push({type:n.elite?"midboss":"enemy",pos:n.mesh.position.clone(),role:n.role,pathDist:n.pathDist,laneX:n.offset.x,drop:n.drop??1,bombDrop:n.bombDrop??0});else{n.flash=n.elite?.22:.12,n.craft&&Xi(n.craft,n.elite?.95:.7),this._syncVisPhase(n);const r=!!n.hullChip;n.hullChip=!1,t.push({type:"ping",pos:n.mesh.position.clone(),color:n.elite?16769162:10156031,mid:!!n.mid,chip:r})}if(i)break}if(!i){for(const n of this.blockers)if(!(!n.alive||this._alreadyHit(e,n))&&this._railHit(e,n.pathDist,n.offset?.x??0,n.radius)&&(n.hp-=e.damage||1,i=this._applyHit(e,n),n.hp<=0?(n.alive=!1,n.mesh.visible=!1,t.push({type:"blocker",pos:n.mesh.position.clone(),pathDist:n.pathDist,laneX:n.offset.x,drop:Math.random()<.45?1:0})):t.push({type:"ping",pos:n.mesh.position.clone(),color:16751162}),i))break;if(!i){for(const n of this.gates)if(!(!n.alive||!n.locked||this._alreadyHit(e,n))&&this._railHit(e,n.pathDist,0,5.2)&&(n.hp-=e.damage||1,i=this._applyHit(e,n),n.hp<=0?(n.locked=!1,n.shield.visible=!1,n.ring.material.emissive.set(6087167),n.ring.material.emissiveIntensity=5.2,t.push({type:"unlock",pos:n.mesh.position.clone(),pathDist:n.pathDist,laneX:0,drop:2})):t.push({type:"ping",pos:n.mesh.position.clone(),color:16737512}),i))break;i||this.boss?.alive&&!this._alreadyHit(e,this.boss)&&this._railHit(e,this.boss.pathDist,0,this.boss.radius)&&(this.boss.hp-=e.damage||1,this._applyHit(e,this.boss),this.boss.hp<=0?(this.boss.alive=!1,this.boss.mesh.visible=!1,t.push({type:"boss",pos:this.boss.mesh.position.clone(),pathDist:this.boss.pathDist,laneX:0,drop:this.boss.drop??5})):(this.boss.flash=.22,this.boss.craft&&Xi(this.boss.craft,.95),this._syncVisPhase(this.boss),t.push({type:"ping",pos:this.boss.mesh.position.clone(),color:16765286})))}}}return t}shotsHitPlayer(t,e){let i=!1;for(const n of this.enemyShots)n.alive&&n.mesh.position.distanceTo(t)<e&&(n.alive=!1,n.mesh.visible=!1,i=!0);return i}nearestLights(t,e){const i=[...e];for(const n of this.pickups)n.alive&&i.push({pos:n.mesh.position,color:new W("#7af0ff"),intensity:8});for(const n of this.orbs)n.alive&&i.push({pos:n.mesh.position,color:n.color,intensity:9});for(const n of this.blockers)n.alive&&i.push({pos:n.mesh.position,color:new W("#ff9a3a"),intensity:14});for(const n of this.gates)n.alive&&i.push({pos:n.mesh.position,color:new W(n.burst>0?"#dcffff":n.locked?"#ff3bd4":"#5ce1ff"),intensity:n.burst>0?14+(n.pulse||0)*32:n.locked?10:16});return this.boss?.alive&&i.push({pos:this.boss.mesh.position,color:new W("#ff3bd4"),intensity:18}),i.sort((n,r)=>n.pos.distanceToSquared(t)-r.pos.distanceToSquared(t)),i.slice(0,6)}}const xo={enter:{figure:"drone",pad:["triangle","sine"],padHz:[49,98],filt:190,filtSpan:180,gain:.04,gainSpan:.022,choir:.018,arp:0},queen:{figure:"silk",pad:["sine","triangle"],padHz:[65.41,130.81],filt:300,filtSpan:260,gain:.038,gainSpan:.03,choir:.042,arp:.024},warden:{figure:"aisle",pad:["triangle","square"],padHz:[58,116],filt:240,filtSpan:160,gain:.04,gainSpan:.02,choir:.03,arp:.02},coil:{figure:"ember",pad:["sawtooth","triangle"],padHz:[43.65,87],filt:360,filtSpan:320,gain:.036,gainSpan:.032,choir:.036,arp:.022},empress:{figure:"bloom",pad:["sine","triangle"],padHz:[69,138],filt:340,filtSpan:280,gain:.038,gainSpan:.028,choir:.048,arp:.028},heart:{figure:"pulse",pad:["sine","sine"],padHz:[36.5,73],filt:120,filtSpan:70,gain:.05,gainSpan:.018,choir:.05,arp:0},finale:{figure:"choir",pad:["triangle","sine"],padHz:[41.25,82.5],filt:380,filtSpan:360,gain:.042,gainSpan:.034,choir:.055,arp:.038},hangar:{figure:"yard",pad:["sine","triangle"],padHz:[46,92],filt:150,filtSpan:40,gain:.032,gainSpan:.01,choir:.012,arp:0}};class X_{constructor(){this.ctx=null,this.master=null,this.music=null,this.sfx=null,this.duck=null,this.engine=null,this.boost=0,this.enabled=!1,this.intensity=.2,this._paused=!1,this._nextBeat=0,this._step=0,this._noise=null,this._whooshOn=!1,this._chapter="default",this._arpGain=null,this._choirGain=null,this._musicMix=.72,this._sfxMix=1,this._masterLive=.3,this._continueBed=!1}async resume(){this.ctx||(this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this._masterLive,this.duck=this.ctx.createGain(),this.duck.gain.value=1,this.music=this.ctx.createGain(),this.music.gain.value=.55*this._musicMix,this.sfx=this.ctx.createGain(),this.sfx.gain.value=1.4*this._sfxMix,this.music.connect(this.duck),this.duck.connect(this.master),this.sfx.connect(this.master),this.master.connect(this.ctx.destination),this._noise=this._makeNoise(2),this._startEngine(),this._startPad(),this._startStems(),this._nextBeat=this.ctx.currentTime+.05),this.ctx.state==="suspended"&&await this.ctx.resume(),this.enabled=!0,this.setPaused(!1)}setMix(t,e){this._musicMix=Math.max(0,Math.min(1,t??this._musicMix)),this._sfxMix=Math.max(0,Math.min(1,e??this._sfxMix)),this._applyMix()}setContinue(t){this._continueBed=!!t,t&&(this._paused=!1),this._applyMix()}setPaused(t){this._paused=t,t&&(this._continueBed=!1),this._applyMix()}_applyMix(){if(!this.master||!this.ctx)return;const t=this.ctx.currentTime,e=this._paused&&!this._continueBed;if(this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(e?8e-4:this._masterLive,t,.05),this.music){const i=(this._continueBed?.2:.55)*this._musicMix;this.music.gain.cancelScheduledValues(t),this.music.gain.setTargetAtTime(Math.max(1e-4,i),t,.08)}this.sfx&&(this.sfx.gain.cancelScheduledValues(t),this.sfx.gain.setTargetAtTime(Math.max(1e-4,1.4*this._sfxMix),t,.04))}setIntensity(t){this.intensity=Math.max(0,Math.min(1,t))}tick(){if(!this.enabled||!this.ctx||this._paused)return;const t=this.ctx.currentTime,i=60/96/4;for(;this._nextBeat<t+.12;)this._scheduleBeat(this._nextBeat,this._step),this._nextBeat+=i,this._step=(this._step+1)%16;if(this._padFilt){const n=this._room();this._padFilt.frequency.setTargetAtTime(n.filt+this.intensity*n.filtSpan,t,.2),this._padGain.gain.setTargetAtTime(n.gain+this.intensity*n.gainSpan,t,.25)}this._mixStems(t)}_room(){return xo[this._chapter]||xo.enter}setChapter(t){this._chapter=t==="default"?"enter":t||"enter"}_makeNoise(t){const e=this.ctx,i=e.createBuffer(1,e.sampleRate*t,e.sampleRate),n=i.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=Math.random()*2-1;return i}_osc(t,e,i,n,r,o,a){const l=this.ctx.createOscillator(),c=this.ctx.createGain();return l.type=t,l.frequency.setValueAtTime(e,i),a&&l.frequency.exponentialRampToValueAtTime(a,i+n),c.gain.setValueAtTime(1e-4,i),c.gain.exponentialRampToValueAtTime(Math.max(2e-4,r),i+.01),c.gain.exponentialRampToValueAtTime(1e-4,i+n),l.connect(c),c.connect(o||this.sfx),l.start(i),l.stop(i+n+.02),l}_noiseBurst(t,e,i,n,r){const o=this.ctx.createBufferSource();o.buffer=this._noise;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(i,t),a.Q.value=n;const l=this.ctx.createGain();l.gain.setValueAtTime(r,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(a),a.connect(l),l.connect(this.sfx),o.start(t),o.stop(t+e+.02)}_startEngine(){const t=this.ctx,e=t.createOscillator(),i=t.createOscillator(),n=t.createBiquadFilter(),r=t.createGain();e.type="sawtooth",i.type="triangle",e.frequency.value=48,i.frequency.value=72,n.type="lowpass",n.frequency.value=220,r.gain.value=.1,e.connect(n),i.connect(n),n.connect(r),r.connect(this.sfx),e.start(),i.start(),this.engine={osc:e,osc2:i,filt:n,g:r}}_startPad(){const t=this.ctx,e=xo.enter,i=t.createOscillator(),n=t.createOscillator();i.type=e.pad[0],n.type=e.pad[1],i.frequency.value=e.padHz[0],n.frequency.value=e.padHz[1],n.detune.value=7;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=e.filt,r.Q.value=.7;const o=t.createGain();o.gain.value=e.gain,i.connect(r),n.connect(r),r.connect(o),o.connect(this.music),i.start(),n.start(),this._padOsc=[i,n],this._padFilt=r,this._padGain=o}_startStems(){const t=this.ctx,e=t.createOscillator(),i=t.createOscillator();e.type="sine",i.type="sine",e.frequency.value=110,i.frequency.value=164.81,i.detune.value=6;const n=t.createGain();n.gain.value=.008,e.connect(n),i.connect(n),n.connect(this.music),e.start(),i.start(),this._choirGain=n,this._choirOsc=[e,i];const r=t.createGain();r.gain.value=.01,r.connect(this.music),this._arpGain=r}_mixStems(t){const e=this._chapter,i=this._room();if(this._choirGain&&this._choirGain.gain.setTargetAtTime(i.choir+this.intensity*.02,t,.35),this._arpGain&&this._arpGain.gain.setTargetAtTime(i.arp+this.intensity*(i.arp>0?.015:0),t,.35),this._choirOsc){const r={enter:98,default:110,hangar:92,queen:130.81,warden:116,coil:87,empress:138,heart:73,finale:82.5}[e]??110;this._choirOsc[0].frequency.setTargetAtTime(r,t,.4),this._choirOsc[1].frequency.setTargetAtTime(r*1.5,t,.4)}this._padOsc&&(this._padOsc[0].type=i.pad[0],this._padOsc[1].type=i.pad[1],this._padOsc[0].frequency.setTargetAtTime(i.padHz[0],t,.45),this._padOsc[1].frequency.setTargetAtTime(i.padHz[1],t,.45))}_scheduleBeat(t,e){const i=this._chapter,n=this.intensity,r=this._room().figure;r==="drone"?this._figureDrone(t,e,n):r==="silk"?this._figureSilk(t,e,n):r==="aisle"?this._figureAisle(t,e,n):r==="ember"?this._figureEmber(t,e,n):r==="bloom"?this._figureBloom(t,e,n):r==="pulse"?this._figurePulse(t,e,n):r==="choir"?this._figureChoir(t,e,n):r==="yard"&&this._figureYard(t,e,n),!(i==="heart"||i==="hangar")&&this._intensityLayer(t,e,n)}_figureDrone(t,e,i){e%16===0&&(this._osc("triangle",98,t,.88,.046+i*.018,this.music),this._osc("sine",147,t,.92,.028+i*.012,this.music))}_figureSilk(t,e,i){if(e%2!==0||!this._arpGain)return;const n=[261.63,220,196,164.81,146.83,130.81];this._osc("triangle",n[e/2%n.length],t,.11,.022+i*.012,this._arpGain)}_figureAisle(t,e,i){if(e%4!==0)return;const n=[116,174,232,174];this._osc("triangle",n[e/4%4],t,.18,.028+i*.01,this.music)}_figureEmber(t,e,i){e%4===0&&this._osc("sawtooth",87,t,.15,.03+i*.014,this.music,52)}_figureBloom(t,e,i){e%2!==0||!this._arpGain||(this._osc("sine",138,t,.1,.02+i*.01,this._arpGain),this._osc("sine",174.61,t,.1,.016+i*.008,this._arpGain))}_figurePulse(t,e,i){e%8===0&&(this._osc("sine",73,t,.3,.12+i*.04,this.music,32),this._osc("triangle",36.5,t+.02,.24,.06,this.music,24))}_figureChoir(t,e,i){if(e%2!==0||!this._arpGain)return;const n=[165,220,247,330,247,220];this._osc("square",n[e/2%n.length],t,.07,.02+i*.014,this._arpGain)}_figureYard(t,e){if(e%4!==0)return;const i=[92,138,184,138];this._osc("sine",i[e/4%4],t,.14,.018,this.music)}_intensityLayer(t,e,i){if(e%8===0&&i>.32){const n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(150,t),n.frequency.exponentialRampToValueAtTime(42,t+.14),r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.12+i*.08,t+.008),r.gain.exponentialRampToValueAtTime(1e-4,t+.18),n.connect(r),r.connect(this.music),n.start(t),n.stop(t+.2)}if(e%2===0&&i>.48&&this._noiseBurst(t,.05,6e3,.6,.024+i*.02),i>.4&&e%2===0){const n=[110,130.81,146.83,164.81,196,220,246.94,261.63],r=n[(e*3+Math.floor(i*4))%n.length];this._osc("square",r,t,.08,.018+i*.016,this.music)}}sting(t="chapter"){if(!this.enabled)return;const e=this.ctx.currentTime;if(t==="boss"){this._osc("sawtooth",55,e,.42,.12),this._osc("triangle",82.5,e+.04,.5,.08),this._osc("sine",110,e+.12,.55,.07),this._noiseBurst(e,.28,180,.8,.1),this._duck(.45,.4);return}if(t==="fall"){this._osc("sine",196,e,.28,.1,null,82),this._osc("triangle",147,e+.06,.4,.08,null,55),this._osc("sawtooth",73,e+.12,.55,.09,null,36),this._noiseBurst(e+.08,.32,140,.9,.1),this._duck(.62,.55);return}if(t==="death"){this._osc("sine",220,e,.35,.1),this._osc("triangle",164.81,e+.08,.4,.08),this._osc("sine",110,e+.16,.55,.09),this._osc("sawtooth",55,e+.2,.45,.07),this._duck(.55,.5);return}if(t==="continue"){this._osc("sine",196,e,.22,.08),this._osc("triangle",246.94,e+.08,.28,.07),this._osc("sine",329.63,e+.16,.4,.06);return}if(t==="life"){this._osc("sine",523.25,e,.12,.07),this._osc("triangle",659.25,e+.05,.16,.05);return}this._osc("triangle",196,e,.16,.07),this._osc("sine",293.66,e+.06,.22,.06),this._osc("triangle",392,e+.12,.28,.05)}hold(t="breath"){this.enabled&&(this.setIntensity(Math.min(this.intensity,t==="hold"?.14:.2)),this._duck(t==="hold"?.7:.32,t==="hold"?1.15:.28))}_duck(t=.35,e=.22){if(!this.duck)return;const i=this.ctx.currentTime;this.duck.gain.cancelScheduledValues(i),this.duck.gain.setValueAtTime(this.duck.gain.value,i),this.duck.gain.linearRampToValueAtTime(Math.max(.12,1-t),i+.02),this.duck.gain.linearRampToValueAtTime(1,i+e)}setBoost(t){if(this.boost=t,!this.engine)return;const e=this.ctx.currentTime;this.engine.osc.frequency.setTargetAtTime(48+t*36,e,.08),this.engine.filt.frequency.setTargetAtTime(220+t*520,e,.08),this.engine.g.gain.setTargetAtTime(.1+t*.08,e,.08),t>.5&&!this._whooshOn&&(this._whooshOn=!0,this._noiseBurst(e,.28,420,.8,.08)),t<.2&&(this._whooshOn=!1)}rumble(t=80,e=.4){try{const i=navigator.getGamepads?.()||[];for(const n of i){const r=n?.vibrationActuator;r?.playEffect&&r.playEffect("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:e*.6})}}catch{}}guns(t="primary",e={}){const i=t==="titan"?"titan":t==="missile"?"seeker":t==="mine"?"mine":t==="nova"?"nova":(e.needle||0)>0?"needle":"spark";this.shotFor(i)}shotFor(t="spark",e={}){if(!this.enabled)return;const i=this.ctx.currentTime,n=e.gain==null?1:Math.max(.12,e.gain);if(t==="titan"){this._noiseBurst(i,.035,4200,2.2,.08*n),this._osc("sine",46,i,.48,.2*n,null,28),this._osc("sawtooth",78,i,.3,.11*n,null,38),this._osc("square",110,i,.08,.05*n),this._duck(.4,.3),this.rumble(110,.62);return}if(t==="seeker"){this._osc("sawtooth",128,i,.2,.07*n),this._osc("triangle",210,i+.02,.16,.045*n),this._noiseBurst(i,.14,720,.9,.055*n);return}if(t==="mine"){this._osc("sine",90,i,.18,.07*n),this._osc("triangle",160,i+.03,.22,.05*n),this._noiseBurst(i,.1,280,1.4,.04*n);return}if(t==="nova"){this._osc("sine",220,i,.2,.07*n),this._osc("triangle",330,i,.24,.06*n),this._osc("sine",495,i+.04,.28,.05*n),this._noiseBurst(i,.18,1400,.6,.05*n),n>.7&&this._duck(.18,.16);return}if(t==="needle"){this._osc("square",1680,i,.14,.05*n,null,1240),this._osc("sine",2520,i,.12,.028*n,null,1880),this._osc("sawtooth",820,i,.09,.016*n,null,620);return}if(t==="wing"){this._osc("triangle",640,i,.06,.045),this._osc("square",960,i,.04,.03);return}if(t==="helix"){this._osc("square",520,i,.07,.035),this._osc("square",533,i,.07,.03);return}if(t==="shear"){this._osc("sawtooth",210,i,.09,.06),this._noiseBurst(i,.08,1800,.7,.045);return}if(t==="spire"){this._osc("sine",1880,i,.08,.05),this._osc("triangle",940,i,.1,.035);return}if(t==="drone"){this._osc("triangle",420,i,.05,.03),this._osc("sine",840,i+.02,.06,.025);return}if(t==="prism"){this._osc("sine",700,i,.06,.035),this._osc("sine",1050,i,.06,.03);return}if(t==="shard"){this._osc("triangle",1100,i,.04,.04),this._osc("sine",1760,i,.035,.025);return}this._osc("square",480,i,.045,.038*n),this._noiseBurst(i,.05,2400,.7,.028*n)}mote(t=!1){if(!this.enabled)return;const e=this.ctx.currentTime;this._osc("sine",920,e,.09,.06),this._osc("sine",t?1460:1240,e+.04,.12,.05)}powerup(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",520,t,.16,.09),this._osc("triangle",780,t+.05,.18,.07),this._osc("sine",1170,t+.1,.22,.06)}collect(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",740,t,.1,.08),this._osc("sine",1180,t+.05,.14,.06)}coin(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("triangle",620,t,.08,.05),this._osc("sine",880,t+.03,.1,.06),this._osc("triangle",1320,t+.07,.12,.045)}buy(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",196,t,.14,.07),this._osc("triangle",392,t+.05,.16,.06),this._osc("sine",784,t+.1,.2,.05),this._osc("triangle",1175,t+.16,.18,.04)}gate(){if(!this.enabled)return;const t=this.ctx,e=t.currentTime,i=2.05,n=t.createOscillator(),r=t.createOscillator(),o=t.createOscillator();n.type="sine",r.type="triangle",o.type="sine",n.frequency.setValueAtTime(196,e),n.frequency.exponentialRampToValueAtTime(110,e+i),r.frequency.setValueAtTime(294,e),r.frequency.exponentialRampToValueAtTime(165,e+i),o.frequency.setValueAtTime(98,e),o.frequency.exponentialRampToValueAtTime(55,e+i);const a=t.createBiquadFilter();a.type="bandpass",a.Q.setValueAtTime(6.5,e),a.frequency.setValueAtTime(380,e),a.frequency.exponentialRampToValueAtTime(1650,e+.22),a.frequency.exponentialRampToValueAtTime(340,e+.55),a.frequency.exponentialRampToValueAtTime(1200,e+.92),a.frequency.exponentialRampToValueAtTime(280,e+1.28),a.frequency.exponentialRampToValueAtTime(820,e+1.64),a.frequency.exponentialRampToValueAtTime(200,e+i);const l=t.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(.13,e+.05),l.gain.exponentialRampToValueAtTime(1e-4,e+i),n.connect(a),r.connect(a),a.connect(l),o.connect(l),l.connect(this.sfx),n.start(e),r.start(e),o.start(e),n.stop(e+i+.02),r.stop(e+i+.02),o.stop(e+i+.02),this._duck(.4,.5)}hit(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",70,t,.28,.2),this._osc("sawtooth",90,t,.18,.1),this._noiseBurst(t,.16,220,.9,.12),this._duck(.45,.2),this.rumble(120,.7)}explosion(t=!1){if(!this.enabled)return;const e=this.ctx.currentTime;this._osc("sine",t?48:64,e,t?.5:.28,t?.2:.12),this._osc("sawtooth",t?55:80,e,.22,.08),this._noiseBurst(e,t?.4:.22,t?160:280,.8,t?.14:.08),this._duck(t?.7:.32,t?.38:.16),t&&this.rumble(180,.85)}bomb(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",40,t,.55,.22),this._osc("triangle",90,t,.4,.1),this._noiseBurst(t,.45,140,.7,.16),this._duck(.8,.45),this.rumble(220,1)}bombBoom(){this.bomb(),this._duck(.92,.7)}comboStab(t=2){if(!this.enabled)return;const e=this.ctx.currentTime;if(t>=8){this._osc("sawtooth",196,e,.16,.06),this._osc("triangle",784,e,.18,.07),this._osc("sine",1176,e+.04,.2,.05);return}if(t>=4){this._osc("triangle",523,e,.14,.07),this._osc("sine",784,e+.03,.16,.05);return}this._osc("triangle",330,e,.12,.06),this._osc("sine",495,e+.02,.12,.04)}comboDrop(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("sine",220,t,.18,.06,null,90),this._osc("triangle",140,t+.04,.2,.04,null,70)}chip(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("triangle",740,t,.05,.034),this._osc("sine",420,t,.045,.02)}enemyWindup(){if(!this.enabled)return;const t=this.ctx.currentTime;t<(this._windupAt||0)+.08||(this._windupAt=t,this._osc("triangle",420,t,.11,.028,null,880))}enemyShot(t){if(!this.enabled)return;const e=this.ctx.currentTime;e<(this._shotAt||0)+.05||(this._shotAt=e,this._osc("square",t?620:1480,e,t?.055:.03,t?.046:.026),t&&this._osc("sine",90,e,.08,.05))}yardTick(){if(!this.enabled)return;const t=this.ctx.currentTime;this._osc("square",880,t,.03,.025)}ui(t="move"){if(!this.enabled)return;const e=this.ctx.currentTime;if(t==="ok"){this._osc("sine",520,e,.07,.04),this._osc("triangle",780,e+.03,.08,.03);return}this._osc("triangle",640,e,.035,.03)}boom(){this.explosion(!0)}}class q_{constructor(t){this.renderer=t,this.scene=new ba,this.scene.background=new W("#07040f"),this.scene.fog=new ya("#07040f",36,90),this.camera=new We(34,1,.12,140),this.time=0,this._portrait=!1,this._stageShift=0,this._stage=null,this._fitDirty=!0,this._hullRadius=3.2,this._hullTarget=new P(0,.1,0),this._fitDir=new P,this._fitBox=new fn,this._fitTmp=new fn,this._fitSize=new P;const e=new gr(t);this.scene.environment=e.fromScene(new th,.03).texture,e.dispose(),this.scene.environmentIntensity=.48,this._buildBay(),this.craft=nh(),this.craft.group.scale.setScalar(1.55),this.craft.group.position.set(0,.15,0),this.scene.add(this.craft.group),this.key=new qc(16769690,3.1),this.key.position.set(4.5,6.5,3.2),this.fill=new Wn(6087167,14,22,2),this.fill.position.set(-4.2,1.6,2.4),this.rim=new Wn(16726996,13,20,2),this.rim.position.set(1.4,2.2,-5.2),this.floorLight=new X0(10217471,16,28,.7,.45,1),this.floorLight.position.set(0,8.5,2),this.floorLight.target.position.set(0,0,0),this.scene.add(this.key,this.fill,this.rim,this.floorLight,this.floorLight.target),this.scene.add(new Yc(1709104,.62)),this.composer=new jc(t),this.composer.addPass(new Jc(this.scene,this.camera));const i=Math.max(2,window.innerWidth||2),n=Math.max(2,window.innerHeight||2);this.bloom=new pn(new ct(i,n),.3,.14,.42),this.composer.addPass(this.bloom),this.composer.addPass(new Qc),this.resize(window.innerWidth,window.innerHeight),this.setLoadout({spark:1},null)}_buildBay(){const t=new Ii({color:788504,metalness:.88,roughness:.32,emissive:1181724,emissiveIntensity:.4}),e=new C(new ws(9.5,48),t);e.rotation.x=-Math.PI/2,e.position.y=-1.35,this.scene.add(e);const i=new C(new Xt(4.4,.045,8,48),new Wt({color:6087167,transparent:!0,opacity:.62}));i.rotation.x=Math.PI/2,i.position.y=-1.32,this.scene.add(i),this._ring=i;const n=i.clone();n.scale.setScalar(1.35),n.material=new Wt({color:16765286,transparent:!0,opacity:.38}),this.scene.add(n),this._ring2=n;const r=new C(new Ht(11.5,11.5,10,32,1,!0),new Ii({color:591378,metalness:.7,roughness:.55,side:Ne,emissive:1706536,emissiveIntensity:.42}));r.position.y=2.2,this.scene.add(r);for(let l=0;l<8;l++){const c=l/8*Math.PI*2,h=new C(new ot(.08,7.2,.08),new Wt({color:l%2?6087167:16737512,transparent:!0,opacity:.55}));h.position.set(Math.cos(c)*10.6,2.1,Math.sin(c)*10.6),this.scene.add(h)}const o=new C(new Ss(18,.55),new Wt({color:16769690,transparent:!0,opacity:.42}));o.position.set(0,6.4,-4),o.rotation.x=.2,this.scene.add(o);const a=new C(new Ht(1.35,1.7,.28,24),new Ii({color:1445922,metalness:.9,roughness:.22,emissive:6087167,emissiveIntensity:.55}));a.position.y=-1.22,this.scene.add(a)}setLoadout(t,e=null){Ca(this.craft,t,e),this._fitDirty=!0}resize(t,e,i=null,n=null){this._w=t,this._h=e,this._stage=i&&i.width>8&&i.height>8?i:null,this._portrait=!!(n&&i&&n.top>i.bottom-8);const r=this._stage?this._stage.width:t,o=this._stage?this._stage.height:e;this.camera.aspect=r/Math.max(1,o),this.camera.fov=this._portrait?30:34,this.camera.clearViewOffset(),this.camera.updateProjectionMatrix(),this.composer.setSize(Math.max(2,r),Math.max(2,o)),this.bloom.setSize(Math.max(2,r),Math.max(2,o));const a=this._portrait?1.78:1.72;Math.abs(this.craft.group.scale.x-a)>.001&&(this.craft.group.scale.setScalar(a),this._fitDirty=!0),this._fitCamera()}_stageViewport(){const t=this._stage;if(!t)return null;const e=Math.round(t.left),i=Math.round(this._h-t.top-t.height),n=Math.max(1,Math.round(t.width)),r=Math.max(1,Math.round(t.height));return{x:e,y:i,w:n,h:r}}update(t){this.time+=t;const e=this.time;if(this.craft.group.rotation.y+=t*.32,this.craft.rig.rotation.z=Math.sin(e*.7)*.045,this.craft.rig.rotation.x=Math.sin(e*.45)*.03,this.craft.group.position.y=.15+Math.sin(e*.9)*.08,this._ring&&(this._ring.rotation.z=e*.12),this._ring2&&(this._ring2.rotation.z=-e*.08),this.fill.intensity=14+Math.sin(e*1.4)*2.2,this.rim.intensity=13+Math.cos(e*1.1)*2,this.craft.exhausts)for(const i of this.craft.exhausts)i.scale.setScalar(.85+Math.sin(e*8+i.position.x)*.18);ih(this.craft,t),this._fitCamera()}_measureHull(){const t=this.craft.group;t.updateWorldMatrix(!0,!0);const e=this._fitBox.makeEmpty(),i=this._fitTmp;if(t.traverse(r=>{if(!r.isMesh||!r.geometry)return;let o=r;for(;o;){if(o.visible===!1)return;o=o.parent}i.setFromObject(r),i.isEmpty()||e.union(i)}),e.isEmpty()){this._hullRadius=3.2,this._hullTarget.set(0,.1,0),this._fitDirty=!1;return}e.getSize(this._fitSize),e.getCenter(this._hullTarget);const n=.5*Math.hypot(this._fitSize.x,this._fitSize.z);this._hullRadius=Math.max(2.2,Math.hypot(n,this._fitSize.y*.5)),this._fitDirty=!1}_fitCamera(){this._fitDirty&&this._measureHull();const t=this._stage?this._stage.height:this._h,e=this._portrait?58:28,i=Math.max(.6,1-e/Math.max(1,t)),n=uu.degToRad(this.camera.fov*.5),r=Math.tan(n)*i,o=Math.tan(n)*this.camera.aspect,a=this._hullRadius*1.14/Math.min(r,o);this._fitDir.set(this._portrait?.46:.5,this._portrait?.3:.26,1).normalize(),this.camera.position.copy(this._hullTarget).addScaledVector(this._fitDir,a),this.camera.lookAt(this._hullTarget),this.camera.updateProjectionMatrix()}render(){const t=this.renderer,e=this._stageViewport();t.setClearColor(459791,1),t.setViewport(0,0,this._w,this._h),t.setScissorTest(!1),t.clear(),e&&(t.setViewport(e.x,e.y,e.w,e.h),t.setScissor(e.x,e.y,e.w,e.h),t.setScissorTest(!0)),this.composer.render(),t.setScissorTest(!1),t.setViewport(0,0,this._w,this._h)}}const Ra="aether-setup",Pa={music:.72,sfx:1,bloom:1,flare:1,film:1,shake:1},Y_=[{key:"music",group:"MIX",label:"MUSIC"},{key:"sfx",group:"MIX",label:"GUNS"},{key:"bloom",group:"PICTURE",label:"BLOOM"},{key:"flare",group:"PICTURE",label:"FLARE"},{key:"film",group:"PICTURE",label:"FILM"},{key:"shake",group:"PICTURE",label:"SHAKE"}];function $_(s){const t=Number(s);return Number.isFinite(t)?Math.max(0,Math.min(1,t)):0}function La(){return{...Pa}}function Ia(s){const t=La();if(!s||typeof s!="object")return t;for(const e of Object.keys(Pa))s[e]!=null&&(t[e]=$_(s[e]));return t}function K_(){try{return Ia(JSON.parse(localStorage.getItem(Ra)||"null"))}catch{return La()}}function Z_(s){const t=Ia(s);return localStorage.setItem(Ra,JSON.stringify(t)),t}function j_(){return localStorage.removeItem(Ra),La()}class J_{constructor(t){this.canvas=t,this.state="title",this.clock=new $c,this.input={keys:new Set,mouse:new ct(0,0),firing:!1},this._touch={id:null,x:0,y:0,held:!1,steerX:0,steerY:0},this._mouseFromTouch=0,this.audio=new X_,this.setup=K_(),this._setupFrom="title",this.audio.setMix(this.setup.music,this.setup.sfx),this.view=localStorage.getItem("aether-view")||"scroll",["chase","cockpit","scroll"].includes(this.view)||(this.view="scroll"),this._hasRun=!1,this._levelBossSpawned=!1,this._railHold=0,this._bossHold=0,this._bossSlow=0,this._pendingClear=!1,this._bossPhaseSeen=1,this.gateFx=0,this._riftBloom=0,this._viewSnap=1,this._camLook=new P,this._camUp=new P(0,1,0),this._chaseX=0,this._chaseV=0,this._chasePull=0,this._proj=new P,this._camFwd=new P,this._camRight=new P,this.stage=new tc,this.progress=po(),this.hangar=sr(),this.runBonus=rr(),this.campaignIndex=this.progress.nextC||0,this.levelIndex=this.progress.nextL||0,this._runLive=!1,this._hinted=new Set,this._teachQueue=[],this._resumeTo="play",this._mapCursor={c:this.campaignIndex,l:this.levelIndex},this.hitStop=0,this.kick=new P,this.kickAmt=0,this.bombs=3,this.bombMax=5,this.bombCd=0,this._padPrev={fire:!1,bomb:!1,start:!1,y:0},this._setupRenderer(),this._setupScene(),this._setupPost(),this._setupWorld(),this.shipyard=new q_(this.renderer),this._hangarCursor=0,this._hangarFrom="map",this._bindInput(),this._bindUI(),this.reset(!1),this._applySetup(this.setup),this._onResize(),window.addEventListener("resize",()=>this._onResize()),this.loop=this.loop.bind(this)}_setupRenderer(){this.renderer=new w0({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=je,this.renderer.toneMapping=ca,this.renderer.toneMappingExposure=.92,this.renderer.autoClear=!0}_setupScene(){this.scene=new ba,this.scene.background=new W("#05010d"),this.camera=new We(62,window.innerWidth/window.innerHeight,.08,1400);const t=new gr(this.renderer);this.scene.environment=t.fromScene(new th,.04).texture,t.dispose()}_setupPost(){const t=new ct(window.innerWidth,window.innerHeight);this.composer=new jc(this.renderer),this.composer.addPass(new Jc(this.scene,this.camera)),this.bloom=new pn(t,.48,.5,.42),this.composer.addPass(this.bloom),this.fx=new Zc(vg),this.fx.uniforms.uSunPos.value=new ct(.72,.68),this.fx.uniforms.uFlare.value=1,this.fx.uniforms.uCockpit.value=0,this.fx.uniforms.uGate.value=0,this.fx.uniforms.uKick.value=0,this.fx.uniforms.uResolution.value=t.clone(),this.composer.addPass(this.fx),this.composer.addPass(new Qc)}_setupWorld(){this.path=new xg,this.world=new yg(this.scene),this.world.attachRibbon(this.path.rebuildRibbon()),this.entities=new W_(this.scene),this.entities.onWindup=()=>this.audio.enemyWindup(),this.entities.onShot=e=>this.audio.enemyShot(e);const t=nh();this.shipCraft=t,this.ship=t.group,this.shipRig=t.rig,this.exhausts=t.exhausts,this.shipLights=t.lights,this.shipCore=t.core,this.muzzle=t.muzzle,this.muzzleSpike=t.muzzleSpike,this.muzzleFlash=0,this.scene.add(this.ship),this.trail=new Gg(this.scene),this.traces=[];for(let e=0;e<4;e++){const i=new C(new mt(.42,10,8),new Wt({color:16737512})),n=new C(new mt(.85,10,8),new Wt({color:16737512,transparent:!0,opacity:.32,blending:Me,depthWrite:!1}));i.add(n),i.visible=!1,this.scene.add(i),this.traces.push(i)}}_bindInput(){this.canvas.tabIndex=0;const t=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Numpad8","Numpad4","Numpad6","Numpad2","Space"]),e=r=>{if(r.code==="Escape"){r.preventDefault(),r.repeat||this._onEscape();return}if(t.has(r.code)&&r.preventDefault(),this._setKey(r,!0),this.state==="playing"&&!r.repeat&&this._releaseUiFocus(),this.state==="hangar"){this._onHangarKey(r);return}r.code==="KeyP"&&this.state==="playing"&&this.pause(),(r.code==="KeyB"||r.code==="KeyC")&&this.state==="playing"&&!r.repeat&&this._tryBomb(),(r.code==="Digit1"||r.code==="Numpad1")&&this.setView("chase"),(r.code==="Digit2"||r.code==="Numpad2")&&this.setView("cockpit"),(r.code==="Digit3"||r.code==="Numpad3")&&this.setView("scroll"),r.code==="KeyV"&&this.cycleView()},i=r=>{t.has(r.code)&&r.preventDefault(),this._setKey(r,!1)};window.addEventListener("keydown",e,!0),window.addEventListener("keyup",i,!0),window.addEventListener("blur",()=>this._clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this._clearInput()});const n={passive:!1,capture:!0};document.addEventListener("pointerdown",r=>this._onPointerDown(r),n),document.addEventListener("pointermove",r=>this._onPointerMove(r),n),document.addEventListener("pointerup",r=>this._onPointerUp(r),n),document.addEventListener("pointercancel",r=>this._onPointerUp(r),n),window.PointerEvent||(document.addEventListener("touchstart",r=>this._onTouchStart(r),n),document.addEventListener("touchmove",r=>this._onTouchMove(r),n),document.addEventListener("touchend",r=>this._onTouchEnd(r),n),document.addEventListener("touchcancel",r=>this._onTouchEnd(r),n))}_isBlockingUi(t){if(!(t instanceof Element))return!1;const e=t.closest(".screen");return e?.classList.contains("hidden")?!1:e&&!e.classList.contains("hidden")?!0:!!t.closest("button, a, input, textarea, label")}_onPointerDown(t){if(this.state==="playing"&&t.isPrimary!==!1&&!(t.pointerType==="mouse"&&t.button!==0)&&!this._isBlockingUi(t.target)){t.preventDefault(),this._touch.held=!0,this._touch.id=t.pointerId,this._touch.x=t.clientX,this._touch.y=t.clientY,this._touch.steerX=0,this._touch.steerY=0,this.input.firing=!0,this.slide.set(0,0),this.input.mouse.x=t.clientX/window.innerWidth*2-1,this.input.mouse.y=-(t.clientY/window.innerHeight)*2-1;try{this.canvas.setPointerCapture(t.pointerId)}catch{}this.audio.resume?.()}}_onPointerMove(t){if(!this._touch.held||t.pointerId!==this._touch.id)return;t.preventDefault();const e=t.clientX-this._touch.x,i=t.clientY-this._touch.y;this._touch.x=t.clientX,this._touch.y=t.clientY,this._applyTouchDrag(e,i),this.input.mouse.x=t.clientX/window.innerWidth*2-1,this.input.mouse.y=-(t.clientY/window.innerHeight)*2-1}_onPointerUp(t){!this._touch.held||t.pointerId!==this._touch.id||this._endTouch()}_onTouchStart(t){const e=t.changedTouches?.[0];e&&this._onPointerDown({isPrimary:!0,pointerType:"touch",button:0,pointerId:e.identifier,clientX:e.clientX,clientY:e.clientY,target:t.target,preventDefault:()=>t.preventDefault()})}_onTouchMove(t){const e=t.touches?.[0]||t.changedTouches?.[0];e&&this._onPointerMove({pointerId:this._touch.id,clientX:e.clientX,clientY:e.clientY,preventDefault:()=>t.preventDefault()})}_onTouchEnd(t){this._onPointerUp({pointerId:this._touch.id}),t.preventDefault?.()}_applyTouchDrag(t,e){const i=this._laneLimit(),n=this._depthLimit(),r=Math.max(1,i*2),o=Math.max(1,n.max-n.min),a=Math.max(1,window.innerWidth),l=Math.max(1,window.innerHeight);this.offset.x=He(this.offset.x+t/a*r,-i,i),this.holdY=He(this.holdY+-e/l*o,n.min,n.max),this._touch.steerX=He(t/10,-1,1),this._touch.steerY=He(-e/10,-1,1)}_endTouch(){this._touch.held=!1,this._touch.id=null,this._touch.steerX=0,this._touch.steerY=0,this.input.firing=!1}_bindUI(){this.ui={hud:document.getElementById("hud"),score:document.getElementById("score"),combo:document.getElementById("combo"),depth:document.getElementById("depth"),hudVitals:document.querySelector(".hud-vitals"),health:document.getElementById("health-fill"),boost:document.getElementById("boost-fill"),riftFill:document.getElementById("rift-fill"),riftName:document.getElementById("rift-name"),riftWrap:document.querySelector(".rift-wrap"),toast:document.getElementById("toast"),teach:document.getElementById("teach"),title:document.getElementById("title-screen"),pause:document.getElementById("pause-screen"),setup:document.getElementById("setup-screen"),dead:document.getElementById("dead-screen"),stats:document.getElementById("final-stats"),resultKicker:document.getElementById("result-kicker"),resultTitle:document.getElementById("result-title"),resultRank:document.getElementById("result-rank"),resultRec:document.getElementById("result-rec"),resultNext:document.getElementById("result-next"),resultBoard:document.getElementById("result-board"),titleScores:document.getElementById("title-scores"),bombs:document.getElementById("bomb-pips"),lives:document.getElementById("life-pips"),continue:document.getElementById("continue-screen"),continueLeft:document.getElementById("continue-left"),continueFade:document.getElementById("continue-fade"),map:document.getElementById("map-screen"),mapGrid:document.getElementById("campaign-map"),mapKicker:document.getElementById("map-kicker"),mapTitle:document.getElementById("map-title"),mapTag:document.getElementById("map-tag"),deployBtn:document.getElementById("deploy-btn"),mapMenuBtn:document.getElementById("map-menu-btn"),hangarMapBtn:document.getElementById("hangar-map-btn"),hangar:document.getElementById("hangar-screen"),hangarList:document.getElementById("hangar-list"),hangarGold:document.getElementById("hangar-gold"),hangarBuy:document.getElementById("hangar-buy"),hangarDone:document.getElementById("hangar-done"),hangarHullBtn:document.getElementById("hangar-hull-btn"),hangarName:document.getElementById("hangar-item-name"),hangarBlurb:document.getElementById("hangar-item-blurb"),hangarCost:document.getElementById("hangar-item-cost"),hangarKicker:document.getElementById("hangar-kicker"),hangarTitle:document.getElementById("hangar-title"),hangarHint:document.getElementById("hangar-hint"),hangarPayout:document.getElementById("hangar-payout"),gold:document.getElementById("gold"),bossMeter:document.getElementById("boss-meter"),bossFill:document.getElementById("boss-fill"),bossName:document.getElementById("boss-name"),bossTitle:document.getElementById("boss-title"),startBtn:document.getElementById("start-btn"),resumeTitleBtn:document.getElementById("resume-title-btn"),titleSetupBtn:document.getElementById("title-setup-btn"),pauseSetupBtn:document.getElementById("setup-pause-btn"),setupReset:document.getElementById("setup-reset"),setupBack:document.getElementById("setup-back"),viewBtns:[...document.querySelectorAll("[data-view]")],pauseBtn:document.getElementById("pause-btn"),bombBtn:document.getElementById("bomb-btn"),bombFlash:document.getElementById("bomb-flash"),riftBloom:document.getElementById("rift-bloom")},this.ui.combo?.addEventListener("animationend",e=>{String(e.animationName).startsWith("combo-stab")&&this.ui.combo.classList.remove("combo-stab","combo-mark-2","combo-mark-4","combo-mark-8"),e.animationName==="combo-drop"&&this.ui.combo.classList.remove("combo-drop")}),this.ui.startBtn.addEventListener("click",()=>this.startPlay()),this.ui.resumeTitleBtn.addEventListener("click",()=>this.resumeFromMenu()),this.ui.titleSetupBtn?.addEventListener("click",()=>this._openSetup("title")),this.ui.pauseSetupBtn?.addEventListener("click",()=>this._openSetup("paused")),this.ui.setupReset?.addEventListener("click",()=>this._resetSetup()),this.ui.setupBack?.addEventListener("click",()=>this._closeSetup()),this.ui.setup?.addEventListener("input",e=>this._onSetupInput(e)),document.getElementById("resume-btn").addEventListener("click",()=>this.resume()),document.getElementById("menu-btn").addEventListener("click",()=>this.goToMenu({resumeable:!0})),document.getElementById("retry-btn").addEventListener("click",()=>this.startPlay()),this.ui.deployBtn?.addEventListener("click",()=>this._deployLevel()),this.ui.mapMenuBtn?.addEventListener("click",()=>this.goToMenu({resumeable:this._runLive})),this.ui.hangarMapBtn?.addEventListener("click",()=>this._openHangar({from:"map"})),this.ui.hangarBuy?.addEventListener("click",()=>this._hangarBuy()),this.ui.hangarDone?.addEventListener("click",()=>this._hangarDone()),this.ui.hangarHullBtn?.addEventListener("click",()=>this._toggleHangarShop()),this.ui.hangarList?.addEventListener("click",e=>{const i=e.target.closest("[data-mod]");i&&(this._hangarCursor=Ae.indexOf(i.dataset.mod),this._hangarCursor<0&&(this._hangarCursor=0),this.audio.yardTick(),this._renderHangar())}),this.ui.hangarList?.addEventListener("mouseover",e=>{const i=e.target.closest("[data-mod]");if(!i||i===this._hangarHover)return;this._hangarHover=i;const n=performance.now();this._yardHoverAt&&n-this._yardHoverAt<90||(this._yardHoverAt=n,this.audio.yardTick())}),document.getElementById("continue-yes")?.addEventListener("click",()=>this._acceptContinue()),document.getElementById("continue-no")?.addEventListener("click",()=>this._declineContinue()),this.ui.pauseBtn?.addEventListener("click",()=>{this.state==="playing"?this.pause():this.state==="paused"&&this.resume()}),this.ui.bombBtn?.addEventListener("click",()=>this._tryBomb());const t=[this.ui.startBtn,this.ui.resumeTitleBtn,this.ui.titleSetupBtn,this.ui.pauseSetupBtn,this.ui.setupReset,this.ui.setupBack,document.getElementById("resume-btn"),document.getElementById("menu-btn"),document.getElementById("retry-btn"),document.getElementById("continue-yes"),document.getElementById("continue-no"),this.ui.deployBtn,this.ui.mapMenuBtn,this.ui.hangarMapBtn,this.ui.hangarBuy,this.ui.hangarDone,this.ui.hangarHullBtn,this.ui.pauseBtn,this.ui.bombBtn].filter(Boolean);for(const e of t)e.addEventListener("mousedown",i=>i.stopPropagation()),e.addEventListener("pointerdown",i=>i.stopPropagation()),e.addEventListener("click",()=>this._releaseUiFocus());for(const e of this.ui.viewBtns)e.addEventListener("click",()=>{this.setView(e.dataset.view),this._releaseUiFocus()}),e.addEventListener("mousedown",i=>i.stopPropagation()),e.addEventListener("pointerdown",i=>i.stopPropagation());this._syncViewHud(),this._syncTitleActions(),this._renderScoreboard(this.ui.titleScores,aa()),this._syncBombs(),this.ui.mapGrid?.addEventListener("click",e=>{const i=e.target.closest("[data-c]");if(!i)return;const n=Number(i.dataset.c),r=Number(i.dataset.l);this._nodeLocked(n,r)||(this._mapCursor={c:n,l:r},this._renderMap())})}_syncTitleActions(){!this.ui?.resumeTitleBtn||!this.ui?.startBtn||(this.ui.resumeTitleBtn.hidden=!this._hasRun,this.ui.startBtn.textContent=this._hasRun?"NEW RUN":"ENGAGE")}_setKey(t,e){const i=[t.code],n=(t.key||"").toLowerCase();n.length===1&&i.push(n);for(const r of i)e?this.input.keys.add(r):this.input.keys.delete(r)}_releaseUiFocus(){const t=document.activeElement;t&&t!==document.body&&t!==this.canvas&&typeof t.blur=="function"&&t.blur(),this.canvas?.focus({preventScroll:!0})}_clearInput(){this.input.keys.clear(),this.input.firing=!1,this.slide?.set(0,0),this._endTouch?.()}_onEscape(){if(this.state==="hangar"){this._hangarDone();return}if(this.state==="map"){this.goToMenu({resumeable:this._runLive});return}if(this.state==="setup"){this._closeSetup();return}if(this.state==="playing"||this.state==="paused"){this.goToMenu({resumeable:!0});return}if(this.state==="title"&&this._hasRun){this.resumeFromMenu();return}this.state==="dead"&&this.goToMenu({resumeable:!1}),this.state==="continue"&&this._declineContinue()}goToMenu({resumeable:t=!1}={}){this._clearInput(),this._hasRun=t,this._resumeTo=this.state==="map"?"map":"play",this.state="title",this.audio.setPaused(!0),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.setup?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.title.classList.remove("hidden"),this._syncTitleActions(),this._renderScoreboard(this.ui.titleScores,aa()),t||(this._runLive=!1,this.reset(!0))}resumeFromMenu(){if(this._hasRun){if(this._resumeTo==="map"){this._openMap({keepRun:!0});return}this._clearInput(),this.state="playing",this.ui.title.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.setup?.classList.add("hidden"),this.ui.hud.classList.add("visible"),this.audio.setPaused(!1),this.clock.getDelta(),this._releaseUiFocus()}}cycleView(){const t=["chase","cockpit","scroll"],e=t.indexOf(this.view);this.setView(t[(e+1)%t.length])}setView(t){if(!["chase","cockpit","scroll"].includes(t))return;if(this.view===t&&this._viewSnap===0){this._syncViewHud();return}this.view=t,this._viewSnap=1,localStorage.setItem("aether-view",t),this._syncViewHud();const e={chase:"CHASE CAM",cockpit:"COCKPIT",scroll:"SCROLL CAM"};(this.state==="playing"||this.state==="paused")&&this.toast(e[t])}_syncViewHud(){if(this.ui?.viewBtns)for(const t of this.ui.viewBtns)t.classList.toggle("active",t.dataset.view===this.view)}_activeView(){return this.state==="title"?"chase":this.view}_applyCamera(t,e,i,n,r){const o=this._activeView();this.ship.visible=o!=="cockpit";const a=r||i,l=n||e,c=new P,h=new P,u=new P;let d=62;const f=this._viewSnap>.02;if(o==="cockpit")d=78,c.copy(this.ship.position).addScaledVector(l.tangent,1.85).addScaledVector(a.normal,.72),h.copy(this.ship.position).addScaledVector(l.tangent,30),u.copy(a.normal);else if(o==="scroll"){d=38;const p=this.path.sample(this.traveled+22),w=Di(p.tangent);c.copy(p.pos).addScaledVector(w.normal,168),h.copy(p.pos),u.copy(p.tangent)}else{d=58;const p=this.path.sample(this.traveled+this.holdY+10),w=Di(p.tangent);this._stepChaseFollow(t,f),c.copy(p.pos).addScaledVector(p.tangent,-56).addScaledVector(w.normal,23).addScaledVector(w.binormal,this._chaseX),h.copy(p.pos).addScaledVector(p.tangent,28).addScaledVector(w.binormal,this._chaseX),u.copy(w.normal)}const g=o==="chase"?this._chasePull:0,_=f?16:o==="scroll"?12:o==="chase"?mi(9.5,22,g):5,m=f?14:o==="scroll"?11:o==="chase"?mi(8.2,20,g):5.5;this.camera.position.lerp(c,1-Math.exp(-t*_)),this.camera.position.addScaledVector(this.kick,this.kickAmt*(this.setup?.shake??1)),this._camLook.lerp(h,1-Math.exp(-t*m)),this._camUp.lerp(u,1-Math.exp(-t*m)),this.camera.up.copy(this._camUp),this.camera.lookAt(this._camLook),this.camera.fov=mi(this.camera.fov,d,1-Math.exp(-t*7)),this.camera.updateProjectionMatrix(),o==="chase"&&this._keepShipInFrame(),this._viewSnap=Math.max(0,this._viewSnap-t*2.4)}_chaseViewHalf(){const t=this.camera.fov*Math.PI/180;return Math.max(8,Math.tan(t/2)*this.camera.aspect*66)}_stepChaseFollow(t,e){const i=this.offset.x-this._chaseX,n=this._chaseViewHalf(),r=He(Math.abs(i)/n,0,1.35);if(this._chasePull=He(r*r,0,1),e){this._chaseX=this.offset.x,this._chaseV=0,this._chasePull=1;return}const o=1.45+11*this._chasePull,a=2*o;this._chaseV+=(i*o*o-this._chaseV*a)*t,this._chaseX+=this._chaseV*t;const l=Math.max(4,n*.72),c=He(this._chaseX,this.offset.x-l,this.offset.x+l);c!==this._chaseX&&(this._chaseX=c,this._chaseV=0)}_keepShipInFrame(){this.camera.updateMatrixWorld();const t=this._proj.copy(this.ship.position).project(this.camera),e=.86;if(!Number.isFinite(t.x)||Math.abs(t.x)<=e)return;this.camera.getWorldDirection(this._camFwd);const i=Math.max(8,(this.ship.position.x-this.camera.position.x)*this._camFwd.x+(this.ship.position.y-this.camera.position.y)*this._camFwd.y+(this.ship.position.z-this.camera.position.z)*this._camFwd.z),n=this.camera.fov*Math.PI/180,r=Math.tan(n/2)*this.camera.aspect*i,a=(Math.abs(t.x)-e)*r*Math.sign(t.x);this._camRight.crossVectors(this._camFwd,this.camera.up).normalize(),this.camera.position.addScaledVector(this._camRight,a),this._camLook.addScaledVector(this._camRight,a),this._chaseX+=a,this._chaseV=0,this.camera.lookAt(this._camLook)}reset(t=!0){this._resetRun(),this._resetLevel(t)}_resetRun(){this.health=1,this.lives=3,this.continues=2,this.rank=0,this.step=0,this.charge=0,this.hangar=sr(),this.runBonus=rr(),this._applyLoadout(),this.gunCd={primary:0,missile:0,titan:0,mine:0,nova:0},this.score=0,this.combo=1,this.comboTimer=0,this._lastCombo=1,this.kills=0,this.maxCombo=1,this.maxStep=0,this.nearMisses=0,this.bombsUsed=0,this.bombs=3,this.best=Number(localStorage.getItem("aether-best")||0),this.campaignIndex=this.progress?.nextC||0,this.levelIndex=this.progress?.nextL||0,this._teachQueue=[],clearTimeout(this._teachTimer),this.ui?.teach&&this.ui.teach.classList.remove("show")}_resetLevel(t=!0){if(this.traveled=40,this.speed=28,this.throttle=.55,this.boost=1,this.health=1,this.spawnIn=.65,this.hurt=0,this.invuln=2.2,this.gateFx=0,this._riftBloom=0,this.entities?.pullLoot?.(!1),this.ui.riftBloom?.classList.remove("show"),this.fireCd=0,this._blockWarn=!1,this.offset=new ct(0,0),this.holdY=8,this._chaseX=0,this._chaseV=0,this._chasePull=0,this.steer=new ct(0,0),this.slide=new ct(0,0),this._ribbonAt=-1,this.hitStop=0,this.kick.set(0,0,0),this.kickAmt=0,this.bombCd=0,this._chapterAt=-1,this._levelBossSpawned=!1,this._railHold=0,this._bossHold=0,this._bossSlow=0,this._pendingClear=!1,this._bossPhaseSeen=1,this.ui.bossTitle?.classList.remove("show","fall","settled"),this.muzzleFlash=0,this._midsThisLevel=0,this.hangar=sr(),this.runBonus=rr(),this._applyLoadout(),this.traces)for(const r of this.traces)r.visible=!1;const e=kn(this.campaignIndex,this.levelIndex),i=e?.lv.script,n=e?.lv.length||1400;this.stage=new tc(i,n),this._chapterId=e?.lv.world||"default",this.entities.reset(),t&&(this.world.layoutFromPath(this.path,this.traveled,this._laneLimit()),this.world.attachRibbon(this._localRibbon())),this.world.setChapter(this._chapterId),this.audio.setChapter(this._audioChapter(this._chapterId)),this._syncBombs(),this._syncLives({force:!0})}_localRibbon(){const t=[];for(let i=-6;i<36;i++)t.push(this.path.sample(Math.max(8,this.traveled+i*18)).pos.clone());const e=new xr(t,!1,"catmullrom",.5);return new Er(e,180,1.28,12,!1)}async startPlay(){await this.audio.resume(),this._runLive=!1,this._hasRun=!1,this.progress=po(),this._mapCursor={c:this.progress.nextC||0,l:this.progress.nextL||0},this._openMap({fromTitle:!0})}pause(){this.state="paused",this.audio.setPaused(!0),this.ui.pause.classList.remove("hidden")}resume(){this.state="playing",this.audio.setPaused(!1),this.ui.pause.classList.add("hidden"),this.ui.setup?.classList.add("hidden"),this.clock.getDelta(),this._releaseUiFocus()}async _openSetup(t){await this.audio.resume(),this.state==="playing"?this._setupFrom="paused":this._setupFrom=t||(this.state==="paused"?"paused":"title"),this.state="setup",this.audio.setPaused(!1),this.ui.title.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.setup?.classList.remove("hidden"),this._paintSetup(),this._releaseUiFocus()}_closeSetup(){if(this.ui.setup?.classList.add("hidden"),this._setupFrom==="paused"){this.state="paused",this.ui.pause.classList.remove("hidden"),this.audio.setPaused(!0);return}this.state="title",this.ui.title.classList.remove("hidden"),this.audio.setPaused(!0)}_onSetupInput(t){const e=t.target?.name;if(!e||!(e in Pa))return;const i=Number(t.target.value)/100;if(this.setup=Z_({...this.setup,[e]:i}),this._applySetup(this.setup),this._paintSetup(),e==="sfx"){const n=performance.now();(!this._setupShotAt||n-this._setupShotAt>90)&&(this._setupShotAt=n,this.audio.shotFor("spark"))}else this.audio.ui("move")}_resetSetup(){this.setup=j_(),this._applySetup(this.setup),this._paintSetup(),this.audio.ui("ok")}_applySetup(t){this.setup=Ia(t),this.audio.setMix(this.setup.music,this.setup.sfx);const e=document.getElementById("scanlines");e&&(e.style.opacity=String(.35*this.setup.film));const i=document.getElementById("vignette-frame");i&&(i.style.opacity=String(.55+.45*this.setup.film))}_paintSetup(){for(const{key:t}of Y_){const e=this.ui.setup?.querySelector(`input[name="${t}"]`);e&&(e.value=String(Math.round(this.setup[t]*100)));const i=this.ui.setup?.querySelector(`[data-read="${t}"]`);i&&(i.textContent=String(Math.round(this.setup[t]*100)))}}die(){if(!(this._pendingClear||this._bossSlow>0)){if(this.audio.sting("death"),this.entities.explode(this.ship.position.clone(),16726996),this.lives-=1,this._syncLives({lost:!0}),this.lives>0){this._respawn();return}if(this.continues>0){this._showContinue();return}this._endRun(!1)}}_respawn(){this.health=1,this.hurt=0,this.invuln=2.2,this.spawnIn=.65,this.offset.x=0,this.holdY=8,this.slide.set(0,0),this.muzzleFlash=0,this.audio.sting("life"),clearTimeout(this._lifePipTimer),this._lifePipTimer=setTimeout(()=>this._syncLives({force:!0}),420)}_showContinue(){this.state="continue",this._continueT=9,this.audio.setContinue(!0),this.audio.sting("continue"),this.ui.continueLeft&&(this.ui.continueLeft.textContent=`${this.continues} CREDIT${this.continues===1?"":"S"} REMAIN`),this.ui.continueFade&&(this.ui.continueFade.style.transform="scaleX(1)"),this.ui.continue?.classList.remove("hidden")}_tickContinue(t){this.state==="continue"&&(this._continueT=Math.max(0,(this._continueT??9)-t),this.ui.continueFade&&(this.ui.continueFade.style.transform=`scaleX(${this._continueT/9})`),this._continueT<=0&&this._declineContinue())}_acceptContinue(){this.state!=="continue"||this.continues<=0||(this.continues-=1,this.lives=3,this.ui.continue?.classList.add("hidden"),this.state="playing",this.audio.setContinue(!1),this.audio.setPaused(!1),this._respawn(),this.clock.getDelta(),this._releaseUiFocus())}_declineContinue(){this.ui.continue&&this.ui.continue.classList.add("hidden"),this._endRun(!1)}_gradeNow(t){return h_({score:this.score,kills:this.kills,step:this.maxStep||this.step,maxCombo:this.maxCombo,victory:t,nearMisses:this.nearMisses,bombsUsed:this.bombsUsed})}_endRun(t){this.state="dead",this._hasRun=!1,this._runLive=!1,this._syncTitleActions(),this.audio.setContinue(!1),this.audio.setPaused(!1),this.best=Math.max(this.best,this.score),localStorage.setItem("aether-best",String(this.best));const e=this._gradeNow(t);u_({score:this.score,rank:e,kills:this.kills,depth:Math.floor(this.traveled/10),victory:t,at:Date.now()}),this.ui.hud.classList.remove("visible"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.setup?.classList.add("hidden"),this.ui.dead.classList.remove("hidden");const i=kn(this.campaignIndex,this.levelIndex);this.ui.resultKicker&&(this.ui.resultKicker.textContent="",this.ui.resultKicker.hidden=!0),this.ui.resultTitle&&(this.ui.resultTitle.textContent="",this.ui.resultTitle.hidden=!0),this.ui.resultRank&&(this.ui.resultRank.textContent=e);const n=t?_o(this.hangar?.levels||{},this.hangar?.gold||0,i?.lv.id||""):null,r=t?Jl(this.campaignIndex,this.levelIndex):null;this.ui.stats&&(this.ui.stats.textContent=t?`CLEARED · ${i?.lv.id||""}`:`LOST · ${i?.lv.id||""}`),this.ui.resultRec&&(this.ui.resultRec.textContent=n?`NEXT BUY · ${Bn[n].title}`:""),this.ui.resultNext&&(this.ui.resultNext.textContent=t?r?`NEXT · ${r.lv.id} ${r.lv.name}`:"CAMPAIGN CLEAR":""),this.ui.resultBoard&&(this.ui.resultBoard.innerHTML="",this.ui.resultBoard.hidden=!0)}toast(t){this.ui.toast.textContent=t,this.ui.toast.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.ui.toast.classList.remove("show"),1200)}_teach(t,e){if(!this._hinted.has(t)&&(this._hinted.add(t),!!this.ui.teach)){if(this.ui.teach.classList.contains("show")||this._teachQueue.length){this._teachQueue.push(e);return}this._showTeach(e)}}_showTeach(t){this.ui.teach&&(this.ui.teach.textContent=t,this.ui.teach.classList.add("show"),clearTimeout(this._teachTimer),this._teachTimer=setTimeout(()=>{this.ui.teach.classList.remove("show");const e=this._teachQueue.shift();e&&(this._teachTimer=setTimeout(()=>this._showTeach(e),200))},2200))}_maybeBoardTeach(){this.state!=="playing"||!this.entities||(this._hinted.has("gate")||this.entities.gates.find(e=>e.alive&&e.locked&&e.pathDist-this.traveled<64&&e.pathDist-this.traveled>22)&&this._teach("gate","SHOOT THE LOCK — OR SLIDE THE GAP"),this._hinted.has("heavy")||this.entities.enemies.find(e=>e.alive&&/heavy|slag|chime|prism|wisp/.test(e.role)&&e.pathDist-this.traveled<88&&e.pathDist-this.traveled>22)&&this._teach("heavy","HOLD FIRE ON THE BRICK"))}_currentLevel(){return kn(this.campaignIndex,this.levelIndex)}_nodeLocked(t,e){const i=`${t}-${e}`;return!(this.progress.cleared.includes(i)||t===(this.progress.nextC||0)&&e===(this.progress.nextL||0)||this._runLive&&t===this._mapCursor.c&&e===this._mapCursor.l)}_openMap({fromTitle:t=!1,keepRun:e=!1}={}){this._clearInput(),this.state="map",this.audio.setPaused(!0),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.setup?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.map?.classList.remove("hidden"),this.progress=po(),!e&&!this._runLive&&(this._mapCursor={c:this.progress.nextC||0,l:this.progress.nextL||0}),this._renderMap(),this._syncTitleActions(),this._releaseUiFocus(),t&&this.clock.getDelta()}_renderMap(){const t=this.ui.mapGrid;if(!t)return;const e=this._mapCursor,i=kn(e.c,e.l);if(this.ui.mapKicker&&(this.ui.mapKicker.textContent=i?.camp.kicker||"CAMPAIGN MAP"),this.ui.mapTitle&&(this.ui.mapTitle.textContent=i?.lv.name||"THE AETHER RIFT"),this.ui.mapTag&&(this.ui.mapTag.textContent=i?.camp.blurb||""),t.innerHTML=hi.map((n,r)=>{const o=r===e.c,a=n.levels.map((l,c)=>{const h=`${r}-${c}`,u=this.progress.cleared.includes(h),d=this._nodeLocked(r,c),f=!u&&!d&&r===(this.progress.nextC||0)&&c===(this.progress.nextL||0),g=r===e.c&&c===e.l&&!u,_=c===n.levels.length-1,m=l.banner==="finale",p=m?"finale boss":_?"boss":"",w=m?"✦":_?"★":String(c+1);return`<button type="button" class="map-node ${p} ${u?"cleared spent":""} ${f?"next":""} ${g?"current":""} ${d?"locked":""}" data-c="${r}" data-l="${c}" ${d?"disabled":""} aria-label="${l.id} ${l.name}">${w}</button>`}).join('<div class="map-rail"></div>');return`<div class="map-campaign${o?" current":""}"><div class="map-camp-meta"><span class="kicker">${n.kicker}</span><span class="name">${n.name}</span></div><div class="map-nodes">${a}</div></div>`}).join(""),this.ui.deployBtn){const n=i?.lv;this.ui.deployBtn.textContent=n?`DEPLOY ${n.id}`:"DEPLOY"}}_openHangar({from:t="map",payout:e=null,slot:i=null,nxt:n=null,hangar:r=null,goldFrom:o=null}={}){this._clearInput(),this._hangarFrom=t,this.state="hangar",this.hangar=r||this.hangar||sr(),this.audio.setPaused(!1),this.audio.setIntensity(.16),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.map?.classList.add("hidden"),this.ui.setup?.classList.add("hidden"),this.ui.hud.classList.remove("visible"),this.ui.hangar?.classList.remove("hidden"),this.audio.setChapter("hangar"),this.audio.yardTick(),this._setHangarShopMin(!1);const a=t==="clear"||t==="win";if(this.ui.hangarKicker&&(this.ui.hangarKicker.hidden=a,this.ui.hangarKicker.textContent=a?"":"DRYDOCK"),this.ui.hangarTitle&&(this.ui.hangarTitle.textContent=a?this._gradeNow(!0):"SHIPYARD",this.ui.hangarTitle.classList.toggle("rank-mark",a)),this.ui.hangarPayout)if(a){const l=_o(this.hangar.levels,this.hangar.gold,i?.lv.id||""),c=t==="win"?"CAMPAIGN CLEAR":n?`NEXT · ${n.lv.id} ${n.lv.name}`:"";this.ui.hangarPayout.textContent=[`CLEARED · ${i?.lv.id||""}`,l?`NEXT BUY · ${Bn[l].title}`:"",c].filter(Boolean).join(`
`)}else this.ui.hangarPayout.textContent="";if(this.ui.hangarHint){const l=t==="clear"||t==="win";this.ui.hangarHint.hidden=l,this.ui.hangarHint.textContent=l?"":"Preview a system on the hull. Install it. Powerups in the rift only charge what you bought."}if(this.ui.hangarDone&&(this.ui.hangarDone.textContent=t==="win"?"RESULTS":t==="clear"?"CAMPAIGN MAP":"RETURN"),this._hangarRecommend=t==="clear"||t==="win"?_o(this.hangar.levels,this.hangar.gold,i?.lv.id||""):null,this._hangarRecommend){const l=Ae.indexOf(this._hangarRecommend);l>=0&&(this._hangarCursor=l)}else this._hangarCursor=Math.max(0,Math.min(Ae.length-1,this._hangarCursor||0));this._renderHangar(),a&&o!=null&&this.ui.hangarGold&&(this.ui.hangarGold.textContent=String(o)),requestAnimationFrame(()=>{this.state==="hangar"&&(this._renderHangar(),a&&o!=null&&this.ui.hangarGold&&(this.ui.hangarGold.classList.remove("gold-catch"),this.ui.hangarGold.offsetWidth,this.ui.hangarGold.classList.add("gold-catch"),this.audio.coin()))}),this.clock.getDelta(),this._syncShipyardView()}_hangarSelected(){return Ae[this._hangarCursor]||"spark"}_renderHangar(){const t=this._hangarSelected(),e=this.hangar.levels,i=(e[t]|0)>0?null:t;this.shipyard.setLoadout(ic(e,rr()),i),this.ui.hangarGold&&(this.ui.hangarGold.textContent=String(this.hangar.gold)),this.ui.hangarList&&(this.ui.hangarList.innerHTML=Ae.map((c,h)=>{const u=e[c]|0,d=ye[c].max,f=Mr(e,c),g=h===this._hangarCursor,_=u<=0,m=u>=d,p=Array.from({length:d},(M,I)=>`<span class="pip${I<u?" on":""}${g&&_&&I===0?" ghost":""}"></span>`).join(""),w=m?"MAX":_?`₡${f}`:`${u}/${d}  ₡${f}`,S=this._hangarRecommend===c;return`<button type="button" class="hangar-row${g?" selected":""}${_?" locked":""}${m?" maxed":""}${S?" recommend":""}" data-mod="${c}" role="option" aria-selected="${g}"><span><strong>${Bn[c].title}</strong><div class="pips">${p}</div></span><span class="meta">${w}</span></button>`}).join(""),this.ui.hangarList.querySelector(".selected")?.scrollIntoView({block:"nearest"}));const n=Bn[t],r=e[t]|0,o=Mr(e,t),a=o>0&&this.hangar.gold<o;if(this.ui.hangarName&&(this.ui.hangarName.textContent=n.title),this.ui.hangarBlurb&&(this.ui.hangarBlurb.textContent=r<=0?`Not fitted. ${n.blurb}`:r>=ye[t].max?`Mark ${r}. The bay is glowing. ${n.blurb}`:`Mark ${r}. ${n.blurb}`),this.ui.hangarCost&&(this.ui.hangarCost.classList.toggle("poor",a),this.ui.hangarCost.textContent=o<=0?"SYSTEM MAXED":a?`₡${o}  —  NOT ENOUGH`:`₡${o}`),this.ui.hangarBuy){const l=x_(e,t);this.ui.hangarBuy.textContent=o<=0?l:a?`NOT ENOUGH  ₡${o}`:`${l}  ₡${o}`,this.ui.hangarBuy.disabled=o<=0||a,this.ui.hangarBuy.classList.toggle("poor",a)}}_setHangarShopMin(t){const e=this.ui.hangar;e&&(e.classList.toggle("shop-min",!!t),this.ui.hangarHullBtn&&(this.ui.hangarHullBtn.textContent=t?"SHOP":"VIEW HULL",this.ui.hangarHullBtn.setAttribute("aria-pressed",t?"true":"false")))}_toggleHangarShop(){const t=this.ui.hangar;t&&(this._setHangarShopMin(!t.classList.contains("shop-min")),requestAnimationFrame(()=>this._syncShipyardView()))}_hangarMove(t){const e=Ae.length;this._hangarCursor=(this._hangarCursor+t+e)%e,this.audio.yardTick(),this._renderHangar()}_hangarBuy(){const t=this._hangarSelected(),e=p_(this.hangar,t);if(this.hangar=e.hangar,!e.ok){this.audio.hit?.();return}this.audio.buy(),this._applyLoadout(),this._renderHangar()}_hangarDone(){if(this.ui.hangar?.classList.add("hidden"),this._hangarFrom==="win"){this.win();return}this._openMap({keepRun:this._runLive})}_onHangarKey(t){(t.code==="ArrowUp"||t.code==="KeyW"||t.code==="Numpad8")&&(t.preventDefault(),this._hangarMove(-1)),(t.code==="ArrowDown"||t.code==="KeyS"||t.code==="Numpad2")&&(t.preventDefault(),this._hangarMove(1)),(t.code==="Enter"||t.code==="Space")&&!t.repeat&&(t.preventDefault(),this._hangarBuy())}async _deployLevel(){const t=this._mapCursor.c,e=this._mapCursor.l;if(this._nodeLocked(t,e))return;await this.audio.resume();const i=this._runLive;this.campaignIndex=t,this.levelIndex=e,i||(this._resetRun(),this.campaignIndex=t,this.levelIndex=e),this._resetLevel(!0),this._runLive=!0,this._hasRun=!0,this._resumeTo="play",this.state="playing",this.ui.map?.classList.add("hidden"),this.ui.title.classList.add("hidden"),this.ui.dead.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.continue?.classList.add("hidden"),this.ui.hangar?.classList.add("hidden"),this.ui.setup?.classList.add("hidden"),this.ui.hud.classList.add("visible"),this._viewSnap=1,this.audio.setPaused(!1),this.clock.getDelta(),this._releaseUiFocus()}_clearLevel(){if(this.state!=="playing")return;this.stage.cleared=!0;const t=this._currentLevel(),e=this.campaignIndex,i=this.levelIndex;this.progress=e_(i_(this.progress,e,i));const n=Jl(e,i);n&&(this.campaignIndex=n.ci,this.levelIndex=n.li,this._mapCursor={c:n.ci,l:n.li});const r=this.hangar.gold;this._collectLooseGold();const o=__(e,i,{superBoss:t?.lv.chapters?.some(a=>/SUPER/.test(a.toast||"")),finale:t?.lv.boss==="finale",mids:this._midsThisLevel|0});this.hangar=mo(this.hangar,o.total),this.entities.pullLoot(!1),this._openHangar({from:n?"clear":"win",payout:o,slot:t,nxt:n,hangar:this.hangar,goldFrom:r})}win(){this._endRun(!0)}start(){requestAnimationFrame(this.loop)}loop(){requestAnimationFrame(this.loop);const t=Math.min(this.clock.getDelta(),.05);if(this._pollPad(),this.audio.tick(),this.state==="paused"||this.state==="dead"||this.state==="continue"||this.state==="map"||this.state==="hangar"||this.state==="setup"||this.state==="title"&&this._hasRun){if(this.state==="hangar"){this._syncShipyardView(),this.shipyard.update(t),this.shipyard.render();return}this.state==="continue"&&this._tickContinue(t),this._render();return}if(this.state==="playing"&&this.hitStop>0){this.hitStop-=t,this._render();return}this.update(t),this._render()}update(t){const e=this.state!=="playing",i=this._padState(),n=this.state==="playing"&&(this.input.keys.has("ShiftLeft")||this.input.keys.has("ShiftRight")||i.boost);let r=0;this.state==="playing"&&(n&&this.boost>.05?(r=1,this.boost=Math.max(0,this.boost-t*.32)):this.boost=Math.min(1,this.boost+t*.1)),this.kickAmt=Math.max(0,this.kickAmt-t*9),this.bombCd=Math.max(0,this.bombCd-t);const o=e?16:26+r*22+Math.min(this.traveled/2800,8);if(this.speed=mi(this.speed,o,1-Math.exp(-t*2.4)),this.state==="playing"&&this._railHold>0&&(this._railHold-=t),this.state==="playing"&&this._bossHold>0&&(this._bossHold-=t,this._bossHold<=0&&this.ui.bossTitle?.classList.add("settled")),this.state==="playing"&&(this._pendingClear||this._bossSlow>0)&&(this.invuln=Math.max(this.invuln,1)),this.state==="playing"&&this._bossSlow>0&&(this._bossSlow-=t,this._bossSlow<=0&&this._pendingClear)){this._pendingClear=!1,this._clearLevel();return}const a=this.state==="playing"&&(this._railHold>0||this._bossHold>0||this._bossSlow>0);this.traveled+=this.speed*t*(a?.32:1),this.path.ensure(this.traveled+400),Math.floor(this.traveled/90)!==this._ribbonAt&&(this._ribbonAt=Math.floor(this.traveled/90),this.world.attachRibbon(this._localRibbon()));const l=this.path.sample(this.traveled),c=Di(l.tangent);if(this.state==="playing"){const v=this._laneLimit(),x=this._depthLimit();if(this._touch.held){this.slide.set(0,0);const L=Math.exp(-t*12);this._touch.steerX*=L,this._touch.steerY*=L,this.steer.set(this._touch.steerX,this._touch.steerY)}else{let L=this._axisHeld(["KeyA","ArrowLeft","Numpad4","a"],["KeyD","ArrowRight","Numpad6","d"]),O=this._axisHeld(["KeyS","ArrowDown","Numpad2","s"],["KeyW","ArrowUp","Numpad8","w"]);Math.abs(i.x)>Math.abs(L)&&(L=i.x),Math.abs(i.y)>Math.abs(O)&&(O=i.y),this._applySlide(L,O,t),this.offset.x=He(this.offset.x+this.slide.x*t,-v,v),this.holdY=He(this.holdY+this.slide.y*t,x.min,x.max),this.offset.x<=-v&&this.slide.x<0&&(this.slide.x=0),this.offset.x>=v&&this.slide.x>0&&(this.slide.x=0),this.holdY<=x.min&&this.slide.y<0&&(this.slide.y=0),this.holdY>=x.max&&this.slide.y>0&&(this.slide.y=0),this.steer.set(L,O)}this.offset.x=He(this.offset.x,-v,v),this.holdY=He(this.holdY,x.min,x.max),this.offset.y=0}else this.slide.set(0,0),this.offset.x=Math.sin(this.clock.elapsedTime*.35)*this._laneLimit()*.42,this.holdY=8,this.steer.set(0,0);const h=gs(this.path,this.traveled+this.holdY,this.offset.x,.35),u=h.sample,d=h.frame;if(this.ship.position.copy(h.pos),this.ship.up.copy(d.normal),this.ship.lookAt(this.ship.position.clone().add(u.tangent)),ih(this.shipCraft,t),this.shipRig){const v=1-Math.exp(-t*9);this.shipRig.rotation.z=mi(this.shipRig.rotation.z,-this.steer.x*.35,v),this.shipRig.rotation.x=mi(this.shipRig.rotation.x,this.steer.y*.12,v);const x=this.invuln>0&&Math.sin(this.clock.elapsedTime*28)<0;this.shipRig.visible=!x}if(this.spawnIn>0){this.spawnIn=Math.max(0,this.spawnIn-t);const v=1-this.spawnIn/.65,x=1-(1-v)*(1-v);this.ship.scale.setScalar(3.1*Math.max(.04,x))}else this.ship.scale.setScalar(3.1);this._applyCamera(t,l,c,u,d);const f=r,g=this.state==="playing"&&(this.input.firing||this.input.keys.has("Space")||i.fire);for(const v of this.exhausts){const x=1+f*.8+(g?.22:0)+this.muzzleFlash*.35;v.scale.setScalar(x),v.material.color.set(f>.2?16765286:10217471)}this.muzzleFlash=Math.max(0,this.muzzleFlash-t*8),this.muzzle&&(this.muzzle.material.opacity=this.muzzleFlash*.9,this.muzzle.scale.setScalar((this._muzzleFat||.7)+this.muzzleFlash*1.6)),this.muzzleSpike&&(this.muzzleSpike.material.opacity=this.muzzleFlash*.7,this.muzzleSpike.scale.set(this._muzzleThin||1,1,.6+this.muzzleFlash*(this._muzzleLong||1.8)));for(const v of this.shipLights)v.intensity=3.2+f*3;this.trail.push(this.ship.position.clone().addScaledVector(u.tangent,-1.4),f),this.audio.setBoost(f),this.world.update(t,this.camera,this.traveled),this.world.recycleCrystals(this.path,this.traveled,this._laneLimit());const _=this._stageHeat(),m=(1+this.traveled/900)*_;this.entities.laneLimit=this._laneLimit(),this.entities.coinValue=s_(this.campaignIndex),this.entities.spawnAhead(this.path,this.traveled),this.state==="playing"&&this._runStage(),this.state==="playing"&&this._maybeBoardTeach(),this.state==="playing"&&this._watchBossPhase(),this.entities.recycleBehind(this.traveled,this.holdY),this.entities.update(t,this.path,this.traveled,this.ship.position,this.offset,m,this.holdY,v_(this.loadout),this.camera),this.audio.setIntensity(this.stage.intensity(this.traveled,this.entities.hunterCount(),r>0,!!this.entities.boss?.alive||this.entities.enemies.some(v=>v.alive&&v.elite))),this._updateTraces(d,t);const p=[{pos:this.shipLights[0].getWorldPosition(new P),color:new W("#5ce1ff"),intensity:12+f*8},{pos:this.shipLights[1].getWorldPosition(new P),color:new W("#5ce1ff"),intensity:12+f*8},{pos:this.world.sun.position,color:new W("#ffe29a"),intensity:22}];this.world.setLights(this.entities.nearestLights(this.ship.position,p)),this.hurt=Math.max(0,this.hurt-t*1.8),this.invuln=Math.max(0,this.invuln-t);let w=0;for(const v of this.entities.gates)v.burst>0&&(w=Math.max(w,v.pulse||0));this.gateFx=w,this.comboTimer-=t,this.comboTimer<=0&&(this.combo>=2&&this._comboBreak(),this.combo=1);for(const v of Object.keys(this.gunCd))this.gunCd[v]=Math.max(0,this.gunCd[v]-t);if(this.state==="playing"){if(this.input.firing||this.input.keys.has("Space")||i.fire){const k=eh(this.loadout,this.clock.elapsedTime),$=this.traveled+this.holdY+6.2;let H=!1;for(const et of["titan","nova","mine","missile","primary"]){const rt=k[et];if(!rt.shots.length||this.gunCd[et]>0)continue;let tt=!1;for(const Dt of rt.shots)this.entities.fireRail(this.path,$,this.offset.x+Dt.x,1,Dt)&&(tt=!0);tt&&(this.gunCd[et]=rt.cd,this._voiceGun(rt.shots,et,{ownHands:!H,quiet:H}),H=!0)}}const x=this.entities.collectOrbs(this.ship.position,2.2);for(const k of x)this.score+=k.value,this.audio.collect(),this.health=Math.min(1,this.health+.05);const L=this.entities.collectMotes(this.ship.position,2.4),O=L.filter(k=>k.kind!=="coin"),B=L.filter(k=>k.kind==="coin");if(O.length&&this._gainMotes(O.length),B.length){this._gainGold(B.reduce((k,$)=>k+($.value||this.entities.coinValue||5),0),B.length);for(const k of B)this._spawnGoldPip(k.mesh?.position)}const X=this.entities.collectGates(this.ship.position);for(const k of X)if(k.blocked){if(this.invuln<=0){if(this._damage(.34))return;this.toast("SHIELD LOCK")}}else this._combatScore(500),this.boost=1,this.audio.gate(),this.toast("GATE BREAK");const Y=this.entities.bulletHits();for(const k of Y){if(k.type==="ping"){this.entities.spawnImpact(k.pos,k.color||10156031),this._punch(.018,.35),k.chip&&this.audio.chip();continue}const $=k.type==="boss"||k.type==="midboss";if(this.entities.explode(k.pos,k.type==="blocker"?16751162:$?16765286:6087167),this.entities.spawnImpact(k.pos,$?16769690:10156031),this.audio.explosion($),this._punch($?.07:.038,$?1.4:.7),k.type==="enemy"||k.type==="midboss"){if(this.kills+=1,this._combatScore(k.type==="midboss"?1400:220),this.boost=Math.min(1,this.boost+.18),this._dropLoot(k),k.type==="midboss"){if(this._noteMidKill(k),this._isLevelBossKill(k)){this._beginBossClear(k.role,k.pos);return}this.toast(this._bossToast(k.role))}}else if(k.type==="blocker")this._combatScore(160),this._dropLoot(k);else if(k.type==="unlock")this._combatScore(220),this.audio.gate(),this.toast("LOCK SHATTERED"),this._dropLoot(k);else if(k.type==="boss"){this.kills+=1,this._combatScore(3200),this._dropLoot(k),this._beginBossClear("finale",k.pos);return}}for(const k of this.entities.nearMisses(this.ship.position))this.nearMisses+=1,this._combatScore(90);if(this.invuln<=0){const k=this.world.hitTest(this.ship.position,1.2),$=this.entities.collideEnemies(this.ship.position,1.45),H=this.entities.collideBlockers(this.ship.position,1.4),et=this.entities.shotsHitPlayer(this.ship.position,1.35);if(H.length){for(const rt of H)rt.alive=!1,rt.mesh.visible=!1,this.entities.explode(rt.mesh.position.clone(),16751162);if(this.audio.explosion(),this._punch(.05,1.1),this._damage(.42))return}else if($.length){let rt=.3;for(const tt of $)if(tt.elite||tt.role==="finale"){if(tt.hp=(tt.hp||8)-6,this.entities.spawnImpact(tt.mesh.position.clone(),16765286),rt=.38,tt.hp<=0&&tt.mesh&&(tt.alive=!1,tt.mesh.visible=!1,this.entities.explode(tt.mesh.position.clone(),16765286),this.kills+=1,this._dropLoot({drop:tt.drop??4,pathDist:tt.pathDist,laneX:tt.offset?.x??this.offset.x,bombDrop:tt.bombDrop??0,type:tt.role==="finale"?"boss":"midboss",role:tt.role}),this._noteMidKill({type:tt.role==="finale"?"boss":"midboss",role:tt.role}),this._isLevelBossKill({type:tt.role==="finale"?"boss":"midboss",role:tt.role}))){this._beginBossClear(tt.role,tt.mesh.position);return}}else tt.hp!==void 0&&tt.mesh&&(tt.alive=!1,tt.mesh.visible=!1,this.entities.explode(tt.mesh.position.clone(),16720984),this.kills+=1,this._dropLoot({drop:tt.drop??1,pathDist:tt.pathDist,laneX:tt.offset?.x??this.offset.x}));if(this.audio.explosion(),this._punch(.045,.9),this._damage(rt))return}else if(et){if(this._damage(.16))return}else if(k&&this._damage(.12))return}}this.fx.uniforms.uTime.value=this.clock.elapsedTime,this.fx.uniforms.uBoost.value=f,this.fx.uniforms.uHurt.value=this.hurt,this.fx.uniforms.uGate.value=this.gateFx;const S=this.world.sun.position.clone().project(this.camera);this.fx.uniforms.uSunPos.value.set(S.x*.5+.5,S.y*.5+.5);const I=(S.z<1&&S.x>-1.2&&S.x<1.2&&S.y>-1.2&&S.y<1.2?.85:0)*(this.setup?.flare??1);this.fx.uniforms.uFlare.value=mi(this.fx.uniforms.uFlare.value,I,1-Math.exp(-t*8)),this.fx.uniforms.uCockpit.value=0,this.fx.uniforms.uKick.value=this.kickAmt*(this.setup?.shake??1),this._riftBloom=Math.max(0,this._riftBloom-t);const E=(.48+this.gateFx*.28+this._riftBloom*.5)*(this.setup?.bloom??1),y=.42,A=.5+this.gateFx*.12;this.bloom.strength=mi(this.bloom.strength,E,1-Math.exp(-t*6)),this.bloom.threshold=mi(this.bloom.threshold,y,1-Math.exp(-t*6)),this.bloom.radius=mi(this.bloom.radius,A,1-Math.exp(-t*6)),this._syncHud()}_dropLoot(t){const e=t?.drop??0,i=t.pathDist??this.traveled+this.holdY+6,n=t.laneX??this.offset.x;e>0&&this.entities.spawnMote(this.path,i,n,e),t?.bombDrop&&this._gainBomb(t.bombDrop);const r=t?.role;let o=0;t?.type==="boss"||r==="finale"?o=5:t?.type==="midboss"||t?.elite?o=3:(r==="heavy"||r==="slag"||r==="chime"||r==="prism"||r==="wisp"||Math.random()<.16)&&(o=1),o&&this.entities.spawnCoins(this.path,i,n,o,{grace:.12})}_applyLoadout(){this.loadout=ic(this.hangar?.levels||{spark:1},this.runBonus),this.step=Ae.reduce((t,e)=>t+(this.runBonus[e]|0),0),this.rank=d_(this.loadout),this.maxStep=Math.max(this.maxStep||0,this.rank),Ca(this.shipCraft,this.loadout)}_gainGold(t,e=1){t<=0||(this.hangar=mo(this.hangar,t),this.audio.coin(),this._teach("gold","GOLD BUYS BAYS IN DRYDOCK"))}_gainMotes(t){if(t<=0)return;const e=!this._hinted.has("mote");this._teach("mote","MOTES CHARGE OWNED BAYS"),this.audio.mote(t>1);const i=go(this.hangar.levels,this.runBonus);if(i.cap<=0||i.used>=i.cap){this._combatScore(36*t);return}this.charge+=t;const n=m_(this.hangar.levels,this.runBonus,t);this.runBonus=n.runBonus,this._applyLoadout(),n.toast&&!e&&(this.audio.powerup(),this.toast(n.toast))}_shedResonance(){const t=go(this.hangar.levels,this.runBonus).used;if(t<=0&&this.charge<=0)return;const e=Math.min(6,2+Math.floor(t/14));this.runBonus=g_(this.runBonus,e),this.charge=0,this._applyLoadout(),this.entities.spawnMote(this.path,this.traveled+this.holdY+12,this.offset.x,Math.min(4,e),{grace:.45,spread:7.5})}_updateTraces(t,e){const i=this.loadout?.drone||0,n=this.state==="playing"?Math.min(this.traces.length,i>=1?i>=5?4:i>=3?3:2:0):0,r=this.clock.elapsedTime;for(let o=0;o<this.traces.length;o++){const a=this.traces[o];if(a.visible=o<n,o>=n)continue;const l=o%2===0?-1:1,h=4.4+Math.floor(o/2)*1.6+Math.sin(r*3.2+o)*.35,u=.4+Math.cos(r*2.4+o*1.7)*.2;a.position.copy(this.ship.position).addScaledVector(t.binormal,l*h).addScaledVector(t.normal,u);const d=(this.loadout.titan||0)>=1;a.material.color.set(d?16765286:16737512),a.scale.setScalar(.85+i*.06+Math.sin(r*6+o)*.08)}if(this.shipCore){const o=(this.loadout.titan||0)>0?16765286:(this.loadout.seeker||0)>0?16747082:(this.loadout.needle||0)>0?10217471:13172726;this.shipCore.material.color.set(o)}}_combatScore(t){const e=this.combo;this.score+=Math.floor(t*this.combo),this.combo=Math.min(8,this.combo+.35),this.maxCombo=Math.max(this.maxCombo,this.combo),this.comboTimer=3.2,this._comboCross(e,this.combo)}_comboCross(t,e){const i=this.ui.combo;for(const n of[2,4,8])t<n&&e>=n&&(i&&(i.classList.remove("combo-stab","combo-drop","combo-mark-2","combo-mark-4","combo-mark-8"),i.offsetWidth,i.classList.add("combo-stab",`combo-mark-${n}`)),this.audio.comboStab(n))}_comboBreak(){const t=this.ui.combo;t&&(t.classList.remove("combo-stab","combo-hot","combo-max","combo-drop","combo-mark-2","combo-mark-4","combo-mark-8"),t.offsetWidth,t.classList.add("combo-drop")),this.audio.comboDrop()}_hudPoint(t){return this.camera.updateMatrixWorld(),this._proj.copy(t).project(this.camera),{x:(this._proj.x*.5+.5)*window.innerWidth,y:(-this._proj.y*.5+.5)*window.innerHeight}}_spawnGoldPip(t){const e=this.ui.gold;if(!e)return;const i=t?this._hudPoint(t):{x:window.innerWidth*.5,y:window.innerHeight*.55},n=e.getBoundingClientRect(),r=document.createElement("div");r.className="gold-pip",r.style.left=`${i.x}px`,r.style.top=`${i.y}px`,document.body.appendChild(r),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.style.transform=`translate(${n.left+n.width*.5-i.x}px, ${n.top+n.height*.5-i.y}px) scale(0.35)`,r.style.opacity="0.15"})}),setTimeout(()=>{e.classList.remove("gold-catch"),e.offsetWidth,e.classList.add("gold-catch"),r.remove()},560)}_score(t){this._combatScore(t)}_noteMidKill(t){t?.type==="midboss"&&(this._isLevelBossKill(t)||(this._midsThisLevel=(this._midsThisLevel||0)+1))}_damage(t){if(this._pendingClear||this._bossSlow>0)return!1;this.health-=t,this.hurt=1,this.invuln=.7,this.combo>=2&&this._comboBreak(),this.combo=1,this.audio.hit(),this._punch(.04,1.15);const e=this.ui.health,i=this.ui.hudVitals;return e&&(e.classList.remove("hull-hit"),e.offsetWidth,e.classList.add("hull-hit")),i&&(i.classList.remove("hull-hit"),i.offsetWidth,i.classList.add("hull-hit")),this._shedResonance(),this.health<=0?(this.die(),!0):!1}_syncHud(){if(this._syncBossMeter(),this.state!=="playing")return;this.ui.score.textContent=this.score.toLocaleString(),this.ui.combo.textContent=`×${this.combo.toFixed(1)}`,this.ui.combo.classList.toggle("combo-quiet",this.combo<=1.05),this.ui.combo.classList.toggle("combo-hot",this.combo>=2),this.ui.combo.classList.toggle("combo-max",this.combo>=8),this._lastCombo=this.combo;const t=this._currentLevel()?.lv.id||"1-1";if(this.ui.depth.textContent=`${t} · ${(this.traveled/10).toFixed(0)} km`,this.ui.health.style.transform=`scaleX(${He(this.health,0,1)})`,this.ui.boost.style.transform=`scaleX(${He(this.boost,0,1)})`,this.ui.gold&&(this.ui.gold.textContent=String(this.hangar?.gold||0)),this.ui.riftName&&(this.ui.riftName.textContent=Tg(this.loadout)),this.ui.riftFill){const e=go(this.hangar.levels,this.runBonus),i=e.ratio;this.ui.riftFill.style.transform=`scaleX(${Math.max(.03,i)})`,this.ui.riftWrap?.classList.toggle("rift-max",e.cap>0&&e.used>=e.cap),this.ui.riftWrap?.classList.toggle("rift-wings",(this.loadout.seeker||0)>0&&(this.loadout.titan||0)===0),this.ui.riftWrap?.classList.toggle("rift-titan",(this.loadout.titan||0)>0)}this._syncBombs(),this._syncLives()}_syncBossMeter(){const t=this.ui?.bossMeter;if(!t)return;const e=this.state==="playing"?this.entities.activeBoss():null;if(!(e&&(e.levelBoss||e.superBoss||e.role==="finale"))){if(this._pendingClear||this._bossSlow>0)return;t.classList.remove("show","phase-2","phase-3","phase-sting","arrive"),this.ui.bossTitle?.classList.remove("show","fall","settled");return}t.classList.add("show"),t.classList.toggle("phase-2",e.visPhase===2),t.classList.toggle("phase-3",(e.visPhase||1)>=3),this.ui.bossName&&(this.ui.bossName.textContent=this.ui.bossTitle?.classList.contains("show")?"":this._bossName(e.role));const n=He(e.hp/Math.max(1,e.maxHp||e.hp),0,1);this.ui.bossFill&&(this.ui.bossFill.style.transform=`scaleX(${Math.max(.02,n)})`)}_render(){this.composer.render()}_axisHeld(t,e){let i=0;for(const n of t)this.input.keys.has(n)&&(i-=1);for(const n of e)this.input.keys.has(n)&&(i+=1);return Math.max(-1,Math.min(1,i))}_applySlide(t,e,i){let l=t,c=e;const h=Math.hypot(l,c);h>1&&(l/=h,c/=h),this.slide.x=this._approachVel(this.slide.x,l*92,820,420,1280,i),this.slide.y=this._approachVel(this.slide.y,c*92,820,420,1280,i)}_approachVel(t,e,i,n,r,o){const a=t>.5&&e<0||t<-.5&&e>0,l=e===0?n:a?r:i;let c=t;return c<e?c=Math.min(e,c+l*o):c>e&&(c=Math.max(e,c-l*o)),e!==0&&Math.abs(c)<Math.abs(e)*.22&&(c=e*.22),c}_playfieldHalf(){const e=38*Math.PI/180;return 168*Math.tan(e/2)}_depthLimit(){const t=this._playfieldHalf(),e=22,i=5;return{min:e-t+i,max:e+t-i}}_laneLimit(){const t=this._playfieldHalf()*this.camera.aspect;return Math.max(22,t-5)}_stageHeat(){return n_(this.campaignIndex||0,this.levelIndex||0)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e),this.bloom.setSize(t,e),this.fx.uniforms.uResolution.value.set(t,e),this.shipyard?.resize(t,e),this._syncShipyardView()}_syncShipyardView(){if(this.state!=="hangar"||!this.shipyard)return;window.matchMedia("(max-width: 900px)").matches||this._setHangarShopMin(!1);const t=this.ui.hangar?.querySelector(".hangar-stage"),e=this.ui.hangar?.querySelector(".hangar-panel");this.shipyard.resize(window.innerWidth,window.innerHeight,t?.getBoundingClientRect()??null,e?.getBoundingClientRect()??null)}_runStage(){const t=this._currentLevel(),e=t?.lv.chapters||[];for(const i of e)if(this.traveled>=i.at&&this._chapterAt<i.at){this._chapterAt=i.at;const n=t?`${t.lv.id} — ${t.lv.name}`:"",r=i.at<=90&&(i.toast===n||/^WAVE 0?1\b/.test(i.toast||"")),o=/^(LEVEL BOSS|SUPER BOSS|FINALE|BOSS)\b/.test(i.toast||"");!r&&!o&&this.toast(i.toast),this._setChapter(i.world||t?.lv.world,i.sting)}for(;this.stage.peek()&&this.stage.peek().at<=this.traveled;){const i=this.stage.consume();if(i.kind==="squad")this.entities.spawnSquad(this.path,this.traveled,i.form,i.role,i.n,i.ahead,this._stageHeat());else if(i.kind==="gate")this.entities.spawnGateAt(this.path,this.traveled,72,this._stageHeat());else if(i.kind==="orbs")this.entities.spawnOrbsAt(this.path,this.traveled,3),this.entities.spawnCoins(this.path,this.traveled+48,0,2);else if(i.kind==="blockers")this.entities.spawnBlockersAt(this.path,this.traveled,i.n||2,80,this._stageHeat());else if(i.kind==="breath")this.audio.hold("breath");else if(i.kind==="hold")this._railHold=1.35,this.audio.hold("hold");else if(i.kind==="midboss")this.entities.spawnNamed(this.path,this.traveled,i.id,96,this.step,this.loadout,this._stageHeat()),this.stage.finaleAlive=!1;else if(i.kind==="boss"||i.kind==="finale"){const n=i.id||"finale",r=this._bossFlags();i.kind==="finale"||n==="finale"||n==="sentinel"?this.entities.spawnFinale(this.path,this.traveled,96,this.step,this.loadout,this._stageHeat()):this.entities.spawnNamed(this.path,this.traveled,n,96,this.step,this.loadout,this._stageHeat(),r),this.stage.finaleAlive=!0,this._levelBossSpawned=!0,this._announceBoss(n==="sentinel"?"finale":n,r.superBoss||i.kind==="finale")}}this._ensureLevelBoss(),this._maybeClearLevel()}_ensureLevelBoss(){const t=this._currentLevel();if(!t||this.state!=="playing")return;const e=t.lv.boss;if(!e)return;const i=t.lv.script.find(n=>n.kind==="finale"||n.kind==="boss")?.at??t.lv.exitAt;this.traveled<i||this.entities.boss?.alive||this.entities.enemies.some(n=>n.alive&&n.elite&&(n.role===e||e==="finale"&&n.role==="finale"))||this._levelBossSpawned||(this._levelBossSpawned=!0,e==="finale"?this.entities.spawnFinale(this.path,this.traveled,96,this.step,this.loadout,this._stageHeat()):this.entities.spawnNamed(this.path,this.traveled,e,96,this.step,this.loadout,this._stageHeat(),this._bossFlags()),this.stage.finaleAlive=!0,this._announceBoss(e,t.lv.banner==="super"||e==="finale"))}_maybeClearLevel(){if(this._pendingClear||this._bossSlow>0)return;const t=this._currentLevel();t&&(this.stage.peek()||this.traveled<t.lv.exitAt||t.lv.boss&&(this.entities.boss?.alive||this.entities.enemies.some(e=>e.alive&&e.elite&&e.role===t.lv.boss)||!this._levelBossSpawned&&this.traveled<t.lv.exitAt+80)||this._clearLevel())}_audioChapter(t){if(hi[this.campaignIndex]?.id==="heart"){const i=this._currentLevel(),n=i?.lv.script?.find(r=>r.kind==="finale")?.at;return i?.lv.banner==="finale"&&n!=null&&this.traveled>=n?"finale":"heart"}return t==="default"?"enter":t||"enter"}_setChapter(t,e){t&&(this._chapterId!==t&&(this._chapterId=t,this.world.setChapter(t)),this.audio.setChapter(this._audioChapter(t)),e&&this.audio.sting(e))}_syncLives({lost:t=!1,force:e=!1}={}){const i=this.ui?.lives;if(i&&!(!e&&!t&&this._livesPainted===this.lives&&i.childElementCount===3)){this._livesPainted=this.lives,i.innerHTML="";for(let n=0;n<3;n++){const r=document.createElement("div"),o=n<this.lives;r.className="life-pip"+(o?" lit":"")+(t&&n===this.lives?" life-lost":""),i.appendChild(r)}}}_bossName(t){return{queen:"WEAVER QUEEN",coil:"TITAN COIL",warden:"WARDEN",empress:"WEAVER EMPRESS",finale:"SENTINEL",sentinel:"SENTINEL"}[t]||"HUNTER"}_announceBoss(t,e=!1){const i=this._bossName(t);this.ui.bossName&&(this.ui.bossName.textContent=i),this.ui.bossTitle&&(this.ui.bossTitle.textContent=i,this.ui.bossTitle.classList.remove("fall"),this.ui.bossTitle.classList.add("show")),this.ui.bossMeter?.classList.add("show","arrive"),this._bossHold=e?1.15:.85,this._bossPhaseSeen=1,this.audio.sting("boss")}_beginBossClear(t,e=null){const i=this._currentLevel()?.lv.banner==="super"||t==="finale";this._bossSlow=i?5.4:4.7,this._pendingClear=!0,this.entities.pullLoot(!0),this._riftBloom=1.15,this._showRiftBloom(e),this.ui.bossTitle&&(this.ui.bossTitle.textContent=this._bossName(t),this.ui.bossTitle.classList.add("show"),requestAnimationFrame(()=>this.ui.bossTitle?.classList.add("fall"))),this.audio.sting("fall")}_showRiftBloom(t){const e=this.ui.riftBloom;if(!e)return;const i=t||this.entities.activeBoss()?.mesh?.position||this.ship?.position,n=i?this._hudPoint(i):{x:window.innerWidth*.5,y:window.innerHeight*.42},r=this.ui.hud?.getBoundingClientRect(),o=r?`${(n.x-r.left)/Math.max(1,r.width)*100}%`:"50%",a=r?`${(n.y-r.top)/Math.max(1,r.height)*100}%`:"55%";e.style.setProperty("--bx",o),e.style.setProperty("--by",a),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}_collectLooseGold(){let t=0;for(const e of this.entities.pickups)!e.alive||e.kind!=="coin"||(t+=e.value||this.entities.coinValue||5,e.alive=!1,e.mesh.visible=!1,e.mesh.position&&this._spawnGoldPip(e.mesh.position));t&&(this.hangar=mo(this.hangar,t))}_watchBossPhase(){const t=this.entities.activeBoss();if(!t||!(t.levelBoss||t.superBoss||t.role==="finale")){this._bossPhaseSeen=1,this.ui.bossMeter?.classList.remove("phase-sting","arrive");return}t.visPhase!==this._bossPhaseSeen&&(this._bossPhaseSeen=t.visPhase,this.ui.bossMeter?.classList.add("phase-sting"),this.audio.sting("chapter"),clearTimeout(this._phaseStingTimer),this._phaseStingTimer=setTimeout(()=>this.ui.bossMeter?.classList.remove("phase-sting"),420))}_bossFlags(){return{levelBoss:!0,superBoss:this._currentLevel()?.lv?.banner==="super"}}_isLevelBossKill(t){const e=this._currentLevel()?.lv.boss;return e?t.type==="boss"||t.role==="finale"?e==="finale":t.role===e:!1}_bossToast(t){return t==="warden"?"WARDEN DOWN":t==="coil"?"COIL DOWN":t==="empress"?"EMPRESS DOWN":t==="finale"?"SENTINEL DOWN":"QUEEN DOWN"}_voiceGun(t,e,{ownHands:i=!0,quiet:n=!1}={}){const r=[...new Set(t.map(u=>u.kind).filter(Boolean))],o=r.find(u=>u!=="spark")||r[0]||e,a=n?.38:1;if(this.audio.shotFor(o,{gain:a}),r.includes("spark")&&o!=="spark"&&this.audio.shotFor("spark",{gain:n?.2:.35}),!i)return;const l=t.find(u=>u.kind===o)?.kick??.2;this.kickAmt=Math.max(this.kickAmt,l);const c={titan:[.08,.45,1.35],needle:[.04,.06,.9],mine:[.05,-.62,.18],nova:[.72,.22,.28],seeker:[.22,.16,.52],spark:[.05,.08,.26],wing:[.58,.1,.32],shear:[.62,.12,.3]}[o]||[.1,.1,.35];this.kick.set(c[0],c[1],c[2]);const h={titan:[16765286,1.45,1.8,.7,1.1],needle:[10217471,.72,.45,.55,2.4],nova:[16737512,1.15,1.2,1.1,1.6],mine:[6087167,.55,1.1,1.4,.9],seeker:[16747082,.7,.8,1.1,1.4],spark:[13172726,1,.7,1,1.8]}[o]||[10217471,.85,.75,1,1.7];this.muzzleFlash=h[1],this._muzzleFat=h[2],this._muzzleThin=h[3],this._muzzleLong=h[4],this.muzzle?.material?.color&&this.muzzle.material.color.setHex(h[0]),this.muzzleSpike?.material?.color&&this.muzzleSpike.material.color.setHex(h[0])}_punch(t,e){this.hitStop=Math.max(this.hitStop,Math.min(.045,t)),this.kickAmt=Math.max(this.kickAmt,e),this.kick.set((Math.random()-.5)*1.6,(Math.random()-.5)*1.2,0)}_tryBomb(){if(this.state!=="playing"||this.bombCd>0||this.bombs<=0)return;this.bombs-=1,this.bombsUsed+=1,this.bombCd=.85,this.invuln=Math.max(this.invuln,.55),this.audio.bombBoom();const t=this.entities.bombSweep(this.traveled,this.holdY,16),e=this.ui.bombFlash;if(e&&this.ship){const i=this._hudPoint(this.ship.position),n=this.ui.hud?.getBoundingClientRect(),r=n?`${(i.x-n.left)/Math.max(1,n.width)*100}%`:"50%",o=n?`${(i.y-n.top)/Math.max(1,n.height)*100}%`:"62%";e.style.setProperty("--bx",r),e.style.setProperty("--by",o),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}this.ui.bombBtn?.classList.remove("bomb-slam"),this.ui.bombBtn?.offsetWidth,this.ui.bombBtn?.classList.add("bomb-slam"),this._punch(.08,1.6);for(const i of t.killed){if(this.kills+=1,this._combatScore(i.type==="boss"?3200:i.type==="midboss"?1400:180),this._dropLoot(i),this._noteMidKill(i),i.type==="boss"){this._beginBossClear("finale",i.pos);return}if(i.type==="midboss"&&this._isLevelBossKill(i)){this._beginBossClear(i.role,i.pos);return}}this._syncBombs()}_gainBomb(t=1){const e=Math.min(this.bombMax,this.bombs+t);e!==this.bombs&&(this.bombs=e,this._syncBombs())}_syncBombs(){const t=this.ui?.bombs;if(t){t.innerHTML="";for(let e=0;e<this.bombMax;e++){const i=document.createElement("div");i.className="bomb-pip"+(e<this.bombs?" lit":""),t.appendChild(i)}}}_renderScoreboard(t,e,i){if(t){if(!e||!e.length){t.classList.add("empty"),t.textContent="NO HI-SCORES YET";return}t.classList.remove("empty"),t.innerHTML=e.map((n,r)=>{const o=i!=null&&n.score===i?" me":"",a=n.victory?"CLR":"KIA";return`<div class="row${o}"><span>${r+1}</span><span>${n.rank} · ${a}</span><span>${n.score}</span><span>${n.depth} km</span></div>`}).join("")}}_padState(){const t=typeof navigator<"u"?navigator.getGamepads?.()||[]:[];let e=null;for(const l of t)if(l){e=l;break}if(!e)return{x:0,y:0,fire:!1,bomb:!1,boost:!1,start:!1};const i=l=>Math.abs(l)<.18?0:l,n=i(e.axes[0]||0),r=-i(e.axes[1]||0),o=(e.buttons[15]?.pressed?1:0)-(e.buttons[14]?.pressed?1:0),a=(e.buttons[12]?.pressed?1:0)-(e.buttons[13]?.pressed?1:0);return{x:Math.max(-1,Math.min(1,n+o)),y:Math.max(-1,Math.min(1,r+a)),fire:!!(e.buttons[0]?.pressed||e.buttons[7]?.pressed),bomb:!!e.buttons[1]?.pressed,boost:!!(e.buttons[4]?.pressed||e.buttons[6]?.pressed||e.buttons[5]?.pressed),start:!!(e.buttons[9]?.pressed||e.buttons[8]?.pressed)}}_pollPad(){const t=this._padState(),e=this._padPrev;t.start&&!e.start&&(this.state==="playing"?this.pause():this.state==="paused"?this.resume():this.state==="setup"?this._closeSetup():this.state==="hangar"?this._hangarDone():this.state==="title"?this._hasRun?this.resumeFromMenu():this.startPlay():this.state==="map"?this._deployLevel():this.state==="continue"?this._acceptContinue():this.state==="dead"&&this.startPlay()),t.bomb&&!e.bomb&&(this.state==="continue"?this._declineContinue():this.state==="hangar"?this._hangarDone():this.state==="map"?this.goToMenu({resumeable:this._runLive}):this._tryBomb()),t.fire&&this.state==="hangar"&&!e.fire&&this._hangarBuy(),this.state==="hangar"&&(t.y>.55&&e.y<=.55&&this._hangarMove(-1),t.y<-.55&&e.y>=-.55&&this._hangarMove(1)),t.fire&&this.state==="title"&&!this._hasRun&&!e.fire&&this.startPlay(),t.fire&&this.state==="map"&&!e.fire&&this._deployLevel(),t.fire&&this.state==="continue"&&!e.fire&&this._acceptContinue(),this._padPrev={fire:t.fire,bomb:t.bomb,start:t.start,y:t.y}}}const Q_=document.getElementById("c"),tv=new J_(Q_);tv.start();
