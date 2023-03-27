import Card from '@/models/Card';


interface CardProps {
  values: Card[]
};


const Cards = ({ values } : CardProps) => {

    return (

      <>
       {values.map((item , index) => 

            <div key={index} className="gridbox">
      <div className="gridimg">

      <img src={item.img} alt="" />
      
      </div>
      <div className="griddetails">
        <div className="">
          <h6 className="font-bold">
          {item.title}
          </h6>
        </div>
        <div className="gridfoter">
          <i className="gridfont fa fa-user mr-1.5" aria-hidden="true"></i>
          <p>{item.stitle}</p>
          <h4 className="gridfont ml-2">
            {item.count}
          </h4>
        </div>


      </div>
  </div>
     )} 
      </>
        
        
    );
}

export default Cards;