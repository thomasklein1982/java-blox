export class Type{
  constructor(name,dimension,isPrimitive,superType){
    this.name=name;
    this.dimension=dimension;
    this.isPrimitive=isPrimitive;
  }

  toString(){
    var t=this.name;
    var brackets=this.dimension;
    while(brackets>0){
      brackets--;
      t+="[]";
    }
    return t;
  }

  compile(node,source){
    var errors=[];
    if(node.name==="PrimitiveType"){
      this.name=source.getText(node);
      this.dimension=0;
      this.isPrimitive=true;
    }else if(node.name==="TypeName"){
      this.name=source.getText(node);
      this.dimension=0;
      this.isPrimitive=false;
    }else if(node.name==="ArrayType"){
      node=node.firstChild;
      if(node.name==="PrimitiveType"){
        this.isPrimitive=true;
        this.name=source.getText(node);
      }else{
        this.isPrimitive=false;
        this.name=source.getText(node);
      }
      node=node.nextSibling;
      var parent=node;
      /**jetzt Folge von [] */
      this.dimension=0;
      while(parent){
        node=parent.firstChild;
        if(node.name==="["){
          
        }else{
          errors.push(source.createError("'[' erwartet.",node));
          break;
        }
        node=node.nextSibling;
        if(node.name==="]"){
          
        }else{
          errors.push(source.createError("']' erwartet.",node));
          break;
        }
        parent=parent.nextSibling;
        this.dimension++;
      }
    }
    return errors;
  }
}