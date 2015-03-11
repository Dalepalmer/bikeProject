require 'json'

def bike_diagnosis symptom
  # symptoms.each do symptom
    case symptom
    when "squeaky brakes"
      puts "Replace the brakes"
    when "flat tire"
      puts "Replace tube and possibly tire"
    when "squeaky drivetrain"
      puts "Chains need lubrication, and a possibly tune up"
    when "wheel out of true"
      puts "Wheel needs trued"
    end
  end
# end
