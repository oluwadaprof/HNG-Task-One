import "./btnlink.scss";

const BtnDetails = [
  {
    id: "tweet_link",
    btn_name: "Twitter Link",
    url: "https://twitter.com/oluwadaprof",
  },
  {
    id: "btn_zuri",
    btn_name: "Zuri Team",
    url: "https://training.zuri.team/",
  },
  {
    id: "books",
    btn_name: "Zuri Books",
    url: "http://books.zuri.team/",
  },
  {
    id: "book_python",
    btn_name: "Python Books",
    url: "https://books.zuri.team/python-for-beginners?ref_id=Pandora",
  },
  {
    id: "pitch",
    btn_name: "Background Checks For Coders",
    url: "https://books.zuri.team/design-rules",
  },
  {
    id: "book_design",
    btn_name: "Design Books",
    url: "https://books.zuri.team/design-rules",
  },
];

const btn = BtnDetails.map((btndetail) => (
  <a href={btndetail.url}>
    <button key={btndetail.id} className="btn" id={btndetail.id}>
      {btndetail.btn_name}
    </button>
  </a>
));

const BtnLink = () => {
  return <div className="btn__group">{btn}</div>;
};

export default BtnLink;
