define(["exports","./GeometryOffsetAttribute-369d5efa","./Transforms-4a1d2c0e","./Matrix2-f0fc6cd3","./ComponentDatatype-5f63ec93","./when-229515d6","./RuntimeError-8f3d96ee","./GeometryAttribute-4b6dfc85","./GeometryAttributes-b253752a","./IndexDatatype-c2b69fc2","./VertexFormat-af764a6f"],(function(t,e,a,n,i,r,o,s,m,u,c){"use strict";const l=new n.Cartesian3,f=new n.Cartesian3,d=new n.Cartesian3,C=new n.Cartesian3,p=new n.Cartesian3,y=new n.Cartesian3(1,1,1),_=Math.cos,h=Math.sin;function x(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT);const e=r.defaultValue(t.radii,y),a=r.defaultValue(t.innerRadii,e),o=r.defaultValue(t.minimumClock,0),s=r.defaultValue(t.maximumClock,i.CesiumMath.TWO_PI),m=r.defaultValue(t.minimumCone,0),u=r.defaultValue(t.maximumCone,i.CesiumMath.PI),l=Math.round(r.defaultValue(t.stackPartitions,64)),f=Math.round(r.defaultValue(t.slicePartitions,64)),d=r.defaultValue(t.vertexFormat,c.VertexFormat.DEFAULT);this._radii=n.Cartesian3.clone(e),this._innerRadii=n.Cartesian3.clone(a),this._minimumClock=o,this._maximumClock=s,this._minimumCone=m,this._maximumCone=u,this._stackPartitions=l,this._slicePartitions=f,this._vertexFormat=c.VertexFormat.clone(d),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}x.packedLength=2*n.Cartesian3.packedLength+c.VertexFormat.packedLength+7,x.pack=function(t,e,a){return a=r.defaultValue(a,0),n.Cartesian3.pack(t._radii,e,a),a+=n.Cartesian3.packedLength,n.Cartesian3.pack(t._innerRadii,e,a),a+=n.Cartesian3.packedLength,c.VertexFormat.pack(t._vertexFormat,e,a),a+=c.VertexFormat.packedLength,e[a++]=t._minimumClock,e[a++]=t._maximumClock,e[a++]=t._minimumCone,e[a++]=t._maximumCone,e[a++]=t._stackPartitions,e[a++]=t._slicePartitions,e[a]=r.defaultValue(t._offsetAttribute,-1),e};const A=new n.Cartesian3,b=new n.Cartesian3,k=new c.VertexFormat,w={radii:A,innerRadii:b,vertexFormat:k,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};let F;x.unpack=function(t,e,a){e=r.defaultValue(e,0);const i=n.Cartesian3.unpack(t,e,A);e+=n.Cartesian3.packedLength;const o=n.Cartesian3.unpack(t,e,b);e+=n.Cartesian3.packedLength;const s=c.VertexFormat.unpack(t,e,k);e+=c.VertexFormat.packedLength;const m=t[e++],u=t[e++],l=t[e++],f=t[e++],d=t[e++],C=t[e++],p=t[e];return r.defined(a)?(a._radii=n.Cartesian3.clone(i,a._radii),a._innerRadii=n.Cartesian3.clone(o,a._innerRadii),a._vertexFormat=c.VertexFormat.clone(s,a._vertexFormat),a._minimumClock=m,a._maximumClock=u,a._minimumCone=l,a._maximumCone=f,a._stackPartitions=d,a._slicePartitions=C,a._offsetAttribute=-1===p?void 0:p,a):(w.minimumClock=m,w.maximumClock=u,w.minimumCone=l,w.maximumCone=f,w.stackPartitions=d,w.slicePartitions=C,w.offsetAttribute=-1===p?void 0:p,new x(w))},x.createGeometry=function(t){const o=t._radii;if(o.x<=0||o.y<=0||o.z<=0)return;const c=t._innerRadii;if(c.x<=0||c.y<=0||c.z<=0)return;const y=t._minimumClock,x=t._maximumClock,A=t._minimumCone,b=t._maximumCone,k=t._vertexFormat;let w,F,P=t._slicePartitions+1,g=t._stackPartitions+1;P=Math.round(P*Math.abs(x-y)/i.CesiumMath.TWO_PI),g=Math.round(g*Math.abs(b-A)/i.CesiumMath.PI),P<2&&(P=2),g<2&&(g=2);let v=0;const V=[A],M=[y];for(w=0;w<g;w++)V.push(A+w*(b-A)/(g-1));for(V.push(b),F=0;F<P;F++)M.push(y+F*(x-y)/(P-1));M.push(x);const T=V.length,D=M.length;let G=0,L=1;const O=c.x!==o.x||c.y!==o.y||c.z!==o.z;let I=!1,E=!1,z=!1;O&&(L=2,A>0&&(I=!0,G+=P-1),b<Math.PI&&(E=!0,G+=P-1),(x-y)%i.CesiumMath.TWO_PI?(z=!0,G+=2*(g-1)+1):G+=1);const N=D*T*L,R=new Float64Array(3*N),U=e.arrayFill(new Array(N),!1),S=e.arrayFill(new Array(N),!1),B=P*g*L,W=6*(B+G+1-(P+g)*L),Y=u.IndexDatatype.createTypedArray(B,W),J=k.normal?new Float32Array(3*N):void 0,X=k.tangent?new Float32Array(3*N):void 0,Z=k.bitangent?new Float32Array(3*N):void 0,j=k.st?new Float32Array(2*N):void 0,q=new Array(T),H=new Array(T);for(w=0;w<T;w++)q[w]=h(V[w]),H[w]=_(V[w]);const K=new Array(D),Q=new Array(D);for(F=0;F<D;F++)Q[F]=_(M[F]),K[F]=h(M[F]);for(w=0;w<T;w++)for(F=0;F<D;F++)R[v++]=o.x*q[w]*Q[F],R[v++]=o.y*q[w]*K[F],R[v++]=o.z*H[w];let $,tt,et,at,nt=N/2;if(O)for(w=0;w<T;w++)for(F=0;F<D;F++)R[v++]=c.x*q[w]*Q[F],R[v++]=c.y*q[w]*K[F],R[v++]=c.z*H[w],U[nt]=!0,w>0&&w!==T-1&&0!==F&&F!==D-1&&(S[nt]=!0),nt++;for(v=0,w=1;w<T-2;w++)for($=w*D,tt=(w+1)*D,F=1;F<D-2;F++)Y[v++]=tt+F,Y[v++]=tt+F+1,Y[v++]=$+F+1,Y[v++]=tt+F,Y[v++]=$+F+1,Y[v++]=$+F;if(O){const t=T*D;for(w=1;w<T-2;w++)for($=t+w*D,tt=t+(w+1)*D,F=1;F<D-2;F++)Y[v++]=tt+F,Y[v++]=$+F,Y[v++]=$+F+1,Y[v++]=tt+F,Y[v++]=$+F+1,Y[v++]=tt+F+1}if(O){if(I)for(at=T*D,w=1;w<D-2;w++)Y[v++]=w,Y[v++]=w+1,Y[v++]=at+w+1,Y[v++]=w,Y[v++]=at+w+1,Y[v++]=at+w;if(E)for(et=T*D-D,at=T*D*L-D,w=1;w<D-2;w++)Y[v++]=et+w+1,Y[v++]=et+w,Y[v++]=at+w,Y[v++]=et+w+1,Y[v++]=at+w,Y[v++]=at+w+1}if(z){for(w=1;w<T-2;w++)at=D*T+D*w,et=D*w,Y[v++]=at,Y[v++]=et+D,Y[v++]=et,Y[v++]=at,Y[v++]=at+D,Y[v++]=et+D;for(w=1;w<T-2;w++)at=D*T+D*(w+1)-1,et=D*(w+1)-1,Y[v++]=et+D,Y[v++]=at,Y[v++]=et,Y[v++]=et+D,Y[v++]=at+D,Y[v++]=at}const it=new m.GeometryAttributes;k.position&&(it.position=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:R}));let rt=0,ot=0,st=0,mt=0;const ut=N/2;let ct;const lt=n.Ellipsoid.fromCartesian3(o),ft=n.Ellipsoid.fromCartesian3(c);if(k.st||k.normal||k.tangent||k.bitangent){for(w=0;w<N;w++){ct=U[w]?ft:lt;const t=n.Cartesian3.fromArray(R,3*w,l),e=ct.geodeticSurfaceNormal(t,f);if(S[w]&&n.Cartesian3.negate(e,e),k.st){const t=n.Cartesian2.negate(e,p);j[rt++]=Math.atan2(t.y,t.x)/i.CesiumMath.TWO_PI+.5,j[rt++]=Math.asin(e.z)/Math.PI+.5}if(k.normal&&(J[ot++]=e.x,J[ot++]=e.y,J[ot++]=e.z),k.tangent||k.bitangent){const t=d;let a,i=0;if(U[w]&&(i=ut),a=!I&&w>=i&&w<i+2*D?n.Cartesian3.UNIT_X:n.Cartesian3.UNIT_Z,n.Cartesian3.cross(a,e,t),n.Cartesian3.normalize(t,t),k.tangent&&(X[st++]=t.x,X[st++]=t.y,X[st++]=t.z),k.bitangent){const a=n.Cartesian3.cross(e,t,C);n.Cartesian3.normalize(a,a),Z[mt++]=a.x,Z[mt++]=a.y,Z[mt++]=a.z}}}k.st&&(it.st=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:j})),k.normal&&(it.normal=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:J})),k.tangent&&(it.tangent=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:X})),k.bitangent&&(it.bitangent=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:Z}))}if(r.defined(t._offsetAttribute)){const a=R.length,n=new Uint8Array(a/3),r=t._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(n,r),it.applyOffset=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new s.Geometry({attributes:it,indices:Y,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:a.BoundingSphere.fromEllipsoid(lt),offsetAttribute:t._offsetAttribute})},x.getUnitEllipsoid=function(){return r.defined(F)||(F=x.createGeometry(new x({radii:new n.Cartesian3(1,1,1),vertexFormat:c.VertexFormat.POSITION_ONLY}))),F},t.EllipsoidGeometry=x}));
