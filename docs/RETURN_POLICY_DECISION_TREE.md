# Return Policy Decision Tree Specifications
**Owner:** Charity-gis  
**Sprint Deliverable:** Support Deflection MVP (Returns & Refunds Logic)

## Rules & Validation Matrix
1. **Category Check:** Checks if item is marked `final_sale` or non-returnable.
2. **Time Window:** Validates that delivery date is within 30 days.
3. **Reason Assessment:**
   - Damaged/Wrong Item -> $0 fee + free prepaid label.
   - Changed Mind/Sizing -> $5 fee deducted from refund.
4. **Refund Method:** Original payment (3-5 days) vs. Store Credit (Instant).