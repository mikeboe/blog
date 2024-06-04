type HeaderProps = {
  image?: string;
};

const Header = ({ image}: HeaderProps) => {
  return (

<div className="sm:px-8 mt-9">
  <div className="mx-auto w-full max-w-7xl lg:px-8">
    <div className="relative px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="max-w-2xl">
          {image ? <img
            className="inline-block h-20 w-20 rounded-full"
            src={image}
            alt=""
          /> : <div className="h-20" />}

        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header;