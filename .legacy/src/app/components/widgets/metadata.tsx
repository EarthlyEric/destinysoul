export default function Meta(Props: { title: string ,description : string }) {
    return (
        <div>
            <title>{Props.title}</title>
            <meta name="description" content={Props.description}/>
            <meta name="author" content="EarthlyEric6 & DestinySoul Studio"/>
            <meta property="og:title" content={Props.title}></meta>
            <meta property="og:description" content={Props.description}/>
            <meta property="og:image" content="https://destinysoul.xyz/resources/img/logo.png"/>
            <meta property="og:url" content="https://destinysoul.xyz/"/>
            <meta property="og:site_name" content="DestinySoul Studio"/>
            <meta property="og:type" content="website"></meta>
        </div>
    );
  }