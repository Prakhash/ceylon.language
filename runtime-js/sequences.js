function Array$(elems,$$targs$$) {
    var e=[];
    if (!(elems === null || elems === undefined)) {
        var iter=elems.iterator();
        var item;while((item=iter.next())!==getFinished()) {
            e.push(item);
        }
    }
    e.$$targs$$=$$targs$$;
    List({Element$List:$$targs$$.Element$Array}, e);
    return e;
}
Array$.$crtmm$={$ps:[{$nm:'elements',$mt:'prm',$t:{t:Iterable,a:{Absent$Iterable:{t:Null},Element$Iterable:'Element$Array'}}}],$an:function(){return[shared(),final(),native()];},mod:$CCMM$,d:['ceylon.language','Array'],
  'super':{t:Object$}, $tp:{Element$Array:{}}, satisfies:[{t:List,a:{Element$List:'Element$Array'}},
    {t:Ranged,a:{Index$Ranged:{t:Integer},Span$Ranged:{t:Array$,a:{Element$Array:'Element$Array'}}}}]};

initExistingType(Array$, Array, 'ceylon.language::Array', Object$,
        Ranged, $init$List());
var Array$proto = Array.prototype;
var origArrToString = Array$proto.toString;
inheritProto(Array$, Object$, Ranged, $init$List());
Array$proto.toString = origArrToString;
Array$proto.reifyCeylonType = function(typeParameters) {
    this.$$targs$$ = typeParameters;
    return this;
}
exports.$Array=Array$;

function ArraySequence(/* js array */value, $$targs$$) {
if (value.length===0)return getEmpty();
    value.$seq = true;
var t=$$targs$$.Element$Iterable;
if (t===undefined)t=$$targs$$.Element$ArraySequence;
if (t===undefined)t=$$targs$$.Element$Array;
if (t===undefined)t=$$targs$$.Element$Sequence;
if (t===undefined)t=$$targs$$.Element$Sequential;
if (t===undefined)t=$$targs$$.Element$List;
if (t===undefined)throw new Error("Invalid type arguments for ArraySequence: "+require('util').inspect($$targs$$));
    value.$$targs$$={Element$Iterable:t, Element$ArraySequence:t, Element$Sequence:t, Element$Sequential:t, Element$List:t, Element$Collection:t, Item$Correspondence:t, Key$Correspondence:{t:Integer},Absent$Iterable:{t:Nothing}, Element$Array:t};
    return value;
}
ArraySequence.$crtmm$=function(){return{mod:$CCMM$,d:['ceylon.language','ArraySequence'],$ps:[{$nm:'elements',$t:{t:Sequence,a:{Element$Sequence:'Element$ArraySequence'}}}],$tp:{Element$ArraySequence:{'var':'out'}},satisfies:[{t:Sequence,a:{Element$Sequence:'Element$ArraySequence'}}]};};
initTypeProto(ArraySequence, 'ceylon.language::ArraySequence', $init$Basic(), $init$Sequence());
Array$proto.getT$name = function() {
    return (this.$seq ? ArraySequence : Array$).$$.T$name;
}
Array$proto.getT$all = function() {
    return (this.$seq ? ArraySequence : Array$).$$.T$all;
}

