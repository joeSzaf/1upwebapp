var MedicationOrder = {
  "resourceType": "MedicationOrder",
  "id": "f001",
  "text": {
    "status": "generated",
    "div": "<div><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: order9837293 (OFFICIAL)</p><p><b>dateWritten</b>: 25/05/2013 7:32:52 PM</p><p><b>status</b>: active</p><p><b>patient</b>: <a>P. van den Heuvel</a></p><p><b>prescriber</b>: <a>R.A. van den Berk</a></p><p><b>encounter</b>: <a>visit who leads to this priscription</a></p><p><b>reason</b>: Chronic obstructive pulmonary disease <span>(Details : {SNOMED CT code '13645005' = '13645005', given as 'Chronic obstructive pulmonary disease'})</span></p><p><b>medication</b>: <a>prescribed medication</a></p><h3>DosageInstructions</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>AdditionalInstructions</b></td><td><b>Timing</b></td><td><b>Site[x]</b></td><td><b>Route</b></td><td><b>Dose[x]</b></td></tr><tr><td>*</td><td>3 tot 4 maal daags 1 flacon</td><td>for use during pregnancy, contact physician <span>(Details )</span></td><td>Starting 04/08/2013, Do 3 per 1 days, Until 05/11/2013</td><td>Entire oral cavity <span>(Details : {SNOMED CT code '181220002' = '181220002', given as 'Entire oral cavity'})</span></td><td>oral administration of treatment <span>(Details : {SNOMED CT code '394899003' = '394899003', given as 'oral administration of treatment'})</span></td><td>10 ml<span> (Details: http://unitsofmeasure.org code ml = '??')</span></td></tr></table><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>08/04/2013 --&gt; 30/05/2013</td><td>20</td><td>100 mcg<span> (Details: urn:oid:2.16.840.1.113883.6.8 code ug = '??')</span></td><td>40 days<span> (Details: urn:oid:2.16.840.1.113883.6.8 code d = '??')</span></td></tr></table></div>"
  },
  "identifier": [
    {
      "use": "official",
      "system": "http://www.bmc/portal/prescriptions",
      "value": "order9837293"
    }
  ],
  "dateWritten": "2013-05-25T19:32:52+01:00",
  "status": "active",
  "patient": {
    "reference": "Patient/f001",
    "display": "P. van den Heuvel"
  },
  "prescriber": {
    "reference": "Practitioner/f006",
    "display": "R.A. van den Berk"
  },
  "encounter": {
    "reference": "Encounter/f001",
    "display": "visit who leads to this priscription"
  },
  "reasonCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "13645005",
        "display": "Chronic obstructive pulmonary disease"
      }
    ]
  },
  "medicationReference": {
    "reference": "Medication/f001",
    "display": "prescribed medication"
  },
  "dosageInstruction": [
    {
      "text": "3 tot 4 maal daags 1 flacon",
      "additionalInstructions": {
        "text": "for use during pregnancy, contact physician"
      },
      "timing": {
        "repeat": {
          "boundsPeriod": {
            "start": "2013-08-04",
            "end": "2013-11-05"
          },
          "frequency": 3, 
          "period": 1,
          "periodUnits": "d"
        }
      },
      "siteCodeableConcept": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "181220002",
            "display": "Entire oral cavity"
          }
        ]
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394899003",
            "display": "oral administration of treatment"
          }
        ]
      },
      "doseQuantity": {
        "value": 10,
        "unit": "ml",
        "system": "http://unitsofmeasure.org",
        "code": "ml"
      }
    }
  ],
  "dispenseRequest": {
    "validityPeriod": {
      "start": "2013-04-08",
      "end": "2013-05-30"
    },
    "numberOfRepeatsAllowed": 20,
    "quantity": {
      "value": 100,
      "unit": "mcg",
      "system": "urn:oid:2.16.840.1.113883.6.8",
      "code": "ug",
      "_code": {
        "fhir_comments": [
          "   http://unitsofmeasure.org (UCUM code system)   "
        ]
      }
    },
    "expectedSupplyDuration": {
      "value": 40,
      "unit": "days",
      "system": "urn:oid:2.16.840.1.113883.6.8",
      "code": "d",
      "_code": {
        "fhir_comments": [
          "   http://unitsofmeasure.org (UCUM code system)   "
        ]
      }
    }
  }
}


export default MedicationOrder;