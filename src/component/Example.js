import ReactToPrint from 'react-to-print';
import React from 'react';
import logo from '../image/royal.png';
class ComponentToPrint extends React.Component {
  render() {
    const data = JSON.parse(localStorage.getItem('normalizedData'));
    const mainFood = data.main;
    const bill = data.bill;
    const extraFood = data.sarriz;
    const pishQaza = data.pishQaza;
    const salonDesign = data.salonDesign;
    const fire = data.finalFire;
    const finalTashrifat = data.finalTashrifat;
    const time = data.time;
    const pish = data.pime;
    const sum = data.overalPrice;
    const remain = sum - Number(bill.prePay);

    return (
      <div className="all-component form-overal mt0">
        <div className="df">
          <div>
            {' '}
            <img
              src={logo}
              alt="logo"
              style={{ width: '150px', marginTop: '-50px' }}
            />
          </div>
          <h2 className="mrzx">بسمه تعالی</h2>

          <div className="mrzpic">
            <img
              src={logo}
              alt="logo"
              style={{ width: '150px', marginTop: '-50px' }}
            />
          </div>
        </div>

        <div className="content  mt-3">
          <p>طرفین قرارداد</p>
          <p>مدیریت تالار قصر رویال(برگزار کننده مراسم )</p>
          <div className="df">
            <p>
              و جناب اقای/سرکار خانم: <b>{bill.name}</b>{' '}
            </p>
            <p className="mr1">
              کد ملی: <b> {bill.id} </b>
            </p>
            <p className="mr1">
              شماره همراه: <b>{bill.phoneNum} </b>
            </p>
          </div>

          <div className="df">
            {bill.phoneCode && (
              <p style={{ marginLeft: '10px' }}>
                تلفن ثابت: <b>{bill.phoneCode}</b>
              </p>
            )}

            <p className="">
              به آدرس : <b>{bill.address}</b>{' '}
            </p>
          </div>

          <div className="df">
            <p>
              که صاحب مراسم نامیده میشود و این مراسم بابت :{' '}
              <b>{bill.partyKind}</b>
            </p>
            <div className="mr0">
              در تاریخ :<b> {time && time}</b>{' '}
            </div>
          </div>

          <p>
            در تالار قصر رویال به تعداد {bill.guestNum} میهمان از ساعت{' '}
            {bill.from} تا ساعت {bill.to} برگزار میگردد.
            {bill.priod === 'بعد از ظهر' ? (
              <></>
            ) : (
              <>
                در ضمن ساعت شام بانوان ساعت{' '}
                {bill.priod === 'شب' ? <>21:30 </> : <>12:30 </>} و شام اقایان
                20 دقیقه بعد سرو میشود.
              </>
            )}
          </p>

          <p>
            در ضمن صاحب مراسم اقای/سرکار خانم: <b>{bill.name}</b> متعهد میگردد
            در صورت خسارت به تالار اعم از کولر, بشقاب, میز و صندلی, سنگ نما و
            تاسیسات و آسیب به میهمان ها اعم از جانی و ... را جبران خسارت کند و
            همچنین در صورت لغو قرارداد ضرر و زیان مراسم به عهده صاحب مراسم
            همچنین قیمت غذا به روز میباشد.{' '}
          </p>

          {mainFood && mainFood.overal > 0 && (
            <>
              {' '}
              <div className="df">
                <p>
                  غذای اصلی : <b> {mainFood.name && mainFood.name}</b>{' '}
                </p>
                <p className="mr1">
                  مبلغ هر پرس غذا همراه نوشابه, برنج و ماست موسیر:{' '}
                  <b>{mainFood.price}</b>ت
                </p>
              </div>
              {mainFood.name === 'جوجه و لقمه' && (
                <>
                  <p>
                    که به تعداد {bill.guestNum / 2} پرس جوجه و به تعداد{' '}
                    {bill.guestNum / 2} پرس لقمه است.{' '}
                  </p>
                </>
              )}
            </>
          )}

          {extraFood && extraFood.length > 0 && <p>سرشکن انتخاب شده :</p>}
          {extraFood &&
            extraFood.map((item) => (
              <div className="df" key={item.id}>
                <p>
                  {' '}
                  نوع غذا: <b>{item.name}</b>{' '}
                </p>
                <p className="mr1">
                  تعداد: <b>{item.number}</b>{' '}
                </p>
                <p className="mr1">
                  مبلغ هر پرس سرشکن :<b> {item.overal}</b> تومان
                </p>
              </div>
            ))}

          <p>تزیینات انتخاب شده برای سالن :</p>
          {pishQaza && pishQaza.length > 0 && (
            <div className="df">
              <p>پیش غذا : </p>
              {pishQaza.map((item, index) => (
                <small className="mrsm" key={index}>
                  {' '}
                  <b> {item.name},</b>
                </small>
              ))}
            </div>
          )}

          {salonDesign && salonDesign.length > 0 && (
            <p>
              تزیینات سالن:
              <small className="mrsm">
                {salonDesign.map((item, index) => (
                  <b key={item.id}> {item.name},</b>
                ))}
                {finalTashrifat &&
                  finalTashrifat.length > 0 &&
                  finalTashrifat.map((xp) => (
                    <b key={xp.id}>
                      {' '}
                      {xp.number} نفر &nbsp;
                      {xp.name},
                    </b>
                  ))}
              </small>
            </p>
          )}

          {fire && fire.length > 0 && (
            <div className="df">
              <p> آتش بازی: </p>

              {fire.map((item, index) => (
                <small className="mrsm" key={index}>
                  {' '}
                  <b> {item.name},</b>
                </small>
              ))}
            </div>
          )}
          {bill.prePay > 0 && (
            <div className="df">
              <p>
                پیش پرداخت:&nbsp;&nbsp;&nbsp; <b>{bill.prePay} </b> تومان
              </p>
              <p className="mr6">
                تاریخ رسید: <b>{pish} </b>
              </p>
            </div>
          )}

          <div className="df">
            <p className="">
              {' '}
              ورودی:
              {bill.enterance > 0 ? (
                <>
                  <b> {bill.enterance}</b> تومان
                </>
              ) : (
                <> ندارد </>
              )}
            </p>

            {bill.discount > 0 && (
              <p className="mr6">
                {' '}
                تخفیف: &nbsp;&nbsp;&nbsp; <b>{bill.discount}</b> تومان
              </p>
            )}
            <p className="mr6">
              {' '}
              مالیات: &nbsp;&nbsp;&nbsp; <b>9%</b>
            </p>
          </div>
          <p>
            {' '}
            مبلغ نهایی :<b> {sum} </b>
            تومان
          </p>
          <p>
            توضیحات: {bill.description}.
            {bill.full ? (
              <>
                مانده حساب مبلغ <b>{remain}</b> تومان است که کل مبلغ تسویه کامل
                شده است .{' '}
              </>
            ) : (
              <>
                مانده حساب مبلغ <b>{remain}</b> تومان است
              </>
            )}
          </p>

          <div className="df mtz">
            <p> امضاء مدیر تالار </p>
            <p className="mr4"> امضاء صاحب مراسم</p>
          </div>
        </div>
      </div>
    );
  }
}

