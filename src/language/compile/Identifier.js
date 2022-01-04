import { Error } from "../../classes/Error";
import { Scope } from "../../classes/Scope";
import { Source } from "../../classes/Source";
import { Java } from "../java";

/**wenn owner=null: top level identifier, ansonsten ist owner ein Objekt mit folgenden Eigenschaften: 
 * clazz: Clazz Die Klasse des Objektes in der Hierarchie darueber 
 * static: boolean Gibt an, ob das Objekt in der Hierarchie darueber eine Klasse ist, also ob der Identifier statisch sein muss
 * @param {*} node 
 * @param {Source} source 
 * @param {Scope} scope 
 * @param {Error[]} errors 
 * @param {Object} owner 
 * @returns 
 */
export function Identifier(node,source,scope,owner){
  let name=source.getText(node);
  if(!/^[a-zA-z0-9_]+$/.test(name)){
    throw source.createError("Der Bezeichner '"+name+"' ist ungültig. Ein Bezeichner darf nur aus Buchstaben, Ziffern und/oder Unterstrichen bestehen.",node);
  }
  let obj;
  let code=name;
  if(owner && owner.clazz){
    obj=scope.getAttribute(name,owner.static,owner.clazz);
    if(obj && obj.error){
      throw source.createError(obj.error,node);
    }
  }else{
    //Top-Level
    obj=scope.getLocalVariable(name);
    if(!obj){
      obj=scope.getClazzByName(name);
    }
    if(!obj){
      obj=scope.getAttribute(name,false);
      if(obj && obj.error){
        throw source.createError(obj.error,node);
      }else{
        code="this."+code;
      }
    }
    if(!obj){
      throw source.createError("'"+name+"' ist undefiniert",node);
    }
  } 
  return {
    code: code,
    object: obj,
    name: obj.name,
    type: obj.type
  };
}