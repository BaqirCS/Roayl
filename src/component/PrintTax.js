import ReactToPrint from 'react-to-print';
import React from 'react';

class ComponentToPrintTax extends React.Component {
  render() {
    const data = JSON.parse(localStorage.getItem('taxLocalData'));
    const items = data.finalExt;
    const mainFood = data.main;
    const extraFood = data.extra;
    const owner = data.owner;
    const bill = data.bill;
    const time = data.date;
    const ecoMusic = data.eco;
    const total = data.total;
    const methodOfPay = data.methodOfPay;
    const documentList = data.documentList;
    return (
      <div className="all-component form-overal mt0">
        <div className="content  mt-3">
          <div>
            <p
              style={{
                marginTop: '10px',
                marginBottom: '30px',
                marginRight: '250px',
                fontWeight: 'bold',
              }}
            >
              قرارداد مراسم تالار قصر رویال{' '}
            </p>
          </div>
          <div>
            <div
              style={{
                backgroundColor: ' rgba(37, 34, 34, 0.3)',
                marginTop: '10px',
                width: '700px',
              }}
            >
              <h6 style={{ marginRight: '280px', paddingBottom: '5px' }}>
                {' '}
                مشخصات برگزار کننده مراسم{' '}
              </h6>
            </div>
            <div className="df">
              <p>
                نام شخص حقیقی/حقوقی: <b>{owner.name}</b>{' '}
              </p>
              <p className="mrt1">
                شماره ملی: <b> {owner.registrationNumber} </b>
              </p>
            </div>
            <div className="df" style={{ marginTop: '-10px' }}>
              <p className="">
                استان: <b>{owner.province}</b>{' '}
              </p>
              <p className="mrt1">
                شهرستان : <b> {owner.district} </b>
              </p>
            </div>
            <div className="df mtn" style={{ marginTop: '-10px' }}>
              <p className="mrt">
                شماره تماس: <b> {owner.phoneNumber} </b>
              </p>
              <p className="mrt1">
                کد پستی : <b> {owner.postalCode} </b>
              </p>
            </div>
            <div className="df mtn" style={{ marginTop: '-10px' }}>
              <p className="">
                نشانی : <b> {owner.add} </b>
              </p>
            </div>
            <div
              style={{
                backgroundColor: ' rgba(37, 34, 34, 0.3)',
                marginTop: '10px',
                width: '700px',
              }}
            >
              {' '}
              <h6
                className="mtn1"
                style={{ marginRight: '280px', paddingBottom: '5px' }}
              >
                {' '}
                مشخصات میزبان مراسم
              </h6>
            </div>
            <div className="df">
              <p>
                جناب اقای/سرکار خانم: <b>{bill.name}</b>{' '}
              </p>
              <p className="mr1">
                کد ملی: <b> {bill.id} </b>
              </p>
            </div>

            <div className="df" style={{ marginTop: '-10px' }}>
              <p className="">
                آدرس : <b>{bill.address}</b>{' '}
              </p>
              <p className="mr1">
                شماره همراه: <b> {bill.phoneNum} </b>
              </p>
            </div>
            <div className="df" style={{ marginTop: '-10px' }}>
              <p className="">
                نوع مراسم : <b>{bill.partyKind}</b>{' '}
              </p>
              <p className="mr1">
                تاریخ برگزاری مراسم : <b>{time}</b>{' '}
              </p>
            </div>

            <div
              style={{
                backgroundColor: ' rgba(37, 34, 34, 0.3)',
                marginTop: '10px',
                width: '700px',
              }}
            >
              {' '}
              <h6
                className="mtn1"
                style={{ marginRight: '280px', paddingBottom: '5px' }}
              >
                {' '}
                شرح کالا یا خدمات ارائه شده
              </h6>
            </div>

            {mainFood && (
              <div className="df mtn">
                <p>
                  غذای اصلی: <b> {mainFood.name && mainFood.name}</b>{' '}
                </p>
                <small className="mrt1">
                  مبلغ هر پرس غذا همراه نوشابه, برنج و سالاد:{' '}
                  <b>{mainFood.overal} </b>تومان
                </small>
                <p className="mrt1">
                  تعداد: <b> {bill.guestNum}</b> پرس{' '}
                </p>
              </div>
            )}

            {extraFood &&
              extraFood.map((item) => (
                <div
                  className="df mtn"
                  key={item.id}
                  style={{ marginTop: '-10px' }}
                >
                  <p>
                    غذای سرشکن: <b> {item.name}</b>{' '}
                  </p>
                  <p className="mrt1">
                    مبلغ هر پرس سرشکن: <b>{item.overal} </b>تومان
                  </p>
                  <p className="mrt1">
                    تعداد: <b> {item.number} </b> پرس{' '}
                  </p>
                </div>
              ))}
            {items &&
              items.map((item) => (
                <div
                  className="df mtn"
                  key={item.id}
                  style={{ marginTop: '-10px' }}
                >
                  <p>
                    نام پیش غذا: <b> {item.name}</b>{' '}
                  </p>
                  <p className="mrt1">
                    مبلغ هر عدد : <b>{item.overal} </b>تومان
                  </p>
                  <p className="mrt1">
                    تعداد: <b> {item.number}</b> عدد{' '}
                  </p>
                </div>
              ))}
            {ecoMusic.check && (
              <div className="df mtn" style={{ marginTop: '-10px' }}>
                <p>
                  نام آپشن: <b> {ecoMusic.name}</b>{' '}
                </p>
                <p className="mrt1">
                  هزینه کلی آپشن : <b>{ecoMusic.price} </b>تومان
                </p>
              </div>
            )}

            {methodOfPay === 'document' && (
              <>
                <div
                  style={{
                    backgroundColor: ' rgba(37, 34, 34, 0.3)',
                    marginTop: '10px',
                    width: '700px',
                  }}
                >
                  {' '}
                  <h6
                    className="mtn1"
                    style={{ marginRight: '280px', paddingBottom: '5px' }}
                  >
                    {' '}
                    نحوه ی پرداخت
                  </h6>{' '}
                </div>
                <p style={{ marginRight: '2px' }}>
                  اسناد دریافتی:{' '}
                  <b>{documentList.length > 0 ? documentList.length : 1}</b>{' '}
                  فقره چک{' '}
                </p>
                {documentList.length > 0 &&
                  documentList.map((item, index) => (
                    <p key={index} style={{ marginRight: '60px' }}>
                      به شماره :{' '}
                      <b style={{ marginRight: '2px', marginLeft: '10px' }}>
                        {item.number}
                      </b>
                      به تاریخ :{' '}
                      <b style={{ marginRight: '2px', marginLeft: '10px' }}>
                        {item.date}
                      </b>
                      به مقدار :{' '}
                      <b style={{ marginRight: '2px', marginLeft: '10px' }}>
                        {item.amount}
                      </b>
                      تومان
                    </p>
                  ))}
              </>
            )}

            <div
              style={{
                backgroundColor: ' rgba(37, 34, 34, 0.3)',
                marginTop: '10px',
                width: '700px',
              }}
            >
              <h6
                className="mtn1"
                style={{ marginRight: '280px', paddingBottom: '5px' }}
              >
                {' '}
                مجموع حساب
              </h6>
            </div>

            <div className="df mtn">
              <p>
                جمع کل: <b> {total}</b> تومان{' '}
              </p>
            </div>
            <p style={{ marginTop: '-10px' }}>
              مجموع مالیات 9% و عوارض : <b>{(total * 9) / 100} </b>
              تومان
            </p>
            <p style={{ marginTop: '-10px' }}>
              جمع کل به علاوه مالیات و عوارض :{' '}
              <b>{(total * 9) / 100 + total} </b>
              تومان
            </p>
            {methodOfPay === 'cash' && (
              <p style={{ marginTop: '-10px' }}>
                نحوه ی پرداخت : <b>نقدی </b>
              </p>
            )}

            <p>توضیحات</p>
          </div>
          <div className="df mtz" style={{ marginTop: '100px' }}>
            <p> امضاء مدیر تالار </p>
            <p className="mr4"> امضاء صاحب مراسم</p>
          </div>
        </div>
      </div>
    );
  }
}

class PrintTax extends React.Component {
  render() {
    return (
      <>
        <ComponentToPrintTax ref={(bl) => (this.componentRefiq = bl)} />
        <div className="text-center my-3">
          <ReactToPrint
            trigger={() => (
              <button style={{ width: '150px' }} className="btn btn-primary">
                TAX PRINT!
              </button>
            )}
            content={() => this.componentRefiq}
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
      </>
    );
  }
}
export default PrintTax;
