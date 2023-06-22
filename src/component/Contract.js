import React, { useState } from 'react';
import Calender from './Calender';
import { extraFood } from './data';
import { mainFood } from './data';
import { designItems } from './data';
import { fireWorks } from './data';
import { useNavigate } from 'react-router-dom';

export default function Contract() {
  const navigate = useNavigate();

  //main food
  const [main, setMain] = useState(mainFood);
  const [maiFood, setMaiFood] = useState('');

  //extra food
  const [extra, setExtra] = useState(extraFood);

  //design items or options
  const [designs, setDesigns] = useState(designItems);

  //deser
  const foodItems = designs.filter((item) => {
    if (item.type === 'food') {
      return item;
    }
  });
  const [items, setItems] = useState(foodItems);

  //simple design items
  const simple = designs.filter((item) => {
    if (item.type === 'simple') {
      return item;
    }
  });
  const [simpleDesign, setSimpleDesign] = useState(simple);

  //fire works
  const [fire, setFire] = useState(fireWorks);

  //tashrifat
  const tashrif = designs.filter((item) => {
    if (item.type === 'number') {
      return item;
    }
  });
  const [tashrifat, setTashrifat] = useState(tashrif);

  //party time and pish money time
  const [time, setTime] = useState({ fa: '' });
  const [pime, setPime] = useState({ fa: '' });

  //user info or guest info
  const [bill, setBill] = useState({
    name: '',
    id: '',
    phoneCode: '',
    phoneNum: 0,
    address: '',
    partyKind: 'عروسی',
    guestNum: 0,
    priod: 'شب',
    from: '18:30',
    to: '22:30',
    prePay: 0,
    taxt: 9,
    enterance: 0,
    discount: 0,
    full: false,
    description: '',
  });

  //change the price of main food
  const mainFoodChangeListener = (name, price) => {
    const newItems = main.map((item) => {
      if (item.name === name) {
        item.price = price;
      }
      return item;
    });
    setMain(newItems);
  };

  //click handler for selecting party date
  const showClickHandler = () => {
    setTime({ fa: '' });
  };

  //changing the check or status of selected extra food
  const changeListener = (name) => {
    const newItems = extra.map((item) => {
      if (item.name === name) {
        item.check = !item.check;
      }
      return item;
    });
    setExtra(newItems);
  };

  //change or set the number of extra food
  const itemChangeListener = (name, number) => {
    const newItems = extra.map((item) => {
      if (item.name === name) {
        item.number = number;
      }
      return item;
    });
    setExtra(newItems);
  };

  //change the price of extra food
  const itemChangeListenerPrice = (name, price) => {
    const newItems = extra.map((item) => {
      if (item.name === name) {
        item.overal = price;
      }
      return item;
    });
    setExtra(newItems);
  };

  //check the status of food options
  const changeListenerItemFood = (name) => {
    const newItems = items.map((item) => {
      if (item.name === name) {
        item.check = !item.check;
      }
      return item;
    });
    setItems(newItems);
  };

  //change the number of food options
  const itemChangeListenerFood = (name, number) => {
    const newItems = items.map((item) => {
      if (item.name === name) {
        item.number = number;
      }
      return item;
    });
    setItems(newItems);
  };

  //change the price of food options
  const itemChangeListenerFoodPrice = (name, price) => {
    const newItems = items.map((item) => {
      if (item.name === name) {
        item.overal = price;
      }
      return item;
    });
    setItems(newItems);
  };

  //changing the price of selected simple design items
  const priceChangeHander = (name, value) => {
    const newItems = simpleDesign.map((item) => {
      if (item.name === name) {
        item.price = value;
      }
      return item;
    });
    setSimpleDesign(newItems);
  };

  //checking the  status of selected Fire works
  const fireChangeListener = (name) => {
    const newItems = fire.map((item) => {
      if (item.name === name) {
        item.check = !item.check;
      }
      return item;
    });
    setFire(newItems);
  };

  //changing the price of Fire works options
  const firePriceChangeHander = (name, price) => {
    const newItems = fire.map((item) => {
      if (item.name === name) {
        item.price = price;
      }
      return item;
    });
    setFire(newItems);
  };

  //checking the status of selected simple design items
  const DesignschangeListener = (name) => {
    const newItems = simpleDesign.map((item) => {
      if (item.name === name) {
        item.check = !item.check;
      }
      return item;
    });
    setSimpleDesign(newItems);
  };

  //checking the status of selected tashrifat
  const TashrifatchangeListener = (name) => {
    const newItems = tashrifat.map((item) => {
      if (item.name === name) {
        item.check = !item.check;
      }
      return item;
    });
    setTashrifat(newItems);
  };

  //change the number of people involving with tashrifat
  const ChangeTashrifatNumber = (name, number) => {
    const newItems = tashrifat.map((item) => {
      if (item.name === name) {
        item.number = number;
      }
      return item;
    });
    setTashrifat(newItems);
  };

  //Changing Price of people involving with tashrifat
  const changeTashrifatPrice = (name, value) => {
    const newItems = tashrifat.map((item) => {
      if (item.name === name) {
        item.overal = value;
      }
      return item;
    });
    setTashrifat(newItems);
  };

  //done

  //click handler for pish pardakht time
  const showClickHandlerPime = () => {
    setPime({ fa: '' });
  };

  //form click handler
  const fomrClickHandler = (e) => {
    e.preventDefault();

    //error part to show to customer;
    // eslint-disable-next-line
    // if (!maiFood || bill.guestNum == 0) {
    //   return console.log('no no no');
    // }
    let sum = 0;
    //find the main food
    const mfnv = { name: '', price: 0, overal: 0 };
    main.map((item) => {
      if (item.name === maiFood) {
        mfnv.name = item.name;
        mfnv.price = item.price;
        mfnv.overal = Number(item.price) * Number(bill.guestNum);
        // main food price calculation
      }
      return item;
    });
    if (mfnv.overal) {
      sum = mfnv.overal;
    }

    //find the extra foods
    // eslint-disable-next-line
    const sarriz = extra.filter((item) => {
      if (item.check) {
        item.price = item.overal * item.number;
        //calculate the sum of extra food
        sum += Number(item.price);
        return item;
      }
    });

    //find the food options
    // eslint-disable-next-line
    const pishQaza = items.filter((item) => {
      if (item.check) {
        item.price = item.overal * item.number;
        //calculate the sum of food options
        sum += Number(item.price);
        return item;
      }
    });

    //find the salon design items
    // eslint-disable-next-line
    const salonDesign = simpleDesign.filter((item) => {
      if (item.check) {
        //calculate the sum of salon design items
        sum += Number(item.price);
        return item;
      }
    });

    //find the fire items
    // eslint-disable-next-line
    const finalFire = fire.filter((item) => {
      if (item.check) {
        //calculate the sum of fire works
        sum += Number(item.price);
        return item;
      }
    });

    //find the Tashrifat
    // eslint-disable-next-line
    const finalTashrifat = tashrifat.filter((item) => {
      if (item.check) {
        item.price = item.overal * item.number;
        //calculate the sum of tashrifat
        sum += Number(item.price);
        return item;
      }
    });

    //price chart;

    // //enterance
    sum += Number(bill.enterance);

    //taxt
    sum += (sum * Number(bill.taxt)) / 100;

    // //discoun
    if (Number(bill.discount) > 0) {
      sum -= Number(bill.discount);
    }

    const x = {
      main: mfnv,
      bill,
      sarriz,
      pishQaza,
      salonDesign,
      finalFire,
      finalTashrifat,
      time: time.fa,
      pime: pime.fa,
      overalPrice: sum,
    };

    localStorage.setItem('normalizedData', JSON.stringify(x));
    navigate('/printScreen');
  };

  return (
    <div className="container my-2  ">
      <h1 className="text-center mt-4 mb-5 ">قرارداد مراسم قصر رویال </h1>
      <form className="form-overal mb-5">
        <ul className="list-group">
          {/* مشخصات مشتری  */}
          <li className="list-group-item">
            <h3 className="text-center mb-3 text-muted">
              مشخصات میزبان مراسم{' '}
            </h3>
            <div style={{ paddingRight: '150px' }}>
              <div className="row ">
                <div
                  className="col-md-4 form-group "
                  style={{ marginLeft: '150px' }}
                >
                  <label htmlFor="customerName" className=" mb-2 ms-2">
                    نام مشتری
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="customerName"
                    placeholder="نام مشتری"
                    value={bill.name}
                    onChange={(e) => setBill({ ...bill, name: e.target.value })}
                  />
                </div>

                <div className="col-md-4 form-group">
                  <label htmlFor="customerCode" className="mb-2 ms-2">
                    کد ملی
                  </label>

                  <input
                    type="text"
                    className="form-control "
                    id="customerCode"
                    placeholder="کد ملی "
                    value={bill.id}
                    onChange={(e) => setBill({ ...bill, id: e.target.value })}
                  />
                </div>
              </div>
              <div className="row  mt-3">
                <div
                  className="col-md-4 form-group"
                  style={{ marginLeft: '150px' }}
                >
                  <label htmlFor="customersPhone" className="mb-2 ms-2">
                    تلفن ثابت
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="customersPhone"
                    placeholder="تلفن ثابت "
                    value={bill.phoneCode}
                    onChange={(e) =>
                      setBill({ ...bill, phoneCode: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-4 form-group ">
                  <label htmlFor="customerPhoneNumber" className="mb-2 ms-2">
                    شماره همراه
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="customerPhoneNumber"
                    placeholder=" شماره همراه "
                    value={bill.phoneNum}
                    onChange={(e) =>
                      setBill({ ...bill, phoneNum: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row  mt-3">
                <div
                  className="col-md-4 form-group"
                  style={{ marginLeft: '150px' }}
                >
                  <label htmlFor="customerName" className="mb-2 ms-2">
                    به آدرس
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="customerName"
                    placeholder="آدرس"
                    value={bill.address}
                    onChange={(e) =>
                      setBill({ ...bill, address: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-4 form-group">
                  <label htmlFor="customerPartyKind" className="mb-2 ms-2">
                    نوع مراسم
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setBill({ ...bill, partyKind: e.target.value })
                    }
                  >
                    <option value="عروسی">عروسی</option>
                    <option value="عقد">عقد</option>
                    <option value="حنا بندان">حنا بندان</option>
                    <option value="تولد">تولد</option>
                    <option value="ختم">ختم</option>
                    <option value="ختنه سوران">ختنه سوران</option>
                    <option value="سالگرد ازدواج">سالگرد ازدواج</option>
                    <option value="نامزدی">نامزدی</option>
                    <option value="میهمانی">میهمانی</option>
                  </select>
                </div>
              </div>
              <div className="row   mt-3 mb-3">
                <div
                  className="col-md-4 form-group"
                  style={{ marginLeft: '150px' }}
                >
                  <label htmlFor="guestnumber" className="mb-2 ms-2">
                    تعداد میهمان
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="guestnumber"
                    placeholder="تعداد میهمان "
                    value={bill.guestNum}
                    onChange={(e) =>
                      setBill({ ...bill, guestNum: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-4 form-group">
                  <label htmlFor="customerdate" className="mb-2 ms-2">
                    تاریخ برگزاری مراسم
                  </label>
                  <div>
                    {!time.fa ? (
                      <>
                        <Calender setTime={setTime} />
                      </>
                    ) : (
                      <>
                        <button onClick={showClickHandler}>
                          {' '}
                          <i className="bi bi-calendar"></i>
                        </button>
                        <b className="mx-3"> {time.fa}</b>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="row  mt-3 mb-3">
                <div
                  className="col-md-4 form-group"
                  style={{ marginLeft: '150px' }}
                >
                  <label htmlFor="customerPartyKind" className="mb-2 ms-2">
                    نوبت
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setBill({ ...bill, priod: e.target.value })
                    }
                    value={bill.priod}
                  >
                    <option value="شب">شب</option>
                    <option value="ظهر">ظهر</option>
                    <option value="بعد از ظهر">بعد از ظهر</option>
                  </select>
                </div>

                <div className="col-md-2 form-group">
                  <label htmlFor="from" className="mb-2 ms-2">
                    از ساعت
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="from"
                    placeholder=""
                    value={bill.from}
                    onChange={(e) => setBill({ ...bill, from: e.target.value })}
                  />
                </div>
                <div className="col-md-2 form-group">
                  <label htmlFor="to" className="mb-2 ms-2">
                    تا ساعت
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="to"
                    placeholder=""
                    value={bill.to}
                    onChange={(e) => setBill({ ...bill, to: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </li>

          {/* غذای اصلی  */}
          <li className="list-group-item">
            <h3 className="text-center mt-2"> غذای اصلی </h3>
            <div className="row my-3 ml-5">
              {main.map((foodi, index) => (
                <div className="col-md-6" key={index}>
                  <div className="row">
                    <div className="col-md-6 my-2 ">
                      <div className="form-check">
                        <div className="">
                          <label
                            className="form-check-label text-muted fw-bold"
                            htmlFor={foodi.id}
                          >
                            {foodi.name}
                          </label>
                          <input
                            className="form-check-input mx-2"
                            style={{ marginTop: '5px' }}
                            type="radio"
                            name="asli"
                            value={foodi.name}
                            id={foodi.id}
                            checked={maiFood === foodi.name}
                            onChange={(e) => setMaiFood(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 px-0"
                      key={index + 50}
                      style={{ marginRight: '-20px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={foodi.id + ' ' + index}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          قیمت:
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={foodi.id + ' ' + index}
                          placeholder={`قیمت ${foodi.name}`}
                          style={{ width: '70%' }}
                          value={maiFood === foodi.name ? foodi.price : 0}
                          onChange={(e) =>
                            mainFoodChangeListener(foodi.name, e.target.value)
                          }
                          disabled={maiFood !== foodi.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>

          {/* غذای سرشکن  */}
          <li className="list-group-item">
            <h3 className="text-center mt-2"> سرشکن </h3>
            <div className="row my-3 ml-5">
              {extra.map((foodi, index) => (
                <div className="col-md-6" key={index}>
                  <div className="row">
                    <div className="col-md-4 my-2 ">
                      <div className="form-check">
                        <div className="">
                          <label
                            className="form-check-label text-muted fw-bold"
                            htmlFor={foodi.id}
                          >
                            {foodi.name}
                          </label>
                          <input
                            className="form-check-input mx-2"
                            style={{ marginTop: '5px' }}
                            type="checkbox"
                            value={foodi.name}
                            id={foodi.id}
                            checked={foodi.check}
                            onChange={() => changeListener(foodi.name)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 px-0"
                      key={index + 50}
                      style={{ marginRight: '-20px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={foodi.id + ' ' + index}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          تعداد:
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={foodi.id + ' ' + index}
                          placeholder={`تعداد ${foodi.name}`}
                          style={{ width: '70px' }}
                          value={foodi.check ? foodi.number : 0}
                          onChange={(e) =>
                            itemChangeListener(foodi.name, e.target.value)
                          }
                          disabled={!foodi.check}
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-4 px-0"
                      style={{ marginRight: '-40px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={foodi.id + 'id' + index}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          قیمت:
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={foodi.id + 'id' + index}
                          placeholder={`قیمت ${foodi.name}`}
                          style={{ width: '120px' }}
                          value={foodi.check ? foodi.overal : 0}
                          onChange={(e) =>
                            itemChangeListenerPrice(foodi.name, e.target.value)
                          }
                          disabled={!foodi.check}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>

          {/* پیش غذا  */}
          <li className="list-group-item">
            <h3 className="text-center mt-2"> دسر </h3>
            <div className="row my-3 ml-5">
              {foodItems.map((foodi, index) => (
                <div className="col-md-6" key={index}>
                  <div className="row">
                    <div className="col-md-4 my-2 ">
                      <div className="form-check">
                        <div className="">
                          <label
                            className="form-check-label text-muted fw-bold"
                            htmlFor={foodi.id}
                          >
                            {foodi.name}
                          </label>
                          <input
                            className="form-check-input mx-2"
                            style={{ marginTop: '5px' }}
                            type="checkbox"
                            value={foodi.name}
                            id={foodi.id}
                            checked={foodi.check}
                            onChange={() => changeListenerItemFood(foodi.name)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 px-0"
                      key={index + 50}
                      style={{ marginRight: '-20px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={foodi.id + ' ' + index}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          تعداد:
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={foodi.id + ' ' + index}
                          placeholder={`تعداد ${foodi.name}`}
                          style={{ width: '70px' }}
                          value={foodi.check ? foodi.number : 0}
                          onChange={(e) =>
                            itemChangeListenerFood(foodi.name, e.target.value)
                          }
                          disabled={!foodi.check}
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-4 px-0"
                      style={{ marginRight: '-40px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={foodi.id + 'id' + index}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          قیمت:
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={foodi.id + 'id' + index}
                          placeholder={`قیمت ${foodi.name}`}
                          style={{ width: '120px' }}
                          value={foodi.check ? foodi.overal : 0}
                          onChange={(e) =>
                            itemChangeListenerFoodPrice(
                              foodi.name,
                              e.target.value
                            )
                          }
                          disabled={!foodi.check}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>

          {/*  تزِیینات سالن */}
          <li className="list-group-item">
            <h3 className="text-center mt-2"> تزیینات سالن </h3>
            <div className="row my-3 ml-5">
              {simpleDesign.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="row">
                    <div className="col-md-5 my-2 ">
                      <div className="form-check">
                        <div className="">
                          <label
                            className="form-check-label text-muted fw-bold"
                            htmlFor={`eco${index}`}
                          >
                            {item.name}
                          </label>
                          <input
                            className="form-check-input mx-2"
                            style={{ marginTop: '5px' }}
                            type="checkbox"
                            id={`eco${index}`}
                            checked={item.check}
                            onChange={(e) => DesignschangeListener(item.name)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-7 px-0"
                      style={{ marginRight: '-20px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={`price${index}`}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          قیمت
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={`price${index}`}
                          placeholder={'قیمت اکو'}
                          style={{ width: '200px' }}
                          value={item.check ? item.price : 0}
                          onChange={(e) =>
                            priceChangeHander(item.name, e.target.value)
                          }
                          disabled={!item.check}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>

          {/*   اتش بازی */}
          <li className="list-group-item">
            <h3 className="text-center mt-2"> آتش بازی </h3>
            <div className="row my-3 ml-5">
              {fire.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="row">
                    <div className="col-md-5 my-2 ">
                      <div className="form-check">
                        <div className="">
                          <label
                            className="form-check-label text-muted fw-bold"
                            htmlFor={`fire${index}`}
                          >
                            {item.name}
                          </label>
                          <input
                            className="form-check-input mx-2"
                            style={{ marginTop: '5px' }}
                            type="checkbox"
                            id={`fire${index}`}
                            checked={item.check}
                            onChange={(e) => fireChangeListener(item.name)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-7 px-0"
                      style={{ marginRight: '-20px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={`fireprice${index}`}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          قیمت
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={`fireprice${index}`}
                          style={{ width: '200px' }}
                          value={item.check ? item.price : 0}
                          onChange={(e) =>
                            firePriceChangeHander(item.name, e.target.value)
                          }
                          disabled={!item.check}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>

          {/*    مهمان پذیر*/}
          <li className="list-group-item">
            <h3 className="text-center mt-2"> مهمان پذیر </h3>

            {/* tashrifat part */}
            <div className="row my-3 ml-5">
              {tashrifat.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="row">
                    <div className="col-md-4 my-2 ">
                      <div className="form-check">
                        <div className="">
                          <label
                            className="form-check-label text-muted fw-bold"
                            htmlFor={item.id}
                          >
                            {item.name}
                          </label>
                          <input
                            className="form-check-input mx-2"
                            style={{ marginTop: '5px' }}
                            type="checkbox"
                            value={item.name}
                            id={item.id}
                            checked={item.check}
                            onChange={() => TashrifatchangeListener(item.name)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4 px-0"
                      key={index + 50}
                      style={{ marginRight: '-20px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={item.id + ' ' + index}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          تعداد:
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={item.id + ' ' + index}
                          placeholder={`تعداد ${item.name}`}
                          style={{ width: '70px' }}
                          value={item.check ? item.number : 0}
                          onChange={(e) =>
                            ChangeTashrifatNumber(item.name, e.target.value)
                          }
                          disabled={!item.check}
                        />
                      </div>
                    </div>
                    <div
                      className="col-md-4 px-0"
                      style={{ marginRight: '-40px' }}
                    >
                      <div className=" d-flex  form-group">
                        <label
                          htmlFor={item.id + 'id1' + index}
                          className="mb-2 ms-3"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          قیمت:
                        </label>
                        <input
                          type="number"
                          className="form-control "
                          id={item.id + 'id1' + index}
                          placeholder={`قیمت ${item.name}`}
                          style={{ width: '120px' }}
                          value={item.check ? item.overal : 0}
                          onChange={(e) =>
                            changeTashrifatPrice(item.name, e.target.value)
                          }
                          disabled={!item.check}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>

          {/*   مالیات و سایر موارد  */}
          <li className="list-group-item ">
            <h3 className="text-center mt-2 mb-4">دیگر</h3>
            <div className="row  mb-3 ">
              <div className="col-md-4 form-group">
                <div className=" d-flex">
                  <label
                    htmlFor="customerName"
                    className="mb-2 ms-3"
                    style={{
                      marginTop: '5px',
                    }}
                  >
                    ورودی
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="customerName"
                    placeholder=" ورودی"
                    style={{ width: '40%' }}
                    value={bill.enterance}
                    onChange={(e) =>
                      setBill({ ...bill, enterance: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-md-4 form-group ">
                <div className=" d-flex">
                  <label
                    htmlFor="customerName"
                    className="mb-2 ms-3"
                    style={{
                      marginTop: '5px',
                    }}
                  >
                    تخفیف
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="customerName"
                    placeholder=" تخفیف"
                    style={{ width: '40%' }}
                    value={bill.discount}
                    onChange={(e) =>
                      setBill({ ...bill, discount: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-md-2 form-group">
                <div className="d-flex ">
                  <label
                    htmlFor="customerPartyKind"
                    className="mb-2 mx-3"
                    style={{
                      marginTop: '5px',
                    }}
                  >
                    مالیات
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setBill({ ...bill, taxt: e.target.value })}
                    value={bill.taxt}
                  >
                    <option value={9}>9%</option>
                    <option value={15}>15%</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row  mb-3 ">
              <div className="col-md-4 form-group">
                <div className=" d-flex">
                  <label
                    htmlFor="customerName"
                    className="mb-2 ms-3"
                    style={{
                      marginTop: '5px',
                    }}
                  >
                    پیش &nbsp;&nbsp;
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="customerName"
                    placeholder="پیش پرداخت"
                    style={{ width: '40%' }}
                    value={bill.prePay}
                    onChange={(e) =>
                      setBill({ ...bill, prePay: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-md-4 form-group">
                <label
                  className="form-check-label text-muted fw-bold"
                  htmlFor="full"
                >
                  تسویه &nbsp;&nbsp;&nbsp;
                </label>
                <input
                  className="form-check-input mx-2"
                  style={{ marginTop: '5px' }}
                  type="checkbox"
                  name="full"
                  value={bill.full}
                  id="full"
                  checked={bill.full}
                  onChange={(e) => setBill({ ...bill, full: !bill.full })}
                />
              </div>
              <div className="col-md-4 form-group ">
                <div className="d-flex">
                  <label htmlFor="customerdate" className="mb-2 ms-2">
                    تاریخ دریافت
                  </label>
                  <div>
                    {!pime.fa ? (
                      <>
                        <Calender setTime={setPime} />
                      </>
                    ) : (
                      <>
                        <button
                          onClick={showClickHandlerPime}
                          style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                          }}
                        >
                          {' '}
                          <i className="bi bi-calendar"></i>
                        </button>
                        <b className="mx-3"> {pime.fa}</b>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-3 ml-5">
              <input
                type="text"
                className="form-control "
                id="customerName"
                placeholder=" توضیحات"
                style={{ width: '90%', height: '60px', fontWeight: 'bold' }}
                value={bill.description}
                onChange={(e) =>
                  setBill({ ...bill, description: e.target.value })
                }
              />
            </div>
          </li>

          {/* چاپ قرارداد برای مشتری و تالار */}
          <li className="list-group-item">
            <div className="text-center align-items-center justify-content-center my-3">
              <button className="btn btn-primary" onClick={fomrClickHandler}>
                {' '}
                چاپ قرارداد{' '}
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}
