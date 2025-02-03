# Fallstudie zum Datenschutz: Gesundheits-App "FitTrack Pro"

## 1. Erfasste Daten und ihre Klassifizierung

Die mobile App "FitTrack Pro" sammelt die folgenden Daten der Nutzer:

- **Name**: Dies ist eine Identifikation des Nutzers und gilt als **personenbezogene Daten**.
- **Alter**: Auch das Alter ist ein personenbezogenes Datum, da es in Kombination mit anderen Informationen zur Identifizierung einer Person beitragen kann.
- **Gesundheitsdaten (Herzfrequenz, Schlafzeiten)**: Diese Daten gelten als **sensible personenbezogene Daten** gemäß der Datenschutz-Grundverordnung (DSGVO). Gesundheitsdaten sind besonders schützenswert und unterliegen strengeren Auflagen.
- **Standortdaten für Aktivitätstracking**: Standortdaten gelten als **personenbezogene Daten**, da sie eine Identifizierung einer Person im realen Raum ermöglichen können. In Verbindung mit anderen Daten, wie z.B. dem Aktivitätslevel oder Gesundheitsdaten, können Standortdaten die Identität eines Nutzers indirekt offenbaren.

## 2. Anonymisierung und Pseudonymisierung: Einsatzmöglichkeiten

### 2.1 **Anonymisierung**

**Definition:** Anonymisierung bedeutet, dass personenbezogene Daten so verändert werden, dass die betroffene Person nicht mehr identifizierbar ist, auch nicht durch den Einsatz zusätzlicher Informationen.

- **Sinnvoller Einsatz in der App:** Eine vollständige Anonymisierung der Daten könnte durch die Entfernung von direkt identifizierenden Merkmalen wie Name und Alter erfolgen. Beispielsweise könnten Gesundheitsdaten und Standortdaten ohne jegliche Verknüpfung zu einem individuellen Nutzer gesammelt und ausgewertet werden. Eine Anonymisierung könnte für aggregierte Auswertungen oder Forschung verwendet werden, ohne dass individuelle Nutzer identifizierbar sind.
  
- **Praktische Herausforderung:** Die Anonymisierung könnte die Funktionalität der App einschränken, da personalisierte Gesundheitsberichte auf Basis der individuellen Daten erstellt werden. Die Nutzer würden keine maßgeschneiderte Rückmeldung zu ihrer Gesundheit erhalten.

### 2.2 **Pseudonymisierung**

**Definition:** Pseudonymisierung ist der Prozess, bei dem personenbezogene Daten so verarbeitet werden, dass sie ohne zusätzliche Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können.

- **Sinnvoller Einsatz in der App:** Die App könnte eine Pseudonymisierung der erfassten Daten vornehmen, indem beispielsweise der Name des Nutzers durch eine zufällig generierte Nutzer-ID ersetzt wird. Alle Gesundheitsdaten und Standortinformationen würden weiterhin aufgezeichnet, jedoch ohne direkten Bezug zur Person. Die Verbindung zwischen den Daten und der tatsächlichen Identität könnte nur durch einen separaten Schlüssel (z.B. in einer sicheren Datenbank) wiederhergestellt werden.

- **Praktische Umsetzung:** Eine Pseudonymisierung würde es der App ermöglichen, die gesammelten Daten weiterhin zu nutzen, um personalisierte Gesundheitsberichte zu erstellen und Nutzer zu analysieren, ohne dass die Identität der Nutzer ohne weiteres zugänglich ist. Diese Methode könnte besonders in Fällen der Datenanalyse oder für Forschungszwecke sinnvoll sein.

### 2.3 **Vergleich und Fazit**

- **Anonymisierung** würde den höchsten Datenschutzgrad bieten, da eine Identifikation der Person vollständig verhindert würde. Allerdings könnte dies die Funktionalität der App einschränken.
- **Pseudonymisierung** bietet eine gute Balance zwischen Datenschutz und Funktionalität, da die Nutzer weiterhin personalisierte Berichte erhalten können, ohne dass ihre Identität direkt zugänglich ist.

In der Praxis ist **Pseudonymisierung** die geeignetere Methode, da sie den Schutz der personenbezogenen Daten gewährleistet und gleichzeitig die wichtigsten Funktionen der App erhalten bleiben.
