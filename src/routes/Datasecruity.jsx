import {
  Box,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useContaxt } from "../context/Context";

export function Datasecruity() {
  const { color } = useContaxt();
  return (
    <>
      <Stack
        px={[5, 5, 5, 10]}
        pb={[10, 15, 20, 20]}
        pt={"100px"}
        fontSize={20}
        textAlign="left"
      >
        <Heading
          as={"h1"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Text color="black">Datenschutzerklärung</Text>
        </Heading>
        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black"> Einleitung und allgemeine Angaben</Box>
        </Heading>
        <Text textAlign={"left"}>
          Vielen Dank für Ihr Interesse an unserer Website. Der Schutz Ihrer
          personenbezogenen Daten ist uns ein sehr wichtiges Anliegen. Im
          Folgenden finden Sie Informationen zum Umgang mit Ihren Daten, die
          durch Ihre Nutzung unserer Website erfasst werden. Die Verarbeitung
          Ihrer Daten erfolgt entsprechend den gesetzlichen Regelungen zum
          Datenschutz.
        </Text>

        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black">
            {" "}
            Verantwortliche Stelle im Sinne des Datenschutzrechts
          </Box>
        </Heading>
        <Text textAlign={"left"}>
          Erik Quint
          <br />
          moin@erikquint.de
          <br />+ 49 17631009017
        </Text>

        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black">Begriffsbestimmungen</Box>
        </Heading>
        <Text textAlign={"left"}>
          Unsere Datenschutzerklärung soll für jedermann einfach und
          verständlich sein. In dieser Datenschutzerklärung werden in der Regel
          die offiziellen Begriffe der Datenschutzgrundverordnung (DSGVO)
          verwendet. Die offiziellen Begriffsbestimmungen werden in Art. 4 DSGVO
          erläutert.
        </Text>
        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black">
            {" "}
            Datenverarbeitung durch den Besuch unserer Website
          </Box>
        </Heading>
        <Text textAlign={"left"}>
          Wenn Sie unsere Webseiten aufrufen, ist es technisch notwendig, dass
          über Ihren Internetbrowser Daten an unseren Webserver übermittelt
          werden. Folgende Daten werden während einer laufenden Verbindung zur
          Kommunikation zwischen Ihrem Internetbr/owser und unserem Webserver
          aufgezeichnet:
        </Text>
        <UnorderedList textAlign={"left"} pl={10}>
          <ListItem>Datum und Uhrzeit der Anforderung</ListItem>
          <ListItem>Name der angeforderten Datei</ListItem>
          <ListItem>Seite, von der aus die Datei angefordert wurde</ListItem>
          <ListItem>Zugriffsstatus</ListItem>
          <ListItem>
            Verwendeter Webbr/owser und verwendetes Betriebssystem
          </ListItem>
          <ListItem>
            (Vollständige) IP-Adresse des anfordernden Rechners
          </ListItem>
          <ListItem>Übertragene Datenmenge</ListItem>
        </UnorderedList>
        <Text textAlign={"left"}>
          Die aufgelisteten Daten erheben wir, um einen reibungslosen
          Verbindungsaufbau der Website zu gewährleisten und eine komfortable
          Nutzung unserer Website durch die Nutzer zu ermöglichen. Zudem dient
          die Logdatei der Auswertung der Systemsicherheit und -stabilität sowie
          administrativen Zwecken. Rechtsgrundlage für die vorübergehende
          Speicherung der Daten bzw. der Logfiles ist Art. 6 Abs. 1 lit. f
          DSGVO.
        </Text>
        <Text textAlign={"left"}>
          Aus Gründen der technischen Sicherheit, insbesondere zur Abwehr von
          Angriffsversuchen auf unseren Webserver, werden diese Daten von uns
          kurzzeitig gespeichert. Anhand dieser Daten ist uns ein Rückschluss
          auf einzelne Personen nicht möglich. Nach spätestens{" "}
          <b>
            <span>sieben Tage</span>
          </b>
          werden die Daten durch Verkürzung der IP-Adresse auf Domainebene
          anonymisiert, sodass es nicht mehr möglich ist, einen Bezug zum
          einzelnen Nutzer herzustellen.
        </Text>
        <Text textAlign={"left"}>
          In anonymisierter Form werden die Daten daneben ggf. zu statistischen
          Zwecken verarbeitet. Eine Speicherung dieser Daten zusammen mit
          anderen personenbezogenen Daten des Nutzers, ein Abgleich mit anderen
          Datenbeständen oder eine Weitergabe an Dritte findet zu keinem
          Zeitpunkt statt.
        </Text>
        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black">
            {" "}
            Kontaktformular und Kontaktaufnahme per E-Mail
          </Box>
        </Heading>
        <Text textAlign={"left"}>
          Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen,
          werden Ihre Angaben aus dem Anfrageformular bzw. Ihrer E-Mail
          inklusive der von Ihnen dort angegebenen{" "}
          <b> Vor- und Nachname, Anrede, Postanschrift </b> zwecks Bearbeitung
          der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          Die Angabe einer E-Mail-Adresse ist zur Kontaktangabe erforderlich,
          die Angabe Ihres Namens sowie Ihrer Telefonnummer ist freiwillig.
          Diese Daten geben wir in keinem Fall ohne Ihre Einwilligung weiter.
          Rechtsgrundlage für die Verarbeitung der Daten ist unser berechtigtes
          Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit.
          f DSGVO sowie ggf. Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf
          den Abschluss eines Vertrages abzielt. Ihre Daten werden nach
          abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine
          gesetzlichen Aufbewahrungspflichten entgegenstehen. Sie können im
          Falle von Art. 6 Abs. 1 lit. f DSGVO gegen die Verarbeitung Ihrer
          personenbezogenen Daten jederzeit Widerspruch einlegen.
        </Text>
        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black"> Google Analytics</Box>
        </Heading>
        <Text textAlign={"left"}>
          Unsere Website nutzt Google Analytics, einen Internetanalysedienst,
          der von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
          Irland ("Google") zur Verfügung gestellt wird. Google Analytics
          verwendet sogenannte "Cookies".{" "}
        </Text>
        <Text textAlign={"left"}>
          Google wird diese Informationen im Auftrag des Betreibers dieser
          Website benutzen, um Ihre Nutzung der Website auszuwerten und um
          Reports über die Websiteaktivitäten zu erstellen. Google wird diese
          Informationen auch dazu verwenden, dem Website-Betreiber weitere, mit
          der Nutzung der Website und des Internets verbundene, Dienstleistungen
          zu erbr/ingen. Die von Ihrem br/owser im Rahmen von Google Analytics
          gesendete IP-Adresse wird nicht mit anderen Daten von Google
          kombiniert. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO
          auf Grundlage unseres berechtigten Interesses an der statistischen
          Analyse des Nutzerverhaltens zu Optimierungs- und Marketingzwecken.
        </Text>
        <Text textAlign={"left"}>
          Wir verwenden Google Analytics nur mit aktivierter IP-Anonymisierung.
          Das bedeutet, Ihre IP-Adresse wird von Google nur gekürzt
          weiterverarbeitet. Wir haben mit dem Dienstleister einen
          Auftragsverarbeitungsvertrag geschlossen, in welchem wir ihn
          verpflichten, die Daten unserer Kunden zu schützen und sie nicht an
          Dritte weiterzugeben. Da eine Übertragung personenbezogener Daten in
          die USA erfolgt, sind weitere Schutzmechanismen erforderlich, die das
          Datenschutzniveau der DSGVO sicherstellen. Um dies zu gewährleisten,
          haben wir mit dem Anbieter Standarddatenschutzklauseln gemäß Art. 46
          Abs. 2 lit. c DSGVO vereinbart. Diese verpflichten den Empfänger der
          Daten in den USA die Daten entsprechend dem Schutzniveau in Europa zu
          verarbeiten. In Fällen, in denen dies auch durch diese vertragliche
          Erweiterung nicht sichergestellt werden kann, bemühen wir uns um
          darüberhinausgehende Regelungen und Zusagen des Empfängers in den USA.
          Die Nutzungsbedingungen von Google Analytics und Informationen zum
          Datenschutz können über die folgenden Links abgerufen werden:
          <a
            href="http://www.google.com/analytics/terms/de.html"
            rel="nofollow"
            target="_blank"
          >
            http://www.google.com/analytics/terms/de.html
          </a>
          <a
            href="https://www.google.de/intl/de/policies/"
            rel="nofollow"
            target="_blank"
          >
            https://www.google.de/intl/de/policies/
          </a>
          <br />
          Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
          ihrer Erhebung nicht mehr erforderlich sind. Eine Löschung der Daten
          auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z. B.
          User-ID) und Werbe-IDs (z. B. DoubleClick-Cookies, Android-Werbe-ID,
          IDFA [Apple-Kennung für Werbetreibende]) verknüpft sind erfolgt
          spätestens 14 Monate nach ihrer Erhebung.
          <br />
          Sie können das Speichern von Cookies verhindern, indem Sie die
          Einstellungen Ihrer br/owser-Software entsprechend anpassen. Wir
          weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
          nicht alle Funktionen dieser Website uneingeschränkt nutzen können.
          Sie können auch verhindern, dass Google die durch den Cookie erzeugten
          Daten sammelt und Ihre Nutzung der Website (einschließlich Ihrer
          IP-Adresse) analysiert und diese Daten durch Google verarbeitet, indem
          Sie das br/owser-Plugin herunterladen und installieren, das unter{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=de"
            rel="nofollow"
            target="_blank"
          >
            https://tools.google.com/dlpage/gaoptout?hl=de
          </a>
          verfügbar ist.
        </Text>
        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black">Cookies</Box>
        </Heading>
        <Text textAlign={"left"}>
          Unsere Website setzt Cookies ein, die vom br/owser auf Ihrem Gerät
          gespeichert werden und die bestimmte Einstellungen zur Nutzung der
          Website enthalten (z. B. zur laufende Sitzung). Cookies dienen dazu,
          unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
          und die Ihr br/owser speichert. Die meisten der von uns verwendeten
          Cookies sind so genannte Session-Cookies, welche nach dem Schließen
          des br/owsers automatisch gelöscht werden. Andere Cookies bleiben auf
          Ihrem Endgerät gespeichert, bis Sie diese löschen oder die
          Speicherdauer abläuft. Diese Cookies ermöglichen es uns, Ihren
          br/owser beim nächsten Besuch wiederzuerkennen.
        </Text>
        <Text textAlign={"left"}>
          Teilweise dienen die Cookies dazu, durch Speicherung von Einstellungen
          Websiteprozesse zu vereinfachen (z. B. das Vorhalten bereits
          ausgewählter Optionen). Sofern durch einzelne von uns implementierte
          Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die
          Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur
          Durchführung des Vertrages oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur
          Wahrung unserer berechtigten Interessen an der bestmöglichen
          Funktionalität der Website sowie einer kundenfreundlichen und
          effektiven Ausgestaltung des Seitenbesuchs. Sie können Ihren br/owser
          so einstellen, dass Sie über das Setzen von Cookies informiert werden
          und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für
          bestimmte Fälle oder generell ausschließen sowie das automatische
          Löschen der Cookies beim Schließen des br/owsers aktivieren. Die
          Cookie Einstellungen können unter den folgenden Links für die
          jeweiligen br/owser verwaltet werden.
        </Text>
        <UnorderedList textAlign={"left"} pl={10}>
          <ListItem>
            Firefox:{" "}
            <a
              href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
              target="_blank"
              rel="nofollow"
            >
              https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
            </a>
          </ListItem>
          <ListItem>
            Internet Explorer:{" "}
            <a
              href="http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies"
              target="_blank"
              rel="nofollow"
            >
              http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies
            </a>
          </ListItem>
          <ListItem>
            Chrome:{" "}
            <a
              href="http://support.google.com/chrome/bin/answer.py?hl=de&amp;hlrm=en&amp;answer=95647"
              target="_blank"
              rel="nofollow"
            >
              http://support.google.com/chrome/bin/answer.py?hl=de&amp;hlrm=en&amp;answer=95647
            </a>
          </ListItem>
          <ListItem>
            Safari:{" "}
            <a
              href="https://support.apple.com/kb/ph21411?locale=de_DE"
              target="_blank"
              rel="nofollow"
            >
              https://support.apple.com/kb/ph21411?locale=de_DE
            </a>
          </ListItem>
          <ListItem>
            Opera:{" "}
            <a
              href="https://help.opera.com/en/latest/web-preferences/#cookies"
              target="_blank"
              rel="nofollow"
            >
              https://help.opera.com/en/latest/web-preferences/#cookies
            </a>
          </ListItem>
        </UnorderedList>
        <Text textAlign={"left"}>
          Sie können auch die Cookies vieler Unternehmen und Funktionen einzeln
          verwalten, die für Werbung eingesetzt werden. Verwenden Sie dazu die
          entsprechenden Nutzertools, abr/ufbar unter{" "}
          <a
            href="https://www.aboutads.info/choices/"
            rel="nofollow"
            target="_blank"
          >
            https://www.aboutads.info/choices/
          </a>
          oder{" "}
          <a
            href="http://www.youronlinechoices.com/uk/your-ad-choices"
            rel="nofollow"
            target="_blank"
          >
            http://www.youronlinechoices.com/uk/your-ad-choices
          </a>
          Die meisten br/owser bieten zudem eine sog. „Do-Not-Track-Funktion“
          an, mit der Sie angeben können, dass Sie nicht von Websites „verfolgt“
          werden möchten. Wenn diese Funktion aktiviert ist, teilt der jeweilige
          br/owser Werbenetzwerken, Websites und Anwendungen mit, dass Sie nicht
          zwecks verhaltensbasierter Werbung und Ähnlichem verfolgt werden
          möchten. Informationen und Anleitungen, wie Sie diese Funktion
          bearbeiten können, erhalten Sie je nach Anbieter Ihres br/owsers,
          unter den nachfolgenden Links:
        </Text>
        <UnorderedList textAlign={"left"} pl={10}>
          <ListItem>
            Google Chrome:{" "}
            <a
              href="https://support.google.com/chrome/answer/2790761?co=GENIE.Platform%3DDesktop&amp;hl=de"
              target="_blank"
              rel="nofollow"
            >
              https://support.google.com/chrome/answer/2790761?co=GENIE.Platform%3DDesktop&amp;hl=de
            </a>
          </ListItem>
          <ListItem>
            Mozilla Firefox:{" "}
            <a
              href="https://www.mozilla.org/de/firefox/dnt/"
              target="_blank"
              rel="nofollow"
            >
              https://www.mozilla.org/de/firefox/dnt/
            </a>
          </ListItem>
          <ListItem>
            Internet Explorer:{" "}
            <a
              href="https://support.microsoft.com/de-de/help/17288/windows-internet-explorer-11-use-do-not-track"
              target="_blank"
              rel="nofollow"
            >
              https://support.microsoft.com/de-de/help/17288/windows-internet-explorer-11-use-do-not-track
            </a>
          </ListItem>
          <ListItem>
            Opera:{" "}
            <a
              href="http://help.opera.com/Windows/12.10/de/notrack.html"
              target="_blank"
              rel="nofollow"
            >
              http://help.opera.com/Windows/12.10/de/notrack.html
            </a>
          </ListItem>
          <ListItem>
            Safari:{" "}
            <a
              href="https://support.apple.com/kb/PH21416?locale=de_DE"
              target="_blank"
              rel="nofollow"
            >
              https://support.apple.com/kb/PH21416?locale=de_DE
            </a>
          </ListItem>
        </UnorderedList>
        <Text textAlign={"left"}>
          Zusätzlich können Sie standardmäßig das Laden sog. Scripts verhindern.
          NoScript erlaubt das Ausführen von JavaScripts, Java und anderen
          Plug-ins nur bei vertrauenswürdigen Domains Ihrer Wahl. Informationen
          und Anleitungen, wie Sie diese Funktion bearbeiten können, erhalten
          Sie über den Anbieter Ihres br/owsers (z. B. für Mozilla Firefox
          unter:{" "}
          <a
            href="https://addons.mozilla.org/de/firefox/addon/noscript/"
            rel="nofollow"
            target="_blank"
          >
            https://addons.mozilla.org/de/firefox/addon/noscript/
          </a>
          ). Bitte beachten Sie, dass bei der Deaktivierung von Cookies die
          Funktionalität dieser Website eingeschränkt sein kann.
        </Text>

        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black"> Datenweitergabe und Empfänger</Box>
        </Heading>
        <Text textAlign={"left"}>
          Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet nicht
          statt, außer
        </Text>
        <UnorderedList textAlign={"left"} pl={10}>
          <ListItem>
            wenn wir in der Beschreibung der jeweiligen Datenverarbeitung
            explizit darauf hingewiesen haben.
          </ListItem>
          <ListItem>
            wenn Sie ausdrückliche Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a
            DSGVO dazu erteilt haben,
          </ListItem>
          <ListItem>
            die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein
            überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer
            Daten haben,
          </ListItem>
          <ListItem>
            im Falle, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c
            DSGVO eine gesetzliche Verpflichtung besteht und
          </ListItem>
          <ListItem>
            soweit dies nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung
            von Vertragsverhältnissen mit Ihnen erforderlich ist.
          </ListItem>
        </UnorderedList>
        <Text textAlign={"left"}>
          Wir nutzen darüber hinaus für die Abwicklung unserer Services externe
          Dienstleister, die wir sorgfältig ausgewählt und schriftlich
          beauftragt haben. Sie sind an unsere Weisungen gebunden und werden von
          uns regelmäßig kontrolliert. Mit welchen wir erforderlichenfalls
          Auftragsverarbeitungsverträge gem. Art. 28 DSGVO geschlossen haben.
          Diese sind Dienstleister für das Webhosting, den Versand von E-Mails
          sowie Wartung und Pflege unserer IT-Systemen usw. Die Dienstleister
          werden diese Daten nicht an Dritte weitergeben.
        </Text>

        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black">Datensicherheit</Box>
        </Heading>
        <Text textAlign={"left"}>
          Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des
          Stands der Technik, der Implementierungskosten und der Art, des
          Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
          unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos
          für die Rechte und Freiheiten natürlicher Personen, geeignete
          technische und organisatorische Maßnahmen, um ein dem Risiko
          angemessenes Schutzniveau zu gewährleisten. Diese Webseite nutzt aus
          Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher
          Inhalte eine SSL-Verschlüsselung.
        </Text>

        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black">
            {" "}
            Dauer der Speicherung personenbezogener Daten
          </Box>
        </Heading>
        <Text textAlign={"left"}>
          Die Dauer der Speicherung von personenbezogenen Daten bemisst sich an
          den einschlägigen gesetzlichen Aufbewahrungsfristen (z. B. aus dem
          Handelsrecht und dem Steuerrecht). Nach Ablauf der jeweiligen Frist
          werden die entsprechenden Daten routinemäßig gelöscht. Sofern Daten
          zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind oder
          unsererseits ein berechtigtes Interesse an der Weiterspeicherung
          besteht, werden die Daten gelöscht, wenn Sie zu diesen Zwecken nicht
          mehr erforderlich sind oder Sie von Ihrem Widerrufs- oder
          Widerspruchsrecht Gebr/auch gemacht machen.
        </Text>

        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black"> Ihre Rechte</Box>
        </Heading>
        <Text textAlign={"left"}>
          Im Folgenden finden Sie Informationen dazu, welche Betroffenenrechte
          das geltende Datenschutzrecht Ihnen gegenüber dem Verantwortlichen
          hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten gewährt:
        </Text>
        <Text textAlign={"left"}>
          Das Recht, gemäß Art. 15 DSGVO Auskunft über Ihre von uns
          verarbeiteten personenbezogenen Daten zu verlangen.
          <br />
          Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die
          Kategorie der personenbezogenen Daten, die Kategorien von Empfängern,
          gegenüber denen Ihre Daten offengelegt wurden oder werden, die
          geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung,
          Löschung, Einschränkung der Verarbeitung oder Widerspruch, das
          Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern
          diese nicht bei uns erhoben wurden, sowie über das Bestehen einer
          automatisierten Entscheidungsfindung einschließlich Profiling und ggf.
          aussagekräftigen Informationen zu deren Einzelheiten verlangen.
        </Text>
        <Text textAlign={"left"}>
          Das Recht, gemäß Art. 16 DSGVO unverzüglich die Berichtigung
          unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten
          personenbezogenen Daten zu verlangen.
        </Text>
        <Text textAlign={"left"}>
          Das Recht, gemäß Art. 17 DSGVO die Löschung Ihrer bei uns
          gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die
          Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und
          Information, zur Erfüllung einer rechtlichen Verpflichtung, aus
          Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen erforderlich ist.
        </Text>
        <Text textAlign={"left"}>
          Das Recht, gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung
          Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der
          Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist,
          Sie aber deren Löschung ablehnen und wir die Daten nicht mehr
          benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21
          DSGVO Widerspruch gegen die Verarbeitung eingelegt haben.
        </Text>
        <Text textAlign={"left"}>
          Das Recht, gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie
          uns bereitgestellt haben, in einem strukturierten, gängigen und
          maschinenlesebaren Format zu erhalten oder die Übermittlung an einen
          anderen Verantwortlichen zu verlangen.
        </Text>
        <Text textAlign={"left"}>
          Das Recht, sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde zu
          beschweren. In der Regel können Sie sich hierfür an die
          Aufsichtsbehörde des Bundeslandes unseres oben angegebenen Sitzes oder
          ggf. die Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes wenden.
        </Text>
        <Text textAlign={"left"}>
          Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO:
          Sie haben das Recht, eine einmal erteilte Einwilligung in die
          Verarbeitung von Daten jederzeit mit Wirkung für die Zukunft zu
          widerrufen. Im Falle des Widerrufs werden wir die betroffenen Daten
          unverzüglich löschen, sofern eine weitere Verarbeitung nicht auf eine
          Rechtsgrundlage zur einwilligungslosen Verarbeitung gestützt werden
          kann. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der
          aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung
          nicht berührt.
        </Text>

        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black">Widerspruchsrecht</Box>
        </Heading>
        <Text textAlign={"left"} p>
          Sofern Ihre personenbezogenen Daten von uns auf Grundlage von
          berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO
          verarbeitet werden, haben Sie gemäß Art. 21 DSGVO das Recht,
          Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten
          einzulegen, soweit dies aus Gründe erfolgt, die sich aus Ihrer
          besonderen Situation ergeben. Soweit sich der Widerspruch gegen die
          Verarbeitung personenbezogener Daten zum Zwecke von Direktwerbung
          richtet, haben Sie ein generelles Widerspruchsrecht ohne das
          Erfordernis der Angabe einer besonderen Situation. Möchten Sie von
          Ihrem Widerrufs- oder Widerspruchsrecht Gebr/auch machen, genügt eine
          E-Mail{" "}
          <span>
            <a
              aria-label={`Schreib mir eine E-Mail`}
              href="mailto: moin@erikquint.de"
            >
              moin@erikquint.de
            </a>
          </span>
          .
        </Text>
        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black"> Externe Verlinkungen</Box>
        </Heading>
        <Text textAlign={"left"}>
          Soziale Netzwerke (Facebook, Twitter, Xing etc.) sind auf unserer
          Webseite lediglich als Link zu den entsprechenden Diensten
          eingebunden. Nach dem Anklicken des eingebundenen Text-/Bild-Links
          werden Sie auf die Seite des jeweiligen Anbieters weitergeleitet. Erst
          nach der Weiterleitung werden Nutzerinformationen an den jeweiligen
          Anbieter übertragen. Informationen zum Umgang mit Ihren
          personenbezogenen Daten bei Nutzung dieser Webseiten entnehmen Sie
          bitte den jeweiligen Datenschutzbestimmungen der von Ihnen genutzten
          Anbieter.{" "}
        </Text>

        <Heading
          as={"h3"}
          style={{ color: color.mainColor, textDecoration: "underline" }}
        >
          <Box color="black"> Änderungsvorbehalt</Box>
        </Heading>
        <Text textAlign={"left"}>
          Wir behalten uns vor, diese Datenschutzerklärung erforderlichenfalls
          unter Beachtung der geltenden Datenschutzvorschriften anzupassen bzw.
          zu aktualisieren. Auf diese Weise können wir sie den aktuellen
          rechtlichen Anforderungen anpassen und Änderungen unserer Leistungen
          berücksichtigen, z. B. bei der Einführung neuer Services. Für Ihren
          Besuch gilt die jeweils aktuellste Fassung.
        </Text>
        <Text textAlign={"left"}>
          Diese Datenschutzerklärung wurde erstellt durch{" "}
          <a
            aria-label={`Gehe zu datenschutzexperte.de`}
            href="https://www.datenschutzexperte.de/"
            rel={"nofollow"}
          >
            www.datenschutzexperte.de
          </a>
        </Text>

        <p>
          Stand dieser Datenschutzerklärung: <span>8.9.2022</span>
        </p>
      </Stack>
    </>
  );
}
