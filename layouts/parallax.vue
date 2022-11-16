<template>
  <!-- Page Main -->
  <div class="flex flex-col items-center justify-center mt-32">
    <app-navbar />
    <!-- Hero -->
    <section class="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
      <!-- Column-1 -->
      <div class="px-3 w-full lg:w-2/5">
        <div
          class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
        >
          <h1 class="mb-4 text-5xl font-bold text-left">
            Theater
            <span class="text-lime-500">pedia
            </span>
          </h1>
          <h2 class="mb-4 text-3xl font-bold text-left">
            Digitale Vernetzung
            <span class="text-3xl text-lime-500 leading-relaxeds">Theaterpädagogik
            </span>
          </h2>

          <p
            class="visible mx-0 mt-3 mb-0 text-lg  leading-relaxed text-left text-slate-600"
          >
            Zeig Deine Kurse, Workshops und Projekte, mach sie interaktiv und buchbar.
          </p>
        </div>

        <div class="text-center lg:text-left">
          <a
            class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-lime-700 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
          >
            Toolbox Termine</a>

          <a
            class="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
          >
            Webdesign & Theaterpädagogik</a>
        </div>
      </div>

      <!-- Column-2 -->
      <div class="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
        <!-- Illustrations Container -->
        <div class="flex justify-center items-center">
          <svg
            id="YouTube_Icon"
            version="1.1"
            xmlns:x="&ns_extend;"
            xmlns:i="&ns_ai;"
            xmlns:graph="&ns_graphs;"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1024.7 721.1"
            style="enable-background:new 0 0 1024.7 721.1;"
            xml:space="preserve"
          >
            <g>
              <g>
                <defs>
                  <path
                    id="path7_1_"
                    d="M1003.6,114.1c-11.8-43.9-46.4-78.5-90.3-90.3C833.1,1.8,512.3,1.8,512.3,1.8s-320.7,0-400.9,21.1
                    c-43,11.8-78.5,47.3-90.3,91.2C0,194.3,0,360.6,0,360.6S0,527.7,21.1,607c11.8,43.9,46.4,78.5,90.3,90.3
                    c81,21.9,400.9,21.9,400.9,21.9s320.7,0,400.9-21.1c43.9-11.8,78.5-46.4,90.3-90.3c21.1-80.2,21.1-246.5,21.1-246.5
                    S1025.5,194.3,1003.6,114.1z"
                  />
                </defs>
                <clipPath id="path7_2_">
                  <use xlink:href="#path7_1_" style="overflow:visible;" />
                </clipPath>
                <g class="st0">
                  <path class="st1" d="M0.3,106.3V0h162.4l-50.5,212.6L0.3,106.3z" />
                  <path class="st2" d="M112.2,212.6L655,111C671.4,74.8,705.3,0,705.3,0H162.7L112.2,212.6z" />
                  <path class="st3" d="M655,111l222.5,138.3c43.3-40.2,146.8-135.3,146.8-135.3V0H703.7L655,111" />
                  <path class="st4" d="M493.3,349.5L112.2,212.6L655,111L493.3,349.5z" />
                  <path class="st5" d="M112.2,212.6l294.3,321.3l86.8-184.4L112.2,212.6z" />
                  <path class="st6" d="M0.3,106.3v324.2l395.2,73.9l10.9-12.4L0.3,106.3z" />
                  <path class="st7" d="M0.3,430.4v244.3c0,0,114.4-62.4,151.1-82.5l244.1-87.9C264,479.7,0.3,430.4,0.3,430.4z" />
                  <path class="st8" d="M0.3,674.7c0,0,114.4-62.4,151.1-82.5l519.1,45.2l270.9-133.2c24.8,12.3,82.9,41,82.9,41v175.9L0.3,721V674.7z" />
                  <path class="st9" d="M395.5,504.3l10.9-12.4l14.2-7.3l249.9,152.8l-519.1-45.2L395.5,504.3z" />
                  <path class="st10" d="M420.6,484.6l72.7-135.1l177.2,287.9L420.6,484.6z" />
                  <path class="st11" d="M941.4,504.2L670.5,637.4L493.3,349.5c0,0,123.1-183.9,161.7-238.5l222.5,138.3L941.4,504.2z" />
                  <path class="st12" d="M1024.3,114L877.5,249.3L676.8,445.8c115.5-49.3,347.5-148.3,347.5-148.3V114z" />
                  <path class="st13" d="M1024.3,545.2l-82.9-41l-264.6-58.4c115.4-49.3,347.5-148.3,347.5-148.3V545.2z" />
                </g>
              </g>
              <polygon id="polygon9" class="st14" points="676.9,360.6 410.2,206.9 410.2,514.2 	" />
            </g>
          </svg>
        </div>
      </div>
    </section>

    <!-- Back Slide 1 -->
    <back-slide
      image="https://res.cloudinary.com/little-papillon/image/upload/c_scale,w_800/v1665139470/pedia_ipsum/core/heute_hier_und_jetzt.jpg"
      bg-color="bg-lime-700"
    >
      <h2 class="text-white text-3xl font-semibold mb-2">
        Deine Digitalstrategie: "heute, hier und jetzt"
      </h2>
      <p
        class="text-white/90"
      >
        Emails, Download, Social-Media, Emails, Webvisitenkarte und vielleicht ein Theater-Blog?
      </p>
    </back-slide>

    <!-- Front Slide 1 -->
    <section class="p-20 space-y-8">
      <h3 class="text-xl mt-20">
        vielleicht betreibst Du
        <span class="font-bold text-lime-500"> Social-Media-Artistik?</span>
      </h3>
      <ul style="margin-top:4px;">
        <li>
          - fährst seriöse Kampagnen
        </li>
        <li>
          - der Flirt mit den Plattformen
        </li>
        <li>
          - oder gar mit einer "Influencer-Karriere" ;)
        </li>
        <li>
          - und hast die Sache mit dem Datenschutz irgendwie 'gut gelöst'
        </li>
      </ul>

      <h3 class="text-xl mt-20">
        vielleicht machst Du
        <span class="font-bold text-lime-500"> Getting Things Done?</span>
      </h3>
      <ul style="margin-top:4px;">
        <li>
          - Emails lesen, schreiben, beantworten
        </li>
        <li>
          - und nochmals schreiben
        </li>
        <li>
          - Inbox und Outbox, Bälle zurückspielen
        </li>
      </ul>

      <h3 class="text-xl mt-20">
        vielleicht verteilst Du
        <span class="font-bold text-lime-500">Flyer</span>
        klebst
        <span class="font-bold text-lime-500">Aufkleber</span>
        und lebst Dein nächstes Projekt?
      </h3>

      <h3 class="text-xl mt-20">
        vielleicht
        <span class="font-bold text-lime-500">...</span>
      </h3>
      <div class="flex lg:ml-20 space-x-4 lg:space-x-20">
        <div class="mt-16 lg:w-1/3 p-4 rounded-lg bg-lime-100">
          <p class="text-xl font-bold italic text-slate-500">
            Ja das Gewurschtel ist auch schön, die Theaterpädagogik verlangt uns halt auch einiges ab ...
            <span class="font-bold text-lime-500">(fleißig sein und schnell und viel?!?)</span>
          </p>
        </div>

        <div class="mt-8 lg:w-1/4 p-4 rounded-lg bg-lime-50">
          <p class="text-xl font-bold italic text-slate-500">
            Und noch eine Frage:
            <span class="font-bold text-lime-500">Sind Internetseiten etwas anderes als Aufkleber oder Flyer oder Downloads?</span>
          </p>
        </div>
      </div>
      <br><br>
      <div class="mt-8 p-4 lg:mr-56 rounded-md border-4 border-lime-700">
        <h2 class="text-xl">
          Typische Probleme bei der
          <span class="font-bold text-lime-500">Digitalisierung Theaterpädagogik</span>
        </h2>
        <ul style="margin-top:4px;">
          <li>
            - Vereinzelung am Bildschirm (Einzelkämpfer-Strategien mit halb funktionierenden Computern und rein situativen Internet-Strategien)
          </li>
          <li>
            - Ausverkauf der Persönlichkeitsrechte (z.B. durch aggressives Media-Posting aus unseren Projekten)
          </li>
          <li>
            - Vervielfachung der Infos: Mehr Infos heißt je nicht automatisch 'besser' und führt oft genug zu Verwirrung und mehrfacher Ablage, zu Verwischung und Oberflächlichkeit
          </li>
          <li>
            - an der Grenze zur Falschdarstellung > z.B. verkommt die öffentliche Visualisierung unserer Prozesse: Wir zeigen Theater anstelle von Theaterpädagogik
          </li>
          <li>
            - Formate & Formatierung: Bildergallerien, Text-Info-Blöcke, Emotions und Emoticons ersetzen keine ordentlich formatieren Termine
          </li>
        </ul>
      </div>
    </section>

    <!-- Background Slide 2 -->
    <back-slide
      image="https://res.cloudinary.com/little-papillon/image/upload/c_scale,w_800/v1665139470/pedia_ipsum/core/theaterpedia.jpg"
      bg-color="bg-lime-700"
    >
      <p
        class="text-white/90 text-lg"
      >
        es könnte so anders sein
      </p>
      <h2 class="text-white text-3xl font-semibold mb-2">
        Umkehr der Fließrichtung
      </h2>
    </back-slide>

    <!-- Front Slide 2 -->
    <section class="p-20 space-y-8 lg:mx-28">
      <h3 class="text-xl text-center">
        Wenn das Suchen Spaß macht und das Finden sich lohnt
      </h3>
      <h1 class="text-5xl text-center" style="margin-top:8px;">
        Gute Websites
      </h1>

      <h3>
        Und jetzt stell es Dir einfach mal so vor:
      </h3>
      <ol>
        <li>
          1. Es gäbe eine Website auf der alle Deine relevanten Veranstaltungen des nächsten halben Jahres mit ansprechenden Bildern und klaren Infos schnell zu finden sind
        </li>
        <li>
          2. Teilnehmende, Kooperationen, KollegInnen würden diese Website regelmäßig benutzen und hätten -wo es sinnvoll ist- die Möglichkeit, auf Details Einfluss zu nehmen
        </li>
        <li>
          3. auch andere in Deinem Umfeld (Thema, Region) würden zu ihrer Arbeit eine solche Website betreiben und ihr könntet Teile Eurer Websites 'verbinden'
        </li>
        <li>
          4. Wenn ein Projekt oder ein Kurs fertig ist, könnten Materialien, ausgewählte Bilder etc. als Vorlage für einen nächsten ähnlichen Kurs oder Projekt als 'Vorlage' nutzbar werden
        </li>
        <li>
          5. Social-Media-Kampagnen, Newsletter und ähnliches lassen sich ausgehend von der Website durchführen und nutzen dieselben Infos (es müssen also keine Daten erneut eingegeben oder hin- und herkopiert werden)
        </li>
      </ol>

      <br>
      <div class="mt-8 p-4 rounded-md border-4 border-lime-700">
        <p class="text-lg font-bold">
          Wäre das nicht schön ... oder zumindest 'extrem praktisch'?
        </p>
        <p>
          Und: Ist das nicht heutzutage 'Standard'?
        </p>
        <p>
          Es erfordert, dass wir uns mit der 'Umkehr der Fließrichtung' beschäftigen:
        </p>
        <p>
          Wie finden Menschen, die für Theaterpädagogik brennen (könnten) das, wonach sie suchen?
        </p>
        <p>
          Und wenn sie fündig werden, was passiert dann?
        </p>
      </div>
    </section>

    <!-- Background Slide 3 -->
    <back-slide
      image="https://res.cloudinary.com/little-papillon/image/upload/c_crop,g_north_east,w_1800/c_scale,w_800/v1665139609/pedia_ipsum/core/wir_streben1.jpg"
      bg-color="bg-lime-700"
    >
      <h2 class="text-white text-3xl font-semibold mb-2">
        was ist zu tun?
      </h2>
      <p
        class="text-white/90"
      >
        Am Horizont der Digitalisierung ... <span
          class="font-bold text-yellow-300"
        >
          den Fixstern finden</span>
      </p>
    </back-slide>

    <!-- Front Slide 3 -->
    <section class="center p-20 space-y-8">
      <div class="mt-8 p-4 lg:ml-20  lg:w-3/4 xl:w-2/3 rounded-md border-4 border-lime-700">
        <h2 class="mb-4 text-3xl font-bold text-left">
          Termine,
          <span class="text-3xl text-lime-500 leading-relaxeds">Termine
          </span>Termine!!
        </h2>
        <h3 class="mb-4 text-2xl font-bold text-left">
          Theaterpedia fordert eine
          <span class="text-2xl text-lime-500 leading-relaxeds">Standardisierung des Veranstaltungsprogramms
          </span>
        </h3>

        <p>
          Theaterpädagogik - das sind Veranstaltungen.<br>
          Wollen wir klar auftreten, dann brauchen wir eine klare, angemessene Planung. Hier gibt es im Feld der Theaterpädagogik einige Herausforderungen.
        </p>

        <p>
          Theaterpedia fordert hier eine Standardisierung: Sowohl innerhalb einzelner Organisationen. Vor allem aber auch: Im Zusammenspiel mehrerer Organisationen und FreiberuflerInnen. Standardisierung meint vor allem eine klare Unterscheidung, welches Format eine Veranstaltung hat:
          <br>- ein Kurs
          <br>- ein Projekt
          <br>- ein Workshop
          <br><br>Diese drei Formate haben eine verschiedene Logik und deshalb sollte auch ein Webdesign diese Formate mit einer je eigene 'Interaktion' ausstatten.
        </p>

        <a
          class="mt-8 block visible py-4 px-8 mb-4 text-md font-semibold tracking-wide leading-none text-white bg-lime-700 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
        >
          Toolbox Termine
        </a>
      </div>

      <br>
      <div class="p-4 lg:ml-20 lg:w-3/4 xl:w-2/3 rounded-md border-4 border-lime-700">
        <h2 class="mb-4 text-3xl font-bold text-left">
          Wir brauchen
          <span class="text-3xl text-lime-500 leading-relaxeds">Webdesign
          </span>
        </h2>
        <h3 class="mb-4 text-xl font-bold text-left">
          eine Handvoll Design-Vorlagen realisiert den
          <span class="text-lime-500 leading-relaxeds">Use-Case 'Theaterpädagogik'
          </span>
        </h3>

        <p>
          Wir sollten verstehen (lernen), wie es überhaupt funktioniert, mit Tastatur, Bildschirm und Maus eine Website online zu stellen. Es gibt 2-4 typische Ansätze für die Theaterpädagogik.<br>
          Am besten lernen und entscheiden wir anhand konkreter Beispiele, in der Umgebung unseres eigenen 'Use Case'. Diese lassen sich in 'Design-Vorlagen' konkretisieren und veranschaulichen. Es wäre wesentlich einfacher, wenn wir uns nicht länger mit Fotografen-Templates, Webshop-Templates oder Webvisitenkarten herumschlagen müssten.
        </p>
        <a
          class="mt-8 block visible py-4 px-8 mb-4 text-md font-semibold tracking-wide leading-none text-white bg-lime-700 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
        >
          Webdesign & Theaterpädagogik</a>
      </div>
    </section>

    <!-- Footer -->
    <app-footer />
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b;
  }
}

.st0{clip-path:url(#path7_2_);}
.st1{fill:#877C82;}
.st2{fill:#C5C0C6;}
.st3{fill:#B6B0B2;}
.st4{fill:#F1F1F0;}
.st5{fill:#C4C2C4;}
.st6{fill:#EDEDED;}
.st7{fill:#B2AAAA;}
.st8{fill:#EDECEB;}
.st9{fill:#EAE1E1;}
.st10{fill:#B4B2B3;}
.st11{fill:#E2E0E1;}
.st12{fill:#F1F1F1;}
.st13{fill:#B2B1B1;}
.st14{fill:#7A7A7A;}

</style>