class ComponentToPrintSalon extends React.Component {
  render() {
    const data = JSON.parse(localStorage.getItem('normalizedData'));

    const mainFood = data.main;
    const bill = data.bill;
    const extraFood = data.sarriz;
    const pishQaza = data.pishQaza;
    const salonDesign = data.salonDesign;
    const fire = data.finalFire;
    const finalTashrifat = data.finalTashrifat;
    const time = data.time;
    const pish = data.pime;
    const sum = data.overalPrice;
    const remain = sum - bill.prePay;
    return (
      <div className="all-component form-overal mt0">
        <div className="df">
          <div>
            {' '}
            <img
              src={logo}
              alt="logo"
              style={{ width: '150px', marginTop: '-50px' }}
            />
          </div>
          <h2 className="mrz">بسمه تعالا</h2>

          <div className="mrz">
            <img
              src={logo}
              alt="logo"
              style={{ width: '150px', marginTop: '-50px' }}
            />
          </div>
        </div>

        <div className="content  mt-3">
          <div className="df">
            <p>
              مراسم اقای/سرکار خانم: <b>{bill.name}</b>{' '}
            </p>
            <p className="mr1">
              کد ملی: <b> {bill.id} </b>
            </p>
            <p className="mr1">
              شماره همراه: <b>{bill.phoneNum} </b>
            </p>
          </div>

          <div className="df">
            {bill.phoneCode && (
              <p style={{ marginLeft: '10px' }}>
                تلفن ثابت : <b>{bill.phoneCode} </b>
              </p>
            )}
            <p className="">
              به آدرس : <b>{bill.address}</b>{' '}
            </p>
          </div>

          <div className="df">
            <p>
              نوع مراسم : <b>{bill.partyKind}</b>
            </p>
            <div className="mr0">
              در تاریخ :<b> {time && time}</b>{' '}
            </div>
            <div className="mr0">
              تعداد میهمان :<b> {bill.guestNum}</b>{' '}
            </div>
          </div>

          <div className="df">
            <p>
              نوبت مراسم : <b>{bill.priod}</b>
            </p>
            <div className="mr0">
              از ساعت :<b> {bill.from}</b>{' '}
            </div>
            <div className="mr0">
              تا ساعت :<b> {bill.to}</b>{' '}
            </div>
          </div>

          {mainFood && (
            <div className="df">
              <p>
                غذای اصلی : <b> {mainFood.name && mainFood.name}</b>{' '}
              </p>
              <p className="mrxt">
                مبلغ هر پرس : <b>{mainFood.price}</b> ت
              </p>
              <p className="mrxt">
                مجموع :{' '}
                <b>
                  {mainFood.price} * {bill.guestNum} ={' '}
                  {mainFood.price * bill.guestNum}
                </b>{' '}
                ت
              </p>
            </div>
          )}

          {extraFood && extraFood.length > 0 && (
            <h6 className="">سرشکن انتخاب شده </h6>
          )}
          <div className="msc">
            {extraFood &&
              extraFood.length > 0 &&
              extraFood.map((item) => (
                <div className="df" key={item.id}>
                  <p>
                    {' '}
                    نوع غذا: <b>{item.name}</b>{' '}
                  </p>
                  <p className="mr1">
                    تعداد: <b>{item.number}</b>{' '}
                  </p>
                  <p className="mr1">
                    مبلغ هر پرس :<b> {item.overal}</b> ت
                  </p>
                  <p className="mr1">
                    مجموع:<b> {item.price}</b> ت
                  </p>
                </div>
              ))}
          </div>
          <h6 className=" ">آپشن های انتخاب شده برای سالن :</h6>
          <div className="msc">
            {pishQaza && pishQaza.length > 0 && (
              <>
                {' '}
                <h6 className="">پیش غذا : </h6>
                {pishQaza.map(
                  (item, index) =>
                    item.type === 'food' && (
                      <i className="md" key={item.id}>
                        {index === 2 && <p></p>}
                        {index === 4 && <p></p>}
                        {index === 6 && <p></p>}
                        {index + 1}- <b> {item.name}( </b>
                        تعداد : <b>{item.number},</b>
                        مجموع : <b>{item.price} ت </b> )
                      </i>
                    )
                )}
              </>
            )}

            {salonDesign && salonDesign.length > 0 && (
              <>
                {' '}
                <h6 className="mtx">تزیینات سالن: </h6>
                <p>
                  {salonDesign.map((item, index) => (
                    <i className="mrsm" key={item.id}>
                      {' '}
                      {index === 3 && <br />}
                      {index === 6 && <br />}
                      {index + 1}-
                      <b>
                        ({item.name}, {item.price} ت )
                      </b>
                    </i>
                  ))}
                </p>
              </>
            )}
          </div>

          {finalTashrifat && finalTashrifat.length > 0 && (
            <>
              <h6 className="mtx">تشریفات:</h6>
              <p>
                {finalTashrifat.map(
                  (item, index) =>
                    item.type === 'number' && (
                      <i className="mrsm" key={item.id}>
                        {' '}
                        {index + 1}-
                        <b>
                          ({item.name}, تعداد : {item.number}, مجموع :
                          {item.price} ت )
                        </b>
                      </i>
                    )
                )}
              </p>
            </>
          )}

          {fire && fire.length > 0 && (
            <>
              <h6 className="mtx">آتش بازی:</h6>
              <p>
                {fire.map((item, index) => (
                  <i className="mrsm" key={item.id}>
                    {' '}
                    {index === 3 && <br />}
                    {index === 6 && <br />}
                    {index + 1}-
                    <b>
                      ( {item.name}, {item.price}ت )
                    </b>
                  </i>
                ))}
              </p>
            </>
          )}

          {/* accounting part */}
          <div className="df">
            <p>
              پیش پرداخت: &nbsp;&nbsp;
              {bill.prePay > 0 ? (
                <>
                  <b>{bill.prePay} </b> تومان
                </>
              ) : (
                <b> 0 </b>
              )}
              تومان
            </p>
            <p className="mr6">
              {' '}
              تاریخ رسید : <b>{pish}</b>
            </p>
          </div>
          <div className="df">
            <p className="">
              {' '}
              ورودی:
              {bill.enterance > 0 ? (
                <>
                  <b> {bill.enterance}</b> تومان
                </>
              ) : (
                <> ندارد </>
              )}
            </p>
            {bill.discount > 0 && (
              <p className="mr6">
                {' '}
                تخفیف:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                <b>{bill.discount}</b> تومان
              </p>
            )}
            <p className="mr6">
              {' '}
              مالیات:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
              <b>{bill.taxt}%</b>
            </p>
          </div>
          <p>
            {' '}
            مبلغ نهایی :<b> {sum} </b>
            تومان
          </p>
          <p>
            توضیحات: {bill.description}.
            {bill.full ? (
              <>
                مانده حساب مبلغ <b>{remain}</b> تومان است که کل مبلغ تسویه کامل
                شده است .{' '}
              </>
            ) : (
              <>
                باقی مانده ی حساب مبلغ <b>{remain}</b> تومان است
              </>
            )}
          </p>
        </div>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <>
        <ComponentToPrintSalon ref={(sal) => (this.componentRefi = sal)} />
        <div className="text-center my-3">
          <ReactToPrint
            trigger={() => (
              <button style={{ width: '150px' }} className="btn btn-primary">
                SALON PRINT!
              </button>
            )}
            content={() => this.componentRefi}
          />
          <button
            className="btn btn-dark mx-5"
            style={{ width: '150px' }}
            onClick={() => window.history.back()}
          >
            back
          </button>
          <br />
          <br />
          <hr />

          <br />
        </div>
        <div>
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
          <div className="text-center my-3">
            <ReactToPrint
              trigger={() => (
                <button style={{ width: '180px' }} className="btn btn-primary">
                  CUSTOMER PRINT!
                </button>
              )}
              content={() => this.componentRef}
            />
            <button
              className="btn btn-dark mx-5"
              style={{ width: '150px' }}
              onClick={() => window.history.back()}
            >
              back
            </button>
            <br />
            <br />
            <hr />

            <br />
          </div>
        </div>
      </>
    );
  }
}
export default Example;
