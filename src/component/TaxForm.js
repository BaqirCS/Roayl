import React, { useState } from 'react';
import Calender from './Calender';
import { extraFood } from './taxData';
import { mainFood } from './data';
import { foodItems } from './taxData';
import { useNavigate } from 'react-router-dom';
import { ownerInfo } from './taxData';
export default function TaxForm() {
  const navigate = useNavigate();
  const [time, setTime] = useState({ fa: '' });
  const [owner] = useState(ownerInfo);
  const [method, setMethod] = useState('cash');
  const [num, setNum] = useState(1);

  const [doc, setDoc] = useState({
    number: '',
    date: '',
    amount: '',
  });
  const [docList, setDocList] = useState([]);
  const [eco, setEco] = useState({
    check: false,
    price: 0,
    name: 'اکو موزیک و صوت و خواننده آوا',
  });
  const [bill, setBill] = useState({
    name: '',
    id: '',
    phoneCode: '',
    phoneNum: 0,
    address: '',
    partyKind: 'عروسی',
    guestNum: 0,
  });
  const [extra, setExtra] = useState(extraFood);
  const [main, setMain] = useState(mainFood);
  const [maiFood, setMaiFood] = useState('');
  const [items, setItems] = useState(foodItems);
  let finalExt;

  const documentClickHandler = (e) => {
    e.preventDefault();
    if (!doc.number) {
      return;
    }
    if (!doc.date) {
      return;
    }
    if (!doc.amount) {
      return;
    }
    setDocList([...docList, doc]);
    setDoc({
      number: '',
      date: '',
      amount: '',
    });
  };

  const showClickHandler = () => {
    setTime({ fa: '' });
  };

  const changeListener = (name) => {
    const newItems = extra.map((item) => {
      if (item.name === name) {
        item.check = !item.check;
      }
      return item;
    });
    setExtra(newItems);
  };
  const changeListenerItemFood = (name) => {
    const newItems = items.map((item) => {
      if (item.name === name) {
        item.check = !item.check;
      }
      return item;
    });
    setItems(newItems);
  };

  const itemChangeListener = (name, value) => {
    const newItems = extra.map((item) => {
      if (item.name === name) {
        item.number = value;
      }
      return item;
    });
    setExtra(newItems);
  };

  const itemChangeListenerFood = (name, value) => {
    const newItems = items.map((item) => {
      if (item.name === name) {
        item.number = value;
      }
      return item;
    });
    setItems(newItems);
  };

  const itemChangeListenerFoodPrice = (name, value) => {
    const newItems = items.map((item) => {
      if (item.name === name) {
        item.overal = value;
      }
      return item;
    });
    setItems(newItems);
  };

  const itemChangeListenerPrice = (name, price) => {
    const newItems = extra.map((item) => {
      if (item.name === name) {
        item.overal = price;
      }
      return item;
    });
    setExtra(newItems);
  };

  const mainFoodChangeListener = (name, price) => {
    const newItems = main.map((item) => {
      if (item.name === name) {
        item.price = price;
      }
      return item;
    });
    setMain(newItems);
  };
  const fomrClickHandler = (e) => {
    e.preventDefault();

    //error part to show to customer;
    // eslint-disable-next-line
    if (!maiFood || bill.guestNum == 0) {
      return console.log('no no no');
    }

    const mfnv = { name: '', price: 0, overal: 0 };
    main.map((item) => {
      if (item.name === maiFood) {
        mfnv.name = item.name;
        mfnv.overal = item.price;
        mfnv.price = item.price * bill.guestNum;
      }
      return item;
    });

    //calculate the price of main food
    let sum = mfnv.price;

    //bring all the options which are checked to one array
    // eslint-disable-next-line
    finalExt = items.filter((item) => {
      if (item.check === true) {
        item.price = item.overal * item.number;
        return item;
      }
    });

    //calculate option cost
    if (finalExt) {
      finalExt.map((item) => {
        sum += item.price;
        return item;
      });
    }

    //bring all the extra food cost
    // eslint-disable-next-line
    let extFood = extra.filter((item) => {
      if (item.check) {
        item.price = item.overal * item.number;
        return item;
      }
    });

    if (extFood) {
      extFood.map((item) => {
        sum += item.price;
        return item;
      });
    }

    // time of party
    const y = time.fa;
    const x = {
      finalExt: finalExt,
      owner: owner,
      main: mfnv,
      extra: extFood,
      bill,
      date: y,
      eco: eco,
      total: sum,
      methodOfPay: method,
      documentList: docList,
    };

    localStorage.setItem('taxLocalData', JSON.stringify(x));
    navigate('/printTax');
  };

  return (
    <div className="container my-2  ">
      <h1 className="text-center mt-4 mb-5 ">قرارداد مراسم قصر رویال </h1>
      <form className="form-overal mb-5">
        <ul className="list-group">
          {/* مشخصات صاحب مجموععه */}
          <li className="list-group-item">
            <h3 className="text-center mb-3 text-muted">مشخصات صاحب مجموعه </h3>
            <div className="row  justify-content-center">
              <div className="col-md-4 form-group">
                <label htmlFor="ownerName" className=" mb-2 ms-2">
                  نام شخص حقیقی/حقوقی
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="ownerName"
                  placeholder=" نام شخص حقیقی/حقوقی"
                  value={owner.name}
                  //   onChange={(e) => setOwner({ ...owner  , name: e.target.value })}
                  disabled
                />
              </div>

              <div className="col-md-4 form-group">
                <label htmlFor="ownerRegisterCode" className="mb-2 ms-2">
                  شماره اقتصادی/شماره ملی
                </label>

                <input
                  type="text"
                  className="form-control "
                  id="ownerRegisterCode"
                  placeholder=" شماره ثبت/شماره ملی "
                  value={owner.registrationNumber}
                  disabled
                  //   onChange={(e) => setBill({ ...bill, id: e.target.value })}
                />
              </div>
            </div>
            <div className="row  justify-content-center mt-3">
              <div className="col-md-4 form-group ">
                <label htmlFor="ownerProvince" className="mb-2 ms-2">
                  استان
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="ownerProvince"
                  placeholder="استان"
                  value={owner.province}
                  //   onChange={(e) =>
                  //     setBill({ ...bill, phoneNum: e.target.value })
                  //   }
                  disabled
                />
              </div>
              <div className="col-md-4 form-group">
                <label htmlFor="ownerDistrict" className="mb-2 ms-2">
                  شهرستان
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="ownerDistrict"
                  placeholder="شهرستان"
                  value={owner.district}
                  //   onChange={(e) =>
                  //     setBill({ ...bill, address: e.target.value })
                  //   }
                  disabled
                />
              </div>
            </div>
            <div className="row  justify-content-center mt-3">
              <div className="col-md-4 form-group">
                <label htmlFor="ownerAdd" className="mb-2 ms-2">
                  نشانی کامل
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="ownerAdd"
                  placeholder="نشانی کامل"
                  value={owner.add}
                  //   onChange={(e) =>
                  //     setBill({ ...bill, phoneCode: e.target.value })
                  //   }
                  disabled
                />
              </div>

              <div className="col-md-4 form-group">
                <label htmlFor="ownerPostalCode" className="mb-2 ms-2">
                  کد پستی
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="ownerPostalCode"
                  placeholder="کد پستی"
                  value={owner.postalCode}
                  //   onChange={(e) =>
                  //     setBill({ ...bill, address: e.target.value })
                  //   }
                  disabled
                />
              </div>
            </div>
            <div className="row  justify-content-center mt-3 mb-3">
              <div className="col-md-4 form-group">
                <label htmlFor="ownerPhoneNumber" className="mb-2 ms-2">
                  شماره تماس
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="ownerPhoneNumber"
                  placeholder=" شماره تماس"
                  value={owner.phoneNumber}
                  //   onChange={(e) =>
                  //     setBill({ ...bill, guestNum: e.target.value })
                  //   }
                  disabled
                />
              </div>

              <div className="col-md-4 form-group"></div>
            </div>
          </li>

          {/* مشخصات مشتری  */}
          <li className="list-group-item">
            <h3 className="text-center mb-3 text-muted">
              مشخصات میزبان مراسم{' '}
            </h3>
            <div className="row  justify-content-center">
              <div className="col-md-4 form-group">
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
            <div className="row  justify-content-center mt-3">
              <div className="col-md-4 form-group">
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
            <div className="row  justify-content-center mt-3">
              <div className="col-md-4 form-group">
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
                </select>
              </div>
            </div>
            <div className="row  justify-content-center mt-3 mb-3">
              <div className="col-md-4 form-group">
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
                            {index + 1}-{foodi.name}
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
                            {index + 1}-{foodi.name}
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
                            {index + 1}-{foodi.name}
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

          {/* بخش اکو و میوزیک و بقیه موارد */}
          <li className="list-group-item">
            <h3 className="text-center mt-2"> تزیینات سالن </h3>
            <div className="row my-3 ml-5">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-5 my-2 ">
                    <div className="form-check">
                      <div className="">
                        <label
                          className="form-check-label text-muted fw-bold"
                          htmlFor="EcoId"
                        >
                          رقص نور و موزیک
                        </label>
                        <input
                          className="form-check-input mx-2"
                          style={{ marginTop: '5px' }}
                          type="checkbox"
                          value="eco"
                          id="EcoId"
                          checked={eco.check}
                          onChange={(e) =>
                            setEco({ ...eco, check: !eco.check })
                          }
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
                        htmlFor={'ecoMusic'}
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
                        id="ecoMusic"
                        placeholder={'قیمت اکو'}
                        style={{ width: '200px' }}
                        value={eco.check ? eco.price : 0}
                        onChange={(e) =>
                          setEco({ ...eco, price: e.target.value })
                        }
                        disabled={!eco.check}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* بخش انتخاب نحوه ی پرداخت */}
          <li className="list-group-item">
            <h3 className="text-center" style={{ marginBottom: '30px' }}>
              {' '}
              نحوه ی پرداخت{' '}
            </h3>

            <div className="row mt-3">
              <div className="col-md-2">
                <label
                  className="form-check-label text-muted fw-bold"
                  htmlFor="method"
                  style={{ marginLeft: '20px', marginTop: '5px' }}
                >
                  نقدی
                </label>
                <input
                  className="form-check-input mx-2"
                  style={{ marginTop: '10px' }}
                  type="radio"
                  name="method"
                  value="cash"
                  id="method"
                  checked={method === 'cash'}
                  onChange={(e) => setMethod(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <label
                  className="form-check-label text-muted fw-bold"
                  htmlFor="document"
                  style={{ marginLeft: '10px', marginTop: '5px' }}
                >
                  اسناد دریافتی
                </label>
                <input
                  className="form-check-input mx-2"
                  style={{ marginTop: '10px' }}
                  type="radio"
                  name="method"
                  value="document"
                  id="document"
                  checked={method === 'document'}
                  onChange={(e) => setMethod(e.target.value)}
                />
              </div>
              <div className=" col-md-3 d-flex">
                <label
                  htmlFor="documentNumber"
                  className="text-muted fw-bold"
                  style={{ marginLeft: '20px', marginTop: '5px' }}
                >
                  تعداد چک
                </label>

                <input
                  type="number"
                  className="form-control "
                  id={'documentNumber'}
                  placeholder={'تعداد چک'}
                  style={{ width: '100px' }}
                  value={method === 'document' ? num : 0}
                  onChange={(e) => setNum(e.target.value)}
                  disabled={method !== 'document'}
                />
              </div>
            </div>

            {num > 0 && method === 'document' && (
              <>
                <div className="row my-3">
                  <div className="col-md-3 d-flex">
                    <label
                      htmlFor="docNumberOne"
                      className="text-muted fw-bold"
                      style={{ marginTop: '5px', marginLeft: '20px' }}
                    >
                      شماره
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="docNumberOne"
                      style={{ width: '150px' }}
                      placeholder=" شماره چک "
                      value={doc.number}
                      onChange={(e) =>
                        setDoc({ ...doc, number: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-3 d-flex">
                    <label
                      htmlFor="docDateOne"
                      className="text-muted fw-bold"
                      style={{ marginTop: '5px', marginLeft: '20px' }}
                    >
                      تاریخ
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="docDateOne"
                      style={{ width: '150px' }}
                      placeholder=" سال-ماه-روز"
                      value={doc.date}
                      onChange={(e) => setDoc({ ...doc, date: e.target.value })}
                    />
                  </div>
                  <div className="col-md-3 d-flex">
                    <label
                      htmlFor="docAmountOne"
                      className="text-muted fw-bold"
                      style={{ marginTop: '5px', marginLeft: '20px' }}
                    >
                      مبلغ
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="docAmountOne"
                      style={{ width: '150px' }}
                      placeholder="  مبلغ چک به تومان "
                      value={doc.amount}
                      onChange={(e) =>
                        setDoc({ ...doc, amount: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-info fw-bold"
                      onClick={documentClickHandler}
                    >
                      ذخیره اطلاعات چک
                    </button>
                  </div>
                </div>
              </>
            )}
            {docList.length > 0 &&
              docList.map((item, index) => (
                <p key={index} className="lead my-3">
                  {index + 1}- شماره چک :{' '}
                  <b style={{ marginLeft: '30px' }}> {item.number} </b> به تاریخ
                  : <b style={{ marginLeft: '30px' }}> {item.date} </b> به مبلغ
                  : <b style={{ marginLeft: '30px' }}>{item.amount} </b>
                </p>
              ))}
          </li>

          {/* چاپ قرارداد برای مشتری و تالار */}
          <li className="list-group-item">
            <div className="text-center align-items-center justify-content-center my-3">
              <button className="btn btn-primary" onClick={fomrClickHandler}>
                {' '}
                چاپ برگه ی مالیاتی{' '}
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}
