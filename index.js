function AlgebraCalc(expression,{add,sub,mul,div,pow}={},debug_mode)
{
CalcExp=(s)=>
{
  let ntoa=n=>(n+'').split``.map(i=>(`abcdefghijk`)[i]).join``;

  let m;

  add=add || ((a,b)=>{
  if(a?.map && b?.map)
    return a.map((i,d)=>(i- -b[d]))
  else if(a?.map || b?.map)
  {
    return a?.map? 
      a.map(i=>(i- -b)) : b.map(i=>(i- -a));
  }
  else
    return (a- -b);
  });

  sub=sub || ((a,b)=>{
  if(a?.map && b?.map)
    return a.map((i,d)=>(i-b[d]));
  else if(a?.map || b?.map)
  {
    return a?.map? 
      a.map(i=>(i-b)) : b.map(i=>(a-i));
  }
  else
    return (a-b);
  });

  mul=mul || ((a,b)=>{
  if(a?.map && b?.map)
    return a.map((i,d)=>(i*b[d]));
  else if(a?.map || b?.map)
  {
    return a?.map? 
      a.map(i=>(i*b)) : b.map(i=>(i*a));
  }
  else
    return (a*b);
  });

  div=div || ((a,b)=>{
  if(a?.map && b?.map)
    return a.map((i,d)=>(i/b[d]))
  else if(a?.map || b?.map)
  {
    return a?.map? 
      a.map(i=>(i/b)) : b.map(i=>(a/i));
  }
  else
    return (a/b);
  });

  pow=pow || ((a,b)=>{
  if(a?.map && b?.map)
    return a.map((i,d)=>(i**b[d]));
  else if(a?.map || b?.map)
  {
    return a?.map? 
      a.map(i=>(i**b)) : b.map(i=>(a**i));
  }
  else
    return (a**b);
  });

  let oobj={"\\*\\*":pow,  "/":div,  "\\*":mul,
                   "-":sub, "\\+":add };

  s?.trim  || (s+='');
  if( !s.includes`(` && !s.includes`)` )
  {
    let cr=o=>(
    new RegExp(`[a-zA-Z0-9 ._]*${o}[a-zA-Z0-9 ._]+`)
    );

    for(let o of ["\\*\\*","/","\\*","-","\\+"])
    {
      let oname=({"\\*\\*":`**`,"/":`/`,"\\*":`*`,"-":`-`,"\\+":`+`})[o];
      while( m=s.match(cr(o)) )
      {
        let [ll,rr]=m[0].split(oname).map(eval);
        ll=ll || 0;
        debug_mode && alert([ll,oname,rr]);
        let i=ntoa(CalcExp.c++);
        CalcExp.obj[i]=oobj[o](ll,rr);
        s=s.replace(cr(o), "CalcExp.obj."+i );
      }
    }
    return eval(s);
  }
  else
  {
    while( s.match(/\(.*?\)/) )
    {
	    let i=ntoa(CalcExp.c++);
      s=s.replace(  /\(.*?\)/  ,
                   rs=>(CalcExp.obj[i]=CalcExp(  rs.slice(1,-1)  ),"CalcExp.obj."+i)
                   );
    }
    return CalcExp(s);
  }
}

CalcExp.c=0;
CalcExp.obj={};

return CalcExp(expression);
}

