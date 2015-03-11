require("spec_helper")


  describe("#bike_diagnosis") do
    it("respones with nil when an unknown symptom is inputted") do
      expect(bike_diagnosis("Moo")).to(eql("Unknown Diagnosis"))
    end
end

  describe("#bike_diagnosis") do
    it("respones with replace tube when an flat tire symptom is inputted") do
      expect(bike_diagnosis("flat tire")).to(eql("Replace tube and possibly tire"))
    end
end

  describe("#bike_diagnosis") do
    it("respones with replace the brakes when squeaky brakes symptom is inputted") do
      expect(bike_diagnosis("squeaky brakes")).to(eql("Replace the brakes"))
    end
end

  describe("#bike_diagnosis") do
    it("respones with replace the brakes when squeaky brakes symptom is inputted") do
      expect(bike_diagnosis("wheel out of true", "squeaky brakes")).to(eql("Wheel needs trued & replace brakes"))
    end
end
