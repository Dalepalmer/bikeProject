require 'json'
require 'spec_helper'


def bike_diagnosis symptom
    symptom.downcase()
    case symptom
    when "squeaky brakes"
      return "Replace the brakes"
    when "flat tire"
      return "Replace tube and possibly tire"
    when "squeaky drivetrain"
      return "Chains need lubrication, and a possibly tune up"
    when "wheel out of true"
      return "Wheel needs trued"
    when "wheel out of true"
      return "Wheel needs trued"
    when "wheel out of true", "squeaky brakes"
      return "Wheel needs trued & replace brakes"
    else
      return "Unknown Diagnosis"
    end
  end
