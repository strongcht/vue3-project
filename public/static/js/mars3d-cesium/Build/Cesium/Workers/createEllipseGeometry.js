define(["./Matrix2-1509208a","./defaultValue-69ee94f4","./EllipseGeometry-0b2a6f30","./RuntimeError-ac440aa5","./ComponentDatatype-a9820060","./WebGLConstants-f63312fc","./GeometryOffsetAttribute-4d39b441","./Transforms-bd15b2e7","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./EllipseGeometryLibrary-71538ff1","./GeometryAttribute-ce92871d","./GeometryAttributes-1b4134a9","./GeometryInstance-86b030a6","./GeometryPipeline-b301e381","./AttributeCompression-7a823eb1","./EncodedCartesian3-ee8e4156","./IndexDatatype-1cbc8622","./IntersectionTests-5ec530d5","./Plane-e3daa19b","./VertexFormat-e68722dd"],(function(e,t,r,a,n,o,i,s,l,c,m,b,d,f,p,u,y,G,E,C,_){"use strict";return function(a,n){return t.defined(n)&&(a=r.EllipseGeometry.unpack(a,n)),a._center=e.Cartesian3.clone(a._center),a._ellipsoid=e.Ellipsoid.clone(a._ellipsoid),r.EllipseGeometry.createGeometry(a)}}));