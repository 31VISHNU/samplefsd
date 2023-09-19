import React from "react";

export class Marksheet extends React.Component
{
    
   constructor()
   {
    
    super();
    this.state = {m1:'',m2:'',m3:'',m4:'',m5:'',res:''}
    this.handleSubmit1 = this.setState({m1:target.value});
    this.handleSubmit2 = this.setState({m2:target.value});  
    this.handleSubmit3 = this.setState({m3:target.value});   
    this.handleSubmit4 = this.setState({m4:target.value});  
    this.handleSubmit5 = this.setState({m5:target.value});   
    this.calcmarks = this.calcmarks.bind(this);
   }
  calcmarks(event)
  {
    var { m1,m2,m3,m4,m5,res} = this.state;
    var c=0;
    var s="";
    var m1 = parseInt(m1);
    var m2 = parseInt(m2);
    var m3 = parseInt(m3);
    var m4 = parseInt(m4);
    var m5 = parseInt(m5);
    if((m1>=0 && m1<=100) && (m2>=0 && m2<=100) && (m3>=0 && m3<=100) && (m4>=0 && m4<=100) && (m5>=0 && m5<=100))
    {
          if(m1<33)
          c++;
          if(m2<33)
          c++;
          if(m3<33)
          c++;
          if(m4<33)
          c++;
          if(m5<33)
          c++;

          if(c==0)
          {
             var per = (m1+m2+m3+m4+m5)/5;
             s = 'Congrats your score is'+per+ " %";
          }
          State({res:"result is "+s})
    }
    else
    {
        this.setState({res:"Entered Marks is Invalid"})
    }
    event.preventDefault(); 
  }
   render()
   {
   
    return(
      
       <form onSubmit={this.calcmarks}>  
            <h1>controlled Form Example</h1>  
            <p>Mark1:  
                <input type="text" onChange={this.handleSubmit1}  />  
            </p>  
            <p>Mark2 :  
                <input type="text" onChange={this.handleSubmit2}   />  
            </p>  
            <p>Mark3 :  
                <input type="text" onChange={this.handleSubmit3}   />  
            </p>
            <p>Mark4 :  
                <input type="text" onChange={this.handleSubmit4}   />  
            </p>
            <p>Mark5 :  
                <input type="text" onChange={this.handleSubmit5}   />  
            </p>
            <p>
            <input type="submit" value="Calculate Marks" /> 
            </p>
            <p> {this.state.res}</p>

        </form>
       )
   } 

}