defineAttr(Array$proto, 'size', function(){ return this.length; },undefined,function(){return{mod:$CCMM$,d:['ceylon.language','Iterable','$at','size'],$cont:Array$proto,$t:{t:Integer}};});
defineAttr(Array$proto,'string',function(){
    return (opt$181=(this.empty?String$("[]",2):null),opt$181!==null?opt$181:StringBuilder().appendAll([String$("[",1),commaList(this).string,String$("]",1)]).string);
},undefined,function(){return{mod:$CCMM$,d:['ceylon.language','Object','$at','string'],$t:{t:String},$cont:Array$proto};});
Array$proto.set = function(idx,elem) {
    if (idx >= 0 && idx < this.length) {
        this[idx] = elem;
    }
}
Array$proto.set.$crtmm$=function(){return{mod:$CCMM$,d:['ceylon.language','Array','$m','set'],$t:{t:Anything},$ps:[{$nm:'index',$t:{t:Integer},$mt:'prm'},{$nm:'element',$mt:'prm',$t:'Element$Array'}]};}
Array$proto.$get = function(idx) {
    var result = this[idx];
    return result!==undefined ? result:null;
}
Array$proto.$get.$crtmm$=function(){
  return{mod:$CCMM$,d:['ceylon.language','List','$m','get'],$t:{t:'u',l:[{t:Null},'Element$Array']},$ps:[{$nm:'index',$t:{t:Integer},$mt:'prm'}]};
}
defineAttr(Array$proto, 'lastIndex', function() {
    return this.length>0 ? (this.length-1) : null;
},undefined,function(){return{mod:$CCMM$,d:['ceylon.language','List','$at','lastIndex'],$t:{t:'u',l:[{t:Null},{t:Integer}]}};});
defineAttr(Array$proto, 'reversed', function() {
    if (this.length === 0) { return this; }
    var arr = this.slice(0);
    arr.reverse();
    return this.$seq ? ArraySequence(arr,this.$$targs$$||{Element$Iterable:{t:Anything}}) : arr.reifyCeylonType(this.$$targs$$);
},undefined,function(){return{mod:$CCMM$,d:['ceylon.language','List','$at','reversed'],$t:{t:List,a:{Element$List:'Element$Array'}}};});
Array$proto.chain = function(other, $$$mptypes) {
    if (this.length === 0) { return other; }
    return Iterable.$$.prototype.chain.call(this, other, $$$mptypes);
}
defineAttr(Array$proto, 'first', function(){ return this.length>0 ? this[0] : null; },
  undefined,function(){return{mod:$CCMM$,d:['ceylon.language','Iterable','$at','first'],$t:{t:'u',l:[{t:Null},'Element$Array']}};});
defineAttr(Array$proto, 'last', function() { return this.length>0 ? this[this.length-1] : null; },
  undefined,function(){return{mod:$CCMM$,d:['ceylon.language','List','$at','last'],$t:{t:'u',l:[{t:Null},'Element$Array']}};});
Array$proto.segment = function(from, len) {
    if (len <= 0) { return getEmpty(); }
    var stop = from + len;
    var seq = this.slice((from>=0)?from:0, (stop>=0)?stop:0);
    return (seq.length > 0) ? ArraySequence(seq,this.$$targs$$||{Element$Iterable:{t:Anything}}) : getEmpty();
}
Array$proto.span = function(from, to) {
    if (from > to) {
        var arr = this.segment(to, from-to+1);
        arr.reverse();
        return arr.reifyCeylonType(this.$$targs$$);
    }
    return this.segment(from, to-from+1);
}
Array$proto.spanTo = function(to) {
    return to < 0 ? getEmpty() : this.span(0, to);
}
Array$proto.spanFrom = function(from) {
    return this.span(from, 0x7fffffff);
}
defineAttr(Array$proto, 'rest', function() {
    return this.length<=1 ? getEmpty() : ArraySequence(this.slice(1),this.$$targs$$||{Element$Iterable:{t:Anything}});
});
Array$proto.items = function(keys) {
    if (keys === undefined) return getEmpty();
    var seq = [];
    for (var i = 0; i < keys.size; i++) {
        var key = keys.$get(i);
        seq.push(this.$get(key));
    }
    return ArraySequence(seq,this.$$targs$$||{Element$Iterable:{t:Anything}});
}
defineAttr(Array$proto, 'keys', function(){ return TypeCategory(this, {t:Integer}); });
Array$proto.contains = function(elem) {
    for (var i=0; i<this.length; i++) {
        if (elem.equals(this[i])) {
            return true;
        }
    }
    return false;
}
Array$proto.iterator = function() {
    var $$$index$$$ = 0;
    var $$$arr$$$ = this;
    return new ComprehensionIterator(function() {
        return ($$$index$$$ === $$$arr$$$.length) ? getFinished() : $$$arr$$$[$$$index$$$++];
    }, this.$$targs$$);
}
Array$proto.copyTo = function(other, srcpos, dstpos, length) {
    if (length === undefined) length = this.size;
    if (srcpos === undefined) srcpos = 0;
    if (dstpos === undefined) dstpos = 0;
    var endpos = srcpos+length;
    //TODO validate range?
    for (var i=srcpos; i<endpos; i++) {
        other[dstpos]=this[i];
        dstpos++;
    }
}
Array$proto.shorterThan = function(len) {
  return this.size < len;
}
Array$proto.shorterThan.$crtmm$={mod:$CCMM$,d:['ceylon.language','Iterable','$m','shorterThan']};
Array$proto.longerThan = function(len) {
  return this.size > len;
}
Array$proto.longerThan.$crtmm$={mod:$CCMM$,d:['ceylon.language','Iterable','$m','longerThan']};

