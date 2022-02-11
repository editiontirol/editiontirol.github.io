module Jekyll
  module Money
    def format_price(value, type="div", separator=",")
      "#{value.to_i}#{separator}#{format("%02d", value * 100 % 100)} €"
    end
  end
end

Liquid::Template.register_filter(Jekyll::Money)
