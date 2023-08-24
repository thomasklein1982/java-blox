import { Type } from "../../classes/Type";

export function TypeName(node,source,scope,infos){
  let name=source.src.substring(node.from,node.to);
  let clazz=scope.getTypeByName(name);
  if(!clazz){
    throw (source.createError("Es gibt keinen Datentypen namens '"+name+"'.",node));
  }
  if(clazz.typeParameters && (!infos || !infos.genericType)){
    throw (source.createError("Die Klasse '"+name+"' erfordert die Angabe eines Datentypen in spitzen Klammern <>.",node));
  }
  return {
    type: new Type(clazz,0),
    code: name
  }
}