exports.arrayOfSize=function(size, elem, $$$mptypes) {
    if (size > 0) {
        var elems = [];
        for (var i = 0; i < size; i++) {
            elems.push(elem);
        }
        elems.$$targs$$=$$$mptypes;
        return elems;
    } else return [];
}
exports.arrayOfSize.$crtmm$={$an:function(){return[shared()];},mod:$CCMM$,d:['ceylon.language','arrayOfSize']};

function TypeCategory(seq, type) {
    var that = new TypeCategory.$$;
    that.type = type;
    that.seq = seq;
    return that;
}
initTypeProto(TypeCategory, 'ceylon.language::TypeCategory', $init$Basic(), Category);
var TypeCategory$proto = TypeCategory.$$.prototype;
TypeCategory$proto.contains = function(k) {
    return isOfType(k, this.type) && this.seq.defines(k);
}

function SequenceBuilder($$targs$$,that) {
    if(that===undefined)that=new SequenceBuilder.$$;
    that.seq = [];
    that.$$targs$$=$$targs$$;
    return that;
}
SequenceBuilder.$crtmm$=function(){return{$ps:[],$an:function(){return[shared()];},
  $tp:{Element$SequenceBuilder:{}}, mod:$CCMM$,d:['ceylon.language','SequenceBuilder']};}

initTypeProto(SequenceBuilder, 'ceylon.language::SequenceBuilder', $init$Basic());
var SequenceBuilder$proto = SequenceBuilder.$$.prototype;
defineAttr(SequenceBuilder$proto, 'sequence', function() {
    return (this.seq.length > 0) ? ArraySequence(this.seq,{Element$Iterable:this.$$targs$$.Element$SequenceBuilder}) : getEmpty();
},undefined,function(){return{
  $t:{t:Sequential,a:{Element$Sequential:'Element$SequenceBuilder'}},mod:$CCMM$,d:['ceylon.language','SequenceBuilder','$at','sequence']};});
SequenceBuilder$proto.append=function(e){
  this.seq.push(e);
  return this;
}
SequenceBuilder$proto.appendAll = function(/*Iterable*/arr) {
    if (arr === undefined) return;
    var iter = arr.iterator();
    var e; while ((e = iter.next()) !== getFinished()) {
        this.seq.push(e);
    }
    return this;
}
defineAttr(SequenceBuilder$proto, 'size', function(){ return this.seq.length; },undefined,function(){return{
  $t:{t:Integer},mod:$CCMM$,d:['ceylon.language','SequenceBuilder','$at','size']
};});
defineAttr(SequenceBuilder$proto, 'empty', function() { return this.seq.length===0 },function(){return{
  $t:{t:Boolean$},mod:$CCMM$,d:['ceylon.language','SequenceBuilder','$at','empty']
};});

function SequenceAppender(other, $$targs$$,that) {
    if (that===undefined)that=new SequenceAppender.$$;
    SequenceBuilder({Element$SequenceBuilder:$$targs$$.Element$SequenceAppender},that);
    that.appendAll(other);
    return that;
}
SequenceAppender.$crtmm$=function(){return{$ps:[{$nm:'elements',$t:{t:Sequence,a:{Element$Sequence:'Element$SequenceAppender'}},$mt:'prm'}],$an:function(){return[shared()];},
  'super':{t:SequenceBuilder,a:{Element$SequenceBuilder:'Element$SequenceAppender'}},$tp:{Element$SequenceAppender:{}},mod:$CCMM$,d:['ceylon.language','SequenceAppender']};}

initTypeProto(SequenceAppender, 'ceylon.language::SequenceAppender', SequenceBuilder);

exports.Sequence=Sequence;
exports.SequenceBuilder=SequenceBuilder;
exports.SequenceAppender=SequenceAppender;
exports.ArraySequence=ArraySequence;
