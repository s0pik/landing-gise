import React from "react";
import Header from "./UI/header";
import Hero from "./UI/Hero";
import Form from "./UI/Form";
import EntryContent from "./UI/EntryContent";
import BlogEntry from "./UI/BlogEntry";
import Card from "./UI/Card";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <Hero />
        <Form />
        <EntryContent
          title="Propuesta"
          text="Odio ut sem nulla pharetra diam sit. Lectus quam id leo in vitae. Lorem
        mollis aliquam ut porttitor leo a. Ultricies mi quis hendrerit dolor.
        Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
        Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
        Congue quisque egestas diam in. Amet co"
        />
        <BlogEntry
          imgUrl="https://image.freepik.com/fotos-gratis/psicologa-feminina-amigavel-permanente-em-seu-escritorio-com-prancheta-e-lapis_23-2148026256.jpg"
          imagePosition="left"
          title="Entrada blog"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam
        pellentesque nec nam aliquam sem et tortor. Lacus viverra vitae congue
        eu consequat ac. Dui sapien eget mi proin sed libero enim sed faucibus.
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat.
        Orci sagittis eu volutpat odio facilisis mauris. Ut ornare lectus sit
        amet. Vestibulum morbi blandit cursus risus. Egestas dui id ornare arcu
        odio ut sem nulla. Magna fringilla urna porttitor rhoncus dolor purus
        non enim. Donec adipiscing tristique risus nec feugiat in. Elementum
        nisi quis eleifend quam. Habitasse platea dictumst vestibulum rhoncus
        est pellentesque. In eu mi bibendum neque egestas congue. Odio ut sem
        nulla pharetra diam sit. Lectus quam id leo in vitae. Lorem mollis
        aliquam ut porttitor leo a. Ultricies mi quis hendrerit dolor. Nec
        tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
        Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
        Congue quisque egestas diam in. Amet consectetur adipiscing elit duis
        tristique. Adipiscing elit pellentesque habitant morbi tristique
        senectus. Egestas egestas fringilla phasellus faucibus scelerisque.
        Ultrices vitae auctor eu augue ut lectus arcu. Ornare arcu odio ut sem
        nulla pharetra. Urna id volutpat lacus laoreet non. Quis hendrerit dolor
        magna eget. Risus ultricies tristique nulla aliquet enim tortor. Mus
        mauris vitae ultricies leo integer malesuada nunc vel risus. Amet
        volutpat consequat mauris nunc congue."
        />
        <BlogEntry
          imgUrl="https://image.freepik.com/fotos-gratis/psicologa-feminina-amigavel-permanente-em-seu-escritorio-com-prancheta-e-lapis_23-2148026256.jpg"
          imagePosition="right"
          title="Entrada blog"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam
        pellentesque nec nam aliquam sem et tortor. Lacus viverra vitae congue
        eu consequat ac. Dui sapien eget mi proin sed libero enim sed faucibus.
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat.
        Orci sagittis eu volutpat odio facilisis mauris. Ut ornare lectus sit
        amet. Vestibulum morbi blandit cursus risus. Egestas dui id ornare arcu
        odio ut sem nulla. Magna fringilla urna porttitor rhoncus dolor purus
        non enim. Donec adipiscing tristique risus nec feugiat in. Elementum
        nisi quis eleifend quam. Habitasse platea dictumst vestibulum rhoncus
        est pellentesque. In eu mi bibendum neque egestas congue. Odio ut sem
        nulla pharetra diam sit. Lectus quam id leo in vitae. Lorem mollis
        aliquam ut porttitor leo a. Ultricies mi quis hendrerit dolor. Nec
        tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
        Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
        Congue quisque egestas diam in. Amet consectetur adipiscing elit duis
        tristique. Adipiscing elit pellentesque habitant morbi tristique
        senectus. Egestas egestas fringilla phasellus faucibus scelerisque.
        Ultrices vitae auctor eu augue ut lectus arcu. Ornare arcu odio ut sem
        nulla pharetra. Urna id volutpat lacus laoreet non. Quis hendrerit dolor
        magna eget. Risus ultricies tristique nulla aliquet enim tortor. Mus
        mauris vitae ultricies leo integer malesuada nunc vel risus. Amet
        volutpat consequat mauris nunc congue."
        />
        <BlogEntry
          imgUrl="https://image.freepik.com/fotos-gratis/psicologa-feminina-amigavel-permanente-em-seu-escritorio-com-prancheta-e-lapis_23-2148026256.jpg"
          imagePosition="left"
          title="Entrada blog"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam
        pellentesque nec nam aliquam sem et tortor. Lacus viverra vitae congue
        eu consequat ac. Dui sapien eget mi proin sed libero enim sed faucibus.
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat.
        Orci sagittis eu volutpat odio facilisis mauris. Ut ornare lectus sit
        amet. Vestibulum morbi blandit cursus risus. Egestas dui id ornare arcu
        odio ut sem nulla. Magna fringilla urna porttitor rhoncus dolor purus
        non enim. Donec adipiscing tristique risus nec feugiat in. Elementum
        nisi quis eleifend quam. Habitasse platea dictumst vestibulum rhoncus
        est pellentesque. In eu mi bibendum neque egestas congue. Odio ut sem
        nulla pharetra diam sit. Lectus quam id leo in vitae. Lorem mollis
        aliquam ut porttitor leo a. Ultricies mi quis hendrerit dolor. Nec
        tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
        Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
        Congue quisque egestas diam in. Amet consectetur adipiscing elit duis
        tristique. Adipiscing elit pellentesque habitant morbi tristique
        senectus. Egestas egestas fringilla phasellus faucibus scelerisque.
        Ultrices vitae auctor eu augue ut lectus arcu. Ornare arcu odio ut sem
        nulla pharetra. Urna id volutpat lacus laoreet non. Quis hendrerit dolor
        magna eget. Risus ultricies tristique nulla aliquet enim tortor. Mus
        mauris vitae ultricies leo integer malesuada nunc vel risus. Amet
        volutpat consequat mauris nunc congue."
        />
        <BlogEntry
          imgUrl="https://image.freepik.com/fotos-gratis/psicologa-feminina-amigavel-permanente-em-seu-escritorio-com-prancheta-e-lapis_23-2148026256.jpg"
          imagePosition="right"
          title="Entrada blog"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam
        pellentesque nec nam aliquam sem et tortor. Lacus viverra vitae congue
        eu consequat ac. Dui sapien eget mi proin sed libero enim sed faucibus.
        Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat.
        Orci sagittis eu volutpat odio facilisis mauris. Ut ornare lectus sit
        amet. Vestibulum morbi blandit cursus risus. Egestas dui id ornare arcu
        odio ut sem nulla. Magna fringilla urna porttitor rhoncus dolor purus
        non enim. Donec adipiscing tristique risus nec feugiat in. Elementum
        nisi quis eleifend quam. Habitasse platea dictumst vestibulum rhoncus
        est pellentesque. In eu mi bibendum neque egestas congue. Odio ut sem
        nulla pharetra diam sit. Lectus quam id leo in vitae. Lorem mollis
        aliquam ut porttitor leo a. Ultricies mi quis hendrerit dolor. Nec
        tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
        Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
        Congue quisque egestas diam in. Amet consectetur adipiscing elit duis
        tristique. Adipiscing elit pellentesque habitant morbi tristique
        senectus. Egestas egestas fringilla phasellus faucibus scelerisque.
        Ultrices vitae auctor eu augue ut lectus arcu. Ornare arcu odio ut sem
        nulla pharetra. Urna id volutpat lacus laoreet non. Quis hendrerit dolor
        magna eget. Risus ultricies tristique nulla aliquet enim tortor. Mus
        mauris vitae ultricies leo integer malesuada nunc vel risus. Amet
        volutpat consequat mauris nunc congue."
        />

        <div className={styles.card}>
          <Card
            imgUrl="https://thumbs.dreamstime.com/b/libros-abiertos-y-cerrados-32102334.jpg"
            subtitle="fecha y autor"
            title="test"
            text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Lacus viverra vitae"
            url="link seguir leyendo"
          />
          <Card
            imgUrl="https://www.freejpg.com.ar/asset/900/62/6205/F100009254.jpg"
            subtitle="fecha y autor"
            title="test2"
            text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Lacus viverra vitae"
            url="link seguir leyendo"
          />
          <Card
            imgUrl="https://st3.depositphotos.com/1000133/18124/i/950/depositphotos_181241902-stock-photo-opened-books.jpg"
            subtitle="fecha y autor"
            title="test3"
            text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Lacus viverra vitae"
            url="link seguir leyendo"
          />
        </div>
        <EntryContent
          title="Sumate a nuestra comunidad"
          text="Odio ut sem nulla pharetra diam sit. Lectus quam id leo in vitae. Lorem
        mollis aliquam ut porttitor leo a. Ultricies mi quis hendrerit dolor.
        Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
        Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
        Congue quisque egestas diam in. Amet co"
        />
        <Form />
      </main>
    </div>
  );
}

export default App;
