define(["exports","./GeometryOffsetAttribute-369d5efa","./Transforms-4a1d2c0e","./Matrix2-f0fc6cd3","./ComponentDatatype-5f63ec93","./CylinderGeometryLibrary-6799e174","./when-229515d6","./RuntimeError-8f3d96ee","./GeometryAttribute-4b6dfc85","./GeometryAttributes-b253752a","./IndexDatatype-c2b69fc2","./VertexFormat-af764a6f"],(function(t,e,n,a,o,r,i,s,m,u,c,l){"use strict";const f=new a.Cartesian2,d=new a.Cartesian3,p=new a.Cartesian3,y=new a.Cartesian3,b=new a.Cartesian3;function A(t){const e=(t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT)).length,n=t.topRadius,a=t.bottomRadius,o=i.defaultValue(t.vertexFormat,l.VertexFormat.DEFAULT),r=i.defaultValue(t.slices,128);this._length=e,this._topRadius=n,this._bottomRadius=a,this._vertexFormat=l.VertexFormat.clone(o),this._slices=r,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}A.packedLength=l.VertexFormat.packedLength+5,A.pack=function(t,e,n){return n=i.defaultValue(n,0),l.VertexFormat.pack(t._vertexFormat,e,n),n+=l.VertexFormat.packedLength,e[n++]=t._length,e[n++]=t._topRadius,e[n++]=t._bottomRadius,e[n++]=t._slices,e[n]=i.defaultValue(t._offsetAttribute,-1),e};const x=new l.VertexFormat,g={vertexFormat:x,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};let _;A.unpack=function(t,e,n){e=i.defaultValue(e,0);const a=l.VertexFormat.unpack(t,e,x);e+=l.VertexFormat.packedLength;const o=t[e++],r=t[e++],s=t[e++],m=t[e++],u=t[e];return i.defined(n)?(n._vertexFormat=l.VertexFormat.clone(a,n._vertexFormat),n._length=o,n._topRadius=r,n._bottomRadius=s,n._slices=m,n._offsetAttribute=-1===u?void 0:u,n):(g.length=o,g.topRadius=r,g.bottomRadius=s,g.slices=m,g.offsetAttribute=-1===u?void 0:u,new A(g))},A.createGeometry=function(t){let s=t._length;const l=t._topRadius,A=t._bottomRadius,x=t._vertexFormat,g=t._slices;if(s<=0||l<0||A<0||0===l&&0===A)return;const _=g+g,h=g+_,F=_+_,v=r.CylinderGeometryLibrary.computePositions(s,l,A,g,!0),C=x.st?new Float32Array(2*F):void 0,w=x.normal?new Float32Array(3*F):void 0,G=x.tangent?new Float32Array(3*F):void 0,R=x.bitangent?new Float32Array(3*F):void 0;let D;const V=x.normal||x.tangent||x.bitangent;if(V){const t=x.tangent||x.bitangent;let e=0,n=0,r=0;const i=Math.atan2(A-l,s),m=d;m.z=Math.sin(i);const u=Math.cos(i);let c=y,f=p;for(D=0;D<g;D++){const i=D/g*o.CesiumMath.TWO_PI,s=u*Math.cos(i),l=u*Math.sin(i);V&&(m.x=s,m.y=l,t&&(c=a.Cartesian3.normalize(a.Cartesian3.cross(a.Cartesian3.UNIT_Z,m,c),c)),x.normal&&(w[e++]=m.x,w[e++]=m.y,w[e++]=m.z,w[e++]=m.x,w[e++]=m.y,w[e++]=m.z),x.tangent&&(G[n++]=c.x,G[n++]=c.y,G[n++]=c.z,G[n++]=c.x,G[n++]=c.y,G[n++]=c.z),x.bitangent&&(f=a.Cartesian3.normalize(a.Cartesian3.cross(m,c,f),f),R[r++]=f.x,R[r++]=f.y,R[r++]=f.z,R[r++]=f.x,R[r++]=f.y,R[r++]=f.z))}for(D=0;D<g;D++)x.normal&&(w[e++]=0,w[e++]=0,w[e++]=-1),x.tangent&&(G[n++]=1,G[n++]=0,G[n++]=0),x.bitangent&&(R[r++]=0,R[r++]=-1,R[r++]=0);for(D=0;D<g;D++)x.normal&&(w[e++]=0,w[e++]=0,w[e++]=1),x.tangent&&(G[n++]=1,G[n++]=0,G[n++]=0),x.bitangent&&(R[r++]=0,R[r++]=1,R[r++]=0)}const T=12*g-12,O=c.IndexDatatype.createTypedArray(F,T);let L=0,P=0;for(D=0;D<g-1;D++)O[L++]=P,O[L++]=P+2,O[L++]=P+3,O[L++]=P,O[L++]=P+3,O[L++]=P+1,P+=2;for(O[L++]=_-2,O[L++]=0,O[L++]=1,O[L++]=_-2,O[L++]=1,O[L++]=_-1,D=1;D<g-1;D++)O[L++]=_+D+1,O[L++]=_+D,O[L++]=_;for(D=1;D<g-1;D++)O[L++]=h,O[L++]=h+D,O[L++]=h+D+1;let E=0;if(x.st){const t=Math.max(l,A);for(D=0;D<F;D++){const e=a.Cartesian3.fromArray(v,3*D,b);C[E++]=(e.x+t)/(2*t),C[E++]=(e.y+t)/(2*t)}}const M=new u.GeometryAttributes;x.position&&(M.position=new m.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:v})),x.normal&&(M.normal=new m.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:w})),x.tangent&&(M.tangent=new m.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),x.bitangent&&(M.bitangent=new m.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})),x.st&&(M.st=new m.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:C})),f.x=.5*s,f.y=Math.max(A,l);const k=new n.BoundingSphere(a.Cartesian3.ZERO,a.Cartesian2.magnitude(f));if(i.defined(t._offsetAttribute)){s=v.length;const n=new Uint8Array(s/3),a=t._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(n,a),M.applyOffset=new m.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new m.Geometry({attributes:M,indices:O,primitiveType:m.PrimitiveType.TRIANGLES,boundingSphere:k,offsetAttribute:t._offsetAttribute})},A.getUnitCylinder=function(){return i.defined(_)||(_=A.createGeometry(new A({topRadius:1,bottomRadius:1,length:1,vertexFormat:l.VertexFormat.POSITION_ONLY}))),_},t.CylinderGeometry=A}));
