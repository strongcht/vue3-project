define(["exports","./Matrix2-f0fc6cd3","./RuntimeError-8f3d96ee","./when-229515d6","./WebGLConstants-f63312fc","./Transforms-4a1d2c0e"],(function(t,e,n,a,r,i){"use strict";var o=Object.freeze({NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3});const s={POINTS:r.WebGLConstants.POINTS,LINES:r.WebGLConstants.LINES,LINE_LOOP:r.WebGLConstants.LINE_LOOP,LINE_STRIP:r.WebGLConstants.LINE_STRIP,TRIANGLES:r.WebGLConstants.TRIANGLES,TRIANGLE_STRIP:r.WebGLConstants.TRIANGLE_STRIP,TRIANGLE_FAN:r.WebGLConstants.TRIANGLE_FAN,validate:function(t){return t===s.POINTS||t===s.LINES||t===s.LINE_LOOP||t===s.LINE_STRIP||t===s.TRIANGLES||t===s.TRIANGLE_STRIP||t===s.TRIANGLE_FAN}};var u=Object.freeze(s);function I(t){t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT),this.attributes=t.attributes,this.indices=t.indices,this.primitiveType=a.defaultValue(t.primitiveType,u.TRIANGLES),this.boundingSphere=t.boundingSphere,this.geometryType=a.defaultValue(t.geometryType,o.NONE),this.boundingSphereCV=t.boundingSphereCV,this.offsetAttribute=t.offsetAttribute}I.computeNumberOfVertices=function(t){let e=-1;for(const n in t.attributes)if(t.attributes.hasOwnProperty(n)&&a.defined(t.attributes[n])&&a.defined(t.attributes[n].values)){const a=t.attributes[n];e=a.values.length/a.componentsPerAttribute}return e};const N=new e.Cartographic,c=new e.Cartesian3,l=new e.Matrix4,T=[new e.Cartographic,new e.Cartographic,new e.Cartographic],f=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],m=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],p=new e.Cartesian3,y=new i.Quaternion,E=new e.Matrix4,L=new e.Matrix2;I._textureCoordinateRotationPoints=function(t,n,a,r){let o;const s=e.Rectangle.center(r,N),u=e.Cartographic.toCartesian(s,a,c),I=i.Transforms.eastNorthUpToFixedFrame(u,a,l),h=e.Matrix4.inverse(I,l),C=f,b=T;b[0].longitude=r.west,b[0].latitude=r.south,b[1].longitude=r.west,b[1].latitude=r.north,b[2].longitude=r.east,b[2].latitude=r.south;let d=p;for(o=0;o<3;o++)e.Cartographic.toCartesian(b[o],a,d),d=e.Matrix4.multiplyByPointAsVector(h,d,d),C[o].x=d.x,C[o].y=d.y;const x=i.Quaternion.fromAxisAngle(e.Cartesian3.UNIT_Z,-n,y),A=e.Matrix3.fromQuaternion(x,E),P=t.length;let S=Number.POSITIVE_INFINITY,G=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY,R=Number.NEGATIVE_INFINITY;for(o=0;o<P;o++)d=e.Matrix4.multiplyByPointAsVector(h,t[o],d),d=e.Matrix3.multiplyByVector(A,d,d),S=Math.min(S,d.x),G=Math.min(G,d.y),w=Math.max(w,d.x),R=Math.max(R,d.y);const O=e.Matrix2.fromRotation(n,L),_=m;_[0].x=S,_[0].y=G,_[1].x=S,_[1].y=R,_[2].x=w,_[2].y=G;const g=C[0],V=C[2].x-g.x,M=C[1].y-g.y;for(o=0;o<3;o++){const t=_[o];e.Matrix2.multiplyByVector(O,t,t),t.x=(t.x-g.x)/V,t.y=(t.y-g.y)/M}const v=_[0],F=_[1],W=_[2],Y=new Array(6);return e.Cartesian2.pack(v,Y),e.Cartesian2.pack(F,Y,2),e.Cartesian2.pack(W,Y,4),Y},t.Geometry=I,t.GeometryAttribute=function(t){t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT),this.componentDatatype=t.componentDatatype,this.componentsPerAttribute=t.componentsPerAttribute,this.normalize=a.defaultValue(t.normalize,!1),this.values=t.values},t.GeometryType=o,t.PrimitiveType=u}));
